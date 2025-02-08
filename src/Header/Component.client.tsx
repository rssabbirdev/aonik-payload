'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import { redirect, usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'
import { HeaderNav } from './Nav'
import Link from 'next/link'
import { RiArrowLeftDoubleFill, RiArrowRightDoubleFill } from 'react-icons/ri'
import { FaMicrophoneAlt } from 'react-icons/fa'
import { LuIdCard } from 'react-icons/lu'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false)
  const [pathnameStatus, setPathnameStatus] = useState<boolean>(true)

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)

    if (pathname === '/appointment') {
      setPathnameStatus(false)
    } else if (pathname === '/translator') {
      setPathnameStatus(false)
    } else {
      setPathnameStatus(false)
    }
  }, [headerTheme, pathname, theme])
  if (pathname === '/home' || pathname === '/home-two') {
    return redirect('/')
  }

  const handleForward = () => {
    if (pathname === '/appointment') {
      redirect('/translator')
    } else if (pathname === '/translator') {
      redirect('/appointment')
    }
  }
  return (
    <header className="container relative z-20" {...(theme ? { 'data-theme': theme } : {})}>
      <div>
        <nav className=" w-full animate-popUp">
          <div
            className={`items-center max-w-screen-xl mx-auto flex ${pathname !== '/' ? 'justify-between' : 'justify-center'}`}
          >
            {pathname !== '/' && (
              <div>
                <RiArrowLeftDoubleFill
                  onClick={() => window.history.back()}
                  className={`rounded-full h-8 w-8 bg-primary text-white hover:bg-primary-foreground cursor-pointer`}
                />
              </div>
            )}
            <div className="flex items-center justify-between">
              <Link href="/">
                {/*eslint-disable-next-line @next/next/no-img-element */}
                <img src="/17.png" width={150} height={50} alt="Aonik Logo" />
              </Link>
            </div>

            <button
              onClick={() => handleForward()}
              className="flex justify-center items-center gap-2"
            >
              {pathname === '/appointment' && (
                <FaMicrophoneAlt className="rounded-full h-8 w-8 text-primary cursor-pointer" />
              )}
              {pathname === '/translator' && (
                <LuIdCard className="rounded-full h-8 w-8 text-primary cursor-pointer" />
              )}
              {pathname !== '/' && (
                <RiArrowRightDoubleFill className="rounded-full h-8 w-8 bg-primary text-white hover:bg-primary-foreground cursor-pointer" />
              )}
            </button>
          </div>
        </nav>
      </div>
      {/* {pathnameStatus ? (
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex md:h-16 items-center md:justify-center justify-end">
            <div className="md:block hidden">
              <HeaderNav setIsNavOpen={setIsNavOpen} data={data} />
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
                <HeaderNav setIsNavOpen={setIsNavOpen} data={data} />
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
      ) : (
        <div>
          <nav className="bg-white w-full">
            <div className="items-center max-w-screen-xl mx-auto flex justify-between">
              <div>
                <RiArrowLeftDoubleFill
                  onClick={() => window.history.back()}
                  className={`rounded-full h-8 w-8 bg-primary text-white hover:bg-primary-foreground cursor-pointer`}
                />
              </div>
              <div className="flex items-center justify-between">
                <Link href="/">
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src="/17.png" width={150} height={50} alt="Aonik Logo" />
                </Link>
              </div>

              <button
                onClick={() => handleForward()}
                className="flex justify-center items-center gap-2"
              >
                {pathname === '/appointment' && (
                  <FaMicrophoneAlt className="rounded-full h-8 w-8 text-primary cursor-pointer" />
                )}
                {pathname === '/translator' && (
                  <LuIdCard className="rounded-full h-8 w-8 text-primary cursor-pointer" />
                )}
                <RiArrowRightDoubleFill className="rounded-full h-8 w-8 bg-primary text-white hover:bg-primary-foreground cursor-pointer" />
              </button>
            </div>
          </nav>
        </div>
      )} */}
    </header>
  )
}
