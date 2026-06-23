import Link from "next/link";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-red">
            What We Provide
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-blue-dark sm:text-4xl">
            Specialist aged care professionals
          </h2>
          <p className="mt-4 text-lg text-brand-muted">
            We focus on aged care only — supplying qualified nurses and carers to
            residential aged care facilities and home care providers.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services#${service.id}`}
              className="group rounded-2xl border border-brand-border bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand-blue hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-light text-2xl">
                  {service.icon}
                </div>
                {service.abbr && (
                  <span className="rounded-full bg-brand-blue-light px-2.5 py-1 text-xs font-bold text-brand-blue">
                    {service.abbr}
                  </span>
                )}
              </div>
              <h3 className="mt-5 text-lg font-bold text-brand-blue-dark">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                {service.short}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue transition-colors group-hover:text-brand-blue-dark">
                Learn more
                <svg className="transition-transform group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex rounded-full bg-brand-blue px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark"
          >
            Meet Our Care Team
          </Link>
        </div>
      </div>
    </section>
  );
}
