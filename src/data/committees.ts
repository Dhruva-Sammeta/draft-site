
// ============================================================================
// COMMITTEES DATA - Single source of truth for all committee information.
// ============================================================================

export interface CommitteeChair {
  role: string;
  name: string;
}

export interface Committee {
  slug: string;
  name: string;
  fullName: string;
  type: string;
  chairs: CommitteeChair[];
  description: string;
  symbol: string;
  agenda: string;
  overview: string;
}

const defaultChairs: CommitteeChair[] = [
  { role: "Chairperson", name: "TBA" },
  { role: "Vice Chairperson", name: "TBA" },
];

const list = [
  "DISEC", "UNHRC", "UNSC", "JCC-1", "JCC-2", "ARMAGEDDON", "LOK SABHA",
  "HCC", "OIC", "UN WOMEN", "COPUOS", "US SENATE", "UNODC", "ECOFIN",
  "Special Committee on the UN Charter", "FIFA", "WHO", "UNGA-SOCHUM", "IP"
];

const getType = (name: string): string => {
  const mapping: Record<string, string> = {
    "DISEC": "General Assembly",
    "UNHRC": "General Assembly", 
    "UNSC": "Crisis / Specialized",
    "JCC-1": "Crisis",
    "JCC-2": "Crisis",
    "ARMAGEDDON": "Crisis",
    "LOK SABHA": "Specialized",
    "HCC": "Specialized",
    "OIC": "Regional Body",
    "UN WOMEN": "ECOSOC",
    "COPUOS": "Specialized Agency",
    "US SENATE": "Specialized",
    "UNODC": "Specialized Agency",
    "ECOFIN": "General Assembly",
    "Special Committee on the UN Charter": "Legal",
    "FIFA": "Specialized",
    "WHO": "Specialized Agency",
    "UNGA-SOCHUM": "General Assembly",
    "IP": "Press"
  };
  return mapping[name] || "Committee";
};

export const committeesData: Committee[] = list.map((name, i) => ({
  slug: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  name: name,
  fullName: name,
  type: getType(name),
  chairs: defaultChairs,
  description: "Discussing key global issues to foster diplomatic solutions.",
  symbol: (i + 1).toString(),
  agenda: "To be announced",
  overview: "Details for this committee will be announced soon."
}));
