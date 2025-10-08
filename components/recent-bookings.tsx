import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export function RecentBookings() {
  const bookings = [
    {
      id: "HRZ1234567",
      name: "John Doe",
      email: "john@example.com",
      event: "Battle of Bands",
      tickets: 2,
      amount: 50,
      status: "confirmed",
      time: "2 hours ago",
    },
    {
      id: "HRZ1234568",
      name: "Jane Smith",
      email: "jane@example.com",
      event: "Hackathon",
      tickets: 1,
      amount: 30,
      status: "confirmed",
      time: "3 hours ago",
    },
    {
      id: "HRZ1234569",
      name: "Mike Johnson",
      email: "mike@example.com",
      event: "Cultural Night",
      tickets: 4,
      amount: 80,
      status: "pending",
      time: "5 hours ago",
    },
    {
      id: "HRZ1234570",
      name: "Sarah Williams",
      email: "sarah@example.com",
      event: "Stand-Up Comedy",
      tickets: 2,
      amount: 40,
      status: "confirmed",
      time: "6 hours ago",
    },
  ]

  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-6">Recent Bookings</h2>
      <div className="space-y-4">
        {bookings.map((booking) => (
          <div key={booking.id} className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
            <Avatar>
              <AvatarFallback className="bg-gradient-to-br from-purple-600 to-cyan-600 text-white">
                {booking.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <p className="font-semibold truncate">{booking.name}</p>
                <Badge
                  variant={booking.status === "confirmed" ? "default" : "secondary"}
                  className={
                    booking.status === "confirmed"
                      ? "bg-green-500/10 text-green-500 border-green-500/20"
                      : "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                  }
                >
                  {booking.status}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground truncate">{booking.event}</p>
              <p className="text-xs text-muted-foreground">{booking.time}</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">${booking.amount}</p>
              <p className="text-xs text-muted-foreground">{booking.tickets} tickets</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
