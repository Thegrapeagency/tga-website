# The Grape Agency — website

B2B-portfolio voor het brand activation bureau. App-achtige React/Vite-site: schuivende tabs,
pagina-overgangen en cases die als panelen over het werk heen omhoog schuiven. Werk is de held.

## Lokaal draaien
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # productiebuild in /dist
```

## Stack
- React 18 + Vite 5
- react-router-dom (routing + deep links naar cases)
- framer-motion (tab-pill, pagina-overgangen, case-sheets)

## Waar zit wat
- **Alle case-content:** `src/data/cases.js` — één bestand, per case een object.
  `verified: true` = cijfers uit de Drive. `verified: false` = concepttekst, cijfers met `[check]`.
- **Huisstijl (kleuren + fonts):** bovenin `src/index.css` (CSS-variabelen). Kleuren staan vast.
  Fonts wisselen = `--font-display` en `--font-body` aanpassen + de Google Fonts-link in `index.html`.
- **Pagina's:** `src/pages/` (Home, Work, Services, About, Contact).
- **Navigatie / footer:** `src/components/`.

## Nog invullen (zie INTERVIEW-cases.md)
- Cijfers en details voor 8 van de 10 cases.
- Echt e-mailadres en domein (nu placeholder `hello@thegrapeagency.nl`).
- Links naar Meisjes van de Wijn en Nacht van de Wijn (footer, `TODO`-markers).
- Echte logo en case-foto's.

## Deploy (Vercel)
`vercel.json` regelt de SPA-rewrites. Pushen naar de GitHub-org **Thegrapeagency** en koppelen
aan Vercel, of `vercel --prod`.
