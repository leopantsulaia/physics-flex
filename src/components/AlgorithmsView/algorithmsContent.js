// Documentation content for NAKED ALGORITHMS v5.0
// This file contains all textual content organized by section

export const SECTION_1_DECAY = {
  number: "1.0",
  title: "RADIOACTIVE DECAY ENGINE",
  formula: (
    <>
      A(t) = A₀ · e<sup>−λt</sup>
    </>
  ),
  notes: (
    <>
      <strong>The Fundamental Law of Decay:</strong>
      <br />
      Radioactive decay is a purely stochastic, quantum mechanical process. The probability of any single unstable nucleus decaying in a given time interval is constant, which gives rise to the foundational differential equation: <em>dN/dt = −λN</em>. When we integrate this, we arrive at the classic exponential decay law: N(t) = N₀e<sup>−λt</sup>. Because Activity (A) is directly proportional to the number of nuclei (A = λN), the activity follows the exact same exponential drop: A(t) = A₀e<sup>−λt</sup>.
      <br />
      <br />
      <strong>Decay Constant (λ) & Half-Life (T½):</strong>
      <br />
      The decay constant λ represents the fractional rate of decay and is inversely proportional to the half-life. We define it as λ = ln(2) / T½. In our nuclear medicine application, where isotopes like <strong>Tc-99m</strong> (T½ ≈ 6.01 hours) or Mo-99 (T½ ≈ 65.94 hours) govern workflow, maintaining floating-point precision is critical. We utilize <code>Math.LN2</code> in JavaScript for pristine accuracy across recursive calculations.
      <br />
      <br />
      <strong>Clinical Example — Tc-99m:</strong>
      <br />
      Technetium-99m is the workhorse of nuclear medicine due to its ideal 140 keV gamma emission. If you elute a generator and obtain A₀ = 1000 mCi of Tc-99m, after exactly one half-life (6 hours), you will have A(6) = 1000 · e<sup>−(0.115)·6</sup> ≈ 500 mCi. In the code below, we rigorously convert all timestamps to elapsed hours before applying the exponential multiplier to ensure deterministic, reproducible dosimetry.
    </>
  ),
  codeStep1: `// ─── STEP 1: Compute decay constant (lambda) ───────────────────────────
// We use the full IEEE 754 precision of Math.LN2 to avoid compounding
// rounding errors during recursive half-life calculations.
const halfLifeHours = ISOTOPES[isotope].halfLife; // e.g., 6.01 for Tc-99m
const lambda = Math.LN2 / halfLifeHours;          // λ = ln(2) / T½

// ─── STEP 2: Calculate elapsed time in hours ───────────────────────────
const timeDiffHours = (Date.now() - startTime) / (1000 * 60 * 60);

// ─── STEP 3: Apply the exponential decay operator ──────────────────────
const currentActivity = initialActivity * Math.exp(-lambda * timeDiffHours);

// ─── STEP 4: Prevent mathematically invalid negative activities ────────
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
  title: "DISTANCE ATTENUATION (INVERSE SQUARE LAW)",
  formula: <>H&#775; = Γ · A / d²</>,
  notes: (
    <>
      <strong>Geometric Spreading of Radiation:</strong>
      <br />
      For an isotropic point source (like a small vial of radiotracer), gamma photons are emitted evenly in all directions. As they travel, they spread across the surface area of a sphere (4πd²). Consequently, the photon flux density—and therefore the dose rate—decreases proportionally to the square of the distance from the source.
      <br />
      <br />
      <strong>The Specific Gamma Ray Constant (Γ):</strong>
      <br />
      Every isotope has a unique Γ constant linking activity and distance to the resulting exposure rate. For <strong>Tc-99m</strong>, Γ is approximately 0.78 R·cm²/mCi·hr. This constant accounts for the yield and energy of the 140 keV photons. 
      <br />
      <br />
      <strong>Crucial Code Implementation Details:</strong>
      <br />
      The algorithm standardizes all user inputs (meters, inches, feet) into centimeters. We calculate the exposure rate in R/hr and immediately scale it by 1000 to display the standard clinical metric: mR/hr. This law proves that stepping just one step back from a syringe dramatically slashes your occupational dose.
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
const doseRperHr = (gammaConstant * activityInMci) / (distanceCm * distanceCm);
const unshieldedDoseRate = doseRperHr * 1000; // Convert R/hr to mR/hr`,
};

export const SECTION_3_SHIELDING = {
  number: "3.0",
  title: "SHIELDING ATTENUATION (HVL METHOD)",
  formula: (
    <>
      I = I₀ · (½)<sup>n</sup> = I₀ · e<sup>−μx</sup>
    </>
  ),
  notes: (
    <>
      <strong>The Half-Value Layer (HVL):</strong>
      <br />
      While distance geometrically spreads radiation, shielding physically absorbs it. The Half-Value Layer (HVL) is the exact thickness of a specific material required to attenuate the radiation intensity to 50% of its original value. This creates an exponential decay of intensity through matter: I = I₀ · (0.5)<sup>n</sup>, where 'n' is the number of HVLs.
      <br />
      <br />
      <strong>Shielding Tc-99m:</strong>
      <br />
      Because <strong>Tc-99m</strong> emits relatively low-energy gamma rays (140 keV), it is remarkably easy to shield compared to PET isotopes like F-18 (511 keV). The HVL of lead for Tc-99m is a mere 0.3 mm. Therefore, standard 2.0 mm lead glass on a hot-lab bench provides over 6 HVLs of attenuation, effectively slashing the dose by a factor of 2<sup>6.6</sup> (&gt;98% reduction). 
      <br />
      <br />
      <strong>Algorithmic Strategy:</strong>
      <br />
      The codebase reverses this logic. By defining a target safe dose, we divide the unshielded dose by the target dose to find the required attenuation factor. Taking the base-2 logarithm (<code>Math.log2</code>) yields the exact number of HVLs required, which is then multiplied by the material-specific HVL constant to output the required thickness in millimeters.
    </>
  ),
  code: `// ─── STEP 1: Determine Required Attenuation Factor ─────────────────────
// How many times must the intensity be cut in half?
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
  title: "MANDATORY PROTECTIVE PROTOCOLS (PPE)",
  clinicalRationale: (
    <>
      <strong>MANDATORY DIRECTIVE:</strong> In the radiopharmacy and hot-lab, shielding is not optional; it is the cornerstone of ALARA (As Low As Reasonably Achievable). When dispensing or manipulating unshielded multi-gigabecquerel activities of <strong>Tc-99m</strong>, a <strong>lead apron is absolutely mandatory.</strong> Even a standard 0.35 mm lead-equivalent apron provides over one full Half-Value Layer for Tc-99m, instantly cutting your core body dose by more than half. Furthermore, thyroid shields are critical to prevent cumulative dose to radiosensitive endocrine tissue during high-volume elution workflows.
    </>
  ),
  ppeTableNote: (
    <>
      * Note: These attenuation values are calibrated specifically for the 140 keV emission of Tc-99m. Higher energy isotopes (e.g., F-18, I-131) will penetrate PPE with significantly greater efficiency. Always utilize the dynamic calculator to verify protection factors for specific radionuclides.
    </>
  ),
  codeTitle: "DYNAMIC PPE ATTENUATION ALGORITHM",
  code: `// The algorithm computes the exact dose reduction for mandatory PPE
// based on established Pb-equivalent thicknesses from NCRP 168.

const calculateAttenuatedDose = (thicknessMm, hvlMm) => {
  if (hvlMm <= 0 || thicknessMm <= 0) return unshieldedDoseRate;
  
  // Calculate the number of Half-Value Layers the PPE provides
  const numHVLs = thicknessMm / hvlMm;
  
  // Apply the exponential attenuation formula: Dose = Dose₀ * (0.5)^n
  return unshieldedDoseRate * Math.pow(0.5, numHVLs);
};

const PPE_SCENARIOS = {
  apronStandard: calculateAttenuatedDose(0.35, data.hvl.lead), // MUST WEAR!
  apronHotlab:   calculateAttenuatedDose(0.50, data.hvl.lead), // High activity
  thyroid:       calculateAttenuatedDose(0.35, data.hvl.lead), // Mandatory
  glassShield:   calculateAttenuatedDose(2.00, data.hvl.lead), // Bench shield
};`,
};

export const SECTION_5_REFERENCES = {
  number: "5.0",
  title: "REFERENCES (2020 – 2026)",
  intro:
    "All algorithms, constants, and safety protocols are rigorously aligned with international standards: IAEA, ICRP, NCRP, and AAPM official publications.",
};
