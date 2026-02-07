import React from "react";
import styles from "./ShieldingResults.module.css";

export const ShieldingResults = ({ results, distance }) => {
  if (!results) return null;

  return (
    <div className={styles.resultsBox}>
      <h3 className={styles.heading}>Optimization Report</h3>

      <div className={styles.resultRow}>
        <span>Unshielded Dose:</span>
        <strong>{results.unshielded} mR/hr</strong>
      </div>

      <hr className={styles.divider} />

      <div className={styles.shieldingSection}>
        <div className={styles.shieldingRow}>
          <div className={styles.shieldingLabel}>LEAD (Pb)</div>
          <div className={styles.progressBarContainer}>
            <div
              className={styles.progressBar}
              style={{
                width: `${Math.min(results.leadMm * 10, 100)}%`,
              }}></div>
          </div>
          <div className={styles.shieldingValue}>{results.leadMm} mm</div>
        </div>

        <div className={styles.shieldingRow}>
          <div className={styles.shieldingLabel}>CONCRETE</div>
          <div className={styles.progressBarContainer}>
            <div
              className={styles.progressBarConcrete}
              style={{
                width: `${Math.min(results.concreteCm * 2, 100)}%`,
              }}></div>
          </div>
          <div className={styles.shieldingValue}>{results.concreteCm} cm</div>
        </div>
      </div>
    </div>
  );
};
