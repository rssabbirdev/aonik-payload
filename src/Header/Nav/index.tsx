'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
// import { SearchIcon } from 'lucide-react'

export const HeaderNav: React.FC<{ data: HeaderType; setIsNavOpen: (agr: boolean) => void }> = ({
  data,
  setIsNavOpen,
}) => {
  const navItems = data?.navItems || []

  return (
    <nav aria-label="Global" className="flex gap-3 items-center">
      <ul className="flex flex-col md:flex-row gap-6 text-sm">
        {navItems.map(({ link }, i) => {
          return (
            <li onClick={() => setIsNavOpen(false)} key={i}>
              <CMSLink {...link} appearance="aonik" />
            </li>
          )
        })}
        {/* <Link href="/search">
          <span className="sr-only">Search</span>
          <SearchIcon className="w-5 text-primary" />
        </Link> */}
      </ul>
    </nav>
  )
}
