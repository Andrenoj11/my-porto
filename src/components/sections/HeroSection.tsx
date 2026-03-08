import { profile } from '@/data/profile'
import { Container } from '@/components/common/Container'

export const HeroSection = () => {
  return (
    <section id="top" className="relative overflow-hidden py-24 sm:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.26em] text-accent">Software Engineer</p>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                Building useful products across web, mobile, and internal systems.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted">{profile.longSummary}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full border border-accent/30 bg-accent/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-accent/20"
              >
                View projects
              </a>
              <a
                href="#assistant"
                className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/5"
              >
                Ask about me
              </a>
            </div>
          </div>

          <div className="relative rounded-[2rem] border border-white/10 bg-panel/90 p-6 shadow-glow animate-fade-in-scale">
            <div className="absolute inset-0 -z-10 bg-grid bg-[size:32px_32px] opacity-20" />
            <div className="space-y-5">
              <div className="inline-flex rounded-full border border-white/10 px-3 py-1 text-xs text-muted">
                Portfolio Snapshot
              </div>
              <div className="space-y-2">
                <p className="text-2xl font-semibold text-white">{profile.name}</p>
                <p className="text-sm text-accent">{profile.title}</p>
                <p className="text-sm leading-7 text-muted">{profile.summary}</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-muted">Location</p>
                  <p className="mt-2 font-medium text-white">{profile.location}</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-muted">Focus</p>
                  <p className="mt-2 font-medium text-white">Fullstack Engineering</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
