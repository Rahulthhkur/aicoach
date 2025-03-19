"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-muted/50 dark:bg-transparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    quote: "The AI-powered interview prep was a game-changer. Landed my dream job at a top tech company!",
    name: "Sarah Chen",
    title: "Software Engineer at Tech Giant Co.",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
  },
  {
    quote: "The industry insights helped me pivot my career successfully. The salary data was spot-on!",
    name: "Michael Rodriguez",
    title: "Product Manager at StartUp Inc.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    quote: "My resume's ATS score improved significantly. Got more interviews in two weeks than in six months!",
    name: "Priya Patel",
    title: "Marketing Director at Global Corp",
    image: "https://randomuser.me/api/portraits/women/74.jpg",
  },
];
