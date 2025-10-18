import { useEffect, useState } from 'react';
//import type { PostgrestError } from '@supabase/supabase-js';
import useSWR from 'swr';
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

export interface Event {
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
const workerApiUrl = process.env.NEXT_PUBLIC_WORKER_API_URL;
const fetcher = (url: string) => fetch(url).then(res => res.json());


export function useEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_WORKER_API_URL;
        const res = await fetch(`${apiUrl}/api/events`);
        if (!res.ok) throw new Error("Failed to fetch events");
        const data = await res.json();
        setEvents(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to fetch events", err);
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchEvents();
  }, []);

  return { events, isLoading, error };
}
