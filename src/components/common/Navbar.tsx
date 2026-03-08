import { profile } from '@/data/profile'
import { Container } from './Container'

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <Container>
        <div className="flex items-center justify-between py-4">
          <a href="#top" className="text-sm font-semibold tracking-[0.2em] text-white/90">
            {profile.name.toUpperCase()}
          </a>
          <nav className="hidden gap-6 text-sm text-muted md:flex">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#experience" className="transition hover:text-white">Experience</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#assistant" className="transition hover:text-white">Ask About Me</a>
          </nav>
        </div>
      </Container>
    </header>
  )
}
