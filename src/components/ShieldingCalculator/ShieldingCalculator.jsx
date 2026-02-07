import React, { useState } from "react";
import { ShieldingControls } from "../ShieldingControls/ShieldingControls";
import { ShieldingResults } from "../ShieldingResults/ShieldingResults";
import { useShieldingCalculation } from "../../hooks/useShieldingCalculation";
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
        <ShieldingControls
          isotope={isotope}
          setIsotope={setIsotope}
          unit={unit}
          setUnit={setUnit}
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
