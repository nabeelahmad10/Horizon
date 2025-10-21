"use client";

// Import your grid visual component
import { EventsGrid } from "@/components/events-grid";
import { useEffect, useState } from "react";

export default function EventsPage() {
  const [adblockWarning, setAdblockWarning] = useState(false);

  useEffect(() => {
    async function checkEvents() {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_WORKER_API_URL;
        const res = await fetch(`${apiUrl}/api/events`);
        if (!res.ok) throw new Error("Fetch failed");
        await res.json();
      } catch (err) {
        setAdblockWarning(true); // Show warning only if fetch fails
      }
    }
    checkEvents();
  }, []);

  return (
    <main style={{ padding: "2rem", marginTop: "4.5rem" }}>
      {adblockWarning && (
        <div style={{
          background: "#ffecec",
          color: "#d8000c",
          padding: "1em",
          borderRadius: "6px",
          marginBottom: "1em",
          fontWeight: "bold",
          textAlign: "center"
        }}>
          ⚠️ Your ad blocker, privacy extension, or browser settings may be blocking event data.<br />
          Please disable your ad blocker or whitelist this site if events aren’t visible.
        </div>
      )}
      {/* This will render all your event cards as visuals */}
      <EventsGrid />
    </main>
  );
}
