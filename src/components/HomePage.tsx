import { PROJECTS, getImagePath } from '@/data/projects';
import ProjectCard from './ProjectCard';
import { Button } from './ui/button';
import { useState, useEffect, useRef } from 'react';

export default function HomePage() {
	const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
	const imageRef = useRef<HTMLDivElement>(null);

	// Eye position configuration
	const yOffset = 44;
	const showDebugBox = false; // Set to true to show red reference boxes
	const leftEyeX = 'calc(50% - 32px)';
	const leftEyeY = `calc(50% - ${yOffset}px)`;
	const rightEyeX = 'calc(50% + 12px)';
	const rightEyeY = `calc(50% - ${yOffset}px)`;
	const eyeSize = 4; // w-1 h-1 = 4px in Tailwind
	const rangeSize = 5; // 10px movement range box

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (!imageRef.current) return;

			const rect = imageRef.current.getBoundingClientRect();
			const imageCenterX = rect.left + rect.width / 2;
			const imageCenterY = rect.top + rect.height / 2;

			const deltaX = e.clientX - imageCenterX;
			const deltaY = e.clientY - imageCenterY;

			const angle = Math.atan2(deltaY, deltaX);
			const distance = Math.min(
				Math.sqrt(deltaX * deltaX + deltaY * deltaY) / 100,
				rangeSize / 2,
			);

			const x = Math.cos(angle) * distance;
			const y = Math.sin(angle) * distance;

			setEyePosition({ x, y });
		};

		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, [rangeSize]);

	const scrollToGrid = () => {
		document
			.getElementById('portfolio-grid')
			?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div className="min-h-screen">
			{/* Landing Section */}
			<section className="h-screen flex flex-col items-center justify-center relative">
				<div className="text-center space-y-8 relative z-10">
					<div className="space-y-6 relative" ref={imageRef}>
						<img
							src={getImagePath(
								'images/Personal Branding/Mariah Holder - Personal Branding - Reverse - No Pupils.png',
							)}
							alt="Mariah Holder Personal Branding"
							className="h-[50vh]"
						/>
						{/* Left Eye Range Box */}
						{showDebugBox && (
							<div
								className="absolute border-2 border-red-500"
								style={{
									left: `calc(${leftEyeX} - ${
										rangeSize / 2
									}px)`,
									top: `calc(${leftEyeY} - ${
										rangeSize / 2
									}px)`,
									width: `${rangeSize}px`,
									height: `${rangeSize}px`,
								}}
							/>
						)}
						{/* Left Eye */}
						<div
							className="absolute w-1 h-1 bg-white rounded-full transition-transform duration-100 ease-out"
							style={{
								left: `calc(${leftEyeX} - ${eyeSize / 2}px)`,
								top: `calc(${leftEyeY} - ${eyeSize / 2}px)`,
								transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`,
							}}
						/>
						{/* Right Eye Range Box */}
						{showDebugBox && (
							<div
								className="absolute border-2 border-red-500"
								style={{
									left: `calc(${rightEyeX} - ${
										rangeSize / 2
									}px)`,
									top: `calc(${rightEyeY} - ${
										rangeSize / 2
									}px)`,
									width: `${rangeSize}px`,
									height: `${rangeSize}px`,
								}}
							/>
						)}
						{/* Right Eye */}
						<div
							className="absolute w-1 h-1 bg-white rounded-full transition-transform duration-100 ease-out"
							style={{
								left: `calc(${rightEyeX} - ${eyeSize / 2}px)`,
								top: `calc(${rightEyeY} - ${eyeSize / 2}px)`,
								transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`,
							}}
						/>
					</div>
					<div className="flex items-center justify-center">
						<Button
							onClick={scrollToGrid}
							size="lg"
							variant="outline"
							className="p-4 text-white"
						>
							<div className="text-md font-montserrat font-bold">
								Check out my work!
							</div>
						</Button>
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
