"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Ticket, Calendar, Users, BarChart3, Settings, QrCode, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AdminSidebar() {
  const pathname = usePathname()

  const navItems = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/bookings", label: "Bookings", icon: Ticket },
    { href: "/admin/events", label: "Events", icon: Calendar },
    { href: "/admin/attendees", label: "Attendees", icon: Users },
    { href: "/admin/scanner", label: "Ticket Scanner", icon: QrCode },
    { href: "/admin/analytics", label: "Analytics", icon: BarChart3 },
    { href: "/admin/settings", label: "Settings", icon: Settings },
  ]

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-border bg-card p-6">
      {/* Logo */}
      <Link href="/admin" className="flex items-center gap-3 mb-8">
        <div className="bg-gradient-to-r from-purple-600 to-cyan-600 p-2 rounded-lg">
          <Ticket className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
            HORIZON
          </h2>
          <p className="text-xs text-muted-foreground">Admin Panel</p>
        </div>
      </Link>

      {/* Navigation */}
      <nav className="space-y-2 mb-8">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-all",
                isActive
                  ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="absolute bottom-6 left-6 right-6">
        <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
          <Link href="/">
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </Link>
        </Button>
      </div>
    </aside>
  )
}
