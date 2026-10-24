# Jurado 13 · VBG

Sitio estático en Nuxt + Nuxt UI para una sesión pedagógica sobre VBG. Contiene una página común y tres expedientes por equipo.

## Desarrollo

```bash
npm install
npm run dev
```

## Rutas de la dinámica

- `/equipo/vela-roja` — Fiscalía
- `/equipo/puente-verde` — Defensa
- `/equipo/sol-ambar` — Jurado
- `/juez/roble-azul` — Juez

Las rutas son deliberadamente discretas, pero **no son privadas ni seguras**: cualquier persona que conozca la URL puede abrirlas. Para información realmente reservada se requiere autenticación o una distribución controlada de los enlaces.

## GitHub Pages

Antes de compilar para un repositorio de proyecto, ajusta el prefijo a su nombre:

```bash
NUXT_APP_BASE_URL=/nombre-del-repositorio/ npm run generate
```

Publica el contenido de `.output/public` con GitHub Pages. Para una página de usuario u organización (`usuario.github.io`), no hace falta el prefijo y basta `npm run generate`.

## Despliegue automatizado

Este repositorio incluye `.github/workflows/deploy-pages.yml`. Tras subir la rama `main`, GitHub Actions compila y publica el sitio en GitHub Pages con el prefijo correcto para `jurado-13-la-fogata-vbg`.

En GitHub, habilita **Settings → Pages → Build and deployment → Source: GitHub Actions** una única vez. La URL prevista será:

`https://olayita15.github.io/jurado-13-la-fogata-vbg/`
