import type { Collection } from "tinacms";

export const GlobalConfigCollection: Collection = {
  name: "config",
  label: "Global Config",
  path: "src/content/config",
  format: "json",
  ui: {
    global: true,
  },
  fields: [
    {
      name: "seo",
      label: "Site Identity & SEO",
      type: "object",
      fields: [
        {
          name: "title",
          label: "Site Name",
          type: "string",
          required: true,
        },
        {
          name: "description",
          label: "Default Meta Description (SEO)",
          type: "string",
          required: true,
        },
        {
          name: "siteOwner",
          label: "Site Owner",
          required: true,
          type: "string",
        },
        {
          name: "logo",
          label: "Header Logo",
          type: "image",
        },
        {
          name: "footerLogo",
          label: "Footer Logo",
          type: "image",
        },
        {
          name: "address",
          label: "Address / Location",
          type: "string",
        },
        {
          name: "whatsappLink",
          label: "WhatsApp URL",
          type: "string",
        },
        {
          name: "whatsappLabel",
          label: "WhatsApp Button Label",
          type: "string",
        },
      ],
    },
    {
      name: "nav",
      label: "Header Navigation Menu",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item?.title || "Nav Item",
        }),
      },
      fields: [
        {
          name: "title",
          label: "Link Label",
          type: "string",
          required: true,
        },
        {
          name: "link",
          label: "Link URL",
          type: "string",
          required: true,
        },
      ],
    },
    {
      name: "footerNav",
      label: "Footer Navigation Menu",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item?.title || "Footer Link",
        }),
      },
      fields: [
        {
          name: "title",
          label: "Link Label",
          type: "string",
          required: true,
        },
        {
          name: "link",
          label: "Link URL",
          type: "string",
          required: true,
        },
      ],
    },
    {
      name: "contactLinks",
      label: "Social / Contact Links",
      type: "object",
      list: true,
      ui: {
        itemProps: (item) => ({
          label: item?.title || "Link",
        }),
      },
      fields: [
        {
          name: "title",
          label: "Title",
          type: "string",
        },
        {
          name: "link",
          label: "Link",
          type: "string",
        },
        {
          name: "icon",
          label: "Icon (Tabler name, e.g. tabler:brand-instagram)",
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
