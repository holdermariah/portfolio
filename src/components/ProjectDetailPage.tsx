import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { PROJECTS } from '@/data/projects'
import ProjectSidebar from './ProjectSidebar'
import ProjectContent from './ProjectContent'
import PasswordProtectedProject from './PasswordProtectedProject'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const project = PROJECTS.find((p) => p.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) {
    return <Navigate to="/" replace />
  }

  // Get current project index and find previous/next projects
  const currentIndex = PROJECTS.findIndex((p) => p.id === id)
  const previousProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null
  const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null

  // Password protect the multivista project
  if (project.id === 'multivista') {
    return (
      <PasswordProtectedProject
        project={project}
        correctPassword="multivista"
      />
    )
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white relative">
      <ProjectSidebar project={project} />
      <ProjectContent project={project} />

      {/* Navigation Arrows */}
      {previousProject && (
        <button
          onClick={() => navigate(`/project/${previousProject.id}`)}
          className="fixed bottom-8 left-8 bg-[#798dc6] hover:bg-[#6a7db5] text-white p-3 rounded-full shadow-lg transition-all hover:scale-110 z-50"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {nextProject && (
        <button
          onClick={() => navigate(`/project/${nextProject.id}`)}
          className="fixed bottom-8 right-8 bg-[#798dc6] hover:bg-[#6a7db5] text-white p-3 rounded-full shadow-lg transition-all hover:scale-110 z-50"
          aria-label="Next project"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}
