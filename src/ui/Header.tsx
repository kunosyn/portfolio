'use client'

import { ArrowRight, BookUser } from 'lucide-react'
import Link from 'next/link'
import { MaxWidthWrapper } from './MaxWidthWrapper'
import { Button } from './Button'
import { Dropdown } from './Dropdown'
import { useState } from 'react'
import { Open_Sans } from 'next/font/google'
import { twMerge } from 'tailwind-merge'


const OpenSans = Open_Sans({
  subsets: ['latin']
})

export function Header () {
  const [ openedDropdown, setOpenedDropdown ] = useState<'Projects' | 'Roblox Projects' | ''>('')

  return (
    <header className='z-10 fixed w-full py-3 px-6 bg-neutral-900 bg-opacity-50 backdrop-blur-sm shadow-md select-none'>
      <MaxWidthWrapper className='mx-auto flex items-center'>
        <div className='w-1/4 flex justify-start'>
          <Link href='/' className='hover:animate-pulsating-glow'>
            <h1 className={
              twMerge(
                OpenSans.className,
                'text-white text-[1.5em]'
            )}>
                kunosyn
              </h1>
          </Link>
        </div>

        <div className='w-1/2 flex justify-center'>
          <Dropdown
            openedDropdown={openedDropdown}
            setOpenedDropdown={setOpenedDropdown}
            text='Projects'
          >
            <li>
              <Button variant='dropdown-button'>
                Example Project 1
              </Button>
            </li>

            <li>
              <Button variant='dropdown-button'>
                Example Project 2
              </Button>
            </li>
          </Dropdown>

          <Dropdown
            openedDropdown={openedDropdown}
            setOpenedDropdown={setOpenedDropdown}
            text='Roblox Projects'
          >
            <li>
              <Button variant='dropdown-button'>
                Example Roblox Project 1
              </Button>
            </li>

            <li>
              <Button variant='dropdown-button'>
                Example Roblox Project 2
              </Button>
            </li>
          </Dropdown>

          <Button className='flex items-center gap-2 group' variant='nav-button'>
            Past Employers
            <BookUser className='w-5 h-5 text-neutral-300 group-hover:text-white' />
          </Button>
        </div>

        <div className='w-1/4 flex justify-end'>
          <Button className='flex items-center gap-3' variant='outline-fill'>
            Contact Me
            <ArrowRight className='w-5 h-5' />
          </Button>
        </div>
      </MaxWidthWrapper>
    </header>
  )
}
