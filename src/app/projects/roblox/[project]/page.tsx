import NotFound from '@/app/not-found'
import { MaxWidthWrapper } from '@/ui/MaxWidthWrapper'

export default function Page ({
  params
}: {
  params: {
    project: string
  }
}) {
  if (projectMap.has(params.project)) {
    let project = projectMap.get(params.project)

    return (
      <main className='z-0 overflow-x-hidden'>
        <MaxWidthWrapper className='
          min-h-screen max-h-screen 
          flex flex-col
          pt-[85px]
        '>
          <h1 className='text-black'>{project!.displayName}</h1>
          {project!.component()}
        </MaxWidthWrapper>
      </main>
    )
  }
  
  return <NotFound />
}

const projectMap = new Map<string, { displayName: string, component: () => React.ReactNode }>([
  ['example-one', { displayName: 'Example One', component: exampleOne }]
])


function exampleOne() {
  return <p>this is an example for my first project</p>
}
