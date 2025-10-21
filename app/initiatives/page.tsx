"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { motion, Variants } from "framer-motion";
// 👇 1. Importing Playfair_Display for the headline
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
// 👇 2. Instantiating the Playfair Display font
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
});

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const imageVariants: (direction: "left" | "right") => Variants = (
  direction
) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -80 : 80,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: [0.2, 0.6, 0.3, 0.9] },
  },
});

const textContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const allEvents = [
  {
    id: "global-tech-conclave",
    title: "Global Tech Conclave",
    date: "October 2024",
    image: "/events/gtc.jpeg",
    description:
      "The SRM Global Tech Conclave, organized by the Directorate of Alumni Affairs, was a landmark two-day event that brought together visionaries, industry leaders, and innovators from around the world. Held on October 8th and 9th, 2024, the conclave featured insightful panel discussions on emerging technologies, challenges, and trends. Our very own esteemed alumni graced the event, sharing their experiences, offering valuable career insights, and inspiring students to aim higher. The event fostered collaboration between academia and industry, creating an atmosphere of learning, inspiration, and forward thinking — marking a key milestone in SRM’s journey toward technological excellence.",
  },
  {
    id: "alumni-day",
    title: "Alumni Day",
    date: "December 21, 2024",
    image: "/events/alumniday.jpg",
    description:
      "Alumni Day, the annual flagship event of the Directorate of Alumni Affairs, is a heartfelt celebration that brings together SRM’s proud alumni every December. The campus comes alive with nostalgia and joy as former students reunite with their peers and professors, revisiting memories that shaped their journeys. The day features captivating performances and a special felicitation ceremony where alumni are honored with mementos for their remarkable achievements. More than just a reunion, Alumni Day is a tribute to shared roots, lasting bonds, and the spirit that continues to connect generations of SRMites.",
  },
  {
    id: "global-meet-2025",
    title: "Global Meet 2025",
    date: "April, 2025",
    image: "/events/gm25.JPG",
    description:
      "Global Meet 2025, held in April 2025, was one of the flagship events of the Directorate of Alumni Affairs, SRMIST, bringing together alumni from around the world for two days of learning, connection, and growth. The event featured insightful panel discussions and keynote sessions led by accomplished alumni and industry experts who shared their experiences and ideas with the community. Beyond the talks, it was a chance for everyone to reconnect, share stories, and build new collaborations. More than just a reunion, Global Meet 2025 captured the true spirit of SRMIST — innovation, connection, and lifelong learning.",
  },
  {
    id: "chapter-meetups",
    title: "Chapter Meetups",
    date: "Year-round",
    image: "/events/chmeet.jpeg",
    description:
      "The Alumni Chapter Meetups, organized by the Directorate of Alumni Affairs, bring the SRM community together in different cities, creating opportunities for alumni to reconnect, share experiences, and strengthen their bonds. These meetups offer a platform for meaningful conversations, networking, and discussions on diverse topics, allowing alumni to engage with peers both personally and professionally. Filled with laughter, memories, and a lively spirit, each gathering captures the essence of SRM’s community, ensuring that the connections built during college continue to thrive long after graduation.",
  },
  {
    id: "embrace",
    title: "Embrace",
    date: "September 2025",
    image: "/events/embrace.jpeg",
    description:
      "Embrace 2025, held on 3rd September 2025, was a special event organized to honor and celebrate the senior members of the team — our third-year Domain Heads and fourth-year Secretaries, Joint Secretaries, and Domain Coordinators. The event recognized their dedication, hard work, and resilience by presenting them with Letters of Induction and the Directorate’s lanyards. It also served as a warm welcome for the new recruits, helping them feel at home, connect with the team, and enjoy a blend of recognition of achievements and an unforgettable experience. Embrace 2025 was a meaningful occasion that celebrated achievements, fostered camaraderie, and strengthened the spirit of the Directorate.",
  },
  {
    id: "Elevate",
    title: "Elevate",
    date: "August 2025",
    image: "/events/elevate2.jpg",
    description:
      "ELEVATE 2025 by the Directorate of Alumni Affairs at SRMIST was an exciting two-day journey full of learning, creativity, and growth. Held on August 21st and 22nd, the event kicked off with a lively Project Expo, where students showcased their innovative projects and ideas. The Roadshow captivated everyone with multiple cultural performances, creating a lively and fun atmosphere, while the Resume, LinkedIn, and GitHub Workshop helped participants polish their professional skills. Adding to the experience, distinguished alumni joined the event to share their expertise, offer insights from their professional journeys, and guide students toward building successful careers. Over these two days, ELEVATE became more than just an event — it was a space to learn, connect, and push potential to the next level.",
  },
];

export default function InitiativesPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX - window.innerWidth / 2) / 40;
      const y = (e.clientY - window.innerHeight / 2) / 40;
      setMousePosition({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* 👇 3. Updated style for a softer, more elegant glow */}
      <style jsx global>{`
        .elegant-title-glow {
          text-shadow: 0 0 15px rgba(229, 9, 20, 0.5),
            0 0 25px rgba(229, 9, 20, 0.3);
        }
        @keyframes pulse-subtle {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.08;
          }
          50% {
            transform: scale(1.03);
            opacity: 0.12;
          }
        }
        .bg-pulse-anim {
          animation: pulse-subtle 10s ease-in-out infinite;
        }
      `}</style>
      <main
        className={`relative min-h-screen bg-[#101010] text-neutral-100 ${inter.className}`}
      >
        <Navigation />

        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
          <div
            className="absolute inset-0 z-10 opacity-10"
            style={{
              backgroundImage: `url('/noise.png')`,
              backgroundSize: "300px 300px",
              backgroundBlendMode: "overlay",
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-20" />
          <div className="absolute top-0 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_top,rgba(229,9,20,0.2)_0%,transparent_70%)] z-10" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_bottom,rgba(229,9,20,0.2)_0%,transparent_70%)] z-10" />

          <div className="absolute -top-40 -left-40 h-[800px] w-[800px] rounded-full opacity-10 blur-3xl bg-[radial-gradient(circle_at_30%_30%,rgba(229,9,20,0.4),transparent_70%)] bg-pulse-anim" />
          <div
            className="absolute -bottom-40 -right-40 h-[800px] w-[800px] rounded-full opacity-10 blur-3xl bg-[radial-gradient(circle_at_70%_70%,rgba(229,9,20,0.4),transparent_70%)] bg-pulse-anim"
            style={{ animationDelay: "5s" }}
          />

          <div className="relative z-30 container mx-auto px-4 text-center py-24">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Badge className="mb-8 border border-[#E50914]/40 bg-transparent text-[#E50914] text-sm uppercase tracking-widest px-4 py-2">
                Our Key Initiatives
              </Badge>
            </motion.div>

            {/* 👇 4. Applied Playfair Display and the new elegant glow style */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.2,
                ease: [0.2, 0.6, 0.3, 0.9],
                delay: 0.2,
              }}
              className={`text-6xl md:text-8xl font-bold mb-6 transition-transform duration-200 text-white ${playfairDisplay.className} elegant-title-glow`}
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              }}
            >
              Signature Programs &<br />
              <span className="block mt-2 italic text-neutral-300 text-5xl md:text-7xl font-medium">
                Global Events
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="max-w-3xl mx-auto text-lg text-neutral-400 mt-6"
            >
              Dive into a world of innovation, connection, and growth. Explore
              our impactful programs designed to empower and inspire.
            </motion.p>
          </div>
        </section>

        {/* DETAILED EVENTS SECTION */}
        <section
          id="events-details"
          className="py-20 overflow-hidden bg-[#101010]"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-28 md:gap-36">
              {allEvents.map((event, index) => {
                const slideDirection = index % 2 === 0 ? "left" : "right";
                return (
                  <motion.div
                    key={event.id}
                    id={event.id}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center group relative p-4 rounded-xl transition-all duration-300 hover:bg-neutral-900/40 hover:shadow-2xl hover:shadow-black/60"
                  >
                    <motion.div
                      variants={imageVariants(slideDirection)}
                      className={`relative w-full aspect-[16/10] rounded-lg overflow-hidden shadow-xl shadow-black/50 ${
                        index % 2 === 0 ? "md:order-first" : "md:order-last"
                      }`}
                    >
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>

                    <motion.div
                      variants={textContainerVariants}
                      className={`${
                        index % 2 === 0 ? "md:order-last" : "md:order-first"
                      }`}
                    >
                      <motion.p
                        variants={textVariants}
                        className="text-[#E50914] font-semibold mb-2 tracking-wide"
                      >
                        {event.date}
                      </motion.p>
                      <motion.h3
                        variants={textVariants}
                        className="text-4xl font-bold mb-4 text-white"
                      >
                        {event.title}
                      </motion.h3>
                      <motion.p
                        variants={textVariants}
                        className="text-neutral-300 leading-relaxed text-lg"
                      >
                        {event.description}
                      </motion.p>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
