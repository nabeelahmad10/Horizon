"use client"

import { CometField } from "@/components/comet-field"
import { motion } from "framer-motion"
import WobbleCardDemo from "@/components/wobble-card-demo"

export function NeonChaosSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <CometField count={16} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Marquee */}
        <div className="mb-10 md:mb-16 overflow-hidden">
          <motion.div
            className="flex gap-8 text-3xl md:text-5xl font-bold neon-text whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 24, repeat: Number.POSITIVE_INFINITY }}
            aria-hidden
          >
            <span>HORIZON • NEON • INNOVATION • CELEBRATION •</span>
            <span>HORIZON • NEON • INNOVATION • CELEBRATION •</span>
          </motion.div>
        </div>

        {/* Wobbling cards grid */}
        <div className="mt-6 md:mt-10">
          <WobbleCardDemo />
        </div>
      </div>
    </section>
  )
}
