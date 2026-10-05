import type { Template } from 'tinacms';

export const aboutTeamBlockSchema: Template = {
	name: 'aboutTeam',
	label: 'Quiénes Somos / Equipo',
	fields: [
		{ type: 'string', label: 'Category Tag', name: 'tag' },
		{ type: 'string', label: 'Title', name: 'title' },
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
		{
			type: 'object',
			label: 'Team Image',
			name: 'image',
			fields: [
				{ name: 'src', label: 'Image Source', type: 'image' },
				{ name: 'alt', label: 'Alt Text', type: 'string' },
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
