export type BookingDraft = {
  serviceId?: string;
  serviceTitle?: string;
  start?: string; // "YYYY-MM-DDTHH:mm"
  end?: string; // "YYYY-MM-DDTHH:mm"
  facilityName?: string;
  address?: string;
  facilityPhone?: string;
  contactName?: string;
  contactPosition?: string;
  contactEmail?: string;
  notes?: string;
};

const STORAGE_KEY = "aspire_booking_draft";

export function saveBookingDraft(data: Partial<BookingDraft>) {
  if (typeof window === "undefined") return;
  const current = loadBookingDraft();
  const next = { ...current, ...data };
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}

export function loadBookingDraft(): BookingDraft {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as BookingDraft) : {};
  } catch {
    return {};
  }
}

export function clearBookingDraft() {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(STORAGE_KEY);
}

/** Friendly, readable date/time label. */
export function formatReadable(value?: string) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  return date.toLocaleString(undefined, {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

/** Compute "4h 30m" between two date/time strings. */
export function formatLength(start?: string, end?: string) {
  if (!start || !end) return "—";
  const s = new Date(start);
  const e = new Date(end);
  if (Number.isNaN(s.getTime()) || Number.isNaN(e.getTime())) return "—";
  const ms = e.getTime() - s.getTime();
  if (ms <= 0) return "—";
  const totalMinutes = Math.floor(ms / 60000);
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  return m ? `${h}h ${m}m` : `${h}h`;
}
