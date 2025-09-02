import React from "react";
import SearchBar from "./SearchBar";
import CountrySelect from "./CountrySelect";
import Theme from "./Theme";
import Image from "next/image";

function Header() {
  return (
    <div className="w-full border-b border-[var(--color-primary)]">
      <div className="flex items-center justify-center h-14 px-4 my-6 gap-6">
        <img
          src="/media/images/logo.svg"
          alt="Logo"
          className="h-11 w-55 text-black hover:rotate-1 transition duration-200"
        />
        <SearchBar />
        <CountrySelect />
        {/* <Theme /> */}
      </div>
    </div>
  );
}

export default Header;
