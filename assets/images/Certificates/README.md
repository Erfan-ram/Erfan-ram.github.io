# Certificates Gallery

This directory contains certificate images to be displayed in the "Certificates Gallery" section of the portfolio website.

## How to Add Certificates

1. Add your certificate images to this directory (JPEG, PNG, or other image formats)
2. Recommended image size: 800x600px or similar aspect ratio
3. Use descriptive filenames (e.g., `deeplearning-ai-certificate.jpg`, `berkeley-llm-certificate.png`)

## Usage in index.html

To add certificate images to the gallery, edit the `index.html` file and add `<img>` tags inside the `certificates-gallery` div:

```html
<div class="certificates-gallery">
  <img src="./assets/images/Certificates/certificate1.jpg" alt="Certificate Name" class="gallery-image certificates-gallery-img">
  <img src="./assets/images/Certificates/certificate2.png" alt="Another Certificate" class="gallery-image certificates-gallery-img">
  <!-- Add more certificate images as needed -->
</div>
```

## Styling

The certificates gallery uses the same responsive grid layout as the Academic & Research Gallery:
- Desktop: Grid with minimum 220px columns
- Tablet (768px): Grid with minimum 180px columns
- Mobile (480px): Grid with minimum 150px columns

Each image has hover effects (scale and shadow) and is fully responsive.
