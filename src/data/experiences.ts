import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    company: 'PT Permodalan Nasional Madani',
    role: 'Software Engineer',
    period: 'May 2024 – Present',
    domain: 'Financial Services / Internal Products',
    summary:
      'Indonesia state-owned ultra-microfinance company (FY2024 revenue ~IDR 15.84T / ~USD 0.93B)',
    highlights: [
      'Took a “single-maintainer” risk and removed it. Owned a mission-critical internal product area as the only frontend engineer, then built and led the function from 1 → 4 engineers by defining domain ownership, onboarding playbooks, and a predictable delivery cadence—enabling parallel shipping without quality drift.',
      'Turned weekly fire-drills into steady releases. Introduced a pragmatic release-safety system (regression hot-spot map, pre-flight checks, rollback-ready discipline), shifting urgent hotfixes from weekly → ~1–2/month and reducing post-release incidents by ~30–40% on key workflows.',
      'Signature moment: unblocked operations under pressure. When a critical workflow started triggering recurring production issues, led cross-team triage, shipped a safe patch within 48 hours, and hardened the workflow afterward—eliminating repeat incidents in subsequent releases.',
      'Made the product self-explanatory instead of tribal. Replaced undocumented UI behaviors with a single set of rules and reusable patterns, cutting QA back-and-forth loops by ~20–30% and shortening feature delivery time by ~15–20%.',
      'Eliminated recurring operational pain. Mapped real end-to-end financing/reporting journeys with ops teams and redesigned edge-case handling, reducing support escalations by ~25–35% and saving ~6–10 hours/week of manual reconciliati,on.',
      'Made performance a product feature. Targeted the slowest user interactions and rebuilt the worst offenders, improving perceived responsiveness by 25–35% and increasing task completion speed by ~10–15% on core journeys.',
    ],
  },
  {
    company: 'CODE.ID',
    role: 'Frontend Engineer',
    period: 'Jun 2023 – May 2024',
    domain: 'Digital Consulting / Banking Platforms',
    summary:
      'Digital consulting firm delivering large-scale banking platforms, including UOB’s BI-FAST real-time interbank transfer experience in Indonesia.',
    highlights: [
      'Helped ship a real-time interbank transfer experience for UOB on Indonesia’s BI-FAST rail, translating strict compliance and security constraints into a flow that felt fast, clear, and low-error—even under edge-case conditions.',
      'Signature moment: saved a go-live window. During late-stage testing, uncovered a failure path where retry/timeout behavior could mislead users after a transfer attempt; led a cross-team fix across UI messaging and recovery flows, preventing a high-risk release blocker and stabilizing the end-to-end journey.',
      'Built a bank-grade interaction system spanning validation, secure input patterns, error handling, and recovery states, which was adopted across ~5–7 modules so teams could deliver new screens without re-inventing critical behaviors.',
      'Hardened the UI against real production scenarios such as network drops, partial failures, delayed confirmations, and state mismatches, reducing repeat issues and making transfer outcomes more unambiguous and auditable for both users and operations.',
      'Participated in a cross-module refactor to standardize patterns and reduce implementation drift, lowering future change risk and making feature delivery more predictable across multiple banking surfaces.',
    ],
  },
  {
    company: 'Venturemind Labs',
    role: 'Frontend Engineer',
    period: 'Aug 2022 – May 2023',
    domain: 'Technology Consulting / Product Studio',
    summary:
      'Technology consulting and product studio delivering enterprise-ready client applications with a focus on usability, performance, and maintainability.',
    highlights: [
      'Designed and delivered enterprise-ready frontend features for client-facing applications, balancing usability, performance, and long-term maintainability.',
      'Integrated third-party APIs and services in a secure and scalable manner, reducing feature delivery lead time by ~20%.',
      'Refactored component structures and interaction patterns to improve application stability and perceived performance across key user journeys.',
    ],
  },
  {
    company: 'Rebelworks',
    role: 'Frontend Engineer',
    period: 'Feb 2021 – Feb 2023',
    domain: 'Digital Agency / Enterprise and Consumer Web Platforms',
    summary:
      'Digital agency delivering enterprise and consumer web platforms in a fast-paced, multi-project environment.',
    highlights: [
      'Delivered frontend features across multiple client projects while balancing short-term delivery needs with long-term code quality.',
      'Implemented unit and end-to-end testing using Cypress, increasing regression coverage and reducing post-release bugs by ~35%.',
      'Collaborated with product, design, and engineering teams to define lean, well-scoped deliverables, helping teams avoid unnecessary technical complexity.',
    ],
  },
]
