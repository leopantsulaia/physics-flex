import React, { useState, useEffect } from "react";
import styles from "./DecayClock.module.css";

const ISOTOPES = {
  "Tc-99m": { name: "Technetium-99m", halfLife: 6.0067 }, // Hours
  "I-131": { name: "Iodine-131", halfLife: 192.0 },
  "F-18": { name: "Fluorine-18", halfLife: 1.8295 },
  "Ga-68": { name: "Gallium-68", halfLife: 1.13 },
};

export const DecayClock = () => {
  // State
  const [isotope, setIsotope] = useState("Tc-99m");
  const [elutionActivity, setElutionActivity] = useState(1000); // MBq at elution
  const [elutionTime, setElutionTime] = useState(
    new Date().toISOString().slice(0, 16),
  );
  const [targetActivity, setTargetActivity] = useState(500); // Target activity to find time for
  const [currentActivity, setCurrentActivity] = useState(1000);
  const [wasteReleaseDate, setWasteReleaseDate] = useState(null);
  const [targetActivityTime, setTargetActivityTime] = useState(null);

  // The Physics Engine (Real-time)
  useEffect(() => {
    const interval = setInterval(() => {
      calculateDecay();
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, [isotope, elutionActivity, elutionTime, targetActivity]);

  const calculateDecay = () => {
    const halfLifeHours = ISOTOPES[isotope].halfLife;
    const lambda = 0.693 / halfLifeHours; // Decay constant

    const startTime = new Date(elutionTime).getTime();
    const now = new Date().getTime();
    const timeDiffHours = (now - startTime) / (1000 * 60 * 60); // Convert ms to hours

    // A = A0 * e^(-lambda * t)
    const remaining = elutionActivity * Math.exp(-lambda * timeDiffHours);
    setCurrentActivity(Math.max(remaining, 0));

    // Calculate Waste Release (10 Half-Lives Rule)
    const releaseTimeMs = startTime + 10 * halfLifeHours * 60 * 60 * 1000;
    setWasteReleaseDate(new Date(releaseTimeMs));

    // Calculate when target activity will be reached
    if (targetActivity > 0 && targetActivity < elutionActivity) {
      // t = -ln(A/A0) / lambda
      const timeToTargetHours = -Math.log(targetActivity / elutionActivity) / lambda;
      const targetTimeMs = startTime + timeToTargetHours * 60 * 60 * 1000;
      setTargetActivityTime(new Date(targetTimeMs));
    } else {
      setTargetActivityTime(null);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>☢️ ATOMIC DECAY CLOCK</h1>

      {/* CONTROLS */}
      <div className={styles.controls}>
        <div className={styles.controlItem}>
          <label className={styles.label}>ISOTOPE:</label>
          <select
            value={isotope}
            onChange={(e) => setIsotope(e.target.value)}
            className={styles.select}>
            {Object.keys(ISOTOPES).map((iso) => (
              <option key={iso} value={iso}>
                {iso}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.controlItem}>
          <label className={styles.label}>ELUTION TIME:</label>
          <input
            type="datetime-local"
            value={elutionTime}
            onChange={(e) => setElutionTime(e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.controlItem}>
          <label className={styles.label}>ELUTION ACTIVITY (MBq):</label>
          <input
            type="number"
            value={elutionActivity}
            onChange={(e) => setElutionActivity(Number(e.target.value))}
            className={styles.input}
          />
        </div>

        <div className={styles.controlItem}>
          <label className={styles.label}>TARGET ACTIVITY (MBq):</label>
          <input
            type="number"
            value={targetActivity}
            onChange={(e) => setTargetActivity(Number(e.target.value))}
            className={styles.input}
          />
        </div>
      </div>

      {/* THE LIVE DISPLAY */}
      <div className={styles.liveDisplay}>
        <div className={styles.liveLabel}>CURRENT ACTIVITY (LIVE)</div>
        <div className={styles.activityValue}>
          {currentActivity.toFixed(4)} <span className={styles.unit}>MBq</span>
        </div>

        {/* Visual Bar */}
        <div className={styles.progressBarContainer}>
          <div
            className={styles.progressBar}
            style={{
              width: `${Math.min((currentActivity / elutionActivity) * 100, 100)}%`,
              backgroundColor:
                currentActivity < elutionActivity * 0.1 ? "#f00" : "#0f0",
            }}></div>
        </div>
      </div>

      {/* TARGET ACTIVITY TIME */}
      <div className={styles.wasteSection}>
        <h3 className={styles.wasteTitle}>⏱️ TARGET ACTIVITY TIME</h3>
        <div className={styles.releaseBox}>
          <span>Activity will be {targetActivity} MBq at:</span>
          <span className={styles.releaseDate}>
            {targetActivityTime ? targetActivityTime.toLocaleString() : "N/A"}
          </span>
        </div>
      </div>

      {/* WASTE MANAGEMENT LOGIC */}
      <div className={styles.wasteSection}>
        <h3 className={styles.wasteTitle}>🗑️ WASTE DISPOSAL PROTOCOL</h3>
        <p className={styles.wasteInfo}>
          Standard: 10 Half-Lives ({ISOTOPES[isotope].halfLife * 10} hours)
        </p>

        <div className={styles.releaseBox}>
          <span>SAFE RELEASE DATE:</span>
          <span className={styles.releaseDate}>
            {wasteReleaseDate
              ? wasteReleaseDate.toLocaleString()
              : "Calculating..."}
          </span>
        </div>

        <div className={styles.note}>
          *Engineering Note: This calculates physical decay only. Always verify
          with Geiger-Müller counter before disposal.
        </div>
      </div>
    </div>
  );
};
