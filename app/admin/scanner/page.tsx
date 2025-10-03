"use client"

import { AdminSidebar } from "@/components/admin-sidebar"
import { QRScanner } from "@/components/qr-scanner"
import { Badge } from "@/components/ui/badge"

export default function TicketScannerPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />

      <main className="flex-1 p-8 ml-64">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-4xl font-bold">
              Ticket{" "}
              <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Scanner
              </span>
            </h1>
            <Badge className="bg-green-500/10 text-green-500 border-green-500/20">Scanner Active</Badge>
          </div>
          <p className="text-muted-foreground">Scan QR codes to validate and check-in attendees</p>
        </div>

        <QRScanner />
      </main>
    </div>
  )
}
