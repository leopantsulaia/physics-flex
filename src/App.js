import React, { useState } from "react";
import { ShieldingCalculator } from "./components/ShieldingCalculator/ShieldingCalculator";
import { DecayClock } from "./components/DecayClock/DecayClock";
import TwitterPost from "./components/TwitterPost/TwitterPost";
import { AlgorithmsView } from "./components/AlgorithmsView/AlgorithmsView";
import PeriodicTable from "./components/PeriodicTable";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("shielding");
  const [showDocs, setShowDocs] = useState(false);

  return (
    <div className="appWrapper">
      <button
        className="hugeActionButton"
        onClick={() => setActiveTab("twitter")}>
        LATEST SCIENTIFIC BREAKTHROUGH & ANALYSIS 🚀
      </button>
      <div className="announcementBanner">
        <div className="announcementContent">
          <p>
            <strong>
              VERSION 3.2 IS OUT NOW! CURRENTLY HOSTED ON NETLIFY. BUGS WILL BE
              FIXED SOON.
            </strong>
          </p>
          <p>
            <strong>IMPORTANT!!!</strong>
          </p>
          <p>
            NEW RESEARCH RELEASED. AUTOMATICALLY ADDED TO THE "GOOD TO READ"
            CATEGORY. (THIS IS A @DEVELOPER ANNOUNCEMENT created by LeoPants)
          </p>
          <button
            className="hugeActionButton"
            style={{ marginTop: "15px" }}
            onClick={() => setShowDocs(true)}>
            VIEW NAKED ALGORITHMS
          </button>
        </div>
      </div>

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
        <button
          className={`navButton ${activeTab === "periodic" ? "active" : ""}`}
          onClick={() => setActiveTab("periodic")}>
          Periodic Table
        </button>
      </nav>

      <div className="appContent">
        {activeTab === "shielding" && <ShieldingCalculator />}
        {activeTab === "decay" && <DecayClock />}
        {activeTab === "periodic" && <PeriodicTable />}
        {activeTab === "twitter" && <TwitterPost />}
      </div>
      <div className="footerCredit">
        Created by Leo Pantsulaia — LeoPhysics © 2026 — Version 3.2
      </div>

      {showDocs && <AlgorithmsView onClose={() => setShowDocs(false)} />}
    </div>
  );
}

export default App;
