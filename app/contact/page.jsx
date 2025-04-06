// app/about/page.jsx

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import React from 'react';
import { ArrowRight, Globe, BrainCircuit, Briefcase, Rocket, Target, LightbulbIcon, Phone, Linkedin, Mail } from 'lucide-react';

const AboutPage = () => {
  return (
    <section className="w-full py-20 md:py-28 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="outline">About NeuroVoyage AI</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Empowering Your Career Journey</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the story behind the AI Career Coach designed to transform your job search experience.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* About Me Section with Card */}
          <Card className="border-none shadow-lg bg-gradient-to-br from-background to-secondary/10">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <BrainCircuit className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight">About the Creator</h2>
                </div>
                
                <p className="text-lg text-muted-foreground">
                  Hi, I'm Rahul Singh — a passionate Full Stack Developer and Engineer driven by curiosity and creativity.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-background p-4 rounded-xl border border-border/40 flex items-start space-x-3">
                    <BrainCircuit className="h-5 w-5 text-primary mt-1" />
                    <p className="text-muted-foreground">I love turning real-world problems into digital solutions</p>
                  </div>
                  <div className="bg-background p-4 rounded-xl border border-border/40 flex items-start space-x-3">
                    <Briefcase className="h-5 w-5 text-primary mt-1" />
                    <p className="text-muted-foreground">I've worked on multiple impactful projects, including this AI Career Coach</p>
                  </div>
                  <div className="bg-background p-4 rounded-xl border border-border/40 flex items-start space-x-3">
                    <Rocket className="h-5 w-5 text-primary mt-1" />
                    <p className="text-muted-foreground">Always exploring new technologies, currently diving deep into AI integration</p>
                  </div>
                </div>
                
                {/* Contact Information Section */}
                <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                  <h3 className="text-lg font-medium mb-3">Connect With Me</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <a
                      href="https://www.linkedin.com/in/rahul-singh-87675a221/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 bg-background p-3 rounded-lg hover:bg-primary/5 transition-colors"
                    >
                      <div className="bg-blue-500/10 p-2 rounded-full">
                        <Linkedin className="h-5 w-5 text-blue-500" />
                      </div>
                      <span className="text-muted-foreground">LinkedIn</span>
                    </a>
                    
                    <a
                      href="tel:+91-9997699629"
                      className="flex items-center space-x-3 bg-background p-3 rounded-lg hover:bg-primary/5 transition-colors"
                    >
                      <div className="bg-green-500/10 p-2 rounded-full">
                        <Phone className="h-5 w-5 text-green-500" />
                      </div>
                      <span className="text-muted-foreground">+91-9997699629</span>
                    </a>
                    
                    <a
                      href="https://rahulsingh.tech"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 bg-background p-3 rounded-lg hover:bg-primary/5 transition-colors"
                    >
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Globe className="h-5 w-5 text-primary" />
                      </div>
                      <span className="text-muted-foreground">rahulsingh.tech</span>
                    </a>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground italic border-l-4 border-primary/30 pl-4 mt-4">
                  Building this project wasn't just about code—it was about creating something that makes a real difference in people's careers.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Problem and Solution Cards in Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Problem Section */}
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="bg-destructive/10 p-3 rounded-full">
                      <Target className="h-6 w-6 text-destructive" />
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight">The Problem</h2>
                  </div>
                  
                  <p className="text-muted-foreground">
                    Many job seekers face these common challenges:
                  </p>
                  
                  <ul className="space-y-3">
                    {[
                      "Difficulty finding structured, reliable interview prep",
                      "Creating resumes and cover letters that stand out",
                      "Lack of personalized guidance tailored to their goals",
                      "Trouble tracking performance and progress",
                      "Missing out on relevant industry updates"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="h-6 w-6 rounded-full bg-destructive/10 flex items-center justify-center text-destructive font-medium text-sm mt-0.5">
                          {index + 1}
                        </div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Solution Section */}
            <Card className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <LightbulbIcon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight">Our Solution</h2>
                  </div>
                  
                  <p className="text-muted-foreground">
                    NeuroVoyage AI Career Coach is designed to:
                  </p>
                  
                  <ul className="space-y-3">
                    {[
                      "Generate AI-powered mock interview questions",
                      "Build smart resumes and cover letters with PDF export",
                      "Offer performance insights via dashboards and quizzes",
                      "Deliver weekly industry insights using Inngest + Gemini AI",
                      "Provide a smooth onboarding experience with goal-based navigation"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium text-sm mt-0.5">
                          ✓
                        </div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-muted-foreground mt-4">
                    This platform helps users prepare smarter, improve faster, and get closer to their dream job—all in one place.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="bg-primary/5 rounded-2xl p-8 text-center space-y-6 border border-primary/10">
            <h2 className="text-3xl font-bold">Ready to Transform Your Career Journey?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Start using NeuroVoyage AI today and unlock your full potential with AI-powered career coaching.
            </p>
            <Link href="/">
              <Button size="lg" className="px-8 py-6 text-lg rounded-xl">
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            {/* Additional Contact CTA */}
            <p className="text-sm text-muted-foreground mt-4">
              Questions or feedback? Contact me directly at{' '}
              <a href="mailto:singhrahulksp@gmail.com" className="text-primary hover:underline">
              singhrahulksp@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;