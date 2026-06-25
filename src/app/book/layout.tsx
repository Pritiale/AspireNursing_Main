import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Book Staff",
  description:
    "Request aged care staff from Aspire Nursing Agency. Choose the role you need, set your shift dates and times, and we'll match the right professional.",
  path: "/book",
  noIndex: true,
});

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return children;
}
