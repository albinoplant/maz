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

## Deploy to Cloudflare

Git-connected build settings:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Non-production branch deploy command | `npx wrangler deploy` |

Do not use `wrangler pages deploy` here — the build token lacks Pages API access, and this project serves static files via Workers Assets (`[assets]` in `wrangler.toml`).

**CLI**

```bash
npm run build
npx wrangler deploy
```
