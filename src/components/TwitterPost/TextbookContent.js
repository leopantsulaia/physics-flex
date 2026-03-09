export const textbookContent = `The Physics of Quantum Mechanics
James Binney
and
David Skinner
iv
This book is a consequence of the vision and munificence of
Walter of Merton, who in 1264 launched something good
Copyright 
c 2008–2013 James Binney and David Skinner
Published by Cappella Archive 2008; revised printings 2009, 2010, 2011

Contents

Preface x

1 Probability and probability amplitudes 1
1.1 The laws of probability 3
• Expectation values 4
1.2 Probability amplitudes 5
• Two-slit interference 6 • Matter waves? 7
1.3 Quantum states 7
• Quantum amplitudes and measurements 7
⊲ Complete sets of amplitudes 8 • Dirac notation 9
• Vector spaces and their adjoints 9 • The energy rep resentation 12 • Orientation of a spin-half particle 12
• Polarisation of photons 14
1.4 Measurement 15
Problems 15

2 Operators, measurement and time evolution 17
2.1 Operators 17
⊲ Functions of operators 20 ⊲ Commutators 20
2.2 Evolution in time 21
• Evolution of expectation values 23
2.3 The position representation 24
• Hamiltonian of a particle 26 • Wavefunction for well
defined momentum 27 ⊲ The uncertainty principle 28
• Dynamics of a free particle 29 • Back to two-slit in terference 31 • Generalisation to three dimensions 31
⊲ Probability current 32 ⊲ The virial theorem 33
Problems 34

3 Harmonic oscillators and magnetic fields 37
3.1 Stationary states of a harmonic oscillator 37
3.2 Dynamics of oscillators 41
• Anharmonic oscillators 42
3.3 Motion in a magnetic field 45
• Gauge transformations 46 • Landau Levels 47
⊲ Displacement of the gyrocentre 49 • Aharonov-Bohm ef fect 51
Problems 52

4 Transformations & Observables 58
4.1 Transforming kets 58
• Translating kets 59 • Continuous transformations
vi Contents
and generators 60 • The rotation operator 62
• Discrete transformations 62 ⊲ (a) The parity operator 62
⊲ Mirror operators 63
4.2 Transformations of operators 64
⊲ The parity operator 66 ⊲ Mirror operators 68
4.3 Symmetries and conservation laws 68
4.4 The Heisenberg picture 70
4.5 What is the essence of quantum mechanics? 71
Problems 73

5 Motion in step potentials 75
5.1 Square potential well 75
• Limiting cases 78 ⊲ (a) Infinitely deep well 78
⊲ (b) Infinitely narrow well 78
5.2 A pair of square wells 79
• Ammonia 81 ⊲ The ammonia maser 83
5.3 Scattering of free particles 84
⊲ The scattering cross section 86 • Tunnelling through a
potential barrier 87 • Scattering by a classically allowed
region 88 • Resonant scattering 89 ⊲ The Breit–Wigner
cross section 92
5.4 How applicable are our results? 95
5.5 Summary 98
Problems 99

6 Composite systems 104
6.1 Composite systems 105
• Collapse of the wavefunction 108 • Operators for com posite systems 109 • Development of entanglement 110
• Einstein–Podolski–Rosen experiment 111
⊲ Bell’s inequality 113
6.2 Quantum computing 116
6.3 The density operator 121
• Reduced density operators 125 • Shannon entropy 127
6.4 Thermodynamics 129
6.5 Measurement 132
Problems 135

7 Angular Momentum 139
7.1 Eigenvalues of Jz and J2 139
• Rotation spectra of diatomic molecules 142
7.2 Orbital angular momentum 145
• L as the generator of circular translations 146 • Spectra
of L2 and Lz 147 • Orbital angular momentum eigenfunc tions 147 • Orbital angular momentum and parity 151
• Orbital angular momentum and kinetic energy 151
• Legendre polynomials 153
7.3 Three-dimensional harmonic oscillator 154
7.4 Spin angular momentum 158
• Spin and orientation 159 • Spin-half systems 161 ⊲ The
Stern–Gerlach experiment 161 • Spin-one systems 164
• The classical limit 165 • Precession in a magnetic field 168
Contents vii
7.5 Addition of angular momenta 169
• Case of two spin-half systems 173 • Case of spin one and
spin half 174 • The classical limit 175
Problems 176

8 Hydrogen 181
8.1 Gross structure of hydrogen 182
• Emission-line spectra 186 • Radial eigenfunctions 186
• Shielding 190 • Expectation values for r−k 192
8.2 Fine structure and beyond 193
• Spin-orbit coupling 194 • Hyperfine structure 197
Problems 199

9 Perturbation theory 203
9.1 Time-independent perturbations 203
• Quadratic Stark effect 205 • Linear Stark effect and
degenerate perturbation theory 206 • Effect of an ex ternal magnetic field 208 ⊲ Paschen–Back effect 210
⊲ Zeeman effect 210
9.2 Variational principle 212
9.3 Time-dependent perturbation theory 213
• Fermi golden rule 214 • Radiative transition rates 215
• Selection rules 219
Problems 220

10 Helium and the periodic table 226
10.1 Identical particles 226
⊲ Generalisation to the case of N identical particles 227
• Pauli exclusion principle 227 • Electron pairs 229
10.2 Gross structure of helium 230
• Gross structure from perturbation theory 231
• Application of the variational principle to he lium 232 • Excited states of helium 233
• Electronic configurations and spectroscopic terms 236
⊲ Spectrum of helium 237
10.3 The periodic table 237
• From lithium to argon 237 • The fourth and fifth peri ods 241
Problems 242

11 Adiabatic principle 244
11.1 Derivation of the adiabatic principle 245
11.2 Application to kinetic theory 246
11.3 Application to thermodynamics 248
11.4 The compressibility of condensed matter 249
11.5 Covalent bonding 250
• A model of a covalent bond 250 • Molecular dynamics 252
• Dissociation of molecules 253
11.6 The WKBJ approximation 253
Problems 255
viii Contents

12 Scattering Theory 257
12.1 The scattering operator 257
• Perturbative treatment of the scattering operator 259
12.2 The S-matrix 261
• The iǫ prescription 261 • Expanding the S-matrix 263
• The scattering amplitude 265
12.3 Cross-sections and scattering experiments 267
• The optical theorem 269
12.4 Scattering electrons off hydrogen 271
12.5 Partial wave expansions 273
• Scattering at low energy 276
12.6 Resonant scattering 278
• Breit–Wigner resonances 280 • Radioactive decay 280
Problems 282

Appendices
A The laws of probability 285
B Cartesian tensors 286
C Fourier series and transforms 288
D Operators in classical statistical mechanics 289
E Lie groups and Lie algebras 291
F The hidden symmetry of hydrogen 292
G Lorentz covariant equations 294
H Thomas precession 297
I Matrix elements for a dipole-dipole interaction 299
J Selection rule for j 300
K Restrictions on scattering potentials 301

Index 303`;
