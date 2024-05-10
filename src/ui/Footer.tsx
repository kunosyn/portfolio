import { Copyright, Sparkles } from 'lucide-react'
import { SocialIcon } from './SocialIcon'

export function Footer () {
  return (
    <footer className='flex flex-col gap-4 select-none pt-10 pb-5 px-5 bg-neutral-950 text-white'>
      <div className='flex flex-row gap-3 justify-center'>
        <SocialIcon 
          href='#'
          title='Join the Discord'
          alt='Discord Icon'
          src='discord.svg'
          width={619}
          height={469}
          className='hover:animate-pulsating-glow'
        />

        <SocialIcon 
          href='#'
          title='Follow me on X'
          alt='X Icon'
          src='x.svg'
          width={512}
          height={512}
          className='hover:animate-pulsating-glow'
        />
      </div>

      <div className='flex flex-col gap-[1px]'>
        <p className='flex items-center justify-center gap-2.5'>
          <Sparkles className='w-5 h-5 hover:animate-pulsating-glow' />
          <span>Made using Next.JS + Tailwind</span>
          <Sparkles className='w-5 h-5 hover:animate-pulsating-glow' />
        </p>

        <p className='flex items-center justify-center gap-2.5'>
          <Copyright className='w-5 h-5' />
          by kunosyn. All rights reserved.
        </p>
      </div>
    </footer>
  )
}