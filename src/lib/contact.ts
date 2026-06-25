/**
 * contact.ts — single source of truth for all contact + social config.
 *
 * IMPORTANT: Every NEXT_PUBLIC_* variable MUST be read with explicit static
 * dot-notation (process.env.NEXT_PUBLIC_FOO). Bracket notation
 * (process.env[key]) is NOT statically replaced by Turbopack/Webpack on the
 * client, which causes SSR/client hydration mismatches.
 */

export type SocialPlatform = "linkedin" | "instagram" | "tiktok" | "facebook" | "youtube";

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  href: string;
};

const FALLBACK_PHONE = "0450 010 722";
const FALLBACK_EMAIL = "aspirenursingagency@gmail.com";

/* ── Static reads — bundler replaces these at compile time on client ── */
const _phone    = process.env.NEXT_PUBLIC_CONTACT_PHONE?.trim();
const _email    = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
const _linkedin  = process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN?.trim()  ?? "";
const _instagram = process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM?.trim() ?? "";
const _tiktok    = process.env.NEXT_PUBLIC_SOCIAL_TIKTOK?.trim()    ?? "";
const _facebook  = process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK?.trim()  ?? "";
const _youtube   = process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE?.trim()   ?? "";

const phone = _phone && _phone !== "" ? _phone : FALLBACK_PHONE;
const email = _email && _email !== "" ? _email : FALLBACK_EMAIL;

/** Build a tel: href from a human-readable phone string. */
export function toTelHref(phoneStr: string): string {
  const normalized = phoneStr.trim().replace(/[^\d+]/g, "");
  return normalized ? `tel:${normalized}` : "tel:";
}

/** Build a mailto: href, optionally with a subject line. */
export function toMailtoHref(emailStr: string, subject?: string): string {
  const trimmed = emailStr.trim();
  if (!trimmed) return "mailto:";
  const base = `mailto:${trimmed}`;
  return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base;
}

function buildSocialLinks(): SocialLink[] {
  const candidates: Array<{ platform: SocialPlatform; label: string; href: string }> = [
    { platform: "linkedin",  label: "LinkedIn",  href: _linkedin  },
    { platform: "instagram", label: "Instagram", href: _instagram },
    { platform: "tiktok",    label: "TikTok",    href: _tiktok    },
    { platform: "facebook",  label: "Facebook",  href: _facebook  },
    { platform: "youtube",   label: "YouTube",   href: _youtube   },
  ];
  return candidates.filter((s) => s.href.length > 0);
}

export const contactConfig = {
  phone,
  phoneHref:        toTelHref(phone),
  email,
  emailHref:        toMailtoHref(email),
  careersEmailHref: toMailtoHref(email, "Career Enquiry"),
  socialLinks:      buildSocialLinks(),
} as const;
