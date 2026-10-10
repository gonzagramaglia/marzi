import type { Template } from 'tinacms';

export const videoBlockSchema: Template = {
	name: 'video',
	label: 'Video (YouTube / Vimeo)',
	fields: [
		{ type: 'string', label: 'URL del Video (YouTube o Vimeo)', name: 'url' },
		{ type: 'boolean', label: 'Reproducción Automática (Auto Play)', name: 'autoPlay' },
		{ type: 'boolean', label: 'Repetir en Bucle (Loop)', name: 'loop' },
	],
	ui: { defaultItem: { url: 'https://www.youtube.com/watch?v=j8egYW7Jpgk' } },
};
