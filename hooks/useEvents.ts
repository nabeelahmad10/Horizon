import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export function useEvents() {
  const { data, error } = useSWR('http://localhost:8787/api/events', fetcher);
  return {
    events: data || [],
    isLoading: !data && !error,
    error,
  }
}
