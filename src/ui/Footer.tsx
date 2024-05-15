import { Copyright, Sparkles } from 'lucide-react'
import { SocialIcon } from './SocialIcon'
import Link from 'next/link'

export function Footer () {
  return (
    <footer className='flex flex-col gap-4 select-none pt-24 pb-5 px-5 bg-gradient-to-t from-black to-neutral-950 text-white'>
      <div className='flex flex-row gap-3 justify-center'>
        <SocialIcon 
          href='https://discord.gg/j24GnrzgdK'
          title='Join the Discord'
          alt='Discord Icon'
          src='discord.svg'
          width={619}
          height={469}
          className='hover:animate-pulsating-glow'
        />

        <SocialIcon 
          href='https://twitter.com/raininthesedan'
          title='Follow me on X'
          alt='X Icon'
          src='x.svg'
          width={512}
          height={512}
          className='hover:animate-pulsating-glow'
        />

        <SocialIcon 
          href='https://github.com/kunosyn'
          title='Check out my GitHub'
          alt='Github Icon'
          src='github.svg'
          width={98}
          height={96}
          className='hover:animate-pulsating-glow'
        />
      </div>

      <div className='flex flex-col gap-[1px]'>
        <p className='flex items-center justify-center gap-2.5'>
          <Sparkles className='w-5 h-5 hover:animate-pulsating-glow' />
          <span>Made using <Link className='hover:underline' href='https://nextjs.org/'>Next.JS</Link> + <Link className='hover:underline' href='https://tailwindcss.com/'>Tailwind</Link></span>
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
