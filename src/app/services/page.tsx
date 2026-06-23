import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Care Team",
  description:
    "Aspire Nursing Agency is an aged care specialist staffing agency providing Registered Nurses, Enrolled Nurses, and Personal Care Assistants.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page banner */}
      <section className="relative overflow-hidden bg-brand-blue-dark">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-blue-dark via-brand-blue-dark to-[#1c3d5c]" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-blue/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
            <span className="h-2 w-2 rounded-full bg-brand-red" />
            Aged Care Specialists
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            The aged care professionals we provide
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
            We specialise in aged care only — supplying qualified nurses and
            carers to residential aged care facilities and home care providers.
          </p>
        </div>
      </section>

      {/* Quick nav */}
      <section className="border-b border-brand-border bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-2 px-4 py-4 sm:px-6 lg:px-8">
          {services.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              className="rounded-full border border-brand-border px-4 py-1.5 text-sm font-medium text-brand-muted transition-colors hover:border-brand-blue hover:bg-brand-blue-light hover:text-brand-blue"
            >
              {service.title}
            </a>
          ))}
        </div>
      </section>

      {/* Service sections */}
      <div className="bg-white">
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`scroll-mt-28 ${index % 2 === 1 ? "bg-brand-blue-light" : "bg-white"}`}
          >
            <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
                    {service.icon}
                  </div>
                  {service.abbr && (
                    <span className="rounded-full bg-brand-blue px-3 py-1 text-sm font-bold text-white">
                      {service.abbr}
                    </span>
                  )}
                </div>
                <h2 className="mt-5 text-3xl font-bold tracking-tight text-brand-blue-dark">
                  {service.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-brand-muted">
                  {service.description}
                </p>
                <Link
                  href={`/book/${service.id}`}
                  className="mt-7 inline-flex rounded-full bg-brand-red px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
                >
                  Request {service.title}
                </Link>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 rounded-xl border border-brand-border bg-white p-4"
                    >
                      <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-blue text-xs text-white">
                        ✓
                      </span>
                      <span className="text-sm font-medium text-brand-blue-dark">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-brand-blue-dark to-brand-blue px-8 py-12 text-center sm:px-16">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Not sure which service you need?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">
              Talk to our team and we&apos;ll help you find the right care
              solution for your situation.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/book"
                className="rounded-full bg-brand-red px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
              >
                Request Staff
              </Link>
              <Link
                href="/"
                className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-brand-blue-dark transition-colors hover:bg-brand-blue-light"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
