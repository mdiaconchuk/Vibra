"use client";
import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

type Props = {
  onSearch: (query: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="flex items-center w-full sm:w-4/12 rounded-lg bg-white h-11 shadow-md transition duration-200 border border-[var(--color-primary)]">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Looking for an event?"
        className="w-full outline-none placeholder:text-gray-400 text-[var(--color-primary)] h-full px-3"
      />
      <MagnifyingGlassIcon className="w-7 h-7 text-slate-400 mr-3" />
    </div>
  );
}
