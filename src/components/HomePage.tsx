import { PROJECTS } from '@/data/projects';
import ProjectCard from './ProjectCard';
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
			<section className="h-screen flex flex-col items-center justify-center px-4">
				<div className="text-center space-y-8">
					<div className="space-y-4">
						<h1 className="text-6xl md:text-8xl font-bold tracking-tight">
							Portfolio
						</h1>
						<p className="text-xl md:text-2xl text-muted-foreground">
							Graphic Design & Visual Identity
						</p>
					</div>
					<Button onClick={scrollToGrid} size="lg" className="mt-8">
						View Work ↓
					</Button>
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
