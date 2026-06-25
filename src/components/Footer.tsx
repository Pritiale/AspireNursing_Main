import Image from "next/image";
import Link from "next/link";
import { contactConfig } from "@/lib/contact";
import SocialIcons from "@/components/SocialIcons";

const footerNav = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Why Choose Us", href: "/about#why-us" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ],
  "Our Services": [
    { label: "Registered Nurses (RN)", href: "/services/registered-nurses" },
    { label: "Enrolled Nurses (EN)", href: "/services/enrolled-nurses" },
    { label: "Personal Care Assistants", href: "/services/personal-care-assistants" },
    { label: "Registered Nurse In Charge", href: "/services/registered-nurse-in-charge" },
    { label: "Clinical Care Coordinator", href: "/services/clinical-care-coordinator" },
    { label: "After-Hours Supervisor", href: "/services/after-hours-supervisor" },
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-brand-border bg-brand-blue-light">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">

            {/* Logo lockup — matches navbar */}
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Image
                src="/logo.jpg"
                alt="Aspire Nursing Agency cross icon"
                width={52}
                height={52}
                className="h-12 w-12 flex-none rounded-sm object-contain"
              />
              <span className="h-11 w-px flex-none bg-brand-blue-dark/25" aria-hidden="true" />
              <span className="flex select-none flex-col leading-none">
                <span
                  className="text-[1.35rem] font-black tracking-tight text-[#0c2461]"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  ASPIRE
                </span>
                <span
                  className="text-[0.7rem] font-bold text-[#1e6bbf]"
                  style={{ letterSpacing: "0.12em" }}
                >
                  NURSING AGENCY
                </span>
                <span className="my-[3px] flex items-center" aria-hidden="true">
                  <span className="h-px flex-1 bg-[#1e6bbf]/40" />
                  <svg
                    width="22" height="7" viewBox="0 0 34 10"
                    fill="none" stroke="#e23a4e" strokeWidth="1.6"
                    strokeLinecap="round" strokeLinejoin="round"
                    className="mx-0.5 flex-none"
                  >
                    <path d="M0 5 H8 L10 2 L13 8 L17 0 L20 9 L22.5 2 L25 5 H34" />
                  </svg>
                  <span className="h-px flex-1 bg-[#1e6bbf]/40" />
                </span>
                <span
                  className="text-[0.47rem] font-semibold uppercase text-[#0c2461]/75"
                  style={{ letterSpacing: "0.22em" }}
                >
                  Agedcare Specialist Nursing Agency
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-brand-muted">
              An aged care specialist nursing agency — providing compassionate,
              qualified nurses and carers to facilities and families across the
              aged care sector.
            </p>

            {/* Contact details */}
            <div className="mt-4 space-y-1.5 text-sm text-brand-muted">
              <p className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="flex-none text-brand-blue" aria-hidden="true">
                  <path d="M6.6 10.8a15.3 15.3 0 006.6 6.6l2.2-2.2a1 1 0 011-.24 11.4 11.4 0 003.6.58 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.4 11.4 0 00.58 3.6 1 1 0 01-.25 1l-2.2 2.2z" />
                </svg>
                <a href={contactConfig.phoneHref} className="transition-colors hover:text-brand-blue">
                  {contactConfig.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="flex-none text-brand-blue" aria-hidden="true">
                  <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm8 7L4 6.5V8l8 4.5L20 8V6.5L12 11z" />
                </svg>
                <a href={contactConfig.emailHref} className="transition-colors hover:text-brand-blue">
                  {contactConfig.email}
                </a>
              </p>
            </div>

            {/* Social icons */}
            {contactConfig.socialLinks.length > 0 && (
              <div className="mt-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-blue-dark">
                  Follow Us
                </p>
                <SocialIcons links={contactConfig.socialLinks} variant="light" />
              </div>
            )}
          </div>

          {/* Link columns */}
          {Object.entries(footerNav).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-bold uppercase tracking-wide text-brand-blue-dark">
                {heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-brand-muted transition-colors hover:text-brand-blue"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-brand-border pt-6 text-sm text-brand-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Aspire Nursing Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-brand-blue">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-brand-blue">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
