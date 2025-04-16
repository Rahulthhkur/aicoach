"use client"

import Link from 'next/link'
// Import useState and useEffect from React
import React, { useEffect, useRef, useState } from 'react'
import { Button } from './button' // Assuming './button' is the correct path
import Image from 'next/image'
import CoverDemo from './cover-demo' // Assuming './cover-demo' is the correct path

import { ArrowRight,PlayCircle,Check, Globe, BrainCircuit, Briefcase, Rocket, Target, LightbulbIcon, Phone, Linkedin, Mail } from 'lucide-react';

// Import Shadcn Dialog components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter, // Import DialogFooter if you want a dedicated footer section
  DialogClose,  // Import DialogClose for an easy close button
} from "@/components/ui/dialog" // Adjust path if your ui components are elsewhere

const Herosection = () => {

    const imageRef = useRef(null);
    // --- Popup State ---
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // --- Scroll Effect ---
    useEffect(() => {
      const imageElement = imageRef.current;
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const scrollThreshold = 100;
        if (imageElement) {
            if (scrollPosition > scrollThreshold) {
                imageElement.classList.add("scrolled");
              } else {
                imageElement.classList.remove("scrolled");
              }
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // --- Popup Trigger Effect ---
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsPopupOpen(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
    <section className='w-full pt-36 md:pt-48 pb-10 relative'>
        {/* ... (rest of your hero content) ... */}
        <div className='space-y-6 text-center'>
            <div className='space-y-6 mx-auto'>
                <h1 className='text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title'>Transforming Careers Through
                    <br />
                    AI Mentorship
                </h1>
                <CoverDemo/>
            </div>

            <div className='flex flex-col items-center gap-4'>
                <div className='flex flex-wrap justify-center gap-4'>
                    <Link href='/dashboard'>
                    <Button size='lg' className='px-8 h-14 rounded-xl shadow-lg shadow-gray-800/20 font-medium transition-all duration-300 hover:scale-105'>
                        Get Started
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    </Link>
                    <Link href='https://www.youtube.com/'> {/* Consider updating this link */}
                    <Button size='lg' className='px-8 h-14 rounded-xl font-medium transition-all duration-300 hover:scale-105' variant="outline">
                        <PlayCircle className="mr-2 h-5 w-5" />
                        Watch Demo
                    </Button>
                    </Link>
                </div>
            </div>

            <div className='hero-image-wrapper mt-10 md:mt-12'>
                <div ref={imageRef} className='hero-image'>
                    <Image
                    src={'/banner.jpeg'}
                    width={1280}
                    height={720}
                    alt='banner neurovoyageai'
                    className='rounded-lg shadow-2xl border mx-auto'
                    priority
                    />
                </div>
            </div>
        </div>

        {/* --- Popup Dialog Definition --- */}
  <Dialog open={isPopupOpen} onOpenChange={setIsPopupOpen}>
  <DialogContent className="sm:max-w-md max-w-[95vw] p-0 overflow-hidden border shadow-md">
    {/* Simplified Header with Better Contrast */}
    <div className="bg-secondary p-4 sm:p-6">
      <div className="flex items-center space-x-3">
        <div className="bg-white/20 p-2 rounded-full">
          <BrainCircuit className="h-5 w-5 text-white" />
        </div>
        <DialogTitle className="text-lg sm:text-xl font-bold text-white">Welcome to NeuroVoyage AI!</DialogTitle>
      </div>
      <DialogDescription className="text-white mt-2 text-sm sm:text-base">
        Your AI-powered career acceleration platform
      </DialogDescription>
    </div>
    
    {/* Content Section - Simplified for Mobile */}
    <div className="p-4 sm:p-6">
      <div className="space-y-3">
        <p className="text-sm sm:text-base text-muted-foreground">
          Explore how AI mentorship can transform your career path:
        </p>
        
        <ul className="space-y-2">
          {[
            "Personalized interview preparation",
            "Resume & cover letter assistance",
            "Career guidance and insights",
            "Performance tracking"
          ].map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                <Check className="h-3 w-3 text-primary" />
              </div>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <div className="bg-secondary/10 rounded-lg p-3 flex items-center">
          <div className="flex-1">
            <p className="text-xs sm:text-sm">
              Interested in development or want to connect?
            </p>
          </div>
        </div>
      </div>
    </div>
    
    {/* Buttons Section - Mobile Optimized */}
    <div className="border-t p-3 sm:p-4 bg-background">
      <div className="flex flex-col gap-2">
        <Link href="/contact" passHref className="w-full">
          <Button 
            type="button" 
            variant="default" 
            onClick={() => setIsPopupOpen(false)}
            className="w-full py-2 sm:py-5 text-sm rounded-lg flex items-center justify-center space-x-2"
          >
            <Mail className="h-4 w-4 mr-2" />
            <span>Hire Me / Contact</span>
          </Button>
        </Link>
        
        <DialogClose asChild className="w-full">
          <Button 
            type="button" 
            variant="outline" 
            className="w-full py-2 sm:py-5 text-sm rounded-lg"
          >
            Explore First
          </Button>
        </DialogClose>
      </div>
    </div>
  </DialogContent>
</Dialog> 
        {/* --- End Popup Dialog --- */}

    </section>
  )
}

export default Herosection;