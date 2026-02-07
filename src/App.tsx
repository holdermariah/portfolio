import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import TopNav from './components/TopNav';
import AboutMePage from './components/AboutMePage';
import ProjectCard from './components/ProjectCard';
import ContactSection from './components/ContactSection';
import ProjectDetailPage from './components/ProjectDetailPage';
import { PROJECTS } from './data/projects';
import './App.css';

function MainPage() {
	return (
		<div className="min-h-screen bg-[#798dc6] scroll-smooth">
			<TopNav />

			{/* Hero Section */}
			<HomePage />

			{/* Projects */}
			<section id="projects" className="min-h-screen bg-[#798dc6] pt-24 pb-16 px-8 lg:px-24 scroll-mt-20">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{PROJECTS.map((project) => (
							<ProjectCard key={project.id} project={project} />
						))}
					</div>
				</div>
			</section>

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
