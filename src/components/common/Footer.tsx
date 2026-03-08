import { profile } from '@/data/profile'
import { Container } from './Container'

export const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-8">
      <Container>
        <div className="flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {profile.name}. Built with Next.js, TypeScript, and Tailwind CSS.</p>
          <div className="flex gap-4">
            <a
              href={profile.socials.github}
              target="_black"
              className="transition hover:text-white"
            >
              GitHub
            </a>
            <a
              href={profile.socials.linkedin}
              className="transition hover:text-white"
              target="_blank"
            >
              LinkedIn
            </a>
            <a href={`mailto:${profile.email}`} className="transition hover:text-white">
              Email
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
