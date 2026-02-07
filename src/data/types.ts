export interface Project {
  id: string
  title: string
  year: number
  thumbnail: string
  category: string
  description: string
  sections: ProjectSection[]
  tools?: string[]
  subProjects?: Project[]
}

export interface ProjectSection {
  id: string
  title: string
  content: string
  images?: string[]
}
