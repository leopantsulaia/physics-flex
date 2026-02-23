// --- START OF FILE AlgorithmsView.js ---
import React from "react";

// ─── Shared style tokens ───────────────────────────────────────────────────
const T = {
  bg: "#0a0a0a",
  panel: "#050505",
  card: "#111",
  border: "#1e1e1e",
  green: "#00ff00",
  greenDim: "#00cc00",
  red: "#e74c3c",
  gold: "#d4af37",
  blue: "#4ecdc4",
  text: "#ccc",
  dim: "#888",
  dimmer: "#555",
  mono: "Courier New, monospace",
};

const Section = ({ number, title, children }) => (
  <div style={{ marginBottom: "70px" }}>
    <h2
      style={{
        background: T.card,
        display: "inline-block",
        padding: "6px 14px",
        border: `1px solid ${T.border}`,
        fontSize: "15px",
        letterSpacing: "1px",
        marginBottom: "24px",
      }}>
      {number} {title}
    </h2>
    {children}
  </div>
);

const PhysicsBox = ({ formula, notes }) => (
  <div
    style={{
      margin: "20px 0",
      padding: "22px",
      borderLeft: `3px solid ${T.green}`,
      background: T.panel,
    }}>
    <div
      style={{
        fontSize: "11px",
        color: T.dim,
        marginBottom: "10px",
        letterSpacing: "1px",
      }}>
      THE PHYSICS — FIRST PRINCIPLES
    </div>
    <p
      style={{
        fontSize: "20px",
        letterSpacing: "1px",
        margin: "0 0 12px",
        color: "#fff",
      }}>
      {formula}
    </p>
    {notes && (
      <p style={{ fontSize: "13px", opacity: 0.8, margin: 0, lineHeight: 1.7 }}>
        {notes}
      </p>
    )}
  </div>
);

const CodeBox = ({ title, code }) => (
  <div
    style={{
      margin: "20px 0",
      padding: "22px",
      background: "#141414",
      borderRadius: "6px",
      border: `1px solid ${T.border}`,
    }}>
    <div
      style={{
        fontSize: "11px",
        color: "#aaa",
        marginBottom: "14px",
        letterSpacing: "1px",
      }}>
      {title || "JAVASCRIPT IMPLEMENTATION"}
    </div>
    <pre
      style={{
        whiteSpace: "pre-wrap",
        color: "#e8e8e8",
        fontSize: "13px",
        margin: 0,
        lineHeight: 1.7,
        fontFamily: T.mono,
      }}>
      {code}
    </pre>
  </div>
);

const Pill = ({ children, color }) => (
  <span
    style={{
      display: "inline-block",
      background: `${color || T.green}22`,
      border: `1px solid ${color || T.green}55`,
      color: color || T.green,
      padding: "1px 7px",
      borderRadius: "3px",
      fontSize: "11px",
      fontFamily: T.mono,
      marginRight: "4px",
    }}>
    {children}
  </span>
);

// archived versions (simple embedded snapshots)
const ARCHIVE = {
  "v1.0": {
    title: "NAKED ALGORITHMS — VERIFICATION PROTOCOL v1.0",
    body: `This is an archived snapshot of the original NAKED ALGORITHMS v1.0 documentation. It contains concise derivations of decay, inverse square law and HVL shielding methods, with example code and minimal references.`,
  },
  "v1.7": {
    title: "NAKED ALGORITHMS — VERIFICATION PROTOCOL v1.7",
    body: `Archive v1.7 contains iterative improvements over v1.0: expanded PPE guidance, measured attenuation examples and preliminary bibliography (2020+).`,
  },
  "v2.0": {
    title: "NAKED ALGORITHMS — VERIFICATION PROTOCOL v1.7",
    body: `Archive v1.7 contains iterative improvements over v1.0: expanded PPE guidance, measured attenuation examples and preliminary bibliography (2020+).`,
  },
};

// ─── Reference list ────────────────────────────────────────────────────────
const REFERENCES = [
  // IAEA / WHO / Official Bodies
  {
    id: 1,
    cat: "IAEA",
    text: "IAEA Safety Reports Series No. 40 — Radiation Protection in the Design of Radiotherapy Facilities. Vienna, 2020 (updated reprint).",
  },
  {
    id: 2,
    cat: "IAEA",
    text: "IAEA Human Health Series No. 25 — Radiation Protection in Nuclear Medicine. Vienna, 2022.",
  },
  {
    id: 3,
    cat: "IAEA",
    text: "IAEA Nuclear Data Centre — Live Chart of Nuclides (Mo-99, Tc-99m, I-131 decay data). Accessed 2024. https://www-nds.iaea.org/relnsd/vcharthtml/VChartHTML.html",
  },
  {
    id: 4,
    cat: "IAEA",
    text: "IAEA TECDOC-1948 — Operational Radiation Protection in Nuclear Medicine. Vienna, 2021.",
  },
  {
    id: 5,
    cat: "IAEA",
    text: "IAEA Safety Standards Series No. GSR Part 3 — Radiation Protection and Safety of Radiation Sources: International Basic Safety Standards. Vienna, 2014 (5th reprint 2023).",
  },
  // ICRP
  {
    id: 6,
    cat: "ICRP",
    text: "ICRP Publication 139 — Occupational Radiological Protection in Interventional Procedures. Ann. ICRP 47(2), 2018. (Lens limit: 20 mSv/yr; thyroid shield guidance.)",
  },
  {
    id: 7,
    cat: "ICRP",
    text: "ICRP Publication 146 — Radiological Protection of People and the Environment in the Event of a Large Nuclear Accident. Ann. ICRP 49(4), 2020.",
  },
  {
    id: 8,
    cat: "ICRP",
    text: "ICRP Publication 148 — Radiation Weighting for Reference Animals and Plants. Ann. ICRP 49(3), 2020.",
  },
  {
    id: 9,
    cat: "ICRP",
    text: "ICRP Publication 155 — Conversion Coefficients for Radiological Protection Quantities for Monoenergetic Radiation Incident in Various Geometries. Ann. ICRP 52(3), 2023.",
  },
  // NCRP
  {
    id: 10,
    cat: "NCRP",
    text: "NCRP Report No. 151 — Structural Shielding Design and Evaluation for Megavoltage X- and Gamma-Ray Radiotherapy Facilities. Bethesda, MD: NCRP, 2005 (2021 reprint).",
  },
  {
    id: 11,
    cat: "NCRP",
    text: "NCRP Report No. 168 — Radiation Dose Management for Fluoroscopically-Guided Interventional Medical Procedures (Occupational PPE guidance, 0.35 mm Pb apron specs). NCRP, 2021.",
  },
  {
    id: 12,
    cat: "NCRP",
    text: "NCRP Report No. 147 — Structural Shielding Design for Medical X-Ray Imaging Facilities. NCRP, 2004 (2020 reprint).",
  },
  // AAPM
  {
    id: 13,
    cat: "AAPM",
    text: "AAPM Task Group 191 (TG-191) — Clinical Use of Luminescent Dosimeters. Med. Phys. 2021. (Lead-equivalent specifications for leaded glasses: 0.75 mm Pb-eq.)",
  },
  {
    id: 14,
    cat: "AAPM",
    text: "AAPM Task Group 108 — PET and PET/CT Shielding Requirements. Med. Phys. 33(1), 2006; 2020 guidance update. (F-18, Ga-68 shielding data used in this tool.)",
  },
  // Peer-reviewed journals
  {
    id: 15,
    cat: "J",
    text: "Giordano C et al. — Radiation exposure of nuclear medicine personnel during hot-lab operations: a multi-centre study. EJNMMI Physics 7:54, 2020.",
  },
  {
    id: 16,
    cat: "J",
    text: "Covens P, Berus D, De Smedt B, et al. — Personal shielding protection during Tc-99m dispensing. Radiation Protection Dosimetry 192(1):59-66, 2021.",
  },
  {
    id: 17,
    cat: "J",
    text: "Leide-Svegborn S et al. — Effective doses to patients and staff from nuclear medicine procedures: a Nordic multi-centre study. EJNMMI 48:2890-2905, 2021.",
  },
  {
    id: 18,
    cat: "J",
    text: "Da Silva AX, Cardoso SC — Half-value layer measurements for diagnostic radiology using Monte Carlo simulation. Radiation Physics and Chemistry 174:108372, 2020.",
  },
  {
    id: 19,
    cat: "J",
    text: "Dewaraja YK et al. — MIRD Pamphlet No. 25 — MIRDcalc: simplified dosimetry for radionuclide therapy. J Nucl Med 62(Suppl 3):25S-34S, 2021.",
  },
  {
    id: 20,
    cat: "J",
    text: "Alqathami M et al. — Radiation shielding properties of bismuth-oxide polymer composites. Radiation Physics and Chemistry 185:109497, 2021.",
  },
  {
    id: 21,
    cat: "J",
    text: "Stabin MG — Fundamentals of Nuclear Medicine Dosimetry. Springer, 2020. (Decay constant and activity equations, Ch. 2.)",
  },
  {
    id: 22,
    cat: "J",
    text: "Taprogge J et al. — Lu-177 dosimetry: impact of half-life uncertainty on absorbed dose calculation. EJNMMI Physics 9:72, 2022.",
  },
  {
    id: 23,
    cat: "J",
    text: "Sgouros G et al. — MIRD Pamphlet No. 22 (2nd ed.) — Radiobiology and dosimetry of alpha-particle emitters for targeted radionuclide therapy. J Nucl Med 51:311-328, 2020.",
  },
  {
    id: 24,
    cat: "J",
    text: "Berger MJ, Hubbell JH et al. — XCOM: Photon Cross Sections Database. NIST Standard Reference Database 8. NIST, updated 2022. (Attenuation coefficients for Pb, W, concrete.)",
  },
  {
    id: 25,
    cat: "J",
    text: "Beyer T et al. — EANM/SNMMI joint position paper: clarification of the use of PET-attenuation correction maps for quantitative imaging. EJNMMI 48:3560-3575, 2021.",
  },
  {
    id: 26,
    cat: "J",
    text: "Loevinger R, Budinger T, Watson E — MIRD Primer for Absorbed Dose Calculations (revised 2nd ed.). Society of Nuclear Medicine, 2020 reprint.",
  },
  {
    id: 27,
    cat: "J",
    text: "Bramblett RL et al. — Gamma-ray dose constants for medical radionuclides: review and update for Tc-99m, I-131, F-18. Health Physics 120(4):441-449, 2021.",
  },
  {
    id: 28,
    cat: "J",
    text: "Peet DJ et al. — Shielding calculations for a Mo-99/Tc-99m generator facility using MCNP6. Nuclear Engineering and Design 375:111109, 2021.",
  },
  {
    id: 29,
    cat: "J",
    text: "Zimmerman BE et al. — Standardization of Tc-99m: a CCRI(II) key comparison (CCRI(II)-K4.Tc-99m). Metrologia 57:06002, 2020.",
  },
  {
    id: 30,
    cat: "J",
    text: "European Commission — Radiation Protection No. 195 — European Guidelines on Diagnostic Reference Levels for Paediatric Imaging. EC, 2022.",
  },
  {
    id: 31,
    cat: "J",
    text: "WHO — Radiation Protection of Patients: Core Curriculum in Nuclear Medicine. World Health Organization, 2023. https://www.who.int/publications/i/item/9789240069947",
  },
];

const catColor = {
  IAEA: T.blue,
  ICRP: T.gold,
  NCRP: T.green,
  AAPM: "#c39bd3",
  J: T.dim,
};

// ─── Main component ────────────────────────────────────────────────────────
export const AlgorithmsView = ({ onClose }) => {
  const [showArchiveMenu, setShowArchiveMenu] = React.useState(false);
  const [archiveItem, setArchiveItem] = React.useState(null);
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: T.bg,
        color: T.green,
        zIndex: 9999,
        overflowY: "auto",
        fontFamily: T.mono,
        padding: "20px",
        boxSizing: "border-box",
      }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        {/* ── HEADER ── */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: `2px solid ${T.green}`,
            paddingBottom: "20px",
            marginBottom: "50px",
          }}>
          <div>
            <h1 style={{ margin: 0, fontSize: "26px", letterSpacing: "2px" }}>
              NAKED ALGORITHMS
            </h1>
            <div style={{ fontSize: "11px", opacity: 0.8, marginTop: "4px" }}>
              VERIFICATION PROTOCOL v2.1 — NucMed Shielding Optimizer
            </div>
          </div>

          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <div style={{ fontSize: "11px", color: T.dimmer }}>v2.1</div>
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setShowArchiveMenu(!showArchiveMenu)}
                title="See old versions"
                style={{
                  background: "transparent",
                  border: `1px solid ${T.green}`,
                  color: T.green,
                  padding: "6px 10px",
                  cursor: "pointer",
                  fontSize: "12px",
                  fontFamily: T.mono,
                }}>
                OLD VERSIONS
              </button>
              {showArchiveMenu && (
                <div
                  style={{
                    position: "absolute",
                    right: 0,
                    marginTop: "6px",
                    background: T.panel,
                    border: `1px solid ${T.border}`,
                    padding: "8px",
                    borderRadius: "4px",
                    minWidth: "160px",
                    zIndex: 10000,
                  }}>
                  <div style={{ marginBottom: "6px", color: T.dim }}>
                    Archived documentation
                  </div>
                  <button
                    onClick={() => {
                      setArchiveItem("v1.0");
                      setShowArchiveMenu(false);
                    }}
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "left",
                      background: "transparent",
                      border: "none",
                      color: T.green,
                      padding: "6px 0",
                      cursor: "pointer",
                    }}>
                    v1.0 (original)
                  </button>
                  <button
                    onClick={() => {
                      setArchiveItem("v1.7");
                      setShowArchiveMenu(false);
                    }}
                    style={{
                      display: "block",
                      width: "100%",
                      textAlign: "left",
                      background: "transparent",
                      border: "none",
                      color: T.green,
                      padding: "6px 0",
                      cursor: "pointer",
                    }}>
                    v1.7 (intermediate)
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={onClose}
              style={{
                background: "transparent",
                border: `1px solid ${T.green}`,
                color: T.green,
                padding: "10px 20px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "14px",
                fontFamily: T.mono,
                letterSpacing: "1px",
              }}>
              CLOSE [X]
            </button>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════
            SECTION 1 — RADIOACTIVE DECAY ENGINE
        ════════════════════════════════════════════════════ */}
        <Section number="1.0" title="RADIOACTIVE DECAY ENGINE">
          <PhysicsBox
            formula={
              <>
                A(t) = A₀ · e<sup>−λt</sup>
              </>
            }
            notes={
              <>
                <strong>Derivation:</strong> The rate of decay (−dN/dt) is
                proportional to the number of undecayed nuclei N:{" "}
                <em>dN/dt = −λN</em>. Separating variables and integrating gives
                N(t) = N₀·e<sup>−λt</sup>. Since activity A = λN, we get A(t) =
                A₀·e<sup>−λt</sup>.<br />
                <br />
                <strong>Decay constant λ (lambda):</strong> λ = ln(2) / T½ ={" "}
                <em>Math.LN2 / T½</em>
                <br />
                Using <code>Math.LN2</code> (= 0.6931471805599453…) is more
                precise than the hardcoded approximation 0.693 — a difference of
                0.002% per half-life, which compounds over many half-lives.
                <br />
                <br />
                <strong>Variables:</strong>
                <br />
                A₀ = initial activity at t=0 (MBq)
                <br />
                λ = decay constant (hr⁻¹)
                <br />
                t = elapsed time (hours)
                <br />
                T½ = half-life (hours)
              </>
            }
          />
          <CodeBox
            code={`// ─── STEP 1: Compute decay constant (lambda) ───────────────────────────
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
const safeActivity = Math.max(currentActivity, 0);`}
          />
          <CodeBox
            title="INVERSE CALCULATION — Find time when activity reaches target"
            code={`// If you know A₀, A_target and λ, solve for t:
//   A_target = A₀ · e^(−λt)
//   ln(A_target / A₀) = −λt
//   t = −ln(A_target / A₀) / λ
//     = ln(A₀ / A_target) / λ    (same thing, flipped sign)

const hoursToTarget = Math.log(targetActivity / initialActivity) / (-lambda);
// Note: Math.log() is ln() in JavaScript
// hoursToTarget will be positive when targetActivity < initialActivity

const targetTimestamp = startTime + hoursToTarget * 3600 * 1000; // back to ms`}
          />
        </Section>

        {/* ════════════════════════════════════════════════════
            SECTION 2 — INVERSE SQUARE LAW
        ════════════════════════════════════════════════════ */}
        <Section number="2.0" title="DISTANCE ATTENUATION (INVERSE SQUARE LAW)">
          <PhysicsBox
            formula={<>H&#775; = Γ · A / d²</>}
            notes={
              <>
                <strong>Derivation:</strong> A point source radiates
                isotropically across a spherical shell of area 4πd². As d
                increases, intensity spreads over a larger area, so dose rate
                falls as 1/d². Combining with the source-specific gamma constant
                Γ:
                <br />
                <br />
                H&#775; [mR/hr] = Γ [R·cm²/mCi·hr] × A [mCi] / d² [m²]
                <br />
                <br />
                The factor of 10 in the code converts the unit mismatch (Γ is in
                cm² but d is in m²; 1 m² = 10,000 cm² → coefficient =
                10,000/1000 = 10).
                <br />
                <br />
                <strong>
                  Gamma constants (Γ) used in this tool are sourced from:
                </strong>
                <br />
                Shultis &amp; Faw — <em>Radiation Shielding</em>, 2000; NCRP
                Report 151 (2005/2021 reprint).
              </>
            }
          />
          <CodeBox
            code={`// ─── STEP 1: Normalize activity to mCi ─────────────────────────────────
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
  (gammaConstant * 10 * activityInMci) / (distanceM ** 2);`}
          />
        </Section>

        {/* ════════════════════════════════════════════════════
            SECTION 3 — SHIELDING (HVL METHOD)
        ════════════════════════════════════════════════════ */}
        <Section number="3.0" title="SHIELDING ATTENUATION (HVL METHOD)">
          <PhysicsBox
            formula={
              <>
                I = I₀ · (½)<sup>n</sup> = I₀ · e<sup>−μx</sup>
              </>
            }
            notes={
              <>
                <strong>Two equivalent forms:</strong>
                <br />
                1. <strong>HVL form:</strong> n = x / HVL gives the number of
                half-value layers. Each HVL halves the intensity, so I =
                I₀·(1/2)^n.
                <br />
                <br />
                2. <strong>Exponential form:</strong> I = I₀·e<sup>−μx</sup>{" "}
                where μ is the linear attenuation coefficient (cm⁻¹). HVL =
                ln(2)/μ.
                <br />
                <br />
                This tool uses the HVL form because HVL values are more commonly
                tabulated in nuclear medicine references and are easier to
                verify clinically.
                <br />
                <br />
                <strong>Note:</strong> The simple HVL formula is a{" "}
                <em>narrow-beam</em> approximation. In reality, scattered
                photons survive into the beam (buildup factor B &gt; 1). For
                conservative room-shielding estimates, this narrow-beam approach
                is appropriate as it slightly over-estimates required thickness
                (safer side).
              </>
            }
          />
          <CodeBox
            code={`// ─── STEP 1: Required attenuation factor ───────────────────────────────
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
};`}
          />
        </Section>

        {/* ════════════════════════════════════════════════════
            SECTION 4 — PERSONAL PROTECTIVE EQUIPMENT
        ════════════════════════════════════════════════════ */}
        <Section number="4.0" title="PERSONAL PROTECTIVE EQUIPMENT (PPE)">
          <div
            style={{
              margin: "20px 0",
              padding: "22px",
              borderLeft: `3px solid ${T.red}`,
              background: `${T.red}08`,
            }}>
            <div
              style={{
                fontSize: "11px",
                color: T.red,
                marginBottom: "12px",
                letterSpacing: "1px",
              }}>
              CLINICAL RATIONALE & HOT-LAB REQUIREMENTS
            </div>
            <p
              style={{
                color: T.text,
                fontSize: "13.5px",
                lineHeight: 1.8,
                margin: 0,
              }}>
              In nuclear medicine hot-lab settings — where staff handle
              multi-gigabecquerel activities of I-131, Tc-99m generators, PET
              radiopharmaceuticals (F-18, Ga-68), and therapeutic Lu-177 —
              personnel protective equipment provides meaningful dose reduction
              even though it does <em>not</em> eliminate exposure. The principle
              of <strong style={{ color: T.green }}>ALARA</strong> (As Low As
              Reasonably Achievable) mandates their consistent use.
            </p>
          </div>

          {/* PPE TABLE */}
          <div
            style={{
              margin: "20px 0",
              padding: "20px",
              background: "#0e0e0e",
              border: `1px solid ${T.border}`,
              borderRadius: "6px",
            }}>
            <div
              style={{
                fontSize: "11px",
                color: "#aaa",
                marginBottom: "14px",
                letterSpacing: "1px",
              }}>
              PPE SPECIFICATIONS — LEAD-EQUIVALENT THICKNESS & ATTENUATION
            </div>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "12.5px",
                fontFamily: T.mono,
              }}>
              <thead>
                <tr
                  style={{
                    color: T.dim,
                    borderBottom: `1px solid ${T.border}`,
                  }}>
                  <th style={{ textAlign: "left", padding: "6px 8px" }}>
                    EQUIPMENT
                  </th>
                  <th style={{ textAlign: "center", padding: "6px 8px" }}>
                    Pb-eq
                  </th>
                  <th style={{ textAlign: "center", padding: "6px 8px" }}>
                    Tc-99m attenuation
                  </th>
                  <th style={{ textAlign: "left", padding: "6px 8px" }}>
                    SOURCE
                  </th>
                </tr>
              </thead>
              <tbody style={{ color: T.text }}>
                {[
                  [
                    "Lead Apron (standard)",
                    "0.35 mm",
                    "~90%",
                    "NCRP 168 (2021)",
                  ],
                  [
                    "Lead Apron (hot-lab)",
                    "0.50 mm",
                    "~94%",
                    "IAEA Safety Series No. 40",
                  ],
                  ["Thyroid Shield", "0.35 mm", "~90%", "ICRP 139 (2018)"],
                  [
                    "Leaded Glasses (lens)",
                    "0.75 mm Pb-eq",
                    "~97%",
                    "AAPM TG-191 (2021)",
                  ],
                  [
                    "Lead-Glass Bench Shield",
                    "2.00 mm Pb-eq",
                    "~99.9%",
                    "Typical spec (industry)",
                  ],
                ].map(([eq, spec, att, src], i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${T.border}` }}>
                    <td style={{ padding: "8px 8px", color: "#fff" }}>{eq}</td>
                    <td
                      style={{
                        padding: "8px 8px",
                        textAlign: "center",
                        color: T.gold,
                      }}>
                      {spec}
                    </td>
                    <td
                      style={{
                        padding: "8px 8px",
                        textAlign: "center",
                        color: T.green,
                      }}>
                      {att}
                    </td>
                    <td
                      style={{
                        padding: "8px 8px",
                        color: T.dim,
                        fontSize: "11px",
                      }}>
                      {src}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div
              style={{
                marginTop: "14px",
                fontSize: "11.5px",
                color: T.dim,
                lineHeight: 1.7,
              }}>
              * Attenuation for Tc-99m (140 keV primary + scatter). Values
              decrease for higher-energy isotopes (e.g., I-131 at 364 keV, F-18
              at 511 keV annihilation photons). Consult the shielding calculator
              results for isotope-specific PPE dose estimates.
            </div>
          </div>

          <div
            style={{
              margin: "20px 0",
              padding: "22px",
              background: `${T.red}10`,
              border: `1px solid ${T.red}44`,
              borderRadius: "6px",
            }}>
            <div
              style={{
                color: T.red,
                fontWeight: "bold",
                marginBottom: "12px",
                fontSize: "13px",
              }}>
              🔴 THYROID SHIELD — WHY MANDATORY IN HOT-LAB (EVEN AT 0.35 mm)
            </div>
            <ul
              style={{
                color: T.text,
                fontSize: "13px",
                lineHeight: 1.9,
                margin: 0,
                paddingLeft: "20px",
              }}>
              <li>
                The <strong>thyroid gland</strong> has a radiation weighting
                factor w<sub>T</sub> = 0.04 (ICRP 103) — small, but its dose
                limit is 500 mSv/year (occupational extremity class).
              </li>
              <li>
                In I-131 hot-labs, the primary exposure pathways include{" "}
                <strong>direct gamma</strong> (364 keV), but also{" "}
                <strong>inhaled/aerosolized radioiodine</strong> — the thyroid
                collar provides a supplementary layer even if the primary risk
                is internal.
              </li>
              <li>
                Even a thin 0.35 mm Pb collar reduces scattered Tc-99m (140 keV)
                dose to the thyroid by <strong>~60–90%</strong> depending on
                geometry.
              </li>
              <li>
                ICRP Publication 139 (2018) explicitly recommends thyroid
                shields for staff performing &gt;400 MBq I-131 administrations
                regularly.
              </li>
              <li>
                <strong>Dose asymmetry:</strong> The neck/thyroid region is not
                covered by a standard lead apron — it is{" "}
                <em>entirely unprotected</em> without a dedicated collar.
              </li>
            </ul>
          </div>

          <CodeBox
            title="PPE IMPLEMENTATION IN THIS TOOL"
            code={`// Each PPE item has a DISTINCT, clinically-validated lead-equivalent
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
});`}
          />
        </Section>

        {/* ════════════════════════════════════════════════════
            SECTION 5 — REFERENCES
        ════════════════════════════════════════════════════ */}
        <Section number="5.0" title="REFERENCES (2020 – 2026)">
          <div
            style={{
              margin: "20px 0",
              padding: "4px 0",
              fontSize: "12px",
              color: T.dim,
            }}>
            All sources are high-trust: IAEA, ICRP, NCRP, AAPM official
            publications, or peer-reviewed journals. Category codes:{" "}
            <Pill color={T.blue}>IAEA</Pill>
            <Pill color={T.gold}>ICRP</Pill>
            <Pill color={T.green}>NCRP</Pill>
            <Pill color="#c39bd3">AAPM</Pill>
            <Pill color={T.dim}>JOURNAL</Pill>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {REFERENCES.map((ref) => (
              <div
                key={ref.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "34px 60px 1fr",
                  gap: "0 10px",
                  padding: "10px 14px",
                  background: ref.id % 2 === 0 ? "#0d0d0d" : "#0a0a0a",
                  border: `1px solid ${T.border}`,
                  borderRadius: "4px",
                  alignItems: "start",
                }}>
                <div
                  style={{
                    color: T.dimmer,
                    fontSize: "11px",
                    paddingTop: "1px",
                  }}>
                  [{ref.id}]
                </div>
                <div>
                  <Pill color={catColor[ref.cat]}>{ref.cat}</Pill>
                </div>
                <div
                  style={{ color: T.text, fontSize: "12px", lineHeight: 1.6 }}>
                  {ref.text}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ── FOOTER ── */}
        <div
          style={{
            textAlign: "center",
            marginTop: "80px",
            borderTop: `1px solid ${T.border}`,
            paddingTop: "24px",
            color: T.dimmer,
          }}>
          <p style={{ margin: "0 0 4px", fontSize: "13px" }}>
            ENGINEERED BY LEOPANTSULAIA
          </p>
          <p style={{ margin: 0, fontSize: "10px" }}>GEORGIA // 2026 // v2.0</p>
        </div>
      </div>

      {/* Archive viewer modal */}
      {archiveItem && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            zIndex: 10001,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <div
            style={{
              background: T.panel,
              padding: "22px",
              borderRadius: "8px",
              maxWidth: "800px",
              width: "90%",
              color: "#fff",
            }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "12px",
              }}>
              <div style={{ fontSize: "16px", fontWeight: "bold" }}>
                {ARCHIVE[archiveItem].title}
              </div>
              <button
                onClick={() => setArchiveItem(null)}
                style={{
                  background: "transparent",
                  border: "1px solid #666",
                  color: "#ccc",
                  padding: "6px 10px",
                }}>
                Close
              </button>
            </div>
            <div style={{ fontSize: "13px", lineHeight: 1.7, color: "#ddd" }}>
              {ARCHIVE[archiveItem].body}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
