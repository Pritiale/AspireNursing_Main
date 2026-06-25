import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Your Details",
  description: "Complete your aged care staffing request with Aspire Nursing Agency.",
  path: "/book",
  noIndex: true,
});

export default function BookDetailsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
