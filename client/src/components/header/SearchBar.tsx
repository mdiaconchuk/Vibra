"use client";
import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/solid";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className="flex items-center w-4/12 pl-5 rounded-xl bg-white h-11 shadow-md hover:shadow-lg transition duration-200">
      <MagnifyingGlassIcon className="w-7 h-7 text-slate-400 mr-2" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar eventos..."
        className="w-full outline-none placeholder:text-gray-400 text-[var(--color-primary)] h-full"
      />
      <button className="bg-[var(--color-cuaternary)] text-white px-4 py-2 rounded-r-xl hover:bg-[var(--color-cuaternary-d)] 
      transition h-full flex items-center justify-center">
        <AdjustmentsHorizontalIcon className="w-7 h-7" />
      </button>
    </div>
  );
}
