"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type NavChild = { label: string; href: string; description?: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Our Care Team",
    href: "/services",
    children: [
      { label: "Registered Nurses (RN)", href: "/services#registered-nurses", description: "Clinical leadership & complex aged care" },
      { label: "Enrolled Nurses (EN)", href: "/services#enrolled-nurses", description: "Hands-on clinical support" },
      { label: "Personal Care Assistants", href: "/services#personal-care-assistants", description: "Personal care, daily living & companionship" },
      { label: "Registered Nurse In Charge", href: "/services#registered-nurse-in-charge", description: "Shift clinical leadership" },
      { label: "Clinical Care Coordinator", href: "/services#clinical-care-coordinator", description: "Care planning & clinical governance" },
      { label: "After-Hours Supervisor", href: "/services#after-hours-supervisor", description: "Evening, night & weekend leadership" },
    ],
  },
  {
    label: "About",
    href: "/#about",
    children: [
      { label: "Who We Are", href: "/#about", description: "Our story and mission" },
      { label: "Why Choose Us", href: "/#why-us", description: "The Aspire difference" },
      { label: "Careers", href: "/#contact", description: "Join our care team" },
    ],
  },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top utility bar */}
      <div className="hidden bg-brand-blue-dark text-white md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <a href="tel:+10000000000" className="flex items-center gap-2 text-white/90 transition-colors hover:text-white">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8a15.3 15.3 0 006.6 6.6l2.2-2.2a1 1 0 011-.24 11.4 11.4 0 003.6.58 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.4 11.4 0 00.58 3.6 1 1 0 01-.25 1l-2.2 2.2z"/></svg>
              +1 (000) 000-0000
            </a>
            <a href="mailto:info@aspirenursing.com" className="hidden items-center gap-2 text-white/90 transition-colors hover:text-white lg:flex">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm8 7L4 6.5V8l8 4.5L20 8V6.5L12 11z"/></svg>
              info@aspirenursing.com
            </a>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/#contact" className="text-white/90 transition-colors hover:text-white">Careers</Link>
            <span className="text-white/30">|</span>
            <Link href="/#contact" className="font-semibold text-white transition-colors hover:text-white/80">Register for Jobs</Link>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <nav className="border-b border-brand-border bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <Image
              src="/logo.jpg"
              alt="Aspire Nursing Agency logo"
              width={46}
              height={46}
              className="h-11 w-11 rounded-md object-contain"
              priority
            />
            <span className="flex flex-col leading-tight">
              <span className="text-lg font-bold tracking-tight text-brand-blue-dark">
                Aspire Nursing
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-blue">
                Agency
              </span>
            </span>
          </Link>

          {/* Desktop nav with hover dropdowns */}
          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-brand-blue-dark transition-colors hover:text-brand-blue"
                >
                  {item.label}
                  {item.children && (
                    <svg className="mt-0.5 transition-transform group-hover:rotate-180" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                    </svg>
                  )}
                </Link>

                {item.children && (
                  <div className="invisible absolute left-0 top-full z-50 w-72 translate-y-1 pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="overflow-hidden rounded-xl border border-brand-border bg-white shadow-xl">
                      <ul className="p-2">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-brand-blue-light"
                            >
                              <span className="block text-sm font-semibold text-brand-blue-dark">
                                {child.label}
                              </span>
                              {child.description && (
                                <span className="mt-0.5 block text-xs text-brand-muted">
                                  {child.description}
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/#contact"
              className="rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-red-dark"
            >
              Request Staff
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-brand-blue-dark md:hidden"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-brand-border bg-white md:hidden">
            <ul className="space-y-1 px-4 py-3">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setMobileSub((v) => (v === item.label ? null : item.label))}
                        className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-brand-blue-dark"
                      >
                        {item.label}
                        <svg className={`transition-transform ${mobileSub === item.label ? "rotate-180" : ""}`} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                        </svg>
                      </button>
                      {mobileSub === item.label && (
                        <ul className="ml-3 space-y-1 border-l border-brand-border pl-3">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                onClick={() => setOpen(false)}
                                className="block rounded-md px-3 py-2 text-sm text-brand-muted transition-colors hover:bg-brand-blue-light hover:text-brand-blue"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-2 text-base font-medium text-brand-blue-dark transition-colors hover:bg-brand-blue-light hover:text-brand-blue"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/#contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-brand-red px-5 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
                >
                  Request Staff
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

