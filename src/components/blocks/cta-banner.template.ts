import type { Template } from 'tinacms';

export const ctaBannerBlockSchema: Template = {
	name: 'ctaBanner',
	label: 'Banner de Consulta / CTA',
	fields: [
		{
			type: 'object',
			label: 'Background Image',
			name: 'image',
			fields: [
				{ name: 'src', label: 'Image Source', type: 'image' },
				{ name: 'alt', label: 'Alt Text', type: 'string' },
			],
		},
		{ type: 'string', label: 'Headline / Title', name: 'headline' },
		{ type: 'string', label: 'Description', name: 'description', ui: { component: 'textarea' } },
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
