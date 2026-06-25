import type { Metadata } from "next";
import { services } from "@/data/services";
import { createPageMetadata } from "@/lib/site";

type Params = { service: string };

export function generateStaticParams() {
  return services.map((service) => ({ service: service.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { service } = await params;
  const found = services.find((s) => s.id === service);

  return createPageMetadata({
    title: found ? `Book ${found.title}` : "Book Staff",
    description: found
      ? `Request ${found.title} from Aspire Nursing Agency for your aged care facility or home care service.`
      : "Request aged care staff from Aspire Nursing Agency.",
    path: found ? `/book/${found.id}` : "/book",
    noIndex: true,
  });
}

export default function BookServiceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
