export type PromptChip = {
  label: string
  question: string
}

export type Project = {
  title: string
  slug: string
  summary: string
  impact: string
  stack: string[]
  tags: string[]
  links: {
    demo?: string
    repo?: string
  }
}

export type Experience = {
  company: string
  role: string
  period: string
  domain: string
  summary: string
  highlights: string[]
}

export type Profile = {
  name: string
  title: string
  tagline: string
  location: string
  summary: string
  longSummary: string
  email: string
  socials: {
    github: string
    linkedin: string
  }
}

export type AssistantIntent =
  | 'summary'
  | 'skills'
  | 'experience'
  | 'projects'
  | 'recommendation'
  | 'contact'
  | 'fallback'

export type AssistantMessage = {
  id: string
  role: 'user' | 'assistant'
  content: string
}
