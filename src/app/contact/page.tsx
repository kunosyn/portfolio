import { Hero } from '@/ui/Hero'
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
          py-[100px]
        '>
          <h1>Contact Info</h1>
          <p>test</p>
      </section>
    </main>
  )
}
