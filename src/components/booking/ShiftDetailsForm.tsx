"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { formatHourlyRateLabel, getMinimumShiftHours, getMinimumShiftMs } from "@/lib/pricing";

type ServiceLite = {
  id: string;
  title: string;
  abbr?: string;
  short: string;
};

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

/** Format a Date as YYYY-MM-DD for <input type="date">. */
function toDateValue(date: Date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

/** Combine separate date + time strings into a Date (or null). */
function combine(date: string, time: string) {
  if (!date || !time) return null;
  const d = new Date(`${date}T${time}`);
  return Number.isNaN(d.getTime()) ? null : d;
}

/** Friendly, readable date/time label. */
function formatReadable(date: Date) {
  return date.toLocaleString(undefined, {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

/** Turn a millisecond span into "4h 30m". */
function formatLength(ms: number) {
  const totalMinutes = Math.floor(ms / 60000);
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  return m ? `${h}h ${m}m` : `${h}h`;
}

export default function ShiftDetailsForm({ service }: { service: ServiceLite }) {
  const minHours = getMinimumShiftHours(service.id);
  const minMs = getMinimumShiftMs(service.id);
  const rateLabel = formatHourlyRateLabel(service.id);
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [minDate, setMinDate] = useState<string | undefined>(undefined);

  // Set the earliest selectable date on the client to avoid hydration mismatch.
  useEffect(() => {
    setMinDate(toDateValue(new Date()));
  }, []);

  const start = useMemo(() => combine(startDate, startTime), [startDate, startTime]);
  const end = useMemo(() => combine(endDate, endTime), [endDate, endTime]);

  const diffMs = useMemo(() => {
    if (!start || !end) return null;
    return end.getTime() - start.getTime();
  }, [start, end]);

  const isPositive = diffMs !== null && diffMs > 0;
  const meetsMinimum = diffMs !== null && diffMs >= minMs;
  const canContinue = Boolean(start && end && meetsMinimum);

  let lengthLabel = "Select start & end first";
  if (diffMs !== null) {
    lengthLabel = diffMs > 0 ? formatLength(diffMs) : "End is before start";
  }

  const continueHref = canContinue
    ? `/book/${service.id}/details?start=${encodeURIComponent(
        `${startDate}T${startTime}`,
      )}&end=${encodeURIComponent(`${endDate}T${endTime}`)}`
    : "#";

  return (
    <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_22rem]">
      {/* Form */}
      <div className="rounded-2xl border border-brand-border bg-white p-6 sm:p-8">
        <div className="flex items-center gap-4 border-b border-brand-border pb-6">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold tracking-tight text-brand-blue-dark">
                {service.title}
              </h1>
              {service.abbr && (
                <span className="rounded-full bg-brand-blue px-2.5 py-0.5 text-xs font-bold text-white">
                  {service.abbr}
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-brand-muted">{service.short}</p>
            {rateLabel && (
              <p className="mt-1 text-sm font-semibold text-brand-blue">{rateLabel}</p>
            )}
          </div>
        </div>

        <p className="mt-6 text-xs text-brand-muted">
          Times use 15-minute steps (:00, :15, :30, :45). Minimum shift length is{" "}
          {minHours} hours.
        </p>

        {/* Start */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-brand-blue-dark">Shift start</h3>
          <div className="mt-2 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="startDate" className="block text-xs font-medium text-brand-muted">
                Start date
              </label>
              <input
                id="startDate"
                type="date"
                value={startDate}
                min={minDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-sm text-brand-blue-dark outline-none transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
              />
            </div>
            <div>
              <label htmlFor="startTime" className="block text-xs font-medium text-brand-muted">
                Start time
              </label>
              <input
                id="startTime"
                type="time"
                value={startTime}
                step={900}
                onChange={(e) => setStartTime(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-sm text-brand-blue-dark outline-none transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
              />
            </div>
          </div>
        </div>

        {/* End */}
        <div className="mt-6">
          <h3 className="text-sm font-semibold text-brand-blue-dark">Shift end</h3>
          <div className="mt-2 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="endDate" className="block text-xs font-medium text-brand-muted">
                End date
              </label>
              <input
                id="endDate"
                type="date"
                value={endDate}
                min={startDate || minDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-sm text-brand-blue-dark outline-none transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
              />
            </div>
            <div>
              <label htmlFor="endTime" className="block text-xs font-medium text-brand-muted">
                End time
              </label>
              <input
                id="endTime"
                type="time"
                value={endTime}
                step={900}
                onChange={(e) => setEndTime(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-brand-border bg-white px-4 py-3 text-sm text-brand-blue-dark outline-none transition-colors focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
              />
            </div>
          </div>
        </div>

        {/* Shift length (auto, read-only) */}
        <div className="mt-6">
          <label htmlFor="length" className="block text-sm font-semibold text-brand-blue-dark">
            Shift length
            <span className="ml-2 font-normal text-brand-muted">(auto-calculated)</span>
          </label>
          <input
            id="length"
            type="text"
            readOnly
            value={lengthLabel}
            className="mt-2 w-full cursor-not-allowed rounded-xl border border-brand-border bg-brand-blue-light/50 px-4 py-3 text-sm font-semibold text-brand-blue-dark"
          />
          {diffMs !== null && !isPositive && (
            <p className="mt-2 text-xs font-medium text-brand-red">
              End date &amp; time must be after the start.
            </p>
          )}
          {isPositive && !meetsMinimum && (
            <p className="mt-2 text-xs font-medium text-brand-red">
              Minimum shift length is {minHours} hours.
            </p>
          )}
        </div>
      </div>

      {/* Summary */}
      <aside className="lg:sticky lg:top-28 lg:self-start">
        <div className="rounded-2xl border border-brand-border bg-white p-6">
          <h2 className="text-base font-bold text-brand-blue-dark">Booking Summary</h2>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-brand-muted">Role</dt>
              <dd className="text-right font-semibold text-brand-blue-dark">
                {service.title}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-brand-muted">Start</dt>
              <dd className="text-right font-semibold text-brand-blue-dark">
                {start ? formatReadable(start) : "—"}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-brand-muted">End</dt>
              <dd className="text-right font-semibold text-brand-blue-dark">
                {end ? formatReadable(end) : "—"}
              </dd>
            </div>
            <div className="flex justify-between gap-4 border-t border-brand-border pt-3">
              <dt className="text-brand-muted">Length</dt>
              <dd className="text-right font-semibold text-brand-blue-dark">
                {canContinue && diffMs !== null ? formatLength(diffMs) : "—"}
              </dd>
            </div>
          </dl>

          <Link
            href={continueHref}
            aria-disabled={!canContinue}
            tabIndex={canContinue ? undefined : -1}
            className={`mt-6 flex items-center justify-center gap-1 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
              canContinue
                ? "bg-brand-red text-white hover:bg-brand-red-dark"
                : "pointer-events-none bg-brand-border text-brand-muted"
            }`}
          >
            Continue to Your Details
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
          {!canContinue && (
            <p className="mt-2 text-center text-xs text-brand-muted">
              Select start &amp; end (min {minHours} hours) to continue.
            </p>
          )}
        </div>
      </aside>
    </div>
  );
}
