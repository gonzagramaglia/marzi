import type { Template } from 'tinacms';
import type { Action } from '../../lib/data';

export const splitBlockSchema: Template = {
	name: 'split',
	label: 'Columna Dividida (Texto + Imagen)',
	fields: [
		{ type: 'string', label: 'Título', name: 'title' },
		{ type: 'rich-text', label: 'Texto', name: 'body' },
		{
			type: 'object', label: 'Imagen', name: 'image',
			fields: [
				{ name: 'src', label: 'Archivo de Imagen', type: 'image' },
				{ name: 'alt', label: 'Texto Alternativo (Alt)', type: 'string' },
			],
		},
		{ type: 'boolean', label: 'Imagen a la izquierda (invertir orden)', name: 'reverse' },
		{
			type: 'object', label: 'Botones / Acciones', name: 'actions', list: true,
			ui: { defaultItem: { label: 'Conocer más', type: 'button', link: '/' }, itemProps: (i: Action) => ({ label: i.label ?? '' }) },
			fields: [
				{ type: 'string', label: 'Texto del Botón', name: 'label' },
				{ type: 'string', label: 'Tipo', name: 'type', options: [{ label: 'Botón', value: 'button' }, { label: 'Enlace simple', value: 'link' }] },
				{ type: 'string', label: 'Ícono (Nombre Tabler)', name: 'icon' },
				{ type: 'string', label: 'Enlace', name: 'link' },
			],
		},
	],
	ui: {
		defaultItem: {
			title: 'Un enfoque dedicado a tu salud',
			body: 'Contamos con profesionales altamente capacitados para acompañarte en tu recuperación y bienestar.',
		},
	},
};
