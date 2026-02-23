// Reusable UI components for AlgorithmsView
import React from "react";
import T from "./AlgorithmsView.styles";

export const Section = ({ number, title, children }) => (
  <div style={{ marginBottom: "70px" }}>
    <h2
      style={{
        background: T.card,
        display: "inline-block",
        padding: "6px 14px",
        border: `1px solid ${T.border}`,
        fontSize: "15px",
        letterSpacing: "1px",
        marginBottom: "24px",
      }}>
      {number} {title}
    </h2>
    {children}
  </div>
);

export const PhysicsBox = ({ formula, notes }) => (
  <div
    style={{
      margin: "20px 0",
      padding: "22px",
      borderLeft: `3px solid ${T.green}`,
      background: T.panel,
    }}>
    <div
      style={{
        fontSize: "11px",
        color: T.dim,
        marginBottom: "10px",
        letterSpacing: "1px",
      }}>
      THE PHYSICS — FIRST PRINCIPLES
    </div>
    <p
      style={{
        fontSize: "20px",
        letterSpacing: "1px",
        margin: "0 0 12px",
        color: "#fff",
      }}>
      {formula}
    </p>
    {notes && (
      <p style={{ fontSize: "13px", opacity: 0.8, margin: 0, lineHeight: 1.7 }}>
        {notes}
      </p>
    )}
  </div>
);

export const CodeBox = ({ title, code }) => (
  <div
    style={{
      margin: "20px 0",
      padding: "22px",
      background: "#141414",
      borderRadius: "6px",
      border: `1px solid ${T.border}`,
    }}>
    <div
      style={{
        fontSize: "11px",
        color: "#aaa",
        marginBottom: "14px",
        letterSpacing: "1px",
      }}>
      {title || "JAVASCRIPT IMPLEMENTATION"}
    </div>
    <pre
      style={{
        whiteSpace: "pre-wrap",
        color: "#e8e8e8",
        fontSize: "13px",
        margin: 0,
        lineHeight: 1.7,
        fontFamily: T.mono,
      }}>
      {code}
    </pre>
  </div>
);

export const Pill = ({ children, color }) => (
  <span
    style={{
      display: "inline-block",
      background: `${color || T.green}22`,
      border: `1px solid ${color || T.green}55`,
      color: color || T.green,
      padding: "1px 7px",
      borderRadius: "3px",
      fontSize: "11px",
      fontFamily: T.mono,
      marginRight: "4px",
    }}>
    {children}
  </span>
);

export const WarningBox = ({ title, children }) => (
  <div
    style={{
      margin: "20px 0",
      padding: "22px",
      background: `${T.red}10`,
      border: `1px solid ${T.red}44`,
      borderRadius: "6px",
    }}>
    <div
      style={{
        color: T.red,
        fontWeight: "bold",
        marginBottom: "12px",
        fontSize: "13px",
      }}>
      🔴 {title}
    </div>
    {children}
  </div>
);

export const ClinicalBox = ({ title, children }) => (
  <div
    style={{
      margin: "20px 0",
      padding: "22px",
      borderLeft: `3px solid ${T.red}`,
      background: `${T.red}08`,
    }}>
    <div
      style={{
        fontSize: "11px",
        color: T.red,
        marginBottom: "12px",
        letterSpacing: "1px",
      }}>
      {title}
    </div>
    {children}
  </div>
);
