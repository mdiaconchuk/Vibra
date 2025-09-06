"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type Country = { code: string; name: string };
type CountryContextType = { country: Country; setCountry: (c: Country) => void };

// Context
export const CountryContext = createContext<CountryContextType | undefined>(undefined);

// Provider
export function CountryContextProvider({ children }: { children: ReactNode }) {
  const [country, setCountry] = useState<Country>({ code: "BR", name: "Brasil" });

  return (
    <CountryContext.Provider value={{ country, setCountry }}>
      {children}
    </CountryContext.Provider>
  );
}

// Hook
export function useCountry() {
  const context = useContext(CountryContext);
  if (!context) throw new Error("useCountry debe usarse dentro de CountryContextProvider");
  return context;
}
