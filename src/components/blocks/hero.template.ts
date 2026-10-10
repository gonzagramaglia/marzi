import type { Template } from 'tinacms';

export const heroBlockSchema: Template = {
	name: 'hero',
	label: 'Banner Principal (Hero)',
	fields: [
		{
			type: 'object',
			label: 'Imagen Principal',
			name: 'image',
			fields: [
				{ name: 'src', label: 'Archivo de Imagen', type: 'image' },
				{ name: 'alt', label: 'Texto Alternativo (Alt)', type: 'string' },
			],
		},
		{ type: 'string', label: 'Título Opcional (Lectores de pantalla / Accesibilidad)', name: 'headline' },
	],
	ui: {
		defaultItem: {
			image: {
				src: '/assets/hero.jpg',
				alt: 'Marzi Dall’Occhio - Kinesiología, Osteopatía y Fisioterapia',
			},
			headline: 'Marzi Dall’Occhio Consultorio',
		},
	},
};
