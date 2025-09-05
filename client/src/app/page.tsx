"use client";
import Header from "@/components/header/Header";
import EventFetcher from "@/components/home/EventFetcher";
import { useCountry } from "@/context/CountryContext";

export default function Home() {
  const { country } = useCountry();

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <p className="text-[var(--color-primary-d)] text-3xl font-semibold my-7 text-center">
          Looking for events in{" "}
          <span className="underline text-[var(--color-cuaternary-d)]">
            {country.name}
          </span>
        </p>
        <EventFetcher />
      </main>
      <footer>Footer</footer>
    </div>
  );
}
