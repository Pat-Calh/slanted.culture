import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Slanted Culture",
  description: "Car culture, art, and photography—where the streets meet creativity. Join the movement.",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/SlantedLogo.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen flex flex-col font-sans">
        {/* Navigation Bar */}
        <NavBar />

        {/* Main Content */}
        <main className="flex-1 w-full pt-16">
          {children}
        </main>
        {/* Footer */}
        <footer className="w-full px-6 py-8 border-t border-white/10 bg-black/90 text-center text-sm flex flex-col gap-2 items-center">
          <div className="flex gap-4 justify-center mb-2">
            <a href="#" className="hover:text-accent">Instagram</a>
            <a href="#" className="hover:text-accent">YouTube</a>
            <a href="#" className="hover:text-accent">TikTok</a>
            <a href="#" className="hover:text-accent">Threads</a>
          </div>
          <div> {new Date().getFullYear()} Slanted Culture. All rights reserved.</div>
        </footer>
      </body>
    </html>
  );
}
