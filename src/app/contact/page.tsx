import Link from "next/link";
import { contactConfig } from "@/lib/contact";
import PageBanner from "@/components/PageBanner";

export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Get in Touch"
        title="Contact Us"
        description="Reach our team for staffing requests, enquiries, or support — we are here to help."
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-bold text-brand-blue-dark">How to reach us</h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-muted">
              Whether you need urgent shift cover or ongoing aged care staffing,
              our team is ready to assist.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-red">Phone</p>
                <a
                  href={contactConfig.phoneHref}
                  className="mt-1 block text-lg font-semibold text-brand-blue-dark hover:text-brand-blue"
                >
                  {contactConfig.phone}
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-red">Email</p>
                <a
                  href={contactConfig.emailHref}
                  className="mt-1 block text-lg font-semibold text-brand-blue-dark hover:text-brand-blue"
                >
                  {contactConfig.email}
                </a>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-brand-red">Availability</p>
                <p className="mt-1 text-lg text-brand-muted">24/7 support, every day of the year</p>
              </div>
            </div>

            <Link
              href="/book"
              className="mt-10 inline-flex rounded-full bg-brand-red px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
            >
              Request Staff
            </Link>
          </div>

          <div className="rounded-2xl border border-brand-border bg-brand-blue-light p-8">
            <h2 className="text-xl font-bold text-brand-blue-dark">Send us a message</h2>
            <p className="mt-2 text-sm text-brand-muted">
              A contact form will be added here soon. For now, please call or email us directly.
            </p>
            <div className="mt-8 space-y-4 opacity-60">
              <div className="h-10 rounded-lg border border-brand-border bg-white" />
              <div className="h-10 rounded-lg border border-brand-border bg-white" />
              <div className="h-32 rounded-lg border border-brand-border bg-white" />
              <div className="h-10 rounded-lg bg-brand-blue/40" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
