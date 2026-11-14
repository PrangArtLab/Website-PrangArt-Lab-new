# PrangArt Lab — Company Profile

Premium creative studio website built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Highlights

- Dark, editorial aesthetic with deep charcoal (`#0F0F0F`) & warm terracotta accent (`#E65C2E`)
- Typography: **Instrument Serif** (display) + **Inter** (body) — via `next/font`
- Custom blob cursor with hover states
- Sticky navbar with mobile full-screen overlay animation
- Reveal-on-scroll animations for every section
- Bento grid services layout with one featured card
- Filterable portfolio grid with `AnimatePresence` layout transitions
- Auto-scrolling text marquee
- Staggered hero intro, oversized typography
- Fully responsive (360 → 1440px+), mobile-first
- Accessibility: semantic HTML, `aria-*`, `alt` text, focus states, reduced-motion support

## 📁 Project Structure

```
app/
├── layout.tsx        # Root layout, fonts, metadata, custom cursor
├── page.tsx          # Single-page composition
└── globals.css       # Tailwind layers, noise overlay, custom scrollbar

components/
├── ui/
│   ├── Reveal.tsx          # Reusable scroll-reveal wrapper
│   └── SectionHeading.tsx  # Consistent section header
├── CustomCursor.tsx
├── Navbar.tsx
├── Hero.tsx
├── Marquee.tsx
├── Services.tsx
├── FeaturedWork.tsx
├── About.tsx
├── Process.tsx
├── Testimonials.tsx
├── Journal.tsx
├── CTA.tsx
└── Footer.tsx

lib/
└── data.ts           # All content (services, projects, testimonials, articles)
```

## 🚀 Setup

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# → http://localhost:3000

# 3. Production build
npm run build && npm start
```

## 🎨 Customization

**All content** lives in **`lib/data.ts`** — edit services, projects, testimonials, and journal entries there without touching components.

**Colors** live in **`tailwind.config.ts`**:

```ts
colors: {
  charcoal: '#0F0F0F',
  offwhite: '#F5F1EA',
  cream: '#EFE7DA',
  terracotta: '#E65C2E',
}
```

**Fonts** are configured in **`app/layout.tsx`** using `next/font/google`. Swap `Instrument_Serif` for `Satoshi` / `Clash Display` via `next/font/local` if you prefer self-hosted.

**Portfolio images** currently use `picsum.photos` placeholders — replace with your own assets in `/public` and update `image` fields in `lib/data.ts`.

## 🖼️ OG Image

Add an `og-image.jpg` (1200×630) to `/public` for social sharing previews.

## ☁️ Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or push to GitHub and import to [vercel.com](https://vercel.com) — zero config needed.

## 🔗 Integrating the existing form system

The original form (`server.js`, `script.js`, `kuitansi.html`, `invoice.html`) is separate from this company profile. Recommended integration:

1. Move those files into `prangart-lab-form/` as a standalone Node service (already runs on `:5000`).
2. Create a new Next.js route `/start-project` with an iframe or a dedicated form that POSTs to `http://localhost:5000/api/pesan`.
3. Point the hero **"View Our Work"** or navbar **"Start a Project"** CTA to `/start-project`.

## 🧪 Performance Notes

- Custom cursor is skipped on touch devices (`pointer: coarse`)
- Animations respect `prefers-reduced-motion`
- Images use `loading="lazy"` and `next`-friendly `<img>` for portability
- Frameworks automatically code-split client components

## 📄 License

© PrangArt Lab. Content and branding are proprietary. Code may be adapted for internal use.
