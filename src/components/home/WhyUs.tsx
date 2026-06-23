const reasons = [
  {
    title: "Aged Care Focused",
    description: "100% dedicated to aged care — it's the only thing we do, and we do it well.",
    icon: "🎯",
  },
  {
    title: "Vetted Professionals",
    description: "Qualified, certified, and background-checked nurses and carers you can rely on.",
    icon: "🛡️",
  },
  {
    title: "Rapid Placement",
    description: "Fast matching and shift cover — often within hours of your request.",
    icon: "⚡",
  },
  {
    title: "24/7 Support",
    description: "A dedicated team available around the clock, every day of the year.",
    icon: "📞",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-red">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-blue-dark sm:text-4xl">
            The Aspire difference
          </h2>
          <p className="mt-4 text-lg text-brand-muted">
            We go beyond staffing to deliver care that providers and families
            truly trust.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-brand-border bg-gradient-to-b from-white to-brand-blue-light/40 p-7 text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-blue-light text-3xl">
                {reason.icon}
              </div>
              <h3 className="mt-5 text-lg font-bold text-brand-blue-dark">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
