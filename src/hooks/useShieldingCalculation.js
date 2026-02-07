import { useState, useEffect } from "react";
import {
  ISOTOPE_DATA,
  MBQ_TO_MCI,
  DISTANCE_CONVERSIONS,
} from "../constants/isotopeData";

export const useShieldingCalculation = (
  isotope,
  unit,
  inputValue,
  distanceUnit,
  distance,
  targetDose,
) => {
  const [results, setResults] = useState(null);

  useEffect(() => {
    calculateShielding();
  }, [isotope, unit, inputValue, distanceUnit, distance, targetDose]);

  const calculateShielding = () => {
    const data = ISOTOPE_DATA[isotope];

    // 0. Normalize Distance to Meters
    const distanceInMeters = distance / DISTANCE_CONVERSIONS[distanceUnit];

    // 1. Normalize Activity to mCi for calculation
    const activityInMci = unit === "MBq" ? inputValue * MBQ_TO_MCI : inputValue;

    // 2. Inverse Square Law (Dose at Distance)
    // Formula approx: (Gamma * mCi * 10) / distance^2 = mR/hr
    const unshieldedDoseRate =
      (data.gammaConstant * 10 * activityInMci) /
      (distanceInMeters * distanceInMeters);

    // 3. Attenuation
    let requiredAttenuation = 1;
    let leadThickness = 0;
    let concreteThickness = 0;

    if (unshieldedDoseRate > targetDose) {
      requiredAttenuation = unshieldedDoseRate / targetDose;
      const numHVLs = Math.log2(requiredAttenuation);
      leadThickness = numHVLs * data.hvl.lead;
      concreteThickness = numHVLs * data.hvl.concrete;
    }

    setResults({
      unshielded: unshieldedDoseRate.toFixed(2),
      attenuationFactor: requiredAttenuation.toFixed(1),
      leadMm: leadThickness.toFixed(2),
      concreteCm: (concreteThickness / 10).toFixed(2),
      activeMci: activityInMci.toFixed(1),
    });
  };

  return results;
};
