# Voidline Studios Website

Independent bilingual brand site for Voidline Studios / 未界影像.

## Online URLs

- International / VPN: https://192879.github.io/voidline-studios-site/
- International / Vercel: https://voidline-studios-site.vercel.app/
- China / EdgeOne public: https://voidline-studios-public-lg4vsi3d.edgeone.dev/
- Optional branded domain target: https://www.voidlinestudios.com/

Note: the earlier `edgeone.cool` URL was an authenticated preview URL and can return `401 UNAUTHORIZED` after the preview authentication expires. The current public EdgeOne entry is the overseas EdgeOne project URL above.

## Local Preview

PowerShell may block `npm.ps1`, so use `npm.cmd` on this machine.

```bash
npm.cmd install
npm.cmd run dev
```

Local URL:

```text
http://127.0.0.1:3010
```

## Build

```bash
npm.cmd run lint
npm.cmd run build
```

The static site is exported to `out/`.

## Deployment

GitHub Pages is deployed by `.github/workflows/deploy-pages.yml`.

EdgeOne public deployment uses this project:

```text
Project: voidline-studios-public
Project ID: makers-67wcg0wqfuui
```

Deploy to EdgeOne:

```bash
npm.cmd run build
edgeone.cmd makers deploy out --name voidline-studios-public --env production --area overseas
```

## Maintenance

- Brand copy, navigation, services, contact labels: `src/data/site.ts`
- Brand matrix: `src/data/brands.ts`
- Featured project placeholders and future projects: `src/data/projects.ts`
- AnimeShortFlow product copy: `src/data/product.ts`
- Logo image: `public/brand/voidline-logo.jpg`
- Future project images and videos: `public/projects/`
- Main page component: `src/components/studio-site.tsx`
- Global visual system: `src/app/globals.css`
