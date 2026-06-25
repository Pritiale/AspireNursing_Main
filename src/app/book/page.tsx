import Link from "next/link";
import { services } from "@/data/services";
import BookingStepper from "@/components/booking/BookingStepper";
import { formatHourlyRateLabel, pricingConfig } from "@/lib/pricing";

export default function BookPage() {
  return (
    <div className="bg-brand-blue-light/40">
      <BookingStepper current={1} />

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-brand-blue-dark sm:text-4xl">
            Choose the role you need
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-brand-muted">
            Select an aged care role to begin your booking. Every booking has a
            minimum shift length of {pricingConfig.minimumShiftHours} hours.
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-xs text-brand-muted">{pricingConfig.note}</p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/book/${service.id}`}
              className="group flex items-center justify-between gap-3 rounded-xl border border-brand-border bg-white p-4 transition-all hover:border-brand-blue hover:shadow-md sm:flex-col sm:items-start sm:gap-4 sm:p-5"
            >
              <div className="flex items-center gap-2.5">
                <div>
                  <h2 className="text-base font-bold text-brand-blue-dark sm:text-lg">
                    {service.title}
                  </h2>
                  {formatHourlyRateLabel(service.id) && (
                    <p className="mt-1 text-xs font-semibold text-brand-blue">
                      {formatHourlyRateLabel(service.id)}
                    </p>
                  )}
                </div>
                {service.abbr && (
                  <span className="rounded-full bg-brand-blue-light px-2 py-0.5 text-[10px] font-bold text-brand-blue">
                    {service.abbr}
                  </span>
                )}
              </div>
              <span className="flex flex-none items-center gap-1 text-brand-blue sm:w-full sm:justify-center sm:rounded-full sm:bg-brand-blue sm:px-4 sm:py-2.5 sm:text-sm sm:font-semibold sm:text-white sm:transition-colors sm:group-hover:bg-brand-blue-dark">
                <span className="hidden sm:inline">Select &amp; Continue</span>
                <svg className="transition-transform group-hover:translate-x-1" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
