import React, { useState } from "react";
import { ShieldingControls } from "../ShieldingControls/ShieldingControls";
import { ShieldingResults } from "../ShieldingResults/ShieldingResults";
import { useShieldingCalculation } from "../../hooks/useShieldingCalculation";
import styles from "./ShieldingCalculator.module.css";

/* ──────────────────────────────────────────────────────────────────────────
   LEAD APRON INFO CARD
   Explains the clinical value of lead aprons and thyroid shields in hot-lab
   settings — shown inline above the calculator results.
────────────────────────────────────────────────────────────────────────── */
const LeadApronCard = () => (
  <div style={{
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    border: '1px solid #e74c3c',
    borderRadius: '8px',
    padding: '20px 24px',
    marginBottom: '24px',
    color: '#ddd',
    fontFamily: 'inherit',
    lineHeight: 1.6,
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
      <span style={{ fontSize: '28px' }}>🥼</span>
      <div>
        <h3 style={{ margin: 0, color: '#fff', fontSize: '16px', letterSpacing: '0.5px' }}>
          Lead Apron &amp; Thyroid Shield — Clinical Rationale
        </h3>
        <div style={{ fontSize: '11px', color: '#e74c3c', fontWeight: 'bold', marginTop: '2px' }}>
          ☢ MANDATORY IN HOT-LAB SETTINGS
        </div>
      </div>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '14px' }}>

      {/* LEFT: WHY LEAD APRON */}
      <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '6px', padding: '14px' }}>
        <div style={{ color: '#4ecdc4', fontWeight: 'bold', marginBottom: '8px', fontSize: '13px' }}>
          🛡️ Lead Apron (0.35 – 0.5 mm Pb-eq.)
        </div>
        <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '12.5px', color: '#ccc' }}>
          <li>Attenuates <strong>scattered gamma</strong> and low-energy photons reaching the trunk</li>
          <li>Standard 0.35 mm apron reduces dose by <strong>≈90%</strong> for Tc-99m (140 keV)</li>
          <li>Hot-lab grade <strong>0.5 mm</strong> apron recommended when handling high-activity I-131, F-18, or Ga-68</li>
          <li>Protects radiosensitive organs: gonads, GI tract, bone marrow</li>
          <li>Required per <strong>IAEA Safety Series No. 115</strong> for areas with dose rates &gt; 7.5 µSv/hr</li>
        </ul>
      </div>

      {/* RIGHT: WHY THYROID SHIELD */}
      <div style={{ background: 'rgba(231,76,60,0.08)', border: '1px solid rgba(231,76,60,0.3)', borderRadius: '6px', padding: '14px' }}>
        <div style={{ color: '#e74c3c', fontWeight: 'bold', marginBottom: '8px', fontSize: '13px' }}>
          🔴 Thyroid Shield (0.35 mm Pb) — Even in Hot-Lab
        </div>
        <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '12.5px', color: '#ccc' }}>
          <li>Thyroid is <strong>one of the most radiosensitive organs</strong> in the body (w<sub>T</sub> = 0.04, ICRP 103)</li>
          <li>Even at <strong>0.35 mm Pb-eq.</strong>, a thyroid collar provides meaningful attenuation for low–medium energy gamma</li>
          <li>Critical when working with <strong>I-131</strong> (364 keV) due to inhaled/aerosolized iodine risk</li>
          <li>Mandatory per <strong>ICRP Publication 139 (2018)</strong> for staff regularly handling &gt; 400 MBq I-131</li>
          <li>Reduces thyroid dose by <strong>30–50%</strong> for Tc-99m scatter even with thin 0.35 mm shields</li>
        </ul>
      </div>
    </div>

    <div style={{ fontSize: '11.5px', color: '#888', borderTop: '1px solid #333', paddingTop: '10px' }}>
      <strong style={{ color: '#aaa' }}>Clinical evidence:</strong>{" "}
      Giordano et al. (2020) — <em>Radiation exposure of nuclear medicine staff during hot-lab operations</em>, EJNMMI Physics;{" "}
      IAEA Radiation Protection Series No. 40 (2014/rev. 2022); ICRP Publication 139 (2018).
    </div>
  </div>
);

export const ShieldingCalculator = () => {
  const [isotope, setIsotope] = useState("Tc-99m");
  const [unit, setUnit] = useState("MBq");
  const [inputValue, setInputValue] = useState(18500);
  const [distanceUnit, setDistanceUnit] = useState("m");
  const [distance, setDistance] = useState(2.0);
  const [targetDose] = useState(0.02);
  const [showAcronyms, setShowAcronyms] = useState(false);

  const results = useShieldingCalculation(
    isotope,
    unit,
    inputValue,
    distanceUnit,
    distance,
    targetDose,
  );

  const glossaryItems = [
    {
      acronym: "MBq",
      expanded: "Megabecquerels",
      description: "One million radioactive disintegrations/second",
    },
    {
      acronym: "mCi",
      expanded: "Millicuries",
      description: "37 million disintegrations/second",
    },
    {
      acronym: "m",
      expanded: "Meter",
      description: "International unit of length",
    },
    {
      acronym: "cm",
      expanded: "Centimeter",
      description: "One hundredth of a meter",
    },
    {
      acronym: "ft",
      expanded: "Feet",
      description: "Imperial unit (~0.3048 m)",
    },
    { acronym: "in", expanded: "Inches", description: "One twelfth of a foot" },
    {
      acronym: "mR/hr",
      expanded: "Milliroentgen/Hour",
      description: "Radiation exposure rate unit",
    },
    {
      acronym: "mSv/hr",
      expanded: "Millisievert/Hour",
      description: "Radiation effective dose rate unit",
    },
    {
      acronym: "HVL",
      expanded: "Half Value Layer",
      description: "Material thickness to reduce dose by 50%",
    },
    {
      acronym: "Tc-99m",
      expanded: "Technetium-99m",
      description: "Most common nuclear medicine isotope",
    },
    {
      acronym: "I-131",
      expanded: "Iodine-131",
      description: "Thyroid imaging & therapy isotope",
    },
    {
      acronym: "F-18",
      expanded: "Fluorine-18",
      description: "PET imaging isotope",
    },
    {
      acronym: "ALARA",
      expanded: "As Low As Reasonably Achievable",
      description: "Core radiation protection principle",
    },
  ];

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <h2 className={styles.title}>☢️ NucMed Shielding Optimizer</h2>

          {/* LEAD APRON INFO CARD — always visible at the top */}
          <LeadApronCard />

          <div className={styles.grid}>
            <ShieldingControls
              isotope={isotope}
              setIsotope={setIsotope}
              unit={unit}
              setUnit={setUnit}
              inputValue={inputValue}
              setInputValue={setInputValue}
              distanceUnit={distanceUnit}
              setDistanceUnit={setDistanceUnit}
              distance={distance}
              setDistance={setDistance}
            />

            <ShieldingResults results={results} distance={distance} />
          </div>

          <div className={styles.footerBar}>
            <button
              className={styles.acronymsToggle}
              onClick={() => setShowAcronyms(!showAcronyms)}>
              Acronyms
            </button>

            <div className={styles.credit}>Created by LeoPantsulaia</div>
          </div>
        </div>

        {showAcronyms && (
          <div className={styles.sidePanel}>
            <div className={styles.acronymsSection}>
              <h4 className={styles.acronymsTitle}>Acronyms</h4>
              <div className={styles.acronymsList}>
                {glossaryItems.map((item) => (
                  <div key={item.acronym} className={styles.acronymItem}>
                    <div className={styles.acronymLabel}>{item.acronym}</div>
                    <div className={styles.acronymInfo}>
                      <div className={styles.acronymExpanded}>
                        {item.expanded}
                      </div>
                      <div className={styles.acronymDesc}>
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
