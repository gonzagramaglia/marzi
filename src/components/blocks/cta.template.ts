import type { Template } from 'tinacms';
import type { Action } from '../../lib/data';

export const ctaBlockSchema: Template = {
	name: 'cta',
	label: 'Llamado a la Acción (CTA)',
	fields: [
		{ type: 'string', label: 'Título', name: 'title' },
		{ type: 'string', label: 'Descripción', name: 'description', ui: { component: 'textarea' } },
		{
			type: 'object', label: 'Acciones / Botones', name: 'actions', list: true,
			ui: {
				defaultItem: { label: 'Contactar', type: 'button', link: '/contacto' },
				itemProps: (item: Action) => ({ label: item.label ?? '' }),
			},
			fields: [
				{ type: 'string', label: 'Texto del Botón', name: 'label' },
				{ type: 'string', label: 'Tipo', name: 'type', options: [
					{ label: 'Botón', value: 'button' }, { label: 'Enlace simple', value: 'link' } ] },
				{ type: 'string', label: 'Ícono (Nombre Tabler)', name: 'icon' },
				{ type: 'string', label: 'Enlace', name: 'link' },
			],
		},
	],
	ui: {
		defaultItem: {
			title: '¿Necesitás una consulta?',
			description: 'Ponete en contacto con nosotros para coordinar tu cita y comenzar tu tratamiento.',
			actions: [
				{ label: 'Escribir por WhatsApp', type: 'button', link: 'https://wa.me/5493510000000' },
				{ label: 'Ver Preguntas Frecuentes', type: 'link', link: '/faq' },
			],
		},
	},
};
