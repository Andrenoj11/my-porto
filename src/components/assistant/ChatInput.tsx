'use client'

import { SendHorizonal } from 'lucide-react'
import { useState } from 'react'

export const ChatInput = ({ onSubmit }: { onSubmit: (value: string) => void }) => {
  const [value, setValue] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!value.trim()) return
    onSubmit(value.trim())
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 p-2">
      <input
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Ask about skills, projects, or experience"
        className="h-11 flex-1 bg-transparent px-3 text-sm text-white outline-none placeholder:text-muted"
      />
      <button
        type="submit"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-white transition hover:bg-accent/20"
      >
        <SendHorizonal className="h-4 w-4" />
      </button>
    </form>
  )
}
