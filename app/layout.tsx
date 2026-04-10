import type { Metadata } from "next";
import { Outfit, Questrial } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-questrial",
});

export const metadata: Metadata = {
  title: "SEIZIT | Empowering US Businesses with Elite Tech & Talent",
  description: "From high-converting web experiences to KPI-driven offshore talent starting at just $399. We execute so you can scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${questrial.variable}`}>
      <body className="min-h-screen font-sans selection:bg-black selection:text-white bg-white text-slate-900">
        <div className="grain-overlay" />
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
