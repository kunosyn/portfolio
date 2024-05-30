import { Card } from '@/ui/Card'
import { Hero } from '@/ui/Hero'
import { MaxWidthWrapper } from '@/ui/MaxWidthWrapper'
import { Gradient } from '@/ui/Gradient'

export default function Page () {
  return (
    <main className='z-0 overflow-x-hidden'>
      <Hero/>

      <section className='
        flex 
        flex-col lg:flex-row  md:flex-col
        justify-center 
        bg-neutral-950 
        px-1 py-2 
        text-white
      '>
        <MaxWidthWrapper className='py-16 px-6 md:px-24 flex flex-col items-center gap-6'>
          <div>
            <h1><Gradient.CodeBlocks>About Me</Gradient.CodeBlocks></h1>
          </div>

          <div className='w-full max-w-screen-md' id='about'>
            <p className='text-lg text-justify'>
              Hi, I&apos;m <Gradient.Text>Rain</Gradient.Text>, aka kunosyn. 
              I am an 18 year old Highschool Graduate and aspiring Software Developer who is currently based in Chicago and preparing for College in the fall. I have <span className='font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#9C89B8] via-[#F0A6CA] to-[#EFC3E6]'>6 years</span> of experience in programming, with it being a fairly large area of my life.
              I hope to bring to you high quality products and make a meaningful impact through technology.
            </p>
          </div>

          <div className='w-full max-w-screen-md'>
            <p className='mb-2'>
              I currently specialize in the following:
            </p>

            <div className='flex flex-col gap-2'>
              <ul className='flex gap-6'>
                <li className='w-1/3 flex items-end'>
                  <h2 className='font-bold'>Web Development:</h2>
                </li>

                <li className='w-1/3 flex items-end'>
                  <h2 className='font-bold'>General Purpose:</h2>
                </li>

                <li className='w-1/3 flex items-end'>
                  <h2 className='font-bold'>Roblox:</h2>
                </li>
              </ul>
              
              <ul className='flex gap-6'>
                <li className='w-1/3'>
                  <ul>
                    <Gradient.ListElement>TypeScript</Gradient.ListElement>
                    <Gradient.ListElement>JavaScript</Gradient.ListElement>
                    <Gradient.ListElement>Next.JS</Gradient.ListElement>
                    <Gradient.ListElement>Tailwind</Gradient.ListElement>
                  </ul>
                </li>

                <li className='w-1/3'>
                  <ul>
                    <Gradient.ListElement>C++</Gradient.ListElement>
                    <Gradient.ListElement>C#</Gradient.ListElement>
                    <Gradient.ListElement>C</Gradient.ListElement>
                    <Gradient.ListElement>Java</Gradient.ListElement>
                  </ul>
                </li>

                <li className='w-1/3'>
                  <ul>
                    <Gradient.ListElement>Luau</Gradient.ListElement>
                    <Gradient.ListElement>Knit</Gradient.ListElement>
                    <Gradient.ListElement>Rojo</Gradient.ListElement>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </MaxWidthWrapper>

        <MaxWidthWrapper className='py-16 px-6 sm:px-24 flex flex-col items-center gap-6'>
          <h1><Gradient.CodeBlocks>Featured</Gradient.CodeBlocks></h1>

          <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 gap-4'>
            <Card variant='project' href='/projects/example-one' src='placeholder.png' title='My Project' description='This is my very cool totally existent project that has an unreasonably long name just for testing purposes.' width={1853} height={829} />
            <Card variant='project' href='/projects/example-one' src='placeholder.png' title='My Project' description='This is my very cool totally existent project that has an unreasonably long name just for testing purposes.' width={1853} height={829} />
          </div>
        </MaxWidthWrapper>
      </section>
    </main>
  )
}
