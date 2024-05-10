import Image from 'next/image'
import { MaxWidthWrapper } from './MaxWidthWrapper'
import { BackgroundGradientAnimation } from './BackgroundGradientAnimation'

export function Hero () {
  return (
    <section className='min-h-screen max-h-screen flex justify-center'>
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <p className="py-4 bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            Your go-to freelance developer
          </p>
        </div>
    </BackgroundGradientAnimation>
    </section>
  )
}
