import { Card } from "@/components/ui/card"
import { Ticket, DollarSign, Users, TrendingUp } from "lucide-react"

export function AdminStats() {
  const stats = [
    {
      label: "Total Bookings",
      value: "1,234",
      change: "+12.5%",
      icon: Ticket,
      color: "from-purple-500 to-pink-500",
    },
    {
      label: "Revenue",
      value: "$45,678",
      change: "+8.2%",
      icon: DollarSign,
      color: "from-cyan-500 to-blue-500",
    },
    {
      label: "Attendees",
      value: "3,456",
      change: "+15.3%",
      icon: Users,
      color: "from-orange-500 to-red-500",
    },
    {
      label: "Conversion Rate",
      value: "68.4%",
      change: "+4.1%",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-green-500">{stat.change}</span>
            </div>
            <div className="text-3xl font-bold mb-1">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </Card>
        )
      })}
    </div>
  )
}
