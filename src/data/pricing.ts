export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  priceNote: string;
  popular?: boolean;
  description: string;
  deliveryTime: string;
  features: string[];
  cta: string;
  ctaVariant: 'primary' | 'secondary' | 'outline';
}

export interface AddOn {
  name: string;
  price: string;
  billing: string;
  features: string[];
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'standard',
    name: 'Standard',
    price: '₹7,999',
    priceNote: 'starting from',
    description: 'Perfect for small businesses, service providers and local shops needing a modern online presence.',
    deliveryTime: '5–7 business days',
    cta: 'Get started',
    ctaVariant: 'outline',
    features: [
      'Up to 5-page responsive website',
      'Modern, custom design',
      'Contact form + WhatsApp integration',
      'Basic on-page SEO setup',
      '1 year free hosting + SSL certificate',
      '2 rounds of revisions',
      'Mobile-first, cross-browser tested',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    price: '₹24,999',
    priceNote: 'starting from',
    popular: true,
    description: 'For growing businesses that need a full-featured website with content management, SEO and automation.',
    deliveryTime: '10–14 business days',
    cta: 'Start growing',
    ctaVariant: 'primary',
    features: [
      'Up to 12 pages with custom UI/UX',
      'Blog / CMS integration',
      'Advanced technical SEO setup',
      'Google Analytics 4 + Search Console',
      'Site speed optimisation (Core Web Vitals)',
      '1 AI chatbot or automation integration',
      '1 year managed hosting included',
      '30 days post-launch support',
      '3 rounds of revisions',
    ],
  },
  {
    id: 'scale',
    name: 'Scale',
    price: '₹49,999',
    priceNote: 'starting from',
    description: 'For product companies, e-commerce stores and businesses that need a full-stack web application.',
    deliveryTime: '3–6 weeks',
    cta: 'Plan your project',
    ctaVariant: 'secondary',
    features: [
      'E-commerce or complex web application',
      'User authentication + admin dashboard',
      'Payment gateway integration',
      'Third-party API integrations',
      'AI features (chatbot / RAG / automation)',
      'Business automation workflows',
      'Security hardening + OWASP audit',
      '60 days post-launch support',
      'Full source code & IP ownership transfer',
    ],
  },
  {
    id: 'custom',
    name: 'Custom',
    price: "Let's talk",
    priceNote: 'scoped to your requirements',
    description: 'Mobile apps, SaaS products, ERP/CRM and complex software built to your exact specification.',
    deliveryTime: 'Scoped per project',
    cta: 'Request a quote',
    ctaVariant: 'outline',
    features: [
      'Mobile apps (iOS, Android, React Native, Flutter)',
      'SaaS product development',
      'ERP / CRM custom builds',
      'AI & automation platforms',
      'Fixed-price or milestone-based billing',
      'Dedicated project manager',
      'Full technical documentation',
      'Flexible support retainer options',
    ],
  },
];

export const addOns: AddOn[] = [
  {
    name: 'Hosting & Care',
    price: '₹499',
    billing: 'per month',
    features: [
      'Managed cloud hosting',
      'SSL certificate & auto-renewal',
      'Daily automated backups',
      'Uptime monitoring (24/7)',
      'Minor content edits (up to 2/month)',
    ],
  },
  {
    name: 'SEO Growth',
    price: '₹4,999',
    billing: 'per month',
    features: [
      'Monthly keyword research & tracking',
      'On-page + technical SEO fixes',
      '4 SEO-optimised content pieces/month',
      'Backlink outreach',
      'Monthly ranking & traffic report',
    ],
  },
  {
    name: 'AI & Automation Retainer',
    price: '₹9,999',
    billing: 'per month',
    features: [
      'New automation workflows (up to 2/month)',
      'Chatbot tuning and retraining',
      'Priority 4-hour response support',
      'Monthly performance review call',
      'Access to new AI features as we build them',
    ],
  },
];

export const pricingFaqs = [
  {
    question: 'How do payment terms work?',
    answer: '50% advance payment is required to start work. The remaining 50% is due upon delivery and your approval. For larger projects, milestone-based payment schedules are available.',
  },
  {
    question: 'Can I upgrade my plan later?',
    answer: 'Yes. You can start on the Standard plan and upgrade to Growth or Scale as your business grows. We\'ll apply a credit for work already done.',
  },
  {
    question: 'Are these prices fixed or estimates?',
    answer: 'The prices listed are starting points. The final quote depends on the specific scope, features and complexity of your project. We provide detailed, fixed-price quotes before starting any work.',
  },
  {
    question: 'What if I need something not in a plan?',
    answer: 'Every project is different. Choose the plan closest to your needs, and we\'ll customise it for you — or go with a fully bespoke Custom quote.',
  },
];
