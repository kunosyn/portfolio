'use client'

import React, { useEffect } from 'react'
import { NavigationMenu } from './NavigationMenu'
import { Header } from './Header'
import clsx from 'clsx'

export function Navigation () {
  const [ isOpen, setIsOpen ] = React.useState<boolean>(false)
  
  useEffect(() => {
    window.addEventListener('resize', () => {
     if (window.innerWidth < 768) return
      
      document.body.classList.remove('overflow-hidden')
      setIsOpen(false)
    })
  }, [])

  
  return (
    <div className={clsx('flex flex-col w-screen md:text-white fixed z-[100]', {
      'h-screen': isOpen
    })}>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <NavigationMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}
