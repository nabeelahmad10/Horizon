import useSWR from 'swr';

const API_URL = "https://kcztjkigohnoemokrnzh.supabase.co/rest/v1/tickets";
const API_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const fetcher = async (url: string) => {
  const res = await fetch(url, {
    headers: {
      apikey: API_KEY!,
      Authorization: `Bearer ${API_KEY!}`,
    },
  });
  if (!res.ok) throw new Error('Failed to fetch');
  return await res.json();
};

export function useTickets(eventId?: number) {
  const url = eventId
    ? `${API_URL}?event_id=eq.${eventId}`
    : API_URL;
  const { data, error } = useSWR(url, fetcher);

  return {
    tickets: data || [],
    isLoading: !data && !error,
    error,
  };
}

