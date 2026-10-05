import type { Collection } from 'tinacms';
import { heroBlockSchema } from '../../src/components/blocks/hero.template';
import { enfoquesBlockSchema } from '../../src/components/blocks/enfoques.template';
import { activitiesBlockSchema } from '../../src/components/blocks/activities.template';
import { aboutTeamBlockSchema } from '../../src/components/blocks/about-team.template';
import { reelsBlockSchema } from '../../src/components/blocks/reels.template';
import { testimonialBlockSchema } from '../../src/components/blocks/testimonial.template';
import { ctaBannerBlockSchema } from '../../src/components/blocks/cta-banner.template';
import { featuresBlockSchema } from '../../src/components/blocks/features.template';
import { statsBlockSchema } from '../../src/components/blocks/stats.template';
import { ctaBlockSchema } from '../../src/components/blocks/cta.template';
import { calloutBlockSchema } from '../../src/components/blocks/callout.template';
import { contentBlockSchema } from '../../src/components/blocks/content.template';
import { videoBlockSchema } from '../../src/components/blocks/video.template';
import { splitBlockSchema } from '../../src/components/blocks/split.template';

export const PageCollection: Collection = {
	name: 'page',
	label: 'Pages',
	path: 'src/content/page',
	format: 'mdx',
	ui: {
		router: ({ document }) => `/${document._sys.filename}`,
	},
	fields: [
		{
			name: 'seoTitle',
			label: 'Meta Title (SEO)',
			type: 'string',
			isTitle: true,
			required: true,
		},
		{
			type: 'object',
			list: true,
			name: 'blocks',
			label: 'Page Sections',
			templates: [
				heroBlockSchema,
				enfoquesBlockSchema,
				activitiesBlockSchema,
				aboutTeamBlockSchema,
				reelsBlockSchema,
				testimonialBlockSchema,
				ctaBannerBlockSchema,
				featuresBlockSchema,
				statsBlockSchema,
				ctaBlockSchema,
				contentBlockSchema,
				videoBlockSchema,
				splitBlockSchema,
				calloutBlockSchema,
			],
		},
	],
};
