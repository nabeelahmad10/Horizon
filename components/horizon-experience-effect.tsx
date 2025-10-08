"use client"
import { useScroll, useTransform, useMotionValue } from "motion/react"
import React, { useEffect } from "react"
import { GoogleGeminiEffect } from "@/components/ui/google-gemini-effect"

export default function HorizonExperienceEffect() {
  const ref = React.useRef<HTMLDivElement | null>(null)

  // Drive animation by scrolling THROUGH this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], // 0 when top enters, 1 at very end
  })

  // Button fades in only at the end
  const buttonOpacity = useMotionValue(0)

  // Reveal lines across nearly the whole section so it finishes before release
  const pathLengthFirst  = useTransform(scrollYProgress, [0, 0.98], [0.2, 1])
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.98], [0.15, 1])
  const pathLengthThird  = useTransform(scrollYProgress, [0, 0.98], [0.1, 1])
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.98], [0.05, 1])
  const pathLengthFifth  = useTransform(scrollYProgress, [0, 0.98], [0, 1])

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      buttonOpacity.set(v > 0.95 ? 1 : 0)
    })
    return () => unsub()
  }, [scrollYProgress, buttonOpacity])

  return (
    <section
      ref={ref}
      className="
        relative w-full bg-black/90 overflow-visible isolate
      
        z-0
        h-[400vh]                 /* long section: user keeps scrolling here */
        snap-start                /* works with a snapping wrapper */
      "
    >
      {/* optional: a top spacer if you need to clear a fixed header */}
      {/* <div className='h-16 md:h-20' /> */}

      {/* Sticky viewport content */}
      <GoogleGeminiEffect
        title="Ready to Experience Horizon?"
        description="Join us for an unforgettable journey through innovation, creativity, and connection. Horizon 2025 brings together the brightest minds and most talented performers."
        buttonText="Get Your Tickets"
        buttonLink="/tickets"
        buttonOpacity={buttonOpacity}
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </section>
  )
}
