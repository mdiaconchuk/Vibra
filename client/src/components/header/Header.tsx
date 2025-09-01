import React from 'react'
import SearchBar from './SearchBar'
import CountrySelect from './CountrySelect'
import Theme from './Theme'

function Header() {
  return (
    <div className="border border-white flex my-8 mx-10">
        <CountrySelect/>
        <SearchBar/>
        <Theme/>
    </div>
  )
}

export default Header