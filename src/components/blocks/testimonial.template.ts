import type { Template } from 'tinacms';
import type { TestimonialItem } from '../../lib/data';

export const testimonialBlockSchema: Template = {
	name: 'testimonial',
	label: 'Testimonios de Pacientes',
	fields: [
		{ type: 'string', label: 'Título de la Sección', name: 'title' },
		{ type: 'string', label: 'Descripción (Opcional)', name: 'description', ui: { component: 'textarea' } },
		{
			type: 'object', list: true, label: 'Lista de Testimonios', name: 'testimonials',
			ui: { defaultItem: { quote: 'Excelente atención y calidez profesional.', author: 'Paciente' }, itemProps: (i: TestimonialItem) => ({ label: `${i.author ?? 'Paciente'}: ${i.quote ?? ''}` }) },
			fields: [
				{ type: 'string', label: 'Testimonio / Opinión', name: 'quote', ui: { component: 'textarea' } },
				{ type: 'string', label: 'Nombre y Apellido', name: 'author' },
				{ type: 'string', label: 'Rol o Detalle (ej. paciente, deportista)', name: 'role' },
				{ type: 'image', label: 'Foto de Perfil (Opcional)', name: 'avatar' },
			],
		},
	],
	ui: {
		defaultItem: {
			title: 'Testimonios de Nuestros Pacientes',
			testimonials: [ { quote: 'El equipo me acompañó con enorme calidez y profesionalismo durante mi recuperación.', author: 'María Fernández', role: 'paciente' } ],
		},
	},
};
