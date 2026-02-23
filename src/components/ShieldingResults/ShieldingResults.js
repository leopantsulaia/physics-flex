import React from "react";
import styles from "./ShieldingResults.module.css";

export const ShieldingResults = ({ results, distance }) => {
  if (!results) return null;

  return (
    <div className={styles.resultsBox}>
      <h3 className={styles.heading}>Optimization Report</h3>

      <div className={styles.resultRow}>
        <span>Unshielded Dose:</span>
        <strong>{results.unshielded}</strong>
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
          <div className={styles.shieldingLabel}>TUNGSTEN</div>
          <div className={styles.progressBarContainer}>
            <div
              className={styles.progressBarTungsten}
              style={{
                width: `${Math.min(results.tungstenMm * 10, 100)}%`,
                backgroundColor: '#d4af37'
              }}></div>
          </div>
          <div className={styles.shieldingValue}>{results.tungstenMm} mm</div>
        </div>

        <div className={styles.shieldingRow}>
          <div className={styles.shieldingLabel}>LEAD GLASS</div>
          <div className={styles.progressBarContainer}>
            <div
              className={styles.progressBarGlass}
              style={{
                width: `${Math.min(results.glassMm * 2, 100)}%`,
                backgroundColor: '#aaddff'
              }}></div>
          </div>
          <div className={styles.shieldingValue}>{results.glassMm} mm</div>
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

      <hr className={styles.divider} />

      {/* SAFETY SCENARIOS */}
      <div className={styles.scenariosBox}>
        <h4 className={styles.scenarioTitle}>🛡️ TECHNICIAN EXPOSURE SCENARIOS</h4>

        <div className={styles.scenarioList}>

          <div className={styles.scenarioRow}>
            <span className={styles.scenarioLabel}>Lead Apron (0.35 mm Pb — standard):</span>
            <span className={styles.scenarioValue}>
              Body: <strong>{results.scenarios.apronStandard}</strong>
            </span>
          </div>

          <div className={styles.scenarioRow}>
            <span className={styles.scenarioLabel}>Lead Apron (0.5 mm Pb — hot-lab):</span>
            <span className={styles.scenarioValue}>
              Body: <strong>{results.scenarios.apronHotlab}</strong>
            </span>
          </div>

          <div className={styles.scenarioRow}>
            <span className={styles.scenarioLabel}>
              Thyroid Shield (0.35 mm Pb){" "}
              <span style={{ color: "#e74c3c", fontWeight: "bold" }}>☢ HOT-LAB</span>:
            </span>
            <span className={styles.scenarioValue}>
              Thyroid: <strong>{results.scenarios.thyroid}</strong>
            </span>
          </div>

          <div className={styles.scenarioRow}>
            <span className={styles.scenarioLabel}>Leaded Glasses (0.75 mm Pb-eq.):</span>
            <span className={styles.scenarioValue}>
              Eyes: <strong>{results.scenarios.glasses}</strong>
            </span>
          </div>

          <div className={styles.scenarioRow}>
            <span className={styles.scenarioLabel}>Lead Glass Shield (2.0 mm Pb-eq.):</span>
            <span className={styles.scenarioValue}>
              Whole Body: <strong>{results.scenarios.glassShield}</strong>
            </span>
          </div>

        </div>

        <div className={styles.safetyFooter}>
          <p>
            <strong>SAFETY NOTICE:</strong> The values above represent the estimated dose rate
            received by the technician at <strong>{results.distanceDisplay || `${distance} m`}</strong>.
          </p>
          <div className={styles.referenceLevels}>
            <span className={styles.referenceTitle}>☢️ REFERENCE LEVELS:</span>
            <ul className={styles.referenceList}>
              <li><strong>Normal Background:</strong> ~0.0001 – 0.0002 mSv/hr</li>
              <li><strong>Public Limit (Unrestricted):</strong> &lt; 0.02 mSv/hr (2 mR/hr)</li>
              <li><strong>Occupational Limit:</strong> 20 mSv/year (Body) | 150 mSv/year (Lens) | 500 mSv/year (Extremities)</li>
            </ul>
            <p className={styles.conversionNote}>
              1 mR ≈ 0.01 mSv (10 µSv) — valid for gamma photons in soft tissue
            </p>
          </div>
          <p style={{ fontSize: '0.8em', opacity: 0.8, marginTop: '5px' }}>
            *Calculations use HVL-based attenuation with gamma constant approximation.
            Thyroid shield is mandatory in hot-lab settings (I-131, high-activity PET).
            Always apply ALARA (As Low As Reasonably Achievable) principles.
          </p>
        </div>
      </div>
    </div>
  );
};
