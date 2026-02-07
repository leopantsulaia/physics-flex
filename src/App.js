import React from "react";
import { ShieldingCalculator } from "./components/ShieldingCalculator/ShieldingCalculator";
import { Glossary } from "./components/Glossary/Glossary";
import "./App.css";

function App() {
  return (
    <div className="appContainer">
      <Glossary />
      <div className="mainContent">
        <ShieldingCalculator />
      </div>
    </div>
  );
}

export default App;
