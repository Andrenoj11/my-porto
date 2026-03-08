import { allSkills } from '@/data/skills'

export const INTENT_KEYWORDS = {
  summary: ['summarize', 'summary', 'who is', 'about', 'profile', 'introduce'],
  skills: ['skill', 'stack', 'tech', 'technology', 'frontend', 'backend', 'react', 'react native', 'go'],
  experience: ['experience', 'worked', 'work', 'background', 'career', 'banking'],
  projects: ['project', 'build', 'built', 'portfolio', 'show me'],
  recommendation: ['recommend', 'best fit', 'relevant', 'match', 'suitable'],
  contact: ['contact', 'email', 'reach', 'linkedin', 'github'],
}

export const DOMAIN_KEYWORDS = ['banking', 'fintech', 'mobile', 'internal tools', 'forms', 'frontend', 'backend']

export const SEARCHABLE_KEYWORDS = [...allSkills.map((item) => item.toLowerCase()), ...DOMAIN_KEYWORDS]
