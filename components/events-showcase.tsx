"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { EventsGrid } from "@/components/events-grid"

export function EventsShowcase() {
  return (
    <section className="relative py-16 bg-[#0f0f0f] overflow-hidden">
      {/* ambient red glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full opacity-20 blur-3xl bg-[radial-gradient(circle_at_30%_30%,rgba(229,9,20,0.6),transparent_60%)]" />
        <div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full opacity-15 blur-3xl bg-[radial-gradient(circle_at_60%_60%,rgba(178,7,16,0.6),transparent_60%)]" />
      </div>

      {/* top/bottom hairline accents */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-40 [mask-image:linear-gradient(to_top,transparent,black_20%,black_80%,transparent)]"
      >
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#E50914]/70 to-transparent" />
        <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-[#B20710]/70 to-transparent" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-neutral-100">
            Discover the{" "}
            <span className="bg-[conic-gradient(from_210deg,#E50914,#B20710,#E50914)] bg-clip-text text-transparent drop-shadow-[0_10px_30px_rgba(229,9,20,0.35)]">
              Events
            </span>
          </h2>
          <p className="text-lg text-neutral-300/80 max-w-2xl mx-auto">
            From competitions to summits, innovation to entertainment - explore our flagship events.
          </p>
        </div>

        {/* Grid with subtle rim */}
        <div className="mb-8 relative">
          <div className="pointer-events-none absolute -inset-[1.5px] rounded-2xl opacity-60">
            <div className="h-full w-full rounded-2xl [background:conic-gradient(from_0deg,rgba(229,9,20,.45),rgba(255,255,255,.06),rgba(178,7,16,.45),rgba(229,9,20,.45))] [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [mask-composite:exclude] p-[1.5px]" />
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#141414]/80 backdrop-blur-sm p-2 sm:p-3 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]">
            <EventsGrid limit={3} />
          </div>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="border-0 bg-[#E50914] hover:bg-[#B20710] text-white px-8 py-6 shadow-[0_10px_40px_-10px_rgba(229,9,20,.55)] hover:shadow-[0_14px_50px_-10px_rgba(229,9,20,.7)]"
            asChild
          >
            <Link href="/events">View All Events</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
