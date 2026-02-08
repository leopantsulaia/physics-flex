// Small helpers for date formatting and defaults used by MoGenerator
export const getSmartMondayISODate = () => {
  const d = new Date();
  const day = d.getDay();
  let diff = 0;
  if (day === 0)
    diff = 1; // Sunday -> Next Monday
  else if (day === 6)
    diff = 2; // Saturday -> Next Monday
  else diff = -(day - 1); // Mon-Fri -> This week's Monday
  d.setDate(d.getDate() + diff);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const dateStr = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${dateStr}`;
};

export const formatDateDisplay = (dateObj) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayName = days[dateObj.getDay()];
  const day = String(dateObj.getDate()).padStart(2, "0");
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const year = dateObj.getFullYear();
  return `${dayName} ${day}/${month}/${year}`;
};
