"use client"
import Image from "next/image"
import { motion, type Variants } from "framer-motion"
import { Inter, Playfair_Display } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
})

const imageVariants = (direction: "left" | "right"): Variants => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -80 : 80,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.2, 0.6, 0.3, 0.9] },
  },
})

const textContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

const allEvents = [
  {
    id: "case-study-competition",
    title: "Case Study Competition",
    date: "Horizon Fest 2024",
    image: "/case-study-competition-business-analysis.jpg",
    description:
      "The Case Study Competition challenges participants to analyze real-world business scenarios and present innovative solutions. This flagship event brings together analytical minds to tackle complex problems, fostering critical thinking and strategic planning.",
  },
  {
    id: "leadership-summit",
    title: "Leadership Summit",
    date: "Horizon Fest 2024",
    image: "/leadership-summit-conference-speakers.jpg",
    description:
      "The Leadership Summit brings together industry leaders, entrepreneurs, and visionary alumni to share their insights on leading teams and organizations. This prestigious event features keynote speeches, panel discussions, and interactive sessions.",
  },
  {
    id: "evedentia",
    title: "Evedentia",
    date: "Horizon Fest 2024",
    image: "/evedentia-event-showcase-exhibition.jpg",
    description:
      "Evedentia is a dynamic showcase of innovation and creativity where participants present groundbreaking ideas, projects, and initiatives. This event celebrates the spirit of entrepreneurship and creative thinking.",
  },
  {
    id: "pitch-perfect",
    title: "Pitch Perfect",
    date: "Horizon Fest 2024",
    image: "/pitch-perfect-startup-pitching-competition.jpg",
    description:
      "Pitch Perfect is an exciting competition where entrepreneurs and innovators present their business ideas to investors, mentors, and industry experts. Participants refine their pitching skills and receive valuable feedback.",
  },
  {
    id: "hackathon",
    title: "Hackathon",
    date: "Horizon Fest 2024",
    image: "/hackathon-coding-programming-competition.jpg",
    description:
      "The Hackathon is an intensive coding event where developers, designers, and innovators collaborate to build solutions to real-world problems. It's a celebration of innovation, collaboration, and the power of technology.",
  },
  {
    id: "extempore",
    title: "Extempore",
    date: "Horizon Fest 2024",
    image: "/extempore-public-speaking-debate-competition.jpg",
    description:
      "Extempore is a thrilling public speaking competition that tests participants' ability to think on their feet and articulate their thoughts with clarity and confidence. This event celebrates eloquence and quick thinking.",
  },
  {
    id: "campus-treasure-hunt",
    title: "Campus Treasure Hunt",
    date: "Horizon Fest 2024",
    image: "/treasure-hunt-adventure-campus-exploration.jpg",
    description:
      "The Campus Treasure Hunt is an exciting adventure that takes participants on a journey across campus, solving puzzles and completing challenges along the way. It's a fun-filled event that combines teamwork and problem-solving.",
  },
  {
    id: "automobile-expo",
    title: "Automobile Expo",
    date: "Horizon Fest 2024",
    image: "/automobile-expo-car-showcase-technology.jpg",
    description:
      "The Automobile Expo showcases the latest innovations in automotive technology, design, and sustainability. Featuring cutting-edge vehicles and interactive displays, this event brings together automotive enthusiasts and professionals.",
  },
  {
    id: "esports",
    title: "Esports",
    date: "Horizon Fest 2024",
    image: "/esports-gaming-tournament-competition.jpg",
    description:
      "The Esports tournament is a high-energy competition featuring popular gaming titles where skilled players compete for glory and prizes. With live commentary and thrilling matches, it's an unforgettable experience.",
  },
]

interface EventsGridProps {
  limit?: number
}

export function EventsGrid({ limit }: EventsGridProps) {
  const displayEvents = limit ? allEvents.slice(0, limit) : allEvents

  return (
    <div className={`flex flex-col gap-16 md:gap-20 ${inter.className}`}>
      {displayEvents.map((event, index) => {
        const slideDirection = index % 2 === 0 ? "left" : "right"
        return (
          <motion.div
            key={event.id}
            id={event.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center group relative p-4 rounded-xl transition-all duration-300 hover:bg-neutral-900/40"
          >
            <motion.div
              variants={imageVariants(slideDirection)}
              className={`relative w-full aspect-[16/10] rounded-lg overflow-hidden shadow-xl shadow-black/50 ${
                index % 2 === 0 ? "md:order-first" : "md:order-last"
              }`}
            >
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            <motion.div
              variants={textContainerVariants}
              className={`${index % 2 === 0 ? "md:order-last" : "md:order-first"}`}
            >
              <motion.p variants={textVariants} className="text-red-500 font-semibold mb-2 tracking-wide">
                {event.date}
              </motion.p>
              <motion.h3
                variants={textVariants}
                className={`text-3xl md:text-4xl font-bold mb-4 text-white ${playfairDisplay.className}`}
              >
                {event.title}
              </motion.h3>
              <motion.p variants={textVariants} className="text-neutral-300 leading-relaxed text-base md:text-lg">
                {event.description}
              </motion.p>
              <motion.div variants={textVariants} className="mt-6">
                <a
                  href="https://horizondaa.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors duration-300"
                >
                  Register Now
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}
