export interface ProjectCard {
  icon: React.ReactNode,
  title: string,
  description: string
}

export interface ProjectEntry {
  displayName: string,
  description: string,

  displayWidth: number,
  displayHeight: number,
  displaySrc: string
  
  cards?: Array<ProjectCard>,
  images?: Array<{ src: string, height: number, width: number, alt: string, className?: string }>,
  videos?: Array<{ src: string, height: number, width: number, className?: string }>,
}