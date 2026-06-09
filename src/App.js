import React, { useState } from "react";
import { NuclearMedicineHelper } from "./components/NuclearMedicineHelper/NuclearMedicineHelper";
import TwitterPost from "./components/TwitterPost/TwitterPost";
import { AlgorithmsView } from "./components/AlgorithmsView/AlgorithmsView";
import PeriodicTable from "./components/PeriodicTable";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("periodic");
  const [showDocs, setShowDocs] = useState(false);

  return (
    <div className="appWrapper">
      <nav className="appNav" style={{ marginTop: "20px" }}>
        <button
          className={`navButton ${activeTab === "periodic" ? "active" : ""}`}
          onClick={() => setActiveTab("periodic")}>
          Periodic Table
        </button>
        <button
          className={`navButton ${activeTab === "nuclear" ? "active" : ""}`}
          onClick={() => setActiveTab("nuclear")}>
          Nuclear Medicine Technologist Automatic Counter (Helper)
        </button>
      </nav>

      <div className="announcementBanner">
        <div className="announcementContent">
          <p>
            <strong>
              VERSION 5.0 IS OUT NOW! CURRENTLY HOSTED ON NETLIFY. BUGS WILL BE
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

      <div className="appContent">
        {activeTab === "periodic" && <PeriodicTable />}
        {activeTab === "nuclear" && <NuclearMedicineHelper />}
        {activeTab === "twitter" && <TwitterPost />}
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', margin: '30px 0' }}>
        <button
          className="hugeActionButton"
          onClick={() => setActiveTab("twitter")}>
          I proved a researcher, Colin Farmery, wrong and he deactivated his account on X!!!
        </button>
      </div>

      <div className="footerCredit">
        Created by Leo Pantsulaia — LeoPhysics © 2026 — Version 5.0
      </div>

      {showDocs && <AlgorithmsView onClose={() => setShowDocs(false)} />}
    </div>
  );
}

export default App;
