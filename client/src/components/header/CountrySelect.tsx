"use client";
import React, { useState } from "react";
import { countries } from "@/data/countries";
import Flag from "react-world-flags";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useCountry } from "@/context/CountryContext";

function CountrySelect() {
  const [isOpen, setIsOpen] = useState(false);
  const { country, setCountry } = useCountry();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer p-4 rounded-lg flex items-center bg-[var(--color-primary)] hover:bg-[var(--color-primary-d)]
        transition duration-200 h-11 shadow-md hover:brightness-105"
      >
        <Flag code={country.code} className="h-7 w-7 mr-2" />
        <ChevronDownIcon
          className="text-white size-5 ml-1 transition duration-200"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>

      <div
        className={`absolute w-max rounded-lg p-2 my-1 bg-[var(--color-primary)] transform transition-all duration-200 origin-top z-10
          ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
      >
        {countries.map((c) => (
          <button
            key={c.code}
            onClick={() => {
              setCountry(c);
              setIsOpen(false);
            }}
            className="rounded-lg w-full text-left px-4 py-2 hover:bg-[var(--color-primary-d)] transition
            flex items-center duration-150"
          >
            <Flag code={c.code} className="h-7 w-7 mr-2" />
            {c.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CountrySelect;
