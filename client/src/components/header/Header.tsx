import React from "react";
import SearchBar from "./SearchBar";
import CountrySelect from "./CountrySelect";

type HeaderProps = {
  onSearch: (query: string) => void;
};

function Header({ onSearch }: HeaderProps) {
  return (
    <div className="w-full border-b border-[var(--color-primary)] shadow-sm">
      {/* Desktop XL */}
      <div className="hidden xl:flex items-center justify-center h-8 px-4 my-6 gap-6">
        <img
          src="/media/images/logo.svg"
          alt="Logo"
          className="h-11 w-55 hover:rotate-1 transition duration-200"
        />
        <SearchBar onSearch={onSearch} />
        <CountrySelect />
      </div>

      {/* Responsive Mobile/Tablet */}
      <div className="flex flex-col items-center justify-between h-auto sm:h-22 px-4 py-4 sm:py-6 gap-4 sm:gap-6 xl:hidden">
        <img
          src="/media/images/logo.svg"
          alt="Logo"
          className="h-11 w-auto hover:rotate-1 transition duration-200"
        />

        <div className="flex w-full gap-4">
          <CountrySelect />
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
    </div>
  );
}

export default Header;


