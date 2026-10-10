import type { Template } from 'tinacms';

export const aboutTeamBlockSchema: Template = {
	name: 'aboutTeam',
	label: 'Quiénes Somos / Equipo',
	fields: [
		{ type: 'string', label: 'Etiqueta Superior (ej. QUIÉNES SOMOS)', name: 'tag' },
		{ type: 'string', label: 'Título', name: 'title' },
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
		{
			type: 'object',
			label: 'Imagen del Equipo',
			name: 'image',
			fields: [
				{ name: 'src', label: 'Archivo de Imagen', type: 'image' },
				{ name: 'alt', label: 'Texto Alternativo (Alt)', type: 'string' },
			],
		},
	],
	ui: {
		defaultItem: {
			tag: 'QUIÉNES SOMOS',
			title: 'Un equipo dedicado a tu salud desde hace más de 30 años',
			description:
				'Brindamos a cada paciente un tratamiento personalizado, con un equipo que se capacita día a día. Realizamos rehabilitaciones pre y post-quirúrgicas, abordajes estéticos y tratamientos para adultos mayores, bebés, niños y adolescentes.',
			action: {
				label: 'Conocé más',
				link: '/about',
			},
			image: {
				src: '/assets/family.jpg',
				alt: 'Equipo Marzi Dall’Occhio',
			},
		},
	},
};
