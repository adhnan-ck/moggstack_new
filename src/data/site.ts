/**
 * site.ts — Central store for all editable business information.
 * Replace every TODO value before launch.
 */

export const site = {
  name: 'Moggstack Technologies',
  shortName: 'Moggstack',
  tagline: 'Solutions built to mog.',
  description:
    'Software solutions and digital development company specializing in modern websites, mobile apps (iOS & Android), custom software (CRM & ERP), AI integration & chatbots, business process automation, SEO, and cloud hosting.',
  url: 'https://moggstack.in',

  // ── Contact ──────────────────────────────────────────────────────────────
  email: 'adhnanck07@gmail.com',
  phone: '+91 72040 59727',
  phoneRaw: '+917204059727',
  whatsapp: '917204059727',
  whatsappMessage: 'Hi%20Moggstack%2C%20I%27d%20like%20to%20discuss%20a%20project.',
  address: '',
  // workingHours: 'Mon – Fri, 9:00 AM – 6:00 PM IST',

  // ── Social ────────────────────────────────────────────────────────────────
  socials: {
    linkedin: 'https://linkedin.com/company/moggstack',
    github: 'https://github.com/moggstack',
    instagram: 'https://instagram.com/moggstack',
    twitter: 'https://x.com/moggstack',
    youtube: 'https://youtube.com/@moggstack',
  },

  // ── Stats (shown in stats strip) ─────────────────────────────────────────
  // TODO: update with real numbers before launch
  stats: [
    { value: 30, suffix: '+', label: 'Projects Delivered' },
    { value: 3, suffix: '+', label: 'Years of Experience' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
    { value: 1, suffix: 'h', label: 'Avg. Response Time' },
  ],

  // ── SEO defaults ─────────────────────────────────────────────────────────
  ogImage: '/og-image.png',
  twitterHandle: '@moggstack', // TODO: replace

  // ── Analytics flags ──────────────────────────────────────────────────────
  // Set PUBLIC_GA4_ID or PUBLIC_PLAUSIBLE_DOMAIN in .env to enable
};

export type Stat = (typeof site.stats)[number];
