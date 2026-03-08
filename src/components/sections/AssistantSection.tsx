import { ChatWidget } from '@/components/assistant/ChatWidget'
import { Container } from '@/components/common/Container'
import { SectionTitle } from '@/components/common/SectionTitle'

export const AssistantSection = () => {
  return (
    <section id="assistant" className="py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionTitle
            eyebrow="Assistant"
            title="An Ask-About-Me experience"
            description="This assistant uses structured portfolio data, simple intent detection, and project matching to answer common questions without any paid AI API."
          />
          <ChatWidget />
        </div>
      </Container>
    </section>
  )
}
