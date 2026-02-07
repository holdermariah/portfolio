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
							<div
								className={cn(
									'w-full overflow-hidden',
									(section.images?.length ?? 0) >= 3
										? 'grid grid-cols-3 gap-4'
										: 'flex flex-row gap-16 items-start justify-center',
								)}
							>
								{section.images.map((image, index) => (
									<div
										key={index}
										className={cn(
											(section.images?.length ?? 0) >= 3
												? 'aspect-square overflow-hidden rounded'
												: 'flex-1 min-w-0',
										)}
									>
										<img
											src={image}
											alt={`${section.title} - Image ${
												index + 1
											}`}
											loading="lazy"
											className={cn(
												(section.images?.length ?? 0) >= 3
													? 'w-full h-full object-cover'
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
