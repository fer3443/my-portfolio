# MEMORY.md

Memoria entre sesiones. Reglas de uso: ver sección "Memory" en `AGENTS.md`.

## Estado actual

- Portfolio en producción (Vercel) con contenido del CV frontend actualizado (#12).
- Últimos cambios en `dev`: arreglos mobile en `/work` — imágenes sin recorte (#15) y flechas del carrusel debajo de la imagen (#16).
- Se agregó esta memoria (`MEMORY.md`) y `AGENTS.md`.

## Decisiones (y por qué)

- Gitflow `feature|fix|docs|chore/*` → `dev` (squash) → `main` (merge commit): historial limpio en `dev` y releases claras en `main`.
- El contenido de páginas vive en `messages/{es,en}.json`: un solo lugar para traducir; ambos archivos deben mantener la misma estructura.

## Errores a evitar

- No dar por buena una UI solo con `build`/`lint`: verificar en navegador (desktop + mobile, ambos locales si cambió contenido).
- Usar `Link`/`useRouter` de `@/i18n/navigation`, no de `next/*`, o se rompen las rutas localizadas.
