import type { Project } from '@/data/types';
import ProjectCard from './ProjectCard';

interface CategorySectionProps {
	id: string;
	projects: Project[];
}

export default function CategorySection({
	id,
	projects,
}: CategorySectionProps) {
	return (
		<section id={id} className="min-h-screen bg-[#798dc6] pt-24 pb-16 px-8 lg:px-24 scroll-mt-20">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</div>
		</section>
	);
}
