import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { services } from "@/data/services";
import BookingStepper from "@/components/booking/BookingStepper";
import YourDetailsForm from "@/components/booking/YourDetailsForm";

type Params = { service: string };
type Search = { start?: string; end?: string };

export default async function YourDetailsPage({
  params,
  searchParams,
}: {
  params: Promise<Params>;
  searchParams: Promise<Search>;
}) {
  const { service } = await params;
  const { start, end } = await searchParams;
  const selected = services.find((s) => s.id === service);

  if (!selected) {
    notFound();
  }

  // Shift details are required to reach this step.
  if (!start || !end) {
    redirect(`/book/${selected.id}`);
  }

  return (
    <div className="bg-brand-blue-light/40">
      <BookingStepper current={3} />

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <Link
          href={`/book/${selected.id}?start=${encodeURIComponent(start)}&end=${encodeURIComponent(end)}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-brand-muted transition-colors hover:text-brand-blue"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M11 18l-6-6 6-6" />
          </svg>
          Back to shift details
        </Link>

        <div className="mt-4">
          <h1 className="text-2xl font-bold tracking-tight text-brand-blue-dark sm:text-3xl">
            Your details
          </h1>
          <p className="mt-2 text-brand-muted">
            Tell us about the facility and who we should contact about this
            booking.
          </p>
        </div>

        <YourDetailsForm
          serviceId={selected.id}
          serviceTitle={selected.title}
          start={start}
          end={end}
        />
      </div>
    </div>
  );
}
