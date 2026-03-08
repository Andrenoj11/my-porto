import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    company: 'PT Permodalan Nasional Madani',
    role: 'Software Engineer',
    period: 'May 2024 – Present',
    domain: 'Financial Services / Internal Products',
    summary:
      'Building internal digital products that support operational workflows, form-heavy processes, and mobile experiences.',
    highlights: [
      'Built complex web and mobile workflows with React, React Native, TypeScript, and Redux Toolkit.',
      'Handled reusable input systems, validation flows, document uploads, and data-driven UI states.',
      'Worked on maintainable component patterns for business-critical internal systems.',
    ],
  },
  {
    company: 'CODE.ID',
    role: 'Frontend Engineer',
    period: 'Jun 2023 – May 2024',
    domain: 'Banking / Digital Consulting',
    summary:
      'Contributed to BI-FAST digital banking interfaces for UOB and built reusable React components in a regulated environment.',
    highlights: [
      'Supported real-time transfer journeys in a banking context.',
      'Built reusable, secure UI components aligned with compliance and UX standards.',
      'Participated in refactoring initiatives to improve component reuse and consistency.',
    ],
  },
]
