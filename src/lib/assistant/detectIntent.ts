import type { AssistantIntent } from '@/types'
import { INTENT_KEYWORDS } from './constants'

export const detectIntent = (question: string): AssistantIntent => {
  const input = question.toLowerCase()

  for (const [intent, keywords] of Object.entries(INTENT_KEYWORDS)) {
    if (keywords.some((keyword) => input.includes(keyword))) {
      return intent as AssistantIntent
    }
  }

  return 'fallback'
}
