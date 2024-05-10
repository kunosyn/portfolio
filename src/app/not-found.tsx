import { MaxWidthWrapper } from '@/ui/MaxWidthWrapper'
import { Button } from '@/ui/Button'
import { Undo2 } from 'lucide-react'
import Link from 'next/link'

export default function NotFound () {
  return (
    <main className='z-0 bg-neutral-900 text-white select-none'>
      <section className='min-h-screen max-h-screen flex justify-center'>
        <MaxWidthWrapper className='z-10 text-center justify-center w-full flex flex-col gap-6 placeholder:items-center'>
          <h1 className='text-8xl animate-glow-flicker'>404</h1>
          <h1 className='text-4xl animate-glow-flicker'>PAGE NOT FOUND</h1>
          
          <div className='flex flex-col gap-3 justify-center text-center items-center mt-20'>
            <p className='w-[400px]'>Uh oh, we couldn&apos;t find the page you&apos;re looking for! Make sure the URL you entered is correct, or go back to our home page.</p>
            
            <Link href='/'>
              <Button variant='outline-fill' className='flex items-center gap-3'>
                Go Back
                <Undo2 className='w-5 h-5' />
              </Button>
            </Link>
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  )
}
