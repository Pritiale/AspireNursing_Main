import Image from "next/image";
import Link from "next/link";

const footerNav = {
  Company: [
    { label: "About Us", href: "#about" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Careers", href: "#contact" },
    { label: "Contact", href: "#contact" },
  ],
  "Our Care Team": [
    { label: "Registered Nurses (RN)", href: "/services#registered-nurses" },
    { label: "Enrolled Nurses (EN)", href: "/services#enrolled-nurses" },
    { label: "Personal Care Assistants", href: "/services#personal-care-assistants" },
    { label: "Registered Nurse In Charge", href: "/services#registered-nurse-in-charge" },
    { label: "Clinical Care Coordinator", href: "/services#clinical-care-coordinator" },
    { label: "After-Hours Supervisor", href: "/services#after-hours-supervisor" },
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-brand-border bg-brand-blue-light">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.jpg"
                alt="Aspire Nursing Agency logo"
                width={48}
                height={48}
                className="h-12 w-12 rounded-md object-contain"
              />
              <span className="flex flex-col leading-tight">
                <span className="text-lg font-bold text-brand-blue-dark">Aspire Nursing</span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red">
                  Agency
                </span>
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-brand-muted">
              An aged care specialist nursing agency — providing compassionate,
              qualified nurses and carers to facilities and families across the
              aged care sector.
            </p>
            <div className="mt-5 space-y-1 text-sm text-brand-muted">
              <p>
                <span className="font-semibold text-brand-blue-dark">Phone:</span>{" "}
                <a href="tel:+10000000000" className="hover:text-brand-blue">
                  +1 (000) 000-0000
                </a>
              </p>
              <p>
                <span className="font-semibold text-brand-blue-dark">Email:</span>{" "}
                <a href="mailto:info@aspirenursing.com" className="hover:text-brand-blue">
                  info@aspirenursing.com
                </a>
              </p>
            </div>
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

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-brand-border pt-6 text-sm text-brand-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Aspire Nursing Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-brand-blue">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-brand-blue">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
