"use client";

// Import your grid visual component
import { EventsGrid } from "@/components/events-grid";

// Main Events page component for /events route
export default function EventsPage() {
  return (
    <main style={{ padding: "2rem", marginTop: "4.5rem" }}>
      {/* This will render all your event cards as visuals */}
      <EventsGrid />
    </main>
  );
}
