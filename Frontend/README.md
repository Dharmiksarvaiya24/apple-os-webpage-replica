# Apple OS Webpage Replica (Starter)

Boilerplate for an Apple-inspired marketing page built with **React + Vite** and styled with **Tailwind CSS**. This repository only sets up the folder structure, configs, and placeholders so you can begin crafting sections later.

## Getting started

1. Install packages: `npm install`
2. Tailwind requires rebuilding when you change the config: `npm run dev`
3. The local entry rendering `hello` lives in `src/App.jsx` and is intentionally minimal.

## Project structure

- `src/main.jsx` – single entry point bootstrapping React.
- `src/App.jsx` – clean shell showing just `hello` with Tailwind utility classes.
- `src/index.css` – imports Tailwind directives plus base resets for the future design language.
- `src/components/ui/` – reusable UI primitives (cards, buttons) with placeholders ready for later implementation.
- `src/pages/` – page-level placeholders (home, product, mobile, fallback) that will host the assembled sections.
- `src/sections/hero/` – hero section slots (split, immersive media, etc.) that will host Apple-style layouts.
- `src/sections/features/` – feature grids, highlights, and callouts grouped together for a scalable layout system.
- `src/animations/scroll/` – scroll-trigger and motion helpers for parallax/scroll reveal animations.
- `src/styles/` – typography, spacing, and layout tokens to be shared across sections.
- `src/utils/` – shared helpers, transformers, or hooks used by different sections.
- `src/assets/media/` – Images, video, or other media pieces that support the product presentation.

Each folder contains a brief placeholder component or README to keep the structure clear until you start implementing the Apple-esque UI.

## Configuration

- `package.json` – React 19 + Vite 8 setup with linting plus Tailwind dependencies.
- `tailwind.config.js` – pulls in all front-end files so Tailwind utilities are tree-shaken.
- `postcss.config.js` – wires Tailwind into the Vite build pipeline.
- `vite.config.js` – React plugin wired for fast refresh.
- `eslint.config.js` – ESLint base rules exported by the template.

The repository is ready for styling, animation wiring, and content once you replace the placeholders with real sections.
