// TODO: Replace placeholder testimonials with real client testimonials before launch.
// Do NOT use this placeholder data in production.

export interface Testimonial {
  id: string;
  name: string; // TODO: replace with real client name
  role: string; // TODO: replace with real role/company
  content: string; // TODO: replace with real testimonial
  rating: number; // TODO: replace with verified rating
  avatar?: string; // TODO: add real avatar
}

export const testimonials: Testimonial[] = [
  {
    id: 'placeholder-1',
    name: 'Client Name', // TODO: replace
    role: 'Founder, Company Name', // TODO: replace
    content:
      'Placeholder testimonial. Replace this with a genuine quote from your client describing the value they received and the quality of the work.', // TODO: replace
    rating: 5, // TODO: verify with client
  },
  {
    id: 'placeholder-2',
    name: 'Client Name', // TODO: replace
    role: 'CEO, Company Name', // TODO: replace
    content:
      'Placeholder testimonial. Replace this with a genuine quote from your client describing the value they received and the quality of the work.', // TODO: replace
    rating: 5, // TODO: verify with client
  },
  {
    id: 'placeholder-3',
    name: 'Client Name', // TODO: replace
    role: 'Director, Company Name', // TODO: replace
    content:
      'Placeholder testimonial. Replace this with a genuine quote from your client describing the value they received and the quality of the work.', // TODO: replace
    rating: 5, // TODO: verify with client
  },
];

// TODO: Replace with real client logo files in public/clients/
export interface ClientLogo {
  name: string;
  logo: string; // path to logo file
}

export const clientLogos: ClientLogo[] = [
  // TODO: Add real client logos
  // { name: 'Client Name', logo: '/clients/client-name.svg' },
];
