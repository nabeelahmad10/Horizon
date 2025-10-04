"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Sparkles, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

export function HeroSection() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement | null>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  // track mouse position for spotlight
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY })
      sectionRef.current?.style.setProperty("--mx", `${e.clientX}px`)
      sectionRef.current?.style.setProperty("--my", `${e.clientY}px`)
    }
    window.addEventListener("mousemove", handle)
    return () => window.removeEventListener("mousemove", handle)
  }, [])

  // simple particle system
  useEffect(() => {
    const c = canvasRef.current
    if (!c) return
    const ctx = c.getContext("2d")!
    let raf = 0
    const DPR = Math.min(2, window.devicePixelRatio || 1)
    let W = 0, H = 0
    const resize = () => {
      W = c.clientWidth
      H = c.clientHeight
      c.width = W * DPR
      c.height = H * DPR
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
    }
    resize()
    window.addEventListener("resize", resize)

    const dots = Array.from({ length: 90 }).map(() => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: Math.random() * 1.2 + 0.4,
      h: 180 + Math.random() * 180,
    }))

    const loop = () => {
      ctx.clearRect(0, 0, W, H)
      for (const d of dots) {
        d.x += d.vx
        d.y += d.vy
        if (d.x < -10) d.x = W + 10
        if (d.x > W + 10) d.x = -10
        if (d.y < -10) d.y = H + 10
        if (d.y > H + 10) d.y = -10

        const dx = (mouse.x || W / 2) - d.x
        const dy = (mouse.y || H / 2) - d.y
        const dist = Math.hypot(dx, dy)
        if (dist < 160) {
          d.vx += (dx / dist) * 0.02
          d.vy += (dy / dist) * 0.02
        }

        ctx.beginPath()
        ctx.fillStyle = `hsla(${d.h},100%,70%,0.85)`
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [mouse])

  const title = "HORIZON".split("")

  return (
    <section
      ref={sectionRef}
      className="
        relative min-h-screen flex items-center justify-center overflow-hidden
        bg-gradient-to-b from-background via-background/60 to-background
      "
    >
      {/* full-screen looping video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="
          absolute inset-0 h-full w-full object-cover object-center
          opacity-25
        "
      >
        <source src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Landing_Page_Video_Generation_Request-4NndkvzEt7FHTF7SBzIUj9RJy6rnGh.mp4' />
      </video>

      {/* aurora layers */}
      <div className="pointer-events-none absolute -left-24 top-1/3 h-[48rem] w-[48rem] rounded-full blur-3xl opacity-35 bg-[radial-gradient(circle_at_30%_30%,#a855f7,transparent_60%)] animate-[spin_30s_linear_infinite]" />
      <div className="pointer-events-none absolute -right-24 top-0 h-[50rem] w-[50rem] rounded-full blur-3xl opacity-30 bg-[radial-gradient(circle_at_70%_70%,#06b6d4,transparent_60%)] animate-[spin_42s_linear_infinite_reverse]" />

      {/* particle field */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

      {/* moving spotlight */}
      <div
        className="
          pointer-events-none absolute inset-0
          [mask-image:radial-gradient(180px_180px_at_var(--mx)_var(--my),white,transparent_60%)]
          bg-[radial-gradient(circle_at_var(--mx)_var(--my),rgba(255,255,255,0.10),transparent_55%)]
        "
      />

      {/* main content */}
      <div className="relative z-10 container mx-auto px-10 py-2 mt-25 text-center">
        <h1
          className="
            mx-auto mb-3 flex select-none items-end justify-center gap-1
            text-[12vw] sm:text-8xl md:text-9xl
            leading-none font-black tracking-tight
          "
        >
          {title.map((ch, i) => (
            <span
              key={i}
              className="
                inline-block bg-clip-text text-transparent
                bg-[conic-gradient(from_180deg,theme(colors.purple.500),theme(colors.fuchsia.500),theme(colors.cyan.400),theme(colors.purple.500))]
                drop-shadow-[0_10px_30px_rgba(168,85,247,0.35)]
                animate-letter-bob
              "
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {ch}
            </span>
          ))}
        </h1>

        <p className="mx-auto mb-6 max-w-3xl text-base sm:text-xl text-white/70">
          Where innovation crashes into celebration — no spectators, only main characters.
        </p>

        <div className="mx-auto mb-10 flex w-full max-w-2xl flex-col items-center justify-center gap-4 sm:flex-row">
          <Meta icon={<Calendar className="h-5 w-5 text-purple-400" />} label="Oct 29 – Nov 1, 2025" />
          <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />
          <Meta icon={<MapPin className="h-5 w-5 text-cyan-400" />} label="9 events • Main Campus" />
        </div>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            size="lg"
            className="
              relative overflow-hidden px-8 py-6 text-base text-white
              bg-gradient-to-r from-purple-600 via-fuchsia-600 to-cyan-600
              shadow-[0_10px_40px_-10px_rgba(99,102,241,.6)]
              hover:shadow-[0_14px_50px_-10px_rgba(99,102,241,.75)]
              before:absolute before:-inset-1 before:bg-[conic-gradient(from_0deg,transparent,rgba(255,255,255,.4),transparent)]
              before:opacity-0 hover:before:opacity-100 before:blur-xl before:transition-opacity
            "
            asChild
          >
            <Link href="/book-tickets" className="inline-flex items-center gap-2">
              Book Your Tickets <Sparkles className="h-5 w-5" />
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="
              px-8 py-6 text-base border-white/30 text-white/90 backdrop-blur
              hover:bg-white/10 hover:text-white
            "
            asChild
          >
            <Link href="/events">Explore Events</Link>
          </Button>
        </div>

        <div className="mt-12 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap text-xs tracking-wider text-white/50">
            <span className="mx-4">SHOWCASE</span>•<span className="mx-4">GUEST TALKS</span>•<span className="mx-4">FILM NIGHT</span>•<span className="mx-4">WORKSHOPS</span>•<span className="mx-4">ART & MAKERS</span>•
          </div>
        </div>

        <div className="pointer-events-none mt-10 flex items-center justify-center">
          <div className="flex animate-breathe items-center gap-2 text-white/60">
            <ChevronDown className="h-5 w-5" />
           
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes letter-bob {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-letter-bob { animation: letter-bob 3.2s ease-in-out infinite; }

        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display:inline-block;
          min-width:200%;
          animation: marquee 18s linear infinite;
        }

        @keyframes breathe {
          0%,100% { opacity:.6; transform: translateY(0); }
          50% { opacity:1; transform: translateY(4px); }
        }
        .animate-breathe { animation: breathe 2.8s ease-in-out infinite; }
      `}</style>
    </section>
  )
}

function Meta({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-md">
      {icon}
      <span className="font-medium">{label}</span>
    </div>
  )
}
