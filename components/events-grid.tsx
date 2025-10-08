"use client";
import { useEvents } from "@/hooks/useEvents";
import { CometCard } from "@/components/ui/comet-card";
import Link from "next/link";
import {
  Music, Mic, Palette, Code, Trophy, Camera, Gamepad2, Lightbulb, Sparkles
} from "lucide-react";

type IconName =
  | "Music"
  | "Mic"
  | "Palette"
  | "Code"
  | "Trophy"
  | "Camera"
  | "Gamepad2"
  | "Lightbulb"
  | "Sparkles";

const iconMap: Record<IconName, React.ComponentType<any>> = {
  Music, Mic, Palette, Code, Trophy, Camera, Gamepad2, Lightbulb, Sparkles
};

interface Event {
  id: number;
  slug: string;
  title: string;
  description: string;
  icon: IconName; // safer: restrict to allowed values
  category: string;
  color: string;
  date: string;
  time: string;
  venue: string;
  capacity: number;
  price: number;
  longDescription: string;
  created_at: string; // ISO date string (timestamp)
}

interface EventsGridProps {
  limit?: number;
}

export function EventsGrid({ limit }: EventsGridProps) {
  const { events, isLoading, error } = useEvents();

  if (isLoading) return <div>Loading events…</div>;
  if (error) return <div>Error loading events</div>;

  const displayEvents = limit ? events.slice(0, limit) : events;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center max-w-7xl mx-auto">
      {displayEvents.map((event: Event) => {
        const Icon = iconMap[event.icon as IconName] || Music;
        return (
          <CometCard key={event.id} className="h-full w-full max-w-sm">
            <Link
              href={`/events/${event.slug}`}
              className="block w-full cursor-pointer rounded-[16px] border-0 bg-[#1F2121] p-3 md:p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
              aria-label={`View details for ${event.title}`}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* same card UI as before */}
              <div className="mx-2">
                <div className="relative mt-2 aspect-[3/4] w-full">
                  <img
                    loading="lazy"
                    className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
                    alt={`${event.title} poster`}
                    src="/event-poster-image.jpg"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                      opacity: 1,
                    }}
                  />
                  <div className={`absolute left-3 top-3 rounded-xl bg-gradient-to-br ${event.color} p-3`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="absolute right-3 top-3 rounded-md bg-black/60 px-3 py-1.5 text-base font-semibold text-white">
                    ${event.price}
                  </div>
                </div>
              </div>
              <div className="mt-2 flex items-center justify-between p-3 font-mono text-white">
                <div className="text-base font-medium">{event.title}</div>
                <div className="text-sm text-gray-300 opacity-70">{event.category}</div>
              </div>
            </Link>
          </CometCard>
        );
      })}
    </div>
  );
}
