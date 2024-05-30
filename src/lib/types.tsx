export interface ProjectCard {
  icon: React.ReactNode,
  title: string,
  description: string
}

export interface ProjectEntry {
  displayName: string,
  description: string,

  cards?: Array<ProjectCard>,
  images?: Array<React.ReactNode>,
  videos?: Array<React.ReactNode>
}