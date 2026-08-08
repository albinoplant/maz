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

## Preview

```bash
npm run preview
```

## Deploy to Cloudflare Pages

**Git-connected project settings**

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Deploy command | `npx wrangler pages deploy dist` |
| Non-production branch deploy command | `npx wrangler pages deploy dist` (or leave empty if optional) |

`wrangler.toml` sets `pages_build_output_dir = "dist"` and `name = "maz"`.

**CLI**

```bash
npm run build
npx wrangler pages deploy dist
```

No Workers/Functions in v1 — pure static site.
