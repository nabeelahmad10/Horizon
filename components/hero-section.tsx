"use client";

import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Sparkles, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export function HeroSection() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // track mouse position for spotlight
  useEffect(() => {
    const handle = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
      sectionRef.current?.style.setProperty("--mx", `${e.clientX}px`);
      sectionRef.current?.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  // simple particle system (shifted to Netflix red hues)
  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d")!;
    let raf = 0;
    const DPR = Math.min(2, window.devicePixelRatio || 1);
    let W = 0,
      H = 0;
    const resize = () => {
      W = c.clientWidth;
      H = c.clientHeight;
      c.width = W * DPR;
      c.height = H * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const dots = Array.from({ length: 90 }).map(() => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: Math.random() * 1.2 + 0.4,
      h: (Math.random() * 20 + 350) % 360,
    }));

    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      for (const d of dots) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < -10) d.x = W + 10;
        if (d.x > W + 10) d.x = -10;
        if (d.y < -10) d.y = H + 10;
        if (d.y > H + 10) d.y = -10;

        const dx = (mouse.x || W / 2) - d.x;
        const dy = (mouse.y || H / 2) - d.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 160) {
          d.vx += (dx / dist) * 0.02;
          d.vy += (dy / dist) * 0.02;
        }

        ctx.beginPath();
        ctx.fillStyle = `hsla(${d.h}, 95%, 55%, 0.85)`;
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [mouse]);

  const title = "HORIZON".split("");

  return (
    <section
      ref={sectionRef}
      className="
        relative min-h-screen flex items-center justify-center overflow-hidden
        bg-[#0f0f0f]
      "
    >
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,rgba(0,0,0,0.0),rgba(0,0,0,0.6)_60%,rgba(0,0,0,0.8))]" />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-[48rem] w-[48rem] rounded-full blur-3xl opacity-20 bg-[radial-gradient(circle_at_30%_30%,rgba(229,9,20,0.7),transparent_60%)] animate-[spin_32s_linear_infinite]" />
      <div className="pointer-events-none absolute -right-24 top-0 h-[50rem] w-[50rem] rounded-full blur-3xl opacity-15 bg-[radial-gradient(circle_at_70%_70%,rgba(178,7,16,0.6),transparent_60%)] animate-[spin_44s_linear_infinite_reverse]" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div
        className="
          pointer-events-none absolute inset-0
          [mask-image:radial-gradient(180px_180px_at_var(--mx)_var(--my),white,transparent_60%)]
          bg-[radial-gradient(circle_at_var(--mx)_var(--my),rgba(255,255,255,0.08),transparent_55%)]
        "
      />

      {/* --- Main Content Section Updated --- */}
      <div className="relative z-10 container mx-auto px-10 py-2 text-center">
        {/* New flex container for consistent spacing */}
        <div className="flex flex-col items-center gap-6">
          <h1
            className="
              mx-auto flex select-none items-end justify-center gap-1
              text-[12vw] sm:text-8xl md:text-9xl
              leading-none font-black tracking-tight
            "
          >
            {title.map((ch, i) => (
              <span
                key={i}
                className="
                  inline-block bg-clip-text text-transparent
                  bg-[conic-gradient(from_210deg,#E50914,#B20710,#E50914)]
                  drop-shadow-[0_10px_30px_rgba(229,9,20,0.35)]
                  animate-letter-bob
                "
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {ch}
              </span>
            ))}
          </h1>

          <p className="mx-auto max-w-3xl text-base sm:text-xl text-neutral-200/80">
            Where innovation crashes into celebration - no spectators, only main
            characters.
          </p>

          <div className="mx-auto flex w-full max-w-2xl flex-col items-center justify-center gap-4 sm:flex-row">
            <Meta
              icon={<Calendar className="h-5 w-5 text-[#E50914]" />}
              label="Oct 29 – Nov 1, 2025"
            />
            <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
            <Meta
              icon={<MapPin className="h-5 w-5 text-neutral-300" />}
              label="9 events • Main Campus"
            />
          </div>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="
                relative overflow-hidden px-8 py-6 text-base text-white
                bg-[#E50914] hover:bg-[#B20710]
                shadow-[0_10px_40px_-10px_rgba(229,9,20,.55)]
                hover:shadow-[0_14px_50px_-10px_rgba(229,9,20,.7)]
                before:absolute before:-inset-1 before:bg-[conic-gradient(from_0deg,transparent,rgba(255,255,255,.25),transparent)]
                before:opacity-0 hover:before:opacity-100 before:blur-xl before:transition-opacity
              "
              asChild
            >
              
              <Link
                href="/book-tickets"
                className="inline-flex items-center gap-2"
              >
                Register Now <Sparkles className="h-5 w-5" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="
                px-8 py-6 text-base border-white/20 text-neutral-200 backdrop-blur
                hover:bg-white/10 hover:text-white
              "
              asChild
            >
              <Link href="/events">Explore Events</Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 overflow-hidden">
          <div className="animate-marquee whitespace-nowrap text-xs tracking-wider text-neutral-400">
            <span className="mx-4">SHOWCASE</span>•
            <span className="mx-4">GUEST TALKS</span>•
            <span className="mx-4">FILM NIGHT</span>•
            <span className="mx-4">WORKSHOPS</span>•
            <span className="mx-4">ART & MAKERS</span>•
          </div>
        </div>

        <div className="pointer-events-none mt-10 flex items-center justify-center">
          <div className="flex animate-breathe items-center gap-2 text-neutral-300/70">
            <ChevronDown className="h-5 w-5" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes letter-bob {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .animate-letter-bob {
          animation: letter-bob 3.2s ease-in-out infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: inline-block;
          min-width: 200%;
          animation: marquee 18s linear infinite;
        }

        @keyframes breathe {
          0%,
          100% {
            opacity: 0.6;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
            transform: translateY(4px);
          }
        }
        .animate-breathe {
          animation: breathe 2.8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

function Meta({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm text-neutral-200/85 backdrop-blur-md">
      {icon}
      <span className="font-medium">{label}</span>
    </div>
  );
}
