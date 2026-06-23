"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  BookingDraft,
  clearBookingDraft,
  formatLength,
  formatReadable,
  loadBookingDraft,
} from "@/lib/booking";

export default function ConfirmBooking({ serviceId }: { serviceId: string }) {
  const [draft, setDraft] = useState<BookingDraft | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    setDraft(loadBookingDraft());
    setLoaded(true);
  }, []);

  if (!loaded) {
    return <div className="mt-8 h-40 animate-pulse rounded-2xl bg-white" />;
  }

  const hasBooking = draft && draft.start && draft.facilityName;

  if (!hasBooking) {
    return (
      <div className="mt-8 rounded-2xl border border-brand-border bg-white p-8 text-center">
        <p className="text-brand-muted">
          We couldn&apos;t find your booking details. Please start again.
        </p>
        <Link
          href="/book"
          className="mt-5 inline-flex rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark"
        >
          Start a new booking
        </Link>
      </div>
    );
  }

  if (confirmed) {
    return (
      <div className="mt-8 rounded-2xl border border-brand-border bg-white p-8 text-center sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="mt-5 text-2xl font-bold text-brand-blue-dark">
          Booking request received
        </h2>
        <p className="mx-auto mt-3 max-w-md text-brand-muted">
          Thank you, {draft.contactName}. We&apos;ve received your request for a{" "}
          {draft.serviceTitle} at {draft.facilityName}. Our team will be in touch
          shortly at {draft.contactEmail} to confirm.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  const rows: { label: string; value?: string }[] = [
    { label: "Role", value: draft.serviceTitle },
    { label: "Start", value: formatReadable(draft.start) },
    { label: "End", value: formatReadable(draft.end) },
    { label: "Length", value: formatLength(draft.start, draft.end) },
    { label: "Facility", value: draft.facilityName },
    { label: "Address", value: draft.address },
    { label: "Facility phone", value: draft.facilityPhone },
    { label: "Booking person", value: draft.contactName },
    { label: "Position", value: draft.contactPosition },
    { label: "Email", value: draft.contactEmail },
    { label: "Notes", value: draft.notes || "—" },
  ];

  return (
    <div className="mt-6">
      <div className="rounded-2xl border border-brand-border bg-white p-6 sm:p-8">
        <h2 className="text-lg font-bold text-brand-blue-dark">
          Review your request
        </h2>
        <dl className="mt-5 divide-y divide-brand-border">
          {rows.map((row) => (
            <div key={row.label} className="flex justify-between gap-6 py-3 text-sm">
              <dt className="text-brand-muted">{row.label}</dt>
              <dd className="max-w-[60%] text-right font-semibold text-brand-blue-dark">
                {row.value || "—"}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-between">
        <Link
          href={`/book/${serviceId}/details?start=${encodeURIComponent(
            draft.start ?? "",
          )}&end=${encodeURIComponent(draft.end ?? "")}`}
          className="inline-flex items-center justify-center gap-1 rounded-full border border-brand-border px-6 py-3 text-sm font-semibold text-brand-blue-dark transition-colors hover:border-brand-blue hover:bg-brand-blue-light"
        >
          Edit details
        </Link>
        <button
          type="button"
          onClick={() => {
            clearBookingDraft();
            setConfirmed(true);
          }}
          className="inline-flex items-center justify-center gap-1 rounded-full bg-brand-red px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
        >
          Confirm Booking
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
