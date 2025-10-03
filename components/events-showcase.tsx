"use client"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Music, Mic, Palette, Code, Trophy, Camera, Gamepad2, Lightbulb, Sparkles } from "lucide-react"
import Link from "next/link"
import { EventsGrid } from "@/components/events-grid"

export function EventsShowcase() {
  const events = [
    {
      id: 1,
      title: "Battle of Bands",
      description: "Showcase your musical talent and compete for the ultimate prize",
      icon: Music,
      category: "Music",
      color: "from-purple-500 to-pink-500",
      date: "Oct 30",
    },
    {
      id: 2,
      title: "Stand-Up Comedy Night",
      description: "Laugh out loud with the funniest comedians around",
      icon: Mic,
      category: "Entertainment",
      color: "from-cyan-500 to-blue-500",
      date: "Oct 30",
    },
    {
      id: 3,
      title: "Art Exhibition",
      description: "Explore stunning artworks from talented artists",
      icon: Palette,
      category: "Arts",
      color: "from-orange-500 to-red-500",
      date: "Oct 31",
    },
    {
      id: 4,
      title: "Hackathon",
      description: "Code, innovate, and build the next big thing",
      icon: Code,
      category: "Technology",
      color: "from-green-500 to-emerald-500",
      date: "Oct 31",
    },
    {
      id: 5,
      title: "Sports Tournament",
      description: "Compete in various sports and win exciting prizes",
      icon: Trophy,
      category: "Sports",
      color: "from-yellow-500 to-orange-500",
      date: "Nov 1",
    },
    {
      id: 6,
      title: "Photography Contest",
      description: "Capture moments and showcase your photography skills",
      icon: Camera,
      category: "Arts",
      color: "from-pink-500 to-rose-500",
      date: "Nov 1",
    },
    {
      id: 7,
      title: "Gaming Championship",
      description: "Battle it out in the ultimate gaming showdown",
      icon: Gamepad2,
      category: "Gaming",
      color: "from-indigo-500 to-purple-500",
      date: "Oct 30",
    },
    {
      id: 8,
      title: "Innovation Pitch",
      description: "Present your groundbreaking ideas to industry leaders",
      icon: Lightbulb,
      category: "Business",
      color: "from-teal-500 to-cyan-500",
      date: "Oct 31",
    },
    {
      id: 9,
      title: "Cultural Night",
      description: "Celebrate diversity with performances from around the world",
      icon: Sparkles,
      category: "Culture",
      color: "from-violet-500 to-purple-500",
      date: "Nov 1",
    },
  ]

  return (
    <section className="py-24 relative bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white border-0">9 Events</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Our{" "}
            <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">Events</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From music to technology, sports to arts - we have something for everyone
          </p>
        </div>

        {/* Events Grid */}
        <div className="mb-12">
          <EventsGrid />
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-2 hover:bg-foreground/5 bg-transparent" asChild>
            <Link href="/events">View All Events</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
