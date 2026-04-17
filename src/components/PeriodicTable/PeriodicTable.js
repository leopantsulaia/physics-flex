import React, { useState } from "react";
import "./PeriodicTable.css";

const PeriodicTable = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="periodic-table-wrapper">
      {isLoading && (
        <div className="periodic-table-loading">
          <div className="loading-spinner"></div>
          <p>Loading LeoPhysics Periodic Table...</p>
        </div>
      )}
      <iframe
        src="/zperiod/index.html"
        title="LeoPhysics Interactive Periodic Table"
        className="periodic-table-iframe"
        allowFullScreen
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default PeriodicTable;
