import type { Template } from 'tinacms';

export const activitiesBlockSchema: Template = {
	name: 'activities',
	label: 'Nuestros Espacios / Próximas Actividades',
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
		{ type: 'string', label: 'Etiqueta Superior (ej. NUESTROS ESPACIOS)', name: 'tag' },
		{ type: 'string', label: 'Título', name: 'title' },
		{ type: 'string', label: 'Descripción', name: 'description' },
		{ type: 'string', label: 'Subtítulo (ej. PRÓXIMAS ACTIVIDADES)', name: 'subheading' },
		{
			type: 'object',
			label: 'Lista de Actividades',
			name: 'items',
			list: true,
			ui: {
				itemProps: (item) => ({
					label: item?.title || 'Actividad',
				}),
			},
			fields: [
				{ type: 'string', label: 'Mes (ej. SEP)', name: 'month' },
				{ type: 'string', label: 'Día (ej. 12)', name: 'day' },
				{ type: 'string', label: 'Título de la Actividad', name: 'title' },
				{ type: 'string', label: 'Detalles / Horarios', name: 'details' },
			],
		},
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
