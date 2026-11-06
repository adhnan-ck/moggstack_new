/**
 * seoSchemas.ts — Structured Data (JSON-LD) generators for Schema.org
 *
 * Produces structured data for:
 * 1. Organization / ProfessionalService & SoftwareApplication (Homepage brand entity)
 * 2. Service schema (Service landing pages)
 * 3. BreadcrumbList schema (Hierarchical navigation)
 * 4. WebSite schema (SearchAction)
 */

import { site } from '@/data/site';

export interface ServiceSchemaOptions {
  name: string;
  description: string;
  url?: string;
  serviceType?: string;
  areaServed?: string[];
  image?: string;
}

export interface SoftwareApplicationOptions {
  name?: string;
  description?: string;
  applicationCategory?: string;
  operatingSystem?: string;
  url?: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Primary Organization and Local Business Schema
 * Identifies "Moggstack Technologies" as the primary brand entity.
 */
export function getOrganizationSchema() {
  const socialLinks = Object.values(site.socials).filter(Boolean);

  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    '@id': `${site.url}/#organization`,
    name: site.name,
    alternateName: [site.shortName, 'Moggstack Tech', 'Moggstack Software'],
    legalName: site.name,
    url: site.url,
    logo: {
      '@type': 'ImageObject',
      '@id': `${site.url}/#logo`,
      url: `${site.url}/logo.png`,
      caption: site.name,
    },
    image: `${site.url}${site.ogImage}`,
    description: site.description,
    email: site.email,
    telephone: site.phoneRaw,
    priceRange: '₹₹',
    currenciesAccepted: 'INR, USD, EUR, GBP, AED',
    paymentAccepted: 'Bank Transfer, UPI, Credit Card',
    openingHours: 'Mo-Fr 09:00-18:00',
    areaServed: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'United Arab Emirates' },
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: site.phoneRaw,
        contactType: 'customer service',
        email: site.email,
        areaServed: ['IN', 'US', 'GB', 'AE'],
        availableLanguage: ['English', 'Hindi'],
      },
    ],
    sameAs: socialLinks,
    knowsAbout: [
      'Custom Software Development',
      'Web Application Development',
      'Mobile App Development (iOS & Android)',
      'Enterprise Resource Planning (ERP)',
      'Customer Relationship Management (CRM)',
      'Artificial Intelligence Integration',
      'Intelligent Chatbots & AI Agents',
      'Business Process Automation',
      'Search Engine Optimization (SEO)',
      'Cloud Hosting & DevOps Architecture',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software Solutions & Digital Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website & Web Application Development',
            description: 'Fast, responsive, SEO-ready websites and scalable web applications.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mobile App Development',
            description: 'Native iOS & Android apps and cross-platform Flutter/React Native applications.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Software, CRM & ERP Development',
            description: 'Bespoke software systems engineered around exact business workflows.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Integration & Intelligent Chatbots',
            description: 'LLMs, AI agents, WhatsApp bots, and automated customer intelligence.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Business Process Automation',
            description: 'Automated workflow pipelines, CRM/ERP synchronization, and staff time savers.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO & Digital Marketing',
            description: 'Technical SEO, keyword roadmaps, and organic search ranking growth.',
          },
        },
      ],
    },
  };
}

/**
 * WebSite schema for search indexing and sitelinks
 */
export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    url: site.url,
    name: site.name,
    alternateName: site.shortName,
    description: site.description,
    publisher: {
      '@id': `${site.url}/#organization`,
    },
    inLanguage: 'en-IN',
  };
}

/**
 * SoftwareApplication schema for custom digital products or platforms
 */
export function getSoftwareApplicationSchema(options?: SoftwareApplicationOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: options?.name || 'Moggstack Custom Software Suite',
    description:
      options?.description ||
      'Scalable enterprise web applications, mobile platforms, and business automation software built by Moggstack Technologies.',
    applicationCategory: options?.applicationCategory || 'BusinessApplication',
    operatingSystem: options?.operatingSystem || 'Web, iOS, Android, Cloud',
    url: options?.url ? (options.url.startsWith('http') ? options.url : `${site.url}${options.url}`) : site.url,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
    author: {
      '@id': `${site.url}/#organization`,
    },
  };
}

/**
 * Service schema generator for individual service pages
 */
export function getServiceSchema(service: ServiceSchemaOptions) {
  const serviceUrl = service.url
    ? service.url.startsWith('http')
      ? service.url
      : `${site.url}${service.url}`
    : site.url;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    serviceType: service.serviceType || service.name,
    description: service.description,
    url: serviceUrl,
    image: service.image ? (service.image.startsWith('http') ? service.image : `${site.url}${service.image}`) : `${site.url}${site.ogImage}`,
    provider: {
      '@id': `${site.url}/#organization`,
    },
    areaServed: (service.areaServed || ['IN', 'US', 'GB', 'AE', 'Global']).map((area) => ({
      '@type': 'Country',
      name: area,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.name,
    },
  };
}

/**
 * BreadcrumbList schema generator for navigational hierarchy
 */
export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${site.url}${item.url}`,
    })),
  };
}

