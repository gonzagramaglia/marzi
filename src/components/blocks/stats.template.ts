import type { Template } from 'tinacms';
import type { StatItem } from '../../lib/data';

export const statsBlockSchema: Template = {
	name: 'stats',
	label: 'Estadísticas / Cifras Clave (Stats)',
	fields: [
		{ type: 'string', label: 'Título', name: 'title' },
		{ type: 'string', label: 'Descripción', name: 'description' },
		{
			type: 'object', label: 'Cifras', name: 'stats', list: true,
			ui: { defaultItem: { stat: '+30', type: 'Años de Trayectoria' }, itemProps: (i: StatItem) => ({ label: `${i.stat ?? ''} ${i.type ?? ''}` }) },
			fields: [
				{ type: 'string', label: 'Número o Cifra (ej. +30, 100%)', name: 'stat' },
				{ type: 'string', label: 'Descripción o Concepto (ej. Años de trayectoria)', name: 'type' },
			],
		},
	],
	ui: {
		defaultItem: {
			title: 'Nuestra trayectoria en números',
			description: 'Acompañando a la comunidad con vocación y excelencia.',
			stats: [ { stat: '+30', type: 'Años de trayectoria' }, { stat: '100%', type: 'Atención personalizada' }, { stat: 'Córdoba', type: 'Alto Verde' } ],
		},
	},
};
