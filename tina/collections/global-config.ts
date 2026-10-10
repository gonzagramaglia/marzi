import type { Collection } from "tinacms";

export const GlobalConfigCollection: Collection = {
  name: "config",
  label: "Configuración General",
  path: "src/content/config",
  format: "json",
  ui: {
    global: true,
  },
  fields: [
    {
      name: "seo",
      label: "Identidad del Sitio y SEO",
      type: "object",
      fields: [
        {
          name: "title",
          label: "Nombre del Sitio",
          type: "string",
          required: true,
        },
        {
          name: "description",
          label: "Descripción Meta (SEO)",
          type: "string",
          required: true,
        },
        {
          name: "siteOwner",
          label: "Titular / Responsable del Sitio",
          required: true,
          type: "string",
        },
        {
          name: "logo",
          label: "Logo del Encabezado (Header)",
          type: "image",
        },
        {
          name: "footerLogo",
          label: "Logo del Pie de Página (Footer)",
          type: "image",
        },
        {
          name: "address",
          label: "Dirección / Ubicación",
          type: "string",
        },
        {
          name: "whatsappLink",
          label: "Enlace de WhatsApp",
          type: "string",
        },
        {
          name: "whatsappLabel",
          label: "Texto del Botón de WhatsApp",
          type: "string",
        },
      ],
    },
    {
      name: "nav",
      label: "Menú de Navegación (Header)",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item?.title || "Elemento de Menú",
        }),
      },
      fields: [
        {
          name: "title",
          label: "Texto del Enlace",
          type: "string",
          required: true,
        },
        {
          name: "link",
          label: "Dirección URL del Enlace",
          type: "string",
          required: true,
        },
      ],
    },
    {
      name: "footerNav",
      label: "Menú del Pie de Página (Footer)",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item?.title || "Enlace de Footer",
        }),
      },
      fields: [
        {
          name: "title",
          label: "Texto del Enlace",
          type: "string",
          required: true,
        },
        {
          name: "link",
          label: "Dirección URL del Enlace",
          type: "string",
          required: true,
        },
      ],
    },
    {
      name: "contactLinks",
      label: "Redes Sociales y Enlaces de Contacto",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item?.title || "Red Social",
        }),
      },
      fields: [
        {
          name: "title",
          label: "Nombre / Red Social",
          type: "string",
        },
        {
          name: "link",
          label: "Dirección URL",
          type: "string",
        },
        {
          name: "icon",
          label: "Ícono (ej. tabler:brand-instagram)",
          type: "string",
        },
      ],
    },
    {
      name: "faqs",
      label: "Preguntas Frecuentes (FAQ)",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item?.question || "Pregunta",
        }),
      },
      fields: [
        {
          name: "question",
          label: "Pregunta",
          type: "string",
          required: true,
        },
        {
          name: "answer",
          label: "Respuesta",
          type: "string",
          ui: {
            component: "textarea",
          },
          required: true,
        },
      ],
    },
  ],
};
