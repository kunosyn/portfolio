import Image from 'next/image'
import { MaxWidthWrapper } from './MaxWidthWrapper'
import { BackgroundGradientAnimation } from './BackgroundGradientAnimation'
import { Button } from './Button'
import Link from 'next/link'

export function Hero () {
  return <>
    <section className='min-h-screen max-h-screen flex flex-col justify-center'>
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl flex-col gap-4">
          <p className="py-4 bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            Your go-to freelance developer
          </p>
          
          <p className='text-md font-normal'>
            test
          </p>

          {/* <Link
            href='#'
            className='cursor-pointer z-[60]'
          >
            <Button variant='hero-button'>
              Contact Me
            </Button>
          </Link> */}
          
        </div>
      </BackgroundGradientAnimation>
    </section>

    <section className='bg-neutral-900 px-1 py-2 text-white select-none'>
      test
    </section>
  </>
}
