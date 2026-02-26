# Gabriel Romero Poza — Personal Portfolio

**Live site:** `https://gabrielromero.dev`  
**Built with:** Astro 5 · Tailwind CSS 4 · TypeScript  
**Languages:** Spanish (`/`) · English (`/en`)

This repository contains the source code for my personal website/portfolio. It’s intentionally **clean, fast, and minimal**.

---

### Why this repo is worth reading

- **Real-world mindset**: clear separation of concerns, typed data models, and predictable structure.
- **i18n without overengineering**: a tiny, type-safe translations setup (`src/i18n/`).
- **Reusable UI building blocks**: `Section`, `TimelineItem`, `ProjectCard`, `BrowserMockup`.
- **Security-aware by default**: documented attack surface for a static site in `docs/SECURITY.md`.
- **Astro “less JS” approach**: mostly static HTML/CSS with a small script for the mobile navbar.

---

### Project structure (high level)

```txt
src/
  components/   # UI sections + reusable pieces
  data/         # single sources of truth (e.g. tech stack)
  i18n/         # ES/EN translations + helpers
  layouts/      # base HTML layout + global styles
  pages/        # routes: / (ES) and /en (EN) + sitemap/robots
docs/           # security + best practices notes
```

---

### Run locally

```bash
pnpm install
pnpm dev
```

Open `http://localhost:4321`.

Other useful scripts:

```bash
pnpm build
pnpm preview
pnpm check
```

---

### Notes (CV PDFs)

The website links to two CV PDFs intended to be public:

- `public/CV_Gabriel_Romero_ES.pdf`
- `public/CV_Gabriel_Romero_EN.pdf`

They may include personal details (email/phone). If you fork this repo, replace them with your own files (or remove phone numbers for privacy).

---

### License

Code is released under the **MIT License**.  
See the `LICENSE` file for details.
