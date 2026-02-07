// --- UNIT CONVERSIONS ---
export const MBQ_TO_MCI = 1 / 37; // 1 mCi = 37 MBq
export const MCI_TO_MBQ = 37;

// Distance conversions (to/from meters)
export const DISTANCE_CONVERSIONS = {
  m: 1,
  cm: 100,
  ft: 3.28084,
  in: 39.3701,
};

// --- ISOTOPE DATA ---
// Data Source: NCRP Report No. 147 / Standard NucMed Physics / Rad Pro Calculator
// HVL Values are approximate for general safety estimation.
export const ISOTOPE_DATA = {
  "Tc-99m": {
    name: "Technetium-99m",
    gammaConstant: 0.78, // R-cm²/mCi-hr
    hvl: { lead: 0.3, concrete: 22.0, tungsten: 0.2, glass: 1.0 }, // mm (Glass est.)
  },
  "I-131": {
    name: "Iodine-131",
    gammaConstant: 2.2,
    hvl: { lead: 3.0, concrete: 65.0, tungsten: 2.2, glass: 12.0 },
  },
  "F-18": {
    name: "Fluorine-18 (PET)",
    gammaConstant: 5.7,
    hvl: { lead: 4.0, concrete: 74.0, tungsten: 2.8, glass: 15.0 },
  },
  "Ga-68": {
    name: "Gallium-68 (PET)",
    gammaConstant: 5.4,
    hvl: { lead: 4.1, concrete: 75.0, tungsten: 2.9, glass: 16.0 },
  },
  "Lu-177": {
    name: "Lutetium-177",
    gammaConstant: 0.2, // Very low gamma, mostly beta
    hvl: { lead: 0.1, concrete: 10.0, tungsten: 0.05, glass: 0.5 },
  },
  "I-123": {
    name: "Iodine-123",
    gammaConstant: 1.6,
    hvl: { lead: 0.5, concrete: 40.0, tungsten: 0.35, glass: 2.0 },
  },
  "Tl-201": {
    name: "Thallium-201",
    gammaConstant: 0.45,
    hvl: { lead: 0.2, concrete: 25.0, tungsten: 0.15, glass: 0.8 },
  },
  "Ga-67": {
    name: "Gallium-67",
    gammaConstant: 0.8, // Average of multiple peaks
    hvl: { lead: 0.5, concrete: 35.0, tungsten: 0.4, glass: 2.0 },
  },
  "In-111": {
    name: "Indium-111",
    gammaConstant: 3.2,
    hvl: { lead: 1.0, concrete: 45.0, tungsten: 0.7, glass: 4.0 },
  }
};
