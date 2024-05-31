'use client'

import { ProjectEntry } from '@/lib/types'
import { Card } from '@/ui/Card'
import { Gradient } from '@/ui/Gradient'
import { Video } from '@/ui/Video'
import { MaxWidthWrapper } from '@/ui/MaxWidthWrapper'

import { Suspense } from 'react'
import Image from 'next/image'


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
        pt-[200px]
        items-center
      '> 
        <h1>
          <Gradient.CodeBlocks>{project!.displayName}</Gradient.CodeBlocks>
        </h1>

        <div className='flex flex-col gap-6'>
          <p>{project!.description}</p>

          <div className='
            flex gap-4
            items-center justify-center
          '>
            {project.cards?.map(p => 
              <Card variant='project' src={p.icon} title={p.title} description={p.description} key={project.cards?.indexOf(p)}/> 
            )}
          </div>

          <div className='
            flex gap-4 
            items-center justify-center
            flex-wrap
          '>
            {project.images?.map(image => <Image className={image.className} src={image.src} width={image.width} height={image.height} alt={image.alt} key={project.images?.indexOf(image)} />)}

            {project.videos?.map(video => 
              <Suspense fallback={<p>Video loading...</p>} key={project.videos?.indexOf(video)}>
                <Video className={video.className} src={video.src} width={video.width} height={video.height} />
              </Suspense>
            )}
          </div>
        </div>
        
      </MaxWidthWrapper>
    </main>
  )
}
