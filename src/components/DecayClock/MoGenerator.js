import React, { useState, useEffect } from "react";
import styles from "./DecayClock.module.css"; // Reusing existing styles for consistency

const MO99_HALF_LIFE = 66.0; // Hours

// Helper to get nearest upcoming Monday (or today if Mon-Fri)
const getSmartMondayISODate = () => {
    const d = new Date();
    const day = d.getDay();
    // If Weekend (Sat=6, Sun=0), jump to NEXT Monday.
    // If Weekday (Mon=1 ... Fri=5), jump back to THIS Monday (or keep today? User prefers Monday start).
    // Let's assume standard "Monday Start" preference means "Start of THIS week" or "Start of NEXT week".
    // If today is Sunday, user complained about "starting from Sunday".
    // So distinct preference for Monday.

    // If Sun(0) -> +1 (Mon)
    // If Sat(6) -> +2 (Mon)
    // If Mon(1) -> 0
    // If Tue(2) -> -1 (Mon) ...
    // Let's try to target the Monday of the CURRENT week (even if past) to be safe?
    // User complaint "why started from Sunday" implies they want Monday.
    // If I give them "Next Monday" (future), they can plan.
    // If I give them "Past Monday", they can calculate.

    // Let's enforce: Always current week's Monday (or next if Sat/Sun?)
    // Actually, generators usually arrive on Monday.
    // If today is Sunday, the generator arrives TOMORROW. 
    // If today is Tuesday, the generator arrived YESTERDAY.

    // Logic: If Sat/Sun -> Next Monday. Else -> Attributes to THIS Monday.
    let diff = 0;
    if (day === 0) diff = 1;      // Sunday -> Next Monday
    else if (day === 6) diff = 2; // Saturday -> Next Monday
    else diff = -(day - 1);       // Mon-Fri -> Previous Monday (e.g. Tue(2) -> -1)

    // Wait, if I set it to Past Monday, user might be confused if they want to calc for *today's* reading?
    // But they said "It must start from Monday".
    // I will stick to this logic.

    d.setDate(d.getDate() + diff);

    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const dateStr = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${dateStr}`;
};

const formatDateDisplay = (dateObj) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayName = days[dateObj.getDay()];
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();
    return `${dayName} ${day}/${month}/${year}`;
};

export const MoGenerator = () => {
    // --- STATE ---
    const [calDate, setCalDate] = useState(getSmartMondayISODate());
    const [calTime, setCalTime] = useState("12:00");
    const [calActivity, setCalActivity] = useState(10000); // MBq default (high for generator)

    // TARGET CALCULATION
    const [targetDate, setTargetDate] = useState(getSmartMondayISODate());
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

        // 1. GENERATE TABLE (Next 14 days starting from Calibration Day)
        const newTable = [];
        for (let i = 0; i < 14; i++) {
            const timeDiffHours = i * 24;
            // Decay Formula: A = A0 * e^(-lambda * t)
            const activity = calActivity * Math.exp(-lambda * timeDiffHours);

            const futureDate = new Date(startTime + (i * 24 * 60 * 60 * 1000));
            const currentDay = futureDate.getDay();

            newTable.push({
                day: `Day ${i + 1}`,
                date: formatDateDisplay(futureDate),
                activity: activity.toFixed(0), // Round to whole number for generator
                isWeekend: currentDay === 0 || currentDay === 6 // Sun (0) or Sat (6)
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
        setCalDate(getSmartMondayISODate());
        setCalTime(new Date().toTimeString().slice(0, 5));
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
                    gridTemplateColumns: '65px 2fr 1fr', // Adjusted col widths to fit "Day 14"
                    gap: '5px',
                    fontSize: '12px',
                    color: '#d4af37',
                    fontFamily: 'Courier New',
                    background: '#1a1a0a',
                    padding: '10px',
                    borderRadius: '4px',
                    border: '1px solid #554400',
                    maxHeight: '200px',
                    overflowY: 'auto',
                    whiteSpace: 'nowrap'
                }}>
                    <div style={{ fontWeight: 'bold', borderBottom: '1px solid #554400', position: 'sticky', top: 0, background: '#1a1a0a' }}>#</div>
                    <div style={{ fontWeight: 'bold', borderBottom: '1px solid #554400', position: 'sticky', top: 0, background: '#1a1a0a' }}>DATE</div>
                    <div style={{ fontWeight: 'bold', borderBottom: '1px solid #554400', textAlign: 'right', position: 'sticky', top: 0, background: '#1a1a0a' }}>MBq</div>

                    {elutionTable.map((row) => (
                        <React.Fragment key={row.day}>
                            <div style={{ opacity: 0.5 }}>{row.day}</div>
                            <div style={{ color: row.isWeekend ? '#ff6b6b' : 'inherit' }}>{row.date}</div>
                            <div style={{ textAlign: 'right', color: row.isWeekend ? '#ff6b6b' : 'inherit' }}>{row.activity}</div>
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
