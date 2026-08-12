# ML / Data Science Portfolio — Architecture

React + Vite + Tailwind + React Router. This repo is scaffolded as
**architecture only** — no personal content, project copy, or final
UI text has been filled in. See inline `TODO` comments and the empty
arrays in `src/data/*.js`.

## Stack

- React 18 + Vite
- JavaScript (no TypeScript)
- Tailwind CSS (design tokens via CSS variables in `src/styles/index.css`)
- React Router (single route today, wired for future pages)
- React Icons (`react-icons/fi`)
- Framer Motion is installed but not wired in yet — add it inside a
  component (e.g. wrap a section in `motion.section`) only where it
  earns its place; the brief calls for minimal, non-flashy motion.

## Folder structure

```
src/
  assets/            static images/icons
  components/
    Navbar/          Navbar.jsx, NavLinkItem.jsx, MobileMenu.jsx
    Hero/
    About/
    Services/        Services.jsx, ServiceCard.jsx
    ProjectCard/      reusable card, consumed by FeaturedProjects
    FeaturedProjects/
    Experience/       Experience.jsx, TimelineItem.jsx
    Skills/
    Resume/
    Contact/          Contact.jsx, ContactLink.jsx
    Footer/
    common/            Button, Badge, TagList, Container, SectionHeading
  data/                projects.js, services.js, skills.js, experience.js,
                       socials.js, nav.js — the only files you edit to
                       add content; every component maps over these.
  hooks/               useActiveSection, useScrollPosition
  layouts/             MainLayout.jsx (Navbar + <Outlet/> + Footer)
  pages/               LandingPage.jsx, NotFoundPage.jsx
  styles/              index.css — design tokens (CSS vars) + Tailwind entry
  utils/               scrollTo.js, classNames.js
  context/             empty on purpose — see context/README.md
```

## Data-driven content

Every section that repeats (Projects, Services, Skills, Experience,
Contact/Footer links, Nav) reads from a plain JS array in `src/data/`.
To add content, edit the relevant data file — never the component.
Each file has a JSDoc block documenting the exact object shape its
consuming component expects.

## Routing

`react-router-dom` is wired even though there is only one route
(`/`) today. `MainLayout` renders shared chrome (`Navbar`/`Footer`)
around a `<Outlet />`, so adding `/projects/:slug`, `/resume`, or a
blog later is a matter of adding a `<Route>` in `App.jsx` and a page
in `src/pages/` — no restructuring.

## Theming

All colors/fonts are CSS variables defined once in
`src/styles/index.css` and exposed to Tailwind via
`tailwind.config.js` (`bg-background`, `text-primary`, `text-accent`,
etc.). Re-theme the whole site by changing the variables in one file;
no component touches a raw hex value.

## Getting started

```bash
npm install
npm run dev
```

## Deployment (Vercel)

1. Push this repo to GitHub.
2. Import it in Vercel — framework preset "Vite" is auto-detected.
3. `vercel.json` includes the SPA rewrite rule so client-side routes
   (once you add more than one) do not 404 on refresh.
4. Every push to the connected branch auto-deploys.

## What is intentionally left undone

- No copy/content anywhere (see `TODO` comments).
- No real projects/services/skills/experience data — arrays are empty.
- Resume download button has no file wired up yet.
- Contact section has no form (per brief — links only for now).
