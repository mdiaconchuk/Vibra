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
        className="border border-white p-4 rounded-xl flex items-center"
      >
        <Flag code={selected.code} className="h-5 w-5 mr-2"/>
        {selected.name}
        <ChevronDownIcon className="text-white size-5"/>
      </button>

      {isOpen && (
        <div className="absolute border-white border rounded-xl p-4 bg-black">
          {countries.map((country) => (
            <button
              key={country.code}
              onClick={() => {
                setIsSelected(country);
                setIsOpen(false);
              }}
              className="rounded-md w-full text-left px-4 py-2 hover:bg-gray-200 flex items-center hover:text-black"
            >
              <Flag code={country.code} className="h-5 w-5 mr-2"/>
              {country.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default CountrySelect;
