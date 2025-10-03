import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EventDetailContent } from "@/components/event-detail-content"
import { eventsData } from "@/components/events-grid"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return eventsData.map((event) => ({
    slug: event.slug,
  }))
}

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = eventsData.find((e) => e.slug === params.slug)

  if (!event) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <EventDetailContent event={event} />
      <Footer />
    </main>
  )
}
