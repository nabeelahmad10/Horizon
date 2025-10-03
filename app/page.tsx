import { HeroSection } from "@/components/hero-section"
import { EventsShowcase } from "@/components/events-showcase"
import { FestivalInfo } from "@/components/festival-info"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/Navigation"
import { EventDescription } from "@/components/event-description"

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <EventDescription />
      <FestivalInfo />
      <EventsShowcase />
      <CTASection />
      <Footer />
    </main>
  )
}
