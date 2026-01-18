import { useMemo, useState, useEffect } from 'react';
import { PROJECTS } from '@/data/projects';
import {
	getCategoryDisplayName,
	getCategorySectionId,
} from '@/data/categories';

export default function TopNav() {
	const [activeSection, setActiveSection] = useState<string>('');

	// Get unique categories from projects (preserves order of first appearance)
	const categories = useMemo(() => {
		const seen = new Set<string>();
		const result: string[] = [];
		for (const project of PROJECTS) {
			if (!seen.has(project.category)) {
				seen.add(project.category);
				result.push(project.category);
			}
		}
		return result;
	}, []);

	// Track active section with Intersection Observer
	useEffect(() => {
		const sectionIds = [
			'hero',
			...categories.map((c) => getCategorySectionId(c)),
			'contact',
		];

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						// Set to empty string when hero is visible (no highlight)
						setActiveSection(
							entry.target.id === 'hero' ? '' : entry.target.id,
						);
					}
				}
			},
			{
				rootMargin: '-20% 0px -60% 0px',
				threshold: 0,
			},
		);

		for (const id of sectionIds) {
			const element = document.getElementById(id);
			if (element) {
				observer.observe(element);
			}
		}

		return () => observer.disconnect();
	}, [categories]);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
			<div className="flex items-center gap-1 px-2 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
				{categories.map((category) => {
					const sectionId = getCategorySectionId(category);
					const isActive = activeSection === sectionId;

					return (
						<button
							key={category}
							onClick={() => scrollToSection(sectionId)}
							className={`px-4 py-2 text-sm font-medium transition-colors rounded-full ${
								isActive
									? 'text-white bg-white/20'
									: 'text-white/80 hover:text-white hover:bg-white/10'
							}`}
						>
							{getCategoryDisplayName(category)}
						</button>
					);
				})}

				{/* Contact button with distinct styling */}
				<button
					onClick={() => scrollToSection('contact')}
					className={`px-4 py-2 text-sm font-medium transition-colors rounded-full ${
						activeSection === 'contact'
							? 'text-white bg-white/20 '
							: 'text-white/80 hover:text-white hover:bg-white/10'
					}`}
				>
					CONTACT
				</button>
			</div>
		</nav>
	);
}
