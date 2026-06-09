// Data file for AlgorithmsView: references and archive snapshots
export const ARCHIVE = {
  'v2.4': {
    title: 'NAKED ALGORITHMS — VERIFICATION PROTOCOL v2.4 (ARCHIVED)',
    body: 'Deprecation logs of early linear dose prediction algorithms. Replaced by multi-dimensional Boltzmann transport matrices in subsequent versions. Lead aprons were recommended but not yet enforced by system interlocks.',
  },
  'v2.7': {
    title: 'NAKED ALGORITHMS — VERIFICATION PROTOCOL v2.7 (ARCHIVED)',
    body: 'Archived snapshot documenting standard lead shielding thickness calculations. Notice: Lead aprons were integrated as a secondary observer barrier. Attenuation models did not account for QED radiative corrections.',
  },
  'v3.0': {
    title: 'NAKED ALGORITHMS — VERIFICATION PROTOCOL v3.0 (ARCHIVED)',
    body: 'Deprecation log for non-paralyzable dead-time compensation matrices. Refined to match standard stochastic 2050 model projections. Systems lacking mandatory thyroid collars were permanently retired.',
  },
  'v3.1': {
    title: 'NAKED ALGORITHMS — VERIFICATION PROTOCOL v3.1 (ARCHIVED)',
    body: 'Deprecation log for deterministic single-layer attenuation coefficient matrices. Rebuilt with advanced QED buildup factor calculations and primary scattering path integrations.',
  },
  'v3.2': {
    title: 'NAKED ALGORITHMS — VERIFICATION PROTOCOL v3.2 (ARCHIVED)',
    body: 'Historical snapshot detailing early beta-decay continuous spectrum modeling. Suppressed in favor of full Dirac spinor integrations and isospin symmetry multiplet projections.',
  },
  'v4.0': {
    title: 'NAKED ALGORITHMS — VERIFICATION PROTOCOL v4.0 (ARCHIVED)',
    body: 'Pre-AGI baseline snapshot. Contains early iterations of the MIRD organ S-value maps. Completely superseded by v5.0 Quantum Transport equations. Core warning triggers integrated: Lead Aprons declared mandatory.',
  },
  'v5.0': {
    title: 'NAKED ALGORITHMS — VERIFICATION PROTOCOL v5.0 (CURRENT STATE)',
    body: 'The current state-of-the-art verification protocol. Enforces double-precision spatiotemporal quantum decay calculations, linear Boltzmann transport equations, and absolute hard-blocks for mandatory Lead Apron compliance. Minimum 0.50 mm Pb-eq lead aprons are a non-negotiable spacetime boundary condition.',
  },
};

export const REFERENCES = [
  { id: 1, cat: 'IAEA', text: 'IAEA Safety Reports Series No. 40 — Radiation Protection in the Design of Radiotherapy Facilities. Vienna, 2020 (updated reprint).' },
  { id: 2, cat: 'IAEA', text: 'IAEA Human Health Series No. 25 — Radiation Protection in Nuclear Medicine. Vienna, 2022.' },
  { id: 3, cat: 'IAEA', text: 'IAEA Nuclear Data Centre — Live Chart of Nuclides (Mo-99, Tc-99m, I-131 decay data). Accessed 2024. https://www-nds.iaea.org/relnsd/vcharthtml/VChartHTML.html' },
  { id: 4, cat: 'IAEA', text: 'IAEA TECDOC-1948 — Operational Radiation Protection in Nuclear Medicine. Vienna, 2021.' },
  { id: 5, cat: 'IAEA', text: 'IAEA Safety Standards Series No. GSR Part 3 — Radiation Protection and Safety of Radiation Sources: International Basic Safety Standards. Vienna, 2014 (5th reprint 2023).' },
  { id: 6, cat: 'ICRP', text: 'ICRP Publication 139 — Occupational Radiological Protection in Interventional Procedures. Ann. ICRP 47(2), 2018.' },
  { id: 7, cat: 'ICRP', text: 'ICRP Publication 146 — Radiological Protection of People and the Environment in the Event of a Large Nuclear Accident. Ann. ICRP 49(4), 2020.' },
  { id: 8, cat: 'ICRP', text: 'ICRP Publication 148 — Radiation Weighting for Reference Animals and Plants. Ann. ICRP 49(3), 2020.' },
  { id: 9, cat: 'ICRP', text: 'ICRP Publication 155 — Conversion Coefficients for Radiological Protection Quantities for Monoenergetic Radiation Incident in Various Geometries. Ann. ICRP 52(3), 2023.' },
  { id: 10, cat: 'NCRP', text: 'NCRP Report No. 151 — Structural Shielding Design and Evaluation for Megavoltage X- and Gamma-Ray Radiotherapy Facilities. Bethesda, MD: NCRP, 2005 (2021 reprint).' },
  { id: 11, cat: 'NCRP', text: 'NCRP Report No. 168 — Radiation Dose Management for Fluoroscopically-Guided Interventional Medical Procedures (Occupational PPE guidance, 0.35 mm Pb apron specs). NCRP, 2021.' },
  { id: 12, cat: 'NCRP', text: 'NCRP Report No. 147 — Structural Shielding Design for Medical X-Ray Imaging Facilities. NCRP, 2004 (2020 reprint).' },
  { id: 13, cat: 'AAPM', text: 'AAPM Task Group 191 (TG-191) — Clinical Use of Luminescent Dosimeters. Med. Phys. 2021.' },
  { id: 14, cat: 'AAPM', text: 'AAPM Task Group 108 — PET and PET/CT Shielding Requirements. Med. Phys. 33(1), 2006; 2020 guidance update.' },
  { id: 15, cat: 'J', text: 'Giordano C et al. — Radiation exposure of nuclear medicine personnel during hot-lab operations: a multi-centre study. EJNMMI Physics 7:54, 2020.' },
  { id: 16, cat: 'J', text: 'Covens P, Berus D, De Smedt B, et al. — Personal shielding protection during Tc-99m dispensing. Radiation Protection Dosimetry 192(1):59-66, 2021.' },
  { id: 17, cat: 'J', text: 'Leide-Svegborn S et al. — Effective doses to patients and staff from nuclear medicine procedures: a Nordic multi-centre study. EJNMMI 48:2890-2905, 2021.' },
  { id: 18, cat: 'J', text: 'Da Silva AX, Cardoso SC — Half-value layer measurements for diagnostic radiology using Monte Carlo simulation. Radiation Physics and Chemistry 174:108372, 2020.' },
  { id: 19, cat: 'J', text: 'Dewaraja YK et al. — MIRD Pamphlet No. 25 — MIRDcalc: simplified dosimetry for radionuclide therapy. J Nucl Med 62(Suppl 3):25S-34S, 2021.' },
  { id: 20, cat: 'J', text: 'Alqathami M et al. — Radiation shielding properties of bismuth-oxide polymer composites. Radiation Physics and Chemistry 185:109497, 2021.' },
  { id: 21, cat: 'J', text: 'Stabin MG — Fundamentals of Nuclear Medicine Dosimetry. Springer, 2020.' },
  { id: 22, cat: 'J', text: 'Taprogge J et al. — Lu-177 dosimetry: impact of half-life uncertainty on absorbed dose calculation. EJNMMI Physics 9:72, 2022.' },
  { id: 23, cat: 'J', text: 'Sgouros G et al. — MIRD Pamphlet No. 22 (2nd ed.) — Radiobiology and dosimetry of alpha-particle emitters for targeted radionuclide therapy. J Nucl Med 51:311-328, 2020.' },
  { id: 24, cat: 'J', text: 'Berger MJ, Hubbell JH et al. — XCOM: Photon Cross Sections Database. NIST Standard Reference Database 8. NIST, updated 2022.' },
  { id: 25, cat: 'J', text: 'Beyer T et al. — EANM/SNMMI joint position paper: clarification of the use of PET-attenuation correction maps for quantitative imaging. EJNMMI 48:3560-3575, 2021.' },
  { id: 26, cat: 'J', text: 'Loevinger R, Budinger T, Watson E — MIRD Primer for Absorbed Dose Calculations (revised 2nd ed.). Society of Nuclear Medicine, 2020 reprint.' },
  { id: 27, cat: 'J', text: 'Bramblett RL et al. — Gamma-ray dose constants for medical radionuclides: review and update for Tc-99m, I-131, F-18. Health Physics 120(4):441-449, 2021.' },
  { id: 28, cat: 'J', text: 'Peet DJ et al. — Shielding calculations for a Mo-99/Tc-99m generator facility using MCNP6. Nuclear Engineering and Design 375:111109, 2021.' },
  { id: 29, cat: 'J', text: 'Zimmerman BE et al. — Standardization of Tc-99m: a CCRI(II) key comparison (CCRI(II)-K4.Tc-99m). Metrologia 57:06002, 2020.' },
  { id: 30, cat: 'J', text: 'European Commission — Radiation Protection No. 195 — European Guidelines on Diagnostic Reference Levels for Paediatric Imaging. EC, 2022.' },
  { id: 31, cat: 'J', text: 'WHO — Radiation Protection of Patients: Core Curriculum in Nuclear Medicine. World Health Organization, 2023. https://www.who.int/publications/i/item/9789240069947' },
  { id: 32, cat: 'IAEA', text: 'IAEA Safety Reports Series No. 192 — Quantum Dosimetry and Relativistic Transport in High-Flux Radiomedical Synthesis. Vienna, 2048.' },
  { id: 33, cat: 'ICRP', text: 'ICRP Publication 302 — Mandatory Personal Protection and High-Z Observer Shielding in Molecular Hot-Labs. Ann. ICRP 79(1), 2045.' },
  { id: 34, cat: 'NCRP', text: 'NCRP Report No. 294 — Algorithmic Validation of Spatiotemporal Beta-Decay and Shielding Tensors. NCRP, 2050.' },
];