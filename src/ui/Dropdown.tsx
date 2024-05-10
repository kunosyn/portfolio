'use client'

import React, { useState } from 'react'
import clsx from 'clsx'
import { Button } from './Button'
import { ChevronDown } from 'lucide-react'

export function Dropdown ({
  children,
  text,
  openedDropdown,
  setOpenedDropdown
}: {
  children: React.ReactNode,
  text: string,
  openedDropdown: string,
  setOpenedDropdown: any
}) {
  const handleClick = () => {
    if (openedDropdown != text) return setOpenedDropdown(text)
    setOpenedDropdown('')
  }

  return (
    <div className='z-30 flex flex-col items-center'>
      <Button onClick={handleClick} className='z-50 group flex items-center gap-2' variant='nav-button'>
        {text}
        
        <ChevronDown className={clsx('w-5 h-5 transition-all text-neutral-300 group-hover:text-white', {
          'transform rotate-[-180deg]': openedDropdown == text,
        })} />
      </Button>

      <ul className={clsx('z-20 absolute mt-[-7px] px-3 pb-1.5 flex flex-col gap-2 items-center pt-[60px] transition-all', {
        'hidden': openedDropdown != text,
        'opacity-100': openedDropdown == text,
        'bg-none': openedDropdown == text,
        'block': openedDropdown == text
      })}>
        {children}
      </ul>
    </div>
  )
}