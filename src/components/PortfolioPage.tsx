import { PROJECTS, getImagePath } from '@/data/projects';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';

export default function PortfolioPage() {
	return (
		<div className="min-h-screen py-20 px-4 md:px-8 lg:px-16 relative">
			<div className="max-w-7xl mx-auto flex flex-row">
				<div>
					<Link to="/" className="fixed top-6 left-6 z-50">
						<img
							src={getImagePath(
								'images/Personal Branding/carinha web.png',
							)}
							alt="Back to Home"
							className="h-12 mr-4 hover:scale-105 transition-transform cursor-pointer"
						/>
					</Link>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
					{PROJECTS.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</div>
		</div>
	);
}
