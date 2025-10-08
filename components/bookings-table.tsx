import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye, Mail } from "lucide-react"

export function BookingsTable() {
  const bookings = [
    {
      id: "HRZ1234567",
      name: "John Doe",
      email: "john@example.com",
      event: "Battle of Bands",
      tickets: 2,
      amount: 50,
      status: "confirmed",
      date: "Oct 28, 2025",
    },
    {
      id: "HRZ1234568",
      name: "Jane Smith",
      email: "jane@example.com",
      event: "Hackathon",
      tickets: 1,
      amount: 30,
      status: "confirmed",
      date: "Oct 28, 2025",
    },
    {
      id: "HRZ1234569",
      name: "Mike Johnson",
      email: "mike@example.com",
      event: "Cultural Night",
      tickets: 4,
      amount: 80,
      status: "pending",
      date: "Oct 27, 2025",
    },
    {
      id: "HRZ1234570",
      name: "Sarah Williams",
      email: "sarah@example.com",
      event: "Stand-Up Comedy",
      tickets: 2,
      amount: 40,
      status: "confirmed",
      date: "Oct 27, 2025",
    },
    {
      id: "HRZ1234571",
      name: "David Brown",
      email: "david@example.com",
      event: "Gaming Championship",
      tickets: 3,
      amount: 75,
      status: "confirmed",
      date: "Oct 26, 2025",
    },
  ]

  return (
    <Card className="overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50 border-b border-border">
            <tr>
              <th className="text-left p-4 font-semibold">Booking ID</th>
              <th className="text-left p-4 font-semibold">Customer</th>
              <th className="text-left p-4 font-semibold">Event</th>
              <th className="text-left p-4 font-semibold">Tickets</th>
              <th className="text-left p-4 font-semibold">Amount</th>
              <th className="text-left p-4 font-semibold">Status</th>
              <th className="text-left p-4 font-semibold">Date</th>
              <th className="text-left p-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                <td className="p-4">
                  <span className="font-mono text-sm">{booking.id}</span>
                </td>
                <td className="p-4">
                  <div>
                    <p className="font-medium">{booking.name}</p>
                    <p className="text-sm text-muted-foreground">{booking.email}</p>
                  </div>
                </td>
                <td className="p-4">
                  <span className="text-sm">{booking.event}</span>
                </td>
                <td className="p-4">
                  <span className="font-medium">{booking.tickets}</span>
                </td>
                <td className="p-4">
                  <span className="font-semibold">${booking.amount}</span>
                </td>
                <td className="p-4">
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
                </td>
                <td className="p-4">
                  <span className="text-sm text-muted-foreground">{booking.date}</span>
                </td>
                <td className="p-4">
                  <div className="flex gap-2">
                    <Button size="sm" variant="ghost">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
