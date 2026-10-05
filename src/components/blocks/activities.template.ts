import type { Template } from 'tinacms';

export const activitiesBlockSchema: Template = {
	name: 'activities',
	label: 'Nuestros Espacios / Próximas Actividades',
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
		{ type: 'string', label: 'Category Tag', name: 'tag' },
		{ type: 'string', label: 'Title', name: 'title' },
		{ type: 'string', label: 'Description', name: 'description' },
		{ type: 'string', label: 'Subheading', name: 'subheading' },
		{
			type: 'object',
			label: 'Activities List',
			name: 'items',
			list: true,
			ui: {
				itemProps: (item) => ({
					label: item?.title || 'Activity',
				}),
			},
			fields: [
				{ type: 'string', label: 'Month (e.g. SEP)', name: 'month' },
				{ type: 'string', label: 'Day (e.g. 12)', name: 'day' },
				{ type: 'string', label: 'Title', name: 'title' },
				{ type: 'string', label: 'Details', name: 'details' },
			],
		},
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
				src: '/assets/events.jpg',
				alt: 'Salón Multiusos',
			},
			tag: 'NUESTROS ESPACIOS',
			title: 'Salón Multiusos',
			description: 'Un espacio amplio y versátil para talleres, clases grupales y actividades de salud y bienestar.',
			subheading: 'PRÓXIMAS ACTIVIDADES',
			items: [
				{
					month: 'SEP',
					day: '12',
					title: 'Taller de estiramiento y movilidad',
					details: '10:00 - 11:30 hs · Cupo limitado',
				},
				{
					month: 'SEP',
					day: '19',
					title: 'Charla: prevención de lesiones frecuentes',
					details: '18:30 - 19:30 hs · Entrada libre',
				},
				{
					month: 'SEP',
					day: '26',
					title: 'Clase grupal de bienestar postural',
					details: '09:00 - 10:00 hs · Con inscripción',
				},
			],
			action: {
				label: 'Contactanos',
				link: '#contacto',
			},
		},
	},
};
