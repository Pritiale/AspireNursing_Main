export type Service = {
  id: string;
  title: string;
  abbr?: string;
  /** Path relative to /public — e.g. /services/registered-nurses.jpg. Leave undefined until the image is uploaded. */
  image?: string;
  /** Tailwind gradient classes used as placeholder when image is absent */
  gradient: string;
  short: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    id: "registered-nurses",
    title: "Registered Nurses",
    abbr: "RN",
    image: "/services/registered-nurses.png",
    gradient: "from-brand-blue-dark to-brand-blue",
    short: "Highly skilled RNs leading clinical aged care, assessments, and medication management.",
    description:
      "Our registered nurses bring advanced clinical expertise to residential and home aged care. They lead care planning, complex and chronic care, medication management, and clinical assessments — always with compassion and precision.",
    features: [
      "Clinical assessments & care planning",
      "Medication management",
      "Wound & chronic condition care",
      "Clinical leadership on the floor",
    ],
  },
  {
    id: "enrolled-nurses",
    title: "Enrolled Nurses",
    abbr: "EN",
    image: "/services/enrolled-nurses.png",
    gradient: "from-teal-700 to-teal-500",
    short: "Dedicated ENs delivering reliable hands-on clinical care under RN guidance.",
    description:
      "Our enrolled nurses provide dependable, hands-on clinical support in aged care settings — administering medications, monitoring residents, and assisting registered nurses to keep care consistent and high quality.",
    features: [
      "Medication administration",
      "Resident monitoring & observations",
      "Clinical documentation",
      "Hands-on resident care",
    ],
  },
  {
    id: "personal-care-assistants",
    title: "Personal Care Assistants",
    abbr: "PCA",
    image: "/services/personal-care-assistants.png",
    gradient: "from-rose-700 to-brand-red",
    short: "Compassionate assistants supporting older people with personal care, daily living, and companionship.",
    description:
      "Our personal care assistants help older people live with dignity and independence — providing personal and continence care, support with daily living and mobility, meals, and meaningful companionship across residential and home aged care, always with patience, respect, and genuine warmth.",
    features: [
      "Personal & continence care",
      "Daily living & mobility support",
      "Meal preparation & feeding support",
      "Companionship & social support",
    ],
  },
  {
    id: "registered-nurse-in-charge",
    title: "Registered Nurse In Charge",
    abbr: "RN IC",
    image: "/services/registered-nurse-in-charge.png",
    gradient: "from-slate-700 to-slate-500",
    short: "Experienced RNs taking charge of the shift, overseeing care delivery and the team.",
    description:
      "Our Registered Nurses In Charge take full clinical and operational responsibility for the shift — leading the care team, managing admissions and incidents, and ensuring every resident receives safe, high-quality care from start to finish.",
    features: [
      "Shift clinical leadership",
      "Care team supervision",
      "Incident & admission management",
      "Handover & compliance oversight",
    ],
  },
  {
    id: "clinical-care-coordinator",
    title: "Clinical Care Coordinator",
    abbr: "CCC",
    image: "/services/clinical-care-coordinator.png",
    gradient: "from-cyan-700 to-cyan-500",
    short: "Coordinators managing care plans, assessments, and clinical governance.",
    description:
      "Our Clinical Care Coordinators oversee resident care planning and clinical governance — conducting assessments, coordinating multidisciplinary care, and ensuring documentation and outcomes consistently meet aged care standards.",
    features: [
      "Care plan development & review",
      "Clinical assessments",
      "Multidisciplinary coordination",
      "Governance & documentation",
    ],
  },
  {
    id: "after-hours-supervisor",
    title: "After-Hours Supervisor",
    abbr: "AHS",
    image: "/services/after-hours-supervisor.png",
    gradient: "from-indigo-800 to-indigo-600",
    short: "Senior nurses providing leadership and clinical support across evenings, nights, and weekends.",
    description:
      "Our After-Hours Supervisors provide on-site leadership and clinical support outside business hours — responding to escalations, supporting staff, and keeping facilities safe and well-managed around the clock.",
    features: [
      "Evening, night & weekend cover",
      "Escalation & emergency response",
      "On-site staff support",
      "Site safety & oversight",
    ],
  },
];
