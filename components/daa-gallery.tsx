"use client"

import { DraggableCardBody, DraggableCardContainer } from "@/components/ui/draggable-card"

export function DAAGallery() {
  const items = [
    {
      title: "Alumni Network",
      description: "Connect with 50,000+ alumni worldwide",
      image: "/professional-networking-event.png",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Career Development",
      description: "Mentorship programs and career guidance",
      image: "/career-mentorship-meeting.jpg",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Innovation Hub",
      description: "Fostering entrepreneurship and startups",
      image: "/innovation-startup-workspace.jpg",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Global Events",
      description: "Annual reunions and networking events",
      image: "/large-conference-event.jpg",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Student Support",
      description: "Scholarships and financial aid programs",
      image: "/students-studying.png",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Research Collaboration",
      description: "Industry-academia partnerships",
      image: "/research-laboratory-collaboration.jpg",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Community Impact",
      description: "Social initiatives and volunteering",
      image: "/community-volunteering-event.jpg",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ]

  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip bg-background">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <p className="absolute top-1/2 mx-auto max-w-3xl -translate-y-3/4 text-center text-3xl md:text-5xl font-black text-primary/20 px-4 leading-tight">
        Drag and explore our initiatives. Building bridges between alumni and students.
      </p>

      {items.map((item, index) => (
        <DraggableCardBody key={index} className={item.className}>
          <img
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover rounded-lg"
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-foreground">{item.title}</h3>
          <p className="mt-2 text-center text-sm text-muted-foreground">{item.description}</p>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  )
}
