import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-cyan-900/20" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-purple-600 to-cyan-600 mb-8 animate-pulse">
            <Sparkles className="w-8 h-8 text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Experience{" "}
            <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">Horizon?</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Don't miss out on the most anticipated festival of the year. Book your tickets now and be part of something
            extraordinary.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white shadow-2xl shadow-purple-500/30 text-lg px-8 py-6 group"
              asChild
            >
              <Link href="/book-tickets">
                Get Your Tickets Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 hover:bg-foreground/5 bg-transparent"
              asChild
            >
              <Link href="/schedule">View Schedule</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>Instant Confirmation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
