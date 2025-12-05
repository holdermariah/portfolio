import type { Project } from './types';

export const PROJECTS: Project[] = [
	{
		id: 'arpo-cafe',
		title: 'Arpo Cafe',
		year: 2024,
		thumbnail: '/src/assets/arpo/cover_Arpo Cafe - FINAL.png',
		category: 'Branding',
		description: 'Complete visual identity for a modern cafe',
		sections: [
			{
				id: 'overview',
				title: 'Project Overview',
				content:
					'This comprehensive brand identity project encompasses logo design, color palette, typography, and brand guidelines for Arpo Cafe.',
			},
			{
				id: 'elements',
				title: 'Brand Elements',
				content:
					'The brand combines modern minimalism with geometric shapes, creating a cohesive visual identity across all touchpoints.',
				image: '/src/assets/arpo/Arpo Cafe - elements.png',
			},
			{
				id: 'mockups',
				title: 'Applications',
				content:
					'The identity extends to various applications including packaging, business cards, pins, and coffee cups.',
				image: '/src/assets/arpo/Coffee cup.png',
			},
		],
		tools: ['Figma', 'Illustrator', 'Photoshop'],
	},
	{
		id: 'elali',
		title: 'ELALI',
		year: 2024,
		thumbnail: '/src/assets/elali/cover _ Elali Logo.png',
		category: 'Branding',
		description: 'Logo design and brand identity',
		sections: [
			{
				id: 'logo',
				title: 'Logo Design',
				content:
					'Contemporary logo design that balances elegance with modern aesthetics.',
				image: '/src/assets/elali/ELALI.png',
			},
			{
				id: 'variations',
				title: 'Brand Variations',
				content:
					'Multiple logo variations ensuring flexibility across different applications and contexts.',
				image: '/src/assets/elali/ELALI_2.png',
			},
		],
		tools: ['Illustrator', 'Photoshop'],
	},
	{
		id: 'multivista',
		title: 'Multivista',
		year: 2024,
		thumbnail: '/src/assets/multivista/cover _Multivista Social Media.png',
		category: 'Social Media',
		description: 'Social media content design',
		sections: [
			{
				id: 'content',
				title: 'Social Content',
				content:
					'Engaging social media designs with consistent visual language and strong brand presence.',
				image: '/src/assets/multivista/IMG_7347.jpg',
			},
			{
				id: 'series',
				title: 'Content Series',
				content:
					'Cohesive multi-post series maintaining visual consistency while allowing for creative variation.',
				image: '/src/assets/multivista/IMG_7348.jpg',
			},
		],
		tools: ['Photoshop', 'Illustrator'],
	},
	{
		id: 'dotrigo',
		title: 'Do Trigo',
		year: 2023,
		thumbnail: '/src/assets/dotrigo/cover _ Coxinha.jpg',
		category: 'Food Photography',
		description: 'Food photography and styling for Brazilian snacks',
		sections: [
			{
				id: 'coxinha',
				title: 'Coxinha',
				content:
					'Professional food photography showcasing traditional Brazilian snacks with appetizing presentation.',
				image: '/src/assets/dotrigo/cover _ Coxinha.jpg',
			},
			{
				id: 'variety',
				title: 'Product Range',
				content:
					'Complete visual documentation of the product line including churros, pastel, and cheese balls.',
				image: '/src/assets/dotrigo/Churros.jpg',
			},
		],
		tools: ['Photography', 'Photoshop'],
	},
	{
		id: 'gdp-delivery',
		title: 'GDP Delivery',
		year: 2023,
		thumbnail: '/src/assets/gdp/GDP delivery logo.png',
		category: 'Branding',
		description: 'Brand identity for delivery service',
		sections: [
			{
				id: 'identity',
				title: 'Brand Identity',
				content:
					'Complete visual identity for a modern delivery service with focus on clean, professional aesthetics.',
				image: '/src/assets/gdp/GDP delivery .png',
			},
			{
				id: 'applications',
				title: 'Brand Applications',
				content:
					'Identity extended to packaging materials including bags, stickers, and promotional items.',
				image: '/src/assets/gdp/GDP delivery sacola.png',
			},
		],
		tools: ['Illustrator', 'Photoshop'],
	},
	{
		id: 'animal-collages',
		title: 'Animal Collages',
		year: 2023,
		thumbnail: '/src/assets/collages/covner_Animal collage - all.png',
		category: 'Illustration',
		description: 'Creative animal portrait collages',
		sections: [
			{
				id: 'collection',
				title: 'Collage Collection',
				content:
					'Artistic collage series featuring various animals created with mixed media and creative composition techniques.',
				image: '/src/assets/collages/Animal collage - panda.png',
			},
			{
				id: 'variety',
				title: 'Series Showcase',
				content:
					'Diverse collection including pandas, squirrels, raccoons and other creatures with unique artistic treatments.',
				image: '/src/assets/collages/Animal collage - esquilo.png',
			},
		],
		tools: ['Photoshop', 'Illustrator'],
	},
];
