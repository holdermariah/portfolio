import type { Project } from './types';

export const getImagePath = (path: string) => {
	const base = import.meta.env.BASE_URL;
	return `${base}${path}`.replace(/\/+/g, '/');
};

export const PROJECTS: Project[] = [
	{
		id: 'arpo-cafe',
		title: 'Arpo Cafe - Logo Design',
		year: 2025,
		thumbnail: getImagePath('images/arpo/cover_Arpo Cafe - FINAL.png'),
		category: 'Branding',
		description: 'Complete visual identity for a modern cafe',
		sections: [
			{
				id: 'cover',
				title: '',
				content: '',
				image: getImagePath('images/arpo/cover_Arpo Cafe - FINAL.png'),
			},
			{
				id: 'text',
				title: '',
				content:
					"Arpô Café is a Brazilian coffee shop inspired by the vibrant spirit and iconic landscapes of Rio de Janeiro. The brand name comes from \"Pedra do Arpoador,\" a famous coastal landmark known for its breathtaking sunsets.\n\nFor the logo, I developed a visual identity that blends Brazilian energy with the cozy atmosphere of a neighborhood coffee shop. The color palette draws inspiration from Brazil's natural tones and sunny coastline, reinforcing the brand's roots and cultural essence.\n\nThe logo incorporates symbolic elements such as the sun, a coffee cup, a coffee bean, and the surrounding mountains. Together, these shapes represent both the richness of Brazilian coffee and the unique geography of Rio de Janeiro. The typography was carefully selected to convey a sense of movement, reflecting both the flow of coffee and the gentle rhythm of Rio's ocean waves. This detail brings harmony and motion to the visual identity, connecting the brand even more deeply to its cultural and geographic inspiration.\n\nThe result is a vibrant and meaningful mark that reflects the soul of Arpô Café: welcoming, authentic, and proudly Brazilian.",
			},
			{
				id: 'elements',
				title: '',
				content: '',
				image: getImagePath('images/arpo/Arpo Cafe - elements.png'),
			},
			{
				id: 'lines',
				title: '',
				content: '',
				image: getImagePath('images/arpo/Arpo Cafe - lines.png'),
			},
			{
				id: 'business-card',
				title: '',
				content: '',
				image: getImagePath('images/arpo/Arpo cafe Business card.png'),
			},
			{
				id: 'coffee-cup',
				title: '',
				content: '',
				image: getImagePath('images/arpo/Coffee cup.png'),
			},
			{
				id: 'package',
				title: '',
				content: '',
				image: getImagePath('images/arpo/Packege Mockup.png'),
			},
			{
				id: 'pin',
				title: '',
				content: '',
				image: getImagePath('images/arpo/Pin Mockup.png'),
			},
		],
		tools: ['Figma', 'Illustrator', 'Photoshop'],
	},
	{
		id: 'elali',
		title: 'Elali',
		year: 2023,
		thumbnail: getImagePath('images/elali/cover _ Elali Logo.png'),
		category: 'Branding',
		description: 'Logo design and brand identity',
		sections: [
			{
				id: 'cover',
				title: '',
				content: '',
				image: getImagePath('images/elali/cover _ Elali Logo.png'),
			},
			{
				id: 'text',
				title: '',
				content:
					"Elali Counselling sought a brand identity that expressed warmth, emotional support, and a subtle connection to motherhood. The client envisioned floral elements and a gentle colour palette capable of evoking comfort and empathy.\n\nTo bring this concept to life, I designed a visual identity centered around softness and emotional clarity. The logo features a minimalist jasmine flower enclosed in an oval frame, symbolizing nurturing, protection, and personal growth. The final result is a harmonious and soothing brand identity that aligns with Elali Counselling's values: professional, compassionate, and deeply human.",
			},
			{
				id: 'logo',
				title: '',
				content: '',
				image: getImagePath('images/elali/ELALI.png'),
			},
			{
				id: 'variations',
				title: '',
				content: '',
				image: getImagePath('images/elali/ELALI_2.png'),
			},
			{
				id: 'variations-2',
				title: '',
				content: '',
				image: getImagePath('images/elali/ELALI_3.png'),
			},
		],
		tools: ['Illustrator', 'Photoshop'],
	},
	{
		id: 'multivista',
		title: 'Multivista Social Media',
		year: 2021 - 2025,
		thumbnail: getImagePath(
			'images/multivista/cover _Multivista Social Media.png',
		),
		category: 'Social Media',
		description: 'Social media content design',
		sections: [
			{
				id: 'cover',
				title: '',
				content: '',
				image: getImagePath(
					'images/multivista/cover _Multivista Social Media.png',
				),
			},
			{
				id: 'text',
				title: '',
				content:
					"Over four years, I worked at Multivista as a graphic designer, and one of my responsibilities was creating content for Instagram and other social media platforms. Take a look at some of the work I created for Multivista's Instagram over the years:",
			},
			{
				id: 'content-1',
				title: '',
				content: '',
				image: getImagePath('images/multivista/IMG_7347.jpg'),
			},
			{
				id: 'content-2',
				title: '',
				content: '',
				image: getImagePath('images/multivista/IMG_7348.jpg'),
			},
			{
				id: 'content-3',
				title: '',
				content: '',
				image: getImagePath('images/multivista/IMG_7349.jpg'),
			},
			{
				id: 'content-4',
				title: '',
				content: '',
				image: getImagePath('images/multivista/IMG_7350.jpg'),
			},
			{
				id: 'content-5',
				title: '',
				content: '',
				image: getImagePath('images/multivista/IMG_7351.jpg'),
			},
			{
				id: 'content-6',
				title: '',
				content: '',
				image: getImagePath('images/multivista/IMG_7352.jpg'),
			},
			{
				id: 'content-7',
				title: '',
				content: '',
				image: getImagePath('images/multivista/IMG_7353.jpg'),
			},
			{
				id: 'content-8',
				title: '',
				content: '',
				image: getImagePath('images/multivista/IMG_7354.jpg'),
			},
			{
				id: 'content-9',
				title: '',
				content: '',
				image: getImagePath('images/multivista/IMG_7355.jpg'),
			},
		],
		tools: ['Photoshop', 'Illustrator'],
	},
	{
		id: 'dotrigo',
		title: 'Dotrigo - Package design',
		year: 2023,
		thumbnail: getImagePath('images/dotrigo/cover _ Coxinha.jpg'),
		category: 'Package Design',
		description: 'Food photography and styling for Brazilian snacks',
		sections: [
			{
				id: 'text',
				title: '',
				content:
					'Creation of packaging for frozen products, focusing on supermarket sales. The intention was to create striking packaging with strong colors that differentiated from others in the market, but without ignoring the color psychology applied in the food industry.',
			},
			{
				id: 'coxinha',
				title: '',
				content: '',
				image: getImagePath('images/dotrigo/cover _ Coxinha.jpg'),
			},
			{
				id: 'churros',
				title: '',
				content: '',
				image: getImagePath('images/dotrigo/Churros.jpg'),
			},
			{
				id: 'bolinha-queijo',
				title: '',
				content: '',
				image: getImagePath('images/dotrigo/Bolinha de queijo.jpg'),
			},
			{
				id: 'bolinho-carne',
				title: '',
				content: '',
				image: getImagePath('images/dotrigo/Bolinho de carne.jpg'),
			},
			{
				id: 'pastel',
				title: '',
				content: '',
				image: getImagePath('images/dotrigo/Pastel.jpg'),
			},
		],
		tools: ['Photography', 'Photoshop'],
	},
	{
		id: 'gdp-delivery',
		title: 'Gosto de pao Delivery - Package design',
		year: 2020,
		thumbnail: getImagePath('images/gdp/GDP delivery logo.png'),
		category: 'Package Design',
		description: 'Brand identity for delivery service',
		sections: [
			{
				id: 'cover',
				title: '',
				content: '',
				image: getImagePath('images/gdp/GDP delivery logo.png'),
			},
			{
				id: 'text',
				title: '',
				content:
					'Package design for Gosto de Pão Bakery.\n\nGosto de Pão is a chain of bakeries located in Natal, Brazil. They needed new package for their new system of delivery. So I designed two types of paper bag, sticker, cups, fries and hamburger bags.\n\nThe concept was designed to show that the company\'s products are made with carefulness and fresh ingredients. We chose the phase "Feito com amor" that means "Made with love" for represent this concept.',
			},
			{
				id: 'identity',
				title: '',
				content: '',
				image: getImagePath('images/gdp/GDP delivery .png'),
			},
			{
				id: 'sticker',
				title: '',
				content: '',
				image: getImagePath('images/gdp/GDP delivery adesivo.png'),
			},
			{
				id: 'bag',
				title: '',
				content: '',
				image: getImagePath('images/gdp/GDP delivery sacola.png'),
			},
		],
		tools: ['Illustrator', 'Photoshop'],
	},
	{
		id: 'animal-collages',
		title: 'Animal Collages',
		year: 2021,
		thumbnail: getImagePath(
			'images/collages/covner_Animal collage - all.png',
		),
		category: 'Collage',
		description: 'Creative animal portrait collages',
		sections: [
			{
				id: 'cover',
				title: '',
				content: '',
				image: getImagePath(
					'images/collages/covner_Animal collage - all.png',
				),
			},
			{
				id: 'panda',
				title: '',
				content: '',
				image: getImagePath(
					'images/collages/Animal collage - panda.png',
				),
			},
			{
				id: 'esquilo',
				title: '',
				content: '',
				image: getImagePath(
					'images/collages/Animal collage - esquilo.png',
				),
			},
			{
				id: 'racoon',
				title: '',
				content: '',
				image: getImagePath(
					'images/collages/Animal collage - racoon.png',
				),
			},
			{
				id: 'other',
				title: '',
				content: '',
				image: getImagePath(
					'images/collages/Animal collage - other.png',
				),
			},
		],
		tools: ['Photoshop', 'Illustrator'],
	},
];
