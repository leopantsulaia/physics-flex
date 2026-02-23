// PPE specifications and clinical data
export const PPE_SPECS = {
  apronStandard: {
    name: "Lead Apron (standard)",
    pbEq: "0.35 mm",
    tcAttenuation: "~90%",
    source: "NCRP 168 (2021)",
    thickness: 0.35,
  },
  apronHotlab: {
    name: "Lead Apron (hot-lab)",
    pbEq: "0.50 mm",
    tcAttenuation: "~94%",
    source: "IAEA Safety Series No. 40",
    thickness: 0.5,
  },
  thyroid: {
    name: "Thyroid Shield",
    pbEq: "0.35 mm",
    tcAttenuation: "~90%",
    source: "ICRP 139 (2018)",
    thickness: 0.35,
  },
  glasses: {
    name: "Leaded Glasses (lens)",
    pbEq: "0.75 mm Pb-eq",
    tcAttenuation: "~97%",
    source: "AAPM TG-191 (2021)",
    thickness: 0.75,
  },
  glassShield: {
    name: "Lead-Glass Bench Shield",
    pbEq: "2.00 mm Pb-eq",
    tcAttenuation: "~99.9%",
    source: "Typical spec (industry)",
    thickness: 2.0,
  },
};

export const PPE_TABLE_ROWS = Object.values(PPE_SPECS);

export const THYROID_FACTS = [
  {
    point: "Weighting factor",
    detail:
      "The thyroid gland has a radiation weighting factor wT = 0.04 (ICRP 103) — small, but its dose limit is 500 mSv/year (occupational extremity class).",
  },
  {
    point: "Inhalation risk",
    detail:
      "In I-131 hot-labs, the primary exposure pathways include direct gamma (364 keV), but also inhaled/aerosolized radioiodine — the thyroid collar provides a supplementary layer even if the primary risk is internal.",
  },
  {
    point: "Local dose reduction",
    detail:
      "Even a thin 0.35 mm Pb collar reduces scattered Tc-99m (140 keV) dose to the thyroid by ~60–90% depending on geometry.",
  },
  {
    point: "Regulatory guidance",
    detail:
      "ICRP Publication 139 (2018) explicitly recommends thyroid shields for staff performing >400 MBq I-131 administrations regularly.",
  },
  {
    point: "Dose asymmetry",
    detail:
      "The neck/thyroid region is not covered by a standard lead apron — it is entirely unprotected without a dedicated collar.",
  },
];
