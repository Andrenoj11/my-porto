export const SectionTitle = ({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) => {
  return (
    <div className="space-y-3 w-full">
      <p className="text-sm uppercase tracking-[0.24em] text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      <p className="text-base leading-7 text-muted">{description}</p>
    </div>
  )
}
