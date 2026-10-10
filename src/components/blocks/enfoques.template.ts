import type { Template } from 'tinacms';

export const enfoquesBlockSchema: Template = {
	name: 'enfoques',
	label: 'Enfoques (Tarjetas de Especialidades)',
	fields: [
		{ type: 'string', label: 'Título Principal (Headline)', name: 'headline' },
		{ type: 'string', label: 'Bajada / Descripción (Tagline)', name: 'tagline' },
		{
			type: 'object',
			label: 'Tarjetas de Especialidades',
			name: 'cards',
			list: true,
			ui: {
				itemProps: (item) => ({
					label: item?.title || 'Especialidad',
				}),
			},
			fields: [
				{
					type: 'object',
					label: 'Imagen',
					name: 'image',
					fields: [
						{ name: 'src', label: 'Archivo de Imagen', type: 'image' },
						{ name: 'alt', label: 'Texto Alternativo (Alt)', type: 'string' },
					],
				},
				{ type: 'string', label: 'Título', name: 'title' },
				{ type: 'string', label: 'Enlace', name: 'link' },
			],
		},
		{
			type: 'object',
			label: 'Botón de Acción',
			name: 'action',
			fields: [
				{ type: 'string', label: 'Texto del Botón', name: 'label' },
				{ type: 'string', label: 'Enlace del Botón', name: 'link' },
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
