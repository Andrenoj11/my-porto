'use client'

import { MessageSquareText } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

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
    "Hi, I am Andreno's portfolio assistant. Ask me about skills, experience, projects, or ask for a quick summary.",
}

export const ChatWidget = () => {
  const [messages, setMessages] = useState<AssistantMessage[]>([initialMessage])

  const bottomRef = useRef<HTMLDivElement | null>(null)
  const hasMountedRef = useRef(false)

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

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true
      return
    }

    bottomRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    })
  }, [messages])

  return (
    <div className="rounded-[2rem] border border-white/10 bg-panel p-5 shadow-glow">
      <div className="flex items-center gap-3 border-b border-white/10 pb-4">
        <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-accent/30 bg-accent/10 text-white">
          <MessageSquareText className="h-5 w-5" />
        </div>
        <div>
          <p className="font-medium text-white">Ask About Me</p>
          <p className="text-sm text-muted">Andreno&apos;s portfolio assistant</p>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        <PromptChips prompts={promptChips} onSelect={handleAsk} />
      </div>

      <div className="mt-5 max-h-[420px] space-y-3 overflow-y-auto pr-1">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        <div ref={bottomRef} />
      </div>

      <div className="mt-5">
        <ChatInput onSubmit={handleAsk} />
      </div>
    </div>
  )
}
