import type { Template } from 'tinacms';

export const contentBlockSchema: Template = {
	name: 'content',
	label: 'Contenido Enriquecido (Texto Libre)',
	fields: [
		{ type: 'rich-text', label: 'Cuerpo del Texto', name: 'body' },
	],
	ui: {
		defaultItem: {
			body: 'Escribí aquí el contenido del texto.',
		},
	},
};
