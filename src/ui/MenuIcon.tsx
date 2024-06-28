'use client'

import { Minus } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

export function MenuIcon ({
  onClick,
  className,
  isOpen,
  setIsOpen
}: {
  onClick?: () => void,
  isOpen: boolean,
  setIsOpen: ( isOpen: boolean ) => void,
  className?: string
}) {
  function handleClick () {
    if (onClick) onClick()
    let classList = document.body.classList
    
    if (!isOpen) {
      scrollTo(0, 0)
      classList.add('overflow-hidden')
    } else {
      classList.remove('overflow-hidden')
    }

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
