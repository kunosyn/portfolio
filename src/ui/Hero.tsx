import Link from 'next/link'
import { WavyBackground } from './WavyBackground'


export function Hero () {
  return (
    <section className='
      min-h-screen max-h-screen 
      flex flex-col justify-center
      bg-black
    '>
      <WavyBackground colors={[
        '#9c89b8',
        '#f0a6ca',
        '#efc3e6',
        '#f0e6ef',
        '#b8bedd'
      ]}>
        <div className='
          w-full
          absolute z-50 inset-0
          flex flex-col items-center justify-center 
          text-white font-bold text-center
          px-4 
          gap-5 lg:gap-3 md:gap-3
        '>
          <p className='
            py-4
            drop-shadow-[0_3px_3px_rgba(0,0,0,0.4)]
            text-6xl lg:text-7xl md:text-5xl  
            text-white
          '>
            Your go-to freelance developer
          </p>
          
          <p className='
            text-[1.2em] pb-1 px-6
            md:text-[1.5em]
            font-bold
            text-white
            drop-shadow-[0_3px_3px_rgba(0,0,0,0.4)]
          '>
            Specializing in: Python, TypeScript, JavaScript, C++, Luau, and more.
          </p>

          <Link href='/contact' className='mt-32 md:mt-6 select-none bg-gradient-to-br from-[#9C89B8] via-[#F0A6CA] to-[#EFC3E6] p-1 rounded-full group'>
            <div className='bg-black px-7 py-2.5 rounded-full transition-all duration-300 group-hover:bg-opacity-0'>
              Contact Me
            </div>
          </Link>
        </div>
      </WavyBackground>
    </section>
  )
}
