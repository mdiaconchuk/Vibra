"use client"
import React from 'react'
import { useState } from 'react'
import { MoonIcon , SunIcon } from '@heroicons/react/24/solid'

function Theme() {
  const [darkTheme, setDarkTheme] = useState<Boolean>(true);

  return (
    <div>
      <button className="border p-4 my-0 rounded-xl h-full" onClick={() => {setDarkTheme(!darkTheme)}}>
      {darkTheme ? <MoonIcon className="size-5 text-white"/> : <SunIcon className="size-5 text-white"/>}
      </button>
    </div>
  )
}

export default Theme