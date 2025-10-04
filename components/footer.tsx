"use client"

import Link from "next/link"
import { Ticket, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"

export function Footer() {
  const footerLinks = {
    Festival: [
      { label: "About", href: "/about" },
      { label: "Events", href: "/events" },
      { label: "Schedule", href: "/schedule" },
      { label: "Venue", href: "/venue" },
    ],
    Support: [
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
    ],
    Account: [
      { label: "Login", href: "/login" },
      { label: "Register", href: "/register" },
      { label: "My Tickets", href: "/my-tickets" },
      { label: "Profile", href: "/profile" },
    ],
  }

  return (
    <footer className="relative overflow-hidden border-t border-border/60">
      {/* ==== AURORA / GRID / GLOW BACKDROP ==== */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {/* Soft grid */}
        <div className="[mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] absolute inset-0 opacity-[0.08]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        {/* Aurora blobs */}
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl bg-[radial-gradient(circle_at_30%_30%,#a855f7,transparent_60%)] animate-[spin_30s_linear_infinite]" />
        <div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full opacity-40 blur-3xl bg-[radial-gradient(circle_at_60%_60%,#06b6d4,transparent_60%)] animate-[spin_40s_linear_infinite_reverse]" />
        <div className="absolute top-1/4 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full opacity-30 blur-3xl bg-[radial-gradient(circle_at_center,#ec4899,transparent_55%)] animate-[pulse_6s_ease-in-out_infinite]" />
      </div>

      {/* ==== CONIC RIM (animated) ==== */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-40 [mask-image:linear-gradient(to_top,transparent,black_20%,black_80%,transparent)]"
      >
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-fuchsia-500/70 to-transparent animate-[pulse_3s_ease-in-out_infinite]" />
        <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent animate-[pulse_3s_ease-in-out_infinite]" />
      </div>

      {/* ==== GLASS PANEL ==== */}
      <div className="relative mx-auto w-full max-w-7xl px-4 py-14 md:py-16">
        <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-10">
          {/* animated gradient ring */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl [mask:linear-gradient(#000,transparent_30%)]">
            <div className="absolute -inset-0.5 rounded-2xl bg-[conic-gradient(from_0deg,theme(colors.cyan.500),theme(colors.fuchsia.500),theme(colors.purple.500),theme(colors.cyan.500))] opacity-40 blur-xl animate-[spin_18s_linear_infinite]" />
          </div>

          {/* CONTENT GRID */}
          <div className="relative grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/" className="mb-5 flex items-center gap-3">
               
                <div>
                  <h3 className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-xl font-extrabold tracking-tight text-transparent">
                    HORIZON
                  </h3>
                  <p className="text-xs text-white/60">by DAA</p>
                </div>
              </Link>

              <p className="mb-5 max-w-sm text-sm text-white/70">
                Experience three days of innovation, entertainment, and celebration at Horizon Fest 2025.
              </p>

              {/* Contact chips */}
              <div className="flex flex-col gap-2 text-sm">
                <InfoChip icon={<Mail className="h-4 w-4" />} label="info@daa.srmist.edu.in" />
                <InfoChip icon={<Phone className="h-4 w-4" />} label="+91 9500000009" />
                <InfoChip icon={<MapPin className="h-4 w-4" />} label="UB 4th Floor" />
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="relative">
                <h4 className="mb-4 font-semibold text-white/90">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="
                          group/link inline-flex items-center gap-1 text-sm text-white/60 transition-all
                          hover:text-white hover:translate-x-0.5
                        "
                      >
                        <span className="relative">
                          {link.label}
                          <span
                            className="
                              absolute left-0 top-full block h-[2px] w-0 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-400
                              transition-all duration-300 group-hover/link:w-full
                            "
                          />
                        </span>
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover/link:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* subtle glow divider on first row in large */}
                <div className="pointer-events-none mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="relative mt-10 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-6 md:flex-row">
            <p className="text-sm text-white/60">
              © 2025 Horizon Fest. Organized by Directorate of Alumni Affairs. All rights reserved.
            </p>

            {/* tiny pill links */}
            <div className="flex items-center gap-2">
              <PillLink href="/terms">Terms</PillLink>
              <PillLink href="/privacy">Privacy</PillLink>
              <PillLink href="/cookies">Cookies</PillLink>
            </div>

            {/* moving rainbow bar */}
            <div className="pointer-events-none absolute -top-px left-0 h-[2px] w-full overflow-hidden">
              <div className="h-full w-[200%] bg-[linear-gradient(90deg,transparent,theme(colors.fuchsia.500),theme(colors.purple.500),theme(colors.cyan.400),transparent)] animate-[slide_8s_linear_infinite]" />
            </div>
          </div>
        </div>
      </div>

      {/* keyframes via arbitrary animate classes */}
      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </footer>
  )
}

/* ---------- Little subcomponents for polish ---------- */

function InfoChip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-white/70 backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/10 hover:text-white">
      {icon}
      <span>{label}</span>
    </div>
  )
}

function PillLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="
        relative inline-flex items-center gap-2 rounded-full border border-white/10
        bg-white/[0.06] px-3.5 py-1.5 text-xs text-white/80 backdrop-blur
        transition-all hover:-translate-y-0.5 hover:bg-white/[0.12] hover:text-white
        hover:shadow-[0_8px_28px_-10px_rgba(168,85,247,0.45)]
      "
    >
      {children}
    </Link>
  )
}
