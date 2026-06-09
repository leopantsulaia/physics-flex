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

      <div className="appContent">
        {activeTab === "periodic" && <PeriodicTable />}
        {activeTab === "nuclear" && <NuclearMedicineHelper />}
        {activeTab === "twitter" && <TwitterPost />}
      </div>
      
      <div style={{ padding: '20px', borderTop: '2px solid #e74c3c', marginTop: 'auto' }}>
        <div className="announcementContent" style={{ textAlign: 'center', marginBottom: '20px' }}>
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
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', marginBottom: '20px' }}>
          <button
            className="standardActionButton"
            onClick={() => setActiveTab("twitter")}>
            I proved a researcher, Colin Farmery, wrong and he deactivated his account on X!!!
          </button>
          
          <button
            className="standardActionButton"
            onClick={() => setShowDocs(true)}>
            VIEW NAKED ALGORITHMS
          </button>
        </div>

        <div className="footerCredit" style={{ textAlign: 'center', fontSize: '12px', color: '#666' }}>
          Created by Leo Pantsulaia — LeoPhysics © 2026 — Version 5.0
        </div>
      </div>

      {showDocs && <AlgorithmsView onClose={() => setShowDocs(false)} />}
    </div>
  );
}

export default App;
