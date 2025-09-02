"use client";
import React, { useState } from "react";
import { countries } from "@/data/countries";
import { countryType } from "@/types/nav";
import Flag from 'react-world-flags'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

function CountrySelect() {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const [selected, setIsSelected] = useState<countryType>(countries[0]);

  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="p-4 rounded-xl flex items-center bg-[var(--color-primary)] hover:bg-[var(--color-primary-d)]
        transition duration-200 h-12 shadow-md hover:brightness-105"
      >
        <Flag code={selected.code} className="h-7 w-7 mr-2"/>
        <ChevronDownIcon className="text-white size-5 ml-1 transition duration-200" style={{transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}}/>
      </button>

        <div className={`absolute rounded-xl p-4 my-1 bg-[var(--color-primary)] transform transition-all duration-200 origin-top
                ${isOpen ? "opacity-100" : "opacity-0 "}`}>
          {countries.map((country) => (
            <button
              key={country.code}
              onClick={() => {
                setIsSelected(country);
                setIsOpen(false);
              }}
              className="rounded-md w-full text-left px-4 py-2 hover:bg-[var(--color-primary-d)] transition
              flex items-center duration-150"
            >
              <Flag code={country.code} className="h-7 w-7 mr-2"/>
              {country.name}
            </button>
          ))}
        </div>
    </div>
  );
}

export default CountrySelect;
