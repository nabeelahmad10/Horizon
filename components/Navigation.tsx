"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [dir, setDir] = useState<"up" | "down">("up")
  const [lastY, setLastY] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setIsScrolled(y > 12)
      setDir(y > lastY ? "down" : "up")
      setLastY(y)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [lastY])

  const links = useMemo(
    () => [
      { href: "/events", label: "Events" },
      { href: "/schedule", label: "Schedule" },
      { href: "/my-tickets", label: "My Tickets" },
      { href: "/about", label: "About" },
   //   { href: "/contact", label: "Contact" },
      { href: "/daa", label: "DAA" },
    ],
    [],
  )

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[70] transition-transform duration-300",
        isScrolled && dir === "down" ? "-translate-y-6 md:-translate-y-8" : "translate-y-0",
      )}
    >
      {/* subtle red glow behind */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 opacity-60 blur-2xl">
        <div className="mx-auto h-full w-[min(1200px,94%)] bg-[radial-gradient(60%_120%_at_50%_-20%,rgba(229,9,20,0.35),transparent_60%)]" />
      </div>

      <nav
        className={cn(
          "mx-auto mt-2 w-[min(1200px,94%)] relative rounded-xl",
          // Surfaces: Netflix dark
          "bg-[#141414]/90 supports-[backdrop-filter]:backdrop-blur-md",
          // Shadow + hairline
          "shadow-[0_8px_30px_-12px_rgba(0,0,0,0.75)] ring-1 ring-white/10",
          "transition-all duration-500",
          isScrolled ? "bg-[#141414]/95" : "bg-[#141414]/90",
        )}
      >
        {/* conic border tint (very subtle red) */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-[-1.2px] rounded-xl opacity-70"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 50%, rgba(229,9,20,.45), rgba(255,255,255,.08), rgba(229,9,20,.45))",
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor" as any,
            maskComposite: "exclude" as any,
            padding: "1.2px",
          }}
        />

        <div className="relative z-10 px-3 sm:px-5">
          <div className="flex h-14 sm:h-16 items-center justify-between">
            {/* logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white">
                <span className="text-[#E50914] drop-shadow-[0_0_12px_rgba(229,9,20,0.35)]">HORIZON</span>
              </span>
            </Link>

            {/* desktop links */}
            <div className="hidden md:flex items-center gap-1.5">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "relative rounded-lg px-2.5 py-1.5 text-[0.9rem] font-medium",
                    "text-neutral-200/85 hover:text-white transition-colors",
                  )}
                >
                  <span className="absolute inset-0 rounded-lg bg-white/5 opacity-0 ring-1 ring-white/10 transition-opacity hover:opacity-100" />
                  <span className="relative z-10">{l.label}</span>
                </Link>
              ))}
            </div>

            {/* desktop ctas */}
            <div className="hidden md:flex items-center gap-1.5">
              <Button
                asChild
                variant="ghost"
                className={cn(
                  "text-sm px-3 py-1 text-neutral-200 hover:text-white",
                  "hover:bg-white/5",
                )}
              >
                <Link href="/login">Login</Link>
              </Button>

              <Button
                asChild
                className={cn(
                  "text-sm px-3 py-1 text-white",
                  "bg-[#E50914] hover:bg-[#B20710]",
                )}
              >
                <Link href="/book-tickets">Book</Link>
              </Button>
            </div>

            {/* mobile toggle */}
            <button
              className="md:hidden grid h-8 w-8 place-items-center rounded-lg bg-white/5 ring-1 ring-white/10 backdrop-blur-md text-white"
              onClick={() => setIsOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* mobile drawer */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-[max-height,opacity] duration-400",
            isOpen ? "max-h-[360px] opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="px-3 pb-3 sm:px-5">
            <div className="rounded-xl border border-white/10 bg-[#0f0f0f]/95 p-2 backdrop-blur-xl">
              <div className="flex flex-col gap-1">
                <Link
                  href="/"
                  className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-200 hover:bg-white/5 hover:text-white transition"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-200 hover:bg-white/5 hover:text-white transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2">
                <Button
                  variant="outline"
                  asChild
                  className={cn(
                    "w-full text-sm",
                    "border-white/15 text-neutral-200 hover:text-white hover:bg-white/5",
                  )}
                >
                  <Link href="/login">Login</Link>
                </Button>
                <Button
                  asChild
                  className="w-full text-sm text-white bg-[#E50914] hover:bg-[#B20710]"
                >
                  <Link href="/book-tickets">Book</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
