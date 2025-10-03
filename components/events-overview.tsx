"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Music,
  Mic,
  Palette,
  Code,
  Trophy,
  Camera,
  Gamepad2,
  Lightbulb,
  Sparkles,
  Calendar,
  Clock,
  MapPin,
  Users,
} from "lucide-react"
import Link from "next/link"

// ✅ All Event Data
export const eventsData = [
  {
    id: 1,
    slug: "battle-of-bands",
    title: "Battle of Bands",
    description: "Showcase your musical talent and compete for the ultimate prize in this electrifying competition",
    icon: Music,
    category: "Music",
    color: "from-purple-500 to-pink-500",
    date: "Oct 30, 2025",
    time: "6:00 PM - 10:00 PM",
    venue: "Main Stage Arena",
    capacity: 1000,
    price: 25,
  },
  {
    id: 2,
    slug: "stand-up-comedy",
    title: "Stand-Up Comedy Night",
    description: "Laugh out loud with the funniest comedians around",
    icon: Mic,
    category: "Entertainment",
    color: "from-cyan-500 to-blue-500",
    date: "Oct 30, 2025",
    time: "8:00 PM - 11:00 PM",
    venue: "Comedy Hall",
    capacity: 500,
    price: 20,
  },
  {
    id: 3,
    slug: "art-exhibition",
    title: "Art Exhibition",
    description: "Explore stunning artworks from talented artists",
    icon: Palette,
    category: "Arts",
    color: "from-orange-500 to-red-500",
    date: "Oct 31, 2025",
    time: "10:00 AM - 8:00 PM",
    venue: "Gallery Wing",
    capacity: 300,
    price: 15,
  },
  {
    id: 4,
    slug: "hackathon",
    title: "Hackathon",
    description: "Code, innovate, and build the next big thing",
    icon: Code,
    category: "Technology",
    color: "from-green-500 to-emerald-500",
    date: "Oct 31, 2025",
    time: "9:00 AM - 9:00 PM",
    venue: "Tech Hub",
    capacity: 200,
    price: 30,
  },
  {
    id: 5,
    slug: "sports-tournament",
    title: "Sports Tournament",
    description: "Compete in various sports and win exciting prizes",
    icon: Trophy,
    category: "Sports",
    color: "from-yellow-500 to-orange-500",
    date: "Nov 1, 2025",
    time: "8:00 AM - 6:00 PM",
    venue: "Sports Complex",
    capacity: 800,
    price: 20,
  },
  {
    id: 6,
    slug: "photography-contest",
    title: "Photography Contest",
    description: "Capture moments and showcase your photography skills",
    icon: Camera,
    category: "Arts",
    color: "from-pink-500 to-rose-500",
    date: "Nov 1, 2025",
    time: "11:00 AM - 5:00 PM",
    venue: "Photo Studio",
    capacity: 150,
    price: 15,
  },
  {
    id: 7,
    slug: "gaming-championship",
    title: "Gaming Championship",
    description: "Battle it out in the ultimate gaming showdown",
    icon: Gamepad2,
    category: "Gaming",
    color: "from-indigo-500 to-purple-500",
    date: "Oct 30, 2025",
    time: "2:00 PM - 10:00 PM",
    venue: "Gaming Arena",
    capacity: 400,
    price: 25,
  },
  {
    id: 8,
    slug: "innovation-pitch",
    title: "Innovation Pitch",
    description: "Present your groundbreaking ideas to industry leaders",
    icon: Lightbulb,
    category: "Business",
    color: "from-teal-500 to-cyan-500",
    date: "Oct 31, 2025",
    time: "1:00 PM - 6:00 PM",
    venue: "Innovation Center",
    capacity: 250,
    price: 20,
  },
  {
    id: 9,
    slug: "cultural-night",
    title: "Cultural Night",
    description: "Celebrate diversity with performances from around the world",
    icon: Sparkles,
    category: "Culture",
    color: "from-violet-500 to-purple-500",
    date: "Nov 1, 2025",
    time: "7:00 PM - 11:00 PM",
    venue: "Cultural Center",
    capacity: 600,
    price: 20,
  },
]

// ✅ Overview Component (shows 3 events + CTA)
export function EventsOverview() {
  const previewEvents = eventsData.slice(0, 3)

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Featured <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">Events</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {previewEvents.map((event) => {
          const Icon = event.icon
          return (
            <Card
              key={event.id}
              className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-purple-500/50"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
              <div className="p-6 relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${event.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">${event.price}</div>
                    <div className="text-xs text-muted-foreground">per ticket</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
                  {event.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{event.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{event.venue}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span>{event.capacity} capacity</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs">
                    {event.category}
                  </Badge>
                  <Button size="sm" className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white" asChild>
                    <Link href={`/events/${event.slug}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      {/* View All Events CTA */}
      <div className="text-center mt-10">
        <Link
          href="/events"
          className="inline-block px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-purple-600 to-cyan-600 hover:opacity-90 shadow-lg shadow-cyan-500/30 transition-all"
        >
          View All 9 Events →
        </Link>
      </div>
    </section>
  )
}
