import { notFound } from "next/navigation";
import { services } from "@/data/services";
import BookingStepper from "@/components/booking/BookingStepper";
import ConfirmBooking from "@/components/booking/ConfirmBooking";

type Params = { service: string };

export default async function ConfirmPage({
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
      <BookingStepper current={4} />

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold tracking-tight text-brand-blue-dark sm:text-3xl">
          Confirm your booking
        </h1>
        <p className="mt-2 text-brand-muted">
          Please review the details below before submitting your request.
        </p>

        <ConfirmBooking serviceId={selected.id} />
      </div>
    </div>
  );
}
