import React from "react";
import { Cover } from "@/components/ui/cover";

export default function CoverDemo() {
  return (
    <div className="py-4">
      <h1 className="text-xl md:text-2xl font-light max-w-3xl mx-auto text-center mt-4 relative z-20 bg-clip-text text-transparent bg-gradient-to-t from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Advance your career with personalized guidance, interview prep, and AI-powered tools for{" "}
        <Cover>job success</Cover>.
      </h1>
    </div>
  );
}
