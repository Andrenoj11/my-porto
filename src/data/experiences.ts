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
]
