import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Service",
  description:
    "Terms of Service for Aspire Nursing Agency. Please read these terms carefully before using our aged care staffing services or website.",
  path: "/terms-of-service",
  noIndex: false,
});

export default function TermsOfServiceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
