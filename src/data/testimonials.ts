export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  project: string;
  serviceCategory: string;
  content: string;
  rating: number;
  highlight?: string;
  avatarInitials: string;
  accentColor?: string;
  date?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'firoz-doctordestiny',
    name: 'Firoz H.S',
    role: 'Founder & Director',
    company: 'Doctor Destiny',
    project: 'MBBS Study Abroad Web Platform',
    serviceCategory: 'EdTech & Admissions Platform',
    content:
      'Moggstack built our complete Doctor Destiny MBBS study abroad platform from scratch. The interface is exceptionally clean, student counseling workflows are seamless, and our prospective medical student inquiries have grown exponentially. Their technical mastery and delivery speed are truly unmatched.',
    rating: 5,
    highlight: 'Streamlined student onboarding & 180% surge in inquiries',
    avatarInitials: 'FH',
    accentColor: '#5B5BF0',
    date: '2025',
  },
  {
    id: 'yaseen-lum-al-kareem',
    name: 'Yaseen CK',
    role: 'Founder & Owner',
    company: 'Lum Al Kareem',
    project: 'Luxury Fragrance E-Commerce Platform',
    serviceCategory: 'E-Commerce & Digital Storefront',
    content:
      'We wanted a digital storefront that reflected the artisanal elegance of Lum Al Kareem perfumes. Moggstack delivered a breathtaking e-commerce platform with fluid interactions, ultra-fast mobile navigation, and seamless checkout integrations. Direct online sales accelerated immediately after launch.',
    rating: 5,
    highlight: 'Flawless luxury shopping experience & boosted direct sales',
    avatarInitials: 'YC',
    accentColor: '#D97706',
    date: '2025',
  },
  {
    id: 'sooraj-ai-gcp',
    name: 'Sooraj V',
    role: 'AI & Engineering Lead',
    company: 'Fexora Intelligence Systems',
    project: 'AI RAG Chatbot & GCP Email Capture System',
    serviceCategory: 'AI Engineering & Cloud Automation',
    content:
      'Working with Moggstack on our AI RAG chatbot and automated email lead capture architecture was brilliant. Their deep knowledge of vector search pipelines, LLM prompt orchestration, and Google Cloud Platform deployment saved us weeks of engineering time. The chatbot response accuracy is spot on.',
    rating: 5,
    highlight: 'Sub-500ms RAG responses & automated GCP lead capture',
    avatarInitials: 'SV',
    accentColor: '#10B981',
    date: '2025',
  },
  {
    id: 'aditya-tailor-crm',
    name: 'Aditya Sharma',
    role: 'Managing Director',
    company: 'Vastra Atelier & Tailors',
    project: 'Custom Tailoring & Inventory CRM Platform',
    serviceCategory: 'Custom ERP & Inventory Management',
    content:
      'Managing tailor task allocations, bespoke customer measurements, fabric inventory, and multi-stage delivery timelines used to be completely manual. Moggstack built us an intuitive, custom CRM platform that gives us real-time visibility over products, tailor progress, and inventory levels. An absolute game-changer.',
    rating: 5,
    highlight: 'Replaced manual chaos with a unified tailor & inventory CRM',
    avatarInitials: 'AS',
    accentColor: '#8B5CF6',
    date: '2025',
  },
];

export interface ClientLogo {
  name: string;
  category: string;
}

export const clientBadges: ClientLogo[] = [
  { name: 'Doctor Destiny', category: 'MBBS Education Abroad' },
  { name: 'Lum Al Kareem', category: 'Luxury Fragrances' },
  { name: 'Fexora Intelligence Systems', category: 'GenAI & Cloud' },
  { name: 'Vastra Atelier', category: 'Custom CRM & Retail' },
];
