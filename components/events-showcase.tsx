"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { EventsGrid } from "@/components/events-grid"

export function EventsShowcase() {
  return (
    <section className="py-16 relative bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
        
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Discover The{" "}
            <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">Events</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From music to technology, sports to arts - we have something for everyone
          </p>
        </div>

        <div className="mb-8">
          <EventsGrid limit={3} />
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-2 hover:bg-foreground/5 bg-transparent" asChild>
            <Link href="/events">View All Events</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
