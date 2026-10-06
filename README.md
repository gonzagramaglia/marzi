# Consultorios Marzi Dall'Occhio

Sitio web oficial y gestor de contenidos (CMS) para **Consultorios Marzi Dall'Occhio** (Osteopatía, Kinesiología y Fisioterapia en Córdoba, Argentina). Desarrollado con **Astro**, **Tailwind CSS v4** y **TinaCMS** para que el cliente pueda editar el contenido en tiempo real.

---

## 📊 Estado del Proyecto

- **Estado Actual**: Fase 2 Completada / Fase 3 en Curso (Testing & Revisión)
- **Próximos pasos**: Revisión final con el cliente y preparación de despliegue.

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
- [x] **Página de Contacto (`/contacto`)**: Perfiles del equipo profesional, canales de atención directa (WhatsApp, teléfonos, email, redes) y mapa con loader dinámico.
- [x] **Página de Preguntas Frecuentes (`/faq`)**: Carrusel interactivo de servicios, acordeón dinámico de preguntas frecuentes gestionables desde TinaCMS y llamada a la acción.
- [x] **Footer**: Enlaces de navegación, redes sociales y ubicación.
- [x] **TinaCMS**: Configuración de esquemas y campos editables en tiempo real.

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

## 📚 Manual del Cliente (CMS)

La guía paso a paso para el uso del panel de administración (**TinaCMS**), edición en vivo, creación de posts de blog y gestión de FAQs se encuentra disponible en:

👉 **[Manual de Administración y Gestión Web](CLIENT_ADMIN_MANUAL.md)**

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