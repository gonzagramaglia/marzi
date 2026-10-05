import type { Template } from 'tinacms';

export const enfoquesBlockSchema: Template = {
	name: 'enfoques',
	label: 'Enfoques (Specialties Cards)',
	fields: [
		{ type: 'string', label: 'Headline', name: 'headline' },
		{ type: 'string', label: 'Tagline', name: 'tagline' },
		{
			type: 'object',
			label: 'Specialty Cards',
			name: 'cards',
			list: true,
			ui: {
				itemProps: (item) => ({
					label: item?.title || 'Specialty Card',
				}),
			},
			fields: [
				{
					type: 'object',
					label: 'Image',
					name: 'image',
					fields: [
						{ name: 'src', label: 'Image Source', type: 'image' },
						{ name: 'alt', label: 'Alt Text', type: 'string' },
					],
				},
				{ type: 'string', label: 'Title', name: 'title' },
				{ type: 'string', label: 'Link', name: 'link' },
			],
		},
		{
			type: 'object',
			label: 'Action Button',
			name: 'action',
			fields: [
				{ type: 'string', label: 'Label', name: 'label' },
				{ type: 'string', label: 'Link', name: 'link' },
			],
		},
	],
	ui: {
		defaultItem: {
			headline: 'Enfoques',
			tagline: 'Más de 30 años acompañando tu salud con osteopatía, kinesiología y fisioterapia en Córdoba.',
			cards: [
				{
					image: { src: '/assets/service-card-one.jpg', alt: 'Kinesiología' },
					title: 'Kinesiología',
					link: '/#kinesiologia',
				},
				{
					image: { src: '/assets/service-card-two.jpg', alt: 'Osteopatía' },
					title: 'Osteopatía',
					link: '/#osteopatia',
				},
				{
					image: { src: '/assets/service-card-three.jpg', alt: 'Fisioterapia' },
					title: 'Fisioterapia',
					link: '/#fisioterapia',
				},
				{
					image: { src: '/assets/service-card-four.jpg', alt: 'Drenaje Linfático' },
					title: 'Drenaje Linfático',
					link: '/#drenaje-linfatico',
				},
			],
			action: {
				label: 'Conocé Todos',
				link: '/servicios',
			},
		},
	},
};
