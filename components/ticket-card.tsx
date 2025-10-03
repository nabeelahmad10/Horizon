"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Download, Share2 } from "lucide-react"
import { QRCodeSVG } from "qrcode.react"

interface TicketData {
  ticketId: string
  bookingId: string
  eventTitle: string
  eventDate: string
  eventTime: string
  venue: string
  holderName: string
  ticketNumber: number
  totalTickets: number
}

export function TicketCard({ ticket }: { ticket: TicketData }) {
  const handleDownload = () => {
    // In a real app, this would generate a PDF or image of the ticket
    console.log("Downloading ticket:", ticket.ticketId)
  }

  const handleShare = () => {
    // In a real app, this would open a share dialog
    console.log(" Sharing ticket:", ticket.ticketId)
  }

  return (
    <Card className="overflow-hidden border-2 border-purple-500/20 hover:border-purple-500/40 transition-all">
      {/* Ticket Header */}
      <div className="bg-gradient-to-r from-purple-600 to-cyan-600 p-6 text-white">
        <div className="flex items-start justify-between mb-4">
          <div>
            <Badge className="bg-white/20 text-white border-0 mb-2">HORIZON FEST 2025</Badge>
            <h3 className="text-2xl font-bold mb-1">{ticket.eventTitle}</h3>
            <p className="text-white/80 text-sm">
              Ticket #{ticket.ticketNumber} of {ticket.totalTickets}
            </p>
          </div>
          <div className="text-right">
            <div className="text-xs text-white/80 mb-1">Booking ID</div>
            <div className="font-mono font-semibold text-sm">{ticket.bookingId}</div>
          </div>
        </div>

        {/* Event Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{ticket.eventDate}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{ticket.eventTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{ticket.venue}</span>
          </div>
        </div>
      </div>

      {/* Ticket Body */}
      <div className="p-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* QR Code */}
          <div className="flex-shrink-0">
            <div className="bg-white p-4 rounded-lg border-2 border-border">
              <QRCodeSVG
                value={ticket.ticketId}
                size={150}
                level="H"
                includeMargin={false}
                fgColor="#000000"
                bgColor="#ffffff"
              />
            </div>
            <p className="text-xs text-center text-muted-foreground mt-2">Scan at entry</p>
          </div>

          {/* Ticket Info */}
          <div className="flex-1 w-full">
            <div className="space-y-3">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Ticket Holder</div>
                <div className="font-semibold text-lg">{ticket.holderName}</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground mb-1">Ticket ID</div>
                <div className="font-mono text-sm">{ticket.ticketId}</div>
              </div>
              <div className="pt-3 border-t border-border">
                <div className="text-xs text-muted-foreground mb-2">Important Information</div>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• Please arrive 30 minutes before the event</li>
                  <li>• This ticket is non-transferable</li>
                  <li>• Valid ID required for entry</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6 pt-6 border-t border-border">
          <Button
            className="flex-1 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white"
            onClick={handleDownload}
          >
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
          <Button variant="outline" onClick={handleShare}>
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>
      </div>

      {/* Decorative Perforations */}
      <div className="relative h-4 bg-background">
        <div className="absolute top-0 left-0 right-0 flex justify-between">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-muted -translate-y-1/2" />
          ))}
        </div>
      </div>
    </Card>
  )
}
