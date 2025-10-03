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
    longDescription:
      "Get ready for an unforgettable night of live music! Battle of Bands brings together the most talented musicians from across the region to compete for glory and amazing prizes. Experience diverse genres, incredible performances, and the raw energy of live rock, pop, indie, and more.",
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
    longDescription:
      "Prepare for a night of non-stop laughter! Our lineup features both established comedians and rising stars who will have you in stitches with their hilarious observations, witty commentary, and side-splitting stories.",
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
    longDescription:
      "Immerse yourself in a world of creativity and imagination. This curated exhibition showcases diverse artistic expressions including paintings, sculptures, digital art, and mixed media from both emerging and established artists.",
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
    longDescription:
      "Join fellow developers, designers, and innovators for an intense 12-hour coding marathon. Build innovative solutions, learn new technologies, network with industry professionals, and compete for exciting prizes and internship opportunities.",
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
    longDescription:
      "Show off your athletic prowess in our multi-sport tournament featuring basketball, volleyball, badminton, and more. Whether you're a seasoned athlete or just love sports, this is your chance to compete and win amazing prizes.",
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
    longDescription:
      "Calling all photographers! Participate in themed photo challenges, learn from professional photographers, and showcase your best work. Categories include portrait, landscape, street photography, and creative editing.",
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
    longDescription:
      "Compete in popular esports titles including Valorant, League of Legends, FIFA, and more. Whether you're a casual gamer or aspiring pro, test your skills against the best and win incredible gaming gear and cash prizes.",
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
    longDescription:
      "Have a brilliant startup idea? Pitch it to a panel of investors, entrepreneurs, and industry experts. Get valuable feedback, make connections, and compete for seed funding and mentorship opportunities.",
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
    longDescription:
      "Experience a vibrant celebration of global cultures through music, dance, fashion, and food. Enjoy performances representing diverse traditions, taste international cuisines, and celebrate the beauty of cultural diversity.",
  },
]

export function EventsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {eventsData.map((event) => {
        const Icon = event.icon
        return (
          <Card
            key={event.id}
            className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-purple-500/50"
          >
            {/* Gradient Background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
            />

            <div className="p-6 relative z-10">
              {/* Icon and Price */}
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

              {/* Content */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">{event.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{event.description}</p>

              {/* Event Details */}
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

              {/* Category Badge */}
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-xs">
                  {event.category}
                </Badge>
                <Button size="sm" className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white" asChild>
                  <Link href={`/events/${event.slug}`}>View Details</Link>
                </Button>
              </div>
            </div>

            {/* Hover Effect */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </Card>
        )
      })}
    </div>
  )
}
