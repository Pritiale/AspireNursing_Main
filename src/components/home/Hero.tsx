import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-blue-dark">
      {/* Decorative gradient + glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-blue-dark via-brand-blue-dark to-[#1c3d5c]" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-blue/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-brand-red/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:py-24">
        {/* Copy */}
        <div className="text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-brand-red" />
            Aged Care Specialist Nursing Agency
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Aged Care
            <br />
            Specialist Nursing Agency
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Aspire Nursing Agency specialises in aged care — supplying
            experienced, fully-vetted nurses and carers to facilities and
            families who want trusted, compassionate support, exactly when they
            need it.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#contact"
              className="rounded-full bg-brand-red px-8 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-brand-red/30 transition-all hover:bg-brand-red-dark hover:shadow-xl"
            >
              Request Staff Now
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-white/30 bg-white/5 px-8 py-3.5 text-center text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white hover:text-brand-blue-dark"
            >
              Explore Services
            </Link>
          </div>

          {/* Trust strip */}
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-2">
              <div className="flex text-brand-red">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3 6.3 6.9.6-5.2 4.6 1.6 6.8L12 17.8 5.7 20.9l1.6-6.8L2 9.5l6.9-.6L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-medium text-white/90">Rated by 200+ providers</span>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div className="flex items-center gap-6">
              <div>
                <p className="text-2xl font-bold">500+</p>
                <p className="text-xs text-white/70">Care Staff</p>
              </div>
              <div>
                <p className="text-2xl font-bold">24/7</p>
                <p className="text-xs text-white/70">Availability</p>
              </div>
              <div>
                <p className="text-2xl font-bold">10+ yrs</p>
                <p className="text-xs text-white/70">Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative mt-4 lg:mt-0">
          <div className="relative h-[360px] overflow-hidden rounded-3xl border border-white/10 shadow-2xl sm:h-[460px] lg:h-[600px]">
            <Image
              src="/hero.jpg"
              alt="Aspire nurse providing compassionate care to an elderly client at home"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="animate-kenburns object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark/40 to-transparent" />
          </div>

          {/* Floating availability card */}
          <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl sm:px-5 sm:py-3.5 lg:-bottom-5 lg:-left-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <div>
              <p className="text-sm font-bold text-brand-blue-dark">Available Now</p>
              <p className="text-xs text-brand-muted">Staff placed within hours</p>
            </div>
          </div>

          {/* Floating verified badge */}
          <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-brand-red px-4 py-2 text-white shadow-lg lg:-right-5 lg:-top-3">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1l3 2.5 4-.4.9 3.9 3.1 2.5-2 3.5 2 3.5-3.1 2.5-.9 3.9-4-.4L12 23l-3-2.5-4 .4-.9-3.9L1 14.5l2-3.5-2-3.5 3.1-2.5L5 1.1l4 .4L12 1zm-1.2 14.2l5.5-5.5-1.4-1.4-4.1 4.1-1.8-1.8-1.4 1.4 3.2 3.2z" />
            </svg>
            <span className="text-xs font-semibold">Vetted &amp; Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
}
