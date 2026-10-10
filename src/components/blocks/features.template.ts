import type { Template } from 'tinacms';
import type { FeatureItem } from '../../lib/data';

export const featuresBlockSchema: Template = {
	name: 'features',
	label: 'Características / Beneficios (Features)',
	fields: [
		{ type: 'string', label: 'Título', name: 'title' },
		{ type: 'string', label: 'Descripción', name: 'description' },
		{
			type: 'object', label: 'Lista de Características', name: 'items', list: true,
			ui: { itemProps: (i: FeatureItem) => ({ label: i?.title ?? '' }), defaultItem: { title: 'Nueva característica', text: 'Descripción de la característica.' } },
			fields: [
				{ type: 'string', label: 'Ícono (Nombre Tabler, ej. check)', name: 'icon' },
				{ type: 'string', label: 'Título', name: 'title' },
				{ type: 'rich-text', label: 'Texto descriptivo', name: 'text' },
			],
		},
	],
	ui: {
		defaultItem: {
			title: 'Diseñado para tu bienestar',
			description: 'Todo lo necesario para acompañar tu recuperación.',
			items: [
				{ title: 'Atención personalizada', text: 'Evaluación y tratamiento individual.', icon: 'heart-handshake' },
				{ title: 'Profesionales matriculados', text: 'Más de 30 años de experiencia.', icon: 'certificate' },
				{ title: 'Espacio confortable', text: 'Consultorio y salón equipado.', icon: 'building' },
			],
		},
	},
};
