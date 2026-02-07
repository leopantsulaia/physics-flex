import React, { useState } from "react";
import { ShieldingCalculator } from "./components/ShieldingCalculator/ShieldingCalculator";
import { DecayClock } from "./components/DecayClock/DecayClock";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("shielding");

  return (
    <div className="appWrapper">
      <nav className="appNav">
        <button
          className={`navButton ${activeTab === "shielding" ? "active" : ""}`}
          onClick={() => setActiveTab("shielding")}>
          Shielding Calculator
        </button>
        <button
          className={`navButton ${activeTab === "decay" ? "active" : ""}`}
          onClick={() => setActiveTab("decay")}>
          Decay Clock
        </button>
      </nav>

      <div className="appContent">
        {activeTab === "shielding" && <ShieldingCalculator />}
        {activeTab === "decay" && <DecayClock />}
      </div>
    </div>
  );
}

export default App;
