import type { PromptChip } from '@/types'

export const PromptChips = ({ prompts, onSelect }: { prompts: PromptChip[]; onSelect: (value: string) => void }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {prompts.map((prompt) => (
        <button
          key={prompt.label}
          type="button"
          onClick={() => onSelect(prompt.question)}
          className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-muted transition hover:border-accent/30 hover:text-white"
        >
          {prompt.label}
        </button>
      ))}
    </div>
  )
}
