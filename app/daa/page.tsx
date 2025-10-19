"use client";

import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/footer";
import { DAAGallery } from "@/components/daa-gallery";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Lightbulb, Heart } from "lucide-react";
import CoreTeam from "@/components/core-team"; // <-- add this

export default function DAAPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / 50;
      const y = (e.clientY - window.innerHeight / 2) / 50;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const stats = [
    { icon: Users, label: "Alumni Network", value: "50,000+" },
    { icon: Target, label: "Career Placements", value: "95%" },
    { icon: Lightbulb, label: "Startups Funded", value: "200+" },
    { icon: Heart, label: "Scholarships Given", value: "$5M+" },
  ];

  return (
    <main
      className="relative min-h-screen bg-[#0f0f0f] text-neutral-100"
      style={{
        fontFamily:
          "SF Pro, Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto",
      }}
    >
      <Navigation />

      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Gradient backgrounds */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,rgba(0,0,0,0),rgba(0,0,0,0.65)_60%,rgba(0,0,0,0.85))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full opacity-20 blur-3xl bg-[radial-gradient(circle_at_30%_30%,rgba(229,9,20,0.6),transparent_60%)]" />
        <div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full opacity-15 blur-3xl bg-[radial-gradient(circle_at_60%_60%,rgba(178,7,16,0.6),transparent_60%)]" />

        <div className="relative z-10 container mx-auto px-4 text-center py-24">
          <Badge className="mb-6 border border-[#E50914]/40 bg-[#E50914]/15 text-[#E50914] hover:bg-[#E50914]/25">
            Directorate of Alumni Affairs
          </Badge>
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 transition-transform duration-200"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            }}
          >
            <span className="text-[#f41414]">Building Bridges</span>
            <br />
            <span
              className="text-neutral-200"
              style={{ fontStyle: "italic", fontWeight: 500 }}
            >
              Between Generations
            </span>
          </h1>
          <p
            className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto"
            style={{ color: "#E6E2DA" }}
          >
            Connecting alumni and students through mentorship, career
            opportunities, and lifelong relationships.
          </p>
        </div>
      </section>

      {/* CORE TEAM */}
      <section className="py-20 font-poppins">
        <div className="container mx-auto px-4 mb-12 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span
              className="text-[#fe0c0c] tracking-wide"
              style={{ letterSpacing: "0.06em" }}
            >
              Our Team
            </span>
          </h2>
          <p
            className="text-lg text-neutral-300 max-w-3xl mx-auto"
            style={{ color: "#E6E2DA" }}
          >
            Meet the architects of an unforgettable experience.
          </p>

          {/* Render core team here */}
          <CoreTeam />
        </div>

        <DAAGallery />
      </section>

      {/* STATS */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl p-6 text-center bg-[#141414]/85 border border-white/10 backdrop-blur-md shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform"
                >
                  <div className="inline-flex p-4 rounded-xl bg-[#E50914] mb-4 shadow-[0_10px_30px_-12px_rgba(229,9,20,0.6)]">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-2 text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
