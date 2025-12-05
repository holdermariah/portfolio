import { useNavigate } from 'react-router-dom';
import type { Project } from '@/data/types';
import { Button } from './ui/button';

interface ProjectSidebarProps {
	project: Project;
	activeSection?: string;
}

export default function ProjectSidebar({
	project,
	activeSection,
}: ProjectSidebarProps) {
	const navigate = useNavigate();

	const scrollToSection = (sectionId: string) => {
		document
			.getElementById(sectionId)
			?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<aside className="w-full lg:w-64 lg:sticky lg:top-0 lg:h-screen p-6 lg:p-8 space-y-8 border-b lg:border-b-0 lg:border-r bg-background">
			{/* Logo / Back Button */}
			<div className="space-y-4">
				<Button
					variant="ghost"
					onClick={() => navigate('/')}
					className="px-0 hover:bg-transparent"
				>
					← Back to Portfolio
				</Button>
			</div>

			{/* Project Info */}
			<div className="space-y-2">
				<h1 className="text-2xl font-bold">{project.title}</h1>
				<p className="text-sm text-muted-foreground">{project.year}</p>
			</div>

			{/* Section Navigation */}
			<nav className="space-y-2">
				<p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
					Sections
				</p>
				{project.sections.map((section) => (
					<button
						key={section.id}
						onClick={() => scrollToSection(section.id)}
						className={`block w-full text-left text-sm py-2 px-3 rounded-md transition-colors ${
							activeSection === section.id
								? 'bg-accent font-medium'
								: 'hover:bg-accent/50'
						}`}
					>
						{section.title}
					</button>
				))}
			</nav>

			{/* Tools */}
			{project.tools && project.tools.length > 0 && (
				<div className="space-y-2">
					<p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
						Tools
					</p>
					<div className="flex flex-wrap gap-2">
						{project.tools.map((tool) => (
							<span
								key={tool}
								className="text-xs px-2 py-1 rounded-md bg-secondary"
							>
								{tool}
							</span>
						))}
					</div>
				</div>
			)}
		</aside>
	);
}
