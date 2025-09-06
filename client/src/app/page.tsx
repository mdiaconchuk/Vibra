"use client";
import { useState } from "react";
import Header from "@/components/header/Header";
import EventFetcher from "@/components/home/EventFetcher";
import Footer from "@/components/home/Footer";
import { useCountry } from "@/context/CountryContext";

export default function Home() {
  const { country } = useCountry();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Header onSearch={setSearchQuery} />
      </header>

      <main className="flex-grow">
        <p className="text-[var(--color-primary-d)] text-2xl font-semibold my-2 text-center">
          Looking for events in{" "}
          <span className="underline text-[var(--color-cuaternary-d)]">
            {country.name}
          </span>
        </p>
        <EventFetcher searchQuery={searchQuery} />
      </main>

      <Footer />
    </div>
  );
}

