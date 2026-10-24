export interface Solution {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  benefits: Array<{ title: string; description: string }>;
  icon: string;
  accentColor: string;
}

export const solutions: Solution[] = [
  {
    slug: 'hrms-portal',
    title: 'HRMS Portal',
    category: 'Enterprise',
    shortDescription: 'A complete HR management system for modern teams.',
    description:
      'Centralise every aspect of people management — from onboarding to payroll — in one clean, powerful platform built to your exact workflows.',
    icon: 'users',
    accentColor: '#5B5BF0',
    benefits: [
      { title: 'Employee Management & Access', description: 'Centralised profiles, roles and permission levels for every team member.' },
      { title: 'Leave & Attendance Tracking', description: 'Real-time attendance logs, leave balances and approval workflows.' },
      { title: 'Task Assignment & Performance Tracking', description: 'Assign goals, track progress and run performance review cycles.' },
      { title: 'Expense Claims & Approvals', description: 'Submit, review and approve expense reports with full audit trails.' },
      { title: 'Automated Payslip Generation', description: 'Generate accurate, compliant payslips automatically every pay cycle.' },
    ],
  },
  {
    slug: 'employee-onboarding',
    title: 'Employee Onboarding Platform',
    category: 'Enterprise',
    shortDescription: 'First-day ready in minutes, not days.',
    description:
      'Replace scattered spreadsheets and email chains with a structured, automated onboarding flow that handles documents, IDs and verifications before the new hire walks in.',
    icon: 'user-plus',
    accentColor: '#FF6B35',
    benefits: [
      { title: 'Centralised Employee Data', description: 'One source of truth for personal details, documents and history.' },
      { title: 'Automatic ID & Profile Creation', description: 'Employee IDs, email accounts and system access provisioned instantly.' },
      { title: 'Email-link Verification Workflow', description: 'Secure, auditable verification before access is granted.' },
      { title: 'Auto-generated Documents', description: 'Joining letters, PF forms and declarations generated and dispatched automatically.' },
      { title: 'Faster, Error-free Onboarding', description: 'Cut onboarding time from days to hours and eliminate manual data-entry errors.' },
    ],
  },
  {
    slug: 'restaurant-pos',
    title: 'Restaurant Management & Billing (POS)',
    category: 'Hospitality',
    shortDescription: 'A full restaurant OS — from table to report.',
    description:
      'A connected suite covering the entire restaurant operation: captain ordering apps, lightning-fast POS billing, back-office portal and real-time inventory — all in one system.',
    icon: 'utensils',
    accentColor: '#F59E0B',
    benefits: [
      { title: 'Captain & Order Apps', description: 'Waitstaff take orders on tablet with instant kitchen notifications.' },
      { title: 'Fast POS Billing', description: 'Split payments, table management and bill printing in seconds.' },
      { title: 'Owner & Cashier Web Portal', description: 'Separate dashboards tailored to each role\'s responsibilities.' },
      { title: 'Real-time Reports', description: 'Live sales, table turnover and peak-hour analytics at your fingertips.' },
      { title: 'Inventory & Menu Control', description: 'Track stock levels, set alerts and update your menu instantly.' },
    ],
  },
  {
    slug: 'logistics-platform',
    title: 'Logistics Management Platform',
    category: 'Logistics',
    shortDescription: 'End-to-end order visibility from pickup to doorstep.',
    description:
      'A purpose-built logistics OS that connects your operations control room, drivers on the ground and customers waiting for updates — every step tracked in real time.',
    icon: 'truck',
    accentColor: '#10B981',
    benefits: [
      { title: 'End-to-end Order Management', description: 'Create, assign and track every order through its full lifecycle.' },
      { title: 'Operations Control Panel', description: 'Assign drivers, optimise routes and update statuses from a single dashboard.' },
      { title: 'Driver App with Delivery Confirmation', description: 'Mobile app for drivers with navigation, status updates and proof of delivery.' },
      { title: 'Admin Dashboard', description: 'Fleet overview, performance metrics and exception management.' },
      { title: 'Full Transparency', description: 'Real-time status visible to all stakeholders from order placement to delivery.' },
    ],
  },
  {
    slug: 'loan-management',
    title: 'Financial / Loan Management Platform',
    category: 'Fintech',
    shortDescription: 'Loan tracking and collections — accurate, automated, auditable.',
    description:
      'A secure financial platform for loan creation, repayment tracking and daily collection workflows — giving your team real-time visibility over every account.',
    icon: 'landmark',
    accentColor: '#6366F1',
    benefits: [
      { title: 'Loan Creation, Tracking & Repayment', description: 'Full loan lifecycle management with amortisation schedules.' },
      { title: 'Employee-based Collection Workflows', description: 'Assign collection agents to accounts with route planning.' },
      { title: 'Daily-collection (Pigmy) Integration', description: 'Support daily micro-collection schemes with automated reconciliation.' },
      { title: 'Automated Payment Tracking', description: 'Every payment logged, receipted and reconciled without manual entry.' },
      { title: 'Real-time Financial Visibility', description: 'Portfolio dashboards with overdue alerts, recovery rates and projections.' },
    ],
  },
  {
    slug: 'ecommerce-platform',
    title: 'E-commerce Platform',
    category: 'Retail',
    shortDescription: 'Your store, built to sell — and built to scale.',
    description:
      'A complete e-commerce solution covering everything from product catalogue and shopping cart to payment gateway and order fulfilment — designed for performance and growth.',
    icon: 'shopping-bag',
    accentColor: '#EC4899',
    benefits: [
      { title: 'Complete Store Setup', description: 'Product listings, categories, variants and search fully configured.' },
      { title: 'Smooth Shopping Experience', description: 'Fast, intuitive UX designed to maximise conversion rates.' },
      { title: 'Secure Payment Gateway Integration', description: 'Razorpay, Stripe, PayU and more — with fraud protection built in.' },
      { title: 'Order & Delivery Management', description: 'Track orders from placement to fulfilment with automated notifications.' },
      { title: 'Scalable Catalogue', description: 'Handle thousands of SKUs without performance degradation.' },
    ],
  },
  {
    slug: 'lms-platform',
    title: 'Learning Management Platform (LMS)',
    category: 'Education',
    shortDescription: 'Deliver, assess and certify — fully automated.',
    description:
      'A structured learning platform that handles video course delivery, assessment after each module, and instant certificate generation — no manual intervention required.',
    icon: 'graduation-cap',
    accentColor: '#8B5CF6',
    benefits: [
      { title: 'Chapter-wise Video Courses', description: 'Organised video modules with progress tracking per learner.' },
      { title: 'Automated Assessment', description: 'Quizzes triggered automatically after each chapter is completed.' },
      { title: 'Instant Certificate Generation', description: 'Branded certificates issued the moment a course is passed.' },
      { title: 'Accurate Evaluation', description: 'Anti-cheat controls and reliable scoring across all assessments.' },
      { title: 'Fully Automated Workflow', description: 'From enrolment to certification — zero manual admin required.' },
    ],
  },
  {
    slug: 'invoice-payment-platform',
    title: 'Invoice & Payment Management Platform',
    category: 'Finance',
    shortDescription: 'Get paid on time, every time — automatically.',
    description:
      'A smart invoicing platform that tracks milestones, sends automated reminders, confirms payments and generates final consolidated ledger invoices — keeping your cash flow healthy.',
    icon: 'file-text',
    accentColor: '#0EA5E9',
    benefits: [
      { title: 'Milestone-based Invoicing', description: 'Invoice against project milestones rather than arbitrary dates.' },
      { title: 'Automated Payment Tracking', description: 'Every payment recorded and matched to the correct invoice automatically.' },
      { title: 'Smart Due-date Reminders', description: 'Automated reminders sent before and after due dates — politely persistent.' },
      { title: 'Payment Confirmation & Status Updates', description: 'Instant notifications to both parties when payment is received.' },
      { title: 'Consolidated Ledger Invoice', description: 'Final project ledger summarising all milestones, payments and balances.' },
    ],
  },
  {
    slug: 'ai-chatbot-automation',
    title: 'AI Chatbot & Automation Suite',
    category: 'AI & Automation',
    shortDescription: 'Your 24/7 digital team member — on your website and WhatsApp.',
    description:
      'A complete AI-powered automation suite that handles lead capture, appointment booking, auto-replies and CRM sync across your website and WhatsApp — while you focus on closing deals.',
    icon: 'bot',
    accentColor: '#FF6B35',
    benefits: [
      { title: 'Website & WhatsApp Chatbot', description: 'AI assistant trained on your products, services and FAQs.' },
      { title: 'Lead Capture to CRM', description: 'Every enquiry automatically logged and categorised in your CRM.' },
      { title: 'Auto-replies & Sequences', description: 'Instant responses and follow-up sequences that feel human.' },
      { title: 'Appointment Booking', description: 'Calendar integration for automated scheduling without back-and-forth.' },
      { title: 'Reporting', description: 'Conversation analytics and lead quality reports for your team.' },
    ],
  },
];
