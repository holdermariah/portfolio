import { useParams, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { PROJECTS } from '@/data/projects'
import ProjectSidebar from './ProjectSidebar'
import ProjectContent from './ProjectContent'

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>()
  const project = PROJECTS.find((p) => p.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      <ProjectSidebar project={project} />
      <ProjectContent project={project} />
    </div>
  )
}
