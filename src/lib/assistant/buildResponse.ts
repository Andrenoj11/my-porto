import { experiences } from '@/data/experiences'
import { profile } from '@/data/profile'
import { projects } from '@/data/projects'
import { allSkills } from '@/data/skills'
import type { AssistantIntent } from '@/types'
import { extractKeywords } from './extractKeywords'
import { recommendProjects } from './recommendProjects'

const buildSummary = () =>
  `${profile.name} is a ${profile.title} based in ${profile.location}. ${profile.summary} ${profile.longSummary}`

const buildSkills = (keywords: string[]) => {
  const matched = keywords.length
    ? allSkills.filter((skill) =>
        keywords.some((keyword) => skill.toLowerCase().includes(keyword))
      )
    : allSkills

  const skills = matched.length > 0 ? matched : allSkills
  return `${profile.name} has experience with ${skills.join(', ')}.`
}

const buildExperience = (keywords: string[]) => {
  const matched = experiences.filter((experience) => {
    const haystack =
      `${experience.domain} ${experience.summary} ${experience.highlights.join(' ')}`.toLowerCase()
    return keywords.length === 0 || keywords.some((keyword) => haystack.includes(keyword))
  })

  const entries = matched.length > 0 ? matched : experiences
  return entries
    .map(
      (experience) =>
        `${experience.role} at ${experience.company} (${experience.period}) — ${experience.summary}`
    )
    .join('\n\n')
}

const buildProjects = (keywords: string[]) => {
  const selected = recommendProjects(keywords)
  return selected
    .map(
      (project, index) =>
        `${index + 1}. ${project.title} — ${project.summary} Stack: ${project.stack.join(', ')}. Impact: ${project.impact}`
    )
    .join('\n\n')
}

const buildRecommendation = (keywords: string[]) => {
  const selected = recommendProjects(keywords)
  return selected
    .map(
      (project, index) =>
        `${index + 1}. ${project.title} is relevant because it covers ${project.tags.join(', ')} and uses ${project.stack.join(', ')}.`
    )
    .join('\n\n')
}

const buildContact = () =>
  `You can reach ${profile.name} via email at ${profile.email}, GitHub at ${profile.socials.github}, or LinkedIn at ${profile.socials.linkedin}.`

export const buildResponse = (question: string, intent: AssistantIntent) => {
  const keywords = extractKeywords(question)

  switch (intent) {
    case 'summary':
      return buildSummary()
    case 'skills':
      return buildSkills(keywords)
    case 'experience':
      return buildExperience(keywords)
    case 'projects':
      return buildProjects(keywords)
    case 'recommendation':
      return buildRecommendation(keywords)
    case 'contact':
      return buildContact()
    default:
      return `I can help with ${profile.name}'s summary, skills, experience, projects, or contact details. Try asking things like “Show me his projects” or “Does he have banking experience?”`
  }
}
