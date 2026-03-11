# Elvate Infotech - E-Commerce Platform

A premium, multi-page React application tailored for high-end computer hardware (Processors, Laptops, Storage) and local IT services.

## Built With
- **React 18** (Vite Build Tool)
- **Tailwind CSS v4** (Utility-first styling & Glassmorphism design)
- **React Router v7** (Client-side routing)

## Features Included (Recent Updates)
1. **Multi-Page Architecture**: fully modular pages including Home, Processors, Storage, Laptops, and Support.
2. **Indian Market Localization**: 
   - All pricing standardized to INR (₹)
   - Integrated local address: New Delhi-110045
   - Contact updates: +91 9631028482
3. **Core Services Highlight**: Added sections for regional services (CCTV Installation, Printer Service, Cartridge Refill, PC Maintenance).
4. **Vite + Tailwind v4 Migration**: Replaced legacy `Index.html` with a modern build pipeline. Removed obsolete `tailwind.config.js` in favor of `@theme` CSS directives.
5. **Seamless Navigation**: Fully linked `Navbar`, `MobileNav`, and UI Buttons for effortless browsing.

## Setup & Local Development

### Prerequisites
- Node.js installed

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Deployment
This project includes a `public/_redirects` file configured for Single Page Application (SPA) routing on Netlify, ensuring direct links (like `/support`) do not throw 404 errors on refresh when hosted.
