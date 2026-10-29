# PROJECT_AUDIT.md — Buddhadeb Banik Portfolio

Audited: 2026-10-29 · Method: direct file inspection in the live workspace.

## 1. Stack Summary (all verified)
- **Frontend**: React 19.0.0 (Create React App 5.0.1 + @craco/craco 7.1.0 / Vite 6), JavaScript (JSX, no TypeScript), Tailwind CSS 3.4.17 with tailwindcss-animate, shadcn/ui (new-york style), framer-motion 11.18.0, lenis 1.3.27, next-themes 0.4.6, react-router-dom 7.18.4, lucide-react 0.516.0.
- **Package manager**: yarn 1.22.22 or npm.
- **Backend**: FastAPI 0.110.1 + uvicorn 0.25.0 (Python 3.11/3.13) with MongoDB via motor 3.7.1. **The portfolio itself makes zero backend calls** — it is a static frontend; the backend only answers a template health route.
- **Database**: MongoDB exists in the template but stores nothing for the portfolio.
- **Authentication**: none.
- **External services**: Google Fonts (Outfit, Manrope), Google Drive image CDN (lh3.googleusercontent.com), Unsplash CDN (project card images), GitHub raw URLs (deep-dive build images).

## 2. Directory Tree
`
portfolio/
├── backend/
│   ├── pytest.ini
│   ├── requirements.txt
│   └── server.py
├── frontend/
│   ├── package.json
│   ├── craco.config.js
│   ├── vite.config.js
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── jsconfig.json
│   ├── components.json
│   ├── .env
│   ├── public/
│   │   ├── favicon.svg
│   │   ├── index.html
│   │   ├── portrait.webp
│   │   └── resume.pdf
│   └── src/
│       ├── App.js
│       ├── App.css
│       ├── index.js
│       ├── index.css
│       ├── components/
│       │   ├── Footer.jsx
│       │   ├── Logo.jsx
│       │   ├── Marquee.jsx
│       │   ├── Nav.jsx
│       │   ├── PhotoLightbox.jsx
│       │   ├── Reveal.jsx
│       │   └── SmoothScroll.jsx
│       ├── data/
│       │   └── portfolio.js
│       └── pages/
│           ├── About.jsx
│           ├── Home.jsx
│           ├── Photography.jsx
│           ├── ProjectDetail.jsx
│           └── Work.jsx
├── scripts/
│   └── generate_resume.py
└── migration/
    ├── PROJECT_AUDIT.md
    ├── LOCAL_SETUP.md
    ├── ASSET_INVENTORY.md
    ├── FUNCTIONALITY_MAP.md
    ├── DESIGN_SPEC.md
    └── env-templates/
`

## 3. Routes (react-router-dom v7, BrowserRouter)
| Route | Page component | Purpose |
|---|---|---|
| / | Home | Kinetic hero + parallax portrait, marquee, dual-discipline split panels, 3 featured projects, 5-photo strip, footer CTA |
| /work | Work | All 7 projects grid → links to detail pages |
| /work/:slug | ProjectDetail | Deep dive: overview, build log, wiring, hardware, build gallery, next-project link |
| /photography | Photography | 27-photo CSS-columns masonry, click → lightbox |
| /about | About | Bio, portrait, capabilities, Download CV, links |
