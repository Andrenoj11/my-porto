import { profile } from '@/data/profile'
import { skillGroups } from '@/data/skills'
import { Container } from '@/components/common/Container'
import { SectionTitle } from '@/components/common/SectionTitle'

export const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionTitle
            eyebrow="About"
            title="Engineering with clarity and product sense"
            description={profile.summary}
          />
          <div className="grid gap-6 sm:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-[1.5rem] border border-white/10 bg-panel p-6 shadow-glow">
                <p className="text-sm font-medium text-accent">{group.title}</p>
                <ul className="mt-4 space-y-3 text-sm leading-6 text-muted">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
