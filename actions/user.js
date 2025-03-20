"use server";

import { db } from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";
import { generateAIInsights } from "./dashboard";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

/**
 * Ensures a user exists in the database for the authenticated Clerk user
 * Creates one if it doesn't exist with race condition handling
 */
export async function ensureUserExists() {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");
  
  // First, try to find the existing user
  const existingUser = await db.user.findUnique({
    where: { ClerkUserId: userId },
  });
  
  // If user already exists, return it
  if (existingUser) {
    return { created: false, user: existingUser };
  }
  
  // User doesn't exist, get email from Clerk
  const clerkUser = await currentUser();
  let userEmail = `${userId}@example.com`; // Default fallback
  
  if (clerkUser?.emailAddresses?.length > 0) {
    const primaryEmail = clerkUser.emailAddresses.find(email => email.id === clerkUser.primaryEmailAddressId);
    userEmail = primaryEmail?.emailAddress || clerkUser.emailAddresses[0].emailAddress || userEmail;
  }
  
  try {
    // Try to create the user
    const newUser = await db.user.create({
      data: {
        ClerkUserId: userId,
        email: userEmail,
        industry: null,
        experience: null,
        bio: null, 
        skills: [],
      },
    });
    return { created: true, user: newUser };
  } catch (error) {
    // Handle unique constraint violation (race condition)
    if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
      // Another process created the user while we were trying to create it
      // Fetch the user that was just created
      const justCreatedUser = await db.user.findUnique({
        where: { ClerkUserId: userId },
      });
      
      if (justCreatedUser) {
        return { created: false, user: justCreatedUser };
      }
    }
    
    // Re-throw other errors
    throw error;
  }
}

/**
 * Updates a user's profile information and generates industry insights if needed
 */
export async function updateUser(data) {
  const { userId } = await auth();
  if (!userId) throw new Error("Unauthorized");
  
  // First ensure the user exists
  const { user } = await ensureUserExists();
  
  try {
    const result = await db.$transaction(
      async (tx) => {
        // Find the industry insights
        let industryInsight = await tx.industryInsight.findUnique({
          where: {
            industry: data.industry,
          },
        });
        
        // If the industry doesn't exist, create it with default values
        if (!industryInsight) {
          const insights = await generateAIInsights(data.industry);
          
          industryInsight = await tx.industryInsight.create({
            data: {
              industry: data.industry,
              ...insights,
              nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
            },
          });
        }
        
        // Update the user
        const updatedUser = await tx.user.update({
          where: {
            id: user.id,
          },
          data: {
            industry: data.industry,
            experience: data.experience,
            bio: data.bio,
            skills: data.skills,
          },
        });
        
        return { user: updatedUser, industryInsight };
      },
      {
        timeout: 10000,
      }
    );
    
    return { success: true, ...result };
  } catch (error) {
    console.error("Error updating user and industry:", error.message);
    throw new Error("Failed to update profile");
  }
}

/**
 * Gets a user's onboarding status with race condition handling
 */
export async function getUserOnboardingStatus() {
  try {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");
    
    // Use ensureUserExists to handle any race conditions
    const { user } = await ensureUserExists();
    
    return { isOnboarded: !!user.industry };
  } catch (error) {
    console.error("Error checking onboarding status:", error.message);
    throw new Error("Failed to check onboarding status");
  }
}

/**
 * Call this function on initial app load to ensure user records exist
 */
export async function initializeUserRecord() {
  try {
    const result = await ensureUserExists();
    return result;
  } catch (error) {
    console.error("Failed to initialize user record:", error.message);
    return { error: error.message };
  }
}