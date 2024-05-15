import { Hero } from '@/ui/Hero'
import { MaxWidthWrapper } from '@/ui/MaxWidthWrapper'
import Image from 'next/image'

export default function Page () {
  return (
    <main className='z-0 overflow-x-hidden'>
      <MaxWidthWrapper className='
        min-h-screen max-h-screen 
        flex flex-col
        pt-[85px]
      '>
        test
      </MaxWidthWrapper>
    </main>
  )
}
