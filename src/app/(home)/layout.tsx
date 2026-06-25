import type { Metadata } from "next";
import { siteConfig, createPageMetadata } from "@/lib/site";

const homeMetadata = createPageMetadata({
  title: "Aged Care Specialist Nursing Agency Melbourne",
  description:
    "Aspire Nursing Agency — Melbourne's #1 aged care specialist nursing agency. We supply RNs, ENs, PCAs, RNs In Charge, Clinical Care Coordinators & After-Hours Supervisors to residential aged care facilities and home care providers, 24/7. Same-day placement available.",
  keywords: [
    "aged care nursing agency Melbourne",
    "nursing agency Melbourne",
    "aged care staffing Melbourne",
    "residential aged care nurses Melbourne",
    "home care nursing agency Melbourne",
    "24 hour nursing agency Melbourne",
    "RN EN PCA aged care Melbourne",
  ],
  path: "/",
});

export const metadata: Metadata = {
  ...homeMetadata,
  title: {
    absolute: `Aspire Nursing Agency | Aged Care Specialist Nursing Agency — Melbourne, VIC`,
  },
  alternates: { canonical: siteConfig.url },
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
