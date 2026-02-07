import React, { useState } from "react";
import { ShieldingControls } from "../ShieldingControls/ShieldingControls";
import { ShieldingResults } from "../ShieldingResults/ShieldingResults";
import { useShieldingCalculation } from "../../hooks/useShieldingCalculation";
import { MCI_TO_MBQ } from "../../constants/isotopeData";
import styles from "./ShieldingCalculator.module.css";

export const ShieldingCalculator = () => {
  const [isotope, setIsotope] = useState("Tc-99m");
  const [unit, setUnit] = useState("MBq");
  const [inputValue, setInputValue] = useState(18500);
  const [distance, setDistance] = useState(2.0);
  const [targetDose, setTargetDose] = useState(0.02);

  const results = useShieldingCalculation(
    isotope,
    unit,
    inputValue,
    distance,
    targetDose,
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>☢️ NucMed Shielding Optimizer</h2>

      <div className={styles.grid}>
        {/* UNIT TOGGLE */}
        <div className={styles.unitToggle}>
          <label className={styles.unitLabel}>Unit:</label>
          <select
            value={unit}
            onChange={(e) => {
              const newUnit = e.target.value;
              setInputValue((prev) =>
                newUnit === "MBq" ? prev * MCI_TO_MBQ : prev / MCI_TO_MBQ,
              );
              setUnit(newUnit);
            }}
            className={styles.unitSelect}>
            <option value="MBq">MBq (Megabecquerel)</option>
            <option value="mCi">mCi (Millicurie)</option>
          </select>
        </div>

        <ShieldingControls
          isotope={isotope}
          setIsotope={setIsotope}
          unit={unit}
          inputValue={inputValue}
          setInputValue={setInputValue}
          distance={distance}
          setDistance={setDistance}
        />

        <ShieldingResults results={results} distance={distance} />
      </div>
    </div>
  );
};
