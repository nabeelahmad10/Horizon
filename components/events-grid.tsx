"use client"

import { CometCard } from "@/components/ui/comet-card"
import { Music, Mic, Palette, Code, Trophy, Camera, Gamepad2, Lightbulb, Sparkles } from "lucide-react"
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {eventsData.map((event) => {
        const Icon = event.icon
        return (
          <CometCard key={event.id} className="h-full">
            <Link
              href={`/events/${event.slug}`}
              className="block w-full cursor-pointer rounded-[16px] border-0 bg-[#1F2121] p-2 md:p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
              aria-label={`View details for ${event.title}`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="mx-2">
                <div className="relative mt-2 aspect-[3/4] w-full">
                  <img
                    loading="lazy"
                    className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
                    alt={`${event.title} poster`}
                    src="/event-poster-image.jpg"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                      opacity: 1,
                    }}
                  />
                  <div className={`absolute left-3 top-3 rounded-xl bg-gradient-to-br ${event.color} p-2.5`}>
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                  <div className="absolute right-3 top-3 rounded-md bg-black/60 px-2 py-1 text-sm font-semibold text-white">
                    ${event.price}
                  </div>
                </div>
              </div>
              <div className="mt-1 flex items-center justify-between p-3 font-mono text-white">
                <div className="text-sm">{event.title}</div>
                <div className="text-sm text-gray-300 opacity-70">{event.category}</div>
              </div>
            </Link>
          </CometCard>
        )
      })}
    </div>
  )
}
