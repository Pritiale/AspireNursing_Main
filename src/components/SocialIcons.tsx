import type { ReactNode } from "react";
import type { SocialPlatform } from "@/lib/contact";

const socialIcons: Record<SocialPlatform, ReactNode> = {
  linkedin: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.31zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  ),
  instagram: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  tiktok: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0115.54 3h-3.09v12.4a2.59 2.59 0 11-2.59-2.59c.25 0 .49.04.72.11v-3.16a5.84 5.84 0 00-.72-.05A5.87 5.87 0 003 15.25a5.87 5.87 0 005.87 5.87 5.87 5.87 0 005.88-5.87V8.53a7.28 7.28 0 004.3 1.38V6.79a4.7 4.7 0 01-1-.97z" />
    </svg>
  ),
  facebook: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 22v-8.3H16l.4-3.7h-2.9V7.9c0-1.1.3-1.8 1.9-1.8H16.5V2.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.8H7.2V13.7h2.6V22h3.7z" />
    </svg>
  ),
  youtube: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21.6 7.2a2.7 2.7 0 00-1.9-1.9C17.8 5 12 5 12 5s-5.8 0-7.7.3A2.7 2.7 0 002.4 7.2 28.3 28.3 0 002 12a28.3 28.3 0 00.4 4.8 2.7 2.7 0 001.9 1.9C6.2 19 12 19 12 19s5.8 0 7.7-.3a2.7 2.7 0 001.9-1.9A28.3 28.3 0 0022 12a28.3 28.3 0 00-.4-4.8zM10 15.5V8.5l5.2 3.5L10 15.5z" />
    </svg>
  ),
};

type SocialIconsProps = {
  links: readonly { platform: SocialPlatform; label: string; href: string }[];
  variant?: "dark" | "light";
  className?: string;
};

export default function SocialIcons({ links, variant = "dark", className = "" }: SocialIconsProps) {
  if (links.length === 0) return null;

  const buttonClass =
    variant === "light"
      ? "bg-brand-blue/10 text-brand-blue-dark hover:bg-brand-blue/20 hover:text-brand-blue-dark"
      : "bg-white/10 text-white/90 hover:bg-white/20 hover:text-white";

  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      {links.map((social) => (
        <a
          key={social.platform}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className={`flex h-7 w-7 items-center justify-center rounded-full transition-all duration-200 ${buttonClass}`}
        >
          {socialIcons[social.platform]}
        </a>
      ))}
    </div>
  );
}
