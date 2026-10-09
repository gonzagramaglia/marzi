# 🛠️ Guía de Configuración de TinaCMS y Comparativa vs. WordPress
## Arquitectura Web Jamstack (Astro + TinaCMS)

Este documento detalla el **paso a paso técnico** para configurar TinaCMS con GitHub y TinaCloud en producción, junto con un **análisis comparativo exhaustivo entre TinaCMS y WordPress tradicional**.

---

## 📑 Índice
1. [Paso a Paso: Configuración del Repositorio y TinaCloud](#1-paso-a-paso-configuración-del-repositorio-y-tinacloud)
2. [Configuración de Variables de Entorno en el Hosting](#2-configuración-de-variables-de-entorno-en-el-hosting)
3. [Solución de Problemas Frecuentes (FAQ / Troubleshooting)](#3-solución-de-problemas-frecuentes-faq--troubleshooting)
4. [Alta de Usuarios para el Cliente](#4-alta-de-usuarios-para-el-cliente)
5. [Comparativa: TinaCMS vs. WordPress](#5-comparativa-tinacms-vs-wordpress)
6. [Pros y Contras Detallados](#6-pros-y-contras-detallados)
7. [Conclusión: ¿Por qué es la mejor opción para este proyecto?](#7-conclusión-por-qué-es-la-mejor-opción-para-este-proyecto)

---

## 1. Paso a Paso: Configuración del Repositorio y TinaCloud

### A. Configuración del Repositorio en GitHub
1. Ingresá a la configuración de tu repositorio en GitHub: `https://github.com/<tu-usuario>/<tu-repo>/settings`.
2. En la sección **Danger Zone** (al final de la página), podés definir la visibilidad:
   - **Público:** Para repositorios abiertos o portfolios.
   - **Privado:** Gratuito e ilimitado en GitHub para proyectos de clientes o código privado.
   *(TinaCMS funciona de manera idéntica en ambas opciones).*

### B. Vinculación y Creación del Proyecto en TinaCloud
1. Entrá a [https://app.tina.io/](https://app.tina.io/) e iniciá sesión con tu cuenta de GitHub.
2. Hacé clic en el botón **"New Project"** (Nuevo Proyecto).
3. **Selección del Repositorio exacto:**
   - Si es tu primera vez, TinaCloud te pedirá autorización para acceder a tus repositorios a través de la GitHub App de Tina.
   - En el listado desplegable de organizaciones/cuentas, seleccioná tu cuenta de GitHub (ej. `<tu-usuario>`).
   - Buscá y seleccioná **exactamente el repositorio de tu proyecto** (ej. `<tu-usuario>/<tu-repo>`).
4. **Rama principal (Default Branch):**
   - Seleccioná la rama de producción, habitualmente `main` (o `master`).
5. **Configuración de Site URL(s):**
   - TinaCloud te solicitará los orígenes autorizados para el panel `/admin`.
   - Ingresá tu entorno local y tu dominio de producción (separados por coma, **sin rutas ni barras `/` al final**):
     ```text
     http://localhost:4321, https://<tu-proyecto>.vercel.app
     ```
     *(Si tenés dominio personalizado propio, sumalo también: `https://tudominio.com`)*.
6. **Obtención de Credenciales de API:**
   - **Client ID (`PUBLIC_TINA_CLIENT_ID`):** Lo encontrás en la pestaña **Overview** o **Project Settings** de tu proyecto en TinaCloud.
   - **Read-only Token (`TINA_TOKEN`):** 
     - Andá a la pestaña **"Tokens"** en el menú de TinaCloud.
     - Hacé clic en **"New Token"** (o utilizá el token generado por defecto de tipo **Content (Read-only)**).
     - Copiá el token alfanumérico generado.

---

## 2. Configuración de Variables de Entorno en el Hosting

El proyecto en [`tina/config.ts`](tina/config.ts) lee automáticamente estas credenciales desde las variables de entorno:

### En Vercel, Netlify o Cloudflare Pages:
Andá a tu panel de hosting → **Settings** → **Environment Variables** y agregá:

```env
PUBLIC_TINA_CLIENT_ID=tu_client_id_de_tinacloud
TINA_TOKEN=tu_read_only_token_de_tinacloud
```

*(Opcional: Si querés forzar una URL canónica personalizada, podés agregar `SITE_URL=https://tudominio.com`)*.

### En Entorno Local o Servidor Propio (Node.js / VPS):
Creá o editá el archivo `.env` en la raíz del proyecto con las mismas variables:

```env
SITE_URL=http://localhost:4321
PUBLIC_TINA_CLIENT_ID=tu_client_id_de_tinacloud
TINA_TOKEN=tu_read_only_token_de_tinacloud
```

---

## 3. Solución de Problemas Frecuentes (FAQ / Troubleshooting)

### 🔴 Error: `ERROR: --content=local requires clientId, token to be configured` (Build en Vercel)
- **Causa:** El comando de build de producción intentó compilar el cliente de Tina sin las variables de entorno configuradas.
- **Solución:** Agregá `PUBLIC_TINA_CLIENT_ID` y `TINA_TOKEN` en las Environment Variables de tu hosting y ejecutá un **Redeploy**.

### 🔴 Error: `Your TinaCloud config is missing for domain: https://<tu-dominio>.vercel.app`
- **Causa:** El dominio donde abriste `/admin` no está en la lista de URLs autorizadas de TinaCloud.
- **Solución:** Entrá a [app.tina.io](https://app.tina.io) → Tu Proyecto → **Settings / Site URLs** y agregá `https://<tu-dominio>.vercel.app` (sin barra al final).

---

## 4. Alta de Usuarios para el Cliente

El cliente final **no necesita cuenta en GitHub ni conocimientos técnicos**:

1. En el panel de control de tu proyecto en [app.tina.io](https://app.tina.io), andá a la pestaña **"Users"** (o *Members*).
2. Hacé clic en **"Invite User"**.
3. Ingresá el correo electrónico del cliente (ej: `contacto@tudominio.com`).
4. El cliente recibirá una invitación automática por email para definir su contraseña.
5. A partir de ese momento, ingresa directamente a `https://<tu-dominio>.vercel.app/admin` (o tu dominio personalizado) con su email y contraseña.

---

## 5. Comparativa: TinaCMS vs. WordPress

| Aspecto | ⚡ TinaCMS + Astro (Arquitectura Jamstack) | 🐘 WordPress Tradicional |
| :--- | :--- | :--- |
| **Velocidad y Rendimiento** | **Ultra rápida (95-100 en PageSpeed)**. Genera HTML estático pre-compilado sin consultas pesadas a base de datos. | **Lenta a moderada (30-70)**. Requiere ejecutar PHP y consultar MySQL en cada visita. |
| **Seguridad** | **Inmune a hackeos comunes**. No tiene base de datos expuesta, ni PHP, ni plugins vulnerables. | **Alto riesgo de ataques**. El 90% de los hackeos web apuntan a plugins desactualizados de WordPress. |
| **Mantenimiento Técnico** | **Cero mantenimiento**. No hay plugins que se rompan al actualizar ni base de datos que optimizar. | **Constante**. Requiere parches continuos de seguridad, plugins, backups de base de datos y PHP. |
| **Control de Versiones (Backups)** | **Total y automático**. Cada cambio es un commit en Git; se puede restaurar cualquier versión anterior en 1 segundo. | **Complejo**. Depende de plugins de backups pesados o copias manuales de base de datos. |
| **Experiencia de Edición** | **Live Editing visual en tiempo real**. Se edita directamente sobre el diseño real de la web. | **Panel Gutenberg / Elementor**. Suele sentirse pesado, desfasado del diseño real y propenso a desorden visual. |
| **Costos de Hosting** | **$0 / mes** en infraestructura estática moderna (Cloudflare Pages, Vercel, Netlify). | **$5 - $20 / mes** por servidor con soporte PHP + MySQL y recursos dedicados. |
| **Ecosistema de Plugins** | Basado en librerías modernas de React/Tailwind/Astro integradas en código. | Miles de plugins "one-click" listos para instalar. |

---

## 6. Pros y Contras Detallados

### 🟢 Ventajas (PROS) de TinaCMS:
1. **Seguridad Absoluta:** Al no depender de una base de datos MySQL tradicional ni de código PHP en servidor, no existen vulnerabilidades por inyecciones SQL ni ataques de fuerza bruta al panel de admin.
2. **Máxima velocidad de carga (SEO):** El sitio vuela porque los usuarios reciben archivos HTML/CSS ultra-optimizados, lo que mejora drásticamente el posicionamiento en Google.
3. **Experiencia del Cliente Libre de Errores:** La estructura está tipada con esquemas (TypeScript). El cliente no puede "romper" accidentalmente el diseño ni desalinear componentes.
4. **Git como Fuente de Verdad:** Todo el contenido vive en archivos legibles (`.mdx` y `.json`), permitiendo historial completo de quién cambió qué y cuándo.

### 🔴 Desventajas (CONTRAS) de TinaCMS:
1. **Tiempo de compilación al publicar:** Al guardar en un sitio estático (SSG), los cambios tardan entre **1 y 2 minutos** en verse en la web pública mientras el hosting compila el nuevo código (a diferencia del guardado inmediato en base de datos de WordPress).
2. **Límite de usuarios en plan gratuito:** TinaCloud Free incluye hasta **2 usuarios administradores** (suficiente para la mayoría de clientes comerciales o institucionales).
3. **No apto para comercio electrónico transaccional:** No está diseñado para tiendas complejas con pasarelas de pago y carritos en tiempo real (como WooCommerce).
4. **Requiere desarrollador para crear nuevos componentes:** A diferencia de WordPress donde el usuario instala un plugin cualquiera, en Tina las nuevas secciones las programa el desarrollador para garantizar calidad de código.

---

## 7. Conclusión: ¿Por qué es la mejor opción para este proyecto?

Para un sitio institucional profesional:
- **Brinda la máxima seguridad y tranquilidad**: La web no se caerá por un plugin roto ni sufrirá hackeos de spam.
- **Ofrece la mejor experiencia para los visitantes**: Carga instantánea en smartphones, excelente SEO orgánico y diseño impecable.
- **Autonomía total para el cliente**: Pueden gestionar textos, notas de blog, testimonios y preguntas frecuentes de forma visual y sencilla.
