import React from "react";
import { ISOTOPE_DATA, MCI_TO_MBQ } from "../../constants/isotopeData";
import styles from "./ShieldingControls.module.css";

export const ShieldingControls = ({
  isotope,
  setIsotope,
  unit,
  setUnit,
  inputValue,
  setInputValue,
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
          <label className={styles.label}>Distance (m)</label>
          <input
            type="number"
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
            className={styles.input}
          />
        </div>
      </div>
    </>
  );
};
