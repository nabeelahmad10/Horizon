"use client"

import Image from "next/image"
import { useRef, type MouseEvent } from "react"

const team = {
  secretary: {
    name: "Krishanu Mahapatra",
    title: "Secretary",
    image: "krishanu.jpeg",
  },
  jointSecretary: {
    name: "Devika Nair",
    title: "Joint Secretary",
    image: "Devika.jpg",
  },
  // Updated with the new coordinator titles
  coordinators: [
    {
      name: "Aviral Samdaria",
      title: "Public Relations Coordinator",
      image: "Aviral.jpg",
    },
    {
      name: "Yatharth Tripathi",
      title: "Creative Coordinator",
      image: "yatharth.jpeg",
    },
    {
      name: "Pranav Pande",
      title: "Sponsorship & Finance Coordinator",
      image: "pp.jpg",
    },
    { name: "Sudhir", title: "ORM Coordinator", image: "sudhir.jpg" },
    {
      name: "Hardik Barak",
      title: "Sponsorship & Finance Coordinator",
      image: "david.jpg",
    },
    { name: "Rebins Ravikumar", title: "Creative Coordinator", image: "rebbins.jpg" },
    { name: "Gokul", title: "Creative Coordinator", image: "gokul.png" },
    { name: "Surya", title: "Creative Coordinator", image: "surya.jpg" },
  ],
}

function Card({
  person,
}: {
  person: { name: string; title?: string; image: string }
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const { left, top, width, height } = cardRef.current.getBoundingClientRect()
    const x = e.clientX - left
    const y = e.clientY - top
    const rotateX = (y / height - 0.5) * -30
    const rotateY = (x / width - 0.5) * 30
    const glowX = (x / width) * 100
    const glowY = (y / height) * 100
    cardRef.current.style.setProperty("--rotate-x", `${rotateX}deg`)
    cardRef.current.style.setProperty("--rotate-y", `${rotateY}deg`)
    cardRef.current.style.setProperty("--glow-x", `${glowX}%`)
    cardRef.current.style.setProperty("--glow-y", `${glowY}%`)
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.setProperty("--rotate-x", "0deg")
    cardRef.current.style.setProperty("--rotate-y", "0deg")
  }

  return (
    <div ref={cardRef} className="profile-card w-full" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {/* Use Styled-JSX instead of a plain style tag */}
      <style jsx>{`
        .profile-card {
          perspective: 1200px;
          --rotate-x: 0;
          --rotate-y: 0;
          --glow-x: 50%;
          --glow-y: 50%;
        }
        .profile-card-inner {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          transform-style: preserve-3d;
          transform: rotateX(var(--rotate-x)) rotateY(var(--rotate-y));
          transition: transform 0.1s ease-out;
          background: linear-gradient(
            180deg,
            rgba(10, 11, 12, 0.6),
            rgba(7, 8, 10, 0.85)
          );
          border: 1px solid rgba(255, 255, 255, 0.04);
          z-index: 1;
        }
        .profile-card-inner::before {
          content: "";
          position: absolute;
          inset: -10px;
          border-radius: 20px;
          pointer-events: none;
          opacity: 0;
          transform: scale(0.96);
          transition: opacity 300ms ease, transform 300ms ease,
            filter 300ms ease;
          filter: blur(12px);
          background: radial-gradient(
            circle at var(--glow-x) var(--glow-y),
            rgba(106, 90, 255, 0.25),
            rgba(229, 9, 20, 0.25),
            transparent 40%
          );
        }
        .profile-card:hover .profile-card-inner {
          transition: transform 0.05s ease-out;
          box-shadow: 0 30px 60px rgba(2, 6, 23, 0.6),
            0 10px 30px rgba(229, 9, 20, 0.08),
            inset 0 2px 8px rgba(255, 255, 255, 0.02);
        }
        .profile-card:hover .profile-card-inner::before {
          opacity: 1;
          transform: scale(1);
          filter: blur(14px);
        }
        .profile-image-wrap {
          height: 320px;
          min-height: 240px;
          background: #0b0b0b;
          position: relative;
        }
        .profile-info {
          padding: 20px 18px 26px;
          text-align: center;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.04)
          );
          position: relative;
          z-index: 2;
        }
      `}</style>

      <div className="profile-card-inner">
        <div className="relative profile-image-wrap w-full bg-gray-800">
          <Image
            src={`/team/${person.image}`}
            alt={`${person.name} — ${person.title ?? "Team"}`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 320px"
          />
        </div>
        <div className="profile-info">
          <h3 className="text-lg font-semibold text-white">{person.name}</h3>
          {person.title && <p className="mt-2 text-sm text-neutral-300">{person.title}</p>}
        </div>
      </div>
    </div>
  )
}

export default function CoreTeam() {
  return (
    <section aria-labelledby="core-team-heading" className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-8">
          {/* Secretary & Joint Secretary Row */}
          <div className="grid w-full grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            <Card person={team.secretary} />
            <Card person={team.jointSecretary} />
          </div>

          {/* Coordinators Row 1 */}
          <div className="grid w-full max-w-5xl grid-cols-2 gap-6 md:grid-cols-4">
            {team.coordinators.slice(0, 4).map((c) => (
              <Card key={c.name} person={c} />
            ))}
          </div>

          {/* Coordinators Row 2 */}
          <div className="grid w-full max-w-5xl grid-cols-2 gap-6 md:grid-cols-4">
            {team.coordinators.slice(4, 8).map((c) => (
              <Card key={c.name} person={c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
