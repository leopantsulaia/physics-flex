// --- START OF FILE DecayClock.js ---
import React, { useState, useEffect } from "react";
import styles from "./DecayClock.module.css";
import { AlgorithmsView } from "../AlgorithmsView/AlgorithmsView";
import { MoGenerator } from "./MoGenerator";

const ISOTOPES = {
  "Tc-99m": { name: "Technetium-99m", halfLife: 6.0067 },
  "I-131": { name: "Iodine-131", halfLife: 192.0 },
  "F-18": { name: "Fluorine-18", halfLife: 1.8295 },
  "Ga-68": { name: "Gallium-68", halfLife: 1.13 },
  "Lu-177": { name: "Lutetium-177", halfLife: 159.52 },
  "I-123": { name: "Iodine-123", halfLife: 13.22 },
  "Tl-201": { name: "Thallium-201", halfLife: 72.91 },
  "Ga-67": { name: "Gallium-67", halfLife: 78.24 },
  "In-111": { name: "Indium-111", halfLife: 67.2 }
};

const getLocalISODate = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const DecayClock = () => {
  // --- STATE ---
  const [isotope, setIsotope] = useState("Tc-99m");

  // ELUTION (Source) STATE
  const [elutionDate, setElutionDate] = useState(getLocalISODate());
  const [elutionTime, setElutionTime] = useState(new Date().toTimeString().slice(0, 5));
  const [elutionActivity, setElutionActivity] = useState(1000); // MBq

  // CALCULATION MODE
  const [calcMode, setCalcMode] = useState("FIND_TIME");

  // INPUTS FOR MODES
  const [targetDoseInput, setTargetDoseInput] = useState(500); // For FIND_TIME
  const [targetDateInput, setTargetDateInput] = useState(getLocalISODate()); // For FIND_DOSE
  const [targetTimeInput, setTargetTimeInput] = useState(
    new Date(Date.now() + 3600000).toTimeString().slice(0, 5) // Default +1 hour
  );

  // LIVE OUTPUTS
  const [currentActivity, setCurrentActivity] = useState(1000);
  const [calculationResult, setCalculationResult] = useState({
    mainValue: "",
    subValue: "",
    isOverdue: false,
    label: ""
  });

  // --- NEW STATE FOR VIEW MODE ---
  const [viewMode, setViewMode] = useState("ATOMIC");

  // --- NEW STATE FOR ALGORITHMS VIEW ---
  const [showAlgorithms, setShowAlgorithms] = useState(false);

  // --- HELPERS ---
  const setElutionToNow = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    setElutionDate(`${year}-${month}-${day}`);
    setElutionTime(now.toTimeString().slice(0, 5));
  };

  // --- PHYSICS ENGINE ---
  useEffect(() => {
    const interval = setInterval(() => calculatePhysics(), 1000);
    calculatePhysics(); // Run immediately
    return () => clearInterval(interval);
  }, [
    isotope,
    elutionDate, elutionTime, elutionActivity,
    calcMode, targetDoseInput, targetDateInput, targetTimeInput
  ]);

  const calculatePhysics = () => {
    // 1. Setup Source Time
    const sourceStr = `${elutionDate}T${elutionTime}`;
    const startTime = new Date(sourceStr).getTime();
    const now = new Date().getTime();

    if (isNaN(startTime)) return;

    const halfLifeHours = ISOTOPES[isotope].halfLife;
    const lambda = 0.693 / halfLifeHours;

    // 2. Calculate LIVE Current Activity
    const timeDiffHours = (now - startTime) / (1000 * 60 * 60);
    const current = elutionActivity * Math.exp(-lambda * timeDiffHours);
    setCurrentActivity(Math.max(current, 0));

    // 3. Handle Calculation Modes
    if (calcMode === "FIND_TIME") {
      if (targetDoseInput >= elutionActivity) {
        setCalculationResult({
          label: "IMPOSSIBLE",
          mainValue: "Target > Source",
          subValue: "Cannot decay up",
          isOverdue: true
        });
      } else {
        const hoursToTarget = -Math.log(targetDoseInput / elutionActivity) / lambda;
        const targetTimestamp = startTime + (hoursToTarget * 60 * 60 * 1000);
        const targetDateObj = new Date(targetTimestamp);

        const isPast = targetTimestamp < now;

        setCalculationResult({
          label: "EXPECTED AT TIME",
          mainValue: targetDateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          subValue: targetDateObj.toLocaleDateString(),
          isOverdue: isPast
        });
      }
    }
    else if (calcMode === "FIND_DOSE") {
      const targetStr = `${targetDateInput}T${targetTimeInput}`;
      const targetTimestamp = new Date(targetStr).getTime();

      if (isNaN(targetTimestamp)) return;

      const hoursFromSource = (targetTimestamp - startTime) / (1000 * 60 * 60);

      if (hoursFromSource < 0) {
        setCalculationResult({
          label: "ERROR",
          mainValue: "Time < Elution",
          subValue: "Check dates",
          isOverdue: true
        });
      } else {
        const futureDose = elutionActivity * Math.exp(-lambda * hoursFromSource);
        const isPast = targetTimestamp < now;

        setCalculationResult({
          label: "EXPECTED DOSE",
          mainValue: `${futureDose.toFixed(2)} MBq`,
          subValue: isPast ? "(Historical Value)" : "(Future Value)",
          isOverdue: isPast
        });
      }
    }
  };

  return (
    <div className={styles.container}>

      {/* --- THIS IS THE POPUP VIEW --- */}
      {showAlgorithms && <AlgorithmsView onClose={() => setShowAlgorithms(false)} />}


      {/* --- MAIN VIEW TOGGLE (Title merged into first button) --- */}
      <div className={styles.mainToggleContainer}>
        <button
          className={`${styles.mainToggleBtn} ${viewMode === "ATOMIC" ? styles.active : ""}`}
          onClick={() => setViewMode("ATOMIC")}
        >
          ☢️ ATOMIC DECAY CLOCK
        </button>
        <button
          className={`${styles.mainToggleBtn} ${viewMode === "MO99" ? styles.active : ""}`}
          onClick={() => setViewMode("MO99")}
        >
          MOLYBDENUM-99
        </button>
      </div>

      {viewMode === "ATOMIC" ? (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', maxWidth: '1200px', margin: '0 auto' }}>

          {/* --- LEFT COLUMN: INPUTS --- */}
          <div className={styles.controls}>

            {/* 1. SOURCE CONFIG */}
            <div className={styles.sectionTitle}>SOURCE SETUP</div>

            <div className={styles.controlItem}>
              <label className={styles.label}>ISOTOPE</label>
              <select
                value={isotope}
                onChange={(e) => setIsotope(e.target.value)}
                className={styles.select}>
                {Object.keys(ISOTOPES).map((iso) => (
                  <option key={iso} value={iso}>{ISOTOPES[iso].name}</option>
                ))}
              </select>
            </div>

            <div className={styles.row}>
              <div className={styles.controlItem}>
                <label className={styles.label}>ELUTION TIME</label>
                <div className={styles.inputGroup}>
                  <input
                    type="time"
                    value={elutionTime}
                    onChange={(e) => setElutionTime(e.target.value)}
                    className={styles.input}
                  />
                  <button onClick={setElutionToNow} className={styles.nowBtn}><b>NOW</b></button>
                </div>
              </div>
              <div className={styles.controlItem}>
                <label className={styles.label}>ACTIVITY (MBq)</label>
                <input
                  type="number"
                  value={elutionActivity}
                  onChange={(e) => setElutionActivity(Number(e.target.value))}
                  className={styles.input}
                />
              </div>
            </div>

            {/* 2. CALCULATOR SWITCHER */}
            <div className={styles.divider}></div>
            <div className={styles.sectionTitle}>CALCULATOR</div>

            <div className={styles.toggleContainer}>
              <button
                className={`${styles.toggleBtn} ${calcMode === "FIND_TIME" ? styles.active : ""}`}
                onClick={() => setCalcMode("FIND_TIME")}
              >
                TARGET <b>DOSE</b>
              </button>
              <button
                className={`${styles.toggleBtn} ${calcMode === "FIND_DOSE" ? styles.active : ""}`}
                onClick={() => setCalcMode("FIND_DOSE")}
              >
                TARGET <b>TIME</b>
              </button>
            </div>

            {/* CONDITIONAL INPUTS WITH FIXED HEIGHT WRAPPER */}
            <div style={{ minHeight: '70px', display: 'flex', flexDirection: 'column' }}>
              {calcMode === "FIND_TIME" ? (
                <div className={styles.controlItem}>
                  <label className={styles.label}>TARGET DOSE (MBq)</label>
                  <input
                    type="number"
                    value={targetDoseInput}
                    onChange={(e) => setTargetDoseInput(Number(e.target.value))}
                    className={`${styles.input} ${styles.highlightInput}`}
                  />
                </div>
              ) : (
                <div className={styles.row}>
                  <div className={styles.controlItem}>
                    <label className={styles.label}>TARGET DATE</label>
                    <input
                      type="date"
                      value={targetDateInput}
                      onChange={(e) => setTargetDateInput(e.target.value)}
                      className={`${styles.input} ${styles.highlightInput}`}
                    />
                  </div>
                  <div className={styles.controlItem}>
                    <label className={styles.label}>TARGET TIME</label>
                    <input
                      type="time"
                      value={targetTimeInput}
                      onChange={(e) => setTargetTimeInput(e.target.value)}
                      className={`${styles.input} ${styles.highlightInput}`}
                    />
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* --- RIGHT COLUMN: DISPLAY --- */}
          <div className={styles.displayColumn}>

            {/* LIVE CLOCK */}
            <div className={styles.liveBox}>
              <div className={styles.liveLabel}>CURRENT ACTIVITY (LIVE)</div>
              <div className={styles.activityValue}>
                {currentActivity.toFixed(2)} <span className={styles.unit}>MBq</span>
              </div>
              <div className={styles.progressBarContainer}>
                <div
                  className={styles.progressBar}
                  style={{
                    width: `${Math.min((currentActivity / elutionActivity) * 100, 100)}%`,
                    backgroundColor: '#0f0'
                  }}></div>
              </div>
            </div>

            {/* CALCULATED RESULT */}
            <div className={`${styles.resultBox} ${calculationResult.isOverdue ? styles.overdue : ''}`}>
              <div className={styles.resultLabel}>{calculationResult.label}</div>
              <div className={styles.resultMain}>{calculationResult.mainValue}</div>
              <div className={styles.resultSub}>{calculationResult.subValue}</div>

              {calculationResult.isOverdue && (
                <div className={styles.warningTag}>⚠️ PASSED / HISTORICAL</div>
              )}
            </div>

          </div>

        </div>
      ) : (
        /* --- MO-99 VIEW --- */
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <MoGenerator />
        </div>
      )}


      {/* --- FOOTER BUTTON FOR ALGORITHMS --- */}
      <div style={{ marginTop: '40px', textAlign: 'center', borderTop: '1px solid #333', paddingTop: '20px' }}>
        <button
          onClick={() => setShowAlgorithms(true)}
          style={{
            background: 'transparent',
            border: '1px solid #e74c3c',
            color: '#e74c3c',
            cursor: 'pointer',
            fontSize: '12px',
            fontFamily: 'Courier New',
            padding: '8px 12px',
            borderRadius: '4px'
          }}
        >
          [ VIEW NAKED ALGORITHMS ]
        </button>
        <div style={{ color: '#e74c3c', fontSize: '10px', marginTop: '5px' }}>
          Created by LeoPantsulaia
        </div>
      </div>

    </div>
  );
};