# Image Cleanup Guide

This document outlines the image cleanup requirements for the Ambay website.

## Priority Images to Clean

### 1. Hero Popcorn Image (`/public/images/hero-popcorn.png`)

**Current Issues:**

- Contains text overlay
- Yellow background (should be transparent)

**Required Changes:**

- Remove all text elements
- Make background transparent (not yellow)
- Keep the popcorn bucket and makhana product visible
- Maintain high quality for hero display

### 2. Makhana Product Images

**Files:**

- `/public/images/makhana-tangy-tomato.jpg`
- `/public/images/makhana-lemon-chilli.jpg`
- `/public/images/makhana-pink-salt.jpg`
- `/public/images/makhana-mint.jpg`
- `/public/images/makhana-peri-peri.jpg`
- `/public/images/makhana-cream-onion.jpg`

**Current Issues:**

- White backgrounds (should be transparent)
- Inconsistent sizing (tomato image is larger than others)

**Required Changes:**

- Remove white backgrounds, make transparent
- Ensure all images have consistent dimensions/aspect ratios
- Maintain product visibility and quality
- All should be same size/scale for grid display

### 3. More from Ambay Product Images

**Files:**

- `/public/images/rice-basmati.png`
- `/public/images/rice-basmati-xxxl.png`
- `/public/images/cookies-punjabi-atta.png`
- `/public/images/cookies-sujji-atta.png`
- `/public/images/flour-all-purpose.png`
- `/public/images/rusk-*.png` (if used)

**Required Changes:**

- Remove any text overlays
- Make backgrounds transparent
- Ensure consistent sizing for grid display
- Clean, product-focused images

## Brand Logo

### Current Logo (`/public/images/ambay-logo.png`)

**Status:** Logo exists but should match brand guidelines

**Brand Guidelines from Assets:**

- Logo should be "ambay" text in lowercase
- Stylized graphic element above text (flame/petal design)
- Should work on light backgrounds (current site uses light mint green)
- Can be red or white depending on background

**Recommended:**

- Use red logo version for light backgrounds
- Ensure transparent background
- Proper aspect ratio for header display

## Tools for Image Cleanup

### Recommended Tools:

1. **Photoshop/GIMP** - For removing backgrounds and text
2. **Remove.bg** - Automated background removal
3. **Canva Pro** - Background removal tool
4. **ImageMagick** (CLI) - Batch processing

### Quick Commands (ImageMagick):

```bash
# Remove white background (make transparent)
convert input.jpg -fuzz 10% -transparent white output.png

# Resize to consistent dimensions
convert input.jpg -resize 400x600 output.jpg

# Remove text (manual process required)
```

## Image Specifications

### Makhana Product Images

- **Aspect Ratio:** 3:4 (portrait)
- **Recommended Size:** 400x600px or 600x900px
- **Format:** PNG with transparency
- **Background:** Transparent

### Hero Image

- **Aspect Ratio:** 1:1 (square) or 4:3
- **Recommended Size:** 800x800px or 1200x900px
- **Format:** PNG with transparency
- **Background:** Transparent

### More from Ambay Images

- **Aspect Ratio:** 4:3 (landscape)
- **Recommended Size:** 600x450px
- **Format:** PNG with transparency
- **Background:** Transparent

## Notes

- All product images should focus on the product itself
- Remove any marketing text, labels, or overlays
- Maintain consistent lighting and quality across all images
- Test images on the actual site to ensure they look good
