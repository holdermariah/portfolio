import type { Project } from '@/data/types';

interface ProjectContentProps {
	project: Project;
}

export default function ProjectContent({ project }: ProjectContentProps) {
	return (
		<main className="flex-1 p-6 lg:pl-12 lg:pr-64">
			<h2 className="text-3xl font-bold w-full text-center pb-6">
				{project.title}
			</h2>

			{/* Project Sections */}
			<div className="space-y-16">
				{project.sections.map((section) => (
					<section
						key={section.id}
						id={section.id}
						className="scroll-mt-8 space-y-6"
					>
						{section.image && (
							<div className="rounded-lg overflow-hidden shadow-lg">
								<img
									src={section.image}
									alt={section.title}
									className="w-full h-auto"
									loading="lazy"
								/>
							</div>
						)}

						{section.content && (
							<div className="prose prose-neutral dark:prose-invert max-w-none">
								{section.content
									.split('\n\n')
									.map((paragraph, index) => (
										<p
											key={index}
											className="text-base leading-relaxed mb-4"
										>
											{paragraph}
										</p>
									))}
							</div>
						)}
					</section>
				))}
			</div>
		</main>
	);
}
