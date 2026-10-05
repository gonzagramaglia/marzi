import type { Template } from 'tinacms';

export const reelsBlockSchema: Template = {
	name: 'reels',
	label: 'Conocé más de nuestro trabajo (Videos / Reels)',
	fields: [
		{ type: 'string', label: 'Title', name: 'title' },
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
				{ type: 'string', label: 'Video Source URL / File', name: 'src' },
				{ type: 'string', label: 'Video Title', name: 'title' },
				{ type: 'image', label: 'Poster / Thumbnail (Optional)', name: 'poster' },
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
