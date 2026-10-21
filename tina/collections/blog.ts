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
      name: "heroImagePosition",
      label: "Posición / Enfoque de la Imagen",
      description: "Ajustá el encuadre si la imagen corta partes importantes (ej. cabezas o detalles)",
      type: "string",
      options: [
        { label: "Centro (Por defecto - 50%)", value: "center" },
        { label: "Arriba (Top - 0%)", value: "top" },
        { label: "Arriba 15%", value: "center 15%" },
        { label: "Arriba 25%", value: "center 25%" },
        { label: "Arriba 35%", value: "center 35%" },
        { label: "Abajo 65%", value: "center 65%" },
        { label: "Abajo 75%", value: "center 75%" },
        { label: "Abajo 85%", value: "center 85%" },
        { label: "Abajo (Bottom - 100%)", value: "bottom" },
      ],
    },
    {
      name: "heroImageCustomPosition",
      label: "Posición Personalizada CSS (Opcional)",
      description: "Opcional: Si necesitás un valor exacto (ej. 'center 20%', '50% 10%', 'left top')",
      type: "string",
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
