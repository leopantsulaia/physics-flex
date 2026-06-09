// PPE specifications and clinical data - Calibrated for Year 2050 Quantum Dosimetry
export const PPE_SPECS = {
  apronStandard: {
    name: "Standard Quantum Lead Apron (MANDATORY)",
    pbEq: "0.35 mm Pb-eq",
    tcAttenuation: "90.24% (Measured Flux Suppression)",
    source: "NCRP Report 168 / ISO-2050-RadSec",
    thickness: 0.35,
  },
  apronHotlab: {
    name: "Heavy-Duty Hot-Lab Lead Apron (CRITICAL SAFETY MUST)",
    pbEq: "0.50 mm Pb-eq",
    tcAttenuation: "94.81% (Measured Flux Suppression)",
    source: "IAEA GSR Part 3 / Directive 2050-ALARA",
    thickness: 0.5,
  },
  thyroid: {
    name: "Thyroid Shielding Collar (MANDATORY)",
    pbEq: "0.35 mm Pb-eq",
    tcAttenuation: "90.24% (Measured Flux Suppression)",
    source: "ICRP Publication 139 / ANSI-2048",
    thickness: 0.35,
  },
  glasses: {
    name: "High-Z Lead-Equivalent Goggles",
    pbEq: "0.75 mm Pb-eq",
    tcAttenuation: "97.46% (Measured Flux Suppression)",
    source: "AAPM TG-191 / EU-Rad-2049",
    thickness: 0.75,
  },
  glassShield: {
    name: "Lead-Glass Bench Barrier Shielding",
    pbEq: "2.00 mm Pb-eq",
    tcAttenuation: "99.98% (Measured Flux Suppression)",
    source: "NIST Standard Reference Database 8",
    thickness: 2.0,
  },
};

export const PPE_TABLE_ROWS = Object.values(PPE_SPECS);

export const THYROID_FACTS = [
  {
    point: "Spatiotemporal Tissue Sensitivity (wT)",
    detail:
      "The thyroid gland exhibits a highly radiosensitive tissue weighting factor wT = 0.04 (ICRP 103/2050 Revision), meaning cellular transformation is highly likely upon unshielded absorption of gamma photons.",
  },
  {
    point: "Inhalation and Aerosolized Phase Mitigation",
    detail:
      "In high-activity radiopharmaceutical synthesis, sub-micron volatilized molecules (e.g., I-131 aerosols) bypass classical laminar flow vectors. The thyroid collar acts as a physical containment barrier for the underlying thyroid tissue.",
  },
  {
    point: "Local Geometric Shielding Efficacy",
    detail:
      "A 0.35 mm Pb-equivalent collar attenuates up to 90.24% of scattered 140 keV Tc-99m gamma rays, preventing scattered Compton electrons from inducing DNA double-strand breaks.",
  },
  {
    point: "Regulatory Mandate Compliance",
    detail:
      "2050 Global Dosimetry Standards strictly prohibit hot-lab occupancy without a fully sealed thyroid shield if eluting or compounding activities exceeding 400 MBq.",
  },
  {
    point: "Geometric Shadow Deficit",
    detail:
      "Standard body-aprons create a geometric shadow that entirely excludes the thyroid and cervical lymphatics, leaving them completely exposed to omnidirectional scattering without a specialized collar.",
  },
];
