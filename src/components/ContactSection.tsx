import { Linkedin, Mail } from 'lucide-react';
import { getImagePath } from '@/data/projects';

export default function ContactSection() {
	return (
		<section
			id="contact"
			className="min-h-screen bg-[#798dc6] py-16 px-8 lg:px-24 flex flex-col items-center justify-center"
		>
			<div className="max-w-5xl w-full">
				<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
					{/* Figure - Left */}
					<div className="shrink-0">
						<img
							src={getImagePath(
								'images/Personal Branding/Mariah Holder - Personal Branding - Reverse.png',
							)}
							alt="Mariah Holder"
							className="h-64 lg:h-80"
						/>
					</div>

					{/* Text - Right */}
					<div className="flex-1 text-center lg:text-left">
						<h2 className="text-3xl font-bold text-white mb-2">
							Let's Work Together
						</h2>
						<p className="text-white/80 mb-8">
							Have a project in mind? I'd love to hear from you.
						</p>

						{/* Social Links */}
						<div className="flex justify-center lg:justify-start gap-4">
							<a
								href="mailto:mariahohs@gmail.com"
								className="p-3 border border-white/50 hover:bg-white/20 rounded-full transition-all cursor-pointer"
								aria-label="Email"
								title="Send email to mariahohs@gmail.com"
							>
								<Mail className="w-6 h-6 text-white pointer-events-none" />
							</a>
							<a
								href="https://www.linkedin.com/in/mariahholder/"
								target="_blank"
								rel="noopener noreferrer"
								className="p-3 border border-white/50 hover:bg-white/20 rounded-full transition-all"
								aria-label="LinkedIn"
							>
								<Linkedin className="w-6 h-6 text-white" />
							</a>
						</div>
					</div>
				</div>

				{/* Footer */}
				<p className="text-white/50 text-center text-sm mt-16">
					Mariah Holder - Graphic Designer
				</p>
			</div>
		</section>
	);
}
