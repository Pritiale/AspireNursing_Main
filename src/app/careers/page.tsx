import Link from "next/link";
import { contactConfig } from "@/lib/contact";
import PageBanner from "@/components/PageBanner";

export default function CareersPage() {
  return (
    <>
      <PageBanner
        eyebrow="Join Our Team"
        title="Careers at Aspire Nursing"
        description="We are always looking for passionate, qualified nurses and carers who specialise in aged care."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand-blue-dark">Work with an aged care specialist</h2>
          <p className="mt-4 text-lg leading-relaxed text-brand-muted">
            Aspire Nursing Agency connects skilled aged care professionals with
            facilities and providers that value quality care. Career listings and
            an application form will be added here soon.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-brand-muted">
            In the meantime, please reach out to express your interest.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={contactConfig.careersEmailHref}
              className="rounded-full bg-brand-red px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
            >
              Email Your Interest
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-brand-border bg-white px-7 py-3 text-sm font-semibold text-brand-blue-dark transition-colors hover:bg-brand-blue-light"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
