import type { Project } from '@/data/types';

interface ProjectContentProps {
	project: Project;
}

export default function ProjectContent({ project }: ProjectContentProps) {
	return (
		<main className="flex-1 p-10 lg:pl-24 lg:pr-24">
			<h2 className="text-3xl font-bold w-full text-center pb-8 text-black">
				{project.title}
			</h2>

			{/* Project Sections */}
			<div className="space-y-16">
				{project.sections.map((section) => (
					<section
						key={section.id}
						id={section.id}
						className="scroll-mt-8 space-y-6 w-full"
					>
						{section.images && section.images.length > 0 && (
							<div className="w-full gap-2 items-start md:flex md:flex-row">
								{section.images.map((image, index) => (
									<img
										key={index}
										src={image}
										alt={`${section.title} - Image ${
											index + 1
										}`}
										loading="lazy"
										className="w-auto h-auto md:min-w-0 md:min-h-96 object-contain"
									/>
								))}
							</div>
						)}

						{section.content && (
							<div className="prose prose-neutral max-w-none">
								{section.content
									.split('\n\n')
									.map((paragraph, index) => (
										<p
											key={index}
											className="text-base leading-relaxed mb-4 text-black"
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
