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

// Map icon names to Lucide icons (if field is missing, uses Music by default)
const iconMap: Record<IconName, React.ComponentType<any>> = {
  Music, Mic, Palette, Code, Trophy, Camera, Gamepad2, Lightbulb, Sparkles
};

interface Event {
  id: number;
  slug: string;
  title: string;
  description?: string;
  icon?: IconName;
  category?: string;
  color?: string;
  date?: string;
  time?: string;
  venue?: string;
  capacity?: number;
  price?: number;
  longDescription?: string;
  created_at?: string;
}

interface EventsGridProps {
  limit?: number;
}

export function EventsGrid({ limit }: EventsGridProps) {
  const { events, isLoading, error } = useEvents();

  if (isLoading) return <div>Loading events…</div>;
  if (error) return <div>Error loading events</div>;

  const displayEvents = limit ? events.slice(0, limit) : events;

  // Default values for visual fields
  const DEFAULT_ICON = Music;
  const DEFAULT_COLOR = "from-purple-700 to-cyan-600"; // Tailwind gradient for bg-gradient-to-br
  const DEFAULT_CATEGORY = "General";
  const DEFAULT_PRICE = 0;

  return (
   

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center max-w-7xl mx-auto">
      {displayEvents.map((event: Event) => {
        const Icon =
          event.icon && iconMap[event.icon as IconName]
            ? iconMap[event.icon as IconName]
            : DEFAULT_ICON;
        const gradient = event.color || DEFAULT_COLOR;
        const category = event.category || DEFAULT_CATEGORY;
        const price = typeof event.price !== "undefined" ? event.price : DEFAULT_PRICE;
        const title = event.title || "(Untitled Event)";
        const description = event.description || "";

        return (
          <CometCard key={event.id} className="h-full w-full max-w-sm">
            <Link
              href={`/events/${event.slug}`}
              className="block w-full cursor-pointer rounded-[16px] border-0 bg-[#1F2121] p-3 md:p-4"
              aria-label={`View details for ${title}`}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="mx-2">
                <div className="relative mt-2 aspect-[3/4] w-full">
                  <img
                    loading="lazy"
                    className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover contrast-75"
                    alt={`${title} poster`}
                    src="/event-poster-image.jpg"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                      opacity: 1,
                    }}
                  />
                  <div className={`absolute left-3 top-3 rounded-xl bg-gradient-to-br ${gradient} p-3`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="absolute right-3 top-3 rounded-md bg-black/60 px-3 py-1.5 text-base font-semibold text-white">
                    ₹{price}
                  </div>
                </div>
              </div>
              <div className="mt-2 flex flex-col p-3 font-mono text-white">
                <div className="text-base font-medium">{title}</div>
                {category && (
                  <div className="text-sm text-gray-300 opacity-70">{category}</div>
                )}
                {description && (
                  <div className="text-xs text-gray-400 opacity-80 mt-1">{description}</div>
                )}
              </div>
            </Link>
          </CometCard>
        );
      })}
    </div>
  );
}
