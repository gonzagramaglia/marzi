import type { Template } from 'tinacms';

export const ctaBannerBlockSchema: Template = {
	name: 'ctaBanner',
	label: 'Banner de Consulta / Llamado a la Acción (CTA)',
	fields: [
		{
			type: 'object',
			label: 'Imagen de Fondo',
			name: 'image',
			fields: [
				{ name: 'src', label: 'Archivo de Imagen', type: 'image' },
				{ name: 'alt', label: 'Texto Alternativo (Alt)', type: 'string' },
			],
		},
		{ type: 'string', label: 'Título Principal (ej. ¿CONSULTAS?)', name: 'headline' },
		{ type: 'string', label: 'Descripción', name: 'description', ui: { component: 'textarea' } },
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
			image: {
				src: '/assets/contact.jpg',
				alt: 'Consultas Marzi Dall’Occhio',
			},
			headline: '¿CONSULTAS?',
			description: 'Si tenés dudas sobre nuestros tratamientos o querés agendar tu primera consulta, estamos para ayudarte.',
			action: {
				label: 'Hablemos ahora',
				link: 'https://wa.me/5493510000000',
			},
		},
	},
};
