'use client'

import NotFound from '@/app/not-found'
import projects from '@/lib/projects.json'
import { ProjectEntry } from '@/lib/types'
import Project from '@/app/projects/project'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function SearchedProject () {
  const searchParams = useSearchParams()

  const searchedProject = searchParams.get('project') as keyof typeof projects.rbx
  if (!searchedProject) return <NotFound />


  const project: ProjectEntry = projects.rbx[searchedProject]
  
  if (project !== undefined) <Project project={project} />
  return <NotFound />
}

export default function Page () {
  return <Suspense>
    <SearchedProject />
  </Suspense>
}
