import { ProjectEntry } from '@/lib/types'
import { Card } from '@/ui/Card'
import { Gradient } from '@/ui/Gradient'
import { MaxWidthWrapper } from '@/ui/MaxWidthWrapper'

export default function Project ({
  project
}: {
  project: ProjectEntry
}) {
  return (
    <main className='
      z-0 overflow-x-hidden 
      bg-neutral-950 
      flex justify-center
    '>
      <MaxWidthWrapper className='
        min-h-screen max-h-screen 
        flex flex-col gap-6
        pt-[150px]
        items-center
      '> 
        <h1 className='text-white'>
          <Gradient.CodeBlocks>{project!.displayName}</Gradient.CodeBlocks>
        </h1>

        <div className='flex flex-col gap-6'>
          <p className='text-white'>{project!.description}</p>

          <div className='
            flex gap-4
          '>
            {project!.cards?.map(p => 
              <Card variant='project' src={p.icon} title={p.title} description={p.description} />
            )}
          </div>

          <div className='
           text-white 
            flex gap-4 
            items-center justify-center
          '>
            {...project!.images ?? []}
            {...project!.videos ?? []}
          </div>
        </div>
        
      </MaxWidthWrapper>
    </main>
  )
}