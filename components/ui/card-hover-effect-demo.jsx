import { HoverEffect } from "@/components/ui/card-hover-effect";
import { BrainCircuit, Briefcase, LineChart, ScrollText } from "lucide-react";


export default function CardHoverEffectDemo() {
  return (
    <div className="w-full mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

// Define your features array with icons
const features = [
  {
    icon:<BrainCircuit className="w-10 h-10 mb-4 text-primary" />,
    title: "Feature 1",
    description: "Description for feature 1"
  },
  {
    icon: <Briefcase className="w-10 h-10 mb-4 text-primary" />,
    title: "Feature 2",
    description: "Description for feature 2"
  },
  {
    icon:<LineChart className="w-10 h-10 mb-4 text-primary" />,
    title: "Feature 3",
    description: "Description for feature 3"
  },
  {
    icon:<ScrollText className="w-10 h-10 mb-4 text-primary" />,
    title: "Feature 4",
    description: "Description for feature 4"
  }
];

// Define your projects array with icons from the features array
export const projects = [
  {
    title: "AI-Powered Career Guidance",
    description: "Get personalized career advice and insights powered by advanced AI technology.",
    link: "https://stripe.com",
    icon: features[0].icon
  },
  {
    title: "Interview Preparation",
    description: "Practice with role-specific questions and get instant feedback to improve your performance.",
    link: "https://netflix.com",
    icon: features[1].icon
  },
  {
    title: "Industry Insights",
    description: "Stay ahead with real-time industry trends, salary data, and market analysis.",
    link: "https://google.com",
    icon: features[2].icon
  },
  {
    title: "Smart Resume Creation",
    description: "Generate ATS-optimized resumes with AI assistance.",
    link: "https://meta.com",
    icon: features[3].icon
  },
  // Commented out as in your original code
  // {
  //   title: "Amazon",
  //   description: "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
  //   link: "https://amazon.com",
  //   icon: features[0].icon
  // },
  // {
  //   title: "Microsoft",
  //   description: "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
  //   link: "https://microsoft.com",
  //   icon: features[1].icon
  // },
];