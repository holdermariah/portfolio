import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { getCategorySectionId } from '@/data/categories';
import { PROJECTS } from '@/data/projects';

export default function TopNav() {
	const navigate = useNavigate();
	const location = useLocation();
	const [activeSection, setActiveSection] = useState<string>('');

	// Get the first category for "My Work" link
	const firstCategory = PROJECTS[0]?.category || '';
	const myWorkSectionId = getCategorySectionId(firstCategory);

	const isAboutMePage = location.pathname === '/about-me';

	// Track active section with Intersection Observer (only on main page)
	useEffect(() => {
		if (isAboutMePage) {
			setActiveSection('about-me');
			return;
		}

		const sectionIds = ['hero', myWorkSectionId, 'contact'];

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
	}, [myWorkSectionId, isAboutMePage]);

	const handleNavigation = (itemId: string) => {
		if (itemId === 'about-me') {
			// Navigate to About Me page
			navigate('/about-me');
		} else if (isAboutMePage) {
			// If on About Me page, navigate back to home and scroll
			navigate('/');
			setTimeout(() => {
				const element = document.getElementById(itemId);
				if (element) {
					element.scrollIntoView({ behavior: 'smooth' });
				}
			}, 100);
		} else {
			// On main page, just scroll
			const element = document.getElementById(itemId);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}
	};

	const navItems = [
		{ id: myWorkSectionId, label: 'MY WORK' },
		{ id: 'about-me', label: 'ABOUT ME' },
		{ id: 'contact', label: 'CONTACT' },
	];

	return (
		<nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
			<div className="flex items-center gap-1 px-2 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
				{navItems.map((item) => {
					const isActive = activeSection === item.id;

					return (
						<button
							key={item.id}
							onClick={() => handleNavigation(item.id)}
							className={`px-4 py-2 text-sm font-medium transition-colors rounded-full ${
								isActive
									? 'text-white bg-white/20'
									: 'text-white/80 hover:text-white hover:bg-white/10'
							}`}
						>
							{item.label}
						</button>
					);
				})}
			</div>
		</nav>
	);
}
