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
  /**
   * Shift loadings are derived from Fair Work Australia awards (effective 2026):
   *   - Nurses Award 2020 [MA000034]: Afternoon +12.5%, Night +15%
   *   - Aged Care Award 2010 [MA000018]: Afternoon +12.5%, Night +15%
   * Rates are indicative; public holiday (2.5×), Saturday (1.5×) and Sunday (1.75×)
   * loadings are quoted separately on request.
   */
  afternoonLoadingPct: 12.5,
  nightLoadingPct: 15,
  note: "Indicative rates only. Afternoon (+12.5%) and Night (+15%) shift allowances are applied to the standard rate per Fair Work Australia award requirements. Public holiday, Saturday and Sunday loadings are quoted separately. Final pricing may vary by shift type, location and urgency.",
} as const;

/**
 * Hourly rates — single source of truth for all pages.
 *
 * Afternoon / night rates are calculated from the base rate using the
 * Fair Work loadings above and rounded to the nearest dollar.
 *
 * RN / EN / RNIC / CCC / AHS → Nurses Award 2020 [MA000034]
 * PCA                         → Aged Care Award 2010 [MA000018]
 */
export const servicePricing: ServicePricing[] = [
  {
    serviceId: "registered-nurses",
    hourlyRate: 105,
    afternoonRate: 118, // $105 × 1.125 = $118.13
    nightRate: 121,     // $105 × 1.15  = $120.75
    minimumHours: 4,
  },
  {
    serviceId: "enrolled-nurses",
    hourlyRate: 85,
    afternoonRate: 96,  // $85 × 1.125 = $95.63
    nightRate: 98,      // $85 × 1.15  = $97.75
    minimumHours: 4,
  },
  {
    serviceId: "personal-care-assistants",
    hourlyRate: 65,
    afternoonRate: 73,  // $65 × 1.125 = $73.13
    nightRate: 75,      // $65 × 1.15  = $74.75
    minimumHours: 4,
  },
  {
    serviceId: "registered-nurse-in-charge",
    hourlyRate: 120,
    afternoonRate: 135, // $120 × 1.125 = $135.00
    nightRate: 138,     // $120 × 1.15  = $138.00
    minimumHours: 4,
  },
  {
    serviceId: "clinical-care-coordinator",
    hourlyRate: 140,
    afternoonRate: 158, // $140 × 1.125 = $157.50
    nightRate: 161,     // $140 × 1.15  = $161.00
    minimumHours: 4,
  },
  {
    serviceId: "after-hours-supervisor",
    hourlyRate: 140,
    afternoonRate: 158, // $140 × 1.125 = $157.50
    nightRate: 161,     // $140 × 1.15  = $161.00
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
