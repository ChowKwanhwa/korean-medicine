import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ChainPulse Capital | Operations Hub",
  description: "Web3's elite full-cycle incubation & growth engine. Operations, Strategy, and Team.",
};

import { LanguageProvider } from "@/components/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className="dark scroll-smooth">
      <body className={`${inter.className} antialiased bg-bg-primary text-text-main selection:bg-cyan/30 selection:text-cyan`}>
        <LanguageProvider>
          <div className="relative flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
