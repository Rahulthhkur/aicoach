import Link from 'next/link'
import React from 'react'
import { Button } from './button'
import Image from 'next/image'
import CoverDemo from './cover-demo'


const Herosection = () => {
  return (
    <section className='w-full pt-36 md:pt-48 pb-10'>
        <div className='space-y-6 text-center'>
            <div className='space-y-6 mx-auto'>
                <h1 className='text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title'>Transforming Careers Through 
                    <br />
                    Intelligent Mentorship
                </h1>
                <CoverDemo/>
            </div>
            <div className='flex justify-center space-x-4'>
                <Link href='/dashboard'>
                <Button size='lg' className='px-8'>
                Get Started
                </Button>
                </Link>
                <Link href='https://www.youtube.com/'>
                <Button size='lg' className='px-8' variant="outline">
                Get Demo
                </Button>
                </Link>
            </div>

            <div>
                <div>
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