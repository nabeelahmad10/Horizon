const API_URL_BOOKINGS = "https://kcztjkigohnoemokrnzh.supabase.co/rest/v1/bookings"; // <-- replace with your bookings table endpoint
const API_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function bookTickets({
  eventId,
  userId,
  quantity,
  ticketPrice,
  total,
}: {
  eventId: number;
  userId: number;   // supply your user id!
  quantity: number;
  ticketPrice: number;
  total: number;
}) {
  const res = await fetch(API_URL_BOOKINGS, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: API_KEY!,
      Authorization: `Bearer ${API_KEY!}`,
      Prefer: "return=representation", // for Supabase to return created record
    },
    body: JSON.stringify({
      event_id: eventId,
      user_id: userId,
      quantity,
      price: ticketPrice,
      total,
      // Add other columns if needed (timestamp, status, etc.)
    }),
  });
  if (!res.ok) {
    throw new Error("Failed to book tickets");
  }
  return await res.json();
}
