"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Link, Sparkles, Lightbulb } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
});

const flagshipEvents = [
  "Case Study Competition",
  "Leadership Summit",
  "Evedentia",
  "Pitch Perfect",
  "Hackathon",
  "Extempore",
  "Campus Treasure Hunt",
  "Automobile Expo",
  "Esports",
];

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function AboutPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / 30;
      const y = (e.clientY - window.innerHeight / 2) / 30;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes subtle-fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .fade-in-on-load {
          animation: subtle-fade-in 1.5s ease-out forwards;
        }
        .hero-text-shadow {
          text-shadow: 0 0 15px rgba(255, 255, 255, 0.4),
            0 0 30px rgba(255, 215, 0, 0.2);
        }
        .spotlight-anim-1 {
          animation: spotlight-drift-1 35s ease-in-out infinite alternate;
        }
        @keyframes spotlight-drift-1 {
          0% {
            transform: translate(-100%, -50%) scale(1);
            opacity: 0.08;
          }
          50% {
            transform: translate(100%, 50%) scale(1.1);
            opacity: 0.15;
          }
          100% {
            transform: translate(-100%, -50%) scale(1);
            opacity: 0.08;
          }
        }
        .spotlight-anim-2 {
          animation: spotlight-drift-2 40s ease-in-out infinite alternate;
        }
        @keyframes spotlight-drift-2 {
          0% {
            transform: translate(100%, 50%) scale(1);
            opacity: 0.08;
          }
          50% {
            transform: translate(-100%, -50%) scale(1.1);
            opacity: 0.15;
          }
          100% {
            transform: translate(100%, 50%) scale(1);
            opacity: 0.08;
          }
        }
      `}</style>

      <main
        className={`min-h-screen bg-[#0A0A0A] text-neutral-100 ${inter.className}`}
      >
        <Navigation />

        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[url('/textures/dark-fabric-texture.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/80 z-10" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-10" />

          <motion.div
            className="absolute h-[900px] w-[900px] rounded-full blur-3xl bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_60%)] spotlight-anim-1"
            style={{
              top: `calc(50% + ${mousePosition.y * 0.8}px)`,
              left: `calc(50% + ${mousePosition.x * 0.8}px)`,
              transform: `translate(-50%, -50%)`,
            }}
          />
          <motion.div
            className="absolute h-[700px] w-[700px] rounded-full blur-3xl bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.06)_0%,transparent_70%)] spotlight-anim-2"
            style={{
              bottom: `calc(10% + ${mousePosition.y * 0.5}px)`,
              right: `calc(10% + ${mousePosition.x * 0.5}px)`,
              transform: `translate(50%, 50%)`,
            }}
          />

          <div className="relative z-20 container mx-auto px-4 text-center py-24 fade-in-on-load">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              <Badge className="mb-8 border border-[#E50914]/40 bg-[#E50914]/15 text-[#E50914] text-sm uppercase tracking-widest px-4 py-2">
                About Horizon Fest
              </Badge>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              className={`text-6xl md:text-8xl font-bold mb-6 text-neutral-100 transition-transform duration-200 ${playfairDisplay.className} hero-text-shadow`}
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              }}
            >
              Celebrating a Legacy
              <br />
              <span className="text-neutral-400 italic font-medium text-5xl md:text-7xl block mt-2">
                of Connection
              </span>
            </motion.h1>
          </div>
        </section>

        {/* ABOUT CONTENT SECTION */}
        <section className="py-20 overflow-hidden bg-[#101010]">
          <div className="container mx-auto px-4 space-y-24">
            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-3xl font-bold uppercase tracking-wider text-[#E50914] mb-4">
                  Welcome to Horizon
                </h2>
                <div className="space-y-4 text-neutral-300 text-lg leading-relaxed">
                  <p>
                    The Directorate of Alumni Affairs proudly presents{" "}
                    <strong>Horizon</strong>, the first-ever All Alumni Fest of
                    SRM Institute of Science and Technology. This four-day
                    celebration marks a new chapter in SRM’s journey, bringing
                    together the past, present, and future of our institution
                    under a single, vibrant banner.
                  </p>
                  <p>
                    Horizon stands as a testament to our vision of connecting
                    alumni and students through meaningful dialogue, mentorship,
                    and mutual inspiration. It is more than an event; it's a
                    movement.
                  </p>
                </div>
              </div>
              <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-2xl shadow-black/40">
                <Image
                  src="/events/gtc.jpeg"
                  alt="Alumni gathering at SRM"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold uppercase tracking-wider text-[#E50914] mb-4">
                Flagship Events
              </h2>
              <p className="text-neutral-400 max-w-3xl mx-auto mb-12">
                An engaging blend of learning, innovation, and creativity that
                brings out the best in every individual.
              </p>
              <motion.div
                variants={staggerContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
              >
                {flagshipEvents.map((event) => (
                  <motion.a
                    key={event}
                    href="#"
                    variants={itemVariants}
                    className="block rounded-md p-4 bg-[#222] border border-transparent text-center transition-all duration-300 ease-in-out hover:bg-black hover:scale-105 hover:shadow-[0_0_15px_rgba(229,9,20,0.6)] hover:border-[#E50914]/50"
                  >
                    <p className="font-semibold text-neutral-200">{event}</p>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="text-center max-w-5xl mx-auto"
            >
              <h2 className="text-3xl font-bold uppercase tracking-wider text-[#E50914] mb-4">
                Our Core Mission
              </h2>
              <motion.div
                variants={staggerContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
              >
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col items-center p-6 bg-[#222]/50 rounded-lg"
                >
                  <Link className="w-10 h-10 text-[#E50914] mb-4" />
                  <h3 className="text-xl font-bold mb-2">Connect</h3>
                  <p className="text-neutral-400">
                    To forge lasting bonds between students and our global
                    alumni network.
                  </p>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col items-center p-6 bg-[#222]/50 rounded-lg"
                >
                  <Sparkles className="w-10 h-10 text-[#E50914] mb-4" />
                  <h3 className="text-xl font-bold mb-2">Inspire</h3>
                  <p className="text-neutral-400">
                    To share stories of success that motivate the next
                    generation.
                  </p>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col items-center p-6 bg-[#222]/50 rounded-lg"
                >
                  <Lightbulb className="w-10 h-10 text-[#E50914] mb-4" />
                  <h3 className="text-xl font-bold mb-2">Innovate</h3>
                  <p className="text-neutral-400">
                    To create a platform for new ideas, collaboration, and
                    groundbreaking projects.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
