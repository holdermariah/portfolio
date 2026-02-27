import { Link } from 'react-router-dom';

function ResumeSupportPage() {
	return (
		<div className="min-h-screen bg-white">
			<Link
				to="/"
				className="fixed top-4 left-4 z-50 text-[#798dc6] hover:underline font-medium print:hidden"
			>
				← Back to Portfolio
			</Link>

			<div className="max-w-[8.5in] mx-auto p-[0.75in] text-gray-800">
				{/* Header */}
				<div className="text-center mb-6">
					<h1 className="text-3xl font-bold text-gray-900 mb-1">
						Mariah Holder
					</h1>
					<div className="text-sm space-y-1">
						<p>
							mariahohs@gmail.com · 778 723 1604 · Vancouver, BC
						</p>
						<p>
							Portfolio: holdermariah.github.io/portfolio/ ·
							Password: mywork
						</p>
					</div>
				</div>

				{/* Summary */}
				<div className="mb-6">
					<p className="leading-relaxed text-sm text-justify">
						Empathetic and technical Graphic Designer with 5+ years
						of experience transitioning into Customer Support.
						Proven track record of simplifying complex concepts,
						troubleshooting visual/technical workflows, and
						collaborating with cross-functional teams to deliver
						high-quality solutions. Passionate about empowering the
						creative community and leveraging modern tools—including
						AI-assisted workflows—to provide exceptional,
						personalized support.
					</p>
				</div>

				{/* Work Experience */}
				<section className="mb-6">
					<h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3 uppercase tracking-wide">
						Work Experience
					</h2>

					{/* Multivista */}
					<div className="mb-5">
						<div className="flex justify-between items-baseline mb-1">
							<h3 className="font-bold text-gray-900">
								Graphic Designer
							</h3>
							<span className="text-xs font-semibold uppercase">
								Nov. 2021 – Nov. 2025
							</span>
						</div>
						<p className="text-sm font-medium italic mb-2">
							Multivista (Part of Hexagon) | Vancouver, BC
						</p>
						<ul className="list-disc list-outside ml-4 text-xs space-y-1.5">
							<li>
								<strong>Support & Troubleshooting:</strong>{' '}
								Managed and resolved internal support tickets
								from franchisees, providing technical guidance
								on brand assets and production workflows.
							</li>
							<li>
								Developed scalable design templates and toolkits
								to streamline cross-team production and improve
								self-service efficiency.
							</li>
							<li>
								Utilized{' '}
								<strong>
									AI-assisted workflows (Adobe Firefly)
								</strong>{' '}
								to rapidly prototype and test campaign assets.
							</li>
						</ul>
					</div>

					{/* Hartwell Therapy */}
					<div className="mb-5">
						<div className="flex justify-between items-baseline mb-1">
							<h3 className="font-bold text-gray-900">
								Front Desk & Administrative Support
							</h3>
							<span className="text-xs font-semibold uppercase">
								Feb. 2021 – Nov. 2021
							</span>
						</div>
						<p className="text-sm font-medium italic mb-2">
							Hartwell Therapy | Vancouver, BC
						</p>
						<ul className="list-disc list-outside ml-4 text-xs space-y-1.5">
							<li>
								Managed high-volume client inquiries via phone
								and email, providing empathetic support and
								guidance on clinic services.
							</li>
							<li>
								Methodically troubleshot scheduling conflicts
								and billing issues, ensuring a stress-free
								experience for patients.
							</li>
							<li>
								Utilized clinic management software to maintain
								records and process insurance claims.
							</li>
						</ul>
					</div>

					{/* Gosto de Pao */}
					<div className="mb-5">
						<div className="flex justify-between items-baseline mb-1">
							<h3 className="font-bold text-gray-900">
								Marketing Manager
							</h3>
							<span className="text-xs font-semibold uppercase">
								Jan. 2017 – Aug. 2019
							</span>
						</div>
						<p className="text-sm font-medium italic mb-2">
							Gosto de Pão Bakery | Natal, Brazil
						</p>
						<ul className="list-disc list-outside ml-4 text-xs space-y-1.5">
							<li>
								<strong>Customer Engagement:</strong> Managed
								digital presence across Instagram and Google
								Maps, providing timely and empathetic responses
								to customer inquiries.
							</li>
							<li>
								Built internal templates and visual guidelines
								to ensure brand consistency across the
								organization.
							</li>
							<li>
								Coordinated directly with vendors to resolve
								production issues and ensure technical
								specifications were met.
							</li>
						</ul>
					</div>

					{/* Marista School */}
					<div className="mb-5">
						<div className="flex justify-between items-baseline mb-1">
							<h3 className="font-bold text-gray-900">
								Customer Support & Front Desk
							</h3>
							<span className="text-xs font-semibold uppercase">
								Feb. 2016 – Dec. 2017
							</span>
						</div>
						<p className="text-sm font-medium italic mb-2">
							Marista School (Arts & Sports Department) | Natal,
							Brazil
						</p>
						<ul className="list-disc list-outside ml-4 text-xs space-y-1.5">
							<li>
								Served as the primary point of contact for
								students and parents, resolving inquiries
								related to artistic and sports programs.
							</li>
							<li>
								Managed scheduling and technical questions with
								a structured, empathetic approach to
								problem-solving.
							</li>
							<li>
								Acted as official department photographer,
								managing digital file organization and
								distribution.
							</li>
						</ul>
					</div>

					{/* Carratu Advertisement */}
					<div className="mb-5">
						<div className="flex justify-between items-baseline mb-1">
							<h3 className="font-bold text-gray-900">
								Trusted Google Photographer
							</h3>
							<span className="text-xs font-semibold uppercase">
								Jan. 2015 – Jun. 2015
							</span>
						</div>
						<p className="text-sm font-medium italic mb-2">
							Carratu Advertisement | Natal, Brazil
						</p>
						<ul className="list-disc list-outside ml-4 text-xs space-y-1.5">
							<li>
								Captured and processed high-quality 360-degree
								imagery for Google Business View and Google
								Maps, enhancing digital discoverability for
								local businesses.
							</li>
							<li>
								Managed end-to-end technical workflows, from
								on-site photography to digital stitching and
								uploading via Google's specialized platforms.
							</li>
							<li>
								Provided technical guidance to business owners
								on optimizing their Google My Business profiles
								for better customer engagement.
							</li>
						</ul>
					</div>
				</section>

				{/* Education & Awards */}
				<div className="grid grid-cols-2 gap-6 mb-6">
					<section>
						<h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3 uppercase tracking-wide">
							Education
						</h2>
						<div className="space-y-2 text-xs">
							<p>
								<strong>
									Bachelor in Advertising and Marketing
								</strong>
								<br />
								UFRN, Natal, Brazil | 2011–2016
							</p>
							<p>
								<strong>Graphic Design Certificate</strong>
								<br />
								SENAC RN, Natal, Brazil | 2012–2013
							</p>
						</div>
					</section>

					<section>
						<h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3 uppercase tracking-wide">
							Awards
						</h2>
						<p className="text-xs leading-relaxed">
							<strong>
								Winner Team: BID URBANLAB Brazil (2017)
							</strong>
							<br />
							First prize in an international urban design
							competition by the Inter-American Development Bank.
							Led visual communication and presentation layouts
							for sustainable district regeneration.
						</p>
					</section>
				</div>

				{/* Core Skills */}
				<section>
					<h2 className="text-lg font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3 uppercase tracking-wide">
						Core Skills & Tools
					</h2>
					<div className="grid grid-cols-2 gap-4 text-xs">
						<ul className="list-disc list-outside ml-4 space-y-1">
							<li>
								<strong>Support:</strong> Empathetic
								Communication, Structured Troubleshooting,
								Customer Success, Technical Guidance.
							</li>
							<li>
								<strong>Creative:</strong> Professional
								Photography Workflows, Visual Identity,
								Typography, Layout Systems.
							</li>
						</ul>
						<ul className="list-disc list-outside ml-4 space-y-1">
							<li>
								<strong>Tools:</strong> Figma, Adobe Creative
								Suite (PS, AI, ID, AE), Canva.
							</li>
							<li>
								<strong>Tech:</strong> AI-Assisted Workflows
								(Firefly), Version Control, Digital Asset
								Management.
							</li>
						</ul>
					</div>
				</section>
			</div>
		</div>
	);
}

export default ResumeSupportPage;
