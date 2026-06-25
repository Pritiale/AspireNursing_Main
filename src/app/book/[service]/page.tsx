import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import BookingStepper from "@/components/booking/BookingStepper";
import ShiftDetailsForm from "@/components/booking/ShiftDetailsForm";

type Params = { service: string };

export default async function ServiceBookingPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { service } = await params;
  const selected = services.find((s) => s.id === service);

  if (!selected) {
    notFound();
  }

  return (
    <div className="bg-brand-blue-light/40">
      <BookingStepper current={2} />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <Link
          href="/book"
          className="inline-flex items-center gap-1 text-sm font-medium text-brand-muted transition-colors hover:text-brand-blue"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M11 18l-6-6 6-6" />
          </svg>
          Back to services
        </Link>

        <ShiftDetailsForm
          service={{
            id: selected.id,
            title: selected.title,
            abbr: selected.abbr,
            short: selected.short,
          }}
        />
      </div>
    </div>
  );
}
