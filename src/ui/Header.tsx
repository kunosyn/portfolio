'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { MaxWidthWrapper } from './MaxWidthWrapper'
import { Button } from './Button'
import { Dropdown } from './Dropdown'
import { useState } from 'react'
import { Open_Sans } from 'next/font/google'
import { twMerge } from 'tailwind-merge'
import { MenuIcon } from './MenuIcon'
import * as projects from '@/lib/projects.json'


const OpenSans = Open_Sans({
  subsets: ['latin']
})

export function Header () {
  const [ openedDropdown, setOpenedDropdown ] = useState<'Projects' | 'Roblox Projects' | ''>('')

  return (
    <header className='z-50 fixed w-full py-7 px-6 bg-gradient-to-b from-black via-black/90 to-black/80 backdrop-blur-sm shadow-md select-none'>
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

        <nav className='w-1/2 hidden justify-center md:flex'>
          <Dropdown
            openedDropdown={openedDropdown}
            setOpenedDropdown={setOpenedDropdown}
            text='Projects'
          >
            {
              Object.entries(projects.std).map(([key, value]) => 
                <Button variant='dropdown-button' href={`/projects/${key}`} key={key}>
                  {value.displayName}
                </Button>
              )
            }
          </Dropdown>

          <Dropdown
            openedDropdown={openedDropdown}
            setOpenedDropdown={setOpenedDropdown}
            text='Roblox'
          >
            {
              Object.entries(projects.rbx).map(([key, value]) => 
                <Button variant='dropdown-button' href={`/projects/${key}`} key={key}>
                  {value.displayName}
                </Button>
              )
            }
          </Dropdown>

          <Button className='flex items-center gap-2 group' variant='nav-button' href='/employers'>
            Past Employers
          </Button>

          <Button className='flex items-center gap-2 group' variant='nav-button' referrerPolicy='no-referrer' target='_blank' href='https://github.com/kunosyn/portfolio/'>
            Repository
          </Button>
        </nav>

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