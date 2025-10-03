"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TicketCard } from "@/components/ticket-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Ticket, Mail, Download } from "lucide-react"
import { useState, useEffect } from "react"

export default function MyTicketsPage() {
  const [tickets, setTickets] = useState<any[]>([])

  useEffect(() => {
    // In a real app, this would fetch from an API
    // For demo, we'll check if there's confirmation data
    const confirmationData = sessionStorage.getItem("confirmationData")
    if (confirmationData) {
      const data = JSON.parse(confirmationData)

      // Generate tickets for each quantity
      const generatedTickets = Array.from({ length: data.quantity }, (_, i) => ({
        ticketId: `TKT-${data.bookingId}-${i + 1}`,
        bookingId: data.bookingId,
        eventTitle: data.eventTitle,
        eventDate: "Oct 30, 2025", // This would come from event data
        eventTime: "6:00 PM - 10:00 PM",
        venue: "Main Stage Arena",
        holderName: data.fullName,
        ticketNumber: i + 1,
        totalTickets: data.quantity,
      }))

      setTickets(generatedTickets)
    }
  }, [])

  const handleDownloadAll = () => {
    console.log(" Downloading all tickets")
  }

  const handleResendEmail = async () => {
    console.log(" Resending ticket email")
    // In a real app, this would call the email API
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white border-0">
              <Ticket className="w-3 h-3 mr-1" />
              My Tickets
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your{" "}
              <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Tickets
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">View and manage all your Horizon Fest tickets</p>
          </div>

          {tickets.length > 0 ? (
            <>
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white"
                  onClick={handleDownloadAll}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download All Tickets
                </Button>
                <Button size="lg" variant="outline" onClick={handleResendEmail}>
                  <Mail className="w-5 h-5 mr-2" />
                  Resend to Email
                </Button>
              </div>

              {/* Tickets Grid */}
              <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
                {tickets.map((ticket) => (
                  <TicketCard key={ticket.ticketId} ticket={ticket} />
                ))}
              </div>
            </>
          ) : (
            <Card className="p-12 text-center max-w-2xl mx-auto">
              <div className="inline-flex p-4 rounded-full bg-muted mb-6">
                <Ticket className="w-12 h-12 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-bold mb-4">No Tickets Yet</h2>
              <p className="text-muted-foreground mb-6">
                You haven't booked any tickets yet. Browse our events and get your tickets now!
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white"
              >
                Browse Events
              </Button>
            </Card>
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
}
