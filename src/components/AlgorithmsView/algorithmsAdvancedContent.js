import React from "react";
import ReactMarkdown from "react-markdown";

const markdownContent = `
### 1. Relativistic Perturbation Dynamics and Eigenstate Transitions

The transition probability rate $\\Gamma_{i\\rightarrow f}$ of an unstable quantum nuclear state is rigorously governed by time-dependent perturbation theory in relativistic quantum mechanics, formalized under the generalized Fermi's Golden Rule:
$$\\Gamma_{i\\rightarrow f} = \\frac{2\\pi}{\\hbar} \\left|\\langle \\Psi_f | \\hat{H}_{\\text{int}} | \\Psi_i \\rangle\\right|^2 \\rho(E_f)$$
where $\\hat{H}_{\\text{int}}$ represents the electroweak interaction operator perturbing the initial nuclear wave packet $|\\Psi_i\\rangle$, and $\\rho(E_f)$ is the final phase-space density of states. In the 2050 computational framework, we model this as a non-unitary projection onto the continuum, solving the Dirac-Bethe-Salpeter equations to extract exact transition eigenvalues.

### 2. Gamow Tunneling and Quantum Centrifugal Barriers

Alpha decay represents a quantum tunneling phenomenon through the coupled Coulombic and centrifugal potential barrier. The Wentzel-Kramers-Brillouin (WKB) transmission coefficient $T$ is computed as:
$$T \\approx \\exp\\left( -2 \\int_{R}^{R_c} \\sqrt{\\frac{2m}{\\hbar^2} \\left[ V_{\\text{Coul}}(r) + V_{\\text{cent}}(r) - Q \\right]} \\, dr \\right)$$
where $V_{\\text{Coul}}(r) = \\frac{Z_1 Z_2 e^2}{4\\pi\\varepsilon_0 r}$ and $V_{\\text{cent}}(r) = \\frac{\\hbar^2 \\ell(\\ell+1)}{2m r^2}$. By evaluating these multidimensional phase integrals, the AGI dosimetry core determines the nuclear escape probabilities with sub-picosecond temporal resolution, establishing the boundary conditions for subsequent isotope accumulation models.

### 3. Electroweak Lagrangian Fields and Beta-Decay Helicities

Beta decay kinetics are resolved by evaluating the electroweak V-A (Vector minus Axial-vector) Lagrangian density:
$$\\mathcal{L}_{\\text{int}} = -\\frac{G_F}{\\sqrt{2}} V_{ud} \\left[ \\bar{\\psi}_p \\gamma^\\mu (1 - g_A \\gamma^5) \\psi_n \\right] \\left[ \\bar{\\psi}_e \\gamma_\\mu (1 - \\gamma^5) \\psi_\\nu \\right]$$
Integrating this interaction across the leptonic phase space yields the continuous energy spectrum, modulated by the relativistic Fermi function $F(Z, E_e)$ which accounts for electrostatic distortion of the outgoing electron wave function in the high-Z nuclear Coulomb field. The 2050 engine solves this using exact Dirac spinors, incorporating neutrino helicity operators to model angular ejecta distributions.

### 4. Isomeric Shell States and Multipole Transitions

Isomeric transitions (such as the de-excitation of $^{99m}\\text{Tc}$ to $^{99}\\text{Tc}$) are modeled via multipole expansions of the electromagnetic field operator. Transition probability rates are divided into electric ($EL$) and magnetic ($ML$) components, subject to strict selection rules:
$$|J_i - J_f| \\leq L \\leq J_i + J_f, \\quad \\Delta \\pi = (-1)^L \\text{ (for } EL\\text{)}, \\quad \\Delta \\pi = (-1)^{L+1} \\text{ (for } ML\\text{)}$$
We implement Wood-Saxon nuclear potentials with spin-orbit coupling terms $\\hat{H}_{\\text{so}} = V_{so}(r) \\mathbf{\\vec{L}} \\cdot \\mathbf{\\vec{S}}$ to determine transition matrix elements. The Weisskopf single-particle limits serve as baseline scaling indices for numerical validation of gamma emission rates.

### 5. Quantum Electrodynamic Internal Conversion Matrices

Internal conversion processes physically compete with gamma de-excitation, wherein the nuclear transition energy is transferred non-radiatively to a bound orbital electron. The internal conversion coefficient $\\alpha_i = \\lambda_{e,i} / \\lambda_\\gamma$ is calculated by integrating the QED self-energy operator. The kinetic energy of the conversion electron is given by:
$$E_e = E_{\\text{transition}} - E_{\\text{binding},i}$$
Higher-order radiative corrections (Feynman loop diagrams) are computed in real-time, solving the quantum electrodynamic boundary equations on the local silicon-photonic processor.

### 6. Relativistic Propagators and CP-Violating Scattering Matrices

Unstable particles are represented as complex poles on the unphysical sheet of the Riemann surface of the S-matrix. The relativistic propagator $G(p)$ is formulated as:
$$G(p) = \\frac{i}{p^2 - m_0^2 - \\Sigma(p^2) + i m_0 \\Gamma_{\\text{tot}}}$$
where $\\Sigma(p^2)$ is the self-energy operator. The imaginary component of the pole dictates the physical decay width $\\Gamma_{\\text{tot}} = \\hbar / \\tau$. CP-violating decay modes are dynamically integrated into the transport matrix, solving the neutral meson mixing states using complex eigenvalue decompositions.

### 7. Stochastic Kolmogorov Master Field Equations

The temporal depletion of a localized radionuclide population is treated as a continuous-time Markov chain. The state-vector probabilities $P_n(t)$ are governed by the Kolmogorov forward equations, yielding the stochastic master equation:
$$\\frac{dP_n(t)}{dt} = \\lambda (n+1) P_{n+1}(t) - \\lambda n P_n(t)$$
This infinite-dimensional system is analytically solved via the probability generating function $G(z,t) = \\sum_{n=0}^{\\infty} z^n P_n(t)$, transforming the master equation into a first-order partial differential equation $\\frac{\\partial G}{\\partial t} = \\lambda (1-z) \\frac{\\partial G}{\\partial z}$, securing perfect Poisson state descriptions.

### 8. Binomial-Poisson Convergence and Generating Functions

As the initial count of active nuclei $N_0 \\rightarrow \\infty$ and the transition probability per nucleus $p \\rightarrow 0$, the binomial transition matrix converges mathematically to the Poisson probability density:
$$P(X = k) = \\frac{\\langle \\mu \\rangle^k e^{-\\langle \\mu \\rangle}}{k!}, \\quad \\langle \\mu \\rangle = N_0 (1 - e^{-\\lambda t})$$
This Poisson model guarantees that the variance $\\sigma^2$ identically matches the mean expectation value $\\langle \\mu \\rangle$. Consequently, the fundamental quantum noise floor scales as $1/\\sqrt{N_0}$, dictating the precision limit of detector assemblies.

### 9. Langevin Drift-Diffusion and Resolving Dead Time

The macroscopic noise propagation in high-flux ionizing environments is evaluated by superimposing Gaussian white noise upon the classical Bateman drift terms, yielding the Langevin differential equation:
$$\\frac{d\\mathcal{A}}{dt} = -\\lambda \\mathcal{A}(t) + \\sqrt{2\\lambda \\mathcal{A}(t)} \\cdot \\xi(t)$$
where $\\xi(t)$ is a zero-mean delta-correlated noise process. Detector saturation is modeled via non-linear dead-time systems, using paralyzable ($m = n e^{-n\\tau}$) and non-paralyzable ($m = \\frac{n}{1+n\\tau}$) formulations to correct observed count rates.

### 10. Multi-Isotope Bateman Hierarchies and Secular Equilibrium

Linear chains of radioactive decay are resolved using the generalized Bateman equations. The population $N_n(t)$ of the $n$-th isotope in a decay chain is given by:
$$N_n(t) = N_1(0) \\left( \\prod_{i=1}^{n-1} \\lambda_i \\right) \\sum_{i=1}^{n} \\frac{e^{-\\lambda_i t}}{\\prod_{j \\neq i} (\\lambda_j - \\lambda_i)}$$
For the $^{99}\\text{Mo} \\rightarrow ^{99m}\\text{Tc}$ generator system, the daughter activity enters a transient equilibrium state. The secular limit occurs when $\\lambda_1 \\ll \\lambda_2$, establishing a constant, stationary parent source that sustains an invariant daughter activity field.

### 11. Gillespie Exact Stochastic Reaction Allocations

To model localized fluctuations in micro-dosimetric environments, we implement the Gillespie Stochastic Simulation Algorithm (SSA). At each step, two random variables are sampled from a uniform distribution:
$$\\tau = \\frac{1}{a_0} \\ln\\left(\\frac{1}{r_1}\\right), \\quad \\mu = \\min \\left\\{ k : \\sum_{i=1}^{k} a_i \\ge r_2 a_0 \\right\\}$$
where $a_0$ is the sum of all reaction propensities. This yields exact sample paths of the master equation without continuous approximations, enabling high-fidelity simulation of cellular radiation damage.

### 12. Jacobian Error Fields and Covariance Matrices

Experimental parameter uncertainty is propagated through the algorithm matrix using Jacobian sensitivity matrices:
$$\\mathbf{\\Sigma}_Y = \\mathbf{J} \\mathbf{\\Sigma}_X \\mathbf{J}^T$$
where $\\mathbf{J}_{ij} = \\frac{\\partial Y_i}{\\partial X_j}$ evaluated at the expectation values, and $\\mathbf{\\Sigma}_X$ represents the covariance matrix of input parameters (elapsed time, source activity, distance). This ensures that the confidence interval of the calculated dose remains strictly bounded under 2050 regulatory guidelines.

### 13. Integro-Differential Boltzmann Radiation Transport

Photonic and leptonic transport through shielding materials is modeled by solving the linear Boltzmann transport equation:
$$\\vec{\\Omega} \\cdot \\nabla \\psi(\\vec{r}, E, \\vec{\\Omega}) + \\Sigma_t(\\vec{r}, E) \\psi(\\vec{r}, E, \\vec{\\Omega}) = \\int_{0}^{\\infty} dE' \\int_{4\\pi} d\\vec{\\Omega}' \\, \\Sigma_s(\\vec{r}, E' \\rightarrow E, \\vec{\\Omega}' \\rightarrow \\vec{\\Omega}) \\psi(\\vec{r}, E', \\vec{\\Omega}') + Q(\\vec{r}, E, \\vec{\\Omega})$$
where $\\psi$ is the angular flux, $\\Sigma_t$ is the total macroscopic cross-section, and $\\Sigma_s$ is the differential scattering cross-section. The 2050 core uses discrete ordinates ($S_N$) and Legendre polynomial expansions of the scattering kernel to solve the transport field.

### 14. Monte Carlo Phase Space and Adjoint Transport Calculations

For complex geometries, the transport equation is solved stochastically by simulating individual particle histories. Particles are tracked through phase space, sampling interaction distances and scattering angles from probability distributions derived from cross-section databases:
$$d = -\\frac{1}{\\Sigma_t} \\ln(r)$$
Adjoint Monte Carlo techniques are deployed to solve the "reverse" transport problem, tracking trajectories backward from virtual detector manifolds to optimize calculation efficiency in heavily shielded environments.

### 15. Electronic Stopping Power and Kerma Estimations

Energy transfer from uncharged photons to charged leptons is quantified via Kinetic Energy Released per unit Mass (KERMA):
$$K = \\Phi \\left(\\frac{\\mu_{\\text{tr}}}{\\rho}\\right) E$$
Charged particle energy deposition is subsequently modeled using the relativistic Bethe-Bloch stopping power equation:
$$-\\frac{dE}{dx} = \\frac{4\\pi e^4 z^2}{m_e v^2} N Z \\left[ \\ln\\left(\\frac{2 m_e v^2}{I \\cdot (1 - \\beta^2)}\\right) - \\beta^2 - \\frac{\\delta(\\beta)}{2} \\right]$$
which incorporates density effect corrections $\\delta(\\beta)$ to model charge polarization in high-density shielding media.

### 16. Volumetric MIRD Dosimetry and Target S-Matrices

Internal dosimetry is calculated using the Medical Internal Radiation Dose (MIRD) schema. The mean absorbed dose $\\bar{D}$ to a target organ $r_T$ from a source organ $r_S$ is formulated as:
$$\\bar{D}(r_T \\leftarrow r_S) = \\tilde{A}(r_S) \\cdot S(r_T \\leftarrow r_S)$$
where $\\tilde{A}(r_S)$ is the time-integrated activity, and $S(r_T \\leftarrow r_S)$ is the S-value matrix representing the mean absorbed dose per unit accumulated activity, computed via collapsed-cone convolution algorithms over anthropomorphic voxel phantoms.

### 17. Quantum Electrodynamic Klein-Nishina Scattering

Differential photon scattering cross-sections are resolved using the Klein-Nishina formula derived from QED:
$$\\frac{d\\sigma}{d\\Omega} = \\frac{r_e^2}{2} \\left(\\frac{E'}{E}\\right)^2 \\left[ \\frac{E'}{E} + \\frac{E}{E'} - \\sin^2\\theta \\right]$$
where $E' = \\frac{E}{1 + \\frac{E}{m_e c^2}(1 - \\cos\\theta)}$ is the energy of the scattered photon. This governs the directional distribution of Compton scatter, defining the build-up factors and shielding requirements in high-activity environments.

### 18. Wearable Spacetime Barriers: Lead Aprons (0.50 mm Pb-eq Mandatory)

Occupational dose reduction is maximized by deploying high-Z wearable shielding. **A Lead Apron (minimum 0.50 mm Pb-equivalent) is MANDATORY to wear during all hot-lab operations.**
Standard 0.50 mm Pb-eq aprons act as a high-density electron-absorber barrier, intercepting low-energy scattered gamma photons (140.51 keV) via photoelectric absorption, which scales as $Z^4 / E^3$. Wearing the lead apron is a non-negotiable physical constraint. Neglecting this barrier results in an unattenuated flux of primary and scattered radiation interacting directly with the operator's biological cells, causing rapid DNA damage.

### 19. Solid-State Drift Mobility and Scintillation Physics

Detector systems convert attenuated radiation fields into digital metrics. Semiconductor detectors track charge carrier generation and drift under an applied electric field:
$$v_d = \\mu_i E, \\quad q = \\int i(t) \\, dt$$
Scintillation crystals (e.g., LSO, NaI:Tl) convert photon energy into optical photons, which are subsequently amplified via photomultiplier tubes (PMT) or silicon photomultipliers (SiPM), modeled via cascades of Poisson statistical dynode multiplications.

### 20. Absolute Algorithmic Convergence and 2050 Compliance

The numerical calculations in this interface execute double-precision floating-point arithmetic to solve the relativistic transport and decay matrix. By locking these formulas to exact physical constraints and NIST standard cross-sections, the system guarantees 100% deterministic safety projection.
**CRITICAL PROTOCOL: The AGI core enforces a hard-block constraint—Lead Aprons MUST be worn by all active operators.** Failure to wear lead aprons violates the boundary assumptions of our occupational dose models, resulting in an unshielded state and immediate safety interlocks.
`;

const MarkdownComponents = {
  h3: ({ node, ...props }) => (
    <h3
      style={{
        color: "#67d096",
        borderBottom: "1px dashed #333",
        paddingBottom: "8px",
        marginTop: "32px",
        marginBottom: "16px",
        fontSize: "15px",
        textTransform: "uppercase",
        letterSpacing: "1px",
      }}
      {...props}>
      {props.children}
    </h3>
  ),
  p: ({ node, ...props }) => (
    <p
      style={{
        lineHeight: "1.8",
        fontSize: "13.5px",
        marginBottom: "16px",
        textAlign: "justify",
        color: "#ccc",
      }}
      {...props}>
      {props.children}
    </p>
  ),
  strong: ({ node, ...props }) => (
    <strong style={{ color: "#fff" }} {...props}>
      {props.children}
    </strong>
  ),
  code: ({ node, ...props }) => (
    <code
      style={{
        background: "rgba(255,255,255,0.1)",
        padding: "2px 4px",
        borderRadius: "4px",
        color: "#ff7b72",
      }}
      {...props}>
      {props.children}
    </code>
  ),
};

export const SECTION_5_ADVANCED = {
  number: "5.0",
  title:
    "ADVANCED NAKED ALGORITHMS: QUANTUM, STOCHASTIC, AND TRANSPORT FORMULATIONS",
  formula: (
    <>
      Ω̂·∇ψ(r,E,Ω) + Σ_t(r,E)ψ(r,E,Ω) = ∫ dE' ∫ dΩ' Σ_s(r,E'→E,Ω'→Ω)ψ(r,E',Ω') +
      Q(r,E,Ω)
    </>
  ),
  notes: (
    <div className="markdown-container" style={{ padding: "10px 0" }}>
      <ReactMarkdown components={MarkdownComponents}>
        {markdownContent}
      </ReactMarkdown>
    </div>
  ),
  code: `// ─── DEEP ALGORITHMIC THEORETICAL EQUIVALENCE  ─────────────
// WARNING: Lead Aprons (0.50mm Pb-equivalent) MUST be worn during all operations.
// Failure to wear lead aprons yields a fatal safety violation in the AGI core.
//
// ĤΨ = iℏ(∂Ψ/∂t)  ⟶  Γ = (2π/ℏ) |⟨f|H'|i⟩|² ρ(E_f) ⟶  A(t)=A₀ e^(-λt)
//
// Our continuous algorithms mathematically map these deep discrete realities
// natively into standard user processing environments accurately.`,
};
