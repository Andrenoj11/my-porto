import type { AssistantMessage } from '@/types'

export const ChatMessage = ({ message }: { message: AssistantMessage }) => {
  const isUser = message.role === 'user'

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[90%] rounded-3xl px-4 py-3 text-sm leading-7 shadow-glow whitespace-pre-line ${
          isUser ? 'bg-accent/15 text-white' : 'border border-white/10 bg-white/5 text-muted'
        }`}
      >
        {message.content}
      </div>
    </div>
  )
}
