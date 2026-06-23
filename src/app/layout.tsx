import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Aspire Nursing Agency | Aged Care Specialist Nursing Agency",
    template: "%s | Aspire Nursing Agency",
  },
  description:
    "Aspire Nursing Agency is an aged care specialist nursing agency providing Registered Nurses, Enrolled Nurses, Personal Care Assistants, RNs In Charge, Clinical Care Coordinators, and After-Hours Supervisors to residential aged care facilities and home care providers.",
  keywords: [
    "aged care nursing agency",
    "aged care specialist",
    "registered nurses aged care",
    "enrolled nurses aged care",
    "personal care assistants",
    "aged care staffing",
  ],
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
