import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd, { organizationSchema, websiteSchema } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#28547e" },
    { media: "(prefers-color-scheme: dark)",  color: "#1a3a5c" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: "Aspire Nursing Agency | Aged Care Specialist Nursing Agency Melbourne",
    template: `%s | Aspire Nursing Agency`,
  },

  description:
    "Aspire Nursing Agency is Melbourne's aged care specialist nursing agency. We supply Registered Nurses (RN), Enrolled Nurses (EN), Personal Care Assistants (PCA), RNs In Charge, Clinical Care Coordinators, and After-Hours Supervisors to residential aged care facilities and home care providers — 24/7, same-day placement.",

  keywords: [...siteConfig.keywords],

  authors: [{ name: "Aspire Nursing Agency", url: siteConfig.url }],
  creator: "Aspire Nursing Agency",
  publisher: "Aspire Nursing Agency",

  /* ── Canonical + alternates ────────────────────────────────────────── */
  alternates: {
    canonical: siteConfig.url,
  },

  /* ── Open Graph ────────────────────────────────────────────────────── */
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Aspire Nursing Agency | Aged Care Specialist Nursing Agency Melbourne",
    description:
      "Melbourne's aged care nursing agency — RNs, ENs, PCAs and supervisors placed into residential and home care, 24/7.",
    images: [
      {
        url: "/LandScapeLogo.png",
        width: 1200,
        height: 400,
        alt: "Aspire Nursing Agency — Aged Care Specialist",
      },
    ],
  },

  /* ── Twitter / X ───────────────────────────────────────────────────── */
  twitter: {
    card: "summary_large_image",
    title: "Aspire Nursing Agency | Aged Care Specialist",
    description:
      "Melbourne's aged care nursing agency — RNs, ENs, PCAs placed 24/7 into residential and home care.",
    images: ["/LandScapeLogo.png"],
  },

  /* ── Favicons & icons ──────────────────────────────────────────────── */
  icons: {
    icon: [
      { url: "/favicon.ico",             sizes: "any" },
      { url: "/favicons/favicon.ico",    sizes: "any" },
      { url: "/favicons/favicon.svg",    type: "image/svg+xml" },
      { url: "/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/favicons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/favicons/favicon.svg", color: "#28547e" },
    ],
  },

  /* ── PWA manifest ──────────────────────────────────────────────────── */
  manifest: "/favicons/site.webmanifest",

  /* ── Robots defaults ───────────────────────────────────────────────── */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  /* ── Geo / regional relevance ──────────────────────────────────────── */
  other: {
    "geo.region":   "AU-VIC",
    "geo.placename": "Melbourne",
    "geo.position": "-37.8136;144.9631",
    "ICBM":         "-37.8136, 144.9631",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-AU"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <JsonLd data={[organizationSchema, websiteSchema]} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
