"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export function DAAGallery() {
  const items = [
    {
      id: "global-tech-conclave",
      title: "Global Tech Conclave",
      description:
        "Guidance. Growth. Great minds — SRM Global Tech Conclave 2024.",
      image: "/events/gtc.jpeg",
    },
    {
      id: "global-meet-2025",
      title: "Global Meet 2025",
      description: "Where global minds reunite to inspire, connect, and grow.",
      image: "/events/gm25.JPG",
    },
    {
      id: "elevate",
      title: "Elevate",
      description: "Learning, growing, and rising together",
      image: "/events/roadshow.JPG",
    },
    {
      id: "chapter-meetups",
      title: "Chapter Meetups",
      description: "Reconnect, reminisce, and celebrate the SRM spirit",
      image: "/events/chmeet.jpeg",
    },
    {
      id: "alumni-day",
      title: "Alumni Day",
      description: "A day of nostalgia, pride, and timeless SRM connections.",
      image: "/events/alumniday.jpg",
    },
    {
      id: "embrace",
      title: "Embrace",
      description: "Recognition, camaraderie, inspiration",
      image: "/events/embrace.jpeg",
    },
  ];

  const plugin = useRef(Autoplay({ delay: 1300, stopOnInteraction: true }));

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0f0f0f] text-neutral-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12 text-[#E50914]">
          Explore Our Initiatives
        </h2>
        <Carousel
          plugins={[plugin.current]}
          opts={{ align: "start", loop: true }}
          className="w-full max-w-4xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {items.map((item, index) => (
              <CarouselItem
                key={index}
                className="md:basis-1/2 lg:basis-1/3 group"
              >
                <Link href={`/initiatives#${item.id}`}>
                  <div className="p-1">
                    <Card className="overflow-hidden border border-neutral-800 bg-neutral-900 transition-all duration-300 ease-in-out group-hover:shadow-lg group-hover:shadow-[#E50914]/30 group-hover:border-[#E50914] group-hover:-translate-y-1">
                      <CardContent className="flex flex-col items-center justify-center p-6">
                        <div className="relative w-full aspect-video mb-4 rounded-md overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          />
                        </div>
                        <h3 className="text-xl font-semibold text-center text-neutral-100 transition-colors duration-300 group-hover:text-[#E50914]">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm text-center text-neutral-400 transition-colors duration-300 group-hover:text-neutral-200">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-neutral-400 hover:text-[#E50914] hover:border-[#E50914] transition-colors duration-300" />
          <CarouselNext className="text-neutral-400 hover:text-[#E50914] hover:border-[#E50914] transition-colors duration-300" />
        </Carousel>
      </div>
    </section>
  );
}
