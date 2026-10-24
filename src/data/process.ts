export interface ProcessStep {
  step: number;
  stepLabel: string;
  title: string;
  description: string;
  icon: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    stepLabel: '01',
    title: 'Requirement Analysis',
    description: 'We dig into your goals, users and constraints to define exactly what needs to be built — and why.',
    icon: 'clipboard-list',
  },
  {
    step: 2,
    stepLabel: '02',
    title: 'Market Insight',
    description: 'We study your competitors and industry benchmarks to identify opportunities your product can own.',
    icon: 'bar-chart-2',
  },
  {
    step: 3,
    stepLabel: '03',
    title: 'Design Blueprint',
    description: 'Information architecture, user flows and low-fidelity wireframes aligned on before a pixel is designed.',
    icon: 'layout',
  },
  {
    step: 4,
    stepLabel: '04',
    title: 'UI Finalization',
    description: 'High-fidelity, interactive Figma prototypes reviewed and approved — no surprises in development.',
    icon: 'figma',
  },
  {
    step: 5,
    stepLabel: '05',
    title: 'Logic Development',
    description: 'Frontend and backend built in parallel with clean, tested, documented code you\'ll be proud to own.',
    icon: 'code-2',
  },
  {
    step: 6,
    stepLabel: '06',
    title: 'Responsive Testing',
    description: 'Cross-device, cross-browser QA on real devices. Performance benchmarks checked against targets.',
    icon: 'monitor-smartphone',
  },
  {
    step: 7,
    stepLabel: '07',
    title: 'SEO & Security',
    description: 'Technical SEO, meta setup, security headers, SSL and OWASP checks before anything goes live.',
    icon: 'shield-check',
  },
  {
    step: 8,
    stepLabel: '08',
    title: 'UAT & Launch',
    description: 'You test it, approve it, then we ship it — with a monitored launch window and handover documentation.',
    icon: 'rocket',
  },
];
