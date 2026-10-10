import type { Template } from 'tinacms';

export const calloutBlockSchema: Template = {
	name: 'callout',
	label: 'Destacado / Aviso (Callout)',
	fields: [
		{ type: 'string', label: 'Texto del Aviso', name: 'text' },
		{ type: 'string', label: 'Enlace (URL)', name: 'url' },
	],
	ui: {
		defaultItem: { url: '/contacto', text: 'Atendemos con turno previo en nuestro consultorio de Alto Verde.' },
	},
};
