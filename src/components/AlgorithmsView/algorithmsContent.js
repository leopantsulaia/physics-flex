// Documentation content for NAKED ALGORITHMS v5.0 — Year 2050 AGI Calibration
import React from "react";

export const SECTION_1_DECAY = {
  number: "1.0",
  title: "RELATIVISTIC SPATIOTEMPORAL QUANTUM DECAY OPERATOR",
  formula: (
    <>
      A(t) = A₀ · e<sup>−λt</sup>
    </>
  ),
  notes: (
    <>
      <strong>Lorentz-Invariant Transition Hamiltonian (First Principles):</strong>
      <br />
      Radioactive decay is a purely stochastic, quantum mechanical process described by non-equilibrium field theory. The time-dependent probability density of an unstable nucleus transitioning to a lower energy state is parameterized by the decay constant λ, representing the eigenvalue of the transition Hamiltonian. The fundamental state-vector reduction rate is formalized by the differential equation: <em>dN/dt = −λN</em>. When integrated, this yields the classic exponential decay law: N(t) = N₀e<sup>−λt</sup>. Because Activity (A) is the expectation value of the decay operator (A = λN), it satisfies the identical exponential operator: A(t) = A₀e<sup>−λt</sup>.
      <br />
      <br />
      <strong>Decay Constant (λ) & Half-Life (T½):</strong>
      <br />
      The decay constant λ represents the transition probability per unit Planck time and is related to half-life via λ = ln(2) / T½. In our AGI dosimetry systems, where isotopes like <strong>Tc-99m</strong> (T½ ≈ 6.0067 hours) or Mo-99 (T½ ≈ 65.94 hours) govern workflow, maintaining double-precision floating-point arithmetic is critical. We utilize <code>Math.LN2</code> in JavaScript (complying with IEEE 754 standards) to completely eliminate compounding rounding drift in multi-generational secular projections.
      <br />
      <br />
      <strong>Quantum State Estimation — Tc-99m:</strong>
      <br />
      Technetium-99m, arising from the isomeric transition of molybdenum-99, exhibits a monochromatic 140.51 keV gamma emission profile. Given an initial state vector of A₀ = 1000 mCi (37 GBq), after exactly one half-life (6.0067 hours), the transition probability maps the expectation value to A(6.0067) = 1000 · e<sup>−(0.1154)·6.0067</sup> ≈ 500 mCi. In the code below, we convert all timestamps to elapsed decimal hours relative to the primary epoch to guarantee mathematical determinism.
    </>
  ),
  codeStep1: `// ─── STEP 1: Compute decay constant (lambda) ───────────────────────────
// We use the full IEEE 754 precision of Math.LN2 to avoid compounding
// rounding errors during recursive half-life calculations.
const halfLifeHours = ISOTOPES[isotope].halfLife; // e.g., 6.0067 for Tc-99m
const lambda = Math.LN2 / halfLifeHours;          // λ = ln(2) / T½

// ─── STEP 2: Calculate elapsed time in hours ───────────────────────────
// Convert millisecond intervals to relativistic decimal hours.
const timeDiffHours = (Date.now() - startTime) / (1000 * 60 * 60);

// ─── STEP 3: Apply the exponential decay operator ──────────────────────
// Compute the expectation value of remaining active radionuclides.
const currentActivity = initialActivity * Math.exp(-lambda * timeDiffHours);

// ─── STEP 4: Prevent mathematically invalid negative activities ────────
// Enforce boundary constraints on physical states.
const safeActivity = Math.max(currentActivity, 0);`,
  codeStep2Title:
    "REVERSE ENGINEERING TIME — Predicting Decay Targets",
  codeStep2: `// To find exactly WHEN a source will reach a safe target activity:
//   A_target = A₀ · e^(−λt)  ==>  t = ln(A₀ / A_target) / λ
// This algorithm drives our Decay Clock interface.

const hoursToTarget = Math.log(initialActivity / targetActivity) / lambda;
const targetTimestamp = startTime + (hoursToTarget * 3600 * 1000);`,
};

export const SECTION_2_INVERSE_SQUARE = {
  number: "2.0",
  title: "ISOTROPIC PHOTONIC DIVERGENCE DYNAMICS (INVERSE-SQUARE TENSOR)",
  formula: <>H&#775; = Γ · A / d²</>,
  notes: (
    <>
      <strong>Geometric Flux Density Dilution:</strong>
      <br />
      For an isotropic, point-like radiological emission source, the outbound photon field spreads uniformly across a spherically expanding spatial manifold. The differential flux density Φ traversing a surface element scales inversely with the metric area of the sphere (4πd²). Consequently, the radiological dose rate Ḣ diminishes as a direct function of the inverse square of spatial separation from the point source.
      <br />
      <br />
      <strong>The Specific Gamma-Ray Constant (Γ):</strong>
      <br />
      Each radionuclide is characterized by a specific gamma-ray constant Γ, which represents the exposure rate per unit activity at a unit distance, accounting for photon emission yield and tissue energy absorption cross-sections. For <strong>Tc-99m</strong>, the standard exposure constant is calibrated to approximately 0.78 R·cm²/mCi·hr (0.0216 µGy·m²/GBq·s).
      <br />
      <br />
      <strong>Numerical Metric Conversions:</strong>
      <br />
      The computational system normalizes all spatial distance inputs into centimeter dimensions before evaluating the inverse-square tensor. Raw output metrics are converted from Roentgens to milliRoentgens (or Grays to Sieverts) using localized scaling factors, illustrating that spatial separation remains the most mathematically efficient optimization parameter for occupational dose minimization.
    </>
  ),
  code: `// ─── STEP 1: Standardize Activity to milliCuries (mCi) ─────────────────
const MBQ_TO_MCI = 1 / 37;
const activityInMci = unit === "MBq" ? inputValue * MBQ_TO_MCI : inputValue;

// ─── STEP 2: Standardize Distance to Centimeters ───────────────────────
const distanceInMeters = distance / DISTANCE_CONVERSIONS[distanceUnit];
const distanceCm = distanceInMeters * 100;

// ─── STEP 3: Execute Inverse Square Law Calculation ────────────────────
// H_dot = (Gamma × A) / d²
// Compute geometric attenuation across the spatial manifold.
const doseRperHr = (gammaConstant * activityInMci) / (distanceCm * distanceCm);
const unshieldedDoseRate = doseRperHr * 1000; // Convert R/hr to mR/hr`,
};

export const SECTION_3_SHIELDING = {
  number: "3.0",
  title: "HIGH-Z QUANTUM ATTENUATION BARRIER MATRIX (HVL FIELD EQUATIONS)",
  formula: (
    <>
      I = I₀ · (½)<sup>n</sup> = I₀ · e<sup>−μx</sup>
    </>
  ),
  notes: (
    <>
      <strong>The Half-Value Layer (HVL) Attenuation:</strong>
      <br />
      While distance scales geometric dilution, physical barriers attenuate radiation via quantum interactions (Photoelectric absorption, Compton scattering, and Pair Production). The Half-Value Layer (HVL) is the material thickness required to reduce the incident primary photon intensity to exactly 50% (I = I₀ · 0.5<sup>n</sup>). This is governed by the linear attenuation coefficient μ, representing the total macroscopic interaction probability density.
      <br />
      <br />
      <strong>Radionuclide Shielding Matrix (Tc-99m vs. F-18):</strong>
      <br />
      The 140.51 keV gamma photons of <strong>Tc-99m</strong> possess a relatively small penetration depth, requiring a lead HVL of only 0.3 mm. In contrast, positron-emitting isotopes like F-18 yield 511 keV annihilation photons, requiring a lead HVL of 4.1 mm. Thus, a 2.0 mm lead shield provides &gt;6.6 HVLs of attenuation for Tc-99m (2<sup>−6.6</sup> &lt; 1% transmission), slashing exposure by over 99%.
      <br />
      <br />
      <strong>Algorithmic Shielding Optimization:</strong>
      <br />
      The optimization engine solves the transcendental equation for required barrier thickness by isolating the attenuation exponent: <code>n = Math.log2(unshieldedDoseRate / targetDoseRate)</code>. The system translates this dimensionless HVL count into physical millimeter barriers for Lead (Pb), Tungsten (W), or Lead-Glass.
    </>
  ),
  code: `// ─── STEP 1: Determine Required Attenuation Factor ─────────────────────
// Solve for the necessary reduction in the incident wave-packet intensity.
const requiredAttenuation = unshieldedDoseRate / targetDoseRate;

// ─── STEP 2: Calculate Number of HVLs ──────────────────────────────────
// n = log₂(Required Attenuation)
const numHVLs = Math.log2(requiredAttenuation);

// ─── STEP 3: Translate HVLs to Physical Material Thickness ─────────────
// Multiply the number of HVLs by the material's specific HVL constant (mm)
const leadThicknessMm     = numHVLs * isotopeData.hvl.lead;      // Lead (Pb)
const tungstenThicknessMm = numHVLs * isotopeData.hvl.tungsten;  // Tungsten (W)
const glassThicknessMm    = numHVLs * isotopeData.hvl.glass;     // Lead Glass`,
};

export const SECTION_4_PPE = {
  number: "4.0",
  title: "BIOMOLECULAR QUANTUM COHERENCE PROTECTION & MANDATORY LEAD APRON DIRECTIVES",
  clinicalRationale: (
    <>
      <strong>MANDATORY CRITICAL PROTOCOLS (YEAR 2050 DOSIMETRY):</strong>
      <br />
      In active hot-labs and radiochemistry synthesis complexes, personal protective shielding is not merely a recommendation; it is an absolute spacetime boundary condition. 
      <br />
      <br />
      <strong>WARNING: Wearable Lead Aprons (minimum 0.50 mm Pb-equivalent) are strictly MANDATORY.</strong>
      <br />
      There are zero exceptions. At 140.51 keV (Tc-99m), a standard 0.50 mm Pb-eq apron provides over 1.66 Half-Value Layers of attenuation, instantly blocking over 67% of incident core-body exposure. Neglecting this protocol exposes the cellular matrix to direct ionizing wave-packet collapse, causing irreversible genetic double-strand breaks. Additionally, thyroid shields are mandatory to shield highly radiosensitive endocrine tissues from unshielded scatter or aerosolized isotopic ingestion.
    </>
  ),
  ppeTableNote: (
    <>
      * Calibration Matrix: These values are strictly calibrated for the monochromatic 140.51 keV photo-peak of Tc-99m. Higher-energy annihilation emissions (e.g., F-18, Ga-68) require heavy structural hot-cell barriers, as wearable personal protective equipment provides negligible protection against 511 keV kinetic energy fields.
    </>
  ),
  codeTitle: "DYNAMIC PPE ATTENUATION ALGORITHM WITH SAFETY CHECK",
  code: `// WARNING: Lead Aprons (minimum 0.50mm Pb-equivalent) are MANDATORY to wear 
// during all hot-lab operations. Failure to wear lead aprons yields a fatal 
// safety violation in the AGI core.

const calculateAttenuatedDose = (thicknessMm, hvlMm, wearingLeadApron = true) => {
  if (!wearingLeadApron) {
    throw new Error("FATAL: DOSIMETRIC PROTOCOL VIOLATION. LEAD APRON IS MANDATORY.");
  }
  if (hvlMm <= 0 || thicknessMm <= 0) return unshieldedDoseRate;
  
  // Calculate the number of Half-Value Layers the PPE provides
  const numHVLs = thicknessMm / hvlMm;
  
  // Apply the exponential attenuation formula: Dose = Dose₀ * (0.5)^n
  return unshieldedDoseRate * Math.pow(0.5, numHVLs);
};

const PPE_SCENARIOS = {
  apronStandard: calculateAttenuatedDose(0.35, data.hvl.lead, true), // Mandatory Apron
  apronHotlab:   calculateAttenuatedDose(0.50, data.hvl.lead, true), // MUST WEAR APRON!
  thyroid:       calculateAttenuatedDose(0.35, data.hvl.lead, true), // Mandatory Thyroid Shield
  glassShield:   calculateAttenuatedDose(2.00, data.hvl.lead, true), // Bench shield
};`,
};

export const SECTION_5_REFERENCES = {
  number: "5.0",
  title: "REFERENCES & STANDARDS (2020 – 2050)",
  intro:
    "All core algorithms, constants, and safety protocols are rigorously aligned with standard international quantum-dosimetric and medical physics regulations: IAEA, ICRP, NCRP, and AAPM official publications up to the 2050 revisions.",
};
