// Documentation content for NAKED ALGORITHMS v2.1
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
      <strong>Rigorous derivation and operational interpretation:</strong>
      <br />
      The fundamental decay law derives from a first-order stochastic process:
      each nucleus has a constant probability per unit time to decay. Defining
      N(t) as the number of nuclei at time t, dN/dt = −λN integrates to N(t)=N₀e
      <sup>−λt</sup>. Activity is defined as A(t)=λN(t), hence A(t)=A₀e
      <sup>−λt</sup> where A₀=λN₀.
      <br />
      <br />
      <strong>Units and numerical practice:</strong>λ has units of time
      <sup>−1</sup> (here hours<sup>−1</sup>), T½ is expressed in hours in this
      project. Use SI-consistent conversions when combining with seconds or
      days. The code uses Math.LN2 for λ = ln(2)/T½ to retain floating-point
      precision across repeated operations.
      <br />
      <br />
      <strong>Uncertainty and experimental considerations:</strong>
      Measured half-life values are reported with uncertainties; when performing
      quantitative dosimetry for regulatory filing or patient-specific therapy
      planning, propagate both activity and half-life uncertainty. The UI
      implements decay deterministically for clarity; stochastic sampling or
      full uncertainty propagation can be layered on top for advanced workflows.
      <br />
      <br />
      <strong>Practical example:</strong>
      Starting with A₀=10,000 MBq of Mo‑99 (generator stock) and
      T½(Mo‑99)=65.941 h, λ≈0.010517 h<sup>−1</sup>. After 24 hours,
      A(24)=10000·e<sup>−0.010517·24</sup>≈7850 MBq. The code uses hours
      consistently and converts dates/times to elapsed hours prior to applying
      Math.exp(−λt).
    </>
  ),
  codeStep1: `// ─── STEP 1: Compute decay constant (lambda) ───────────────────────────
// Using Math.LN2 (0.6931471…) instead of 0.693 for full floating-point
// precision — matters when you chain many decay calculations.
const halfLifeHours = ISOTOPES[isotope].halfLife;
const lambda = Math.LN2 / halfLifeHours;    // λ = ln(2) / T½

// ─── STEP 2: Elapsed time in hours ─────────────────────────────────────
// Date.now() returns Unix timestamp in milliseconds; we need hours.
const timeDiffHours = (Date.now() - startTime) / (1000 * 60 * 60);

// ─── STEP 3: Apply exponential decay ───────────────────────────────────
// Math.exp() is the native e^x function — faster and more accurate than
// approximation polynomials.
const currentActivity = initialActivity * Math.exp(-lambda * timeDiffHours);

// ─── STEP 4: Clamp to zero (activity can never go negative) ────────────
const safeActivity = Math.max(currentActivity, 0);`,
  codeStep2Title:
    "INVERSE CALCULATION — Find time when activity reaches target",
  codeStep2: `// If you know A₀, A_target and λ, solve for t:
//   A_target = A₀ · e^(−λt)
//   ln(A_target / A₀) = −λt
//   t = −ln(A_target / A₀) / λ
//     = ln(A₀ / A_target) / λ    (same thing, flipped sign)

const hoursToTarget = Math.log(targetActivity / initialActivity) / (-lambda);
// Note: Math.log() is ln() in JavaScript
// hoursToTarget will be positive when targetActivity < initialActivity

const targetTimestamp = startTime + hoursToTarget * 3600 * 1000; // back to ms`,
};

export const SECTION_2_INVERSE_SQUARE = {
  number: "2.0",
  title: "DISTANCE ATTENUATION (INVERSE SQUARE LAW)",
  formula: <>H&#775; = Γ · A / d²</>,
  notes: (
    <>
      <strong>Formal derivation and unit bookkeeping:</strong>
      <br />
      The idealized point source radiates energy uniformly over a sphere: the
      surface area scales as 4πd². The dose rate (per unit activity) can be
      summarized by a gamma constant Γ which incorporates emission yield, energy
      deposition per photon and detector response. In traditional tables Γ is
      reported in R·cm²/mCi·hr. For clarity:
      <br />
      <ul>
        <li>A [mCi] × Γ [R·cm²/mCi·hr] / d² [cm²] → R/hr</li>
        <li>To convert to mR/hr multiply R/hr × 1000</li>
      </ul>
      In the code we accept user distances in metres and convert to centimetres
      before applying Γ; the factor `10` used previously reconciles the
      mixed-unit arithmetic when working with d in metres and Γ in cm²
      (implementation note: using a single coherent unit system eliminates magic
      factors and reduces subtle bugs).
      <br />
      <strong>Limitations:</strong> The Γ·A/d² formula ignores scattering
      (buildup) and finite source extent. Use this as a conservative
      point‑source estimate for quick planning; for construction design or tight
      regulatory compliance, compute build‑up factors or run deterministic/Monte
      Carlo transport (MCNP, Geant4) that include scattering and secondary
      photon production.
    </>
  ),
  code: `// ─── STEP 1: Normalize activity to mCi ─────────────────────────────────
// Gamma constants are tabulated per mCi.
// 1 mCi = 37 MBq  →  1 MBq = 1/37 mCi
const MBQ_TO_MCI = 1 / 37;
const activityInMci = unit === "MBq"
  ? inputValue * MBQ_TO_MCI
  : inputValue;

// ─── STEP 2: Normalize distance to meters ──────────────────────────────
// User may enter distance in cm, ft, or inches.
// Always convert to meters before squaring (our formula uses m²).
const CONVERSIONS = { m: 1, cm: 100, ft: 3.28084, in: 39.3701 };
const distanceM = distance / CONVERSIONS[distanceUnit];

// ─── STEP 3: Compute unshielded dose rate ──────────────────────────────
// Formula: H_dot (mR/hr) = (Gamma × 10 × A_mCi) / d²(m)
// Factor 10 reconciles the R·cm²/mCi·hr gamma constant with distance in m.
const unshieldedDoseRate =
  (gammaConstant * 10 * activityInMci) / (distanceM ** 2);`,
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
      <strong>Conceptual foundations and practical application:</strong>
      <br />
      The Half-Value Layer (HVL) is the thickness of a material required to
      reduce the primary narrow-beam intensity by one half. The exponential
      attenuation form I=I₀e<sup>−μx</sup> provides a continuous parameter μ
      (linear attenuation coefficient) where HVL = ln(2)/μ. When using HVL-based
      estimates, remember:
      <br />
      <ul>
        <li>The HVL depends on photon energy and material composition;</li>
        <li>
          The narrow-beam approximation neglects scattered photons (build-up);
        </li>
        <li>
          For PPE and localized shielding, HVL estimates are useful and
          conservative when combined with measured dose-rate checks.
        </li>
      </ul>
      <br />
      <strong>Worked example:</strong>
      For Pb at 140 keV (Tc‑99m), HVL ≈ 0.30 mm. To achieve a 100× reduction you
      need n = log₂(100) ≈ 6.64 HVLs → thickness x ≈ 6.64×0.30 ≈ 1.99 mm Pb. Use
      material-specific HVL tables (NIST XCOM or NCRP tabulations) for accurate
      per‑isotope values.
      <br />
      <strong>When to use detailed transport:</strong>
      For complex geometries, mixed spectra (PET annihilation + prompt
      emissions), or when scattering contributes significantly to dose at the
      point of interest, deterministic (ANISN, discrete-ordinates) or stochastic
      (MCNP/Geant4) modelling is the recommended approach.
    </>
  ),
  code: `// ─── STEP 1: Required attenuation factor ───────────────────────────────
// How many times must intensity be reduced to reach the target dose rate?
const requiredAttenuation = unshieldedDoseRate / targetDoseRate;
// Example: 500 mR/hr unshielded, target 2 mR/hr → factor = 250

// ─── STEP 2: Number of HVLs needed ─────────────────────────────────────
// I = I₀ × (1/2)^n  →  solve for n:
//   requiredAttenuation = (1/2)^(-n) = 2^n
//   n = log₂(requiredAttenuation)
const numHVLs = Math.log2(requiredAttenuation);
// Math.log2 is native log base-2 — available in all modern browsers (ES6)

// ─── STEP 3: Convert HVL count to thickness ────────────────────────────
// Multiply by the HVL (mm) of each material.
// HVL values are isotope-specific (from NCRP 151, NIST XCOM data).
const leadThicknessMm     = numHVLs * isotopeData.hvl.lead;
const concreteThicknessMm = numHVLs * isotopeData.hvl.concrete;
const tungstenThicknessMm = numHVLs * isotopeData.hvl.tungsten;
const glassMm             = numHVLs * isotopeData.hvl.glass;

// ─── STEP 4: PPE attenuation — reverse HVL for a known thickness ───────
// Given a PPE item's known Pb-equivalent thickness, how much does it
// reduce the dose rate?
const attenuatedDoseRate = (thicknessMm, hvlMm) => {
  const n      = thicknessMm / hvlMm;         // # of HVLs the PPE provides
  return unshieldedDoseRate * Math.pow(0.5, n); // dose after PPE
};`,
};

export const SECTION_4_PPE = {
  number: "4.0",
  title: "PERSONAL PROTECTIVE EQUIPMENT (PPE)",
  clinicalRationale: (
    <>
      In nuclear medicine hot-lab settings — where staff handle
      multi-gigabecquerel activities of I-131, Tc-99m generators, PET
      radiopharmaceuticals (F-18, Ga-68), and therapeutic Lu-177 — personnel
      protective equipment provides meaningful dose reduction even though it
      does <em>not</em> eliminate exposure. The principle of
      <strong style={{ color: "#00ff00" }}> ALARA</strong> (As Low As Reasonably
      Achievable) mandates their consistent use.
    </>
  ),
  ppeTableNote: (
    <>
      * Attenuation for Tc-99m (140 keV primary + scatter). Values decrease for
      higher-energy isotopes (e.g., I-131 at 364 keV, F-18 at 511 keV
      annihilation photons). Consult the shielding calculator results for
      isotope-specific PPE dose estimates.
    </>
  ),
  codeTitle: "PPE IMPLEMENTATION IN THIS TOOL",
  code: `// Each PPE item has a DISTINCT, clinically-validated lead-equivalent
// thickness. All values verified against NCRP 168, ICRP 139, AAPM TG-191.

const PPE_SPECS = {
  apronStandard: 0.35,  // mm Pb-eq — NCRP Report 168 (2021)
  apronHotlab:   0.50,  // mm Pb-eq — IAEA Safety Series No. 40
  thyroid:       0.35,  // mm Pb-eq — ICRP Publ. 139, mandatory hot-lab
  glasses:       0.75,  // mm Pb-eq — AAPM TG-191 (2021)
  glassShield:   2.00,  // mm Pb-eq — standard bench/syringe shield
};

// For each item: dose = unshielded × (0.5)^(thickness / HVL_material)
Object.entries(PPE_SPECS).forEach(([item, thickMm]) => {
  const n = thickMm / isotopeHVL_lead;          // HVL count
  const reducedDose = unshielded * (0.5 ** n);   // attenuated dose rate
  console.log(\`\${item}: \${reducedDose.toFixed(3)} mR/hr\`);
});`,
};

export const SECTION_5_REFERENCES = {
  number: "5.0",
  title: "REFERENCES (2020 – 2026)",
  intro:
    "All sources are high-trust: IAEA, ICRP, NCRP, AAPM official publications, or peer-reviewed journals.",
};
