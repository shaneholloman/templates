import { ConvexLogo } from "@/components/GetStarted/ConvexLogo";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import ConvexClientProvider from "../components/ConvexClientProvider";
import "./globals.css";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Template",
  description: "My app description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <ConvexClientProvider>
            <div className="flex min-h-screen flex-col">
              <header className="sticky top-0 z-10 flex h-20 border-b border-slate-300 bg-white shadow-sm dark:border-slate-700 dark:bg-black">
                <div className="container flex items-center justify-between">
                  <Link href="/" className="text-2xl font-bold no-underline">
                    <h1>Next.js Template</h1>
                  </Link>
                  <nav className="flex gap-4">
                    <Link
                      href="/"
                      className="p-2 text-slate-600 no-underline hover:text-slate-950 dark:text-slate-200 dark:hover:text-slate-400"
                    >
                      Link 1
                    </Link>
                    <Link
                      href="/"
                      className="p-2 text-slate-600 no-underline hover:text-slate-950 dark:text-slate-200 dark:hover:text-slate-400"
                    >
                      Link 2
                    </Link>
                    <Link
                      href="/"
                      className="p-2 text-slate-600 no-underline hover:text-slate-950 dark:text-slate-200 dark:hover:text-slate-400"
                    >
                      Link 3
                    </Link>
                    <ThemeToggle />
                    <Link href="/chat">
                      <Button>Chat App</Button>
                    </Link>
                  </nav>
                </div>
              </header>
              <main className="flex grow flex-col bg-slate-100 dark:bg-slate-950">
                {children}
              </main>
              <footer className="flex h-16 items-center border-t border-slate-400 bg-white text-slate-800 dark:border-slate-700 dark:bg-black dark:text-slate-100">
                <div className="container">
                  <Link
                    href="https://www.convex.dev/"
                    className="flex justify-end gap-2 no-underline"
                  >
                    <span>Powered by</span>
                    <ConvexLogo />
                  </Link>
                </div>
              </footer>
            </div>
          </ConvexClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
