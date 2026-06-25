import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { createPageMetadata } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) return { title: "Service Not Found" };

  const roleKeywords: Record<string, string[]> = {
    "registered-nurses": [
      "registered nurses aged care Melbourne",
      "RN agency aged care",
      "hire registered nurses aged care",
      "AHPRA registered nurse agency Melbourne",
    ],
    "enrolled-nurses": [
      "enrolled nurses aged care Melbourne",
      "EN agency aged care",
      "hire enrolled nurses aged care Victoria",
    ],
    "personal-care-assistants": [
      "personal care assistants aged care Melbourne",
      "PCA agency Melbourne",
      "personal care workers aged care agency",
    ],
    "registered-nurse-in-charge": [
      "registered nurse in charge aged care agency",
      "RN in charge agency Melbourne",
      "shift leader aged care agency",
    ],
    "clinical-care-coordinator": [
      "clinical care coordinator agency Melbourne",
      "care coordinator aged care staffing",
    ],
    "after-hours-supervisor": [
      "after hours nursing supervisor agency",
      "overnight nursing supervisor aged care Melbourne",
    ],
  };

  return createPageMetadata({
    title: `${service.title} — Aged Care Staffing Melbourne`,
    description: `${service.short} Aspire Nursing Agency supplies ${service.title} to residential aged care facilities and home care providers across Melbourne and Victoria — 24/7, same-day placement available.`,
    keywords: [
      ...(roleKeywords[service.id] ?? []),
      `${service.title.toLowerCase()} agency Melbourne`,
      "aged care staffing Melbourne",
    ],
    path: `/services/${service.id}`,
  });
}

export default async function ServiceDetailLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);
  if (!service) notFound();
  return children;
}
