"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Minus, Plus, ArrowLeft, ShoppingCart } from "lucide-react"
import { useRouter } from "next/navigation"

interface Event {
  id: number
  slug: string
  title: string
  price: number
}

export function TicketSelector({ event, onBack }: { event: Event; onBack: () => void }) {
  const [quantity, setQuantity] = useState(1)
  const router = useRouter()

  const handleQuantityChange = (delta: number) => {
    const newQuantity = quantity + delta
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity)
    }
  }

  const subtotal = event.price * quantity
  const serviceFee = subtotal * 0.05
  const total = subtotal + serviceFee

  const handleProceedToCheckout = () => {
    // Store booking data in sessionStorage
    sessionStorage.setItem(
      "bookingData",
      JSON.stringify({
        eventId: event.id,
        eventTitle: event.title,
        quantity,
        price: event.price,
        subtotal,
        serviceFee,
        total,
      }),
    )
    router.push("/checkout")
  }

  return (
    <Card className="p-6 border-2 border-purple-500/20">
      <Button variant="ghost" size="sm" className="mb-4 -ml-2" onClick={onBack}>
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </Button>

      <h3 className="text-xl font-bold mb-6">Select Tickets</h3>

      {/* Quantity Selector */}
      <div className="mb-6">
        <Label className="mb-3 block">Number of Tickets</Label>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleQuantityChange(-1)}
            disabled={quantity <= 1}
            className="h-12 w-12"
          >
            <Minus className="w-4 h-4" />
          </Button>
          <Input
            type="number"
            value={quantity}
            onChange={(e) => {
              const val = Number.parseInt(e.target.value)
              if (val >= 1 && val <= 10) setQuantity(val)
            }}
            className="text-center text-2xl font-bold h-12"
            min={1}
            max={10}
          />
          <Button
            variant="outline"
            size="icon"
            onClick={() => handleQuantityChange(1)}
            disabled={quantity >= 10}
            className="h-12 w-12"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-2">Maximum 10 tickets per order</p>
      </div>

      {/* Price Breakdown */}
      <div className="space-y-3 py-4 border-y border-border mb-6">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Ticket Price × {quantity}</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Service Fee (5%)</span>
          <span className="font-medium">${serviceFee.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between text-lg font-bold pt-2 border-t border-border">
          <span>Total</span>
          <span className="text-purple-600">${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Checkout Button */}
      <Button
        size="lg"
        className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white"
        onClick={handleProceedToCheckout}
      >
        <ShoppingCart className="w-5 h-5 mr-2" />
        Proceed to Checkout
      </Button>

      <p className="text-xs text-center text-muted-foreground mt-4">
        You'll be able to review your order before payment
      </p>
    </Card>
  )
}
