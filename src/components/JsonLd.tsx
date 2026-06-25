/**
 * Renders one or more JSON-LD structured data objects in a <script> tag.
 * Pass a single object or an array. Used by layout.tsx and page-level files
 * to emit schema.org markup that Google, Bing, and AI search engines parse.
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires this pattern
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ─── Shared schema helpers ────────────────────────────────────────────────── */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.aspirenursing.com.au";
const PHONE_E164 = "+61450010722";
const EMAIL = "aspirenursingagency@gmail.com";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "MedicalBusiness"],
  "@id": `${SITE_URL}/#business`,
  name: "Aspire Nursing Agency",
  legalName: "Aspire Nursing Agency",
  description:
    "Melbourne-based aged care specialist nursing agency providing Registered Nurses (RN), Enrolled Nurses (EN), Personal Care Assistants (PCA), Registered Nurses In Charge, Clinical Care Coordinators, and After-Hours Supervisors to residential aged care facilities and home care providers across Victoria, Australia.",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.jpg`,
    width: 512,
    height: 512,
  },
  image: `${SITE_URL}/logo.jpg`,
  telephone: PHONE_E164,
  email: EMAIL,
  foundingDate: "2014",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  areaServed: [
    { "@type": "State", name: "Victoria", sameAs: "https://en.wikipedia.org/wiki/Victoria_(Australia)" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  knowsAbout: [
    "Aged Care Nursing",
    "Residential Aged Care Staffing",
    "Home Care Staffing",
    "Registered Nursing",
    "Enrolled Nursing",
    "Personal Care Assistance",
    "Clinical Care Coordination",
  ],
  sameAs: [
    "https://www.instagram.com/aspirenursingagency/",
    "https://www.facebook.com/people/Aspire-Nursing-Agency/61591621670477/",
    "https://www.linkedin.com/company/aspirenursing",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Aspire Nursing Agency",
  description: "Aged Care Specialist Nursing Agency — Melbourne, Victoria, Australia",
  publisher: { "@id": `${SITE_URL}/#business` },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

export function serviceSchema(service: {
  id: string;
  title: string;
  description: string;
  short: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/${service.id}/#service`,
    name: service.title,
    description: service.description,
    provider: { "@id": `${SITE_URL}/#business` },
    serviceType: "Aged Care Staffing",
    areaServed: {
      "@type": "State",
      name: "Victoria",
    },
    url: `${SITE_URL}/services/${service.id}`,
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
