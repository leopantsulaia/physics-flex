import React from "react";
import { ShieldingCalculator } from "../ShieldingCalculator/ShieldingCalculator";
import { DecayClock } from "../DecayClock/DecayClock";
import "./NuclearMedicineHelper.css";

export const NuclearMedicineHelper = () => {
  return (
    <div className="nuclearHelperContainer">
      <h2>Nuclear Medicine Technologist Automatic Counter (Helper)</h2>
      <div className="nuclearHelperContent">
        <ShieldingCalculator />
        <DecayClock />
      </div>
    </div>
  );
};
