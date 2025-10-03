"use client"

import { AdminSidebar } from "@/components/admin-sidebar"
import { AdminStats } from "@/components/admin-stats"
import { RecentBookings } from "@/components/recent-bookings"
import { EventsOverview } from "@/components/events-overview"
import { Badge } from "@/components/ui/badge"

export default function AdminDashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />

      <main className="flex-1 p-8 ml-64">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-4xl font-bold">
              Admin{" "}
              <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Dashboard
              </span>
            </h1>
            <Badge className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white border-0">
              Horizon Fest 2025
            </Badge>
          </div>
          <p className="text-muted-foreground">Welcome back! Here's what's happening with your festival.</p>
        </div>

        {/* Stats */}
        <AdminStats />

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <RecentBookings />
          <EventsOverview />
        </div>
      </main>
    </div>
  )
}
