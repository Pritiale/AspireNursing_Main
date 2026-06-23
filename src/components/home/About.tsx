import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-brand-blue-light py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-sm">
            <div className="rounded-3xl bg-white p-10 shadow-xl">
              <Image
                src="/logo.jpg"
                alt="Aspire Nursing Agency"
                width={320}
                height={320}
                className="mx-auto h-auto w-full max-w-[260px] object-contain"
              />
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-brand-red px-6 py-2 text-sm font-semibold text-white shadow-lg">
              Caring since 2014
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-red">
            About Us
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-blue-dark sm:text-4xl">
            Aged care is all we do
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-brand-muted">
            Aspire Nursing Agency is a dedicated aged care specialist. By
            focusing solely on aged care, we deeply understand the needs of
            residential facilities, home care providers, and the older
            Australians they support — and we supply nurses and carers who do too.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              {
                title: "Aged care specialists",
                body: "RNs, ENs, and personal care assistants — focused only on aged care.",
              },
              {
                title: "Rigorous vetting",
                body: "Every team member is qualified, reference-checked, and compliance-verified.",
              },
              {
                title: "Always available",
                body: "Round-the-clock support for last-minute and ongoing aged care placements.",
              },
            ].map((point) => (
              <li key={point.title} className="flex gap-4">
                <span className="mt-1 flex h-7 w-7 flex-none items-center justify-center rounded-full bg-brand-blue text-sm text-white">
                  ✓
                </span>
                <div>
                  <p className="font-semibold text-brand-blue-dark">{point.title}</p>
                  <p className="text-sm text-brand-muted">{point.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
