import React from "react";
import "./PeriodicTable.css";

const PeriodicTable = () => {
  return (
    <div className="periodic-table-wrapper" style={{ width: "100%", height: "85vh", overflow: "hidden" }}>
      <iframe 
        src="/zperiod/index.html" 
        title="Interactive Periodic Table"
        style={{ width: "100%", height: "100%", border: "none" }}
        allowFullScreen
      />
    </div>
  );
};

export default PeriodicTable;
