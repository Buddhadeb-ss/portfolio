# LOCAL_SETUP.md — run the portfolio locally

## Prerequisites
- Node ≥ 18 (Node 20 or 24 supported)
- npm or yarn

## 1. Quick Start (Vite - Recommended for instant startup)
`ash
cd frontend
npm install --legacy-peer-deps
npm run dev
`
Open [http://localhost:3000](http://localhost:3000)

## 2. Or using CRA / Craco (Yarn)
`ash
cd frontend
npx yarn install
npx yarn start
`

## 3. Production Build
`ash
npm run build:vite
# or:
npx yarn build
`

## 4. Content edits
Edit rontend/src/data/portfolio.js — profile, projects, photos, capabilities, etc.
