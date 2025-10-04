import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function EventsOverview() {
  const events = [
    {
      name: "Battle of Bands",
      date: "Oct 30",
      sold: 850,
      capacity: 1000,
      revenue: 21250,
      status: "selling",
    },
    {
      name: "Hackathon",
      date: "Oct 31",
      sold: 180,
      capacity: 200,
      revenue: 5400,
      status: "selling",
    },
    {
      name: "Cultural Night",
      date: "Nov 1",
      sold: 600,
      capacity: 600,
      revenue: 12000,
      status: "sold-out",
    },
    {
      name: "Gaming Championship",
      date: "Oct 30",
      sold: 320,
      capacity: 400,
      revenue: 8000,
      status: "selling",
    },
  ]

  return (
    <Card className="p-6">
      <h2 className="text-xl font-bold mb-6">Events Overview</h2>
      <div className="space-y-6">
        {events.map((event, index) => {
          const percentage = (event.sold / event.capacity) * 100
          return (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="font-semibold">{event.name}</p>
                  <p className="text-sm text-muted-foreground">{event.date}</p>
                </div>
                <Badge
                  variant={event.status === "sold-out" ? "default" : "secondary"}
                  className={
                    event.status === "sold-out"
                      ? "bg-red-500/10 text-red-500 border-red-500/20"
                      : "bg-green-500/10 text-green-500 border-green-500/20"
                  }
                >
                  {event.status === "sold-out" ? "Sold Out" : "On Sale"}
                </Badge>
              </div>
              <div className="space-y-2">
                <Progress value={percentage} className="h-2" />
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    {event.sold} / {event.capacity} tickets
                  </span>
                  <span className="font-semibold">${event.revenue.toLocaleString()}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
