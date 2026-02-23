// --- START OF FILE AlgorithmsView.js ---
import React from "react";
import T, { catColor } from "./AlgorithmsView.styles";
import { REFERENCES, ARCHIVE } from "./algorithmsData";

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

// REFERENCES and ARCHIVE are provided by the data module

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
                <strong>
                  Rigorous derivation and operational interpretation:
                </strong>
                <br />
                The fundamental decay law derives from a first-order stochastic
                process: each nucleus has a constant probability per unit time
                to decay. Defining N(t) as the number of nuclei at time t, dN/dt
                = −λN integrates to N(t)=N₀e<sup>−λt</sup>. Activity is defined
                as A(t)=λN(t), hence A(t)=A₀e<sup>−λt</sup> where A₀=λN₀.
                <br />
                <br />
                <strong>Units and numerical practice:</strong>λ has units of
                time<sup>−1</sup> (here hours<sup>−1</sup>), T½ is expressed in
                hours in this project. Use SI-consistent conversions when
                combining with seconds or days. The code uses Math.LN2 for λ =
                ln(2)/T½ to retain floating-point precision across repeated
                operations.
                <br />
                <br />
                <strong>Uncertainty and experimental considerations:</strong>
                Measured half-life values are reported with uncertainties; when
                performing quantitative dosimetry for regulatory filing or
                patient-specific therapy planning, propagate both activity and
                half-life uncertainty. The UI implements decay deterministically
                for clarity; stochastic sampling or full uncertainty propagation
                can be layered on top for advanced workflows.
                <br />
                <br />
                <strong>Practical example:</strong>
                Starting with A₀=10,000 MBq of Mo‑99 (generator stock) and
                T½(Mo‑99)=65.941 h, λ≈0.010517 h<sup>−1</sup>. After 24 hours,
                A(24)=10000·e<sup>−0.010517·24</sup>≈7850 MBq. The code uses
                hours consistently and converts dates/times to elapsed hours
                prior to applying Math.exp(−λt).
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
                <strong>Formal derivation and unit bookkeeping:</strong>
                <br />
                The idealized point source radiates energy uniformly over a
                sphere: the surface area scales as 4πd². The dose rate (per unit
                activity) can be summarized by a gamma constant Γ which
                incorporates emission yield, energy deposition per photon and
                detector response. In traditional tables Γ is reported in
                R·cm²/mCi·hr. For clarity:
                <br />
                <ul>
                  <li>A [mCi] × Γ [R·cm²/mCi·hr] / d² [cm²] → R/hr</li>
                  <li>To convert to mR/hr multiply R/hr × 1000</li>
                </ul>
                In the code we accept user distances in metres and convert to
                centimetres before applying Γ; the factor `10` used previously
                reconciles the mixed-unit arithmetic when working with d in
                metres and Γ in cm² (implementation note: using a single
                coherent unit system eliminates magic factors and reduces subtle
                bugs).
                <br />
                <strong>Limitations:</strong> The Γ·A/d² formula ignores
                scattering (buildup) and finite source extent. Use this as a
                conservative point‑source estimate for quick planning; for
                construction design or tight regulatory compliance, compute
                build‑up factors or run deterministic/Monte Carlo transport
                (MCNP, Geant4) that include scattering and secondary photon
                production.
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
                <strong>
                  Conceptual foundations and practical application:
                </strong>
                <br />
                The Half-Value Layer (HVL) is the thickness of a material
                required to reduce the primary narrow-beam intensity by one
                half. The exponential attenuation form I=I₀e<sup>−μx</sup>
                provides a continuous parameter μ (linear attenuation
                coefficient) where HVL = ln(2)/μ. When using HVL-based
                estimates, remember:
                <br />
                <ul>
                  <li>
                    The HVL depends on photon energy and material composition;
                  </li>
                  <li>
                    The narrow-beam approximation neglects scattered photons
                    (build-up);
                  </li>
                  <li>
                    For PPE and localized shielding, HVL estimates are useful
                    and conservative when combined with measured dose-rate
                    checks.
                  </li>
                </ul>
                <br />
                <strong>Worked example:</strong>
                For Pb at 140 keV (Tc‑99m), HVL ≈ 0.30 mm. To achieve a 100×
                reduction you need n = log2(100) ≈ 6.64 HVLs → thickness x ≈
                6.64×0.30 ≈ 1.99 mm Pb. Use material-specific HVL tables (NIST
                XCOM or NCRP tabulations) for accurate per‑isotope values.
                <br />
                <strong>When to use detailed transport:</strong>
                For complex geometries, mixed spectra (PET annihilation + prompt
                emissions), or when scattering contributes significantly to dose
                at the point of interest, deterministic (ANISN,
                discrete-ordinates) or stochastic (MCNP/Geant4) modelling is the
                recommended approach.
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
          <p style={{ margin: 0, fontSize: "10px" }}>GEORGIA // 2026 // v2.1</p>
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
