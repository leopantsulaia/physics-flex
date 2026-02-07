import React from "react";
import {
  ISOTOPE_DATA,
  MCI_TO_MBQ,
  DISTANCE_CONVERSIONS,
} from "../constants/isotopeData";
import styles from "./ShieldingControls.module.css";

export const ShieldingControls = ({
  isotope,
  setIsotope,
  unit,
  setUnit,
  inputValue,
  setInputValue,
  distanceUnit,
  setDistanceUnit,
  distance,
  setDistance,
}) => {
  return (
    <>
      <div className={styles.controlGroup}>
        <label className={styles.label}>Isotope Source</label>
        <select
          value={isotope}
          onChange={(e) => setIsotope(e.target.value)}
          className={styles.select}>
          {Object.keys(ISOTOPE_DATA).map((iso) => (
            <option key={iso} value={iso}>
              {ISOTOPE_DATA[iso].name}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.twoColumnGrid}>
        <div className={styles.controlGroup}>
          <div className={styles.activityLabelContainer}>
            <label className={styles.label}>Max Activity</label>
            <div className={styles.unitToggleGroup}>
              <button
                className={`${styles.unitToggle} ${unit === "MBq" ? styles.unitToggleActive : ""}`}
                onClick={() => {
                  if (unit === "mCi") {
                    setInputValue(Math.round(inputValue * MCI_TO_MBQ));
                    setUnit("MBq");
                  }
                }}>
                MBq
              </button>
              <button
                className={`${styles.unitToggle} ${unit === "mCi" ? styles.unitToggleActive : ""}`}
                onClick={() => {
                  if (unit === "MBq") {
                    setInputValue(
                      Math.round((inputValue / MCI_TO_MBQ) * 100) / 100,
                    );
                    setUnit("mCi");
                  }
                }}>
                mCi
              </button>
            </div>
          </div>
          <input
            type="number"
            value={Math.round(inputValue)}
            onChange={(e) => setInputValue(Number(e.target.value))}
            className={styles.input}
            placeholder={unit === "MBq" ? "Enter MBq value" : "Enter mCi value"}
          />
        </div>
        <div className={styles.controlGroup}>
          <div className={styles.activityLabelContainer}>
            <label className={styles.label}>Distance</label>
            <div className={styles.unitToggleGroup}>
              <button
                className={`${styles.unitToggle} ${distanceUnit === "m" ? styles.unitToggleActive : ""}`}
                onClick={() => {
                  if (distanceUnit === "cm") {
                    setDistance(Number((distance / 100).toFixed(4)));
                    setDistanceUnit("m");
                  } else if (distanceUnit === "ft") {
                    setDistance(Number((distance / 3.28084).toFixed(4)));
                    setDistanceUnit("m");
                  } else if (distanceUnit === "in") {
                    setDistance(Number((distance / 39.3701).toFixed(4)));
                    setDistanceUnit("m");
                  }
                }}>
                m
              </button>
              <button
                className={`${styles.unitToggle} ${distanceUnit === "cm" ? styles.unitToggleActive : ""}`}
                onClick={() => {
                  if (distanceUnit === "m") {
                    setDistance(Number((distance * 100).toFixed(2)));
                    setDistanceUnit("cm");
                  } else if (distanceUnit === "ft") {
                    setDistance(Number((distance / 0.0328084).toFixed(2)));
                    setDistanceUnit("cm");
                  } else if (distanceUnit === "in") {
                    setDistance(Number((distance / 0.393701).toFixed(2)));
                    setDistanceUnit("cm");
                  }
                }}>
                cm
              </button>
              <button
                className={`${styles.unitToggle} ${distanceUnit === "ft" ? styles.unitToggleActive : ""}`}
                onClick={() => {
                  if (distanceUnit === "m") {
                    setDistance(Number((distance * 3.28084).toFixed(4)));
                    setDistanceUnit("ft");
                  } else if (distanceUnit === "cm") {
                    setDistance(Number((distance * 0.0328084).toFixed(4)));
                    setDistanceUnit("ft");
                  } else if (distanceUnit === "in") {
                    setDistance(Number((distance / 12).toFixed(4)));
                    setDistanceUnit("ft");
                  }
                }}>
                ft
              </button>
              <button
                className={`${styles.unitToggle} ${distanceUnit === "in" ? styles.unitToggleActive : ""}`}
                onClick={() => {
                  if (distanceUnit === "m") {
                    setDistance(Number((distance * 39.3701).toFixed(2)));
                    setDistanceUnit("in");
                  } else if (distanceUnit === "cm") {
                    setDistance(Number((distance * 0.393701).toFixed(2)));
                    setDistanceUnit("in");
                  } else if (distanceUnit === "ft") {
                    setDistance(Number((distance * 12).toFixed(2)));
                    setDistanceUnit("in");
                  }
                }}>
                in
              </button>
            </div>
          </div>
          <input
            type="number"
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
            className={styles.input}
            placeholder={`Enter ${distanceUnit} value`}
          />
        </div>
      </div>
    </>
  );
};
