# Consultorios Marzi Dall'Occhio

Official website and content management platform for **Consultorios Marzi Dall'Occhio** — Osteopathy, Kinesiology, and Physical Therapy in Córdoba, Argentina.

Architected with **Astro**, **Tailwind CSS v4**, and **TinaCMS**, delivering a fast, accessible, Jamstack web experience with Git-backed real-time visual editing for zero-friction client self-management.

---

## 📊 Project Status: Phase 4 (Deployment & Launch)

The project has completed development, responsive quality assurance, and client refinement phases. It is currently in **Phase 4: Deployment & Launch**.

- **Active Branch**: `feat-services-and-careers` (Prepared for Pull Request & CodeRabbit audit)
- **Current Milestone**: Final production deployment, domain/DNS routing, and client TinaCloud access onboarding.

---

## 🗺️ Route Directory & Pages

| Route | Description & Features | CMS Management |
| :--- | :--- | :---: |
| **`/` (Home)** | Hero banner (Image & Loop Video support), Focus specialties, Multipurpose Hall events modal, Team highlight, Video reels, Interactive testimonials slider, WhatsApp CTA. | **Pages → home.mdx** |
| **`/nosotros`** | 7 specialized medical therapies, professional team profiles with medical license credentials, and **"Work With Us"** CV application form with automated email forwarding. | **Global Config → Services, Team & Careers** |
| **`/blog`** | Medical and health publication index featuring instant keyword search, tag filtering, and publication date sorting. | **Posts / Blog Collection** |
| **`/blog/[slug]`** | Full article reader with normalized 16:10 hero image aspect ratio, author badges, and embedded YouTube video player components. | **Posts (MDX + Rich Text)** |
| **`/faq`** | Animated interactive accordion answering patient questions (insurance reimbursements, session length, pediatric appointments). | **Global Config → FAQs** |
| **`/contacto`** | Interactive Google Maps embed with skeleton loader, direct WhatsApp booking link, phone lines, and clinic schedule. | **Global Config → Identity & Contact** |
| **`/admin`** | TinaCMS visual editor dashboard for content management. | **Native TinaCMS** |
| **`/rss.xml`** | Auto-generated RSS syndication feed for SEO and aggregators. | **Automated** |
| **`404`** | Branded custom error page with navigation shortcuts. | **Static Template** |

---

## 📋 Comprehensive Roadmap & Checklist

### Phase 1: Setup & Design Architecture
- [x] Asset extraction and layout architecture from Figma specifications.
- [x] Initial project configuration with Astro and Tailwind CSS v4.
- [x] Organization of media assets (photos, videos, logos, and favicons).

### Phase 2: Frontend Development & Headless CMS
- [x] **Header Navigation**: Centered logo branding, desktop menu with active state tracking, and mobile drawer.
- [x] **Home Page Modules**:
  - Hero banner with background image and loop muted video support.
  - Specialty focus cards section (*Enfoques*).
  - Multipurpose Hall (*Salón Multiusos*) and upcoming events modal.
  - Professional team highlight banner.
  - Informative video reels gallery.
  - Interactive patient testimonials slider.
  - Consultation WhatsApp CTA banner.
- [x] **About Us & Services (`/nosotros`)**:
  - Full catalog of 7 specialized services with multi-paragraph descriptions and balanced responsive grid.
  - Professional team profile cards (names, medical credentials, biographies, and portraits).
  - **"Work With Us" (*Trabajá con Nosotros*) section**: Job application form with CV file upload (.pdf, .doc, .docx) and automated email delivery.
- [x] **Blog System (`/blog`)**:
  - Real-time search engine and tag-filtering system.
  - Unified 16:10 aspect ratio between cards and full-article hero covers.
  - Rich MDX article view with embedded YouTube player template.
- [x] **Frequently Asked Questions (`/faq`)**: Interactive, accessible FAQ accordion connected dynamically to TinaCMS.
- [x] **Contact (`/contacto`)**: Interactive Google Maps embed with loading state, contact channels, direct WhatsApp links, and schedule info.
- [x] **Footer**: Multi-page navigation links, "Work With Us" shortcut, centered branding, social networks, and clinic location.
- [x] **TinaCMS**: Complete real-time visual editing schemas and global configuration models.

### Phase 3: Testing & Quality Assurance
- [x] Production build optimizations and static asset bundling.
- [x] Cross-device responsive layout audit (mobile, tablet, and desktop).
- [x] Typography scale harmonization across services and team biographies (`text-sm sm:text-base`).
- [x] Elimination of layout shifts and inconsistent card spacing (`flex-1` and title baseline normalization).
- [x] Image padding cleanup and footer logo spacing calibration.
- [x] Client feedback integration and visual refinements.

### Phase 4: Deployment & Launch (In Progress)
- [x] Production build verification and TinaCMS schema synchronization.
- [x] Feature branch isolation (`feat-services-and-careers`) for Pull Request & CodeRabbit audit.
- [ ] Push branch to remote and merge PR to `main`.
- [ ] Production deployment to hosting platform (Vercel / Cloudflare Pages / Netlify).
- [ ] Custom domain DNS configuration and SSL certification.
- [ ] TinaCloud client user invitation and permissions setup.
- [ ] Client training and handover of the Administration Manual.

---

## 🚀 Tech Stack

- **Framework**: [Astro 5](https://astro.build/) (Static Site Generation / Hybrid SSR)
- **Headless CMS**: [TinaCMS](https://tina.io/) (Git-backed content management with live visual editing)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Iconography**: [Astro Icon](https://www.astroicon.dev/) with [Tabler Icons](https://tabler.io/icons)
- **Typography**: DM Sans Variable (`@fontsource-variable/dm-sans`)

---

## 🔒 Security & Architecture Highlights

- **No SQL Database / No Server Vulnerabilities**: The entire content catalog is Git-backed (Markdown + MDX + JSON). There is no SQL database to maintain, migrate, or patch against vulnerabilities.
- **Client Autonomy**: Non-technical team members can edit texts, services, team bios, photos, FAQs, and blog articles directly through `/admin`.
- **CV Applications Pipeline**: Job applicant CV files are validated on the client side (filetype and size constraints) and dispatched securely via FormSubmit directly to the clinic's inbox without persisting sensitive resume files on third-party servers.

---

## 📚 Project Documentation

- 👉 **[Client Administration Manual (CMS)](CLIENT_ADMIN_MANUAL.md)**: Non-technical, step-by-step guide for the client covering the `/admin` portal, live editing, blog posts, services, and FAQ management.
- 👉 **[TinaCMS Setup Guide & WordPress Comparison](TINACMS_SETUP.md)**: Technical setup instructions for GitHub and TinaCloud, along with an architectural comparison against traditional WordPress.