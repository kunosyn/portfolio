import { GradientCodeBlocks } from '@/ui/GradientCodeBlocks'
import { MaxWidthWrapper } from '@/ui/MaxWidthWrapper'
import Image from 'next/image'

export default function Page () {
  return (
    <main className='
    z-0 overflow-x-hidden 
    bg-neutral-950
    text-white
      min-h-screen
      max-h-screen
    '>
     <section className='
          flex flex-col
          gap-6
          items-center
          justify-center
          py-[150px]
        '>
          <h1><GradientCodeBlocks>Contact Me</GradientCodeBlocks></h1>
          <p>test</p>
      </section>
    </main>
  )
}
