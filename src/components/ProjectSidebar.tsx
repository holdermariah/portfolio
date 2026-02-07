import { useNavigate } from 'react-router-dom';
import type { Project } from '@/data/types';
import { Button } from './ui/button';
import { PROJECTS, getImagePath } from '@/data/projects';
import { LinkedinIcon, Mail, Phone } from 'lucide-react';

interface ProjectSidebarProps {
	project: Project;
	parentProjectId?: string;
}

export default function ProjectSidebar({ project, parentProjectId }: ProjectSidebarProps) {
	const navigate = useNavigate();

	return (
		<aside className="w-full lg:w-72 lg:sticky lg:top-0 lg:h-screen p-6 lg:p-8 space-y-8 border-b lg:border-b-0 bg-white overflow-y-auto">
			{/* Logo / Back Button */}
			<div className="space-y-4">
				<Button
					variant="ghost"
					onClick={() => {
						navigate('/');
						setTimeout(() => {
							document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
						}, 100);
					}}
					className="px-0 hover:bg-transparent text-gray-700 hover:text-black"
				>
					←
				</Button>
			</div>

			{/* Main Logo */}
			<div className="flex justify-center">
				<img
					src={getImagePath(
						'images/Personal Branding/Mariah Holder - Personal Branding.png',
					)}
					alt="Mariah Holder Personal Branding"
					className="h-48 cursor-pointer"
					onClick={() => navigate('/')}
				/>
			</div>

			{/* Projects Navigation */}
			<nav className="space-y-1">
				{PROJECTS.map((p) => {
					const isActiveParent = parentProjectId
						? p.id === parentProjectId
						: p.id === project.id;
					const isAuthenticated =
						p.subProjects &&
						sessionStorage.getItem(`project_auth_${p.id}`) === 'true';

					return (
						<div key={p.id}>
							<button
								onClick={() => navigate(`/project/${p.id}`)}
								className={`block w-full text-left text-sm px-3 rounded-md transition-colors hover:bg-gray-100 hover:text-[#798dc6] ${
									isActiveParent
										? 'font-bold text-[#798dc6]'
										: 'text-gray-500'
								}`}
							>
								{p.title}
							</button>

							{/* Nested sub-projects (indented, only when authenticated) */}
							{isAuthenticated && (
								<div className="ml-4 space-y-1 mt-1">
									{p.subProjects!.map((sub) => (
										<button
											key={sub.id}
											onClick={() =>
												navigate(`/project/${p.id}/${sub.id}`)
											}
											className={`block w-full text-left text-xs px-3 rounded-md transition-colors hover:bg-gray-100 hover:text-[#798dc6] ${
												sub.id === project.id
													? 'font-bold text-[#798dc6]'
													: 'text-gray-400'
											}`}
										>
											{sub.title}
										</button>
									))}
								</div>
							)}
						</div>
					);
				})}
			</nav>

			{/* Contact Section */}
			<div className="space-y-4 pt-4">
				<p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
					Get in Touch
				</p>
				<div className="flex flex-row gap-4">
					<a
						href="mailto:mariahohs@gmail.com"
						className="text-gray-700 hover:text-black transition-colors"
						aria-label="Email"
					>
						<Mail className="w-5 h-5" />
					</a>
					<a
						href="tel:+1 (778) 723 1604"
						className="text-gray-700 hover:text-black transition-colors"
						aria-label="Phone"
					>
						<Phone className="w-5 h-5" />
					</a>
					<a
						href="https://www.linkedin.com/in/mariahholder/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-700 hover:text-black transition-colors"
						aria-label="LinkedIn"
					>
						<LinkedinIcon className="w-5 h-5" />
					</a>
				</div>
			</div>
		</aside>
	);
}
