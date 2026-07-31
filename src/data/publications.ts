export type Publication = {
  year: number;
  title: string;
  authors: string;
  venue: string;
  detail?: string;
  status?: string;
  doi?: string;
  href?: string;
  featured?: boolean;
  note?: string;
  category: 'journal' | 'book' | 'conference' | 'working';
};

export const publications: Publication[] = [
  {
    year: 2026,
    title: 'Bank deregulation and the rise of local government debt: Evidence from joint-equity bank entry in China',
    authors: 'Chen, R., Liu, S., Nie, Z., & Wang, R.',
    venue: 'Economic Modelling',
    detail: '154, 107367',
    doi: '10.1016/j.econmod.2025.107367',
    featured: true,
    note: 'All authors contributed equally and are treated as joint first authors.',
    category: 'journal',
  },
  {
    year: 2024,
    title: 'Assessing network risk with FRM: Links with pricing kernel volatility and application to cryptocurrencies',
    authors: 'Wang, R., Potì, V., & Härdle, W. K.',
    venue: 'Quantitative Finance',
    detail: '24(7), 975–992',
    doi: '10.1080/14697688.2024.2370311',
    featured: true,
    category: 'journal',
  },
  {
    year: 2023,
    title: 'A financial risk meter for China',
    authors: 'Wang, R., Althof, M., & Härdle, W. K.',
    venue: 'Emerging Markets Review',
    detail: '56, 101052',
    doi: '10.1016/j.ememar.2023.101052',
    featured: true,
    category: 'journal',
  },
  {
    year: 2023,
    title: 'Bank competition, corporate debt, and bringing firms back to the real economy based on double machine learning',
    authors: 'Peng, F., Wang, R., & Liao, J.',
    venue: 'Economic Theory and Business Management',
    detail: '43(3), 82–97 · in Chinese',
    category: 'journal',
  },
  {
    year: 2023,
    title: 'Value-added tax and corporate debt structure: Evidence from China’s 2017 value-added tax filing',
    authors: 'Zhan, K., Wang, R., Nie, Z., & Liao, J.',
    venue: 'Quarterly Journal of Finance',
    detail: '7(1), 77–100 · in Chinese',
    category: 'journal',
  },
  {
    year: 2022,
    title: 'Does terminating rigid payment diminish financing cost of companies?',
    authors: 'Wang, R., Peng, F., Li, W., & Wang, C.',
    venue: 'Management World',
    detail: '38(4), 42–64 · in Chinese',
    category: 'journal',
  },
  {
    year: 2019,
    title: 'Trade frictions, intraday jumps, and stock market volatility: Empirical evidence based on high-frequency data in China',
    authors: 'Wang, R., Li, W., & Huang, Y.',
    venue: 'Studies of International Finance',
    detail: '392(12), 63–73 · in Chinese',
    category: 'journal',
  },
  {
    year: 2026,
    title: 'Applied Time Series Analysis and Forecasting with Python: Problems and Solutions',
    authors: 'Huang, C., Bag, R., Pele, P., Petukhina, A., Wang, R., & Zuo, X.',
    venue: 'Springer Nature',
    status: 'Forthcoming',
    category: 'book',
  },
  {
    year: 2024,
    title: 'Competition in issuance underwriting and bond market efficiency',
    authors: 'Wang, R., Ning, K., & Li, G.',
    venue: 'FMA European Conference',
    status: 'Conference paper',
    category: 'conference',
  },
];

export const workingPapers: Publication[] = [
  {
    year: 2026,
    title: 'Forced to resist? Firms’ AI exposure and the rise of labor disputes',
    authors: 'Li, S., Liu, X., Song, Z., & Wang, R.',
    venue: 'Humanities and Social Sciences Communications',
    status: 'Revise and resubmit',
    category: 'working',
  },
  {
    year: 2026,
    title: 'Pricing kernel (non)monotonicity and conditional information',
    authors: 'Zhou, L., Wang, R., Härdle, W. K., Zuo, X., & Schach, L.',
    venue: 'International Review of Financial Analysis',
    status: 'Under review',
    category: 'working',
  },
  {
    year: 2026,
    title: 'Do investors buy innovation? Market responses to Ethereum development milestones',
    authors: 'Lin, M., Găman, S., Wang, R., & Pele, D. T.',
    venue: 'Journal of International Financial Markets, Institutions & Money',
    status: 'Under review',
    href: 'https://quantinar.com/course/857/market-responses-to-eth-development-milestones',
    category: 'working',
  },
  {
    year: 2026,
    title: 'Anti-corruption reform, resource reallocation, and transitional cost: Evidence from China’s healthcare sector',
    authors: 'Wang, R., Li, Q., & Zhang, L.',
    venue: 'Journal of Law and Economics',
    status: 'Under review',
    category: 'working',
  },
  {
    year: 2026,
    title: 'Transmitted institutional threat: Socially salient ties and strategic retrenchment in China’s medical sector',
    authors: 'Li, Q., Wang, R., & Zhang, L.',
    venue: 'Journal of Business Research',
    status: 'Under review',
    category: 'working',
  },
  {
    year: 2025,
    title: 'Measuring carbon risk dynamics',
    authors: 'Wang, R., Härdle, W. K., & Zhang, L.',
    venue: 'Journal of Banking & Finance',
    status: 'Under review',
    href: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6916243',
    category: 'working',
  },
  {
    year: 2025,
    title: 'Global climate policy trajectories reveal persistent implementation and governance asymmetries',
    authors: 'Xu, Y., Wang, R., Hao, X., Zhang, L., & Ho, A. T.',
    venue: 'One Earth',
    status: 'Under review',
    category: 'working',
  },
  {
    year: 2026,
    title: 'Measuring the power consumption after “the Merge”',
    authors: 'Woitschig, P., Wang, R., & Härdle, W. K.',
    venue: 'Applied Energy',
    status: 'Under review',
    category: 'working',
  },
  {
    year: 2026,
    title: 'Market-implied stranded-asset risk propagates through the financial market',
    authors: 'Wang, R., Zhang, L., Wang, Z., & Zhou, W.',
    venue: 'Work in progress',
    status: 'In progress',
    category: 'working',
  },
  {
    year: 2025,
    title: 'Evaluating the effectiveness of the structural data disclosure model developed by HKQAA and its potential applications',
    authors: 'Chen, F., Chen, Y., Lin, A., Wang, R., Chopra, S. S., & Zhang, L.',
    venue: 'Working paper',
    status: 'Working paper',
    category: 'working',
  },
];
