import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const base = `
  relative inline-flex items-center justify-center gap-2 shrink-0
  whitespace-nowrap rounded-md text-sm font-semibold
  transition-all duration-300 ease-out
  outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50
  disabled:pointer-events-none disabled:opacity-50
  [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0
  data-[pressed=true]:scale-[0.98]
  group isolate overflow-hidden
`

const buttonVariants = cva(base, {
  variants: {
    variant: {
      // your originals (kept)
      default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
      destructive:
        "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
      outline:
        "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
      secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
      link: "text-primary underline-offset-4 hover:underline",

      // 🔥 new “not AI-gen” looks ↓

      // Neon gel pill with orbiting conic glow + glass inner
      neon: `
        text-white bg-black/50 backdrop-blur-xl border border-white/10
        shadow-[0_0_0_1px_theme(colors.white/0.06),0_10px_40px_-10px_theme(colors.cyan.500/40)]
        hover:shadow-[0_0_0_1px_theme(colors.white/0.08),0_12px_50px_-12px_theme(colors.cyan.400/60)]
        before:content-[''] before:absolute before:inset-[-1px]
        before:bg-[conic-gradient(var(--tw-gradient-stops))] 
        before:from-cyan-400 before:via-fuchsia-500 before:to-cyan-400
        before:opacity-40 before:blur-xl before:-z-10 before:rounded-[inherit]
        after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.16),transparent)]
        after:pointer-events-none
        hover:before:opacity-60
        outline outline-1 outline-white/5
      `,

      // Vaporwave gradient with rotating halo & inner shimmer
      vapor: `
        text-white bg-gradient-to-r from-fuchsia-600 via-purple-600 to-cyan-500
        hover:from-fuchsia-500 hover:to-cyan-400
        shadow-[0_10px_30px_-10px_theme(colors.fuchsia.500/50)]
        before:content-[''] before:absolute before:-inset-16 before:bg-[conic-gradient(at_50%_50%,theme(colors.fuchsia.500),theme(colors.purple.500),theme(colors.cyan.400),theme(colors.fuchsia.500))]
        before:animate-[spin_6s_linear_infinite] before:opacity-40 before:blur-2xl before:-z-10
        after:content-[''] after:absolute after:inset-[1px] after:rounded-[inherit]
        after:bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02))]
        ring-1 ring-white/10
      `,

      // Wireframe / dev-mode outline with offset hover jump
      wire: `
        bg-transparent text-white border border-white/20
        shadow-[inset_0_0_0_1px_theme(colors.white/0.04)]
        hover:translate-y-[-1px] hover:shadow-[inset_0_0_0_1px_theme(colors.white/0.08),0_8px_14px_-8px_rgba(255,255,255,0.25)]
        before:content-[''] before:absolute before:inset-0 before:border before:border-dashed before:border-white/30 before:rounded-[inherit]
        after:content-[''] after:absolute after:inset-0 after:rounded-[inherit]
        after:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.12),transparent_60%)]
      `,

      // Pixel/NES chunk with drop shadow + active squish
      pixel: `
        bg-zinc-900 text-zinc-50 border border-zinc-700
        shadow-[4px_4px_0_0_rgba(0,0,0,0.6)]
        hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[6px_6px_0_0_rgba(0,0,0,0.6)]
        active:translate-x-[0px] active:translate-y-[0px] active:shadow-[4px_4px_0_0_rgba(0,0,0,0.6)]
        tracking-wide
      `,

      // Gooey blob glow without filters—fakes w/ blurs & pings
      goo: `
        bg-slate-900/70 text-white border border-white/10 backdrop-blur-xl
        before:content-[''] before:absolute before:-left-6 before:top-1/2 before:-translate-y-1/2
        before:size-20 before:rounded-full before:bg-cyan-400/60 before:blur-xl before:animate-ping
        after:content-[''] after:absolute after:-right-6 after:top-1/2 after:-translate-y-1/2
        after:size-16 after:rounded-full after:bg-fuchsia-400/60 after:blur-xl
        hover:before:opacity-70 hover:after:opacity-70
      `,
    },
    size: {
      default: "h-9 px-4 has-[>svg]:px-3",
      sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
      lg: "h-11 rounded-lg px-6 has-[>svg]:px-4",
      icon: "size-9",
      // new loud sizes
      xl: "h-12 rounded-xl px-7 text-base",
      "2xl": "h-14 rounded-2xl px-8 text-lg",
    },
    // optional emphasis toggle
    loud: {
      true: "brightness-110 contrast-125 saturate-125",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    loud: false,
  },
})

function Button({
  className,
  variant,
  size,
  loud,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, loud, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
