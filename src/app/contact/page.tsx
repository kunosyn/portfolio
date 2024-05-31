'use client'

import { Gradient } from '@/ui/Gradient'
import { Card } from '@/ui/Card'
import { DollarSign } from 'lucide-react'

export default function Page () {
  return (
    <main className='
    z-0 overflow-x-hidden 
    bg-neutral-950
    text-white
      min-h-screen
      flex flex-col
      gap-16
    '>
     <section className='
        flex flex-col
        gap-9
        items-center
        justify-center
        pt-[150px]
        px-10
        min-h-screen
      '>
        <h1 className='text-3xl md:text-4xl'><Gradient.CodeBlocks>Contact Me</Gradient.CodeBlocks></h1>
        
        <p className='mb-5 first-line:md:mb-10'>
          Are you looking to hire me or to pay for a one time commission? Below is my contact information and estimated pricing details.<br/>
          Please note that prices may vary depending on the project! You won&apos;t pay the same amount for a Roblox game as you would a website and vice versa.<br/>
          <Gradient.Text>Thank you for your support as a patron.</Gradient.Text>
        </p>

        <div className='flex gap-3 flex-col flex-wrap items-center justify-center lg:gap-6 md:flex-row'>
          <Card variant='contact' href='https://discord.com/invite/j24GnrzgdK' title='Join the Discord Server' iconName='discord'>
            Join the community Discord Server to contact me faster, talk to fellow buyers, and recieved updates related to my services.
          </Card>

          <Card variant='contact' href='https://discord.com/users/800104370607226892' title='DM me on Discord' iconName='discord'>
            DM me on Discord with any inquiries related to my services, or for personalized support/plans.
          </Card>


          <Card variant='contact' href='mailto:kunosyn@gmail.com' title='Email Me' iconName='inbox'>
            Looking for a more professional approach? Have buisness inquiries? No worries, reach me at <Gradient.Text>kunosyn@gmail.com</Gradient.Text>.
          </Card>
        </div>
      </section>

      <section className='min-h-screen flex items-center px-5 md:px-10'>
        <div className='w-full items-center flex flex-col gap-9'>
          <h1 className='md:text-4xl text-3xl' id='pricing'><Gradient.CodeBlocks>Pricing Estimates</Gradient.CodeBlocks></h1>
          <p className='mb-4'>
            Pricing may vary, the below prices are <Gradient.Text>not</Gradient.Text> set in stone, and will vary on a case by case basis.<br/>
            For exact pricing please contact me with any of my above methods. Pricing may be lower or higher than it appears depending on your needs.<br/>
            Please note the following: I am not responsible for the hosting of your websites or discord bots, <Gradient.Text>long term development pricing is negotiable</Gradient.Text>.
          </p>

          <div className='w-full flex justify-center'>
            <div className='w-full flex flex-col items-center pt-24 pb-12 lg:flex-row'>
              <div className='group flex flex-col items-center gap-16 lg:gap-6 w-full h-full lg:w-1/3 hover:cursor-pointer py-12 px-12 lg:py-6'>
                <div className='flex flex-col h-full gap-6'>
                  <h2 className='text-center text-4xl font-bold group-hover:animate-pulsating-glow'>Small Projects</h2>
                  
                  <ul className='list-disc pl-6 max-w-xl w-full'>
                    <li>
                      Multi-command discord bot&nbsp;
                      <span className='text-neutral-300'>&#40;3 max&#41;</span>
                      &nbsp;discord bot, in any programming language I specialize in
                    </li>

                    <li>
                      Small Roblox Systems&nbsp;
                      <span className='text-neutral-300'>&#40;2 max&#41;</span>
                    </li>
                  </ul>
                </div>

                <div className='w-full flex flex-col items-center'>
                  <div className='hidden lg:block w-full h-[2px] bg-neutral-800 mb-6' />
                  
                  <div className='flex flex-col gap-6 items-center sm:flex-row lg:flex-col 2xl:flex-row'>
                    <div className='flex flex-row items-center gap-6'>
                      <p className='text-neutral-300'>About</p>
                      
                      <div className='flex items-center gap-3 bg-green-500 border border-green-300 px-4 py-2 rounded-xl font-semibold text-lg'>
                        <DollarSign className='w-5 h-5' />
                        19.99
                      </div>
                    </div>

                    <div className='flex flex-row items-center gap-6'>
                      <p className='text-neutral-300'>to</p>

                      <div className='flex items-center gap-3 bg-green-500 border border-green-300 px-4 py-2 rounded-xl font-semibold text-lg'>
                        <DollarSign className='w-5 h-5' />
                        44.99
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='group flex flex-col items-center gap-16 lg:gap-6 h-full w-full lg:w-1/3 border-t-2 border-b-2 lg:border-t-0 lg:border-b-0 lg:border-r-2 lg:border-l-2 border-neutral-800 hover:cursor-pointer py-12 px-12 lg:py-6'>
                <div className='flex flex-col h-full gap-6'>
                  <h2 className='text-center text-4xl font-bold group-hover:animate-pulsating-glow'>Medium Projects</h2>

                  <ul className='list-disc pl-6 max-w-xl w-full'>
                    <li>Miniature portfolio website</li>

                    <li>Multiple system feature for your Roblox game</li>

                    <li>
                      Multi command&nbsp;
                      <span className='text-neutral-300'>&#40;6 max&#41;</span>
                      &nbsp;discord bot, in any programming language I specialize in
                    </li>
                  </ul>
                </div>

                <div className='w-full flex flex-col items-center'>
                  <div className='hidden lg:block w-full h-[2px] bg-neutral-800 mb-6' />

                  <div className='flex flex-col gap-6 items-center sm:flex-row lg:flex-col 2xl:flex-row'>
                    <div className='flex flex-row items-center gap-6'>
                      <p className='text-neutral-300'>About</p>
                      
                      <div className='flex items-center gap-3 bg-green-500 border border-green-300 px-4 py-2 rounded-xl font-semibold text-lg'>
                        <DollarSign className='w-5 h-5' />
                        54.99
                      </div>
                    </div>

                    <div className='flex flex-row items-center gap-6'>
                      <p className='text-neutral-300'>to</p>

                      <div className='flex items-center gap-3 bg-green-500 border border-green-300 px-4 py-2 rounded-xl font-semibold text-lg'>
                        <DollarSign className='w-5 h-5' />
                        79.99
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='group flex flex-col gap-16 lg:gap-6 items-center w-full h-full lg:w-1/3 hover:cursor-pointer py-12 px-12 lg:py-6'>
                <div className='flex flex-col h-full gap-6'>
                  <h2 className='text-center text-4xl font-bold group-hover:animate-pulsating-glow'>Large Projects</h2>

                  <ul className='list-disc pl-6 max-w-xl w-full'>
                    <li>Discord bot as specified in medium projects&#44; with data storing</li>
                    <li>Full Roblox game with advanced functionality</li>
                    <li>Website with a database</li>
                  </ul>
                </div>

                <div className='w-full flex flex-col items-center'>
                  <div className='hidden lg:block w-full h-[2px] bg-neutral-800 mb-6' />

                  <div className='flex flex-col gap-6 items-center sm:flex-row lg:flex-col 2xl:flex-row'>
                    <div className='flex flex-row items-center gap-6'>
                      <p className='text-neutral-300'>About</p>
                      
                      <div className='flex items-center gap-3 bg-green-500 border border-green-300 px-4 py-2 rounded-xl font-semibold text-lg'>
                        <DollarSign className='w-5 h-5' />
                        99.99
                      </div>
                    </div>

                    <div className='flex flex-row items-center gap-6'>
                      <p className='text-neutral-300'>to</p>

                      <div className='flex items-center gap-3 bg-green-500 border border-green-300 px-4 py-2 rounded-xl font-semibold text-lg'>
                        <DollarSign className='w-5 h-5' />
                        274.99
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
