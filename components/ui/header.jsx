import {
  SignedOut,
  SignInButton,
  SignedIn,
  UserButton,
  SignUpButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./button";
import {
  ChevronDown,
  FileText,
  GraduationCap,
  LayoutDashboard,
  PenBox,
  StarsIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";

const header = () => {
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="w-full px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center hover:opacity-90 transition-opacity"
        >
          <Image
            src="/logo (1).png"
            alt="NeuroVoyage AI Logo"
            width={200}
            height={60}
            className="h-12 py-1 w-auto object-contain"
            priority
          />
        </Link>

        <div className="flex items-center gap-3 md:gap-4">
          <SignedIn>
            <Link href={"/dashboard"}>
              <Button
                variant="outline"
                className="flex items-center gap-2 hover:bg-slate-100 transition-colors"
              >
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden md:inline-block">
                  Industry Insights
                </span>
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="flex items-center gap-2 transition-colors">
                  <StarsIcon className="h-4 w-4" />
                  <span className="hidden md:inline-block">Growth Tools</span>
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 p-1">
                <DropdownMenuItem className="hover:bg-slate-100 rounded-md cursor-pointer">
                  <Link
                    href={"/resume"}
                    className="flex items-center gap-2 w-full py-1"
                  >
                    <FileText className="h-4 w-4" />
                    <span>Build Resume</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-slate-100 rounded-md cursor-pointer">
                  <Link
                    href={"/ai-cover-letter"}
                    className="flex items-center gap-2 w-full py-1"
                  >
                    <PenBox className="h-4 w-4" />
                    <span>Cover Letter</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-slate-100 rounded-md cursor-pointer">
                  <Link
                    href={"/interview"}
                    className="flex items-center gap-2 w-full py-1"
                  >
                    <GraduationCap className="h-4 w-4" />
                    <span>Interview Prep</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          <SignedOut>
            <SignInButton
              mode="modal"
              appearance={{
                elements: {
                  rootBox: "z-[100]",
                  card: "top-0 mt-16",
                  modalBackdrop: "z-[99]",
                },
                layout: {
                  socialButtonsPlacement: "top",
                },
              }}
            >
              <Button
                variant="outline"
                className="hover:bg-slate-100 transition-colors"
              >
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default header;
