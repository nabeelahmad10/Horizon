import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Suspense } from "react"
import { Poppins } from "next/font/google";
import { Navigation } from "@/components/Navigation"
import "./globals.css"


export const metadata: Metadata = {
  title: "Horizon Fest 2025 | Oct 30 - Nov 1",
  description:
    "Experience three days of innovation, entertainment, and celebration at Horizon Fest 2025. Organized by Directorate of Alumni Affairs."
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Navigation /> {/* <-- Add this line to show nav everywhere */}
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  );
}
