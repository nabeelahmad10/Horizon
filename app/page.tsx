import { HeroSection } from "@/components/hero-section"
import HeroScrollDemo from "@/components/hero-scroll-demo"
import HorizonExperienceEffect from "@/components/horizon-experience-effect"
import { EventsShowcase } from "@/components/events-showcase"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/Navigation"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <HeroScrollDemo />
      <EventsShowcase />
      <HorizonExperienceEffect />
      <Footer />
    </main>
  )
}
