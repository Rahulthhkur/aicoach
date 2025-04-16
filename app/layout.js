import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Header from "@/components/ui/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Skeleton from "react-loading-skeleton"; // Importing Skeleton component

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NeuroVoyage AI",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }}>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* HEADER */}
            <Header />

            {/* Skeleton Loader: Wrap with a condition to show when content is loading */}
            <main className="min-h-screen">
              <Skeleton height="100%" width="100%" />
              {/* Only show children after content is ready */}
              {children}
            </main>

            {/* Footer */}
            <footer className="bg-muted/50 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>Made with {String.fromCharCode(0x2764)} by Rahul Singh</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
