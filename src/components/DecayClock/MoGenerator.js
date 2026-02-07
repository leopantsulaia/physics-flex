import React, { useState, useEffect } from "react";
import styles from "./DecayClock.module.css"; // Reusing existing styles for consistency

const MO99_HALF_LIFE = 66.0; // Hours

const getLocalISODate = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

export const MoGenerator = () => {
    // --- STATE ---
    const [calDate, setCalDate] = useState(getLocalISODate());
    const [calTime, setCalTime] = useState("12:00");
    const [calActivity, setCalActivity] = useState(10000); // MBq default (high for generator)

    // TARGET CALCULATION
    const [targetDate, setTargetDate] = useState(getLocalISODate());
    const [targetTime, setTargetTime] = useState(
        new Date(Date.now() + 24 * 3600000).toTimeString().slice(0, 5) // +24h default
    );

    const [elutionTable, setElutionTable] = useState([]);
    const [targetResult, setTargetResult] = useState(null);

    // --- PHYSICS ENGINE ---
    useEffect(() => {
        calculateGeneratorPhysics();
    }, [calDate, calTime, calActivity, targetDate, targetTime]);

    const calculateGeneratorPhysics = () => {
        const calStr = `${calDate}T${calTime}`;
        const startTime = new Date(calStr).getTime();

        if (isNaN(startTime) || calActivity <= 0) return;

        const lambda = 0.693 / MO99_HALF_LIFE;

        // 1. GENERATE TABLE (Next 14 days)
        const newTable = [];
        for (let day = 0; day <= 14; day++) {
            const timeDiffHours = day * 24;
            // Decay Formula: A = A0 * e^(-lambda * t)
            const activity = calActivity * Math.exp(-lambda * timeDiffHours);

            const futureDate = new Date(startTime + (day * 24 * 60 * 60 * 1000));

            newTable.push({
                day: `Day ${day}`,
                date: futureDate.toLocaleDateString(),
                activity: activity.toFixed(0) // Round to whole number for generator
            });
        }
        setElutionTable(newTable);

        // 2. CALCULATE TARGET
        const targetStr = `${targetDate}T${targetTime}`;
        const targetTimestamp = new Date(targetStr).getTime();

        if (!isNaN(targetTimestamp)) {
            const hoursDiff = (targetTimestamp - startTime) / (1000 * 60 * 60);
            const targetVal = calActivity * Math.exp(-lambda * hoursDiff);
            setTargetResult(targetVal > 0 ? targetVal.toFixed(1) : "0.0");
        }
    };

    const setNow = () => {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        setCalDate(`${year}-${month}-${day}`);
        setCalTime(now.toTimeString().slice(0, 5));
    };

    return (
        <div className={styles.controls} style={{ height: '100%', borderColor: '#d4af37' }}>
            <div className={styles.sectionTitle} style={{ color: '#d4af37', borderColor: '#d4af37' }}>
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
                            style={{ color: '#d4af37', borderColor: '#554400' }}
                        />
                        <button
                            onClick={setNow}
                            className={styles.nowBtn}
                            style={{ color: '#d4af37', borderColor: '#d4af37' }}
                        >NOW</button>
                    </div>
                    <input
                        type="date"
                        value={calDate}
                        onChange={(e) => setCalDate(e.target.value)}
                        className={styles.input}
                        style={{ marginTop: '5px', color: '#d4af37', borderColor: '#554400' }}
                    />
                </div>
                <div className={styles.controlItem}>
                    <label className={styles.label}>ACTIVITY (MBq)</label>
                    <input
                        type="number"
                        value={calActivity}
                        onChange={(e) => setCalActivity(Number(e.target.value))}
                        className={styles.input}
                        style={{ color: '#d4af37', borderColor: '#554400' }}
                    />
                </div>
            </div>

            <div className={styles.divider} style={{ background: '#554400' }}></div>

            {/* ELUTION TABLE */}
            <div style={{ marginBottom: '20px' }}>
                <label className={styles.label} style={{ marginBottom: '10px', display: 'block' }}>14-DAY DECAY TABLE</label>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 2fr 1fr',
                    gap: '5px',
                    fontSize: '12px',
                    color: '#d4af37',
                    fontFamily: 'Courier New',
                    background: '#1a1a0a',
                    padding: '10px',
                    borderRadius: '4px',
                    border: '1px solid #554400',
                    maxHeight: '200px', // Add scrolling since table is long
                    overflowY: 'auto'
                }}>
                    <div style={{ fontWeight: 'bold', borderBottom: '1px solid #554400', position: 'sticky', top: 0, background: '#1a1a0a' }}>DAY</div>
                    <div style={{ fontWeight: 'bold', borderBottom: '1px solid #554400', position: 'sticky', top: 0, background: '#1a1a0a' }}>DATE</div>
                    <div style={{ fontWeight: 'bold', borderBottom: '1px solid #554400', textAlign: 'right', position: 'sticky', top: 0, background: '#1a1a0a' }}>MBq</div>

                    {elutionTable.map((row) => (
                        <React.Fragment key={row.day}>
                            <div>{row.day}</div>
                            <div>{row.date}</div>
                            <div style={{ textAlign: 'right' }}>{row.activity}</div>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <div className={styles.divider} style={{ background: '#554400' }}></div>

            {/* CUSTOM CALCULATION */}
            <div>
                <label className={styles.label}>SECOND ELUTION (TARGET)</label>
                <div className={styles.row} style={{ marginTop: '5px' }}>
                    <input
                        type="date"
                        value={targetDate}
                        onChange={(e) => setTargetDate(e.target.value)}
                        className={styles.input}
                        style={{ color: '#d4af37', borderColor: '#554400' }}
                    />
                    <input
                        type="time"
                        value={targetTime}
                        onChange={(e) => setTargetTime(e.target.value)}
                        className={styles.input}
                        style={{ color: '#d4af37', borderColor: '#554400' }}
                    />
                </div>
                <div style={{
                    marginTop: '10px',
                    padding: '10px',
                    background: '#1a1a0a',
                    border: '1px dashed #d4af37',
                    textAlign: 'center',
                    color: '#d4af37'
                }}>
                    <div style={{ fontSize: '10px', opacity: 0.7 }}>PREDICTED ACTIVITY</div>
                    <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{targetResult} MBq</div>
                </div>
            </div>

        </div>
    );
};
