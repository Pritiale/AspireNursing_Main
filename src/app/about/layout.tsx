import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "About Us — Aged Care Nursing Specialist Since 2014",
  description:
    "Learn about Aspire Nursing Agency — Melbourne's aged care specialist nursing agency founded in 2014. We focus 100% on aged care, supplying AHPRA-registered nurses and vetted care workers to residential facilities and home care providers across Victoria.",
  keywords: [
    "about Aspire Nursing Agency",
    "aged care nursing agency Melbourne",
    "aged care specialist agency since 2014",
    "AHPRA registered nurses agency",
    "vetted aged care nurses Melbourne",
    "aged care nursing company Melbourne",
  ],
  path: "/about",
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
