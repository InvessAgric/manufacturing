# Invess Agric Website Documentation

This document is a practical guide for new developers and future maintainers. It explains how the site is structured, where the main content lives, how the routes work, and how to update images, products, and other content safely.

## 1. Project overview

This project is a React + Vite marketing website for Invess Agric Manufacturing Limited. It is used to present the company, its products, its facility, team information, and a contact/sales inquiry experience.

### Main purpose
- Showcase the company and manufacturing capabilities.
- Display product and fertilizer catalog information.
- Provide a contact and sales enquiry experience.
- Support future content updates by non-technical editors.

### Main technologies
- React for UI rendering.
- React Router for page navigation.
- Jotai for shared product and pagination state.
- Vite as the build tool and dev server.
- Tailwind-style utility classes in JSX for layout and styling.

---

## 2. Project structure

### Root files
- [package.json](package.json): project scripts and dependencies.
- [vite.config.js](vite.config.js): Vite configuration.
- [index.html](index.html): HTML entry point.
- [README.md](README.md): project summary.
- [DOCS.md](DOCS.md): this manual documentation.

### Source folders
- [src/main.jsx](src/main.jsx): mounts the app and provides the router context.
- [src/App.jsx](src/App.jsx): main app shell, route registration, and floating enquiry action.
- [src/components](src/components): reusable landing-page sections and navigation UI.
- [src/pages](src/pages): page-level components for Home, About, Contact, Product, ProductDetail, Team, and NotFound.
- [src/data](src/data): central data files such as product information.
- [src/store](src/store): shared state atoms.
- [src/assets](src/assets): grouped images and icons.

---

## 3. How the app works

### Entry point
The app starts in [src/main.jsx](src/main.jsx), which mounts the root component inside the router provider.

### App shell
The main layout is managed in [src/App.jsx](src/App.jsx). It contains:
- Route definitions for all pages.
- A floating enquiry panel and WhatsApp action buttons.
- A hash-scrolling helper so section links on the home page scroll smoothly.

### Page routing
The site uses React Router with these routes:
- / → Home page
- /about → About page
- /contact → Contact/Sales page
- /product → Product catalog page
- /product/:slug → Product detail page
- /team → Team page
- * → NotFound fallback

---

## 4. Main pages

### Home page
File: [src/pages/Home.jsx](src/pages/Home.jsx)

This page composes the landing experience from reusable sections:
- Hero
- Stats
- Facility
- Equipment
- Product highlights
- Gallery
- Quality

### About page
File: [src/pages/About.jsx](src/pages/About.jsx)

This page tells the company story and includes:
- The founder/company overview.
- Mission and vision sections.
- Product and impact messaging.
- Gallery images.

### Contact page
File: [src/pages/Contact.jsx](src/pages/Contact.jsx)

This page is the sales and enquiries experience. It includes:
- An enquiry form.
- Purpose selection: general sales, product enquiry, or career enquiry.
- Name, email, telephone, product, and message fields.
- A location map embed.
- A WhatsApp link for direct contact.

### Product page
File: [src/pages/Product.jsx](src/pages/Product.jsx)

This page shows a paginated product catalog. It includes:
- A banner header.
- A paginated list of product cards.
- Previous/next controls and set indicators.
- Clickable cards linking to product detail pages.

### Product detail page
File: [src/pages/ProductDetail.jsx](src/pages/ProductDetail.jsx)

This page renders the full details for a single product. It includes:
- Product hero image and summary.
- Benefits, composition, packaging, and use-case sections.
- A plant-type image carousel.
- Related-products carousel.

### Team page
File: [src/pages/Team.jsx](src/pages/Team.jsx)

This page highlights the founder and the broader team groups such as Management, Finance, Warehouse, and Sales.

### NotFound page
File: [src/pages/NotFound.jsx](src/pages/NotFound.jsx)

This is the fallback route shown when a URL does not match an existing page.

---

## 5. Reusable components

### Navbar
File: [src/components/NavBar.jsx](src/components/NavBar.jsx)

Handles the top navigation bar and mobile menu. This is the global navigation used across the site.

### Hero section
File: [src/components/Hero.jsx](src/components/Hero.jsx)

The first screen of the home page. It includes the hero image, headline, and primary CTA buttons.

### Stats section
File: [src/components/StatsSection.jsx](src/components/StatsSection.jsx)

Displays the key business metrics and company highlights.

### Facility section
File: [src/components/FacilitySection.jsx](src/components/FacilitySection.jsx)

Explains the plant and manufacturing environment.

### Equipment section
File: [src/components/EquipmentSection.jsx](src/components/EquipmentSection.jsx)

Shows the main production equipment using image cards and captions.

### Product section
File: [src/components/ProductSection.jsx](src/components/ProductSection.jsx)

Displays some featured products on the home page and links to the full catalog.

### Gallery section
File: [src/components/GallerySection.jsx](src/components/GallerySection.jsx)

Shows a small visual gallery of plant and facility images.

### Quality section
File: [src/components/QualitySection.jsx](src/components/QualitySection.jsx)

Explains the company’s quality and production approach.

### Footer section
File: [src/components/FooterSection.jsx](src/components/FooterSection.jsx)

Displays company details, navigation links, map link, and social links.

---

## 6. Shared data and state

### Product data
File: [src/data/products.js](src/data/products.js)

This is the main content source for the product catalog and product details. If you need to add or change a product, edit this file first.

### Jotai state
File: [src/store/productsStore.js](src/store/productsStore.js)

Stores shared state for:
- The full product list.
- Pagination state for the product catalog.

This helps avoid repeating product state in many components.

---

## 7. How to update content

### Updating text content
Most visible copy is stored directly in the JSX files under [src/pages](src/pages) and [src/components](src/components). A future maintainer can edit those files in place.

### Updating product information
Add or edit products in [src/data/products.js](src/data/products.js). Each object contains values such as:
- slug
- title
- summary
- description
- bullets
- image
- alt

### Updating images
The images are now grouped into clear folders under [src/assets](src/assets):
- [src/assets/images/brand](src/assets/images/brand)
- [src/assets/images/hero](src/assets/images/hero)
- [src/assets/images/facility](src/assets/images/facility)
- [src/assets/images/products](src/assets/images/products)
- [src/assets/images/gallery](src/assets/images/gallery)
- [src/assets/icons/social](src/assets/icons/social)

If the design needs a new image, place it in the appropriate folder and then update the corresponding reference in [src/assets/assetRegistry.js](src/assets/assetRegistry.js).

### Updating the contact form
The contact experience lives in [src/pages/Contact.jsx](src/pages/Contact.jsx). If the email service is needed in production, update the EmailJS values in that file.

---

## 8. How to add a new page

1. Create a new component file inside [src/pages](src/pages).
2. Import it into [src/App.jsx](src/App.jsx).
3. Add a new route in the Routes block.
4. Link to it from the navbar or footer if needed.

---

## 9. Build and development commands

Run the app locally:
- npm install
- npm run dev

Build for production:
- npm run build

Use this to verify that the app still compiles after content updates.

---

## 10. Notes for future maintainers

- Keep the content simple and structured.
- Prefer editing data files for products rather than hard-coding repeated content in each component.
- Use the asset registry for images so changes are easier to manage.
- If you add a new route, keep the page component small and focused.
- Rebuild after any major changes to ensure the project still compiles.

---

## 11. Quick reference

- Main entry: [src/main.jsx](src/main.jsx)
- App shell and routes: [src/App.jsx](src/App.jsx)
- Pages: [src/pages](src/pages)
- Reusable sections: [src/components](src/components)
- Product data: [src/data/products.js](src/data/products.js)
- Shared state: [src/store/productsStore.js](src/store/productsStore.js)
- Asset registry: [src/assets/assetRegistry.js](src/assets/assetRegistry.js)
