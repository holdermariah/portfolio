import { Linkedin, Mail, Phone } from 'lucide-react';
import { getImagePath } from '@/data/projects';

export default function ContactSection() {
	return (
		<section
			id="contact"
			className="min-h-screen bg-[#798dc6] py-16 px-8 lg:px-24 flex flex-col items-center justify-center"
		>
			<div className="max-w-2xl w-full">
				{/* Logo */}
				<div className="flex justify-center mb-8">
					<img
						src={getImagePath(
							'images/Personal Branding/Mariah Holder - Personal Branding - Reverse.png',
						)}
						alt="Mariah Holder"
						className="h-40"
					/>
				</div>

				{/* Heading */}
				<h2 className="text-3xl font-bold text-center text-white mb-4">
					Let's Work Together
				</h2>
				<p className="text-white/80 text-center mb-12">
					Have a project in mind? I'd love to hear from you.
				</p>

				{/* Contact Links */}
				<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
					<a
						href="mailto:mariahohs@gmail.com"
						className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all"
					>
						<Mail className="w-5 h-5" />
						<span>mariahohs@gmail.com</span>
					</a>

					<a
						href="tel:+17787231604"
						className="flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all"
					>
						<Phone className="w-5 h-5" />
						<span>+1 (778) 723 1604</span>
					</a>
				</div>

				{/* Social Links */}
				<div className="flex justify-center gap-4 mt-8">
					<a
						href="https://www.linkedin.com/in/mariahholder/"
						target="_blank"
						rel="noopener noreferrer"
						className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all"
						aria-label="LinkedIn"
					>
						<Linkedin className="w-6 h-6" />
					</a>
				</div>

				{/* Footer */}
				<p className="text-white/50 text-center text-sm mt-16">
					Mariah Holder - Graphic Designer
				</p>
			</div>
		</section>
	);
}
