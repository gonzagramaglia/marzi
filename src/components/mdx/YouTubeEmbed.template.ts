import type { Template } from "tinacms";

export const youTubeEmbedTemplate: Template = {
  name: "YouTubeEmbed",
  label: "Video de YouTube (Incrustado)",
  fields: [
    {
      name: "videoId",
      label: "ID del Video de YouTube",
      type: "string",
      required: true,
      description: "El identificador de 11 caracteres del video de YouTube (ej. dQw4w9WgXcQ)",
    },
  ],
};
