import { useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import TopNav from './components/TopNav';
import AboutMePage from './components/AboutMePage';
import CategorySection from './components/CategorySection';
import ContactSection from './components/ContactSection';
import ProjectDetailPage from './components/ProjectDetailPage';
import { PROJECTS } from './data/projects';
import { getCategorySectionId } from './data/categories';
import './App.css';

function MainPage() {
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

	// Group projects by category
	const projectsByCategory = useMemo(() => {
		const grouped: Record<string, typeof PROJECTS> = {};
		for (const project of PROJECTS) {
			if (!grouped[project.category]) {
				grouped[project.category] = [];
			}
			grouped[project.category].push(project);
		}
		return grouped;
	}, []);

	return (
		<div className="min-h-screen bg-[#798dc6] scroll-smooth">
			<TopNav />

			{/* Hero Section */}
			<HomePage />

			{/* Category Sections */}
			{categories.map((category) => (
				<CategorySection
					key={category}
					id={getCategorySectionId(category)}
					projects={projectsByCategory[category]}
				/>
			))}

			{/* Contact Section */}
			<ContactSection />
		</div>
	);
}

function App() {
	const basename = import.meta.env.MODE === 'production' ? '/portfolio' : '/';

	return (
		<BrowserRouter basename={basename}>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/about-me" element={<AboutMePage />} />
				<Route path="/project/:id" element={<ProjectDetailPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
