import { Gradient } from '@/ui/Gradient'
import { Card } from '@/ui/Card'
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
      select-none
    '>
     <section className='
          flex flex-col
          gap-9
          items-center
          justify-center
          py-[150px]
        '>
          <h1><Gradient.CodeBlocks> Contact Me </Gradient.CodeBlocks></h1>
          
          <p className='w-3/4 mb-4'>
            Are you looking to hire me or to pay for a one time commission? Below is my contact information and estimated pricing details.<br/>
            Please note that prices may vary depending on the project! You won&apos;t pay the same amount for a Roblox game as you would a website and vice versa.<br/>
            <Gradient.Text>Thank you for your support as a patron.</Gradient.Text>
          </p>

          <div className='flex gap-3 flex-col flex-wrap items-center justify-center lg:gap-6 md:flex-row'>
            <Card variant='contact' href='#' title='Join the Discord' iconName='discord' containerClassName=''>
              Join the community Discord Server to contact me faster, talk to fellow buyers, and recieved updates related to my services.
            </Card>

            <Card variant='contact' href='#' title='DM me on Discord' iconName='discord' containerClassName=''>
              DM me on Discord with any inquiries related to my services, or for personalized support/plans.
            </Card>


            <Card variant='contact' href='mailto:kunosyn@gmail.com' title='Email Me' iconName='inbox' containerClassName=''>
              Looking for a more professional approach? Have buisness inquiries? No worries, reach me at <Gradient.Text>kunosyn@gmail.com</Gradient.Text>.
            </Card>
          </div>
          
      </section>
    </main>
  )
}
