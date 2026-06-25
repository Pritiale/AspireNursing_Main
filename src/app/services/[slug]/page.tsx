import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import PageBanner from "@/components/PageBanner";
import { getServicePricing, formatHourlyRate, pricingConfig } from "@/lib/pricing";

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
      <PageBanner
        eyebrow={service.abbr ? `${service.abbr} · Aged Care Specialist` : "Aged Care Specialist"}
        title={service.title}
        description={service.short}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              {service.abbr && (
                <span className="rounded-full bg-brand-blue px-4 py-1.5 text-sm font-bold text-white">
                  {service.abbr}
                </span>
              )}
            </div>
            <p className="mt-6 text-lg leading-relaxed text-brand-muted">
              {service.description}
            </p>

            {/* Pricing table */}
            {pricing && (
              <div className="mt-6 overflow-hidden rounded-2xl border border-brand-border">
                <div className="bg-brand-blue-light px-5 py-3">
                  <p className="text-sm font-bold text-brand-blue-dark">Hourly Rates (AUD, incl. GST)</p>
                </div>
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-brand-border">
                      <td className="px-5 py-3 font-medium text-brand-muted">Standard / Day Shift</td>
                      <td className="px-5 py-3 text-right font-bold text-brand-blue-dark">
                        {formatHourlyRate(pricing.hourlyRate)}
                      </td>
                    </tr>
                    <tr className="border-b border-brand-border">
                      <td className="px-5 py-3 font-medium text-brand-muted">Afternoon Shift</td>
                      <td className="px-5 py-3 text-right font-bold text-brand-blue-dark">
                        {pricing.afternoonRate
                          ? formatHourlyRate(pricing.afternoonRate)
                          : <span className="font-normal text-brand-muted">TBC — contact us</span>}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3 font-medium text-brand-muted">Night Shift</td>
                      <td className="px-5 py-3 text-right font-bold text-brand-blue-dark">
                        {pricing.nightRate
                          ? formatHourlyRate(pricing.nightRate)
                          : <span className="font-normal text-brand-muted">TBC — contact us</span>}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="bg-gray-50 px-5 py-2.5">
                  <p className="text-xs text-brand-muted">
                    Minimum {pricing.minimumHours}h shift. {pricingConfig.note}
                  </p>
                </div>
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/book/${service.id}`}
                className="rounded-full bg-brand-red px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
              >
                Request {service.title}
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-brand-border bg-white px-7 py-3 text-sm font-semibold text-brand-blue-dark transition-colors hover:bg-brand-blue-light"
              >
                All Services
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-blue-dark">What we provide</h2>
            <ul className="mt-5 grid gap-4 sm:grid-cols-1">
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
