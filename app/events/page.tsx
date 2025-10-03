import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/footer"
import { EventsGrid } from "@/components/events-grid"
import { Badge } from "@/components/ui/badge"

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white border-0">
              9 Amazing Events
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              All{" "}
              <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">Events</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our diverse lineup of events spanning music, technology, arts, sports, and more
            </p>
          </div>

          <EventsGrid />
        </div>
      </div>
      <Footer />
    </main>
  )
}
