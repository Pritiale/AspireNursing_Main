"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SocialIcons from "@/components/SocialIcons";
import { contactConfig } from "@/lib/contact";

type NavChild = { label: string; href: string; description?: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Our Services",
    href: "/services",
    children: [
      { label: "Registered Nurses (RN)", href: "/services/registered-nurses", description: "Clinical leadership & complex aged care" },
      { label: "Enrolled Nurses (EN)", href: "/services/enrolled-nurses", description: "Hands-on clinical support" },
      { label: "Personal Care Assistants", href: "/services/personal-care-assistants", description: "Personal care, daily living & companionship" },
      { label: "Registered Nurse In Charge", href: "/services/registered-nurse-in-charge", description: "Shift clinical leadership" },
      { label: "Clinical Care Coordinator", href: "/services/clinical-care-coordinator", description: "Care planning & clinical governance" },
      { label: "After-Hours Supervisor", href: "/services/after-hours-supervisor", description: "Evening, night & weekend leadership" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Who We Are", href: "/about", description: "Our story and mission" },
      { label: "Why Choose Us", href: "/about#why-us", description: "The Aspire difference" },
      { label: "Careers", href: "/careers", description: "Join our care team" },
    ],
  },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMobile = () => {
    setOpen(false);
    setMobileSub(null);
  };

  return (
    <header className="sticky top-0 z-50 w-full relative">
      <div className="border-b border-white/10 bg-brand-blue-dark text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-4 sm:gap-6">
            <a
              href={contactConfig.phoneHref}
              className="flex items-center gap-2 truncate text-white/85 transition-colors hover:text-white"
            >
              <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-white/10">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.6 10.8a15.3 15.3 0 006.6 6.6l2.2-2.2a1 1 0 011-.24 11.4 11.4 0 003.6.58 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.4 11.4 0 00.58 3.6 1 1 0 01-.25 1l-2.2 2.2z" />
                </svg>
              </span>
              <span className="hidden sm:inline">{contactConfig.phone}</span>
              <span className="sm:hidden">Call us</span>
            </a>
            <a
              href={contactConfig.emailHref}
              className="hidden items-center gap-2 text-white/85 transition-colors hover:text-white lg:flex"
            >
              <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-white/10">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm8 7L4 6.5V8l8 4.5L20 8V6.5L12 11z" />
                </svg>
              </span>
              {contactConfig.email}
            </a>
          </div>

          <div className="flex flex-none items-center gap-3 sm:gap-4">
            <Link
              href="/careers"
              className="hidden font-medium text-white/90 transition-colors hover:text-white sm:inline"
            >
              Careers
            </Link>
            <span className="hidden h-4 w-px bg-white/20 sm:block" aria-hidden="true" />
            <SocialIcons links={contactConfig.socialLinks} />
          </div>
        </div>
      </div>

      {/* Main bar */}
      <nav className="border-b border-brand-border/80 bg-white/95 shadow-sm shadow-brand-blue-dark/5 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
          {/* Brand lockup — square icon + code-rendered text (crisp at all sizes) */}
          <Link href="/" className="flex shrink-0 items-center gap-2.5 sm:gap-3" onClick={closeMobile}>
            {/* Cross icon */}
            <Image
              src="/logo.jpg"
              alt="Aspire Nursing Agency cross icon"
              width={52}
              height={52}
              className="h-10 w-10 flex-none rounded-sm object-contain sm:h-12 sm:w-12"
              priority
            />

            {/* Vertical rule */}
            <span className="h-9 w-px flex-none bg-brand-blue-dark/25 sm:h-11" aria-hidden="true" />

            {/* Text lockup */}
            <span className="flex select-none flex-col leading-none">
              {/* ASPIRE */}
              <span
                className="text-[1.35rem] font-black tracking-tight text-[#0c2461] sm:text-[1.6rem]"
                style={{ letterSpacing: "-0.01em" }}
              >
                ASPIRE
              </span>

              {/* NURSING AGENCY */}
              <span
                className="text-[0.65rem] font-bold text-[#1e6bbf] sm:text-[0.78rem]"
                style={{ letterSpacing: "0.12em" }}
              >
                NURSING AGENCY
              </span>

              {/* Divider + EKG heartbeat */}
              <span className="my-[3px] flex items-center gap-0" aria-hidden="true">
                <span className="h-px flex-1 bg-[#1e6bbf]/40" />
                <svg
                  width="22"
                  height="7"
                  viewBox="0 0 34 10"
                  fill="none"
                  stroke="#e23a4e"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mx-0.5 flex-none"
                  aria-hidden="true"
                >
                  <path d="M0 5 H8 L10 2 L13 8 L17 0 L20 9 L22.5 2 L25 5 H34" />
                </svg>
                <span className="h-px flex-1 bg-[#1e6bbf]/40" />
              </span>

              {/* Tagline */}
              <span
                className="hidden text-[0.42rem] font-semibold uppercase text-[#0c2461]/80 sm:block sm:text-[0.48rem]"
                style={{ letterSpacing: "0.22em" }}
              >
                Agedcare Specialist Nursing Agency
              </span>
            </span>
          </Link>

          {/* Desktop nav with hover dropdowns */}
          <ul className="hidden items-center gap-0.5 md:flex">
            {navItems.map((item) => (
              <li key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="relative flex items-center gap-1 rounded-lg px-3.5 py-2.5 text-sm font-medium text-brand-blue-dark transition-colors hover:text-brand-blue"
                >
                  {item.label}
                  {item.children && (
                    <svg
                      className="mt-0.5 opacity-60 transition-transform duration-200 group-hover:rotate-180"
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                    </svg>
                  )}
                  <span className="absolute inset-x-3.5 -bottom-px h-0.5 origin-left scale-x-0 rounded-full bg-brand-red transition-transform duration-200 group-hover:scale-x-100" />
                </Link>

                {item.children && (
                  <div className="invisible absolute left-0 top-full z-50 w-80 translate-y-2 pt-1 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-brand-border/80 bg-white p-2 shadow-xl shadow-brand-blue-dark/10">
                      <ul>
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className="group/item block rounded-xl px-3.5 py-3 transition-colors hover:bg-brand-blue-light"
                            >
                              <span className="block text-sm font-semibold text-brand-blue-dark transition-colors group-hover/item:text-brand-blue">
                                {child.label}
                              </span>
                              {child.description && (
                                <span className="mt-0.5 block text-xs leading-relaxed text-brand-muted">
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
              href="/book"
              className="inline-flex items-center rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-brand-red/25 transition-all hover:-translate-y-px hover:bg-brand-red-dark hover:shadow-md hover:shadow-brand-red/30"
            >
              Request Staff
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-brand-border/80 bg-white text-brand-blue-dark transition-colors hover:bg-brand-blue-light md:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${open ? "top-2 rotate-45" : ""}`}
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${open ? "top-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <>
          <button
            type="button"
            aria-label="Close menu"
            className="nav-mobile-backdrop fixed inset-0 z-40 bg-brand-blue-dark/20 backdrop-blur-[2px] md:hidden"
            onClick={closeMobile}
          />

          <div className="nav-mobile-panel absolute left-0 right-0 top-full z-50 max-h-[calc(100dvh-6rem)] overflow-y-auto border-b border-brand-border bg-white shadow-xl md:hidden">
            <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
              <div className="mb-4 flex items-center justify-between rounded-2xl bg-brand-blue-light px-4 py-3">
                <Link
                  href="/careers"
                  onClick={closeMobile}
                  className="text-sm font-semibold text-brand-blue-dark"
                >
                  Careers
                </Link>
                <SocialIcons links={contactConfig.socialLinks} variant="light" />
              </div>

              <ul className="divide-y divide-brand-border/70">
                {navItems.map((item) => (
                  <li key={item.label} className="py-1">
                    {item.children ? (
                      <>
                        <button
                          type="button"
                          onClick={() => setMobileSub((v) => (v === item.label ? null : item.label))}
                          className="flex w-full items-center justify-between rounded-xl px-3 py-3.5 text-left text-base font-semibold text-brand-blue-dark transition-colors hover:bg-brand-blue-light/60"
                          aria-expanded={mobileSub === item.label}
                        >
                          {item.label}
                          <svg
                            className={`text-brand-muted transition-transform duration-300 ${mobileSub === item.label ? "rotate-180" : ""}`}
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                          </svg>
                        </button>

                        <div className="nav-accordion-grid" data-open={mobileSub === item.label}>
                          <div className="nav-accordion-inner">
                            <ul className="space-y-1 px-3 pb-3">
                              {item.children.map((child) => (
                                <li key={child.label}>
                                  <Link
                                    href={child.href}
                                    onClick={closeMobile}
                                    className="block rounded-xl border border-transparent px-3 py-3 transition-all hover:border-brand-border hover:bg-brand-blue-light/70"
                                  >
                                    <span className="block text-sm font-semibold text-brand-blue-dark">
                                      {child.label}
                                    </span>
                                    {child.description && (
                                      <span className="mt-0.5 block text-xs leading-relaxed text-brand-muted">
                                        {child.description}
                                      </span>
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeMobile}
                        className="block rounded-xl px-3 py-3.5 text-base font-semibold text-brand-blue-dark transition-colors hover:bg-brand-blue-light/60"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-4 border-t border-brand-border/70 pt-4">
                <Link
                  href="/book"
                  onClick={closeMobile}
                  className="flex w-full items-center justify-center rounded-full bg-brand-red px-5 py-3.5 text-sm font-semibold text-white shadow-sm shadow-brand-red/25 transition-colors hover:bg-brand-red-dark"
                >
                  Request Staff
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
