"use client"
import { cn } from "@/lib/utils"
import { motion, type MotionValue } from "motion/react"
import Link from "next/link"

export const GoogleGeminiEffect = ({
  pathLengths,
  title,
  description,
  buttonText,
  buttonLink,
  buttonOpacity,
  className,
}: {
  pathLengths: MotionValue[]
  title?: string
  description?: string
  buttonText?: string
  buttonLink?: string
  buttonOpacity?: MotionValue<number>
  className?: string
}) => {
  return (
    // Sticky viewport: freezes the screen at this section while user scrolls
    <div
      className={cn(
        "sticky top-0 min-h-screen overflow-visible overflow-x-clip pt-28 md:pt-32",
        className
      )}
    >
      {/* Title */}
      <p
        className="
          text-4xl md:text-6xl font-bold tracking-tight text-center
          bg-clip-text text-transparent
          bg-gradient-to-r from-purple-500 via-pink-400 to-cyan-400
          px-4 pb-1
        "
      >
        {title || "Ready to Experience Horizon?"}
      </p>

      {/* Description */}
      <p
        className="
          text-sm md:text-lg font-normal text-center text-neutral-300
          mt-2 mb-8 md:mb-10 max-w-2xl mx-auto px-4 leading-relaxed
        "
      >
        {description ||
          "Join us for an unforgettable journey through innovation, creativity, and connection. Horizon 2025 brings together the brightest minds and most talented performers."}
      </p>

      {/* CTA */}
      <div className="absolute inset-x-0 bottom-[22rem] md:bottom-[26rem] flex h-14 items-center justify-center z-30">
        <Link href={buttonLink || "#"}>
          <motion.button
            style={{ opacity: buttonOpacity }}
            className="z-30 mx-auto w-fit rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 px-4 py-2 text-xs font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 md:px-8 md:py-3 md:text-base"
          >
            {buttonText || "Book Tickets"}
          </motion.button>
        </Link>
      </div>

      {/* Symmetrical SVG (no overflow now) */}
      <svg
        viewBox="0 0 1920 890"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="
          pointer-events-none absolute bottom-0
          inset-x-0
          w-full max-w-none
          h-[560px] md:h-[660px]
          mix-blend-screen
        "
      >
        {/* LINE 1 (violet) */}
        <motion.path
          d="M 0 650 C 260 650, 360 640, 470 565 C 540 515, 640 505, 720 520 C 800 535, 880 560, 960 520"
          stroke="#A855F7"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[0] }}
        />
        <motion.path
          d="M 0 650 C 260 650, 360 640, 470 565 C 540 515, 640 505, 720 520 C 800 535, 880 560, 960 520"
          stroke="#A855F7"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[0] }}
          transform="translate(1920 0) scale(-1 1)"
        />

        {/* LINE 2 (pink) */}
        <motion.path
          d="M 0 590 C 280 590, 410 575, 540 530 C 640 495, 780 505, 960 520"
          stroke="#EC4899"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[1] }}
        />
        <motion.path
          d="M 0 590 C 280 590, 410 575, 540 530 C 640 495, 780 505, 960 520"
          stroke="#EC4899"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[1] }}
          transform="translate(1920 0) scale(-1 1)"
        />

        {/* LINE 3 (cyan straight) */}
        <motion.path
          d="M 0 520 L 960 520"
          stroke="#06B6D4"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[2] }}
        />
        <motion.path
          d="M 0 520 L 960 520"
          stroke="#06B6D4"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[2] }}
          transform="translate(1920 0) scale(-1 1)"
        />

        {/* LINE 4 (purple) */}
        <motion.path
          d="M 0 450 C 240 450, 360 470, 480 510 C 610 555, 760 560, 960 520"
          stroke="#8B5CF6"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[3] }}
        />
        <motion.path
          d="M 0 450 C 240 450, 360 470, 480 510 C 610 555, 760 560, 960 520"
          stroke="#8B5CF6"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[3] }}
          transform="translate(1920 0) scale(-1 1)"
        />

        {/* LINE 5 (magenta) */}
        <motion.path
          d="M 0 700 C 300 700, 420 685, 560 600 C 700 515, 820 520, 960 520"
          stroke="#F472B6"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[4] }}
        />
        <motion.path
          d="M 0 700 C 300 700, 420 685, 560 600 C 700 515, 820 520, 960 520"
          stroke="#F472B6"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[4] }}
          transform="translate(1920 0) scale(-1 1)"
        />
      </svg>
    </div>
  )
}
