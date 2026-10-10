import type { Template } from 'tinacms';

export const reelsBlockSchema: Template = {
	name: 'reels',
	label: 'Conocé más de nuestro trabajo (Videos / Reels)',
	fields: [
		{ type: 'string', label: 'Título', name: 'title' },
		{
			type: 'object',
			label: 'Videos',
			name: 'videos',
			list: true,
			ui: {
				itemProps: (item) => ({
					label: item?.title || 'Video',
				}),
			},
			fields: [
				{ type: 'string', label: 'Enlace o Archivo de Video', name: 'src' },
				{ type: 'string', label: 'Título del Video', name: 'title' },
				{ type: 'image', label: 'Portada / Miniatura (Opcional)', name: 'poster' },
			],
		},
	],
	ui: {
		defaultItem: {
			title: 'Conocé más de nuestro trabajo',
			videos: [
				{
					src: '/assets/instagram-video-one.mp4',
					title: 'Cuerpo y mente, ¿Cómo funcionan?',
				},
				{
					src: '/assets/instagram-video-two.mp4',
					title: '¿Qué es la Osteopatía?',
				},
				{
					src: '/assets/instagram-video-three.mp4',
					title: 'Los dolores de hoy',
				},
			],
		},
	},
};
