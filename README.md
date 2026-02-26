# Revyve — Landing Page

One-screen landing page for Revyve's AI automation setup service.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit copy

All copy lives in a single file: **`app/page.tsx`**.

- **Hero / subhead** — top of the component
- **Benefits** — the `<ul>` with three check-marked items
- **Example automations** — the `examples` array at the top of the file
- **Integrations** — the `integrations` array at the top of the file
- **Process + Pricing** — inline text in the "Process + Pricing" section
- **Trust microcopy** — the paragraph below process/pricing
- **Footer** — bottom of the component

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Next.js — no config needed. Click **Deploy**.

Or use the CLI:

```bash
npx vercel
```
