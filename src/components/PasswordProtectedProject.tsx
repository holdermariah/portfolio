import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import type { Project } from '@/data/types';
import ProjectSidebar from './ProjectSidebar';
import ProjectContent from './ProjectContent';

interface PasswordProtectedProjectProps {
	project: Project;
	correctPassword: string;
}

export default function PasswordProtectedProject({
	project,
	correctPassword,
}: PasswordProtectedProjectProps) {
	const [password, setPassword] = useState('');
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [error, setError] = useState(false);

	// Check if already authenticated in session
	useEffect(() => {
		const authKey = `project_auth_${project.id}`;
		const isAuth = sessionStorage.getItem(authKey) === 'true';
		setIsAuthenticated(isAuth);
	}, [project.id]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (password === correctPassword) {
			const authKey = `project_auth_${project.id}`;
			sessionStorage.setItem(authKey, 'true');
			setIsAuthenticated(true);
			setError(false);
		} else {
			setError(true);
			setPassword('');
		}
	};

	if (isAuthenticated) {
		return (
			<div className="min-h-screen flex flex-col lg:flex-row bg-white">
				<ProjectSidebar project={project} />
				<ProjectContent project={project} />
			</div>
		);
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-[#798dc6] p-4">
			<div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
				<div className="text-center mb-6">
					<h2 className="text-2xl font-bold text-gray-800 mb-2">
						Protected Content
					</h2>
					<p className="text-gray-600">
						This project requires a password to view
					</p>
				</div>

				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label
							htmlFor="password"
							className="block text-sm font-medium text-gray-700 mb-2"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
								setError(false);
							}}
							className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#798dc6] ${
								error
									? 'border-red-500 focus:ring-red-500'
									: 'border-gray-300'
							}`}
							placeholder="Enter password"
							autoFocus
						/>
						{error && (
							<p className="mt-2 text-sm text-red-600">
								Incorrect password. Please try again.
							</p>
						)}
					</div>

					<Button
						type="submit"
						className="w-full bg-[#798dc6] hover:bg-[#6a7db5] text-white py-2 rounded-lg transition-colors"
					>
						Unlock Project
					</Button>
				</form>

				<div className="mt-6 text-center">
					<a
						href="/"
						className="text-sm text-gray-600 hover:text-[#798dc6] transition-colors"
					>
						← Back to home
					</a>
				</div>
			</div>
		</div>
	);
}
