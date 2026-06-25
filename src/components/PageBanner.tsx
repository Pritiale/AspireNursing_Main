type PageBannerProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function PageBanner({ eyebrow, title, description }: PageBannerProps) {
  return (
    <section className="relative overflow-hidden bg-brand-blue-dark">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-blue-dark via-brand-blue-dark to-[#1c3d5c]" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-blue/30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
            <span className="h-2 w-2 rounded-full bg-brand-red" />
            {eyebrow}
          </span>
        )}
        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">{description}</p>
        )}
      </div>
    </section>
  );
}
