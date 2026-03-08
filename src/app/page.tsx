import { Footer } from '@/components/common/Footer'
import { Navbar } from '@/components/common/Navbar'
import { AboutSection } from '@/components/sections/AboutSection'
import { AssistantSection } from '@/components/sections/AssistantSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { HeroSection } from '@/components/sections/HeroSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <AssistantSection />
      <Footer />
    </main>
  )
}
