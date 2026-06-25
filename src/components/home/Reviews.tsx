const platforms = [
  {
    name: "Google Reviews",
    rating: 4.9,
    count: "50+ reviews",
    icon: (
      <svg width="32" height="32" viewBox="0 0 48 48" aria-hidden="true">
        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
        <path fill="none" d="M0 0h48v48H0z" />
      </svg>
    ),
    accentColor: "text-[#EA4335]",
    badgeColor: "bg-red-50 text-red-600",
  },
  {
    name: "Facebook",
    rating: 4.8,
    count: "40+ reviews",
    icon: (
      <svg width="32" height="32" viewBox="0 0 48 48" aria-hidden="true">
        <path fill="#1877F2" d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708V30.938h-6.094V24H20.25v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.907h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.063 6.938H27.75v16.77C39.224 45.908 48 35.979 48 24z" />
        <path fill="#fff" d="M33.343 30.938 34.406 24H27.75v-4.5c0-1.9.93-3.75 3.911-3.75h3.026V9.843S32.024 9.375 29.4 9.375c-5.482 0-9.065 3.323-9.065 9.337V24h-6.094v6.938H20.25V47.708a24.21 24.21 0 0 0 7.5 0V30.938h5.593z" />
      </svg>
    ),
    accentColor: "text-[#1877F2]",
    badgeColor: "bg-blue-50 text-blue-700",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.min(1, Math.max(0, rating - i));
        if (fill >= 1) {
          return (
            <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#FBBF24">
              <path d="M12 2l3 6.3 6.9.6-5.2 4.6 1.6 6.8L12 17.8 5.7 20.9l1.6-6.8L2 9.5l6.9-.6L12 2z" />
            </svg>
          );
        }
        if (fill > 0) {
          return (
            <svg key={i} width="18" height="18" viewBox="0 0 24 24">
              <defs>
                <linearGradient id={`half-${i}`}>
                  <stop offset="50%" stopColor="#FBBF24" />
                  <stop offset="50%" stopColor="#D1D5DB" />
                </linearGradient>
              </defs>
              <path
                d="M12 2l3 6.3 6.9.6-5.2 4.6 1.6 6.8L12 17.8 5.7 20.9l1.6-6.8L2 9.5l6.9-.6L12 2z"
                fill={`url(#half-${i})`}
              />
            </svg>
          );
        }
        return (
          <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#D1D5DB">
            <path d="M12 2l3 6.3 6.9.6-5.2 4.6 1.6 6.8L12 17.8 5.7 20.9l1.6-6.8L2 9.5l6.9-.6L12 2z" />
          </svg>
        );
      })}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-brand-red">
            Our Reputation
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-blue-dark sm:text-4xl">
            Trusted by facilities across Victoria
          </h2>
          <p className="mt-4 text-lg text-brand-muted">
            Don&apos;t take our word for it — hear from the providers and facilities
            who rely on Aspire every day.
          </p>
        </div>

        {/* Rating badges */}
        <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-8">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="flex w-full max-w-xs items-center gap-5 rounded-2xl border border-gray-100 bg-white px-7 py-6 shadow-md transition-shadow hover:shadow-lg sm:w-auto"
            >
              <div className="flex-none">{p.icon}</div>
              <div>
                <p className="text-sm font-semibold text-gray-700">{p.name}</p>
                <div className="mt-1 flex items-center gap-2">
                  <StarRating rating={p.rating} />
                  <span className="text-xl font-bold text-gray-900">{p.rating}</span>
                </div>
                <p className="mt-0.5 text-xs text-gray-500">{p.count}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-7 transition-shadow hover:shadow-md"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24">
                    <path d="M12 2l3 6.3 6.9.6-5.2 4.6 1.6 6.8L12 17.8 5.7 20.9l1.6-6.8L2 9.5l6.9-.6L12 2z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-gray-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue text-sm font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.author}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "Aspire Nursing has been an absolute lifesaver for our facility. Their RNs are professional, compassionate, and always arrive prepared. We can always count on them at short notice.",
    author: "Sarah M.",
    initials: "SM",
    role: "Director of Nursing, Melbourne",
  },
  {
    quote:
      "We've tried other agencies but none match the quality and reliability of Aspire. Their PCAs genuinely care about our residents and the communication from the team is outstanding.",
    author: "James T.",
    initials: "JT",
    role: "Operations Manager, Aged Care Facility",
  },
  {
    quote:
      "The after-hours supervisor we had last weekend was exceptional — calm under pressure, great with the team. This is exactly the standard we need every time.",
    author: "Linda R.",
    initials: "LR",
    role: "Care Manager, Victoria",
  },
];
