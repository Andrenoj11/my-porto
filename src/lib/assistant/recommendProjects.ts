import { projects } from '@/data/projects'

export const recommendProjects = (keywords: string[]) => {
  if (keywords.length === 0) {
    return projects.slice(0, 3)
  }

  const ranked = projects
    .map((project) => {
      const haystack = [...project.tags, ...project.stack].join(' ').toLowerCase()
      const score = keywords.reduce((total, keyword) => total + (haystack.includes(keyword) ? 1 : 0), 0)
      return { project, score }
    })
    .sort((a, b) => b.score - a.score)

  const filtered = ranked.filter((item) => item.score > 0).map((item) => item.project)
  return filtered.length > 0 ? filtered.slice(0, 3) : projects.slice(0, 3)
}
