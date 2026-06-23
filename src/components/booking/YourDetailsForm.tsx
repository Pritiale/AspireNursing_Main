"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  formatLength,
  formatReadable,
  loadBookingDraft,
  saveBookingDraft,
} from "@/lib/booking";

type Props = {
  serviceId: string;
  serviceTitle: string;
  start: string;
  end: string;
};

type Fields = {
  facilityName: string;
  address: string;
  facilityPhone: string;
  contactName: string;
  contactPosition: string;
  contactEmail: string;
  notes: string;
};

const emptyFields: Fields = {
  facilityName: "",
  address: "",
  facilityPhone: "",
  contactName: "",
  contactPosition: "",
  contactEmail: "",
  notes: "",
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function YourDetailsForm({
  serviceId,
  serviceTitle,
  start,
  end,
}: Props) {
  const router = useRouter();
  const [fields, setFields] = useState<Fields>(emptyFields);
  const [submitted, setSubmitted] = useState(false);

  // Prefill from any saved draft (e.g. when stepping back).
  useEffect(() => {
    const draft = loadBookingDraft();
    setFields((f) => ({
      ...f,
      facilityName: draft.facilityName ?? "",
      address: draft.address ?? "",
      facilityPhone: draft.facilityPhone ?? "",
      contactName: draft.contactName ?? "",
      contactPosition: draft.contactPosition ?? "",
      contactEmail: draft.contactEmail ?? "",
      notes: draft.notes ?? "",
    }));
  }, []);

  const set = (key: keyof Fields) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFields((f) => ({ ...f, [key]: e.target.value }));

  const errors = {
    facilityName: fields.facilityName.trim() ? "" : "Facility name is required.",
    address: fields.address.trim() ? "" : "Facility address is required.",
    facilityPhone: fields.facilityPhone.trim()
      ? ""
      : "Facility phone number is required.",
    contactName: fields.contactName.trim()
      ? ""
      : "Booking person name is required.",
    contactPosition: fields.contactPosition.trim()
      ? ""
      : "Position is required.",
    contactEmail: emailRe.test(fields.contactEmail.trim())
      ? ""
      : "A valid email is required.",
  };

  const isValid = Object.values(errors).every((e) => !e);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (!isValid) return;

    saveBookingDraft({
      serviceId,
      serviceTitle,
      start,
      end,
      facilityName: fields.facilityName.trim(),
      address: fields.address.trim(),
      facilityPhone: fields.facilityPhone.trim(),
      contactName: fields.contactName.trim(),
      contactPosition: fields.contactPosition.trim(),
      contactEmail: fields.contactEmail.trim(),
      notes: fields.notes.trim(),
    });

    router.push(`/book/${serviceId}/confirm`);
  };

  const inputBase =
    "mt-1.5 w-full rounded-xl border bg-white px-4 py-3 text-sm text-brand-blue-dark outline-none transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20";

  const fieldClass = (key: keyof typeof errors) =>
    `${inputBase} ${
      submitted && errors[key] ? "border-brand-red" : "border-brand-border"
    }`;

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-8 lg:grid-cols-[1fr_22rem]">
      <div className="space-y-6">
        {/* Facility details */}
        <div className="rounded-2xl border border-brand-border bg-white p-6 sm:p-8">
          <h2 className="text-lg font-bold text-brand-blue-dark">Facility details</h2>
          <div className="mt-4 grid gap-4">
            <div>
              <label htmlFor="facilityName" className="block text-sm font-semibold text-brand-blue-dark">
                Facility name
              </label>
              <input
                id="facilityName"
                type="text"
                value={fields.facilityName}
                onChange={set("facilityName")}
                placeholder="e.g. Sunrise Aged Care"
                className={fieldClass("facilityName")}
              />
              {submitted && errors.facilityName && (
                <p className="mt-1 text-xs font-medium text-brand-red">{errors.facilityName}</p>
              )}
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-semibold text-brand-blue-dark">
                Location / Address
              </label>
              <input
                id="address"
                type="text"
                value={fields.address}
                onChange={set("address")}
                placeholder="Street, suburb, state, postcode"
                className={fieldClass("address")}
              />
              {submitted && errors.address && (
                <p className="mt-1 text-xs font-medium text-brand-red">{errors.address}</p>
              )}
            </div>

            <div>
              <label htmlFor="facilityPhone" className="block text-sm font-semibold text-brand-blue-dark">
                Facility contact phone number
              </label>
              <input
                id="facilityPhone"
                type="tel"
                value={fields.facilityPhone}
                onChange={set("facilityPhone")}
                placeholder="e.g. (02) 1234 5678"
                className={fieldClass("facilityPhone")}
              />
              {submitted && errors.facilityPhone && (
                <p className="mt-1 text-xs font-medium text-brand-red">{errors.facilityPhone}</p>
              )}
            </div>
          </div>
        </div>

        {/* Booking contact */}
        <div className="rounded-2xl border border-brand-border bg-white p-6 sm:p-8">
          <h2 className="text-lg font-bold text-brand-blue-dark">Booking contact</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="contactName" className="block text-sm font-semibold text-brand-blue-dark">
                Booking person name
              </label>
              <input
                id="contactName"
                type="text"
                value={fields.contactName}
                onChange={set("contactName")}
                placeholder="Full name"
                className={fieldClass("contactName")}
              />
              {submitted && errors.contactName && (
                <p className="mt-1 text-xs font-medium text-brand-red">{errors.contactName}</p>
              )}
            </div>

            <div>
              <label htmlFor="contactPosition" className="block text-sm font-semibold text-brand-blue-dark">
                Position
              </label>
              <input
                id="contactPosition"
                type="text"
                value={fields.contactPosition}
                onChange={set("contactPosition")}
                placeholder="e.g. Care Manager"
                className={fieldClass("contactPosition")}
              />
              {submitted && errors.contactPosition && (
                <p className="mt-1 text-xs font-medium text-brand-red">{errors.contactPosition}</p>
              )}
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="contactEmail" className="block text-sm font-semibold text-brand-blue-dark">
                Contact email
              </label>
              <input
                id="contactEmail"
                type="email"
                value={fields.contactEmail}
                onChange={set("contactEmail")}
                placeholder="name@facility.com"
                className={fieldClass("contactEmail")}
              />
              {submitted && errors.contactEmail && (
                <p className="mt-1 text-xs font-medium text-brand-red">{errors.contactEmail}</p>
              )}
            </div>
          </div>
        </div>

        {/* Notes */}
        <div className="rounded-2xl border border-brand-border bg-white p-6 sm:p-8">
          <h2 className="text-lg font-bold text-brand-blue-dark">Extra instructions</h2>
          <p className="mt-1 text-sm text-brand-muted">
            Anything our staff should know before the shift (optional).
          </p>
          <textarea
            id="notes"
            value={fields.notes}
            onChange={set("notes")}
            rows={4}
            placeholder="Access details, dress code, specific care requirements, parking, etc."
            className="mt-3 w-full resize-y rounded-xl border border-brand-border bg-white px-4 py-3 text-sm text-brand-blue-dark outline-none transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
          />
        </div>
      </div>

      {/* Summary */}
      <aside className="lg:sticky lg:top-28 lg:self-start">
        <div className="rounded-2xl border border-brand-border bg-white p-6">
          <h2 className="text-base font-bold text-brand-blue-dark">Booking Summary</h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-brand-muted">Role</dt>
              <dd className="text-right font-semibold text-brand-blue-dark">{serviceTitle}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-brand-muted">Start</dt>
              <dd className="text-right font-semibold text-brand-blue-dark">{formatReadable(start)}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-brand-muted">End</dt>
              <dd className="text-right font-semibold text-brand-blue-dark">{formatReadable(end)}</dd>
            </div>
            <div className="flex justify-between gap-4 border-t border-brand-border pt-3">
              <dt className="text-brand-muted">Length</dt>
              <dd className="text-right font-semibold text-brand-blue-dark">{formatLength(start, end)}</dd>
            </div>
          </dl>

          <button
            type="submit"
            className="mt-6 flex w-full items-center justify-center gap-1 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
          >
            Review &amp; Confirm
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
          {submitted && !isValid && (
            <p className="mt-2 text-center text-xs font-medium text-brand-red">
              Please complete the required fields.
            </p>
          )}
          <Link
            href={`/book/${serviceId}`}
            className="mt-3 block text-center text-xs font-medium text-brand-muted hover:text-brand-blue"
          >
            Back to shift details
          </Link>
        </div>
      </aside>
    </form>
  );
}
