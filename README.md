# Ambay Landing Page

Premium marketing site for Ambay, the in-house brand of AMA Global Foods (Surrey, Canada).

## Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to view the site.

## Project Structure

```
/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Homepage (/)
│   ├── products/          # Products page (/products)
│   ├── contact/           # Contact page (/contact)
│   ├── layout.tsx         # Root layout with Header/Footer
│   └── globals.css        # Global styles & animations
│
├── components/
│   ├── layout/            # Header & Footer
│   ├── sections/          # Page sections (Hero, Makhana, etc.)
│   └── ui/                # Reusable UI components (Button, Card, Input, etc.)
│
├── content/               # Data files
│   └── products.ts        # Product categories, makhana flavors, trust statements
│
└── assets/                # Brand assets (images, logos)
    └── README.md          # Asset requirements guide
```

## Editing Content

### Product Data

Edit `/content/products.ts` to update:

- Product categories and items
- Makhana flavors
- Trust statements

### Page Content

- **Homepage**: `/app/page.tsx` - Main landing page structure
- **Products**: `/app/products/page.tsx` - Products overview
- **Contact**: `/app/contact/page.tsx` - Wholesale inquiry form

### Brand Colors

Edit `/tailwind.config.ts` to adjust:

- `deep-teal` - Primary brand color
- `warm-cream` - Background color
- `warm-beige` - Accent/contrast color

### Typography

Fonts are configured in:

- `/app/globals.css` - Font variable definitions
- `/tailwind.config.ts` - Font family mappings

## Brand Assets Needed

Place the following in `/assets`:

1. **Logo**
   - `logo.svg` or `logo.png` - AMA Foods logo
   - Used in: Header component (`/components/layout/Header.tsx`)
   - Uncomment Image component after adding asset

2. **Makhana Images**
   - `makhana-hero.jpg` - Hero product image (1200x900px recommended)
   - `makhana-packaging.jpg` - Packaging image (1200x900px recommended)
   - Used in: MakhanaSection and Products page
   - Uncomment Image components after adding assets

See `/assets/README.md` for detailed asset guidelines.

## Deployment

See `DEPLOYMENT.md` for complete Vercel deployment instructions.

Quick steps:

1. Push code to GitHub/GitLab/Bitbucket
2. Connect repository to Vercel
3. Deploy automatically on push to `main` branch

## Brand System

This site follows the Ambay brand system:

- **Primary Color**: Deep Teal (#1a4d5c)
- **Background**: Warm Cream (#fdf7f0)
- **Typography**: Marble font for headings, clean sans-serif for body
- **Tone**: Confident, global, structured, editorial, calm, high-end

## Development Notes

- All animations respect `prefers-reduced-motion`
- Images are automatically optimized by Next.js
- Form submission is currently simulated (connect to API/email service in production)
- Mobile-first responsive design
- SEO metadata included on all pages
