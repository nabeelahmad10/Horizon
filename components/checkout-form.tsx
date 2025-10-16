"use client"

import type React from "react"
import { bookTicket } from "@/hooks/useBookTickets";
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Ticket, CreditCard, User, Lock } from "lucide-react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabaseClient"

interface BookingData {
  eventId: number
  eventTitle: string
  quantity: number
  price: number
  subtotal: number
  serviceFee: number
  total: number
  seatNumber?: string
  qrCode?: string
}

export function CheckoutForm({ bookingData }: { bookingData: BookingData }) {
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Get authenticated user's id from Supabase Auth
    const { data: { user } } = await supabase.auth.getUser()
    const currentUserId = user?.id

    if (!currentUserId) {
      setIsProcessing(false)
      alert("You need to be logged in to book a ticket.")
      return
    }

    // CREATE booking POST in Supabase
    try {
      await bookTicket({
        eventId: bookingData.eventId,
        userId: currentUserId,
        type: "General", // If you support ticket types, replace accordingly
        price: bookingData.price,
        seatNumber: bookingData.seatNumber,
        qrCode: bookingData.qrCode,
      })
      // Success: Proceed as usual
    } catch (err) {
      setIsProcessing(false)
      alert("There was a problem booking your ticket. Please try again.")
      return
    }

    // Store confirmation data
    const confirmationData = {
      ...bookingData,
      ...formData,
      bookingId: `HRZ${Date.now()}`,
      bookingDate: new Date().toISOString(),
    }

    sessionStorage.setItem("confirmationData", JSON.stringify(confirmationData))
    sessionStorage.removeItem("bookingData")
    router.push("/booking-confirmation")
  }

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white border-0">Checkout</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Complete Your{" "}
              <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Booking
              </span>
            </h1>
            <p className="text-muted-foreground">Just a few more steps to secure your tickets</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit}>
                {/* Personal Information */}
                <Card className="p-6 mb-6">
                  <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <User className="w-5 h-5 text-purple-500" />
                    Personal Information
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        required
                        className="mt-2"
                      />
                      <p className="text-xs text-muted-foreground mt-1">Your tickets will be sent to this email</p>
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>
                </Card>
                {/* Payment Information */}
                <Card className="p-6 mb-6">
                  <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-cyan-500" />
                    Payment Information
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number *</Label>
                      <Input
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="1234 5678 9012 3456"
                        required
                        className="mt-2"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiryDate">Expiry Date *</Label>
                        <Input
                          id="expiryDate"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          placeholder="MM/YY"
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV *</Label>
                        <Input
                          id="cvv"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          placeholder="123"
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-muted/50 rounded-lg flex items-start gap-3">
                    <Lock className="w-5 h-5 text-green-500 mt-0.5" />
                    <div className="text-sm">
                      <div className="font-medium mb-1">Secure Payment</div>
                      <div className="text-muted-foreground">
                        Your payment information is encrypted and secure. We never store your card details.
                      </div>
                    </div>
                  </div>
                </Card>
                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>Processing Payment...</>
                  ) : (
                    <>
                      <CreditCard className="w-5 h-5 mr-2" />
                      Pay ${bookingData.total.toFixed(2)}
                    </>
                  )}
                </Button>
              </form>
            </div>
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="p-6 border-2 border-purple-500/20">
                  <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Ticket className="w-5 h-5 text-purple-500" />
                    Order Summary
                  </h2>
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="font-semibold mb-1">{bookingData.eventTitle}</div>
                      <div className="text-sm text-muted-foreground">
                        {bookingData.quantity} {bookingData.quantity === 1 ? "Ticket" : "Tickets"}
                      </div>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>${bookingData.subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Service Fee</span>
                        <span>${bookingData.serviceFee.toFixed(2)}</span>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="text-purple-600">${bookingData.total.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="space-y-2 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span>Instant email confirmation</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span>E-tickets with QR codes</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span>24/7 customer support</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
