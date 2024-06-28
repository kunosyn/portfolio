'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { MaxWidthWrapper } from './MaxWidthWrapper'
import { Button } from './Button'
import { Dropdown } from './Dropdown'
import { useState } from 'react'
import { MenuIcon } from './MenuIcon'
import projects from '@/lib/projects.json'


const std = projects.std, rbx = projects.rbx


export function Header ({
  isOpen,
  setIsOpen
}: {
  isOpen: boolean,
  setIsOpen: ( isOpen: boolean ) => void
}) {
  const [ openedDropdown, setOpenedDropdown ] = useState<'Projects' | 'Roblox Projects' | ''>('')

  return (
    <header className='z-50 w-full py-2 px-6 bg-gradient-to-b from-black via-black/90 to-black/80 backdrop-blur-sm shadow-md select-none'>
      <MaxWidthWrapper className='mx-auto flex items-center'>
        <div className='w-1/2 md:w-1/4 flex justify-start'>
          <Link href='/' className='hover:animate-pulsating-glow'>
            <Image 
              src='/logotransparent.webp'
              width={1600}
              height={1600}
              alt='kunosyn'
              className='rounded-3xl h-24 w-24 select-none overflow-hidden'
            />
          </Link>
        </div>

        <nav className='w-1/2 hidden justify-center md:flex'>
          <Dropdown
            openedDropdown={openedDropdown}
            setOpenedDropdown={setOpenedDropdown}
            text='Projects'
          >
            {
              Object.entries(std).map(([key, value]) => 
                <Button variant='dropdown-button' href={`/projects?project=${key}`} key={key}>
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
              Object.entries(rbx).map(([key, value]) => 
                <Button variant='dropdown-button' href={`/projects/roblox?project=${key}`} key={key}>
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
          <MenuIcon className='w-8 h-8' isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </MaxWidthWrapper>
    </header>
  )
}
