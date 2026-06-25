import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Blog — Aged Care Staffing Insights & News",
  description:
    "Aged care staffing insights, industry news, and practical guides from the team at Aspire Nursing Agency. Covering residential aged care, home care, nursing standards, and workforce challenges in Melbourne and Victoria.",
  keywords: [
    "aged care staffing blog",
    "aged care news Melbourne",
    "nursing agency blog Australia",
    "aged care workforce insights",
    "residential aged care staffing tips",
    "home care nursing advice",
    "aged care industry news Victoria",
  ],
  path: "/blog",
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
