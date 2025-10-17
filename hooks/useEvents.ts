import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import type { PostgrestError } from '@supabase/supabase-js';
// Make sure the Event interface is imported from your components, or paste it here!
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

export function useEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<PostgrestError | null>(null);

  useEffect(() => {
    async function fetchEvents() {
      const { data, error } = await supabase
        .from('events')
        .select('*');
      setEvents((Array.isArray(data) ? data : []) as Event[]);
      setError(error);
      setIsLoading(false);
    }
    fetchEvents();
  }, []);

  return { events, isLoading, error };
}
