import type { Metadata } from "next";
import { contactConfig } from "@/lib/contact";

export const siteConfig = {
  name: "Aspire Nursing Agency",
  shortName: "Aspire Nursing",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.aspirenursing.com.au",
  email: contactConfig.email,
  phone: contactConfig.phone,
  defaultDescription:
    "Aspire Nursing Agency is Melbourne's aged care specialist nursing agency, providing Registered Nurses (RN), Enrolled Nurses (EN), Personal Care Assistants (PCA), RNs In Charge, Clinical Care Coordinators, and After-Hours Supervisors to residential aged care facilities and home care providers across Victoria — 24/7, same-day placement available.",
  keywords: [
    /* ── Primary / highest-volume ──────────────────── */
    "aged care nursing agency",
    "aged care nursing agency Melbourne",
    "nursing agency Melbourne",
    "aged care staffing agency",
    "aged care staffing agency Melbourne",
    "agency nurses aged care",
    "aged care nurses agency",

    /* ── Role-specific ─────────────────────────────── */
    "registered nurses aged care",
    "registered nurses aged care Melbourne",
    "enrolled nurses aged care",
    "enrolled nurses aged care Melbourne",
    "personal care assistants aged care",
    "personal care workers aged care Melbourne",
    "RN agency aged care",
    "EN agency aged care",
    "PCA agency aged care",
    "registered nurse in charge agency",
    "clinical care coordinator agency",
    "after hours nursing supervisor",

    /* ── Operational / intent ──────────────────────── */
    "24 hour nursing agency Melbourne",
    "emergency nursing agency",
    "last minute nursing staff aged care",
    "casual nursing aged care Melbourne",
    "temporary nurses aged care",
    "short notice nursing staff",
    "aged care shift cover",
    "agency nurse aged care Victoria",

    /* ── Facility / setting ────────────────────────── */
    "residential aged care staffing",
    "home care nursing agency",
    "nursing home staffing agency",
    "aged care facility nursing agency",
    "RACF nursing agency",

    /* ── Broader healthcare ────────────────────────── */
    "aged care specialist",
    "aged care Victoria",
    "aged care Melbourne",
    "healthcare staffing agency Melbourne",
    "nursing placement agency Melbourne",

    /* ── AI / conversational search ────────────────── */
    "find aged care nurses Melbourne",
    "hire aged care staff Melbourne",
    "aged care nursing placement Victoria",
    "best aged care nursing agency Australia",
  ],
} as const;

type PageMetadataOptions = {
  title: string;
  description: string;
  keywords?: string[];
  path?: string;
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  keywords,
  path = "",
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const canonical = `${siteConfig.url}${path}`;
  const mergedKeywords = keywords
    ? [...new Set([...keywords, ...siteConfig.keywords])]
    : [...siteConfig.keywords];

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: { canonical },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "en_AU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
    },
    ...(noIndex && {
      robots: { index: false, follow: false },
    }),
  };
}

export const publicRoutes = [
  { path: "",                  changeFrequency: "weekly"  as const, priority: 1.0 },
  { path: "/services",         changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/about",            changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/contact",          changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/careers",          changeFrequency: "weekly"  as const, priority: 0.7 },
  { path: "/blog",             changeFrequency: "weekly"  as const, priority: 0.6 },
  { path: "/privacy-policy",   changeFrequency: "yearly"  as const, priority: 0.2 },
  { path: "/terms-of-service", changeFrequency: "yearly"  as const, priority: 0.2 },
] as const;
