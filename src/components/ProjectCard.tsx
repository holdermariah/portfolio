import { useNavigate } from 'react-router-dom';
import type { Project } from '@/data/types';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Lock } from 'lucide-react';

interface ProjectCardProps {
	project: Project;
	linkPrefix?: string;
}

export default function ProjectCard({ project, linkPrefix }: ProjectCardProps) {
	const navigate = useNavigate();
	const targetPath = linkPrefix
		? `${linkPrefix}/${project.id}`
		: `/project/${project.id}`;

	return (
		<Card
			className="group cursor-pointer overflow-hidden border-0 shadow-lg transition-all hover:shadow-2xl"
			onClick={() => navigate(targetPath)}
		>
			<div className="relative aspect-4/3 overflow-hidden">
				<img
					src={project.thumbnail}
					alt={project.title}
					className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
				/>
				<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

				{/* Lock icon for password-protected projects */}
				{!linkPrefix && project.id === 'multivista' && (
					<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
						<Lock className="w-5 h-5 text-gray-700" />
					</div>
				)}
			</div>

			<div className="p-6 space-y-3">
				<div className="flex items-center justify-between">
					<h3 className="text-xl font-semibold line-clamp-1">
						{project.title}
					</h3>
				</div>

				<p className="text-sm text-muted-foreground line-clamp-2">
					{project.description}
				</p>

				<div className="flex items-center gap-2">
					<Badge variant="secondary">{project.category}</Badge>
				</div>
			</div>
		</Card>
	);
}
