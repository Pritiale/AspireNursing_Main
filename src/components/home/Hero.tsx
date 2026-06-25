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
            <span className="text-white">Specialist Nursing Agency</span>
            <br />
            <span className="text-[0.6em] font-semibold tracking-wide text-white/70">
              Melbourne &amp; Victoria
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Aspire Nursing Agency is Melbourne&apos;s aged care specialist — supplying
            experienced, fully-vetted Registered Nurses, Enrolled Nurses, and
            Personal Care Assistants to residential aged care facilities and
            home care providers across Victoria, 24/7.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/book"
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
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            {/* Google badge */}
            <div className="flex items-center gap-2.5 rounded-xl bg-white/10 px-3.5 py-2 backdrop-blur-sm ring-1 ring-white/15">
              <svg width="20" height="20" viewBox="0 0 48 48" aria-label="Google" className="flex-none">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
              <div>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#FBBF24">
                        <path d="M12 2l3 6.3 6.9.6-5.2 4.6 1.6 6.8L12 17.8 5.7 20.9l1.6-6.8L2 9.5l6.9-.6L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-bold text-white">4.9</span>
                </div>
                <p className="text-[10px] text-white/65">Google Reviews</p>
              </div>
            </div>

            {/* Facebook badge */}
            <div className="flex items-center gap-2.5 rounded-xl bg-white/10 px-3.5 py-2 backdrop-blur-sm ring-1 ring-white/15">
              <svg width="20" height="20" viewBox="0 0 48 48" aria-label="Facebook" className="flex-none">
                <path fill="#1877F2" d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708V30.938h-6.094V24H20.25v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.907h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.063 6.938H27.75v16.77C39.224 45.908 48 35.979 48 24z"/>
                <path fill="#fff" d="M33.343 30.938 34.406 24H27.75v-4.5c0-1.9.93-3.75 3.911-3.75h3.026V9.843S32.024 9.375 29.4 9.375c-5.482 0-9.065 3.323-9.065 9.337V24h-6.094v6.938H20.25V47.708a24.21 24.21 0 0 0 7.5 0V30.938h5.593z"/>
              </svg>
              <div>
                <div className="flex items-center gap-1">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#FBBF24">
                        <path d="M12 2l3 6.3 6.9.6-5.2 4.6 1.6 6.8L12 17.8 5.7 20.9l1.6-6.8L2 9.5l6.9-.6L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-bold text-white">4.8</span>
                </div>
                <p className="text-[10px] text-white/65">Facebook</p>
              </div>
            </div>

            <div className="h-8 w-px bg-white/20" />

            {/* Stats */}
            <div className="flex items-center gap-6">
              <div>
                <p className="text-2xl font-bold text-white">500+</p>
                <p className="text-xs text-white/70">Care Staff</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">24/7</p>
                <p className="text-xs text-white/70">Availability</p>
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
