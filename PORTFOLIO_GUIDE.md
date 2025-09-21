# Portfolio Editing Guide for Erfan Ramezani

This guide helps you maintain and update your AI Engineer portfolio effectively.

## File Structure

```
├── index.html                 # Main portfolio page
├── projects/                  # Individual project detail pages
│   ├── project-template.html  # Template for new projects
│   ├── person-detection.html  # Person Detection project
│   └── lean4-llm-agent.html  # Lean4 LLM Agent project
├── assets/
│   ├── css/style.css         # Styling
│   ├── images/               # Images and avatars
│   └── js/script.js          # JavaScript functionality
└── README.md                 # Repository documentation
```

## How to Edit Different Sections

### 1. Personal Information (Sidebar)
**Location:** `index.html` lines ~50-120

```html
<!-- Update name -->
<h1 class="name" title="Your Name">Your Name</h1>

<!-- Update title -->
<p class="title">Your Professional Title</p>

<!-- Update contact info -->
<a href="mailto:your.email@domain.com" class="contact-link">your.email@domain.com</a>
<a href="tel:+yourphonenumber" class="contact-link">+your phone number</a>
<time datetime="YYYY-MM-DD">Your Birthday</time>
<address>Your Location</address>
```

### 2. About Section
**Location:** `index.html` lines ~210-225

Update the two paragraphs describing your background and expertise:
```html
<section class="about-text">
  <p>Your first paragraph about current role and experience...</p>
  <p>Your second paragraph about education and goals...</p>
</section>
```

### 3. AI Specializations
**Location:** `index.html` lines ~225-300

Each specialization follows this pattern:
```html
<li class="service-item">
  <div class="service-icon-box">
    <img src="./assets/images/icon-design.svg" alt="icon description" width="40">
  </div>
  <div class="service-content-box">
    <h4 class="h4 service-item-title">Specialization Title</h4>
    <p class="service-item-text">Description of the specialization...</p>
  </div>
</li>
```

### 4. Professional Endorsements
**Location:** `index.html` lines ~300-400

Each testimonial follows this pattern:
```html
<li class="testimonials-item">
  <div class="content-card" data-testimonials-item>
    <figure class="testimonials-avatar-box">
      <img src="./assets/images/avatar-1.png" alt="Person Name" width="60" data-testimonials-avatar>
    </figure>
    <h4 class="h4 testimonials-item-title" data-testimonials-title>Person Name</h4>
    <div class="testimonials-text" data-testimonials-text>
      <p>Testimonial text...</p>
    </div>
  </div>
</li>
```

### 5. Education Section
**Location:** `index.html` lines ~500-555

Each education entry:
```html
<li class="timeline-item">
  <h4 class="h4 timeline-item-title">Degree/Certificate Name</h4>
  <span>Start Year — End Year</span>
  <p class="timeline-text">Description of the education...</p>
</li>
```

### 6. Experience Section
**Location:** `index.html` lines ~555-610

Each experience entry:
```html
<li class="timeline-item">
  <h4 class="h4 timeline-item-title">Job Title</h4>
  <span>Start Year — End Year</span>
  <p class="timeline-text">Job description and achievements...</p>
</li>
```

### 7. Technical Skills
**Location:** `index.html` lines ~610-665

Each skill with progress bar:
```html
<li class="skills-item">
  <div class="title-wrapper">
    <h5 class="h5">Skill Name</h5>
    <data value="90">90%</data>
  </div>
  <div class="skill-progress-bg">
    <div class="skill-progress-fill" style="width: 90%;"></div>
  </div>
</li>
```

### 8. Portfolio Projects
**Location:** `index.html` lines ~700-900

Each project:
```html
<li class="project-item active" data-filter-item data-category="ai/ml">
  <a href="https://github.com/your-username/project-repo">
    <figure class="project-img">
      <div class="project-item-icon-box">
        <ion-icon name="eye-outline"></ion-icon>
      </div>
      <img src="./assets/images/project-1.jpg" alt="project description" loading="lazy">
    </figure>
    <h3 class="project-title">Project Title</h3>
    <p class="project-category">Category</p>
  </a>
</li>
```

**Categories:** Use one of: `ai/ml`, `computer vision`, `robotics`

## Adding New Projects

### 1. Add to Portfolio Grid
1. Copy an existing project `<li>` element in the portfolio section
2. Update the GitHub URL, image, title, and category
3. Choose appropriate category for filtering

### 2. Create Detailed Project Page
1. Copy `projects/project-template.html`
2. Rename to `projects/your-project-name.html`
3. Fill in all the placeholder content:
   - `[PROJECT NAME]` → Your project title
   - `[CATEGORY]` → ai/ml, computer vision, or robotics
   - `[TECHNOLOGIES]` → List of technologies used
   - `[GITHUB_URL]` → Link to your GitHub repository
   - `[STATUS]` → Completed, In Progress, or Maintenance
   - Fill in all description sections

### 3. Update Portfolio Links
Update the portfolio grid to link to your new detail page:
```html
<a href="./projects/your-project-name.html">
```

## Images and Assets

### Profile Photo
- Replace `assets/images/erfan-avatar.jpg` with your professional photo
- Recommended size: 400x400px, square format

### Project Images
- Add project images to `assets/images/`
- Use descriptive names: `project-name-screenshot.jpg`
- Recommended size: 800x600px for portfolio grid

## Social Media Links
**Location:** `index.html` lines ~128-150

Update with your actual profiles:
```html
<a href="https://www.linkedin.com/in/your-profile" class="social-link">
<a href="https://github.com/your-username" class="social-link">
<a href="mailto:your.email@domain.com" class="social-link">
```

## Testing Your Changes

1. Save your files
2. Open `index.html` in a web browser
3. Test all navigation and links
4. Check responsiveness on mobile devices
5. Verify all external links work

## Best Practices

1. **Keep content current** - Update regularly with new projects and achievements
2. **Use professional language** - Write in third person for endorsements, first person for descriptions
3. **Optimize images** - Compress images for faster loading
4. **Test thoroughly** - Check all links and functionality before publishing
5. **Backup regularly** - Keep copies of your customized files

## Deployment

Once you're satisfied with your changes:
1. Commit all files to your GitHub repository
2. Push to the main branch
3. GitHub Pages will automatically deploy your site
4. Your portfolio will be live at: `https://your-username.github.io`

## Getting Help

If you need assistance:
- Check the browser console for JavaScript errors
- Validate your HTML syntax
- Ensure all file paths are correct
- Test in multiple browsers

Remember: This portfolio showcases your AI engineering expertise, so keep the content technical but accessible to both technical and non-technical audiences.