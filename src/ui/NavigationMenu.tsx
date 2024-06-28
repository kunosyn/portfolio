import Link from 'next/link'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export function NavigationMenu ({
  isOpen,
  setIsOpen
}: {
  isOpen: boolean
  setIsOpen: ( isOpen: boolean ) => void
}) {
  return (
    <nav className={clsx('w-full h-full bg-black z-40 items-center justify-center transition-all', {
      'flex': isOpen,
      'hidden': !isOpen,
      'opacity-0': !isOpen,
      'bg-opacity-0': !isOpen,
      'backdrop-blur-0': !isOpen,

      'backdrop-blur-xl': isOpen,
      'bg-opacity-25': isOpen,
      'opacity-100': isOpen
    })}>
      <ul className='text-center flex flex-col items-center justify-center gap-8'>
        <li>
          <Link href='#' className='font-bold text-4xl'>
            Projects
          </Link>
        </li>

        <li>
          <Link href='#' className='font-bold text-4xl'>
            Roblox
          </Link>
        </li>

        <li>
          <Link href='/employers' className='font-bold text-4xl'>
            Past Employers
          </Link>
        </li>

        <li>
          <Link referrerPolicy='no-referrer' target='_blank' href='https://github.com/kunosyn/portfolio/' className='font-bold text-4xl'>
            Repository
          </Link>
        </li>

        <li className='mt-4 px-8 py-5 rounded-3xl bg-white text-black'>
          <Link href='/contact' className='font-bold text-4xl'>
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  )
}
