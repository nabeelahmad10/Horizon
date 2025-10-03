"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Sparkles } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export function HeroSection() {
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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-40">
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Landing_Page_Video_Generation_Request-4NndkvzEt7FHTF7SBzIUj9RJy6rnGh.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-background/60 to-cyan-900/40" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        {/* Badge */}
       

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 animate-fade-in-up">
          <span
            className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent animate-gradient inline-block transition-transform duration-200 ease-out"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            }}
          >
            HORIZON
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-up animation-delay-200">
          Where Innovation Meets Celebration
        </p>

        {/* Event Details */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 animate-fade-in-up animation-delay-300">
          <div className="flex items-center gap-2 text-foreground/80">
            <Calendar className="w-5 h-5 text-purple-500" />
            <span className="font-medium">Oct 30 - Nov 1, 2025</span>
          </div>
          <div className="hidden md:block w-1 h-1 rounded-full bg-foreground/30" />
          <div className="flex items-center gap-2 text-foreground/80">
            <MapPin className="w-5 h-5 text-cyan-500" />
            <span className="font-medium">9 Amazing Events</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white shadow-2xl shadow-purple-500/30 text-lg px-8 py-6 group"
            asChild
          >
            <Link href="/book-tickets">
              Book Your Tickets
              <Sparkles className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-2 hover:bg-foreground/5 bg-transparent"
            asChild
          >
            <Link href="/events">Explore Events</Link>
          </Button>
        </div>

        {/* Scroll Indicator */}
      
      </div>
    </section>
  )
}
