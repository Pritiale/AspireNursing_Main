import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for Aspire Nursing Agency. Learn how we collect, use, and protect your personal information in accordance with the Australian Privacy Act 1988.",
  path: "/privacy-policy",
  noIndex: false,
});

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
