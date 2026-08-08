# MAZ Studio

Single-page site for an architecture / interior design studio. Vue 3 + Vite + TypeScript, Tailwind CSS, and Naive UI.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output lands in `dist/`.

## Preview (Vite)

```bash
npm run preview
```

## Preview as Cloudflare Pages (Wrangler)

```bash
npm run build
npm run pages:dev
```

This serves `dist` via `wrangler pages dev`.

## Deploy to Cloudflare Pages

**Option A — Dashboard**

1. Push this repo to GitHub.
2. In [Cloudflare Pages](https://dash.cloudflare.com/), create a project and connect the repo.
3. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Framework preset:** Vite (or None)

**Option B — CLI**

```bash
npm run build
npx wrangler pages deploy dist
```

No Workers or Functions in v1 — pure static hosting.
