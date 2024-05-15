'use client'

import { ArrowRight, BookUser } from 'lucide-react'
import Link from 'next/link'
import { MaxWidthWrapper } from './MaxWidthWrapper'
import { Button } from './Button'
import { Dropdown } from './Dropdown'
import { useState } from 'react'
import { Open_Sans } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import { MenuIcon } from './MenuIcon'

const OpenSans = Open_Sans({
  subsets: ['latin']
})

export function Header () {
  const [ openedDropdown, setOpenedDropdown ] = useState<'Projects' | 'Roblox Projects' | ''>('')

  return (
    <header className='z-40 fixed w-full py-7 px-6 bg-gradient-to-b from-black to-neutral-950 backdrop-blur-sm shadow-md select-none'>
      <MaxWidthWrapper className='mx-auto flex items-center'>
        <div className='w-1/2 md:w-1/4 flex justify-start'>
          <Link href='/' className='hover:animate-pulsating-glow'>
            <h1 className={
              twMerge(
                OpenSans.className,
                'text-white lg:text-[1.5em] md:text-xl text-lg'
            )}>
                kunosyn
              </h1>
          </Link>
        </div>

        <div className='w-1/2 hidden justify-center md:flex'>
          <Dropdown
            openedDropdown={openedDropdown}
            setOpenedDropdown={setOpenedDropdown}
            text='Projects'
          >
            <li>
              <Button variant='dropdown-button' href='/projects/example-one'>
                Example Project 1
              </Button>
            </li>

            <li>
              <Button variant='dropdown-button' href='/projects/example-two'>
                Example Project 2
              </Button>
            </li>
          </Dropdown>

          <Dropdown
            openedDropdown={openedDropdown}
            setOpenedDropdown={setOpenedDropdown}
            text='Roblox'
          >
            <li>
              <Button variant='dropdown-button' href='/projects/example-one'>
                Example Roblox Project 1
              </Button>
            </li>

            <li>
              <Button variant='dropdown-button' href='/projects/example-two'>
                Example Roblox Project 2
              </Button>
            </li>
          </Dropdown>

          <Button className='flex items-center gap-2 group' variant='nav-button' href='/employers'>
            Past Employers
          </Button>

          <Button className='flex items-center gap-2 group' variant='nav-button' href='/employers'>
            Repository
          </Button>
        </div>

        <div className='w-1/4 flex justify-end'>
          <Button className='hidden md:flex items-center gap-3' variant='outline-fill' href='/contact'>
            Contact Me
            <ArrowRight className='w-5 h-5' />
          </Button>
        </div>
        
        <div className='w-1/2 flex md:hidden justify-end'>
          <MenuIcon className='w-8 h-8' />
        </div>
      </MaxWidthWrapper>
    </header>
  )
}