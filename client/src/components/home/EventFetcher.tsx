"use client";

import React, { useEffect, useState } from "react";
import { Event } from "@/types/event";
import { useCountry } from "@/context/CountryContext";
import EventCard from "./EventCard";

export default function EventFetcher() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { country } = useCountry();

  useEffect(() => {
    const cached = sessionStorage.getItem(`events_${country.code}`);
    if (cached) {
      setEvents(JSON.parse(cached));
      setLoading(false);
      return;
    }

    const fetchEvents = async () => {
      try {
        const response = await fetch(
          `https://app.ticketmaster.com/discovery/v2/events.json?countryCode=${country.code}&apikey=${process.env.NEXT_PUBLIC_CONSUMER_KEY}`
        );
        if (!response.ok) {
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        const eventsData = data._embedded?.events || [];
        setEvents(eventsData);
        sessionStorage.setItem(
          `events_${country.code}`,
          JSON.stringify(eventsData)
        );
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [country.code]);

  if (loading) return <p>Cargando eventos...</p>;
  if (error) return <p>Error: {error}</p>;
  if (events.length === 0) return <p>No se encontraron eventos.</p>;

  return (
<div className="mx-auto px-40 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
  {events.map((event) => (
    <EventCard key={event.id} event={event} />
  ))}
</div>

  );
}

