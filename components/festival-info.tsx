import { Card } from "@/components/ui/card"
import { Users, Trophy, Music, Zap } from "lucide-react"

export function FestivalInfo() {
  const stats = [
    {
      icon: Users,
      value: "5000+",
      label: "Expected Attendees",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Trophy,
      value: "9",
      label: "Exciting Events",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Music,
      value: "3",
      label: "Days of Fun",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Zap,
      value: "100%",
      label: "Pure Energy",
      color: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience the{" "}
            <span className="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Horizon Fest brings together the brightest minds, the most talented performers, and the most innovative
            ideas for three unforgettable days.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card
                key={index}
                className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 hover:border-purple-500/50"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="p-8 relative z-10">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
