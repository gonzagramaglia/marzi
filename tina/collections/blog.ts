import type { Collection } from "tinacms";
import { youTubeEmbedTemplate } from "../../src/components/mdx/YouTubeEmbed.template";

export const BlogCollection: Collection = {
  name: "blog",
  label: "Blogs / Artículos",
  path: "src/content/blog",
  format: "mdx",
  ui: {
    router({ document }) {
      return `/blog/${document._sys.filename}`;
    },
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Título",
      isTitle: true,
      required: true,
    },
    {
      name: "category",
      label: "Categoría Principal (ej. OSTEOPATÍA, KINESIOLOGÍA)",
      type: "string",
    },
    {
      name: "tags",
      label: "Etiquetas / Tags adicionales",
      type: "string",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      name: "author",
      label: "Autor / Profesional (ej. Lic. Juan J. Marzi - M.P. 2403)",
      type: "string",
    },
    {
      name: "description",
      label: "Descripción corta / Resumen",
      type: "string",
      ui: {
        component: "textarea",
      },
    },
    {
      name: "pubDate",
      label: "Fecha de Publicación",
      type: "datetime",
    },
    {
      name: "heroImage",
      label: "Imagen Principal",
      type: "image",
    },
    {
      type: "rich-text",
      name: "body",
      label: "Contenido del Artículo",
      isBody: true,
      templates: [youTubeEmbedTemplate],
    },
  ],
};
