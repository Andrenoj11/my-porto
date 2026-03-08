import { experiences } from '@/data/experiences'
import { Container } from '@/components/common/Container'
import { SectionTitle } from '@/components/common/SectionTitle'

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <Container>
        <div className="space-y-10">
          <SectionTitle
            eyebrow="Experience"
            title="Selected roles"
            description="A mix of regulated financial products, internal tools, reusable UI systems, and operational workflows."
          />
          <div className="space-y-6">
            {experiences.map((experience) => (
              <article key={`${experience.company}-${experience.role}`} className="rounded-[1.75rem] border border-white/10 bg-panel p-7 shadow-glow">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{experience.role}</h3>
                    <p className="mt-1 text-sm text-accent">{experience.company}</p>
                  </div>
                  <div className="text-sm text-muted">{experience.period}</div>
                </div>
                <p className="mt-5 text-base leading-7 text-muted">{experience.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/80">{experience.domain}</span>
                </div>
                <ul className="mt-6 space-y-3 text-sm leading-7 text-muted">
                  {experience.highlights.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
