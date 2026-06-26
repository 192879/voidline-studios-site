# Voidline Studios Website

Independent bilingual brand site for Voidline Studios / 未界影像.

## Online URLs

- International / VPN: https://192879.github.io/voidline-studios-site/
- China / EdgeOne: https://voidline-studios-site-whjz4wol.edgeone.cool/

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

EdgeOne deployment uses this new project:

```text
Project: voidline-studios-site
Project ID: makers-glzt1yj8lp57
```

Deploy to EdgeOne:

```bash
npm.cmd run build
edgeone.cmd makers deploy out --name voidline-studios-site --env production --area global
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
