# KineticSip

KineticSip is a cinematic mango drink product landing page built with a scroll-driven product story. The experience uses a polished SVG product visual, layered ingredients, glow effects, glassmorphism panels, and GSAP ScrollTrigger animation to create a premium beverage advertising feel.

## Features

- Desktop pinned product story with GSAP ScrollTrigger and scrubbed scene transitions
- Data-driven flavor lineup reveal for Mango Rush, Cocoa Noir, and Berry Pulse
- Lightweight mobile scroll motion path for smaller screens
- Reduced-motion fallback with a clean static product composition
- Premium dark matte visual system with mango orange and crimson accents
- Component-based product, ingredient, callout, button, and CTA sections
- Placeholder SVG product and ingredient assets that can be replaced later
- Responsive layout for desktop, tablet, and mobile

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- GSAP ScrollTrigger
- Framer Motion for small text reveal details

## Run Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Build and Deploy

Create a production build:

```bash
npm run build
```

Run the production server locally:

```bash
npm run start
```

Lint the project:

```bash
npm run lint
```

For Vercel, import the GitHub repository and keep the default Next.js settings:

- Build command: `npm run build`
- Output directory: `.next`
- Install command: `npm install`

## Animation Notes

The desktop product story is handled inside `components/ScrollProductStory.tsx` using GSAP ScrollTrigger in a client component. The pinned section is desktop/tablet focused, while mobile uses a lighter scroll-based motion path without heavy pinning.

Users with `prefers-reduced-motion` enabled receive a static product composition instead of the scrubbed animation. No video frames or image sequences are used.

## Screenshot and Demo Prep

Screenshot and demo planning notes live in [docs/screenshots.md](docs/screenshots.md). Add compressed portfolio captures there or link to hosted demo media from that file.

## Case Study

**Goal:** Build a premium interactive beverage landing page that feels cinematic and product-focused rather than like a generic template.

**Challenge:** Create a scroll-driven product animation without video frames, image sequences, or heavy particle systems, while keeping the experience stable across desktop and mobile.

**Solution:** Use GSAP ScrollTrigger for the desktop pinned product story, component-based SVG placeholder assets for the bottle and ingredients, and a simplified mobile scroll path with reduced-motion support.

**Result:** A deploy-ready product animation website with a strong portfolio presentation angle: premium art direction, responsive interaction design, and clean modern frontend architecture.

## Quality Checklist

- [x] Desktop scroll story works
- [x] Mobile layout works
- [x] Reduced-motion fallback works
- [x] `npm run build` passes
- [x] Ready for Vercel deploy
