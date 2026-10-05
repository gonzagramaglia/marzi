# Consultorios Marzi Dall'Occhio

Sitio web oficial y gestor de contenidos (CMS) para **Consultorios Marzi Dall'Occhio** (Osteopatía, Kinesiología y Fisioterapia en Córdoba, Argentina). Desarrollado con **Astro**, **Tailwind CSS v4** y **TinaCMS** para que el cliente pueda editar el contenido en tiempo real.

---

## 📊 Estado del Proyecto

- **Estado Actual**: Fase 2 en Curso (Desarrollo Frontend & CMS)
- **Próximos pasos**: Páginas de Contacto y Preguntas Frecuentes, revisión final con el cliente.

---

## 📋 Checklist de Avances

### Fase 1: Setup & Diseño
- [x] Exportación de recursos y estructura base desde Figma.
- [x] Configuración inicial del proyecto con Astro y Tailwind CSS.
- [x] Organización de assets multimedia (imágenes, videos, logos).

### Fase 2: Desarrollo Frontend & CMS
- [x] **Navegación**: Header adaptable con logo centrado y menú mobile.
- [x] **Página Principal (Home)**:
  - Hero banner principal.
  - Sección de Enfoques y Especialidades.
  - Salón Multiusos y Próximas Actividades.
  - Presentación del Equipo profesional.
  - Galería de Reels informativos.
  - Carrusel interactivo de Testimonios.
  - Banner CTA de contacto.
- [x] **Blog**:
  - Listado de artículos y vista individual en MDX.
  - Artículos médicos iniciales cargados.
- [x] **Página 404**: Vista personalizada en español.
- [x] **Footer**: Enlaces de navegación, redes sociales y ubicación.
- [x] **TinaCMS**: Configuración de esquemas y campos editables en tiempo real.
- [ ] **Página de Contacto (`/contacto`)**: Canales de atención y formulario.
- [ ] **Página de Preguntas Frecuentes (`/faq`)**: Respuestas a dudas frecuentes.

### Fase 3: Pruebas & Revisión
- [x] Optimización de compilación y rendimiento en producción.
- [x] Adaptabilidad responsiva (mobile, tablet, desktop).
- [ ] Revisión visual y feedback final con Marzi.

### Fase 4: Despliegue
- [ ] Despliegue en servidor de producción.
- [ ] Configuración final de accesos al CMS.

---

## 🚀 Tecnologías

- **Framework**: [Astro 5](https://astro.build/)
- **CMS Headless**: [TinaCMS](https://tina.io/)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Iconografía**: [Astro Icon](https://www.astroicon.dev/) (Tabler Icons)
- **Tipografía**: DM Sans Variable (`@fontsource-variable/dm-sans`)

---

## 🛠️ Comandos

```bash
# Iniciar servidor local (Astro + TinaCMS)
yarn dev

# Compilar para producción
npx astro build

# Vista previa de producción
npx astro preview
```