# Portfolio Website - Consolidated Quick Reference Guide

This document contains only the essential instructions and actionable steps from all documentation files.

---

## Clean URLs Implementation

### Directory Structure
- Move `page.html` → `page/index.html`
- Pages: about, resume, projects, academics, contact

### Update Navigation Links
```html
<a href="/" class="navbar-link">About</a>
<a href="/resume/" class="navbar-link">Resume</a>
<a href="/projects/" class="navbar-link">Projects</a>
<a href="/academics/" class="navbar-link">Academics</a>
<a href="/contact/" class="navbar-link">Contact</a>
```

### Update Asset Paths
- Change all `href="./assets/"` → `href="/assets/"`
- Change all `src="./assets/"` → `src="/assets/"`
- Change all `href="style.css"` → `href="/assets/css/style.css"`

---

## SEO Setup Instructions

### Google Search Console
1. Go to https://search.google.com/search-console
2. Add property: `https://erfan-ramezani.ir`
3. Verify via HTML file or DNS
4. Submit sitemap: `https://erfan-ramezani.ir/sitemap.xml`

### Bing Webmaster Tools
1. Go to https://www.bing.com/webmasters
2. Add site: `https://erfan-ramezani.ir`
3. Verify via XML file
4. Submit sitemap: `https://erfan-ramezani.ir/sitemap.xml`

### Required Files
- **robots.txt** at root (already exists)
- **sitemap.xml** at root (already exists)
- Both accessible at:
  - https://erfan-ramezani.ir/robots.txt
  - https://erfan-ramezani.ir/sitemap.xml

---

## Image Optimization

### Before Uploading Images
```bash
# Install optimization tools
npm install -g sharp-cli imagemin-cli

# Optimize single image
sharp -i input.jpg -o output.jpg --quality 85 --progressive

# Bulk optimize
imagemin images/*.{jpg,png} --out-dir=optimized/
```

### Size Guidelines
- **Profile images:** Max 200KB, 800x800px
- **Project images:** Max 300KB, 1200x800px
- **Icons:** Use SVG when possible
- **Screenshots:** Max 500KB, compress to 80-85% quality

### Recommended Tools
- **TinyPNG:** https://tinypng.com/ (online, drag & drop)
- **Squoosh:** https://squoosh.app/ (Google's tool)
- **ImageOptim:** https://imageoptim.com/ (Mac app)

---

## Meta Tags Template

### Essential Meta Tags for Each Page
```html
<title>[Page] - Erfan Ramezani | AI Engineer & Robotics Developer</title>
<meta name="description" content="[Page description, 150-160 characters]">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://erfan-ramezani.ir/[page]/">

<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://erfan-ramezani.ir/[page]/">
<meta property="og:title" content="[Page] - Erfan Ramezani">
<meta property="og:description" content="[Page description]">
<meta property="og:image" content="https://erfan-ramezani.ir/assets/images/erfan-avatar.jpg">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[Page] - Erfan Ramezani">
<meta name="twitter:description" content="[Page description]">
<meta name="twitter:image" content="https://erfan-ramezani.ir/assets/images/erfan-avatar.jpg">
```

---

## Performance Optimization

### Enable Caching (in .htaccess or server config)
```apache
# Cache static assets for 1 year
<filesMatch "\\.(ico|pdf|jpg|jpeg|png|gif|svg|webp)$">
  Header set Cache-Control "max-age=31536000, public"
</filesMatch>

<filesMatch "\\.(css|js)$">
  Header set Cache-Control "max-age=31536000, public"
</filesMatch>

# Enable GZIP compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript
</IfModule>
```

### Minimize HTTP Requests
- Combine CSS files when possible
- Use CSS sprites for icons
- Lazy load images below the fold

---

## Git Workflow

### Common Commands
```bash
# Check status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push origin main

# Create new branch
git checkout -b feature-name

# Switch branches
git checkout main

# View commit history
git log --oneline -10
```

---

## Testing Checklist

### Before Deployment
- [ ] All navigation links work
- [ ] All images load correctly
- [ ] CSS and JS files load
- [ ] Meta tags are correct on all pages
- [ ] Sitemap is valid XML
- [ ] robots.txt is accessible
- [ ] Mobile responsive design works
- [ ] No console errors in browser

### SEO Validation
- [ ] Google Search Console verified
- [ ] Sitemap submitted to Google
- [ ] Sitemap submitted to Bing
- [ ] All pages have unique titles
- [ ] All pages have meta descriptions
- [ ] Canonical URLs are correct
- [ ] Open Graph tags present

### Performance Check
- [ ] Images are optimized
- [ ] Page load time < 3 seconds
- [ ] No broken links
- [ ] HTTPS enabled
- [ ] Mobile-friendly test passes

---

## Monitoring & Maintenance

### Weekly Tasks
- Check Google Search Console for errors
- Review search performance metrics
- Check for broken links
- Monitor page load times

### Monthly Tasks
- Update content if needed
- Review and optimize images
- Check for outdated information
- Analyze traffic patterns
- Update sitemap if pages added/removed

### Tools to Use
- **Google Search Console:** Search performance
- **Google Analytics:** Traffic analysis
- **PageSpeed Insights:** Performance
- **GTmetrix:** Detailed performance report
- **Screaming Frog:** Site crawling and link checking

---

## Content Optimization Tips

### Writing Effective Titles
- Keep under 60 characters
- Include primary keyword
- Make it compelling and clickable
- Format: `[Topic] - [Name] | [Specialty]`

### Writing Meta Descriptions
- Keep 150-160 characters
- Include call-to-action
- Summarize page content
- Include relevant keywords naturally

### Heading Structure
```html
<h1>Page Title</h1>           <!-- Only one per page -->
<h2>Main Section</h2>          <!-- Multiple allowed -->
<h3>Subsection</h3>            <!-- Under h2 -->
<h4>Minor heading</h4>         <!-- Under h3 -->
```

---

## Quick Fixes

### Fix Broken Asset Path
```bash
# Find relative paths
grep -r 'href="assets/' --include="*.html" .

# Should be:
href="/assets/..."  # Absolute path
```

### Fix Broken Navigation
```bash
# Find .html links
grep -r 'href=".*\.html"' --include="*.html" .

# Should be:
href="/page/"  # Clean URL
```

### Validate Sitemap
```bash
# Check sitemap syntax
xmllint --noout sitemap.xml

# Or visit:
# https://www.xml-sitemaps.com/validate-xml-sitemap.html
```

---

## Project File Structure

```
Erfan-ram.github.io/
├── index.html                 # Homepage (About)
├── about/index.html           # About page
├── resume/index.html          # Resume page
├── projects/index.html        # Projects listing
├── academics/index.html       # Academics page
├── contact/index.html         # Contact page
├── 404.html                   # Error page
├── robots.txt                 # Search engine directives
├── sitemap.xml                # Site structure for SEO
├── site.webmanifest           # PWA manifest
├── assets/
│   ├── css/
│   │   └── style.css          # Main stylesheet
│   ├── js/
│   │   └── script.js          # Main scripts
│   ├── images/                # All images
│   └── resume/                # Resume PDFs
└── projects/                  # Individual project pages
    ├── project1.html
    ├── project2.html
    └── ...
```

---

## Troubleshooting

### Issue: Pages return 404
- Check file is named `index.html` in correct directory
- Verify GitHub Pages settings
- Check .gitignore isn't excluding files

### Issue: CSS not loading
- Verify path starts with `/`
- Check file exists at `/assets/css/style.css`
- Clear browser cache

### Issue: Images not showing
- Use absolute paths: `/assets/images/...`
- Check file extensions match exactly
- Verify images are committed to git

### Issue: Sitemap not updating in search engines
- Resubmit in Google Search Console
- Wait 24-48 hours for indexing
- Check sitemap is accessible publicly

---

**Last Updated:** After clean URLs refactor and 404 fix
**Status:** All systems operational ✅
