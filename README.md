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

In the Cloudflare project settings (not only in git):

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Deploy command | `npx wrangler pages deploy dist --project-name=maz` |
| Non-production branch deploy command | `npx wrangler pages deploy dist --project-name=maz` |

`wrangler.toml` must include `name` and `pages_build_output_dir` (already set).

**CLI**

```bash
npm run build
npx wrangler pages deploy dist --project-name=maz
```
