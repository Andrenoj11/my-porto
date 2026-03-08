import type { Project } from '@/types'

export const projects: Project[] = [
  {
    title: 'MT Mobile App',
    slug: 'mt-mobile-app',
    summary:
      'A mobile application supporting internal operational workflows, dynamic forms, file uploads, and validation-heavy processes.',
    impact:
      'Improved operational flow consistency by turning manual steps into guided mobile workflows.',
    stack: ['React Native', 'TypeScript', 'Redux Toolkit', 'Formik', 'Yup'],
    tags: ['mobile', 'internal tools', 'forms', 'react native', 'fintech'],
    links: {},
  },
  {
    title: 'BI-FAST Banking Interface',
    slug: 'bi-fast-banking-interface',
    summary:
      'Digital banking interface for real-time interbank transfer flows in a regulated financial environment.',
    impact:
      'Supported a secure and consistent frontend experience for business-critical banking flows.',
    stack: ['React', 'TypeScript', 'Component Architecture'],
    tags: ['banking', 'fintech', 'frontend', 'react', 'payments'],
    links: {},
  },
  {
    title: 'Collateral Management Flow',
    slug: 'collateral-management-flow',
    summary:
      'A modular form system for handling collateral data input, geolocation, validation, and media attachments.',
    impact:
      'Reduced complexity by splitting a large business flow into smaller reusable interfaces and logic.',
    stack: ['React Native', 'TypeScript', 'Formik', 'Yup'],
    tags: ['mobile', 'forms', 'validation', 'internal tools'],
    links: {},
  },
  {
    title: 'Barbershop Website Concept',
    slug: 'barbershop-website-concept',
    summary:
      'A modern website concept for a local business with service highlights, contact-first conversion flow, and CMS-ready structure.',
    impact:
      'Turned a simple brochure-style website into a conversion-focused local business presence.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    tags: ['website', 'business', 'next.js', 'frontend'],
    links: {},
  },
]
