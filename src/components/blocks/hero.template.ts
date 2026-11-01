import type { Template } from 'tinacms';

export const heroBlockSchema: Template = {
	name: 'hero',
	label: 'Banner Principal (Hero)',
	fields: [
		{
			type: 'image',
			label: 'Video de Fondo (Opcional - MP4 / WebM)',
			name: 'videoSrc',
			description: 'Opcional: Si seleccionás un video, se reproducirá automáticamente en bucle silenciado. La imagen de abajo actuará como poster mientras carga.',
		},
		{
			type: 'object',
			label: 'Imagen Principal (o Portada del Video)',
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
