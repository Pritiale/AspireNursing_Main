import Link from "next/link";
import { contactConfig } from "@/lib/contact";

export default function CTA() {
  return (
    <section className="bg-white pb-20 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-brand-blue-dark to-brand-blue px-8 py-14 text-center sm:px-16">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to find the right care?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">
            Whether you&apos;re a provider needing reliable staff or a family
            seeking trusted care, our team is here to help.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/book"
              className="rounded-full bg-brand-red px-7 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-red-dark"
            >
              Request Staff
            </Link>
            <Link
              href={contactConfig.phoneHref}
              className="rounded-full bg-white px-7 py-3 text-sm font-semibold text-brand-blue-dark transition-colors hover:bg-brand-blue-light"
            >
              Call Us Today
            </Link>
          </div>

          <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-brand-red/20 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
