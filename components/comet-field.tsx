"use client"

import { useMemo } from "react"
import { motion, useReducedMotion } from "framer-motion"

type Comet = {
  id: number
  delay: number
  duration: number
  size: number
  startX: number // percent within container
  startY: number // percent within container
  endX: number // percent within container
  endY: number // percent within container
}

type Star = {
  id: number
  x: number // percent
  y: number // percent
  size: number // px
  delay: number
  duration: number
}

export type CometFieldProps = {
  // Max number of comets; actual may reduce on small screens
  cometCount?: number
  // Optional star field
  showStars?: boolean
  starCount?: number
  // Scope height with Tailwind classes to avoid layout breaks
  heightClassName?: string
  // Extra container classes
  className?: string
  // Control base speed: 0.6 (slow) … 1 (default) … 1.5 (fast)
  speedFactor?: number
}

export function CometField({
  cometCount = 8,
  showStars = true,
  starCount = 80,
  heightClassName = "h-64 md:h-80",
  className = "",
  speedFactor = 1,
}: CometFieldProps) {
  const prefersReduced = useReducedMotion()

  // Keep motion subtle on mobile
  const isMobile = useMemo(() => typeof window !== "undefined" && window.innerWidth < 768, [])

  const effectiveComets = prefersReduced
    ? 0
    : Math.max(3, Math.min(cometCount, isMobile ? Math.ceil(cometCount * 0.8) : cometCount))
  const effectiveStars = prefersReduced ? Math.min(20, Math.ceil(starCount * 0.25)) : starCount

  const comets: Comet[] = useMemo(() => {
    if (effectiveComets <= 0) return []
    // Diagonal drift up-left or up-right; keep within bounds using 0–100%
    return Array.from({ length: effectiveComets }).map((_, i) => {
      const startX = Math.random() * 110 - 5 // allow slight overscan
      const startY = 70 + Math.random() * 40 // start mostly in lower area
      const dir = Math.random() < 0.5 ? -1 : 1
      const deltaX = (20 + Math.random() * 25) * dir
      const deltaY = -30 - Math.random() * 35

      const durationBase = 6 + Math.random() * 6
      const duration = Math.max(3.5, durationBase / Math.max(0.2, speedFactor))

      return {
        id: i,
        delay: Math.random() * 3,
        duration,
        size: 2 + Math.random() * 3,
        startX,
        startY,
        endX: startX + deltaX,
        endY: startY + deltaY,
      }
    })
  }, [effectiveComets, speedFactor])

  const stars: Star[] = useMemo(() => {
    if (!showStars || effectiveStars <= 0) return []
    return Array.from({ length: effectiveStars }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() < 0.85 ? 1 : 2,
      delay: Math.random() * 4,
      duration: 2 + Math.random() * 3,
    }))
  }, [effectiveStars, showStars])

  // Colors via design tokens with safe fallbacks
  const primary = "var(--primary, oklch(70% 0.2 180))"
  const accent = "var(--accent, oklch(80% 0.25 120))"

  return (
    <div
      className={["relative w-full overflow-hidden", heightClassName, className].join(" ")}
      role="presentation"
      aria-hidden="true"
    >
      {/* Subtle dark backdrop to enhance neon glows without overpowering */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 60% at 50% 100%, color-mix(in oklch, var(--background, oklch(15% 0 0)) 100%, transparent) 0%, transparent 65%)",
        }}
      />

      {/* Stars */}
      {showStars && stars.length > 0 && (
        <div className="pointer-events-none absolute inset-0">
          {stars.map((s) => (
            <motion.span
              key={s.id}
              className="absolute rounded-full"
              style={{
                left: `${s.x}%`,
                top: `${s.y}%`,
                width: s.size,
                height: s.size,
                background: `color-mix(in oklch, ${accent} 85%, white)`,
                filter: "drop-shadow(0 0 2px color-mix(in oklch, var(--primary) 60%, transparent))",
              }}
              initial={{ opacity: 0.2, scale: 0.9 }}
              animate={{ opacity: [0.25, 0.9, 0.25], scale: [0.9, 1.1, 0.9] }}
              transition={{
                delay: s.delay,
                duration: s.duration,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Comets */}
      <div className="pointer-events-none absolute inset-0">
        {comets.map((c) => (
          <motion.div
            key={c.id}
            className="absolute"
            initial={{ left: `${c.startX}%`, top: `${c.startY}%`, opacity: 0 }}
            animate={{ left: `${c.endX}%`, top: `${c.endY}%`, opacity: [0, 1, 0] }}
            transition={{
              delay: c.delay,
              duration: c.duration,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: 0.6,
              ease: "easeInOut",
            }}
            style={{ willChange: "transform, left, top, opacity" }}
          >
            {/* Head */}
            <div
              className="rounded-full"
              style={{
                width: c.size,
                height: c.size,
                background: `radial-gradient(circle at 30% 30%, white, ${primary})`,
                boxShadow: `
                  0 0 8px ${primary},
                  0 0 16px color-mix(in oklch, ${primary} 70%, transparent),
                  0 0 28px color-mix(in oklch, ${accent} 50%, transparent)
                `,
                filter: "blur(0.1px)",
              }}
            />
            {/* Tail */}
            <div
              className="mt-[-2px]"
              style={{
                width: Math.max(24, c.size * 10),
                height: Math.max(2, c.size * 0.8),
                background: `linear-gradient(90deg, color-mix(in oklch, ${primary} 0%, transparent) 0%, color-mix(in oklch, ${primary} 70%, transparent) 30%, color-mix(in oklch, ${accent} 60%, transparent) 70%, transparent 100%)`,
                filter: "blur(0.6px)",
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default CometField
