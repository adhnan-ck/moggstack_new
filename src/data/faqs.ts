export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: 'How much does a website cost in India?',
    answer:
      'Our websites start from ₹7,999 for a standard 5-page business site and go up based on features, pages and complexity. E-commerce stores and web applications are scoped separately. We provide a fixed-price quote before starting — no hidden fees.',
  },
  {
    question: 'How long does it take to build a website or app?',
    answer:
      'A standard website takes 5–14 business days. E-commerce stores and web applications typically take 3–6 weeks. Mobile apps are 8–16 weeks depending on complexity. We provide a clear timeline at the start of every project.',
  },
  {
    question: 'Who owns the code and design when the project is done?',
    answer:
      'You do — completely. On final payment, full source code, design files and all intellectual property transfer to you. No lock-in, no licensing fees.',
  },
  {
    question: "Do you provide hosting? What's included?",
    answer:
      'Yes. Our Standard and Growth plans include 1 year of managed hosting and SSL. We use AWS, Vercel and Cloudflare for reliable, fast infrastructure. After year one, hosting continues at ₹499/month with our Hosting & Care plan.',
  },
  {
    question: 'How many revisions do I get?',
    answer:
      'Standard plans include 2 revision rounds; Growth plans include 3; Scale and Custom are agreed per project. Revisions are defined upfront so there\'s no confusion mid-project.',
  },
  {
    question: 'What does ongoing maintenance and support include?',
    answer:
      'Our Hosting & Care plan at ₹499/month covers hosting, SSL, daily backups, uptime monitoring and minor content edits. Growth and Scale plans include 30 and 60 days of post-launch support respectively. Longer-term support retainers are available.',
  },
  {
    question: 'Can you integrate AI features into my existing product?',
    answer:
      'Yes. We integrate LLMs (OpenAI, Claude, open-source models) into existing products via API. Common use cases include chatbots, document Q&A, automated classification and AI-powered workflows. We start with a use-case audit to ensure AI adds real value.',
  },
  {
    question: 'What are your payment terms?',
    answer:
      '50% advance payment to begin, 50% on delivery and your approval. For larger projects (₹2L+), we offer milestone-based payment schedules. We accept bank transfer, UPI and all major cards.',
  },
];
