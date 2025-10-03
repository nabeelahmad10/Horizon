"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StripeCheckoutForm } from "@/components/stripe-checkout-form"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

export default function CheckoutPage() {
  const [bookingData, setBookingData] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const data = sessionStorage.getItem("bookingData")
    if (!data) {
      router.push("/events")
      return
    }
    setBookingData(JSON.parse(data))
  }, [router])

  if (!bookingData) {
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
      <StripeCheckoutForm bookingData={bookingData} />
      <Footer />
    </main>
  )
}
