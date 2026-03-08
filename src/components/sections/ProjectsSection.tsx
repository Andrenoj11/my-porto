import { projects } from '@/data/projects'
import { Container } from '@/components/common/Container'
import { SectionTitle } from '@/components/common/SectionTitle'

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20">
      <Container>
        <div className="space-y-10">
          <SectionTitle
            eyebrow="Projects"
            title="Selected work"
            description="Focused on products with real users, structured workflows, and practical engineering constraints."
          />
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.slug} className="rounded-[1.75rem] border border-white/10 bg-panel p-7 shadow-glow">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="text-base leading-7 text-muted">{project.summary}</p>
                  <p className="text-sm leading-6 text-white/90">{project.impact}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
