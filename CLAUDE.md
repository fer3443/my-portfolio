# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — dev server with Turbopack (http://localhost:3000)
- `npm run build` — production build (also the main type check; there is no separate `tsc` script)
- `npm run lint` — `next lint` (extends `next/core-web-vitals`, `next/typescript`)

There is no test suite. Deployed on Vercel (Vercel Analytics + Speed Insights are mounted in the root layout).

## Architecture

Personal portfolio built with Next.js 15 App Router, React 18, TypeScript, Tailwind CSS 3, shadcn/ui (Radix), and framer-motion. Path alias `@/*` → `src/*`.

### Internationalization (next-intl) — drives the whole app

- Locales are `es` (default) and `en`, configured in `src/i18n/routing.ts`. **All routes live under `src/app/[locale]/`**; `src/middleware.ts` applies the next-intl middleware.
- Route paths are localized via `pathnames` in `routing.ts` (e.g. `/resume` ↔ `/resumen`, `/work` ↔ `/trabajos`, `/services` ↔ `/servicios`, `/contact` ↔ `/contacto`). Adding a page requires adding its entry there. Use `Link`/`useRouter`/`usePathname` from `@/i18n/navigation`, not from `next/link`/`next/navigation`, so localized paths resolve.
- **Page content is data in `messages/en.json` and `messages/es.json`**, not just UI strings. Resume experience/education/skills text, services, and work projects are arrays read with `t.raw(...)` in the page components. Updating CV or project content usually means editing both JSON files and keeping their structure identical.
- Some non-text data (e.g. skill icons in `ResumeComponent.tsx`, project images in `public/`) is still hardcoded in components alongside the translated data.

### Page structure

Each route has a thin `page.tsx` that renders a client component from its sibling `ui/` folder (e.g. `resume/ui/ResumeComponent.tsx`). The home page (`[locale]/page.tsx`) is a server component using `getTranslations`.

The root layout (`[locale]/layout.tsx`) validates the locale, wraps everything in `NextIntlClientProvider`, and renders `Header`, the framer-motion `StairTransition`/`PageTransition` route-change animations, and the shadcn `Toaster`.

### Components

`src/components/index.ts` is a barrel re-exporting both custom components and shadcn primitives in `src/components/ui/`; import from `@/components`. When adding a shadcn component, also export it from the barrel. Note `components.json` points shadcn's CSS path at `src/app/globals.css`, but the actual file is `src/app/[locale]/globals.css`.

### Contact form

`ContactComponent` uses react-hook-form + zod. The schema is built by `getFormSchema(t)` in `src/types/zod.schema.interface.ts`, which takes a translator for `ContactPage.form.validations` so error messages are localized. Submission calls `sendEmail` (`src/actions/send-email.ts`), which sends **client-side via `@emailjs/browser`** (not a server action despite the folder name) and returns localized toast messages hardcoded per locale. Requires env vars `NEXT_PUBLIC_SERVICE_ID`, `NEXT_PUBLIC_TEMPLATE_ID`, `NEXT_PUBLIC_KEY`.

The downloadable CV is `public/Fernando_Arroyo_CV.pdf`.
