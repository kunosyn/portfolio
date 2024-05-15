export function GradientListElement({ children }: { children: React.ReactNode}) {
  return (
    <>
      <li className='flex items-center gap-2'><span className='
        text-transparent bg-clip-text 
        bg-gradient-to-r from-[#9C89B8] via-[#F0A6CA] to-[#EFC3E6]
        font-bold
      '>~</span> <span className='text-lg'>{children}</span></li>
    </>
  )
}