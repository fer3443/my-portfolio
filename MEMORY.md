# MEMORY.md

Memoria entre sesiones. Reglas de uso: ver sección "Memory" en `AGENTS.md`.

## Estado actual

- Último release en producción: #18 (2026-11-11), deploy de Vercel OK. Incluye home renovada + Precios Claros (#14), fixes mobile del carrusel de `/work` (#15, #16) y esta memoria + `AGENTS.md` (#17).
- En `dev`, pendiente de release a `main`: #19 — se quita "Contacto" del nav desktop (duplicaba el botón "Contactame"; mobile lo conserva), se corrige el typo "Conctactame" y el botón pasa a `<Button asChild><Link/></Button>` (antes `<button>` dentro de `<a>`, HTML inválido).
- Ramas limpias: solo `dev`, `main` y `docs/actualizar-memoria-19` (esta actualización, sin PR; se suma al próximo cambio).

## Errores conocidos sin resolver

- Los navs/header usan `next/link`/`next/navigation` en vez de `@/i18n/navigation`.
- Reportado: el botón Contactame disparaba el submit del form en `/contacto`. No se reprodujo con clic (el header está fuera del `<form>`); falta saber cómo se vio.

## Decisiones (y por qué)

- Tras cada release se trae `main` a `dev` (fast-forward si es posible): evita que el merge commit del release quede solo en `main` y genere divergencia.
- Actualizaciones solo de `MEMORY.md` pueden ir junto al siguiente cambio en vez de un PR propio, para no abrir PRs triviales.
- Gitflow `feature|fix|docs|chore/*` → `dev` (squash) → `main` (merge commit): historial limpio en `dev` y releases claras en `main`.
- El contenido de páginas vive en `messages/{es,en}.json`: un solo lugar para traducir; ambos archivos deben mantener la misma estructura.

## Errores a evitar

- No dar por buena una UI solo con `build`/`lint`: verificar en navegador (desktop + mobile, ambos locales si cambió contenido).
- Usar `Link`/`useRouter` de `@/i18n/navigation`, no de `next/*`, o se rompen las rutas localizadas.
- No correr `npm run build` con el dev server levantado: pisa `.next` y el dev server responde 500. Frenar el dev server antes del build.
- Ramas squash-mergeadas: `git branch -d` no las reconoce como mergeadas; comparar contra `dev` antes de borrar con `-D`.
