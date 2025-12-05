import { PROJECTS } from '@/data/projects';
import ProjectCard from './ProjectCard';
import AnimatedArrow from './ui/animated-arrow';
import { Button } from './ui/button';

export default function HomePage() {
	const scrollToGrid = () => {
		document
			.getElementById('portfolio-grid')
			?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div className="min-h-screen">
			{/* Landing Section */}
			<section className="h-screen flex flex-col items-center justify-center px-4 relative">
				<div className="text-center space-y-8 relative z-10">
					<div className="space-y-4">
						<img
							src="/src/assets/Personal Branding/Mariah Holder - Personal Branding - Reverse.png"
							alt="Mariah Holder Personal Branding"
							className="h-[50vh]"
						/>
					</div>
					<div className="flex items-center justify-center gap-3">
						<Button
							onClick={scrollToGrid}
							size="lg"
							variant="ghost"
						>
							Check out my work
						</Button>
						<AnimatedArrow className="w-12 h-12 mt-8" />
					</div>
				</div>
			</section>

			{/* Portfolio Grid Section */}
			<section
				id="portfolio-grid"
				className="min-h-screen py-20 px-4 md:px-8 lg:px-16"
			>
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
						{PROJECTS.map((project) => (
							<ProjectCard key={project.id} project={project} />
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
