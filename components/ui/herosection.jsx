"use client"

import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { Button } from './button'
import Image from 'next/image'
import CoverDemo from './cover-demo'
import { ArrowRight, PlayCircle } from 'lucide-react'

const Herosection = () => {

    const imageRef = useRef(null);

    useEffect(() => {
      const imageElement = imageRef.current;
  
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const scrollThreshold = 100;
  
        if (scrollPosition > scrollThreshold) {
          imageElement.classList.add("scrolled");
        } else {
          imageElement.classList.remove("scrolled");
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
    <section className='w-full pt-36 md:pt-48 pb-10'>
        <div className='space-y-6 text-center'>
            <div className='space-y-6 mx-auto'>
                <h1 className='text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title'>Transforming Careers Through 
                    <br />
                    AI Mentorship
                </h1>
                <CoverDemo/>
            </div>
            <div className='flex justify-center space-x-4'>
                <Link href='/dashboard'>
                <Button size='lg' className='px-8 h-14 rounded-xl shadow-lg shadow-gray-800/20 font-medium transition-all duration-300 hover:scale-105'>
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href='https://www.youtube.com/'>
                <Button size='lg' className='px-8 h-14 rounded-xl font-medium transition-all duration-300 hover:scale-105' variant="outline">
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Watch Demo
                  </Button>
                </Link>
            </div>

            <div className='hero-image-wrapper mt-5 md:m t-0'>
                <div ref={imageRef} className='hero-image'>
                    <Image
                    src={'/banner.jpeg'}
                    width={1280}
                    height={720}
                    alt='banner neurovoyageai'
                    className='rounded-lg shadow-2x border mx-auto'
                    priority
                    />
                    
                </div>
            </div>

        </div>
    </section>
  )
}

export default Herosection