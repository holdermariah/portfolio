import type { Project } from '@/data/types';
import { cn } from '@/lib/utils';

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
							<div className="w-full gap-2 md:flex md:flex-row md:items-start md:justify-between overflow-hidden">
								{section.images.map((image, index) => (
									<div>
										<img
											key={index}
											src={image}
											alt={`${section.title} - Image ${
												index + 1
											}`}
											loading="lazy"
											className={cn(
												(section.images?.length ?? 0) >
													1
													? 'w-full md:flex-1 md:min-w-0 md:h-96 object-contain rounded'
													: 'w-full h-auto object-contain rounded',
											)}
										/>
									</div>
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
