import React from "react";
import { ISOTOPE_DATA } from "../../constants/isotopeData";
import styles from "./ShieldingControls.module.css";

export const ShieldingControls = ({
  isotope,
  setIsotope,
  unit,
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
          <label className={styles.label}>Activity ({unit})</label>
          <input
            type="number"
            value={Math.round(inputValue)}
            onChange={(e) => setInputValue(Number(e.target.value))}
            className={styles.input}
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
