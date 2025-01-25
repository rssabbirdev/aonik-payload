'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'
import { HeaderNav } from './Nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()
  const [isNavOpen, setIsNavOpen] = useState(false)

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header className="container relative z-20   " {...(theme ? { 'data-theme': theme } : {})}>
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex md:h-16 items-center md:justify-center justify-end">
          <div className="md:block hidden">
            <HeaderNav data={data} />
          </div>
          <div
            className={`transition-all absolute z-10 mt-0.5 top-0 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg md:hidden block ${isNavOpen ? 'left-0 opacity-100' : '-left-64 opacity-0'}`}
            role="menu"
          >
            <div className="block md:hidden text-right">
              <button
                onClick={() => setIsNavOpen(false)}
                className="rounded bg-gray-100  px-5 py-2 text-gray-600 transition hover:text-white hover:bg-red-500"
              >
                X
              </button>
            </div>
            <div className="p-2">
              <HeaderNav data={data} />
            </div>
          </div>
        </div>

        <div className="block md:hidden">
          <button
            onClick={() => setIsNavOpen(true)}
            className="rounded bg-gray-100 p-2 mt-2 md:mt-0 text-gray-600 transition hover:text-gray-600/75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
