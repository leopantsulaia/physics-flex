import { useState, useEffect, useCallback } from "react";
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

  const calculateShielding = useCallback(() => {
    const data = ISOTOPE_DATA[isotope];

    // 0. Normalize Distance to Meters
    const distanceInMeters = distance / DISTANCE_CONVERSIONS[distanceUnit];

    // 1. Normalize Activity to mCi for calculation (1 mCi = 37 MBq)
    const activityInMci = unit === "MBq" ? inputValue * MBQ_TO_MCI : inputValue;

    // 2. Inverse Square Law — Dose Rate at given distance
    // Approximation: H_dot (mR/hr) = (Gamma_constant * mCi * 10) / d²(m)
    // Source: Shultis & Faw, "Radiation Shielding" 2000; NCRP Report 151 (2005)
    const unshieldedDoseRate =
      (data.gammaConstant * 10 * activityInMci) /
      (distanceInMeters * distanceInMeters);

    // 3. Required Shielding Thickness (HVL method)
    // Attenuation: I = I₀ × (1/2)^n  where n = thickness / HVL
    // → n = log₂(I₀/I_target) = log₂(required_attenuation)
    let requiredAttenuation = 1;
    let leadThickness = 0;
    let concreteThickness = 0;
    let tungstenThickness = 0;
    let glassThickness = 0;

    if (unshieldedDoseRate > targetDose) {
      requiredAttenuation = unshieldedDoseRate / targetDose;
      const numHVLs = Math.log2(requiredAttenuation); // log₂ gives # of HVLs

      leadThickness = numHVLs * data.hvl.lead;
      concreteThickness = numHVLs * data.hvl.concrete;
      tungstenThickness = numHVLs * data.hvl.tungsten;
      glassThickness = numHVLs * data.hvl.glass;
    }

    // 4. PPE Scenario Doses — each uses its clinically correct lead-equivalent thickness:
    //
    // ┌─────────────────────────────┬───────────┬─────────────────────────────────────┐
    // │ Equipment                   │ Pb-eq.    │ Source                              │
    // ├─────────────────────────────┼───────────┼─────────────────────────────────────┤
    // │ Lead Apron (standard)       │ 0.35 mm   │ NCRP Report 168 (2021)              │
    // │ Lead Apron (hot-lab / 0.5)  │ 0.50 mm   │ IAEA Safety Reports Series No. 40   │
    // │ Thyroid Shield              │ 0.35 mm   │ IAEA, min. for hot-lab I-131 work   │
    // │ Leaded Glasses              │ 0.75 mm   │ ICRP Publ. 139 (2018), AAPM TG-191 │
    // │ Lead Glass Shield (bench)   │ 2.00 mm   │ Typical syringe/bench shield spec   │
    // └─────────────────────────────┴───────────┴─────────────────────────────────────┘
    const calculateAttenuatedDose = (thicknessMm, hvlMm) => {
      if (hvlMm <= 0 || thicknessMm <= 0) return unshieldedDoseRate;
      const numHVLs = thicknessMm / hvlMm;
      return unshieldedDoseRate * Math.pow(0.5, numHVLs);
    };

    const formatDose = (mR) => {
      const mSv = mR / 100; // 1 mR ≈ 0.01 mSv for gamma in soft tissue
      return `${mR.toFixed(2)} mR/hr (${mSv.toFixed(3)} mSv/hr)`;
    };

    const scenarioDoses = {
      apronStandard: calculateAttenuatedDose(0.35, data.hvl.lead),
      apronHotlab: calculateAttenuatedDose(0.50, data.hvl.lead),
      thyroid: calculateAttenuatedDose(0.35, data.hvl.lead),
      glasses: calculateAttenuatedDose(0.75, data.hvl.lead),
      glassShield: calculateAttenuatedDose(2.00, data.hvl.lead),
    };

    setResults({
      unshielded: formatDose(unshieldedDoseRate),
      attenuationFactor: requiredAttenuation.toFixed(1),
      leadMm: leadThickness.toFixed(2),
      concreteCm: (concreteThickness / 10).toFixed(2),
      tungstenMm: tungstenThickness.toFixed(2),
      glassMm: glassThickness.toFixed(2),
      activeMci: activityInMci.toFixed(1),
      distanceDisplay: `${distance} ${distanceUnit}`, // for ShieldingResults display
      scenarios: {
        apronStandard: formatDose(scenarioDoses.apronStandard),
        apronHotlab: formatDose(scenarioDoses.apronHotlab),
        thyroid: formatDose(scenarioDoses.thyroid),
        glasses: formatDose(scenarioDoses.glasses),
        glassShield: formatDose(scenarioDoses.glassShield),
      },
    });
  }, [isotope, unit, inputValue, distanceUnit, distance, targetDose]);

  useEffect(() => {
    calculateShielding();
  }, [calculateShielding]);

  return results;
};
