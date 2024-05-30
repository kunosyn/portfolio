import NotFound from '@/app/not-found'
import { std as projects } from '@/lib/projects.json'
import { ProjectEntry } from '@/lib/types'
import Project from '@/app/projects/project'

export default function Page ({
  params
}: {
  params: {
    project: keyof typeof projects
  }
}) {
  const project: ProjectEntry = projects[params.project]

  if (project !== undefined) {  
    return <Project project={project} />
  }
  
  return <NotFound />
}
