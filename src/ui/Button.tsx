import clsx from 'clsx'
import { HTMLAttributeAnchorTarget, HTMLAttributeReferrerPolicy, HTMLAttributes, HtmlHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'
import { Url } from 'next/dist/shared/lib/router/router'

export function Button ({
  children,
  className,
  variant = 'ghost',
  href ='',
  referrerPolicy = 'origin',
  target='_self',
  onClick
}: {
  children: React.ReactNode,
  className?: string,
  variant?: 'ghost' | 'fill' | 'outline-fill' | 'dropdown-button' | 'nav-button' | 'hero-button',
  onClick?: () => any,
  referrerPolicy?: HTMLAttributeReferrerPolicy,
  target?: HTMLAttributeAnchorTarget,
  href?: Url
}) {
  const button = (
    <button onClick={onClick} className={twMerge(className, 'font-semibold py-2 px-3.5 border-2 rounded-xl transition-all z-30', variants.get(variant ?? 'ghost'))}>
      {
        variant == 'hero-button'
          ? <div className='
              drop-shadow-[0_2px_2px_rgba(255,255,255,0.65)]
              bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-200
              group-hover:text-black
              group-hover:drop-shadow-[0_2px_2px_rgba(0,0,0,0.45)]
              select-none
            '>{children}</div>
          : <>{children}</>
      }
    </button>
  )

  return (
    href == ''
    ? button
    : <Link target={target} referrerPolicy={referrerPolicy} href={href}>{button}</Link>
  )
}


const variants = new Map(Object.entries({
  ghost: '',
  'dropdown-button': 'bg-opacity-0 text-white bg-black border-white hover:animate-pulsating-glow hover:text-white drop-shadow-text',
  fill: 'text-white bg-purple-400 border-purple-400 hover:bg-purple-300 hover:border-purple-300',
  'outline-fill': 'md:text-sm sm:text-xs lg:text-lg text-white bg-white border-white bg-opacity-0 hover:animate-pulsating-glow hover:text-white',
  'nav-button': 'h-full lg:text-lg md:text-sm sm:text-xs transition-all text-white bg-none border-none hover:animate-pulsating-glow'
}))
