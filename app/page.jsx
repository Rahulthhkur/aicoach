import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import CardHoverEffectDemo from "@/components/ui/card-hover-effect-demo";
import Herosection from "@/components/ui/herosection";
import InfiniteMovingCardsDemo from "@/components/ui/infinite-moving-cards-demo";
import WorldMapDemo from "@/components/ui/world-map-demo";
import { faqs } from "@/data/faqs";
import { howItWorks } from "@/data/howItWorks";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="grid-background"></div>
      <Herosection />

      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 ">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12 bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text">
            Powerful Features of your Career Growth
          </h2>
          <CardHoverEffectDemo />
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-16 md:py-24 bg-muted/10 relative overflow-hidden">
  {/* Subtle background patterns */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
  </div>

  <div className="container mx-auto px-4 md:px-6 relative z-10">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold tracking-tighter text-center mb-4 bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text">Our Impact in Numbers</h2>
      <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 gap-y-10 max-w-5xl mx-auto">
      {[
        {
          number: "50+",
          label: "Industries Covered",
          icon: (
            <svg className="w-8 h-8 mb-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
          )
        },
        {
          number: "1000+",
          label: "Interview Questions",
          icon: (
            <svg className="w-8 h-8 mb-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          )
        },
        {
          number: "95%",
          label: "Success Rate",
          icon: (
            <svg className="w-8 h-8 mb-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          )
        },
        {
          number: "24/7",
          label: "AI Support",
          icon: (
            <svg className="w-8 h-8 mb-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          )
        }
      ].map((stat, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center justify-center space-y-3 bg-black p-8 rounded-xl shadow-sm border border-gray hover:shadow-md hover:border-primary/20 transition-all duration-300 text-white"
        >
          {stat.icon}
          <div className="relative">
            <h3 className="text-3xl sm:text-4xl font-bold text-white bg-clip-text ">{stat.number}</h3>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary/20 rounded-full"></div>
          </div>
          <p className="text-white font-medium">{stat.label}</p>
        </div>
      ))}
    </div>
    
    <div className="flex justify-center mt-16">
      <button className="flex items-center gap-2 text-primary font-medium hover:underline transition-all">
        <span>Learn more about our methodology</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </button>
    </div>
  </div>
</section>

       {/* How It Works Section */}
       <section className="w-full py-16 md:py-32 bg-background relative overflow-hidden">
  {/* Subtle background patterns */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
  </div>
  
  <div className="container mx-auto px-4 md:px-6 relative z-10">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <div className="inline-block mb-4">
        <span className="px-4 py-1.5 text-sm font-medium text-primary border border-primary/20 rounded-full">Simple Process</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-center mb-6 bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text">How It Works</h2>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        Four simple steps to accelerate your career growth
      </p>
      <div className="w-24 h-1 bg-primary mx-auto mt-8 rounded-full"></div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 max-w-6xl mx-auto">
      {howItWorks.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-center group relative"
        >
          {/* Step number */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-6xl font-bold text-gray-800/5">
            {index + 1}
          </div>
          
          {/* Icon */}
          <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 mb-6 relative">
            <div className="absolute inset-0 bg-primary/5 rounded-2xl animate-pulse"></div>
            <div className="text-primary text-2xl relative">
              {item.icon}
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-4 relative">
            <h3 className="font-bold text-2xl group-hover:text-primary transition-colors duration-300">{item.title}</h3>
            <div className="w-12 h-0.5 bg-primary/30 mx-auto"></div>
            <p className="text-muted-foreground leading-relaxed">{item.description}</p>
          </div>
          
          {/* Unified connector style for all steps */}
          {index < howItWorks.length - 1 && (
            <div className="hidden lg:block absolute top-20 left-[calc(50%_+_40px)] w-[calc(100%_-_80px)] h-0.5">
              <div className="w-full h-full bg-primary/30"></div>
              <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary/40"></div>
            </div>
          )}
        </div>
      ))}
    </div>
    
    <div className="flex justify-center mt-16">
      <Link href={'/sign-in'}>
      <button className="px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary font-medium rounded-full transition-all duration-300 flex items-center gap-2 group">
        <span>Get Started Today</span>
        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </button>
      </Link>
    </div>
  </div>
</section>
        
            {/* Testimonial section */}
      <section className="w-full py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 ">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-0 bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text">
            What Our User Says
          </h2>
          <InfiniteMovingCardsDemo/>
          <WorldMapDemo/>
        </div>
      </section>

            {/* FAQ Section */}
            <section className="w-full py-16 md:py-24">
  <div className="container mx-auto px-4 md:px-6">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <div className="inline-block mb-4">
        <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-gray-800 bg-opacity-40 text-gray-100">
          Support
        </span>
      </div>
      <h2 className="text-4xl font-bold tracking-tighter text-center mb-6 bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-300 text-lg max-w-2xl mx-auto">
        Find answers to common questions about our platform
      </p>
    </div>

    <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`} 
            className="border border-gray-700 rounded-lg overflow-hidden backdrop-blur-sm bg-gray-900 bg-opacity-30 shadow-lg"
          >
            <AccordionTrigger className="text-left px-6 py-4 hover:bg-gray-800 hover:bg-opacity-40 transition-all">
              <span className="text-lg font-medium text-gray-100">{faq.question}</span>
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-gray-300 border-t border-gray-700">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      
      <div className="mt-16 text-center">
        <p className="text-gray-200 text-2xl mb-4">Still have questions?</p>
        <button className="h-14 px-8 bg-gradient-to-r from-white to-gray-300 hover:from-gray-100 hover:to-gray-600 text-black font-medium rounded-xl shadow-lg shadow-black/30 transition-all duration-300 hover:scale-105">
          Contact Support
        </button>
      </div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-br from-black via-gray-900 to-gray-600 py-16 md:py-24">
  <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col items-center justify-center space-y-8 text-center">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-600 rounded-full blur-3xl"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-100 text-transparent bg-clip-text">
          Ready to Accelerate Your Career?
        </h2>
        
        <p className="mx-auto max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
          Join thousands of professionals who are advancing their careers with AI-powered guidance. Get personalized insights, skill assessments, and roadmaps tailored to your goals.
        </p>
        
        {/* Social proof */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex -space-x-2">
    
          </div>
          <span className="text-gray-200 flex items-center">
            <span className="font-semibold">4.9/5</span>
            <span className="ml-1 flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </span>
            <span className="ml-1 text-sm opacity-80">from 2,500+ reviews</span>
          </span>
        </div>
        
        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/dashboard" passHref>
            <Button
              size="lg"
              className="h-14 px-8 bg-gradient-to-r from-white to-gray-300 hover:from-gray-100 hover:to-gray-400 text-black font-medium rounded-xl shadow-lg shadow-black/30 transition-all duration-300 hover:scale-105"
            >
              Start Your Journey Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          
        </div>
      </div>
      
      {/* Features highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full max-w-4xl">
        {[
          { 
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            ),
            title: "Personalized AI Coaching", 
            desc: "Tailored guidance based on your goals" 
          },
          { 
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            ),
            title: "Skills Assessment", 
            desc: "Identify strengths and improvement areas" 
          },
          { 
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            ),
            title: "Career Roadmaps", 
            desc: "Clear paths to your dream role" 
          }
        ].map((feature, i) => (
          <div key={i} className="flex flex-col items-center p-5 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 mb-4 text-white">
              {feature.icon}
            </div>
            <h3 className="text-xl font-medium text-white mb-2">{feature.title}</h3>
            <p className="text-gray-300 text-center">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
        
    </div>
  );
}
