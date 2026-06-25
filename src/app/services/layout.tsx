import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Our Services — RN, EN, PCA & Specialist Aged Care Staff",
  description:
    "Aspire Nursing Agency supplies Registered Nurses (RN), Enrolled Nurses (EN), Personal Care Assistants (PCA), Registered Nurses In Charge, Clinical Care Coordinators, and After-Hours Supervisors to aged care facilities and home care providers across Melbourne and Victoria — 24/7.",
  keywords: [
    "aged care nursing services Melbourne",
    "registered nurses aged care agency",
    "enrolled nurses aged care agency",
    "personal care assistants agency Melbourne",
    "RN in charge aged care agency",
    "clinical care coordinator aged care",
    "after hours nursing supervisor agency",
    "aged care staffing services Victoria",
    "all aged care nursing roles Melbourne",
  ],
  path: "/services",
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
