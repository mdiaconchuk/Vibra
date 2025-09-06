"use client";
import { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

export default function Theme() {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);

  useEffect(() => {
    if (darkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkTheme]);

  return (
    <div>
      <button
        className="border p-4 rounded-full flex items-center justify-center"
        onClick={() => setDarkTheme(!darkTheme)}
      >
        {darkTheme ? (
          <MoonIcon className="size-5 text-white" />
        ) : (
          <SunIcon className="size-5 text-white" />
        )}
      </button>
    </div>
  );
}