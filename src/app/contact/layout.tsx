import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us — Request Aged Care Nurses 24/7",
  description:
    "Contact Aspire Nursing Agency to request aged care nursing staff in Melbourne and Victoria. Available 24/7 for urgent shift cover and ongoing placement. Call 0450 010 722 or email aspirenursingagency@gmail.com.",
  keywords: [
    "contact aged care nursing agency Melbourne",
    "request aged care nurses Victoria",
    "urgent nursing staff aged care",
    "aged care staffing enquiry Melbourne",
    "24 hour nursing agency contact",
    "aged care shift cover request",
  ],
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
