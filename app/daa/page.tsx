"use client"

import { useEffect, useState } from "react"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Lightbulb, Heart } from "lucide-react"
import { motion, type Variants } from "framer-motion"
import { Playfair_Display, Inter } from "next/font/google"
import CoreTeam from "@/components/core-team"
import { DAAGallery } from "@/components/daa-gallery"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
})

const inter = Inter({ subsets: ["latin"] })

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
}

const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

export default function DAAPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / 30
      const y = (e.clientY - window.innerHeight / 2) / 30
      setMousePosition({ x, y })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const stats = [
    { icon: Users, label: "Alumni Network", value: "50,000+" },
    { icon: Target, label: "Something Here", value: "95%" },
    { icon: Lightbulb, label: "Something Here", value: "200+" },
    { icon: Heart, label: "Something Here", value: "$5M+" },
  ]

  return (
    <>
      <style jsx global>{`
        @keyframes subtle-fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .fade-in-on-load {
          animation: subtle-fade-in 1.5s ease-out forwards;
        }
        .hero-text-shadow {
          text-shadow: 0 0 15px rgba(255, 255, 255, 0.4),
            0 0 30px rgba(229, 9, 20, 0.2);
        }
        .spotlight-anim-1 {
          animation: spotlight-drift-1 35s ease-in-out infinite alternate;
        }
        @keyframes spotlight-drift-1 {
          0% {
            transform: translate(-100%, -50%) scale(1);
            opacity: 0.08;
          }
          50% {
            transform: translate(100%, 50%) scale(1.1);
            opacity: 0.15;
          }
          100% {
            transform: translate(-100%, -50%) scale(1);
            opacity: 0.08;
          }
        }
        .spotlight-anim-2 {
          animation: spotlight-drift-2 40s ease-in-out infinite alternate;
        }
        @keyframes spotlight-drift-2 {
          0% {
            transform: translate(100%, 50%) scale(1);
            opacity: 0.08;
          }
          50% {
            transform: translate(-100%, -50%) scale(1.1);
            opacity: 0.15;
          }
          100% {
            transform: translate(100%, 50%) scale(1);
            opacity: 0.08;
          }
        }
      `}</style>

      <main className={`min-h-screen bg-[#0A0A0A] text-neutral-100 ${inter.className}`}>
        <Navigation />

        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-10" />

          <motion.div
            className="absolute h-[900px] w-[900px] rounded-full blur-3xl bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.15)_0%,transparent_60%)] spotlight-anim-1"
            style={{
              top: `calc(50% + ${mousePosition.y * 0.8}px)`,
              left: `calc(50% + ${mousePosition.x * 0.8}px)`,
              transform: `translate(-50%, -50%)`,
            }}
          />
          <motion.div
            className="absolute h-[700px] w-[700px] rounded-full blur-3xl bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,transparent_70%)] spotlight-anim-2"
            style={{
              bottom: `calc(10% + ${mousePosition.y * 0.5}px)`,
              right: `calc(10% + ${mousePosition.x * 0.5}px)`,
              transform: `translate(50%, 50%)`,
            }}
          />

          <div className="relative z-20 container mx-auto px-4 text-center py-24 fade-in-on-load">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              <Badge className="mb-8 border border-[#E50914]/40 bg-[#E50914]/15 text-[#E50914] text-sm uppercase tracking-widest px-4 py-2">
                Directorate of Alumni Affairs
              </Badge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              className={`text-6xl md:text-8xl font-bold mb-6 text-neutral-100 transition-transform duration-200 ${playfairDisplay.className} hero-text-shadow`}
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              }}
            >
              Building Bridges
              <br />
              <span className="text-neutral-400 italic font-medium text-5xl md:text-7xl block mt-2">
                Between Generations
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
              className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto"
            >
              Connecting alumni and students through mentorship, career opportunities, and lifelong relationships.
            </motion.p>
          </div>
        </section>

        <section className="py-20 overflow-hidden bg-[#101010]">
          <div className="container mx-auto px-4 space-y-24">
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-3xl font-bold uppercase tracking-wider text-[#E50914] mb-4">Welcome to DAA</h2>
                <div className="space-y-4 text-neutral-300 text-lg leading-relaxed">
                  <p>
                    The Directorate of Alumni Affairs is dedicated to fostering meaningful connections between our
                    alumni community and current students. We serve as a bridge that strengthens the bonds of our
                    institution across generations.
                  </p>
                  <p>
                    Through mentorship programs, networking events, and career development initiatives, we empower our
                    alumni to give back and inspire the next generation of leaders and innovators.
                  </p>
                </div>
              </div>
              <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-2xl shadow-black/40 bg-gradient-to-br from-[#E50914]/20 to-transparent flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-[#E50914]/50">DAA</div>
                  <p className="text-neutral-400 mt-4">Alumni Networking</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* STATS */}
        <section className="py-16 relative bg-[#0A0A0A]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className="rounded-2xl p-6 text-center bg-[#141414]/85 border border-white/10 backdrop-blur-md shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform"
                  >
                    <div className="inline-flex p-4 rounded-xl bg-[#E50914] mb-4 shadow-[0_10px_30px_-12px_rgba(229,9,20,0.6)]">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold mb-2 text-white">{stat.value}</div>
                    <div className="text-sm text-neutral-400">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CORE TEAM */}
        <section className="py-20 font-poppins bg-[#101010]">
          <div className="container mx-auto px-4 mb-12 text-center">
            <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${playfairDisplay.className}`}>
              <span className="text-[#E50914] tracking-wide" style={{ letterSpacing: "0.06em" }}>
                Our Team
              </span>
            </h2>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto">
              Meet the architects of an unforgettable experience.
            </p>

            <CoreTeam />
          </div>

          <DAAGallery />
        </section>

        <Footer />
      </main>
    </>
  )
}
