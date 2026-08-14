export const site = {
  name: 'Ruting Wang',
  nameZh: '王茹婷',
  honorific: 'Dr',
  credentials: 'PhD in Finance',
  role: 'Postdoctoral Researcher in Finance',
  affiliation: 'City University of Hong Kong · Sun Yat-sen University',
  department: 'School of Energy and Environment',
  institution: 'City University of Hong Kong',
  email: 'rutiwang@cityu.edu.hk',
  emailSecondary: 'wangrt6@mail.sysu.edu.cn',
  summary:
    'My work lies at the intersection of finance, sustainability economics, and digital assets. I have applied machine learning and modern causal inference methods to analyze how risks propagate through markets and institutions, and how institutional shocks reshape resource allocation.',
  tagline: 'Financial risk · Digital assets · Climate finance',
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Research', href: '/research' },
    { label: 'Publications', href: '/publications' },
    { label: 'Talks', href: '/talks' },
    { label: 'Teaching', href: '/teaching' },
    { label: 'Service', href: '/service' },
    { label: 'Contact', href: '/contact' },
  ],
  profiles: [
    {
      label: 'Google Scholar',
      short: 'Scholar',
      icon: 'scholar',
      href: 'https://scholar.google.com/citations?user=tB0js94AAAAJ&hl=en',
    },
    {
      label: 'ORCID',
      short: 'ORCID',
      icon: 'orcid',
      href: 'https://orcid.org/0000-0001-8871-3838',
    },
    {
      label: 'Sun Yat-sen University profile',
      short: 'SYSU',
      icon: 'university',
      href: 'https://bschool.sysu.edu.cn/en/faculty/1416966.htm',
    },
    {
      label: 'MSCA Digital Finance profile',
      short: 'MSCA',
      icon: 'network',
      href: 'https://www.digital-finance-msca.com/people/ruting-wang',
    },
    {
      label: 'ResearchGate',
      short: 'ResearchGate',
      icon: 'research',
      href: 'https://www.researchgate.net/profile/Ruting-Wang',
    },
  ],
  researchAreas: [
    'Machine learning in finance',
    'Systemic and network risk',
    'Digital assets and fintech',
    'Climate and carbon risk',
    'Corporate finance and capital allocation',
  ],
} as const;

export const appointments = [
  {
    period: '2024–present',
    role: 'Postdoctoral Researcher',
    organisation: 'School of Energy and Environment, City University of Hong Kong',
    detail: 'Hong Kong Scholars Program',
  },
  {
    period: '2023–present',
    role: 'Postdoctoral Researcher',
    organisation: 'Business School, Sun Yat-sen University',
    detail: '',
  },
  {
    period: '2023–present',
    role: 'Research Fellow',
    organisation: 'IDA Institute for Digital Assets, Bucharest University of Economic Studies',
    detail: '',
  },
  {
    period: '2025–present',
    role: 'Member',
    organisation: 'MSCA Digital Finance',
    detail: '',
  },
] as const;

export const education = [
  {
    period: '2018–2022',
    degree: 'PhD in Finance',
    institution: 'Sun Yat-sen University, School of Business',
    detail:
      'Dissertation: “Rigid Payment, Debt Financing, and Capital Misallocation: An Application of Machine Learning Causal Inference Method”',
  },
  {
    period: '2021–2022',
    degree: 'Visiting PhD',
    institution: 'Humboldt-Universität zu Berlin, IRTG 1792',
    detail: '',
  },
  {
    period: '2014–2017',
    degree: 'MSc in Financial Management',
    institution: 'Zhongnan University of Economics and Law',
    detail: '',
  },
  {
    period: '2010–2014',
    degree: 'BSc in Financial Management',
    institution: 'Zhongnan University of Economics and Law',
    detail: '',
  },
] as const;
