import React from "react";

export const AlgorithmsView = ({ onClose }) => {
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: '#0a0a0a', color: '#00ff00', zIndex: 1000,
      overflowY: 'auto', fontFamily: 'Courier New, monospace', padding: '20px',
      boxSizing: 'border-box'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* HEADER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #00ff00', paddingBottom: '20px', marginBottom: '40px' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '24px' }}>NAKED ALGORITHMS</h1>
            <div style={{ fontSize: '12px', opacity: 0.7 }}>VERIFICATION PROTOCOL v1.0</div>
          </div>
          <button 
            onClick={onClose}
            style={{ background: 'transparent', border: '1px solid #00ff00', color: '#00ff00', padding: '10px 20px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            CLOSE TERMINAL [X]
          </button>
        </div>

        {/* SECTION 1: DECAY */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ background: '#111', display: 'inline-block', padding: '5px', border: '1px solid #333' }}>1.0 RADIOACTIVE DECAY ENGINE</h2>
          
          <div style={{ margin: '20px 0', padding: '20px', borderLeft: '3px solid #00ff00', background: '#050505' }}>
            <h3 style={{ marginTop: 0, fontSize: '14px', color: '#888' }}>THE PHYSICS (First Principles)</h3>
            <p style={{ fontSize: '18px', letterSpacing: '1px' }}>
              A(t) = A₀ · e<sup>-λt</sup>
            </p>
            <p style={{ fontSize: '14px', opacity: 0.8 }}>
              Where:<br/>
              λ (Decay Constant) = ln(2) / T<sub>1/2</sub>
            </p>
          </div>

          <div style={{ margin: '20px 0', padding: '20px', background: '#1a1a1a', borderRadius: '5px', border: '1px solid #333' }}>
            <h3 style={{ marginTop: 0, fontSize: '14px', color: '#aaa' }}>THE JAVASCRIPT IMPLEMENTATION</h3>
            <pre style={{ whiteSpace: 'pre-wrap', color: '#fff', fontSize: '13px' }}>
{`// 1. Calculate Decay Constant (Lambda)
const halfLifeHours = ISOTOPES[isotope].halfLife;
const lambda = 0.693 / halfLifeHours; 

// 2. Calculate Time Difference (Hours)
const timeDiffHours = (now - startTime) / (1000 * 60 * 60);

// 3. Apply Exponential Decay
const currentActivity = initialActivity * Math.exp(-lambda * timeDiffHours);`}
            </pre>
          </div>
        </div>

        {/* SECTION 2: INVERSE SQUARE LAW */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ background: '#111', display: 'inline-block', padding: '5px', border: '1px solid #333' }}>2.0 DISTANCE ATTENUATION</h2>
          
          <div style={{ margin: '20px 0', padding: '20px', borderLeft: '3px solid #00ff00', background: '#050505' }}>
            <h3 style={{ marginTop: 0, fontSize: '14px', color: '#888' }}>THE PHYSICS</h3>
            <p style={{ fontSize: '18px', letterSpacing: '1px' }}>
              I₁ · (d₁)² = I₂ · (d₂)²
            </p>
            <p style={{ fontSize: '14px', opacity: 0.8 }}>
              Radiation intensity is inversely proportional to the square of the distance.
            </p>
          </div>

          <div style={{ margin: '20px 0', padding: '20px', background: '#1a1a1a', borderRadius: '5px', border: '1px solid #333' }}>
            <h3 style={{ marginTop: 0, fontSize: '14px', color: '#aaa' }}>THE JAVASCRIPT IMPLEMENTATION</h3>
            <pre style={{ whiteSpace: 'pre-wrap', color: '#fff', fontSize: '13px' }}>
{`// Calculate Dose Rate based on Gamma Constant
// Formula: (Γ * Activity) / Distance²

const unshieldedDoseRate = 
  (gammaConstant * 10 * activityInMci) / (distanceInMeters ** 2);`}
            </pre>
          </div>
        </div>

        {/* SECTION 3: SHIELDING */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ background: '#111', display: 'inline-block', padding: '5px', border: '1px solid #333' }}>3.0 SHIELDING (HVL LOGIC)</h2>
          
          <div style={{ margin: '20px 0', padding: '20px', borderLeft: '3px solid #00ff00', background: '#050505' }}>
            <h3 style={{ marginTop: 0, fontSize: '14px', color: '#888' }}>THE PHYSICS</h3>
            <p style={{ fontSize: '18px', letterSpacing: '1px' }}>
              I = I₀ · (1/2)<sup>n</sup>
            </p>
            <p style={{ fontSize: '14px', opacity: 0.8 }}>
              Where <i>n</i> is the number of Half-Value Layers (HVL).
            </p>
          </div>

          <div style={{ margin: '20px 0', padding: '20px', background: '#1a1a1a', borderRadius: '5px', border: '1px solid #333' }}>
            <h3 style={{ marginTop: 0, fontSize: '14px', color: '#aaa' }}>THE JAVASCRIPT IMPLEMENTATION</h3>
            <pre style={{ whiteSpace: 'pre-wrap', color: '#fff', fontSize: '13px' }}>
{`// 1. Determine Required Attenuation Factor
const requiredAttenuation = unshieldedDoseRate / targetDose;

// 2. Calculate Number of HVLs needed (Log base 2)
const numHVLs = Math.log2(requiredAttenuation);

// 3. Convert to Thickness (mm/cm)
const leadThickness = numHVLs * isotopeData.hvl.lead;`}
            </pre>
          </div>
        </div>

        {/* FOOTER */}
        <div style={{ textAlign: 'center', marginTop: '100px', borderTop: '1px solid #333', paddingTop: '20px', color: '#555' }}>
          <p>ENGINEERED BY LEOPANTSULAIA</p>
          <p style={{ fontSize: '10px' }}>GEORGIA // 2026</p>
        </div>

      </div>
    </div>
  );
};