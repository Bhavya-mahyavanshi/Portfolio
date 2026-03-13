# Bhavya Mahyavanshi — Portfolio

A **production-ready Next.js 14** portfolio with 6 pages, custom cursor, animated transitions, and three deeply personal themes.

## Pages

| Route | Theme | Description |
|---|---|---|
| `/` | 🎨 Painting | Hero + featured projects |
| `/about` | 📖 Reading | Story, education, experience |
| `/projects` | 🗺 Travelling | All projects with filter |
| `/skills` | 📖 Reading | Skill volumes + code block |
| `/hobbies` | ✦ Personal | Hobbies → code connections |
| `/contact` | 🎨 Painting | Working contact form + cards |

## Features
- **Custom cursor** — morphs shape & colour per page section
- **Cursor trail** — colour particles follow movement
- **Scroll reveals** — staggered animations as you scroll
- **Animated brushstrokes** — SVG paint strokes on hero
- **Interactive skills bars** — animate in on scroll
- **Hobby selector** — tabbed panel with personal stories
- **Contact form** — full validation, loading state, success state
- **Project filter** — filter by technology theme
- **Mobile nav** — full-screen mobile menu
- **404 page** — custom "Lost on the map" page
- **Page transitions** — fade between routes

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Production Build

```bash
npm run build
npm start
```

## Deploy (Vercel — recommended)

1. Push to GitHub
2. Import repo at vercel.com
3. Deploy in ~2 minutes — zero config needed

## Font Stack
- **Playfair Display** — Display headings (elegant serif)
- **Crimson Pro** — Body text (literary italic)
- **DM Sans** — UI labels & navigation
- **JetBrains Mono** — Code blocks & tags

## Customise Content

All personal data lives in one file:
```
src/lib/data.ts
```

Update `PROFILE`, `PROJECTS`, `SKILLS`, `HOBBIES`, `EDUCATION`, `EXPERIENCE` to personalise.
