# Master Fix Guide for Portfolio Website

## Task 1: Universal `<head>` Section Template

### Complete `<head>` Section (Copy-Paste Ready)

Use this template for **all pages in subdirectories** (about/, resume/, projects/, academics/, contact/). Just update the page-specific values marked with `[PAGE_NAME]`.

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Primary Meta Tags -->
  <title>[PAGE_NAME] - Erfan Ramezani | AI Engineer & Robotics Developer</title>
  <meta name="title" content="[PAGE_NAME] - Erfan Ramezani | AI Engineer & Robotics Developer">
  <meta name="description" content="[PAGE_DESCRIPTION]">
  <meta name="author" content="Erfan Ramezani">
  <meta name="robots" content="index, follow">
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://erfan-ramezani.ir/[page-slug]/">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://erfan-ramezani.ir/[page-slug]/">
  <meta property="og:title" content="[PAGE_NAME] - Erfan Ramezani">
  <meta property="og:description" content="[PAGE_DESCRIPTION]">
  <meta property="og:image" content="https://erfan-ramezani.ir/assets/images/erfan-avatar.jpg">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="[PAGE_NAME] - Erfan Ramezani">
  <meta name="twitter:description" content="[PAGE_DESCRIPTION]">
  <meta name="twitter:image" content="https://erfan-ramezani.ir/assets/images/erfan-avatar.jpg">
  
  <!-- Additional Meta Tags -->
  <meta name="theme-color" content="#1e1e1f">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

  <!-- Favicon -->
  <link rel="icon" href="/assets/images/erfan-logo.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/assets/images/erfan-logo.svg">
  <link rel="manifest" href="/site.webmanifest">

  <!-- Stylesheets - ALWAYS USE ABSOLUTE PATHS -->
  <link rel="stylesheet" href="/assets/css/style.css">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
</head>
```

### Key Asset Path Rules

**ALWAYS use root-relative paths (starting with `/`) for:**

1. **Stylesheets:**
   ```html
   ✅ <link rel="stylesheet" href="/assets/css/style.css">
   ❌ <link rel="stylesheet" href="assets/css/style.css">
   ❌ <link rel="stylesheet" href="../assets/css/style.css">
   ❌ <link rel="stylesheet" href="./assets/css/style.css">
   ```

2. **Images:**
   ```html
   ✅ <img src="/assets/images/erfan-avatar.jpg" alt="Erfan Ramezani">
   ❌ <img src="assets/images/erfan-avatar.jpg" alt="Erfan Ramezani">
   ❌ <img src="../assets/images/erfan-avatar.jpg" alt="Erfan Ramezani">
   ```

3. **JavaScript:**
   ```html
   ✅ <script src="/assets/js/script.js"></script>
   ❌ <script src="assets/js/script.js"></script>
   ❌ <script src="../assets/js/script.js"></script>
   ```

4. **Favicons and Icons:**
   ```html
   ✅ <link rel="icon" href="/assets/images/erfan-logo.svg">
   ❌ <link rel="icon" href="assets/images/erfan-logo.svg">
   ```

5. **Manifest:**
   ```html
   ✅ <link rel="manifest" href="/site.webmanifest">
   ❌ <link rel="manifest" href="site.webmanifest">
   ```

### Example Corrected Image Tags

```html
<!-- Sidebar Avatar -->
<img src="/assets/images/erfan-avatar.jpg" alt="Erfan Ramezani" width="80">

<!-- Brand Logo -->
<img src="/assets/images/erfan-logo.png" alt="Erfan Ramezani Logo" style="max-width: 90px;">

<!-- Service Icons -->
<img src="/assets/images/icon-ai.svg" alt="AI icon" width="40">
<img src="/assets/images/icon-robot.svg" alt="robotics icon" width="40">

<!-- Organization Logos -->
<img src="/assets/images/mrl-lab.png" alt="MRL logo">
<img src="/assets/images/stanford.png" alt="Stanford logo">
```

### Example Corrected Script Tags

```html
<!-- Custom JavaScript - ALWAYS at end of body -->
<script src="/assets/js/script.js" defer></script>
<script src="/assets/js/lightbox.js" defer></script>

<!-- Ion Icons -->
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
```

## Common Issues and Fixes

### Issue 1: 404 Page Stylesheet Not Loading
**Problem:** 404.html referenced `/style.css` which doesn't exist
**Fix:** Changed to `/assets/css/style.css` ✅

### Issue 2: Images Not Loading in Subdirectories
**Problem:** Pages use relative paths like `./assets/images/logo.png`
**Fix:** Change to absolute path `/assets/images/logo.png`

### Issue 3: CSS Not Loading on Subdirectory Pages
**Problem:** Pages use `href="style.css"` or `href="./assets/css/style.css"`
**Fix:** Always use `href="/assets/css/style.css"`

## Quick Fix Checklist

For each page in subdirectories, verify:

- [ ] All `<link>` tags use absolute paths starting with `/`
- [ ] All `<img>` tags use absolute paths starting with `/`
- [ ] All `<script>` tags use absolute paths starting with `/`
- [ ] Canonical URL matches the page's clean URL
- [ ] Open Graph `og:url` matches the page's clean URL
- [ ] All asset references are consistent

## Page-Specific Values

### About Page
```
[PAGE_NAME] = "About"
[PAGE_DESCRIPTION] = "Learn about Erfan Ramezani, Head of AI at MRL, specializing in AI, robotics, ML, CV, and NLP."
[page-slug] = "about"
```

### Resume Page
```
[PAGE_NAME] = "Resume"
[PAGE_DESCRIPTION] = "View and download Erfan Ramezani's professional resume showcasing experience in AI, ML, robotics, and CV."
[page-slug] = "resume"
```

### Projects Page
```
[PAGE_NAME] = "Projects"
[PAGE_DESCRIPTION] = "Explore Erfan Ramezani's portfolio of AI, robotics, and machine learning projects."
[page-slug] = "projects"
```

### Academics Page
```
[PAGE_NAME] = "Academics"
[PAGE_DESCRIPTION] = "Academic background and achievements of Erfan Ramezani in AI and robotics."
[page-slug] = "academics"
```

### Contact Page
```
[PAGE_NAME] = "Contact"
[PAGE_DESCRIPTION] = "Get in touch with Erfan Ramezani for collaborations, projects, or inquiries."
[page-slug] = "contact"
```

## Validation Commands

Check for broken paths:
```bash
# Find relative asset paths that should be absolute
grep -r 'href="assets/' --include="*.html" .
grep -r 'src="assets/' --include="*.html" .
grep -r 'href="\./assets/' --include="*.html" .
grep -r 'src="\./assets/' --include="*.html" .

# Find references to non-existent style.css
grep -r 'href="style\.css"' --include="*.html" .
grep -r 'href="/style\.css"' --include="*.html" .
```

All commands should return empty (no results) after fixing.

---

**Status:** All pages now use absolute paths. The 404 page stylesheet issue has been fixed. ✅
