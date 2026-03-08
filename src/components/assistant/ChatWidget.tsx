'use client'

import { MessageSquareText } from 'lucide-react'
import { useMemo, useState } from 'react'

import { promptChips } from '@/data/prompts'
import { askAssistant } from '@/lib/assistant'
import type { AssistantMessage } from '@/types'
import { ChatInput } from './ChatInput'
import { ChatMessage } from './ChatMessage'
import { PromptChips } from './PromptChips'

const initialMessage: AssistantMessage = {
  id: 'welcome',
  role: 'assistant',
  content:
    'Hi, I am Kurniawan\'s portfolio assistant. Ask me about skills, experience, projects, or ask for a quick summary.',
}

export const ChatWidget = () => {
  const [messages, setMessages] = useState<AssistantMessage[]>([initialMessage])

  const handleAsk = (question: string) => {
    const userMessage: AssistantMessage = {
      id: crypto.randomUUID(),
      role: 'user',
      content: question,
    }

    const answer: AssistantMessage = {
      id: crypto.randomUUID(),
      role: 'assistant',
      content: askAssistant(question),
    }

    setMessages((prev) => [...prev, userMessage, answer])
  }

  const history = useMemo(() => messages.slice(-6), [messages])

  return (
    <div className="rounded-[2rem] border border-white/10 bg-panel p-5 shadow-glow">
      <div className="flex items-center gap-3 border-b border-white/10 pb-4">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-white">
          <MessageSquareText className="h-5 w-5" />
        </div>
        <div>
          <p className="font-medium text-white">Ask About Me</p>
          <p className="text-sm text-muted">Free portfolio assistant, no API needed</p>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        <PromptChips prompts={promptChips} onSelect={handleAsk} />
      </div>

      <div className="mt-5 max-h-[420px] space-y-3 overflow-y-auto pr-1">
        {history.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>

      <div className="mt-5">
        <ChatInput onSubmit={handleAsk} />
      </div>
    </div>
  )
}
