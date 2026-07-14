# Invess Agric Manufacturing Site Documentation

## Overview
This project is a Vite + React site for Invess Agric Manufacturing Limited.
The homepage is assembled from reusable components under `src/components/`, and pages live in `src/pages/`.

## Typography and Color
- Global font settings are defined in `src/index.css`.
- The hero section uses a photo background with a dark overlay.
- All other page sections use neutral surfaces and consistent text styling.
- Use the `text-slate-900`, `text-slate-600`, and `text-green-700` Tailwind classes for consistent color.

## Component structure
- `src/pages/Home.jsx` — homepage container that renders all section components.
- `src/components/Hero.jsx` — landing hero section with background image.
- `src/components/StatsSection.jsx` — production statistics block.
- `src/components/FacilitySection.jsx` — plant overview and feature cards.
- `src/components/EquipmentSection.jsx` — equipment details.
- `src/components/GallerySection.jsx` — plant gallery placeholders.
- `src/components/QualitySection.jsx` — quality process flow.
- `src/components/FooterSection.jsx` — footer links and company brand.
- `src/components/NavBar.jsx` — floating responsive navbar.

## Editing the homepage
- Change the hero title and copy in `src/components/Hero.jsx`.
- Update the stats or add new values in `src/components/StatsSection.jsx`.
- Change the facility content in `src/components/FacilitySection.jsx`.
- Replace the gallery placeholders in `src/components/GallerySection.jsx` with image cards.
- Edit the quality flow steps in `src/components/QualitySection.jsx`.

## Styling notes
- Tailwind utilities are used throughout the components.
- Global overrides are defined in `src/index.css`.
- If you need a new section style, use Tailwind classes and prefer the existing color palette.
- The landing hero remains image-based; the rest of the page is intentionally neutral.

## Running the project
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. The site should be available at the URL shown in the terminal.

## Tips
- Keep headings responsive with `text-3xl sm:text-4xl`.
- Keep body text readable with `text-base sm:text-lg`.
- Use `max-w-6xl mx-auto px-6` for centered section containers.
