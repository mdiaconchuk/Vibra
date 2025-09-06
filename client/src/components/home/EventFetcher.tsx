"use client";

import React, { useEffect, useState } from "react";
import { Event } from "@/types/event";
import { useCountry } from "@/context/CountryContext";
import EventCard from "./EventCard";

const EVENTS_PER_PAGE = 8;

type Props = {
  searchQuery?: string;
};

export default function EventFetcher({ searchQuery = "" }: Props) {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { country } = useCountry();

  useEffect(() => {
    setCurrentPage(1);

    const cached = sessionStorage.getItem(`events_${country.code}`);
    if (cached) {
      const parsed = JSON.parse(cached);
      const sorted = parsed.sort(
        (a: Event, b: Event) =>
          new Date(a.dates.start.localDate).getTime() -
          new Date(b.dates.start.localDate).getTime()
      );
      setEvents(sorted);
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
        const eventsData: Event[] = data._embedded?.events || [];
        const sortedEvents = eventsData.sort(
          (a: Event, b: Event) =>
            new Date(a.dates.start.localDate).getTime() -
            new Date(b.dates.start.localDate).getTime()
        );
        setEvents(sortedEvents);
        sessionStorage.setItem(
          `events_${country.code}`,
          JSON.stringify(sortedEvents)
        );
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [country.code]);

  if (loading)
    return (
      <p className="text-3xl text-black text-center p-10">
        Cargando eventos...
      </p>
    );
  if (error) return <p>Error: {error}</p>;
  if (events.length === 0) return <p>No se encontraron eventos.</p>;

  const filteredEvents = events.filter((e) =>
    e.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredEvents.length / EVENTS_PER_PAGE);
  const startIndex = (currentPage - 1) * EVENTS_PER_PAGE;
  const endIndex = startIndex + EVENTS_PER_PAGE;
  const eventsToShow = filteredEvents.slice(startIndex, endIndex);

  return (
    <div className="w-full">
      {/* Paginación */}
      <div className="flex justify-center gap-2 mb-4">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded-full hover:bg-[var(--color-cuaternary-d)] transition-colors ${
              currentPage === i + 1
                ? "bg-[var(--color-cuaternary)] text-white"
                : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <div className="mx-auto px-10 xl:px-40 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-8 justify-items-center">
        {eventsToShow.map((event, index) => (
          <EventCard key={event.id} event={event} highlight={index === 0} />
        ))}
      </div>
    </div>
  );
}
