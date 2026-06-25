import { services } from "@/data/services";

export type ServicePricing = {
  serviceId: string;
  /** Standard / day-shift hourly rate (AUD). */
  hourlyRate: number;
  /**
   * Afternoon-shift hourly rate (AUD).
   * Leave undefined until confirmed — UI will show "TBC".
   */
  afternoonRate?: number;
  /**
   * Night-shift hourly rate (AUD).
   * Leave undefined until confirmed — UI will show "TBC".
   */
  nightRate?: number;
  minimumHours: number;
};

export const pricingConfig = {
  currency: "AUD" as const,
  currencySymbol: "$",
  minimumShiftHours: 4,
  gstIncluded: true,
  note: "Indicative rates only. Afternoon and night shift allowances apply. Final pricing may vary by shift type, location, urgency, and public holiday loadings.",
} as const;

/** Authoritative hourly rates — update here as the single source of truth for all pages. */
export const servicePricing: ServicePricing[] = [
  {
    serviceId: "registered-nurses",
    hourlyRate: 105,
    afternoonRate: undefined, // TBC
    nightRate: undefined,     // TBC
    minimumHours: 4,
  },
  {
    serviceId: "enrolled-nurses",
    hourlyRate: 85,
    afternoonRate: undefined,
    nightRate: undefined,
    minimumHours: 4,
  },
  {
    serviceId: "personal-care-assistants",
    hourlyRate: 65,
    afternoonRate: undefined,
    nightRate: undefined,
    minimumHours: 4,
  },
  {
    serviceId: "registered-nurse-in-charge",
    hourlyRate: 120,
    afternoonRate: undefined,
    nightRate: undefined,
    minimumHours: 4,
  },
  {
    serviceId: "clinical-care-coordinator",
    hourlyRate: 140,
    afternoonRate: undefined,
    nightRate: undefined,
    minimumHours: 4,
  },
  {
    serviceId: "after-hours-supervisor",
    hourlyRate: 140,
    afternoonRate: undefined,
    nightRate: undefined,
    minimumHours: 4,
  },
];

export function getServicePricing(serviceId: string): ServicePricing | undefined {
  return servicePricing.find((entry) => entry.serviceId === serviceId);
}

export function getMinimumShiftHours(serviceId?: string): number {
  if (serviceId) {
    return getServicePricing(serviceId)?.minimumHours ?? pricingConfig.minimumShiftHours;
  }
  return pricingConfig.minimumShiftHours;
}

export function getMinimumShiftMs(serviceId?: string): number {
  return getMinimumShiftHours(serviceId) * 60 * 60 * 1000;
}

export function formatHourlyRate(rate: number): string {
  return `${pricingConfig.currencySymbol}${rate.toFixed(0)}/hr`;
}

/** Returns e.g. "From $105/hr" or null if no pricing entry found. */
export function formatHourlyRateLabel(serviceId: string): string | null {
  const pricing = getServicePricing(serviceId);
  if (!pricing) return null;
  return `From ${formatHourlyRate(pricing.hourlyRate)}`;
}

/** Ensure every known service has a pricing entry in development. */
export function assertPricingCoverage() {
  if (process.env.NODE_ENV === "production") return;
  for (const service of services) {
    if (!getServicePricing(service.id)) {
      console.warn(`[pricing] Missing rate for service: ${service.id}`);
    }
  }
}

assertPricingCoverage();
