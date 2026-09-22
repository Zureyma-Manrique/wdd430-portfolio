# WDD 430 Portfolio

A Next.js (App Router) portfolio site built for the WDD 430 W01 assignment.

## Live Deployment

https://your-app-name.vercel.app <!-- replace with your Vercel URL -->

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Custom Component

`SkillCard.tsx` (in `components/`) — displays a skill name, proficiency
level, and applies a typeface style via a typed `Typeface` prop. Rendered on
the About page.

## Reflection

**What is the purpose of `app/layout.tsx` in the Next.js App Router?**
It defines the root layout shared by every page — the `<html>`/`<body>`
shell, global styles, and persistent UI like the Header and Footer — and
renders each page's content through the `children` prop.

**Why are the components in this assignment Server Components rather than
Client Components?**
None of them need browser-only features like state, effects, or event
handlers, so keeping them as Server Components lets Next.js render them on
the server, ship less JavaScript to the browser, and load pages faster.
