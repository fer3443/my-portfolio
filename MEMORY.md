# MEMORY.md

Memoria entre sesiones. Reglas de uso: ver sección "Memory" en `AGENTS.md`.

## Estado actual

- Último release en producción: #18 (2026-11-11), deploy de Vercel OK. Incluye home renovada + Precios Claros (#14), fixes mobile del carrusel de `/work` (#15, #16) y esta memoria + `AGENTS.md` (#17).
- `dev` y `main` sincronizados tras el release (fast-forward de `dev` a `main`). Sin trabajo pendiente.

## Decisiones (y por qué)

- Tras cada release se trae `main` a `dev` (fast-forward si es posible): evita que el merge commit del release quede solo en `main` y genere divergencia.
- Actualizaciones solo de `MEMORY.md` pueden ir junto al siguiente cambio en vez de un PR propio, para no abrir PRs triviales.
- Gitflow `feature|fix|docs|chore/*` → `dev` (squash) → `main` (merge commit): historial limpio en `dev` y releases claras en `main`.
- El contenido de páginas vive en `messages/{es,en}.json`: un solo lugar para traducir; ambos archivos deben mantener la misma estructura.

## Errores a evitar

- No dar por buena una UI solo con `build`/`lint`: verificar en navegador (desktop + mobile, ambos locales si cambió contenido).
- Usar `Link`/`useRouter` de `@/i18n/navigation`, no de `next/*`, o se rompen las rutas localizadas.
