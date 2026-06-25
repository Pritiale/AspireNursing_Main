import Image from "next/image";
import Link from "next/link";
import { type Service } from "@/data/services";
import { getServicePricing, formatHourlyRate, pricingConfig } from "@/lib/pricing";

interface ServiceGridProps {
  services: Service[];
  /** Show the "View All Services" CTA at the bottom. Default: false. */
  showCta?: boolean;
}

export default function ServiceGrid({ services, showCta = false }: ServiceGridProps) {
  return (
    <>
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const pricing = getServicePricing(service.id);
          return (
            <div
              key={service.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image / gradient placeholder */}
              <div className="relative h-52 w-full overflow-hidden">
                {service.image ? (
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    priority={index < 3}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${service.gradient}`}
                  >
                    {service.abbr && (
                      <span className="text-3xl font-extrabold tracking-widest text-white/30 select-none">
                        {service.abbr}
                      </span>
                    )}
                  </div>
                )}
                {/* Abbr badge */}
                {service.abbr && (
                  <span className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-brand-blue-dark backdrop-blur-sm shadow">
                    {service.abbr}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-brand-blue-dark transition-colors group-hover:text-brand-blue">
                  {service.title}
                </h3>

                {/* Pricing row */}
                {pricing && (
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-brand-blue-light px-3 py-1 text-sm font-bold text-brand-blue-dark">
                      {formatHourlyRate(pricing.hourlyRate)}
                    </span>
                    <span className="text-xs text-brand-muted">
                      Afternoon &amp; Night rates apply
                    </span>
                  </div>
                )}

                <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted">
                  {service.short}
                </p>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <Link
                    href={`/services/${service.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red transition-colors hover:text-brand-red-dark"
                  >
                    Learn More
                    <svg
                      className="transition-transform group-hover:translate-x-1"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </Link>
                  <Link
                    href={`/book/${service.id}`}
                    className="rounded-full bg-brand-red px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-brand-red-dark"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pricing disclaimer */}
      <p className="mt-8 text-center text-xs text-brand-muted">{pricingConfig.note}</p>

      {showCta && (
        <div className="mt-6 text-center">
          <Link
            href="/services"
            className="inline-flex rounded-full bg-brand-blue px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark"
          >
            View All Services
          </Link>
        </div>
      )}
    </>
  );
}
