import Image from "next/image";
import Link from "next/link";

const differentiators = [
  {
    number: "01",
    title: "Aged Care Only",
    description:
      "We are a dedicated aged care specialist. By focusing solely on this sector, we deeply understand the standards, urgency, and trust that residential facilities and home care providers require.",
  },
  {
    number: "02",
    title: "Rigorously Vetted Staff",
    description:
      "Every nurse and carer is fully qualified, reference-checked, and compliance-verified before any placement — so you receive professionals you can rely on from day one.",
  },
  {
    number: "03",
    title: "Fast, Reliable Placement",
    description:
      "Whether you need shift cover tonight or ongoing support, we match the right professional to your vacancy — often within hours of your request.",
  },
  {
    number: "04",
    title: "24 / 7 Availability",
    description:
      "Staffing needs don't keep office hours. Our team is available around the clock, every day of the year, including weekends and public holidays.",
  },
  {
    number: "05",
    title: "Transparent Pricing",
    description:
      "Clear hourly rates, straightforward agreements, and no hidden fees. You know exactly what you're getting before a shift begins.",
  },
  {
    number: "06",
    title: "Long-Term Partnership",
    description:
      "We work to become a trusted extension of your care team — learning your facility's culture, preferences, and standards to deliver consistency every time.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Top header */}
        <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wide text-brand-red">
              Why Choose Aspire
            </span>
            <h2 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-brand-blue-dark sm:text-5xl">
              The Aspire
              <br />
              <span className="text-brand-blue">Difference</span>
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-brand-muted lg:pb-1">
            We go beyond simply filling a shift. Every placement reflects our
            commitment to quality, safety, and care — because the people in
            your facility deserve nothing less.
          </p>
        </div>

        {/* Main content: image + feature grid */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[5fr_7fr] lg:items-start lg:gap-16">

          {/* Left: image with overlay stat */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/services/registered-nurses.png"
                alt="Aspire nurse providing compassionate aged care"
                width={640}
                height={700}
                loading="eager"
                className="h-[460px] w-full object-cover lg:h-[560px]"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-4 rounded-2xl bg-brand-blue-dark px-7 py-5 text-white shadow-2xl lg:-right-8">
              <p className="text-4xl font-extrabold">500+</p>
              <p className="mt-0.5 text-sm text-white/70">Vetted Care Professionals</p>
            </div>
            {/* Accent bar */}
            <div className="absolute left-0 top-8 h-16 w-1.5 rounded-r-full bg-brand-red" />
          </div>

          {/* Right: differentiator grid */}
          <div className="grid gap-0 divide-y divide-gray-100 sm:grid-cols-2 sm:divide-y-0 sm:gap-px sm:bg-gray-100">
            {differentiators.map((item) => (
              <div
                key={item.number}
                className="group bg-white px-6 py-7 transition-colors hover:bg-brand-blue-light/40 sm:px-7"
              >
                <p className="text-xs font-bold tracking-widest text-brand-red">
                  {item.number}
                </p>
                <h3 className="mt-2 text-base font-bold text-brand-blue-dark">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-20 flex flex-col items-center gap-5 rounded-3xl bg-gray-50 px-8 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-xl font-bold text-brand-blue-dark">
              Ready to experience the Aspire difference?
            </p>
            <p className="mt-1 text-sm text-brand-muted">
              Talk to our team today — we&apos;ll find the right care professionals for your facility.
            </p>
          </div>
          <div className="flex flex-shrink-0 gap-3">
            <Link
              href="/book"
              className="rounded-full bg-brand-red px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
            >
              Request Staff
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-brand-border bg-white px-7 py-3 text-sm font-semibold text-brand-blue-dark transition-colors hover:bg-brand-blue-light"
            >
              Contact Us
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
