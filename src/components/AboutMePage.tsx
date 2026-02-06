import TopNav from './TopNav';
import { getImagePath } from '@/data/projects';

export default function AboutMePage() {
	return (
		<div className="min-h-screen bg-[#798dc6]">
			<TopNav />

			<div className="min-h-screen flex items-center justify-center px-6 py-20">
				<div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
					<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
						About Me
					</h1>

					<div className="grid md:grid-cols-2 gap-8 items-center">
						{/* Text on the left */}
						<div className="space-y-4 text-lg text-gray-700 leading-relaxed">
							<p>
								I'm a Brazilian graphic designer based in
								Vancouver since 2019. I hold a BA in Advertising
								and Marketing and a certificate in Graphic Design,
								combining strategy with creativity in everything I
								do.
							</p>

							<p>
								I'm passionate about design, visual trends, and all
								forms of artistic expression. I'm especially drawn
								to the intersection of creativity and technology,
								and I love exploring photography as another way to
								tell visual stories.
							</p>

							<p>
								I'm always curious, always learning, and excited to
								create work that feels meaningful and visually
								engaging.
							</p>
						</div>

						{/* Photo on the right */}
						<div className="flex justify-center">
							<img
								src={getImagePath(
									'images/Personal Branding/mariahholder.JPG',
								)}
								alt="Mariah Holder"
								className="rounded-2xl shadow-lg max-w-full h-auto object-cover"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
