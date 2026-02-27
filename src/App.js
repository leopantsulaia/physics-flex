import React, { useState } from "react";
import { ShieldingCalculator } from "./components/ShieldingCalculator/ShieldingCalculator";
import { DecayClock } from "./components/DecayClock/DecayClock";
import TwitterPost from "./components/TwitterPost/TwitterPost";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("shielding");

  return (
    <div className="appWrapper">
      <button
        className="hugeActionButton"
        onClick={() => setActiveTab("twitter")}
      >
        LATEST SCIENTIFIC BREAKTHROUGH & ANALYSIS 🚀
      </button>

      <div className="announcementBanner">
        <div className="announcementContent">
          <p><strong>VERSION 3.2 IS OUT NOW! CURRENTLY HOSTED ON NETLIFY. BUGS WILL BE FIXED SOON.</strong></p>
          <p><strong>IMPORTANT!!!</strong></p>
          <p>NEW RESEARCH RELEASED. AUTOMATICALLY ADDED TO THE "GOOD TO READ" CATEGORY. (THIS IS A @DEVELOPER ANNOUNCEMENT created by LeoPants)</p>
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
      </nav>

      <div className="appContent">
        {activeTab === "shielding" && <ShieldingCalculator />}
        {activeTab === "decay" && <DecayClock />}
        {activeTab === "twitter" && <TwitterPost />}
      </div>
      <div className="footerCredit">Created by LeoPantsulaia © 2026 24 February - Version 2.1</div>
    </div>
  );
}

export default App;
