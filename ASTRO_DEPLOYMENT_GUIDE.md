# Astro Migration - Deployment Guide

## Overview

This guide explains how to deploy your newly migrated Astro portfolio website to GitHub Pages.

## ✅ Migration Complete

Your portfolio has been successfully migrated from a single-page application to a multi-page Astro website with:

- ✅ Separate pages for About, Resume, Projects, Academics, and Contact
- ✅ Improved SEO with individual page URLs
- ✅ Better performance with static site generation
- ✅ Clean navigation with proper anchor links
- ✅ All project detail pages updated with correct back links

## 🚀 Deployment Options

### Option 1: Automatic Deployment with GitHub Actions (Recommended)

A GitHub Actions workflow has been created at `.github/workflows/deploy.yml` that will automatically build and deploy your site whenever you push to the master branch.

#### Steps:

1. **Enable GitHub Pages with GitHub Actions**:
   - Go to your repository settings on GitHub
   - Navigate to "Pages" in the left sidebar
   - Under "Build and deployment", select "Source" as "GitHub Actions"
   - Click "Save"

2. **Push your changes**:
   ```bash
   git push origin master
   ```

3. **Monitor the deployment**:
   - Go to the "Actions" tab in your repository
   - You should see the "Deploy Astro Site to GitHub Pages" workflow running
   - Wait for it to complete (usually takes 1-2 minutes)

4. **Visit your site**:
   - Your site will be live at `https://erfan-ramezani.ir/` or `https://Erfan-ram.github.io/`

### Option 2: Manual Build and Deploy

If you prefer to build locally and deploy manually:

1. **Build the site**:
   ```bash
   npm run build
   ```

2. **Preview the build locally**:
   ```bash
   npm run preview
   ```

3. **Deploy the `dist/` folder**:
   - The `dist/` folder contains all your static files
   - You can deploy this folder to any static hosting service

## 📁 Project Structure

```
Erfan-ram.github.io/
├── src/
│   ├── layouts/
│   │   └── MainLayout.astro       # Shared layout
│   └── pages/
│       ├── index.astro            # Homepage (About)
│       ├── resume.astro
│       ├── projects.astro
│       ├── academics.astro
│       └── contact.astro
├── public/
│   ├── assets/                    # Static assets
│   ├── projects/                  # Project detail pages
│   ├── CNAME
│   ├── robots.txt
│   └── sitemap.xml
├── dist/                          # Build output (auto-generated)
├── astro.config.mjs
└── package.json
```

## 🔧 Available Commands

All commands are run from the root of the project:

| Command           | Action                                           |
|:------------------|:-------------------------------------------------|
| `npm install`     | Install dependencies                             |
| `npm run dev`     | Start local dev server at `localhost:4321`       |
| `npm run build`   | Build production site to `./dist/`               |
| `npm run preview` | Preview your build locally before deploying      |

## 🌐 URL Structure

Your new multi-page site has the following URLs:

- **Homepage (About)**: `/` or `/index.html`
- **Resume**: `/resume.html`
- **Projects**: `/projects.html`
- **Academics**: `/academics.html`
- **Contact**: `/contact.html`
- **Project Details**: `/projects/[project-name].html`

## ✨ SEO Improvements

Each page now has:

- Unique title tags optimized for search engines
- Dedicated meta descriptions
- Proper canonical URLs
- Individual Open Graph metadata
- Clean, indexable URLs

## 📝 Making Changes

### To Edit a Page

1. Edit the corresponding `.astro` file in `src/pages/`
2. Run `npm run dev` to see changes live
3. Build and deploy when ready

### To Add a New Page

1. Create a new `.astro` file in `src/pages/`
2. Import and use `MainLayout` 
3. Add navigation link in `MainLayout.astro`
4. Build and deploy

### To Update Styles

- Edit `/public/assets/css/style.css`
- Changes will be reflected after rebuild

### To Update Scripts

- Edit `/public/assets/js/script.js` or `/public/assets/js/lightbox.js`
- Remember scripts are loaded with `is:inline` directive

## 🐛 Troubleshooting

### Build Fails

- Make sure all dependencies are installed: `npm install`
- Check Node.js version: `node --version` (should be 18 or higher)
- Clear the cache: `rm -rf node_modules .astro dist && npm install`

### Navigation Not Working

- Ensure all links use `.html` extensions
- Check that files are built to `dist/` correctly
- Verify paths are absolute (start with `/`)

### Assets Not Loading

- Check that assets are in `public/` directory
- Verify paths use `/assets/` not `./assets/`
- Rebuild the site: `npm run build`

## 📊 Performance Tips

- Astro builds static HTML by default (already optimized)
- Images are lazy-loaded in the original markup
- Scripts are inlined to avoid additional requests
- CSS is bundled and optimized

## 🔐 Security

- Keep dependencies updated: `npm update`
- Review the sitemap.xml for exposed URLs
- Check robots.txt for proper crawling rules

## 📞 Support

If you encounter issues:

1. Check the Astro documentation: https://docs.astro.build
2. Review the build logs in GitHub Actions
3. Test locally with `npm run build && npm run preview`

## 🎉 Success!

Your portfolio is now a modern, SEO-friendly, multi-page website built with Astro!

Enjoy better search engine rankings and improved user experience! 🚀
