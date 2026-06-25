import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { getServicePricing, formatHourlyRate, pricingConfig, type ServicePricing } from "@/lib/pricing";

type Params = { slug: string };

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  const pricing = getServicePricing(service.id);

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-brand-blue-dark">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-blue-dark via-brand-blue-dark to-[#1c3d5c]" />
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-blue/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-24">
          {/* Copy */}
          <div className="text-white">
            <div className="flex flex-wrap items-center gap-2">
              {service.abbr && (
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold tracking-wide text-white backdrop-blur">
                  {service.abbr}
                </span>
              )}
              <span className="text-xs font-semibold uppercase tracking-widest text-white/60">
                Aged Care Specialist
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
              {service.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/book/${service.id}`}
                className="rounded-full bg-brand-red px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-red/30 transition-colors hover:bg-brand-red-dark"
              >
                Request {service.abbr ?? service.title}
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/30 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white hover:text-brand-blue-dark"
              >
                Contact Us
              </Link>
            </div>

            {pricing && (
              <p className="mt-6 text-sm font-semibold text-white/70">
                From{" "}
                <span className="text-white">{formatHourlyRate(pricing.hourlyRate)}</span>
                {" "}· Afternoon &amp; Night rates available
              </p>
            )}
          </div>

          {/* Image */}
          <div className="relative mt-4 lg:mt-0">
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              {service.image ? (
                <Image
                  src={service.image}
                  alt={`${service.title} — Aspire Nursing Agency`}
                  width={720}
                  height={500}
                  priority
                  className="h-[320px] w-full object-cover sm:h-[400px] lg:h-[480px]"
                />
              ) : (
                <div
                  className={`flex h-[320px] w-full items-center justify-center bg-gradient-to-br sm:h-[400px] lg:h-[480px] ${service.gradient}`}
                >
                  {service.abbr && (
                    <span className="text-5xl font-extrabold tracking-widest text-white/20 select-none">
                      {service.abbr}
                    </span>
                  )}
                </div>
              )}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-brand-blue-dark/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Details ── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

          {/* Pricing table */}
          <div>
            <h2 className="text-xl font-bold text-brand-blue-dark">Hourly Rates</h2>
            {pricing ? (
              <div className="mt-5 overflow-hidden rounded-2xl border border-brand-border">
                <div className="flex items-center justify-between bg-brand-blue-light px-5 py-3">
                  <p className="text-sm font-bold text-brand-blue-dark">AUD · incl. GST</p>
                  <span className="rounded-full bg-brand-blue px-2.5 py-0.5 text-xs font-semibold text-white">
                    Min {pricing.minimumHours}h shift
                  </span>
                </div>
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-brand-border bg-white">
                      <td className="px-5 py-3.5">
                        <p className="font-semibold text-brand-blue-dark">Standard / Day Shift</p>
                        <p className="text-xs text-brand-muted">Base rate</p>
                      </td>
                      <td className="px-5 py-3.5 text-right">
                        <span className="text-xl font-extrabold text-brand-blue-dark">
                          {formatHourlyRate(pricing.hourlyRate)}
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-brand-border bg-gray-50/50">
                      <td className="px-5 py-3.5">
                        <p className="font-semibold text-brand-blue-dark">Afternoon Shift</p>
                        <p className="text-xs text-brand-muted">+{pricingConfig.afternoonLoadingPct}% loading · Fair Work Award</p>
                      </td>
                      <td className="px-5 py-3.5 text-right font-bold text-brand-blue-dark">
                        {pricing.afternoonRate
                          ? formatHourlyRate(pricing.afternoonRate)
                          : <span className="font-normal text-brand-muted">TBC</span>}
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-5 py-3.5">
                        <p className="font-semibold text-brand-blue-dark">Night Shift</p>
                        <p className="text-xs text-brand-muted">+{pricingConfig.nightLoadingPct}% loading · Fair Work Award</p>
                      </td>
                      <td className="px-5 py-3.5 text-right font-bold text-brand-blue-dark">
                        {pricing.nightRate
                          ? formatHourlyRate(pricing.nightRate)
                          : <span className="font-normal text-brand-muted">TBC</span>}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="bg-gray-50 px-5 py-3">
                  <p className="text-xs leading-relaxed text-brand-muted">{pricingConfig.note}</p>
                </div>
              </div>
            ) : (
              <p className="mt-4 text-brand-muted">Contact us for pricing details.</p>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/book/${service.id}`}
                className="rounded-full bg-brand-red px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
              >
                Request {service.abbr ?? service.title}
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-brand-border bg-white px-7 py-3 text-sm font-semibold text-brand-blue-dark transition-colors hover:bg-brand-blue-light"
              >
                All Services
              </Link>
            </div>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-xl font-bold text-brand-blue-dark">What we provide</h2>
            <ul className="mt-5 grid gap-4">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 rounded-xl border border-brand-border bg-brand-blue-light/40 p-4"
                >
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-blue text-xs text-white">
                    ✓
                  </span>
                  <span className="text-sm font-medium text-brand-blue-dark">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Other services ── */}
      <section className="border-t border-brand-border bg-brand-blue-light py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-red">
            Explore more
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {services
              .filter((s) => s.id !== service.id)
              .map((s) => (
                <Link
                  key={s.id}
                  href={`/services/${s.id}`}
                  className="rounded-full border border-brand-border bg-white px-4 py-1.5 text-sm font-medium text-brand-muted transition-colors hover:border-brand-blue hover:text-brand-blue"
                >
                  {s.title}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
