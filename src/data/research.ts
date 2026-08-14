export const researchThemes = [
  {
    ref: '01',
    title: 'Financial market',
    highlights: [
      'Develop Financial Risk Meter (FRM) for dynamic systemic risk measurement.',
      'Analyze tail-risk transmission across financial markets.',
      'Construct FRM-based portfolio strategies.',
    ],
  },
  {
    ref: '02',
    title: 'Digital assets',
    highlights: [
      'Revisit the “pricing kernel puzzle” in digital asset markets.',
      'Investigate pricing mechanisms and systemic risk contagion in digital assets.',
      'Quantify the energy savings associated with Proof-of-Stake consensus mechanisms.',
    ],
  },
  {
    ref: '03',
    title: 'Sustainability economics',
    highlights: [
      'Quantify carbon-risk dynamics and their pricing in financial markets.',
      'Develope a framework to trace stranded-asset losses from physical assets to asset holders and interconnected firms.',
      'Identify global patterns of climate mitigation and adaptation under evolving climate policies.',
    ],
  },
  {
    ref: '04',
    title: 'Resource allocation',
    highlights: [
      'Examine how implicit guarantees shape capital allocation.',
      'Study institutional shocks and their real economic consequences.',
      'Use machine learning and causal inference to evaluate allocation efficiency and policy effects.',
    ],
  },
] as const;

export const grants = [
  {
    period: '2024–2026',
    funder: 'National Natural Science Foundation of China',
    id: '72302237',
    title:
      'How Does Rigid Payment Expectation Influence the Allocation of Financial Resources through the Bond Market’s Price Efficiency Channel?',
    role: 'Principal investigator',
  },
  {
    period: '2023–2025',
    funder: 'China Postdoctoral Science Foundation',
    id: '2023M743984',
    title:
      'Analysis of the Impact and Mechanism of Bond Market Default Risk on Financial Resource Allocation Efficiency from the Perspective of Guarantee Network',
    role: 'Principal investigator',
  },
  {
    period: '2024–2026',
    funder: 'Guangdong Provincial Natural Science Foundation',
    id: '2024A1515010314',
    title:
      'The Impact of Implicit Guarantee Expectations on the Allocation of Financial Resources and Its Mechanism: A Study from the Dual Perspectives of Bond Market Pricing Efficiency and Financial Risk',
    role: 'Principal investigator',
  },
] as const;
