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

    // 3. Attenuation (Required Thickness)
    let requiredAttenuation = 1;
    let leadThickness = 0;
    let concreteThickness = 0;
    let tungstenThickness = 0;
    let glassThickness = 0;

    if (unshieldedDoseRate > targetDose) {
      requiredAttenuation = unshieldedDoseRate / targetDose;
      const numHVLs = Math.log2(requiredAttenuation);

      leadThickness = numHVLs * data.hvl.lead;
      concreteThickness = numHVLs * data.hvl.concrete;
      tungstenThickness = numHVLs * data.hvl.tungsten;
      glassThickness = numHVLs * data.hvl.glass;
    }

    // 4. Safety Scenarios (Dose received with specific PPE)
    const calculateAttenuatedDose = (thicknessMm, hvlMm) => {
      const numHVLs = thicknessMm / hvlMm;
      return unshieldedDoseRate * Math.pow(0.5, numHVLs);
    };

    const scenarioDoses = {
      apron: calculateAttenuatedDose(0.5, data.hvl.lead), // 0.5mm Pb Apron
      glasses: calculateAttenuatedDose(0.5, data.hvl.lead), // 0.5mm Pb Glasses (Changed from 0.75mm as per request)
      glassShield: calculateAttenuatedDose(2.0, data.hvl.lead), // 2.0mm Pb Eq L-Block (Standard) - User asked for 0.5mm but that's very thin for a shield. I'll use 0.5mm as requested for now or maybe just "Glass Shield" using the glass HVL?
      // User said "add glass shield with 0.5 mm lead". I will assume they mean a shield with 0.5mm Pb equivalence.
      // So I will use 0.5mm Pb.
      glassShieldRequested: calculateAttenuatedDose(0.5, data.hvl.lead),

      // I'll also add a real "Lead Glass" calculation if I have thickness. 
      // Let's stick to the Pb equivalent for the scenarios as "Shielding Equivalence" is common.
    };

    setResults({
      unshielded: unshieldedDoseRate.toFixed(2),
      attenuationFactor: requiredAttenuation.toFixed(1),
      leadMm: leadThickness.toFixed(2),
      concreteCm: (concreteThickness / 10).toFixed(2),
      tungstenMm: tungstenThickness.toFixed(2),
      glassMm: glassThickness.toFixed(2), // For the main bar
      activeMci: activityInMci.toFixed(1),
      scenarios: {
        apron: scenarioDoses.apron.toFixed(3),
        glasses: scenarioDoses.glasses.toFixed(3),
        glassShield: scenarioDoses.glassShieldRequested.toFixed(3)
      }
    });
  };

  return results;
};
