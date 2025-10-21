"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { motion, type Variants } from "framer-motion"
import { Inter, Playfair_Display } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
})

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

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
      "The Case Study Competition challenges participants to analyze real-world business scenarios and present innovative solutions. This flagship event brings together analytical minds to tackle complex problems, fostering critical thinking and strategic planning. Participants showcase their ability to break down challenges, identify opportunities, and propose actionable strategies that make a real impact.",
  },
  {
    id: "leadership-summit",
    title: "Leadership Summit",
    date: "Horizon Fest 2024",
    image: "/leadership-summit-conference-speakers.jpg",
    description:
      "The Leadership Summit brings together industry leaders, entrepreneurs, and visionary alumni to share their insights on leading teams and organizations. This prestigious event features keynote speeches, panel discussions, and interactive sessions that inspire the next generation of leaders. Participants gain valuable perspectives on decision-making, innovation, and creating lasting impact in their respective fields.",
  },
  {
    id: "evedentia",
    title: "Evedentia",
    date: "Horizon Fest 2024",
    image: "/evedentia-event-showcase-exhibition.jpg",
    description:
      "Evedentia is a dynamic showcase of innovation and creativity where participants present groundbreaking ideas, projects, and initiatives. This event celebrates the spirit of entrepreneurship and creative thinking, providing a platform for innovators to demonstrate their work to a diverse audience. It's a vibrant celebration of what's possible when passion meets purpose.",
  },
  {
    id: "pitch-perfect",
    title: "Pitch Perfect",
    date: "Horizon Fest 2024",
    image: "/pitch-perfect-startup-pitching-competition.jpg",
    description:
      "Pitch Perfect is an exciting competition where entrepreneurs and innovators present their business ideas to investors, mentors, and industry experts. Participants refine their pitching skills, receive valuable feedback, and have the opportunity to secure funding and partnerships. This event is a launchpad for startups and a celebration of entrepreneurial spirit.",
  },
  {
    id: "hackathon",
    title: "Hackathon",
    date: "Horizon Fest 2024",
    image: "/hackathon-coding-programming-competition.jpg",
    description:
      "The Hackathon is an intensive coding event where developers, designers, and innovators collaborate to build solutions to real-world problems. Over a concentrated period, teams work together to create prototypes, applications, and tools that showcase technical excellence and creative problem-solving. It's a celebration of innovation, collaboration, and the power of technology.",
  },
  {
    id: "extempore",
    title: "Extempore",
    date: "Horizon Fest 2024",
    image: "/extempore-public-speaking-debate-competition.jpg",
    description:
      "Extempore is a thrilling public speaking competition that tests participants' ability to think on their feet and articulate their thoughts with clarity and confidence. Speakers are given topics and limited preparation time, challenging them to deliver compelling, well-structured speeches. This event celebrates eloquence, quick thinking, and the art of persuasive communication.",
  },
  {
    id: "campus-treasure-hunt",
    title: "Campus Treasure Hunt",
    date: "Horizon Fest 2024",
    image: "/treasure-hunt-adventure-campus-exploration.jpg",
    description:
      "The Campus Treasure Hunt is an exciting adventure that takes participants on a journey across campus, solving puzzles and completing challenges along the way. Teams work together to decipher clues, navigate obstacles, and uncover hidden treasures. It's a fun-filled event that combines teamwork, problem-solving, and the thrill of discovery.",
  },
  {
    id: "automobile-expo",
    title: "Automobile Expo",
    date: "Horizon Fest 2024",
    image: "/automobile-expo-car-showcase-technology.jpg",
    description:
      "The Automobile Expo showcases the latest innovations in automotive technology, design, and sustainability. Featuring cutting-edge vehicles, interactive displays, and expert talks, this event brings together automotive enthusiasts, engineers, and industry professionals. Visitors explore the future of mobility and learn about emerging trends in the automotive industry.",
  },
  {
    id: "esports",
    title: "Esports",
    date: "Horizon Fest 2024",
    image: "/esports-gaming-tournament-competition.jpg",
    description:
      "The Esports tournament is a high-energy competition featuring popular gaming titles where skilled players compete for glory and prizes. This event celebrates gaming culture, strategic thinking, and competitive excellence. With live commentary, spectator engagement, and thrilling matches, it's an unforgettable experience for gamers and esports enthusiasts alike.",
  },
]

export default function EventsPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / 40
      const y = (e.clientY - window.innerHeight / 2) / 40
      setMousePosition({ x, y })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      <style jsx global>{`
        .elegant-title-glow {
          text-shadow: 0 0 15px rgba(229, 9, 20, 0.5),
            0 0 25px rgba(229, 9, 20, 0.3);
        }
        @keyframes pulse-subtle {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.08;
          }
          50% {
            transform: scale(1.03);
            opacity: 0.12;
          }
        }
        .bg-pulse-anim {
          animation: pulse-subtle 10s ease-in-out infinite;
        }
      `}</style>
      <main className={`relative min-h-screen bg-[#101010] text-neutral-100 ${inter.className}`}>
        <Navigation />

        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black pt-20">
          <div
            className="absolute inset-0 z-10 opacity-10"
            style={{
              backgroundImage: `url('/noise.png')`,
              backgroundSize: "300px 300px",
              backgroundBlendMode: "overlay",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-20" />
          <div className="absolute top-0 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_top,rgba(229,9,20,0.2)_0%,transparent_70%)] z-10" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_bottom,rgba(229,9,20,0.2)_0%,transparent_70%)] z-10" />

          <div className="absolute -top-40 -left-40 h-[800px] w-[800px] rounded-full opacity-10 blur-3xl bg-[radial-gradient(circle_at_30%_30%,rgba(229,9,20,0.4),transparent_70%)] bg-pulse-anim" />
          <div
            className="absolute -bottom-40 -right-40 h-[800px] w-[800px] rounded-full opacity-10 blur-3xl bg-[radial-gradient(circle_at_70%_70%,rgba(229,9,20,0.4),transparent_70%)] bg-pulse-anim"
            style={{ animationDelay: "5s" }}
          />

          <div className="relative z-30 container mx-auto px-4 text-center py-24">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Badge className="mb-8 border border-red-600/40 bg-transparent text-red-500 text-sm uppercase tracking-widest px-4 py-2">
                Horizon Fest Events
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.2,
                ease: [0.2, 0.6, 0.3, 0.9],
                delay: 0.2,
              }}
              className={`text-6xl md:text-8xl font-bold mb-6 transition-transform duration-200 text-white ${playfairDisplay.className} elegant-title-glow`}
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              }}
            >
              Explore Our
              <br />
              <span className="block mt-2 italic text-neutral-300 text-5xl md:text-7xl font-medium">
                Signature Events
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="max-w-3xl mx-auto text-lg text-neutral-400 mt-6"
            >
              Discover the events that bring our community together, fostering innovation, connection, and lifelong
              learning.
            </motion.p>
          </div>
        </section>

        {/* EVENTS GRID SECTION */}
        <section id="events-grid" className="py-20 overflow-hidden bg-[#101010]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-28 md:gap-36">
              {allEvents.map((event, index) => {
                const slideDirection = index % 2 === 0 ? "left" : "right"
                return (
                  <motion.div
                    key={event.id}
                    id={event.id}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center group relative p-4 rounded-xl transition-all duration-300 hover:bg-neutral-900/40 hover:shadow-2xl hover:shadow-black/60"
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
                      <motion.h3 variants={textVariants} className="text-4xl font-bold mb-4 text-white">
                        {event.title}
                      </motion.h3>
                      <motion.p variants={textVariants} className="text-neutral-300 leading-relaxed text-lg">
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
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}
