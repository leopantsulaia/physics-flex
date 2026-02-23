// Decay-related utilities for MoGenerator
// Mo-99 half-life: 65.94h — IAEA Nuclear Data Centre (2023), Live Chart of Nuclides
export const computeElutionTable = ({
  startMs,
  A0,
  halfLifeHours = 65.941, // Mo-99 T1/2 (hours) — IAEA / NNDC recommended value
  days = 14,
}) => {
  if (!startMs || A0 <= 0) return [];
  const lambda = Math.LN2 / halfLifeHours; // λ = ln(2) / T½
  const table = [];
  for (let i = 0; i < days; i++) {
    const timeDiffHours = i * 24;
    const activity = A0 * Math.exp(-lambda * timeDiffHours);
    const futureDate = new Date(startMs + i * 24 * 60 * 60 * 1000);
    const currentDay = futureDate.getDay();
    table.push({
      day: `Day ${i + 1}`,
      dateObj: futureDate,
      activity: activity,
      isWeekend: currentDay === 0 || currentDay === 6,
    });
  }
  return table;
};

export const predictActivity = ({
  startMs,
  targetMs,
  A0,
  halfLifeHours = 65.94, // IAEA: 65.94 ± 0.01 h
}) => {
  if (!startMs || !targetMs || A0 <= 0) return null;
  const lambda = Math.LN2 / halfLifeHours;
  const hoursDiff = (targetMs - startMs) / (1000 * 60 * 60);
  const val = A0 * Math.exp(-lambda * hoursDiff);
  return val;
};
