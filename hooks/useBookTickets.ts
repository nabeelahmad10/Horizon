const BOOKING_API_URL = "https://kcztjkigohnoemokrnzh.supabase.co/rest/v1/tickets";
const API_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function bookTicket({
  eventId,
  userId,
  type,
  price,
  seatNumber,    // optional
  qrCode,        // optional
}: {
  eventId: number;
  userId: number;
  type: string;
  price: number;
  seatNumber?: string;
  qrCode?: string;
}) {
  const res = await fetch(BOOKING_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: API_KEY!,
      Authorization: `Bearer ${API_KEY!}`,
      Prefer: "return=representation",
    },
    body: JSON.stringify({
      event_id: eventId,
      user_id: userId,
      type,
      price,
      status: "booked",  // You may use "available", "booked", etc.
      seat_number: seatNumber ?? null,
      qr_code: qrCode ?? null,
      purchase_time: new Date().toISOString(),
      // created_at will auto-populate if it's a default
    }),
  });
  if (!res.ok) throw new Error("Booking failed");
  return await res.json(); // Returns created ticket row
}

