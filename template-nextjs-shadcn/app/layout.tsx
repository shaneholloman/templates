import { GetStarted } from "@/components/Starter/GetStarted";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import ConvexClientProvider from "./ConvexClientProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My App Title",
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
        <ConvexClientProvider>
          <div className="min-h-screen flex flex-col">
            <header className="flex items-center border-white/10 border-b sticky top-0 z-10 bg-zinc-900 h-16">
              <div className="max-w-7xl mx-auto w-full flex justify-between">
                <Link href="/" className="text-2xl font-medium no-underline">
                  My Convex App
                </Link>
                <nav className="flex gap-4">
                  <Link
                    href="/"
                    className="text-sm no-underline hover:text-white text-zinc-300 p-2"
                  >
                    Link 1
                  </Link>
                  <Link
                    href="/"
                    className="text-sm no-underline hover:text-white text-zinc-300 p-2"
                  >
                    Link 2
                  </Link>
                  <Link
                    href="/"
                    className="text-sm no-underline hover:text-white text-zinc-300 p-2"
                  >
                    Link 3
                  </Link>
                  <Button>Dashboard</Button>
                </nav>
              </div>
            </header>
            <div className="max-w-7xl mx-auto flex gap-x-12 w-full grow">
              <aside className="w-48 shrink-0 sticky top-[4rem+1px] h-[calc(100vh-(4rem))] overflow-y-auto pt-6">
                <nav className="flex flex-col gap-2">
                  <Link
                    href="/"
                    className="text-sm no-underline hover:text-white text-zinc-300 py-2"
                  >
                    Link 1
                  </Link>
                  <Link
                    href="/"
                    className="text-sm no-underline hover:text-white text-zinc-300 py-2"
                  >
                    Link 2
                  </Link>
                  <Link
                    href="/"
                    className="text-sm no-underline hover:text-white text-zinc-300 py-2"
                  >
                    Link 3
                  </Link>
                </nav>
              </aside>
              <main className="pt-6">{children}</main>
            </div>
            <footer className="border-white/10 border-t">
              <div className="max-w-7xl mx-auto w-full flex flex-col">
                {/* Done with the starter content? Remove the component below and
                    add in your copyright notice or other footer content here. */}
                <GetStarted />
              </div>
            </footer>
          </div>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
