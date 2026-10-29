# Buddhadeb Banik — Portfolio

> Personal portfolio for Buddhadeb Banik — Aspiring Embedded Systems Engineer & Photographer.

Live site preview: [https://clean-frame-2.emergent.host/](https://clean-frame-2.emergent.host/)

## Tech Stack
- **Frontend**: React 19, Tailwind CSS, shadcn/ui, Framer Motion, Lenis Smooth Scroll, Lucide Icons, Next-Themes, React Router v7.
- **Tooling**: Vite 6 / CRA with Craco.
- **Backend (Optional template)**: FastAPI + Motor + MongoDB.

## Quick Start (Frontend)

```bash
cd frontend
npm install --legacy-peer-deps
npm run dev
```

Or using Yarn:
```bash
cd frontend
npx yarn install
npx yarn start
```

Visit [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
cd frontend
npm run build:vite
# Output will be in `frontend/dist/`
```

Or:
```bash
npx yarn build
# Output will be in `frontend/build/`
```

## Structure
- `frontend/src/data/portfolio.js`: Single source of truth for all projects, photography, bio, and social links.
- `frontend/src/pages/`: Home, Work, ProjectDetail, Photography, About.
- `frontend/src/components/`: Nav, Footer, Marquee, PhotoLightbox, Reveal, SmoothScroll, Logo.
- `frontend/public/`: Static assets (`favicon.svg`, `portrait.webp`, `resume.pdf`).
- `backend/`: Optional template backend (FastAPI).
- `scripts/`: Utilities such as `generate_resume.py`.
- `migration/`: Audits, design specs, functionality maps, and env templates.

