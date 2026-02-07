import type { Project } from './types';

export const getImagePath = (path: string) => {
	const base = import.meta.env.BASE_URL;
	return `${base}${path}`.replace(/\/+/g, '/');
};

export const PROJECTS: Project[] = [
	{
		id: 'multivista',
		title: 'Multivista Projects',
		year: 2021 - 2025,
		thumbnail: getImagePath(
			'images/multivista/cover _Multivista Social Media.png',
		),
		category: 'Multivista',
		description: 'Social media content design',
		sections: [
			{
				id: 'cover',
				title: '',
				content: '',
				images: [
					getImagePath(
						'images/multivista/cover _Multivista Social Media.png',
					),
				],
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
				images: [
					getImagePath('images/multivista/IMG_7347.jpg'),
					getImagePath('images/multivista/IMG_7348.jpg'),
					getImagePath('images/multivista/IMG_7349.jpg'),
				],
			},
			{
				id: 'content-4',
				title: '',
				content: '',
				images: [
					getImagePath('images/multivista/IMG_7350.jpg'),
					getImagePath('images/multivista/IMG_7351.jpg'),
					getImagePath('images/multivista/IMG_7352.jpg'),
				],
			},
			{
				id: 'content-7',
				title: '',
				content: '',
				images: [
					getImagePath('images/multivista/IMG_7353.jpg'),
					getImagePath('images/multivista/IMG_7354.jpg'),
					getImagePath('images/multivista/IMG_7355.jpg'),
				],
			},
		],
		tools: ['Photoshop', 'Illustrator'],
	}, // Multivista
	{
		id: 'arpo-cafe',
		title: 'Arpô Café',
		year: 2025,
		thumbnail: getImagePath('images/arpo/cover_Arpo Cafe - FINAL.png'),
		category: 'Logo Design',
		description: 'Complete visual identity for a modern cafe',
		sections: [
			{
				id: 'cover',
				title: '',
				content: '',
				images: [
					getImagePath('images/arpo/cover_Arpo Cafe - FINAL.png'),
				],
			},
			{
				id: 'text',
				title: '',
				content:
					"Arpô Café is a Brazilian coffee shop inspired by the vibrant spirit and iconic landscapes of Rio de Janeiro. The brand name comes from \"Pedra do Arpoador,\" a famous coastal landmark known for its breathtaking sunsets.\n\nFor the logo, I developed a visual identity that blends Brazilian energy with the cozy atmosphere of a neighborhood coffee shop. The color palette draws inspiration from Brazil's natural tones and sunny coastline, reinforcing the brand's roots and cultural essence.\n\nThe logo incorporates symbolic elements such as the sun, a coffee cup, a coffee bean, and the surrounding mountains. Together, these shapes represent both the richness of Brazilian coffee and the unique geography of Rio de Janeiro. The typography was carefully selected to convey a sense of movement, reflecting both the flow of coffee and the gentle rhythm of Rio's ocean waves. This detail brings harmony and motion to the visual identity, connecting the brand even more deeply to its cultural and geographic inspiration.\n\nThe result is a vibrant and meaningful mark that reflects the soul of Arpô Café: welcoming, authentic, and proudly Brazilian.",
			},
			{
				id: 'lines',
				title: '',
				content: '',
				images: [getImagePath('images/arpo/Arpo Cafe - lines.png')],
			},
			{
				id: 'elements',
				title: '',
				content: '',
				images: [getImagePath('images/arpo/Arpo Cafe - elements.png')],
			},
			{
				id: 'business-card',
				title: '',
				content: '',
				images: [
					getImagePath('images/arpo/Arpo cafe Business card.png'),
				],
			},
			{
				id: 'package',
				title: '',
				content: '',
				images: [getImagePath('images/arpo/Package Mockup.png')],
			},
			{
				id: 'pin',
				title: '',
				content: '',
				images: [
					getImagePath('images/arpo/Pin Mockup.png'),
					getImagePath('images/arpo/Coffee cup.png'),
				],
			},
			{
				id: 'coffee-cup',
				title: '',
				content: '',
				images: [],
			},
		],
		tools: ['Figma', 'Illustrator', 'Photoshop'],
	}, // Arpo
	{
		id: 'poti-studio',
		title: 'Paticideli',
		year: 2025,
		thumbnail: getImagePath('images/praticideli/1 - Praticideli LOGO.png'),
		category: 'Logo Design',
		description: 'Branding of Praticideli',
		sections: [
			{
				id: '1',
				title: '',
				content: '',
				images: [getImagePath('images/praticideli/1 - Praticideli LOGO.png')],
			},
			{
				id: 'text',
				title: 'Praticideli — Brand Identity Redesign',
				content:
					'Praticideli began as an exciting expansion within the DoTrigo food group, created to introduce a new brand aimed at a younger, more dynamic audience. I was invited to redesign DoTrigo’s existing visual language and transform it into something fresh, while still preserving a sense of connection to the parent brand. The challenge was to evolve the identity into a logo that felt more energetic, playful, and attention-grabbing. Since the target audience ranged from 25 to 40 years old, the design needed to communicate accessibility and modernity without losing the warmth associated with food brands. Through bold geometric forms and friendly typography, the final logo captures a lively personality that feels contemporary and inviting. The result is a visual identity that stands out on shelves and packaging, positioning Praticideli as a vibrant new voice within the DoTrigo family: familiar in spirit, yet confidently its own.',
			},
			{
				id: '2',
				title: '',
				content: '',
				images: [
					getImagePath(
						'images/praticideli/2 - Praticideli logo changing.png',
					),
				],
			},
			{
				id: '3',
				title: '',
				content: '',
				images: [getImagePath('images/praticideli/3 - Paper Cup Mockup_1.png')],
			},
			{
				id: '4',
				title: '',
				content: '',
				images: [getImagePath('images/praticideli/4 - Praticideli box.png')],
			},
			{
				id: '5',
				title: '',
				content: '',
				images: [
					getImagePath(
						'images/praticideli/5 - Store plaque.png',
					),
				],
			},
			{
				id: '6',
				title: '',
				content: '',
				images: [
					getImagePath('images/praticideli/6 - Paper bag mockup.png'),
				],
			},{
				id: '7',
				title: '',
				content: '',
				images: [
					getImagePath('images/praticideli/7 - apron Mockup_.png'),
				],
			}
		],
	}, // Praticideli
	{
		id: 'elali',
		title: 'Elali Counselling',
		year: 2023,
		thumbnail: getImagePath('images/elali/cover _ Elali Logo.png'),
		category: 'Logo Design',
		description: 'Logo design and brand identity',
		sections: [
			{
				id: 'cover',
				title: '',
				content: '',
				images: [getImagePath('images/elali/cover _ Elali Logo.png')],
			},
			{
				id: 'text',
				title: '',
				content:
					"Elali Counselling sought a brand identity that expressed warmth, emotional support, and a subtle connection to motherhood. The client envisioned floral elements and a gentle color palette capable of evoking comfort and empathy.\n\nTo bring this concept to life, I designed a visual identity centered around softness and emotional clarity. The logo features a minimalist jasmine flower enclosed in an oval frame, symbolizing nurturing, protection, and personal growth. The final result is a harmonious and soothing brand identity that aligns with Elali Counselling's values: professional, compassionate, and deeply human.",
			},
			{
				id: 'logo',
				title: '',
				content: '',
				images: [getImagePath('images/elali/ELALI2.png')],
			},
			{
				id: 'variations',
				title: '',
				content: '',
				images: [getImagePath('images/elali/ELALI.png')],
			},
			{
				id: 'variations-2',
				title: '',
				content: '',
				images: [getImagePath('images/elali/ELALI3.png')],
			},
		],
		tools: ['Illustrator', 'Photoshop'],
	}, // Elali
	{
		id: 'dotrigo',
		title: 'Dotrigo',
		year: 2023,
		thumbnail: getImagePath('images/dotrigo/cover _ Coxinha.jpg'),
		category: 'Package Design',
		description: 'Food photography and styling for Brazilian snacks',
		sections: [
			{
				id: 'coxinha',
				title: '',
				content: '',
				images: [getImagePath('images/dotrigo/cover _ Coxinha.jpg')],
			},
			{
				id: 'text',
				title: '',
				content:
					'Creation of packaging for frozen products, focusing on supermarket sales. The intention was to create striking packaging with strong colors that differentiated from others in the market, but without ignoring the color psychology applied in the food industry.',
			},
			{
				id: 'churros',
				title: '',
				content: '',
				images: [getImagePath('images/dotrigo/Churros.jpg')],
			},
			{
				id: 'bolinha-queijo',
				title: '',
				content: '',
				images: [getImagePath('images/dotrigo/Bolinha de queijo.jpg')],
			},
			{
				id: 'bolinho-carne',
				title: '',
				content: '',
				images: [getImagePath('images/dotrigo/Bolinho de carne.jpg')],
			},
			{
				id: 'pastel',
				title: '',
				content: '',
				images: [getImagePath('images/dotrigo/Pastel.jpg')],
			},
		],
		tools: ['Photography', 'Photoshop'],
	}, // Dotrigo
	{
		id: 'gdp-delivery',
		title: 'Gosto de Pão Delivery',
		year: 2020,
		thumbnail: getImagePath('images/gdp/GDP delivery logo.png'),
		category: 'Package Design',
		description: 'Brand identity for delivery service',
		sections: [
			{
				id: 'cover',
				title: '',
				content: '',
				images: [getImagePath('images/gdp/GDP delivery logo.png')],
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
				images: [getImagePath('images/gdp/GDP delivery .png')],
			},
			{
				id: 'sticker',
				title: '',
				content: '',
				images: [getImagePath('images/gdp/GDP delivery adesivo.png')],
			},
			{
				id: 'bag',
				title: '',
				content: '',
				images: [getImagePath('images/gdp/GDP delivery sacola.png')],
			},
		],
		tools: ['Illustrator', 'Photoshop'],
	}, // Gdp Delivery
	{
		id: 'animal-collages',
		title: 'Animal Collages',
		year: 2021,
		thumbnail: getImagePath(
			'images/collages/cover_Animal collage - all.png',
		),
		category: 'Collage',
		description: 'Creative animal portrait collages',
		sections: [
			{
				id: 'cover',
				title: '',
				content: '',
				images: [
					getImagePath(
						'images/collages/cover_Animal collage - all.png',
					),
				],
			},
			{
				id: 'panda',
				title: '',
				content: '',
				images: [
					getImagePath('images/collages/Animal collage - panda.png'),
				],
			},
			{
				id: 'esquilo',
				title: '',
				content: '',
				images: [
					getImagePath(
						'images/collages/Animal collage - esquilo.png',
					),
				],
			},
			{
				id: 'racoon',
				title: '',
				content: '',
				images: [
					getImagePath('images/collages/Animal collage - racoon.png'),
				],
			},
			{
				id: 'other',
				title: '',
				content: '',
				images: [
					getImagePath('images/collages/Animal collage - other.png'),
				],
			},
		],
		tools: ['Photoshop', 'Illustrator'],
	}, // Collages
];
