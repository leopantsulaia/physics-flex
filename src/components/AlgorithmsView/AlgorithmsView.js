// AlgorithmsView — Main documentation modal component
// A lean composition of imported styles, data, content, and components

import React from "react";
import T, { catColor } from "./AlgorithmsView.styles";
import { REFERENCES, ARCHIVE } from "./algorithmsData";
import {
  Section,
  PhysicsBox,
  CodeBox,
  Pill,
  ClinicalBox,
  WarningBox,
} from "./AlgorithmsView.components";
import {
  SECTION_1_DECAY,
  SECTION_2_INVERSE_SQUARE,
  SECTION_3_SHIELDING,
  SECTION_4_PPE,
  SECTION_5_REFERENCES,
} from "./algorithmsContent";
import { SECTION_5_ADVANCED } from "./algorithmsAdvancedContent";
import { PPE_TABLE_ROWS, THYROID_FACTS } from "./ppeData";

export const AlgorithmsView = ({ onClose }) => {
  const [showArchiveMenu, setShowArchiveMenu] = React.useState(false);
  const [archiveItem, setArchiveItem] = React.useState(null);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: T.bg,
        color: T.green,
        zIndex: 9999,
        overflowY: "auto",
        fontFamily: T.mono,
        padding: "20px",
        boxSizing: "border-box",
      }}>
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        {/* HEADER */}
        <div
          style={{
            position: "sticky",
            top: 0,
            zIndex: 2,
            backgroundColor: T.bg,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: `2px solid ${T.green}`,
            paddingBottom: "20px",
            marginBottom: "50px",
          }}>
          <div>
            <h1 style={{ margin: 0, fontSize: "26px", letterSpacing: "2px" }}>
              NAKED ALGORITHMS
            </h1>
            <div style={{ fontSize: "11px", opacity: 0.8, marginTop: "4px" }}>
              VERIFICATION PROTOCOL v2.1 — NucMed Shielding Optimizer
            </div>
          </div>

          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <div style={{ fontSize: "11px", color: T.dimmer }}>v2.1</div>
            <div style={{ position: "relative" }}>
              <button
                onClick={() => setShowArchiveMenu(!showArchiveMenu)}
                title="See old versions"
                style={{
                  background: "transparent",
                  border: `1px solid ${T.green}`,
                  color: T.green,
                  padding: "6px 10px",
                  cursor: "pointer",
                  fontSize: "12px",
                  fontFamily: T.mono,
                }}>
                OLD VERSIONS
              </button>
              {showArchiveMenu && (
                <div
                  style={{
                    position: "absolute",
                    right: 0,
                    marginTop: "6px",
                    background: T.panel,
                    border: `1px solid ${T.border}`,
                    padding: "8px",
                    borderRadius: "4px",
                    minWidth: "160px",
                    zIndex: 10000,
                  }}>
                  <div style={{ marginBottom: "6px", color: T.dim }}>
                    Archived documentation
                  </div>
                  {["v1.0", "v1.7", "v2.0"].map((v) => (
                    <button
                      key={v}
                      onClick={() => {
                        setArchiveItem(v);
                        setShowArchiveMenu(false);
                      }}
                      style={{
                        display: "block",
                        width: "100%",
                        textAlign: "left",
                        background: "transparent",
                        border: "none",
                        color: T.green,
                        padding: "6px 0",
                        cursor: "pointer",
                      }}>
                      {v}{" "}
                      {v === "v1.0"
                        ? "(original)"
                        : v === "v1.7"
                          ? "(intermediate)"
                          : "(archive)"}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={onClose}
              style={{
                background: "transparent",
                border: `1px solid ${T.green}`,
                color: T.green,
                padding: "10px 20px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "14px",
                fontFamily: T.mono,
                letterSpacing: "1px",
              }}>
              CLOSE [X]
            </button>
          </div>
        </div>

        {/* SECTION 1 — DECAY */}
        <Section number={SECTION_1_DECAY.number} title={SECTION_1_DECAY.title}>
          <PhysicsBox
            formula={SECTION_1_DECAY.formula}
            notes={SECTION_1_DECAY.notes}
          />
          <CodeBox code={SECTION_1_DECAY.codeStep1} />
          <CodeBox
            title={SECTION_1_DECAY.codeStep2Title}
            code={SECTION_1_DECAY.codeStep2}
          />
        </Section>

        {/* SECTION 2 — INVERSE SQUARE */}
        <Section
          number={SECTION_2_INVERSE_SQUARE.number}
          title={SECTION_2_INVERSE_SQUARE.title}>
          <PhysicsBox
            formula={SECTION_2_INVERSE_SQUARE.formula}
            notes={SECTION_2_INVERSE_SQUARE.notes}
          />
          <CodeBox code={SECTION_2_INVERSE_SQUARE.code} />
        </Section>

        {/* SECTION 3 — SHIELDING */}
        <Section
          number={SECTION_3_SHIELDING.number}
          title={SECTION_3_SHIELDING.title}>
          <PhysicsBox
            formula={SECTION_3_SHIELDING.formula}
            notes={SECTION_3_SHIELDING.notes}
          />
          <CodeBox code={SECTION_3_SHIELDING.code} />
        </Section>

        {/* SECTION 4 — PPE */}
        <Section number={SECTION_4_PPE.number} title={SECTION_4_PPE.title}>
          <ClinicalBox title="CLINICAL RATIONALE & HOT-LAB REQUIREMENTS">
            <p
              style={{
                color: T.text,
                fontSize: "13.5px",
                lineHeight: 1.8,
                margin: 0,
              }}>
              {SECTION_4_PPE.clinicalRationale}
            </p>
          </ClinicalBox>

          {/* PPE TABLE */}
          <div
            style={{
              margin: "20px 0",
              padding: "20px",
              background: "#0e0e0e",
              border: `1px solid ${T.border}`,
              borderRadius: "6px",
            }}>
            <div
              style={{
                fontSize: "11px",
                color: "#aaa",
                marginBottom: "14px",
                letterSpacing: "1px",
              }}>
              PPE SPECIFICATIONS — LEAD-EQUIVALENT THICKNESS & ATTENUATION
            </div>
            <div style={{ width: "100%", overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
              <table
                style={{
                  width: "100%",
                  minWidth: "640px",
                  borderCollapse: "collapse",
                  fontSize: "12.5px",
                  fontFamily: T.mono,
                }}>
                <thead>
                  <tr
                    style={{
                      color: T.dim,
                      borderBottom: `1px solid ${T.border}`,
                    }}>
                    <th style={{ textAlign: "left", padding: "6px 8px" }}>
                      EQUIPMENT
                    </th>
                    <th style={{ textAlign: "center", padding: "6px 8px" }}>
                      Pb-eq
                    </th>
                    <th style={{ textAlign: "center", padding: "6px 8px" }}>
                      Tc-99m attenuation
                    </th>
                    <th style={{ textAlign: "left", padding: "6px 8px" }}>
                      SOURCE
                    </th>
                  </tr>
                </thead>
                <tbody style={{ color: T.text }}>
                  {PPE_TABLE_ROWS.map((row, i) => (
                    <tr key={i} style={{ borderBottom: `1px solid ${T.border}` }}>
                      <td style={{ padding: "8px 8px", color: "#fff" }}>
                        {row.name}
                      </td>
                      <td
                        style={{
                          padding: "8px 8px",
                          textAlign: "center",
                          color: T.gold,
                        }}>
                        {row.pbEq}
                      </td>
                      <td
                        style={{
                          padding: "8px 8px",
                          textAlign: "center",
                          color: T.green,
                        }}>
                        {row.tcAttenuation}
                      </td>
                      <td
                        style={{
                          padding: "8px 8px",
                          color: T.dim,
                          fontSize: "11px",
                        }}>
                        {row.source}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div
              style={{
                marginTop: "14px",
                fontSize: "11.5px",
                color: T.dim,
                lineHeight: 1.7,
              }}>
              {SECTION_4_PPE.ppeTableNote}
            </div>
          </div>

          {/* THYROID SHIELD WARNING */}
          <WarningBox title="THYROID SHIELD — WHY MANDATORY IN HOT-LAB (EVEN AT 0.35 mm)">
            <ul
              style={{
                color: T.text,
                fontSize: "13px",
                lineHeight: 1.9,
                margin: 0,
                paddingLeft: "20px",
              }}>
              {THYROID_FACTS.map((fact, i) => (
                <li key={i}>
                  <strong>{fact.point}:</strong> {fact.detail}
                </li>
              ))}
            </ul>
          </WarningBox>

          <CodeBox title={SECTION_4_PPE.codeTitle} code={SECTION_4_PPE.code} />
        </Section>

        {/* SECTION 5 — ADVANCED ALGORITHMS */}
        <Section
          number={SECTION_5_ADVANCED.number}
          title={SECTION_5_ADVANCED.title}>
          <PhysicsBox
            formula={SECTION_5_ADVANCED.formula}
            notes={SECTION_5_ADVANCED.notes}
          />
          <CodeBox code={SECTION_5_ADVANCED.code} />
        </Section>

        {/* SECTION 6 — REFERENCES */}
        <Section
          number={"6.0"}
          title={SECTION_5_REFERENCES.title}>
          <div
            style={{
              margin: "20px 0",
              padding: "4px 0",
              fontSize: "12px",
              color: T.dim,
            }}>
            {SECTION_5_REFERENCES.intro} Category codes:
            <Pill color={T.blue}>IAEA</Pill>
            <Pill color={T.gold}>ICRP</Pill>
            <Pill color={T.green}>NCRP</Pill>
            <Pill color="#c39bd3">AAPM</Pill>
            <Pill color={T.dim}>JOURNAL</Pill>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {REFERENCES.map((ref) => (
              <div
                key={ref.id}
                style={{
                  display: "grid",
                  gridTemplateColumns: "34px 60px 1fr",
                  gap: "0 10px",
                  padding: "10px 14px",
                  background: ref.id % 2 === 0 ? "#0d0d0d" : "#0a0a0a",
                  border: `1px solid ${T.border}`,
                  borderRadius: "4px",
                  alignItems: "start",
                }}>
                <div
                  style={{
                    color: T.dimmer,
                    fontSize: "11px",
                    paddingTop: "1px",
                  }}>
                  [{ref.id}]
                </div>
                <div>
                  <Pill color={catColor[ref.cat]}>{ref.cat}</Pill>
                </div>
                <div
                  style={{ color: T.text, fontSize: "12px", lineHeight: 1.6 }}>
                  {ref.text}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* FOOTER */}
        <div
          style={{
            textAlign: "center",
            marginTop: "80px",
            borderTop: `1px solid ${T.border}`,
            paddingTop: "24px",
            color: T.dimmer,
          }}>
          <p style={{ margin: "0 0 4px", fontSize: "13px" }}>
            ENGINEERED BY LEOPANTSULAIA
          </p>
          <p style={{ margin: 0, fontSize: "10px" }}>GEORGIA // 2026 // v2.1</p>
        </div>
      </div>

      {/* Archive Modal */}
      {archiveItem && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            zIndex: 10001,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <div
            style={{
              background: T.panel,
              padding: "22px",
              borderRadius: "8px",
              maxWidth: "800px",
              width: "90%",
              color: "#fff",
            }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "12px",
              }}>
              <div style={{ fontSize: "16px", fontWeight: "bold" }}>
                {ARCHIVE[archiveItem].title}
              </div>
              <button
                onClick={() => setArchiveItem(null)}
                style={{
                  background: "transparent",
                  border: "1px solid #666",
                  color: "#ccc",
                  padding: "6px 10px",
                }}>
                Close
              </button>
            </div>
            <div style={{ fontSize: "13px", lineHeight: 1.7, color: "#ddd" }}>
              {ARCHIVE[archiveItem].body}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
