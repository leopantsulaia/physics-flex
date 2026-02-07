import React, { useState, useEffect } from "react";
import styles from "./DecayClock.module.css";

const ISOTOPES = {
  "Tc-99m": { name: "Technetium-99m", halfLife: 6.0067 },
  "I-131": { name: "Iodine-131", halfLife: 192.0 },
  "F-18": { name: "Fluorine-18", halfLife: 1.8295 },
  "Ga-68": { name: "Gallium-68", halfLife: 1.13 },
};

export const DecayClock = () => {
  // --- STATE ---
  const [isotope, setIsotope] = useState("Tc-99m");
  
  // ELUTION (Source) STATE
  const [elutionDate, setElutionDate] = useState(new Date().toISOString().slice(0, 10));
  const [elutionTime, setElutionTime] = useState(new Date().toTimeString().slice(0, 5));
  const [elutionActivity, setElutionActivity] = useState(1000); // MBq

  // CALCULATION MODE
  // 'FIND_TIME' = User enters Dose -> We calculate Time
  // 'FIND_DOSE' = User enters Time -> We calculate Dose
  const [calcMode, setCalcMode] = useState("FIND_TIME");

  // INPUTS FOR MODES
  const [targetDoseInput, setTargetDoseInput] = useState(500); // For FIND_TIME
  const [targetDateInput, setTargetDateInput] = useState(new Date().toISOString().slice(0, 10)); // For FIND_DOSE
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

  // --- HELPERS ---
  const setElutionToNow = () => {
    const now = new Date();
    setElutionDate(now.toISOString().slice(0, 10));
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
      // Question: "When will it be X MBq?"
      if (targetDoseInput >= elutionActivity) {
        setCalculationResult({
          label: "IMPOSSIBLE",
          mainValue: "Target > Source",
          subValue: "Cannot decay up",
          isOverdue: true
        });
      } else {
        // t = -ln(A/A0) / lambda
        const hoursToTarget = -Math.log(targetDoseInput / elutionActivity) / lambda;
        const targetTimestamp = startTime + (hoursToTarget * 60 * 60 * 1000);
        const targetDateObj = new Date(targetTimestamp);
        
        const isPast = targetTimestamp < now;
        
        setCalculationResult({
          label: "EXPECTED AT TIME",
          mainValue: targetDateObj.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
          subValue: targetDateObj.toLocaleDateString(),
          isOverdue: isPast
        });
      }
    } 
    else if (calcMode === "FIND_DOSE") {
      // Question: "How much will be left at X Time?"
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
      <h1 className={styles.title}>☢️ ATOMIC DECAY CLOCK</h1>

      <div className={styles.gridContainer}>
        
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
                <option key={iso} value={iso}>{iso}</option>
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
                <button onClick={setElutionToNow} className={styles.nowBtn}>NOW</button>
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
              SET TARGET <b>DOSE</b> TO FIND TIME
            </button>
            <button 
              className={`${styles.toggleBtn} ${calcMode === "FIND_DOSE" ? styles.active : ""}`}
              onClick={() => setCalcMode("FIND_DOSE")}
            >
              SET TARGET <b>TIME</b> TO FIND DOSE
            </button>
          </div>

          {/* CONDITIONAL INPUTS */}
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
    </div>
  );
};