"use client"
import { cn } from "@/lib/utils"
import { motion, type MotionValue } from "framer-motion"
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
        "sticky top-0 min-h-screen overflow-visible overflow-x-clip pt-28 md:pt-32 bg-[#0f0f0f]",
        className
      )}
    >
      {/* Title */}
      <p
        className="
          text-4xl md:text-6xl font-bold tracking-tight text-center
          bg-clip-text text-transparent
          bg-[conic-gradient(from_210deg,#E50914,#B20710,#E50914)]
          drop-shadow-[0_10px_30px_rgba(229,9,20,0.35)]
          px-4 pb-1
        "
      >
        {title || "Ready to Experience Horizon?"}
      </p>

      {/* Description */}
      <p
        className="
          text-sm md:text-lg font-normal text-center text-neutral-300/80
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
            className="z-30 mx-auto w-fit rounded-full bg-[#E50914] hover:bg-[#B20710] px-4 py-2 text-xs font-bold text-white shadow-[0_10px_40px_-10px_rgba(229,9,20,.55)] hover:shadow-[0_14px_50px_-10px_rgba(229,9,20,.7)] transition-all duration-300 hover:scale-105 md:px-8 md:py-3 md:text-base"
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
        {/* LINE 1 (Netflix Red) */}
        <motion.path
          d="M 0 650 C 260 650, 360 640, 470 565 C 540 515, 640 505, 720 520 C 800 535, 880 560, 960 520"
          stroke="#E50914"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[0] }}
        />
        <motion.path
          d="M 0 650 C 260 650, 360 640, 470 565 C 540 515, 640 505, 720 520 C 800 535, 880 560, 960 520"
          stroke="#E50914"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[0] }}
          transform="translate(1920 0) scale(-1 1)"
        />

        {/* LINE 2 (Deep Red) */}
        <motion.path
          d="M 0 590 C 280 590, 410 575, 540 530 C 640 495, 780 505, 960 520"
          stroke="#B20710"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[1] }}
        />
        <motion.path
          d="M 0 590 C 280 590, 410 575, 540 530 C 640 495, 780 505, 960 520"
          stroke="#B20710"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[1] }}
          transform="translate(1920 0) scale(-1 1)"
        />

        {/* LINE 3 (Soft White) */}
        <motion.path
          d="M 0 520 L 960 520"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[2] }}
        />
        <motion.path
          d="M 0 520 L 960 520"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[2] }}
          transform="translate(1920 0) scale(-1 1)"
        />

        {/* LINE 4 (Red Accent) */}
        <motion.path
          d="M 0 450 C 240 450, 360 470, 480 510 C 610 555, 760 560, 960 520"
          stroke="rgba(229,9,20,0.8)"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[3] }}
        />
        <motion.path
          d="M 0 450 C 240 450, 360 470, 480 510 C 610 555, 760 560, 960 520"
          stroke="rgba(229,9,20,0.8)"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[3] }}
          transform="translate(1920 0) scale(-1 1)"
        />

        {/* LINE 5 (Dark Red) */}
        <motion.path
          d="M 0 700 C 300 700, 420 685, 560 600 C 700 515, 820 520, 960 520"
          stroke="rgba(178,7,16,0.8)"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          fill="none"
          initial={{ pathLength: 0 }}
          style={{ pathLength: pathLengths[4] }}
        />
        <motion.path
          d="M 0 700 C 300 700, 420 685, 560 600 C 700 515, 820 520, 960 520"
          stroke="rgba(178,7,16,0.8)"
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
