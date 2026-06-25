import { services } from "@/data/services";
import ServiceGrid from "@/components/ServiceGrid";

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-red">
            What We Provide
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-blue-dark sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-brand-muted">
            We are a specialised recruitment agency working in the aged care
            sector, supplying qualified nurses and carers to residential
            facilities and home care providers across Victoria.
          </p>
        </div>

        <div className="mt-14">
          <ServiceGrid services={services} showCta />
        </div>
      </div>
    </section>
  );
}
