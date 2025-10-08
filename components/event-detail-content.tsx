"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Users, Ticket, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { TicketSelector } from "@/components/ticket-selector"

interface Event {
  id: number
  slug: string
  title: string
  description: string
  icon: any
  category: string
  color: string
  date: string
  time: string
  venue: string
  capacity: number
  price: number
  longDescription: string
}

export function EventDetailContent({ event }: { event: Event }) {
  const Icon = event.icon
  const [showTicketSelector, setShowTicketSelector] = useState(false)

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button variant="ghost" className="mb-8" asChild>
          <Link href="/events">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Events
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Hero Card */}
            <Card className="p-8 mb-8 relative overflow-hidden border-2">
              <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-5`} />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${event.color}`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <Button variant="ghost" size="icon">
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>

                <Badge className="mb-4" variant="secondary">
                  {event.category}
                </Badge>

                <h1 className="text-4xl md:text-5xl font-bold mb-4">{event.title}</h1>
                <p className="text-lg text-muted-foreground">{event.description}</p>
              </div>
            </Card>

            {/* About Section */}
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">About This Event</h2>
              <p className="text-muted-foreground leading-relaxed">{event.longDescription}</p>
            </Card>

            {/* Event Details */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Event Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-purple-500/10">
                    <Calendar className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Date</div>
                    <div className="text-sm text-muted-foreground">{event.date}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-cyan-500/10">
                    <Clock className="w-5 h-5 text-cyan-500" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Time</div>
                    <div className="text-sm text-muted-foreground">{event.time}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-orange-500/10">
                    <MapPin className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Venue</div>
                    <div className="text-sm text-muted-foreground">{event.venue}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-green-500/10">
                    <Users className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Capacity</div>
                    <div className="text-sm text-muted-foreground">{event.capacity} attendees</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar - Ticket Booking */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {!showTicketSelector ? (
                <Card className="p-6 border-2 border-purple-500/20">
                  <div className="text-center mb-6">
                    <div className="text-sm text-muted-foreground mb-2">Ticket Price</div>
                    <div className="text-5xl font-bold mb-2">${event.price}</div>
                    <div className="text-sm text-muted-foreground">per person</div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white mb-4"
                    onClick={() => setShowTicketSelector(true)}
                  >
                    <Ticket className="w-5 h-5 mr-2" />
                    Book Tickets
                  </Button>

                  <div className="space-y-3 pt-4 border-t border-border">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Instant Confirmation</span>
                      <span className="text-green-500 font-medium">✓</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">E-Ticket with QR</span>
                      <span className="text-green-500 font-medium">✓</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Secure Payment</span>
                      <span className="text-green-500 font-medium">✓</span>
                    </div>
                  </div>
                </Card>
              ) : (
                <TicketSelector event={event} onBack={() => setShowTicketSelector(false)} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
