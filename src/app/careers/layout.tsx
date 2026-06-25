import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Careers — Aged Care Nursing Jobs Melbourne",
  description:
    "Join the Aspire Nursing Agency team. We are always looking for AHPRA-registered nurses and qualified care workers who specialise in aged care across Melbourne and Victoria. Flexible shifts, competitive rates.",
  keywords: [
    "aged care nursing jobs Melbourne",
    "RN jobs aged care Melbourne",
    "EN jobs aged care Melbourne",
    "PCA jobs aged care Melbourne",
    "aged care nursing agency jobs",
    "work in aged care Melbourne",
    "nursing agency work Melbourne",
    "casual nursing shifts aged care",
    "AHPRA nurse jobs Victoria",
  ],
  path: "/careers",
});

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
