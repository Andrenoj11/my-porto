import { SEARCHABLE_KEYWORDS } from './constants'

export const extractKeywords = (question: string) => {
  const input = question.toLowerCase()
  return SEARCHABLE_KEYWORDS.filter((keyword) => input.includes(keyword))
}
