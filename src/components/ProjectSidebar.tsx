import { useNavigate } from 'react-router-dom';
import type { Project } from '@/data/types';
import { Button } from './ui/button';
import { PROJECTS } from '@/data/projects';

interface ProjectSidebarProps {
	project: Project;
}

export default function ProjectSidebar({ project }: ProjectSidebarProps) {
	const navigate = useNavigate();

	return (
		<aside className="w-full lg:w-64 lg:sticky lg:top-0 lg:h-screen p-6 lg:p-8 space-y-8 border-b lg:border-b-0 bg-background overflow-y-auto">
			{/* Logo / Back Button */}
			<div className="space-y-4">
				<Button
					variant="ghost"
					onClick={() => navigate('/')}
					className="px-0 hover:bg-transparent"
				>
					←
				</Button>
			</div>

			{/* Main Logo */}
			<div className="flex justify-center">
				<img
					src="/src/assets/Personal Branding/Mariah Holder - Personal Branding - Reverse.png"
					alt="Mariah Holder Personal Branding"
					className="h-32 cursor-pointer"
					onClick={() => navigate('/')}
				/>
			</div>

			{/* Projects Navigation */}
			<nav className="space-y-2">
				<p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
					Work
				</p>
				{PROJECTS.map((p) => (
					<button
						key={p.id}
						onClick={() => navigate(`/project/${p.id}`)}
						className={`block w-full text-left text-sm px-3 rounded-md transition-colors hover:bg-accent/50 ${
							p.id === project.id ? 'font-bold' : ''
						}`}
					>
						{p.title}
					</button>
				))}
			</nav>

			{/* Contact Section */}
			<div className="space-y-4 pt-4 border-t">
				<p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
					Get in Touch
				</p>
				<div className="space-y-2 text-sm">
					<a
						href="mailto:hello@example.com"
						className="block hover:text-accent-foreground transition-colors"
					>
						Email
					</a>
					<a
						href="https://linkedin.com"
						target="_blank"
						rel="noopener noreferrer"
						className="block hover:text-accent-foreground transition-colors"
					>
						LinkedIn
					</a>
					<a
						href="https://instagram.com"
						target="_blank"
						rel="noopener noreferrer"
						className="block hover:text-accent-foreground transition-colors"
					>
						Instagram
					</a>
				</div>
			</div>
		</aside>
	);
}
