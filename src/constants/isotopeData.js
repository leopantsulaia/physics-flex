// --- UNIT CONVERSIONS ---
export const MBQ_TO_MCI = 1 / 37; // 1 mCi = 37 MBq
export const MCI_TO_MBQ = 37;

// --- ISOTOPE DATA ---
// Data Source: NCRP Report No. 147 / Standard NucMed Physics
export const ISOTOPE_DATA = {
  "Tc-99m": {
    name: "Technetium-99m",
    gammaConstant: 0.78, // R-cm²/mCi-hr
    hvl: { lead: 0.3, concrete: 22.0 }, // mm
  },
  "I-131": {
    name: "Iodine-131",
    gammaConstant: 2.2,
    hvl: { lead: 3.0, concrete: 65.0 },
  },
  "F-18": {
    name: "Fluorine-18 (PET)",
    gammaConstant: 5.7,
    hvl: { lead: 4.0, concrete: 74.0 },
  },
};
