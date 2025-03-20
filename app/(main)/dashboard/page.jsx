import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";

const IndustryInsightsPage = async () => {
  try {
    const { isOnboarded } = await getUserOnboardingStatus();

    if (!isOnboarded) {
      return redirect('/onboarding');
    }

    return <div>IndustryInsightsPage</div>;
  } catch (error) {
    console.error("Error fetching onboarding status:", error.message);
    return redirect('/onboarding'); // Redirect if error occurs
  }
};

export default IndustryInsightsPage;
