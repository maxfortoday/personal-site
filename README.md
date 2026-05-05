# [maxfortoday.github.io/personal-site](https://maxfortoday.github.io/personal-site/)

Personal site for Maxim Kozlov — Engineering Leader. Built with React 19, Vite 8, and Tailwind CSS v4. Deployed to GitHub Pages.

## Stack

| Layer | Technology |
|-------|-----------|
| UI | React 19 + TypeScript |
| Build | Vite 8 (esbuild) |
| Styling | Tailwind CSS v4 (CSS-first config) |
| Routing | React Router v7 |
| Markdown | react-markdown + rehype-raw |
| Deploy | gh-pages → GitHub Pages |

**Performance:** 15 code-split chunks via `React.lazy()`, 184 KB initial JS load.

## Project structure

```
app/
├── components/
│   ├── Projects/       # Cell (project card with case study expander)
│   ├── Resume/         # Experience, Education, Skills, Courses, References
│   │   └── Skills/     # SkillBar, CategoryButton
│   ├── Stats/          # Personal, Site (GitHub), Architecture
│   └── Template/       # Header, Nav, Footer, Hamburger, Analytics, ScrollToTop
├── context/
│   └── DarkMode.tsx    # Class-based dark mode, localStorage + system preference
├── data/
│   ├── about.md        # About page content (Markdown)
│   ├── ai.ts           # AI tools list
│   ├── contact.ts      # Social links
│   ├── projects.ts     # Project case studies
│   ├── routes.ts       # Navigation routes
│   └── resume/
│       ├── courses.ts
│       ├── degrees.ts
│       ├── positions.ts
│       └── skills.ts
├── layouts/
│   └── Main.tsx        # Root layout: sidebar nav + header + footer
├── static/
│   └── css/main.css    # Tailwind v4 entry, dark mode variant, print CSS
├── types.ts
├── views/              # One file per route (lazy-loaded)
└── entry.tsx           # App entry, React.lazy() route config
public/
├── images/
│   ├── projects/       # SVG cover images for each project
│   └── favicon/
├── 404.html            # GitHub Pages SPA routing redirect
└── CNAME
```

## Local development

```bash
npm install
npm run dev
# → http://localhost:5173/personal-site/
```

## Customization

1. **Personal info** — edit `app/data/about.md`, `app/data/contact.ts`, and `app/components/Template/Nav.tsx`
2. **Experience & skills** — edit files under `app/data/resume/`
3. **Projects** — edit `app/data/projects.ts`. Each project supports `problem` and `impact` fields that render as an expandable case study
4. **AI stack** — edit `app/data/ai.ts`
5. **Profile image** — replace `public/images/me_icon.jpg`
6. **Site metadata** — update `index.html` (OG tags, description) and `package.json` (`homepage`)
7. **Routes** — add a new view in `app/views/`, register it in `app/entry.tsx` and `app/data/routes.ts`

## Deploy

```bash
npm run deploy
```

Builds the site and pushes `dist/` to the `gh-pages` branch. GitHub Pages serves it from there. First-time setup: go to repo Settings → Pages → Source → `gh-pages` branch.

For subsequent deploys, commit your changes then run `npm run deploy`.
