import React, { useState, useEffect, useCallback } from "react";
import styles from "./DecayClock.module.css"; // Reusing existing styles for consistency

import { getSmartMondayISODate, formatDateDisplay } from "./helpers";
import { computeElutionTable, predictActivity } from "./decay";

const MO99_HALF_LIFE = 65.94; // Hours — IAEA Nuclear Data Centre (2023), T½ = 65.94 ± 0.01 h

export const MoGenerator = () => {
  // --- STATE ---
  const [calDate, setCalDate] = useState(getSmartMondayISODate());
  const [calTime, setCalTime] = useState("12:00");
  const [calActivity, setCalActivity] = useState(10000); // MBq default (high for generator)

  // TARGET CALCULATION
  const [targetDate, setTargetDate] = useState(getSmartMondayISODate());
  const [targetTime, setTargetTime] = useState(
    new Date(Date.now() + 24 * 3600000).toTimeString().slice(0, 5), // +24h default
  );

  const [elutionTable, setElutionTable] = useState([]);
  const [targetResult, setTargetResult] = useState(null);

  // --- PHYSICS ENGINE ---
  const calculateGeneratorPhysics = useCallback(() => {
    const calStr = `${calDate}T${calTime}`;
    const startMs = new Date(calStr).getTime();
    if (isNaN(startMs) || calActivity <= 0) return;

    // Generate elution table using helpers
    const table = computeElutionTable({
      startMs,
      A0: calActivity,
      halfLifeHours: MO99_HALF_LIFE,
      days: 14,
    });
    // Map to display shape
    const newTable = table.map((r) => ({
      day: r.day,
      date: formatDateDisplay(r.dateObj),
      activity: r.activity.toFixed(0),
      isWeekend: r.isWeekend,
    }));
    setElutionTable(newTable);

    // Predict target
    const targetMs = new Date(`${targetDate}T${targetTime}`).getTime();
    if (!isNaN(targetMs)) {
      const val = predictActivity({
        startMs,
        targetMs,
        A0: calActivity,
        halfLifeHours: MO99_HALF_LIFE,
      });
      setTargetResult(val > 0 ? val.toFixed(1) : "0.0");
    }
  }, [calDate, calTime, calActivity, targetDate, targetTime]);

  useEffect(() => {
    calculateGeneratorPhysics();
  }, [calculateGeneratorPhysics]);

  const setNow = () => {
    setCalDate(getSmartMondayISODate());
    setCalTime(new Date().toTimeString().slice(0, 5));
  };

  return (
    <div
      className={styles.controls}
      style={{ height: "100%", borderColor: "#d4af37" }}>
      <div
        className={styles.sectionTitle}
        style={{ color: "#d4af37", borderColor: "#d4af37" }}>
        MO-99 GENERATOR (T½=66h)
      </div>

      {/* INPUTS */}
      <div className={styles.row}>
        <div className={styles.controlItem}>
          <label className={styles.label}>FIRST ELUTION</label>
          <div className={styles.inputGroup}>
            <input
              type="time"
              value={calTime}
              onChange={(e) => setCalTime(e.target.value)}
              className={styles.input}
              style={{ color: "#d4af37", borderColor: "#554400" }}
            />
            <button
              onClick={setNow}
              className={styles.nowBtn}
              style={{ color: "#d4af37", borderColor: "#d4af37" }}>
              NOW
            </button>
          </div>
          <input
            type="date"
            value={calDate}
            onChange={(e) => setCalDate(e.target.value)}
            className={styles.input}
            style={{
              marginTop: "5px",
              color: "#d4af37",
              borderColor: "#554400",
            }}
          />
        </div>
        <div className={styles.controlItem}>
          <label className={styles.label}>ACTIVITY (MBq)</label>
          <input
            type="number"
            value={calActivity}
            onChange={(e) => setCalActivity(Number(e.target.value))}
            className={styles.input}
            style={{ color: "#d4af37", borderColor: "#554400" }}
          />
        </div>
      </div>

      <div className={styles.divider} style={{ background: "#554400" }}></div>

      {/* ELUTION TABLE */}
      <div style={{ marginBottom: "20px" }}>
        <label
          className={styles.label}
          style={{ marginBottom: "10px", display: "block" }}>
          14-DAY DECAY TABLE
        </label>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "65px 2fr 1fr", // Adjusted col widths to fit "Day 14"
            gap: "5px",
            fontSize: "12px",
            color: "#d4af37",
            fontFamily: "Courier New",
            background: "#1a1a0a",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #554400",
            maxHeight: "200px",
            overflowY: "auto",
            whiteSpace: "nowrap",
          }}>
          <div
            style={{
              fontWeight: "bold",
              borderBottom: "1px solid #554400",
              position: "sticky",
              top: 0,
              background: "#1a1a0a",
            }}>
            #
          </div>
          <div
            style={{
              fontWeight: "bold",
              borderBottom: "1px solid #554400",
              position: "sticky",
              top: 0,
              background: "#1a1a0a",
            }}>
            DATE
          </div>
          <div
            style={{
              fontWeight: "bold",
              borderBottom: "1px solid #554400",
              textAlign: "right",
              position: "sticky",
              top: 0,
              background: "#1a1a0a",
            }}>
            MBq
          </div>

          {elutionTable.map((row) => (
            <React.Fragment key={row.day}>
              <div style={{ opacity: 0.5 }}>{row.day}</div>
              <div style={{ color: row.isWeekend ? "#ff6b6b" : "inherit" }}>
                {row.date}
              </div>
              <div
                style={{
                  textAlign: "right",
                  color: row.isWeekend ? "#ff6b6b" : "inherit",
                }}>
                {row.activity}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className={styles.divider} style={{ background: "#554400" }}></div>

      {/* CUSTOM CALCULATION */}
      <div>
        <label className={styles.label}>SECOND ELUTION (TARGET)</label>
        <div className={styles.row} style={{ marginTop: "5px" }}>
          <input
            type="date"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
            className={styles.input}
            style={{ color: "#d4af37", borderColor: "#554400" }}
          />
          <input
            type="time"
            value={targetTime}
            onChange={(e) => setTargetTime(e.target.value)}
            className={styles.input}
            style={{ color: "#d4af37", borderColor: "#554400" }}
          />
        </div>
        <div
          style={{
            marginTop: "10px",
            padding: "10px",
            background: "#1a1a0a",
            border: "1px dashed #d4af37",
            textAlign: "center",
            color: "#d4af37",
          }}>
          <div style={{ fontSize: "10px", opacity: 0.7 }}>
            PREDICTED ACTIVITY
          </div>
          <div style={{ fontSize: "24px", fontWeight: "bold" }}>
            {targetResult} MBq
          </div>
        </div>
      </div>
    </div>
  );
};
