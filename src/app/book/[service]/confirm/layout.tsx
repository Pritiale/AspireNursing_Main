import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Confirm Booking",
  description: "Review and confirm your aged care staffing request with Aspire Nursing Agency.",
  path: "/book",
  noIndex: true,
});

export default function BookConfirmLayout({ children }: { children: React.ReactNode }) {
  return children;
}
