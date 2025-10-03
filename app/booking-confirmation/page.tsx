"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Download, Mail, Calendar, Ticket, Loader2, Eye } from "lucide-react"
import Link from "next/link"

export default function BookingConfirmationPage() {
  const [confirmationData, setConfirmationData] = useState<any>(null)
  const [emailSent, setEmailSent] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const data = sessionStorage.getItem("confirmationData")
    if (!data) {
      router.push("/events")
      return
    }
    const parsedData = JSON.parse(data)
    setConfirmationData(parsedData)

    // Send ticket email
    sendTicketEmail(parsedData)
  }, [router])

  const sendTicketEmail = async (data: any) => {
    try {
      const tickets = Array.from({ length: data.quantity }, (_, i) => ({
        ticketId: `TKT-${data.bookingId}-${i + 1}`,
        ticketNumber: i + 1,
      }))

      await fetch("/api/send-ticket-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email,
          bookingId: data.bookingId,
          eventTitle: data.eventTitle,
          quantity: data.quantity,
          tickets,
        }),
      })

      setEmailSent(true)
    } catch (error) {
      console.error(" Error sending ticket email:", error)
    }
  }

  const handleResendEmail = async () => {
    if (confirmationData) {
      await sendTicketEmail(confirmationData)
    }
  }

  if (!confirmationData) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-24 flex items-center justify-center">
          <Card className="p-8">
            <Loader2 className="w-8 h-8 animate-spin mx-auto" />
          </Card>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Success Message */}
            <div className="text-center mb-12">
              <div className="inline-flex p-4 rounded-full bg-green-500/10 mb-6 animate-pulse">
                <CheckCircle2 className="w-16 h-16 text-green-500" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Booking{" "}
                <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Confirmed!
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-2">
                Your tickets have been sent to{" "}
                <span className="font-medium text-foreground">{confirmationData.email}</span>
              </p>
              {emailSent && (
                <Badge className="bg-green-500/10 text-green-500 border-green-500/20">Email Sent Successfully</Badge>
              )}
            </div>

            {/* Booking Details */}
            <Card className="p-8 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Booking Details</h2>
                <Badge className="bg-green-500/10 text-green-500 border-green-500/20">Confirmed</Badge>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Booking ID</span>
                  <span className="font-mono font-semibold">{confirmationData.bookingId}</span>
                </div>
                <div className="flex items-start justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Event</span>
                  <span className="font-semibold text-right">{confirmationData.eventTitle}</span>
                </div>
                <div className="flex items-start justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Tickets</span>
                  <span className="font-semibold">{confirmationData.quantity}</span>
                </div>
                <div className="flex items-start justify-between py-3 border-b border-border">
                  <span className="text-muted-foreground">Total Paid</span>
                  <span className="font-semibold text-purple-600">${confirmationData.total.toFixed(2)}</span>
                </div>
                <div className="flex items-start justify-between py-3">
                  <span className="text-muted-foreground">Booking Date</span>
                  <span className="font-semibold">
                    {new Date(confirmationData.bookingDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </Card>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white"
                asChild
              >
                <Link href="/my-tickets">
                  <Eye className="w-5 h-5 mr-2" />
                  View Tickets
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                <Download className="w-5 h-5 mr-2" />
                Download PDF
              </Button>
              <Button size="lg" variant="outline" onClick={handleResendEmail}>
                <Mail className="w-5 h-5 mr-2" />
                Resend Email
              </Button>
            </div>

            {/* Next Steps */}
            <Card className="p-6 bg-muted/50">
              <h3 className="font-semibold mb-4">What's Next?</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-purple-500 mt-0.5" />
                  <div className="text-sm">
                    <div className="font-medium mb-1">Check Your Email</div>
                    <div className="text-muted-foreground">
                      Your e-tickets with QR codes have been sent to your email address.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Ticket className="w-5 h-5 text-cyan-500 mt-0.5" />
                  <div className="text-sm">
                    <div className="font-medium mb-1">Save Your Tickets</div>
                    <div className="text-muted-foreground">
                      Download and save your tickets to your phone for easy access at the event.
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-orange-500 mt-0.5" />
                  <div className="text-sm">
                    <div className="font-medium mb-1">Add to Calendar</div>
                    <div className="text-muted-foreground">
                      Don't forget to add the event to your calendar so you don't miss it!
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Back to Events */}
            <div className="text-center mt-8">
              <Button variant="ghost" asChild>
                <Link href="/events">Browse More Events</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
