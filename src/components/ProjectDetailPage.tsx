import { useParams, Navigate } from 'react-router-dom'
import { PROJECTS } from '@/data/projects'
import ProjectSidebar from './ProjectSidebar'
import ProjectContent from './ProjectContent'

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>()
  const project = PROJECTS.find((p) => p.id === id)

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <ProjectSidebar project={project} />
      <ProjectContent project={project} />
    </div>
  )
}
