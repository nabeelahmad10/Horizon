"use client"

import { useEffect, useState } from "react"
import { Navigation } from "@/components/Navigation"
import { Footer } from "@/components/footer"
import { DAAGallery } from "@/components/daa-gallery"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Lightbulb, Heart } from "lucide-react"
import GlobeDemo from "@/components/ui/globe-demo"

export default function DAAPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / 50
      const y = (e.clientY - window.innerHeight / 2) / 50
      setMousePosition({ x, y })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const stats = [
    { icon: Users, label: "Alumni Network", value: "50,000+" },
    { icon: Target, label: "Career Placements", value: "95%" },
    { icon: Lightbulb, label: "Startups Funded", value: "200+" },
    { icon: Heart, label: "Scholarships Given", value: "$5M+" },
  ]

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navigation />

      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-background to-cyan-900 opacity-80" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative z-10 container mx-auto px-4 text-center py-24">
          <Badge className="mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white border-none shadow-lg">
            Directorate of Alumni Affairs
          </Badge>
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            }}
          >
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent animate-gradient">
              Building Bridges
            </span>
            <br />
            <span className="text-foreground">Between Generations</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Connecting alumni and students through mentorship, career opportunities, and lifelong relationships.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="rounded-2xl p-6 text-center bg-gradient-to-b from-purple-950/40 to-cyan-950/30 border border-white/10 backdrop-blur-md shadow-lg hover:scale-105 transition-transform"
                >
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 mb-4 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-2 text-white">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 🌍 GLOBE SECTION */}
      <section className="relative py-24 bg-gradient-to-br from-purple-950 via-black to-cyan-950 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 bg-clip-text text-transparent">
              A Global Alumni Network
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Our alumni are connected across the world — from New Delhi to New York, Sydney to São Paulo.  
            This interactive globe shows how the Directorate of Alumni Affairs bridges generations and geographies.
          </p>
        </div>
        <div className="relative z-0 flex justify-center">
          <GlobeDemo />
        </div>
      </section>

      {/* INITIATIVES */}
      <section className="py-20">
        <div className="container mx-auto px-4 mb-12 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent">
              Our Initiatives
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our programs — each represents a key pillar of our mission.
          </p>
        </div>
        <DAAGallery />
      </section>

      <Footer />
    </main>
  )
}
