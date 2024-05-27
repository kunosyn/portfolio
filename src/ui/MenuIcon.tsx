'use client'

import { useState } from 'react'
import { Minus } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

export function MenuIcon ({
  onClick,
  className
}: {
  onClick?: () => void,
  className?: string
}) {
  const [isOpen, setIsOpen] = useState(false)

  function handleClick () {
    setIsOpen(!isOpen)
  }

  return (
    <button
      onClick={handleClick}
      className='flex flex-col text-white md:hidden group justify-end'
      name='menu'
    >
      <Minus className={twMerge('mt-[-6px] mb-[-26px] transition-all', className, clsx({
        'transform rotate-[45deg] mb-[-32px] mt-0': isOpen
      }))} />

      <Minus className={twMerge('transition-all', className, clsx({
        'opacity-0': isOpen
      }))} />

      <Minus className={twMerge('mb-[-6px] mt-[-26px] transition-all', className, clsx({
        'transform rotate-[-45deg] mt-[-32px] mb-0': isOpen
      }))} />
    </button>
  )
}
