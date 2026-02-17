# Brand Assets

Place the following assets in this directory:

## Required Assets

1. **Logo**
   - `logo.svg` or `logo.png` - AMA Foods logo (white/transparent background preferred)
   - Used in: Header component

2. **Makhana Product Images**
   - `makhana-hero.jpg` - Hero product image for homepage (recommended: 1200x900px)
   - `makhana-packaging.jpg` - Packaging image for products page (recommended: 1200x900px)

## Image Guidelines

- Format: JPG or PNG
- Optimization: Images will be automatically optimized by Next.js
- Aspect Ratio: 4:3 recommended for product images
- File Size: Keep under 500KB per image for optimal performance

## Usage

Images are referenced in:

- `/components/layout/Header.tsx` - Logo
- `/components/sections/MakhanaSection.tsx` - Hero image
- `/app/products/page.tsx` - Packaging image

Uncomment the Image components in these files once assets are added.
