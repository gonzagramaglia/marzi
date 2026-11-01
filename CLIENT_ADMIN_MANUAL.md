# 📖 Manual de Administración y Gestión Web
## Consultorios Marzi Dall'Occhio — Osteopatía, Kinesiología y Fisioterapia

Bienvenido a la guía oficial de administración y edición de contenidos de tu sitio web. Esta plataforma cuenta con un gestor de contenidos moderno y visual (**TinaCMS**) que te permite actualizar textos, artículos, testimonios, fotos y datos de contacto en tiempo real sin necesidad de conocimientos técnicos.

---

## 📑 Índice
1. [Acceso al Panel de Control](#1-acceso-al-panel-de-control)
2. [Navegación por el Panel de Administración](#2-navegación-por-el-panel-de-administración)
3. [Edición en Vivo de la Página de Inicio (Home)](#3-edición-en-vivo-de-la-página-de-inicio-home)
4. [Gestión de Artículos del Blog](#4-gestión-de-artículos-del-blog)
5. [Configuración Global y Redes Sociales](#5-configuración-global-y-redes-sociales)
6. [Gestión de Servicios (/nosotros)](#6-gestión-de-servicios-nosotros)
7. [Gestión de Preguntas Frecuentes (FAQ)](#7-gestión-de-preguntas-frecuentes-faq)
8. [Sección "Trabajá con Nosotros" y Recepción de CVs](#8-sección-trabajá-con-nosotros-y-recepción-de-cvs)
9. [Guardado Seguro y Buenas Prácticas](#9-guardado-seguro-y-buenas-prácticas)

---

## 1. Acceso al Panel de Control y Credenciales

El panel de administración se encuentra disponible en la ruta `/admin` de tu sitio web:

```
https://tudominio.com.ar/admin
```
*(En entorno local de pruebas/desarrollo: `http://localhost:4321/admin`)*.

### 🔑 ¿Cómo se configuran y obtienen las credenciales?
El acceso al panel está protegido para garantizar que solo las personas autorizadas puedan modificar el contenido:

1. **Alta del usuario**: Durante la puesta en marcha en el servidor web (o al solicitar un nuevo usuario), el administrador del sistema da de alta el correo electrónico autorizado del cliente.
2. **Activación de contraseña**: El usuario recibe una invitación por correo o las credenciales iniciales para establecer su contraseña personal.
3. **Inicio de sesión**: Al ingresar a `/admin`, se solicitan el correo y contraseña configurados.
4. **Entorno local de desarrollo**: Si estás ejecutando el proyecto en tu computadora (`yarn dev`), el panel se ejecuta en modo local y permite editar directamente sin requerir contraseña.

> 🔒 **Seguridad**: Nunca compartas tus contraseñas por canales no seguros. Podés solicitar el alta o baja de usuarios autorizados al equipo técnico en cualquier momento.

---

## 2. Navegación por el Panel de Administración

En el menú lateral izquierdo encontrarás tres secciones principales:

| Sección | Descripción |
| :--- | :--- |
| **Pages (Páginas)** | Permite editar en vivo los bloques de la página de inicio (`home.mdx`) y otras páginas. |
| **Posts (Blog)** | Creación, redacción, edición y eliminación de artículos médicos y novedades. |
| **Global Config** | Datos generales del consultorio: WhatsApp de turnos, email de recepción de CVs, dirección, redes sociales, servicios (/nosotros), equipo profesional, sección laboral y FAQs. |

---

## 3. Edición en Vivo de la Página de Inicio (Home)

Al ingresar a **Pages → home.mdx**, verás el sitio web en tiempo real. Podés hacer clic en cualquier sección o utilizar la lista de bloques en la barra lateral para editar:

### Bloques disponibles:
- **Hero**: Título principal del consultorio e imagen de bienvenida.
- **Enfoques**: Título, texto descriptivo y tarjetas de Kinesiología, Osteopatía, Fisioterapia y Drenaje Linfático.
- **Nuestros Espacios / Salón Multiusos**: Descripción del espacio y listado de próximas actividades/talleres (con fecha, título y detalles).
- **Quiénes Somos**: Reseña del equipo y trayectoria.
- **Videos / Reels**: Videos explicativos con título y reproducción directa.
- **Testimonios**: Opiniones de pacientes. Podés agregar nuevos testimonios, editar citas o cambiar el nombre del paciente.
- **Banner de Consultas**: Mensaje de cierre con botón de llamada a la acción hacia WhatsApp.

---

## 4. Gestión de Artículos del Blog

El blog es ideal para posicionamiento en Google (SEO) y difusión de temas de salud y osteopatía.

### Para crear un nuevo artículo:
1. Andá a la sección **Posts** en el menú lateral.
2. Hacé clic en **+ Create Post** (Crear nuevo post).
3. Completá los campos:
   - **Título**: Nombre de la nota o artículo.
   - **Fecha de publicación (`Publish Date`)**: Fecha visible del artículo.
   - **Autor**: Profesional que firma la nota.
   - **Imagen de portada (`Hero Image`)**: Foto destacada del artículo.
   - **Descripción breve (`Description`)**: Resumen de 2 líneas para los buscadores.
   - **Cuerpo del artículo**: Editor de texto enriquecido donde podés escribir párrafos, títulos (H2, H3), listas con viñetas, citas destacadas e insertar imágenes intermedias.
4. Hacé clic en **Save** (Guardar) para publicarlo inmediatamente.

---

## 5. Configuración Global y Redes Sociales

Desde la sección **Global Config** se administran los datos que impactan en todo el sitio web:

- **WhatsApp URL (`whatsappLink`)**: Número de WhatsApp al que llegan las consultas de turnos (formato: `https://wa.me/549351XXXXXXX`).
- **Correo Electrónico (`email`)**: Dirección de email a la que se envían las postulaciones y CVs del formulario *Trabajá con Nosotros* (por defecto: `consultorio@juanmarzi.com.ar`).
- **Dirección (`address`)**: Ubicación física del consultorio que figura en el footer.
- **Logos**: Logotipos oficiales de cabecera y pie de página.
- **Social / Contact Links**: Enlaces a perfiles oficiales:
  - Instagram: `https://www.instagram.com/consultoriosmarzi`
  - Facebook: `https://www.facebook.com/ConsultoriosMarzi`

---

## 6. Gestión de Servicios (/nosotros)

El catálogo de servicios visibles en la sección `/nosotros#servicios` se administra de manera 100% dinámica desde **Global Config → Servicios (/nosotros)**:

- **Agregar nuevo servicio**: Hacé clic en **Add Item**.
- **Título**: Nombre de la especialidad o disciplina (ej. *Osteopatía*, *Suelo Pélvico*, etc.).
- **Imagen**: Fotografía ilustrativa del tratamiento.
- **Descripción**: Texto explicativo detallado del tratamiento. Admite saltos de línea y múltiples párrafos para una lectura cómoda.
- **Enlace al hacer clic**: Podés dirigir al paciente a `/faq` o a WhatsApp.
- **Reordenar o eliminar**: Podés arrastrar los servicios para priorizar el orden en la grilla o eliminarlos con el ícono de papelera.

*(También podés actualizarlos directamente desde el archivo `src/content/config/config.json`).*

---

## 7. Gestión de Preguntas Frecuentes (FAQ)

El acordeón interactivo de la página `/faq` es completamente administrable desde **Global Config → Preguntas Frecuentes (FAQ)**:

- **Agregar pregunta**: Hacé clic en **Add Item**.
- **Pregunta**: Redactá la duda habitual del paciente.
- **Respuesta**: Escribí la explicación clara y concisa.
- **Reordenar**: Podés arrastrar y soltar las preguntas para cambiar el orden de visualización.

---

## 8. Sección "Trabajá con Nosotros" y Recepción de CVs

La sección laboral se encuentra al pie de `/nosotros` (debajo de *Nuestro Equipo*) y cuenta con un enlace directo en el menú inferior del footer (*Trabajá con Nosotros*).

### ¿Cómo funciona la recepción de postulaciones?
1. El postulante completa sus datos (Nombre, Email, Teléfono, Especialidad, Mensaje) y adjunta su CV (en formato `.pdf`, `.doc` o `.docx`, hasta 10 MB).
2. El sistema envía la postulación y el archivo adjunto directamente al correo configurado en **Global Config → Correo Electrónico** (`consultorio@juanmarzi.com.ar`).
3. El postulante recibe confirmación inmediata en pantalla sin salir de la página.

> 📧 **Activación inicial de recepción (FormSubmit):**
> La primera vez que el formulario envía una postulación al correo electrónico de destino, el servicio enviará un email con el asunto *"Activate your form"*. Solo es necesario abrir ese correo una única vez y hacer clic en el botón de confirmación para que todas las futuras postulaciones lleguen directamente a la bandeja de entrada.

---

## 9. Guardado Seguro y Buenas Prácticas

### ¿Cómo se guardan los cambios?
1. Cada vez que realices una modificación, se activará el botón **Save** en la esquina superior derecha.
2. Al presionar **Save**, el sistema guarda los datos en formato seguro y actualiza el servidor web en producción.

### Consejos para el manejo de imágenes:
- **Formato recomendado**: `.jpg` o `.webp`.
- **Peso sugerido**: Menor a **1 MB** (preferentemente entre 100 KB y 500 KB) para que la página cargue a máxima velocidad en teléfonos celulares con datos móviles.
- **Fotos de personas o espacios**: Utilizar fotografías claras, bien iluminadas y en orientación horizontal para los banners y vertical para los videos/reels.

---

> 💡 **Soporte & Asistencia:** Ante cualquier duda sobre configuraciones avanzadas o modificaciones estructurales, podés comunicarte directamente con el equipo de desarrollo.
