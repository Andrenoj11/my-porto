import { buildResponse } from './buildResponse'
import { detectIntent } from './detectIntent'

export const askAssistant = (question: string) => {
  const intent = detectIntent(question)
  return buildResponse(question, intent)
}
