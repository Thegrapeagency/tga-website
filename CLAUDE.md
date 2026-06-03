# The Grape Agency — website (project context for Claude Code)

B2B portfolio site for **The Grape Agency**, a Dutch brand-activation agency for wine.
Case work is the hero. App-like feel: sliding tab nav, page transitions, case panels that
slide up over the work grid, video heroes.

Live: **https://thegrapeagency.nl** · Repo: **github.com/Thegrapeagency/tga-website** (branch `main`).

---

## Stack

- React 18 + Vite 5 (single-page app)
- react-router-dom (routing + deep links to cases, e.g. `/werk/:slug`)
- framer-motion (tab pill, page transitions, case sheets)
- No backend. All content is in `src/data/cases.js` and `src/i18n.jsx`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build -> /dist
```

## Deploy

- Hosted on **Vercel** (project `tga-website`, team "thegrapeagency's projects", Hobby).
- **Auto-deploy on every push to `main`.** Just `git push` and Vercel rebuilds.
- `vercel.json` handles SPA rewrites (all routes -> index.html).
- Domain `thegrapeagency.nl` + `www` point to Vercel. DNS is at **Hostnet**
  (A `@` -> 216.198.79.1, CNAME `www` -> Vercel). Email (MX) stays at Hostnet — do not touch.

---

## Language (i18n) — EN default, NL toggle

- `src/i18n.jsx` holds the `LanguageProvider`, the `useLang()` hook, the UI string
  dictionary (`dict.en` / `dict.nl`), and the `pick(value, lang)` helper.
- Default language is **English**; a button in the nav toggles to Dutch. Choice persists
  in `localStorage` (`tga-lang`).
- **Every user-facing string is bilingual.** UI chrome lives in `dict`. Case content uses
  `{ en, nl }` objects (see below). To render, call `pick(field, lang)`.

## Brand system (locked) — in `src/index.css` `:root`

- Colors (do not change): cream `#F3EFCC`, sand `#ECE7B4`, green `#406343`,
  green-dark `#32502E`, ink `#171717`, paper `#faf8ec`.
- Fonts: `--font-display` = Crete Round (headings), `--font-body` = Lexend (body).
  Loaded via Google Fonts in `index.html`. Milan is not attached to the fonts; swap by
  changing the two CSS variables + the `<link>` in index.html.
- Logo: `public/logo-black.png` (used in nav as-is, inverted to white in the footer).

---

## File map

```
index.html                     # meta (EN), Google Fonts
src/main.jsx                   # mounts App inside LanguageProvider + BrowserRouter
src/App.jsx                    # routes + AnimatePresence page transitions
src/i18n.jsx                   # language context, UI dictionary, pick()
src/index.css                  # ALL styling (brand tokens + components)
src/data/cases.js              # ALL case content (bilingual). The core file.
src/components/
  Nav.jsx                      # sliding tab bar + EN/NL toggle
  Footer.jsx
  Page.jsx                     # page transition wrapper
  CaseCard.jsx                 # the work-grid tile
src/pages/
  Home.jsx                     # hero + full portfolio grid (media-first) + clients
  Work.jsx                     # work grid + CaseSheet (the slide-up case panel)
  Services.jsx                 # 6 services (bilingual, defined in-file)
  About.jsx
  Contact.jsx                  # mailto form -> cheers@thegrapeagency.nl
public/images/<slug>/*.jpg     # case photos (optimized, max 1600px wide)
public/videos/*.mp4            # case videos (720p, no audio, web-optimized)
```

---

## How a case works (`src/data/cases.js`)

Each case is an object in the `cases` array. Shared/neutral fields: `slug`, `brand`,
`year` (unused — Milan wants no years shown), `images` (array of paths), `videos`
(array of paths) or legacy `video` (string), `verified` (false shows a "concept ·
figures to be confirmed" flag), `headline.value`, `results[].value`.

Translatable fields are `{ en, nl }` objects (arrays for services/approach):
`tag`, `where`, `client`, `services`, `oneliner`, `intro`, `challenge`, `approach`,
`result`, `headline.label`, `results[].label`.

- **Card cover** = `images[0]`. If a case has no `images`, the tile renders as a solid
  brand-colored tile with a faded brand watermark.
- **Case panel hero** = `videos[0]` (autoplay/muted/loop) if present, else `images[0]`.
- **Galleries**: `images.slice(1)` render as an image grid; `videos.slice(1)` render as a
  video grid (with controls) under the body. Used e.g. for Vacu Vin's full video campaign.
- Cases are shown **media-first** (cases with `images` sorted to the front) on both Home
  and Work — sort logic is inline in those pages.

### Adding / changing media (conventions)

Do NOT commit raw camera files. Always optimize first:

- **Images** -> `public/images/<slug>/N.jpg`, resized to max 1600px wide, JPEG q82.
  ```bash
  python3 -c "from PIL import Image; im=Image.open('in.jpg').convert('RGB'); w,h=im.size; nw=min(1600,w); im=im.resize((nw,int(h*nw/w))); im.save('public/images/<slug>/1.jpg','JPEG',quality=82,optimize=True)"
  ```
- **Videos** -> `public/videos/<name>.mp4`, 720p, no audio, faststart:
  ```bash
  ffmpeg -i in.mov -vf "scale=-2:720,fps=30" -c:v libx264 -preset veryfast -crf 30 -an -movflags +faststart public/videos/<name>.mp4
  ```
- Mouton Cadet images are intentionally graded (desaturated + green tint) because the
  source phone photos were weak. If you reshoot, drop the grade.

Then add the paths to the case's `images` / `videos` array.

---

## Writing style (important)

- Dutch: **direct, confident, lightly edgy but professional.** No em-dashes. Avoid AI
  clichés ("ontdek", "unieke ervaring", "in een wereld waar..."). Concrete over abstract.
- English is the same tone, clean and confident.
- Positioning (do not reintroduce the old "places where no one expects wine" payoff):
  > The Grape Agency builds campaigns, organizes events and realizes activations.
  > We're here to make awareness grow and deliver memories. All for the love of wine. Cheers!
- Never invent figures. Only use numbers Milan confirmed.

## Real facts

- Trade name of **MvdW BV**, Daltonlaan 200, 3584 BJ Utrecht. KvK 89631773.
- Email `cheers@thegrapeagency.nl`. IG `instagram.com/thegrapeagency`,
  LinkedIn `/company/the-grape-agency`. Sister brands: meisjesvandewijn.nl, nachtvandewijn.nl.

---

## Cases — current status (11)

All have real imagery and confirmed figures unless noted.

1. **Mirabeau** — Milkshake & Mysteryland (ID&T), self-built pergola terrace. 145.000 combined visitors. Photos ✓ (from Milkshake shoot). Bottle/glass count unknown (left out on purpose).
2. **Vacu Vin** — Swirling Carafe: influencer campaign + video campaign. 179.219 views, 44 sales. Photos ✓ + 6 videos on the page (hero + commercials/reels/influencer clips).
3. **19 Crimes** — secret speakeasy at Nacht van de Wijn. #1 bar of 20, 80/20 white→red flip. 5 photos + video ✓.
4. **Mouton Cadet** — Vakantiebeurs "Tasting on heights" Ferris wheel. 218 tastings, 32.000 visitors. Photos ✓ (graded).
5. **Rotari (premiere)** — The Devil Wears Prada 2, Pathé Tuschinski. 600 guests. 2 photos ✓.
6. **Rebels 0,0 & Abstinence** — The Best Social Awards (alcohol-free). 935 guests. Photos ✓ (Emiro Smolders).
7. **Casa Rojo** — Werkspoorfestival pop-up restaurant. 160 dinner guests, 27.000 social, 19.000 newsletter. Photos ✓ (cover = casa-rojo/0.jpg).
8. **Schlumberger** — Werkspoorfestival Bubble Bar. 25.000 visitors, 342 bottles. Real photos ✓ (Abe Jonker).
9. **Rotari (Italy)** — Kasteel de Haar + campaign photoshoot. 38.000 visitors, sold-out wine night. Photos ✓.
10. **Jean Leon** — taxi + La Scala waiters at Nacht van de Wijn entrance. 3 photos + video ✓.
11. **Castel Mimi** — Michelin lunch (Tommy Janssen / Maeve) + live link to Moldova + festival bar (2.500). 4 stills + video ✓.

## Open / nice-to-have

- Mirabeau: bottles/glasses poured unknown (Milan to confirm if wanted).
- More gallery photos available in Drive for several cases if you want richer galleries.
- A few empty 0-byte temp files (`orig*`) may exist under `public/images/**` from the
  build environment; they're gitignored and harmless, delete if you like.
- Consider real OG/social share image + favicon (currently default).

## Notes / gotchas

- The site was first built in a sandbox that couldn't reach Vercel's API; deploys go
  through GitHub push -> Vercel git integration. From a normal machine you can also use
  `npx vercel` directly.
- `npm run build` writes to `/dist` (gitignored).
