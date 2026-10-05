import type { Template } from 'tinacms';

export const heroBlockSchema: Template = {
	name: 'hero',
	label: 'Hero Image Banner',
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
		{ type: 'string', label: 'Optional Headline (Screen Readers / Title)', name: 'headline' },
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
