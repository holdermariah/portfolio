import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { PROJECTS } from '@/data/projects';
import ProjectSidebar from './ProjectSidebar';
import ProjectContent from './ProjectContent';
import PasswordProtectedProject from './PasswordProtectedProject';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function SubProjectDetailPage() {
	const { id, subId } = useParams<{ id: string; subId: string }>();
	const navigate = useNavigate();

	const parentProject = PROJECTS.find((p) => p.id === id);
	const subProjects = parentProject?.subProjects;
	const subProject = subProjects?.find((sp) => sp.id === subId);

	const [isAuthenticated, setIsAuthenticated] = useState(
		sessionStorage.getItem(`project_auth_${id}`) === 'true',
	);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [subId]);

	if (!parentProject || !subProject || !subProjects) {
		return <Navigate to="/" replace />;
	}

	if (!isAuthenticated) {
		return (
			<PasswordProtectedProject
				project={parentProject}
				correctPassword="mywork"
				onAuthenticated={() => setIsAuthenticated(true)}
			/>
		);
	}

	// Navigation within sub-projects
	const currentIndex = subProjects.findIndex((sp) => sp.id === subId);
	const previousSubProject =
		currentIndex > 0 ? subProjects[currentIndex - 1] : null;
	const nextSubProject =
		currentIndex < subProjects.length - 1
			? subProjects[currentIndex + 1]
			: null;

	return (
		<div className="min-h-screen flex flex-col lg:flex-row bg-white relative">
			<ProjectSidebar project={subProject} parentProjectId={id} />
			<ProjectContent project={subProject} />

			{/* Navigation Arrows (scoped to sub-projects) */}
			{previousSubProject && (
				<button
					onClick={() =>
						navigate(`/project/${id}/${previousSubProject.id}`)
					}
					className="fixed bottom-8 left-8 bg-[#798dc6] hover:bg-[#6a7db5] text-white p-3 rounded-full shadow-lg transition-all hover:scale-110 z-50"
					aria-label="Previous sub-project"
				>
					<ChevronLeft className="w-6 h-6" />
				</button>
			)}

			{nextSubProject && (
				<button
					onClick={() =>
						navigate(`/project/${id}/${nextSubProject.id}`)
					}
					className="fixed bottom-8 right-8 bg-[#798dc6] hover:bg-[#6a7db5] text-white p-3 rounded-full shadow-lg transition-all hover:scale-110 z-50"
					aria-label="Next sub-project"
				>
					<ChevronRight className="w-6 h-6" />
				</button>
			)}
		</div>
	);
}
