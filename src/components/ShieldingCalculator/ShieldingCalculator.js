import React, { useState } from "react";
import { ShieldingControls } from "../ShieldingControls/ShieldingControls";
import { ShieldingResults } from "../ShieldingResults/ShieldingResults";
import { useShieldingCalculation } from "../../hooks/useShieldingCalculation";
import styles from "./ShieldingCalculator.module.css";

export const ShieldingCalculator = () => {
  const [isotope, setIsotope] = useState("Tc-99m");
  const [unit, setUnit] = useState("MBq");
  const [inputValue, setInputValue] = useState(18500);
  const [distanceUnit, setDistanceUnit] = useState("m");
  const [distance, setDistance] = useState(2.0);
  const [targetDose, setTargetDose] = useState(0.02);
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
      expanded: "Millirem/Hour",
      description: "Radiation dose rate unit",
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
  ];

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <h2 className={styles.title}>☢️ NucMed Shielding Optimizer</h2>

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
