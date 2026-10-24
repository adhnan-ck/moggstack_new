import type { LucideIcon } from 'lucide-react';

export interface Service {
  slug: string;
  title: string;
  icon: string; // SVG path data or icon name
  shortDescription: string;
  description: string;
  features: string[];
  subServices: Array<{ name: string; description: string }>;
  techStack: string[];
  process: Array<{ step: number; title: string; description: string }>;
  faqs: Array<{ question: string; answer: string }>;
  cta: string;
}

export const services: Service[] = [
  {
    slug: 'website-development',
    title: 'Website Development',
    icon: 'globe',
    shortDescription: 'Fast, modern websites that convert visitors into customers.',
    description:
      'From landing pages to full e-commerce platforms, we design and develop websites that are fast, accessible, and built to rank. Every site we deliver is mobile-first, SEO-ready and easy to manage.',
    features: [
      'Pixel-perfect responsive design across all devices',
      'On-page SEO built in from day one',
      'Performance-optimised for Core Web Vitals',
      'Secure HTTPS with SSL certificate included',
      'Easy-to-manage CMS integration (if needed)',
    ],
    subServices: [
      { name: 'Responsive Design', description: 'Looks great on every screen size' },
      { name: 'Frontend Development', description: 'React, Astro, Next.js — the right tool for the job' },
      { name: 'Backend Development', description: 'APIs, databases, auth and business logic' },
      { name: 'CMS Integration', description: 'Sanity, Contentful, WordPress — your team stays in control' },
      { name: 'E-commerce', description: 'Custom stores or Shopify extensions with payment gateways' },
    ],
    techStack: ['Astro', 'Next.js', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    process: [
      { step: 1, title: 'Discovery', description: 'Understand goals, audience and competitive landscape.' },
      { step: 2, title: 'Design', description: 'Wireframes, moodboard and high-fidelity UI mockups.' },
      { step: 3, title: 'Development', description: 'Clean, maintainable code with CI/CD pipeline.' },
      { step: 4, title: 'Launch', description: 'QA, SEO check, deployment and handover.' },
    ],
    faqs: [
      { question: 'How long does a website take to build?', answer: 'A standard website takes 7–21 days depending on complexity. E-commerce or web apps take 4–12 weeks.' },
      { question: 'Do you provide hosting?', answer: 'Yes — 1 year of managed hosting, SSL and backups is included in all plans.' },
    ],
    cta: 'Get a website quote',
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    icon: 'smartphone',
    shortDescription: 'Native and cross-platform apps that users love to open.',
    description:
      'We build polished, performant mobile apps for iOS and Android — from MVPs to production-ready products. Our apps ship with clean architecture, smooth animations and full App Store deployment support.',
    features: [
      'Native iOS (Swift) and Android (Kotlin) development',
      'Cross-platform with React Native or Flutter',
      'App Store & Google Play submission assistance',
      'Offline-first architecture where needed',
      'Push notifications and in-app messaging',
    ],
    subServices: [
      { name: 'iOS Development', description: 'Swift-native apps for iPhone and iPad' },
      { name: 'Android Development', description: 'Kotlin apps optimised for the Android ecosystem' },
      { name: 'React Native / Flutter', description: 'One codebase, both platforms — faster time to market' },
      { name: 'Progressive Web Apps', description: 'Web apps that install and feel native' },
      { name: 'App Store Deployment', description: 'Full submission, review and launch support' },
    ],
    techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Node.js', 'Firebase'],
    process: [
      { step: 1, title: 'Scoping', description: 'Define features, user flows and technical requirements.' },
      { step: 2, title: 'UI Design', description: 'Platform-native design systems with Figma prototypes.' },
      { step: 3, title: 'Development', description: 'Sprint-based delivery with weekly demos.' },
      { step: 4, title: 'Launch', description: 'QA, beta testing, App Store submission and go-live.' },
    ],
    faqs: [
      { question: 'Should I build native or cross-platform?', answer: 'For most startups, React Native or Flutter is the smart choice — faster, cheaper and 90% of native performance. We guide you through the decision.' },
    ],
    cta: 'Plan your app',
  },
  {
    slug: 'custom-software-development',
    title: 'Custom Software & Product Development',
    icon: 'code',
    shortDescription: 'Bespoke software engineered around your exact business logic.',
    description:
      'Off-the-shelf software rarely fits your workflow perfectly. We design and build custom web applications, internal tools, CRM and ERP systems from the ground up — scalable, secure and precisely aligned to how your business operates.',
    features: [
      'Full-stack web applications with real-time capabilities',
      'Custom CRM and ERP systems',
      'Role-based access control and audit trails',
      'Third-party API integrations and data migrations',
      'Scalable cloud-native architecture',
    ],
    subServices: [
      { name: 'Web Applications', description: 'Complex frontend + backend products built to scale' },
      { name: 'Full Stack Development', description: 'End-to-end ownership from database to UI' },
      { name: 'CRM Software', description: 'Custom pipelines, contacts, deals and automation' },
      { name: 'Integration & Migration', description: 'Connect your existing tools or migrate legacy systems' },
    ],
    techStack: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS'],
    process: [
      { step: 1, title: 'Discovery', description: 'Map existing workflows, pain points and goals.' },
      { step: 2, title: 'Architecture', description: 'Design the system diagram, data model and API contracts.' },
      { step: 3, title: 'Iterative Build', description: 'Agile sprints with continuous integration and testing.' },
      { step: 4, title: 'Handover', description: 'Documentation, training and ongoing support options.' },
    ],
    faqs: [
      { question: 'Who owns the code?', answer: 'You do. On final payment, full source code and IP ownership transfers to you.' },
    ],
    cta: 'Scope your project',
  },
  {
    slug: 'ai-integration',
    title: 'AI Integration',
    icon: 'brain',
    shortDescription: 'Bring AI into your product — sensibly, effectively, measurably.',
    description:
      'We integrate large language models, intelligent chatbots and AI agents into your existing products and workflows. No hype — just practical AI that solves real business problems and delivers measurable ROI.',
    features: [
      'LLM-powered features using OpenAI, Claude and open-source models',
      'Document Q&A over your proprietary business data (RAG)',
      'AI agents that automate multi-step research and decision tasks',
      'WhatsApp and website chatbots trained on your content',
      'Custom AI pipelines for classification, extraction and summarisation',
    ],
    subServices: [
      { name: 'Chatbots', description: 'Conversational AI for your website or WhatsApp' },
      { name: 'LLM Features', description: 'Copilots, summarisers and generators built into your app' },
      { name: 'AI Agents', description: 'Autonomous agents that browse, research and act' },
      { name: 'Document Q&A (RAG)', description: 'Chat with your contracts, SOPs or product docs' },
    ],
    techStack: ['OpenAI', 'Claude', 'LangChain', 'Python', 'Node.js', 'Pinecone', 'PostgreSQL'],
    process: [
      { step: 1, title: 'Use-case Audit', description: 'Identify where AI delivers the highest ROI in your workflow.' },
      { step: 2, title: 'Prototype', description: 'Build and test a fast proof-of-concept with real data.' },
      { step: 3, title: 'Production Build', description: 'Productionise, secure, monitor and optimise.' },
      { step: 4, title: 'Iteration', description: 'Monitor performance, retrain and improve over time.' },
    ],
    faqs: [
      { question: 'Is my business data safe?', answer: 'Yes. We architect RAG systems so your data stays on your infrastructure and is never sent to external model providers without your explicit consent.' },
    ],
    cta: 'Explore AI for your business',
  },
  {
    slug: 'business-automation',
    title: 'Business Automation',
    icon: 'zap',
    shortDescription: 'Automate the repetitive; free your team for the work that matters.',
    description:
      'We map your manual processes and rebuild them as automated workflows — saving hours of staff time every week. From WhatsApp follow-ups to ERP synchronisation, we connect your tools and make them work together.',
    features: [
      'WhatsApp and email automation sequences',
      'CRM and ERP workflow automation',
      'Internal approval and notification pipelines',
      'Automated reporting and dashboard generation',
      'Scheduled data sync across your software stack',
    ],
    subServices: [
      { name: 'Workflow Automation', description: 'Trigger-based flows across your tool stack (n8n, Zapier, custom)' },
      { name: 'WhatsApp / Email Automation', description: 'Automated follow-ups, reminders and broadcasts' },
      { name: 'CRM/ERP Integrations', description: 'Connect Zoho, Salesforce, Tally, SAP and more' },
      { name: 'Dashboards & Internal Tools', description: 'Retool-style ops dashboards built custom' },
    ],
    techStack: ['Node.js', 'Python', 'n8n', 'PostgreSQL', 'REST APIs', 'WhatsApp Business API'],
    process: [
      { step: 1, title: 'Process Mapping', description: 'Document every manual step and identify automation wins.' },
      { step: 2, title: 'Solution Design', description: 'Choose the right tools and architect the flow.' },
      { step: 3, title: 'Build & Test', description: 'Implement automations with edge-case coverage.' },
      { step: 4, title: 'Monitor', description: 'Live monitoring, error alerts and ongoing optimisation.' },
    ],
    faqs: [],
    cta: 'Automate your workflow',
  },
  {
    slug: 'seo-digital-marketing',
    title: 'SEO & Digital Marketing',
    icon: 'trending-up',
    shortDescription: 'Rank higher, reach further, convert better.',
    description:
      'Growth that compounds. We combine technical SEO, content strategy and paid advertising to drive qualified traffic and turn it into revenue — with transparent monthly reporting so you always know what\'s working.',
    features: [
      'Technical SEO audit and implementation',
      'Keyword research and content strategy',
      'On-page and off-page optimisation',
      'Google Ads and Meta Ads management',
      'Monthly performance reports with actionable insights',
    ],
    subServices: [
      { name: 'SEO Services', description: 'Technical, on-page and content SEO' },
      { name: 'Social Media Optimisation', description: 'Profile, content and engagement strategy' },
      { name: 'Paid Advertising', description: 'Google, Meta and LinkedIn ads management' },
      { name: 'Brand Management', description: 'Online reputation and brand identity' },
      { name: 'Data Analytics', description: 'GA4, Search Console and custom dashboards' },
    ],
    techStack: ['Google Analytics 4', 'Search Console', 'Ahrefs', 'Semrush', 'Google Ads', 'Meta Ads'],
    process: [
      { step: 1, title: 'Audit', description: 'Full technical SEO and competitor gap analysis.' },
      { step: 2, title: 'Strategy', description: 'Keyword roadmap, content calendar and ad strategy.' },
      { step: 3, title: 'Execute', description: 'Implement changes, publish content, launch campaigns.' },
      { step: 4, title: 'Report', description: 'Monthly report with rankings, traffic and conversion data.' },
    ],
    faqs: [],
    cta: 'Start growing your traffic',
  },
  {
    slug: 'hosting-maintenance',
    title: 'Hosting & Maintenance',
    icon: 'server',
    shortDescription: 'Worry-free hosting, security and support — always on.',
    description:
      'Your site stays fast, secure and up. We handle managed cloud hosting, SSL certificates, daily backups, uptime monitoring and security patches so you never have to think about infrastructure.',
    features: [
      'Managed cloud hosting (AWS / Vercel / Cloudflare)',
      'Free SSL certificate and automatic renewal',
      'Daily automated backups with 30-day retention',
      '99.9% uptime monitoring with instant alerts',
      'Monthly security scans and software updates',
    ],
    subServices: [
      { name: 'Managed Hosting', description: 'Cloud infrastructure fully managed by our team' },
      { name: 'SSL & Security', description: 'Certificate management and security hardening' },
      { name: 'Backups', description: 'Daily automated backups with fast restore capability' },
      { name: 'Uptime Monitoring', description: '24/7 monitoring with instant incident alerts' },
      { name: 'Ongoing Support', description: 'Minor content updates, bug fixes and priority support' },
    ],
    techStack: ['AWS', 'Vercel', 'Cloudflare', 'Docker', 'Nginx', 'Let\'s Encrypt'],
    process: [
      { step: 1, title: 'Setup', description: 'Configure hosting environment and deploy your project.' },
      { step: 2, title: 'Secure', description: 'SSL, firewall rules, security headers and access controls.' },
      { step: 3, title: 'Monitor', description: 'Uptime checks, error tracking and performance monitoring.' },
      { step: 4, title: 'Maintain', description: 'Regular updates, patches and proactive improvements.' },
    ],
    faqs: [],
    cta: 'Get worry-free hosting',
  },
];

export type { Service };
