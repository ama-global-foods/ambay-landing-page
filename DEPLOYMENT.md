# Deployment Guide

## Vercel Deployment

### Prerequisites

1. GitHub/GitLab/Bitbucket account
2. Vercel account (free tier works)
3. Repository pushed to your Git provider

### Steps

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your repository: `ambay-landing-page`

2. **Configure Project**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

3. **Environment Variables** (if needed)
   - Add any required environment variables in Vercel dashboard
   - Currently none required for basic deployment

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy
   - You'll get a production URL (e.g., `ambay-landing-page.vercel.app`)

5. **Custom Domain** (optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

### Build Verification

Before deploying, test locally:

```bash
npm run build
npm start
```

Visit `http://localhost:3000` to verify the production build.

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Check mobile responsiveness
- [ ] Test form submission (contact page)
- [ ] Verify images load (after adding assets)
- [ ] Check SEO metadata in page source
- [ ] Test navigation links
- [ ] Verify brand colors match master file

## Continuous Deployment

Vercel automatically deploys on every push to:

- `main` branch → Production
- Other branches → Preview deployments

No manual deployment needed after initial setup.
