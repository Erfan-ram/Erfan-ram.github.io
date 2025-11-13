// Lightbox functionality for project gallery images
document.addEventListener('DOMContentLoaded', function() {
  const galleryImages = document.querySelectorAll('.gallery-image');
  
  if (galleryImages.length === 0) return;
  
  // Create lightbox elements
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <span class="lightbox-close">&times;</span>
    <span class="lightbox-prev">&#10094;</span>
    <span class="lightbox-next">&#10095;</span>
    <div class="lightbox-content">
      <img class="lightbox-image" src="" alt="Gallery Image">
    </div>
    <div class="lightbox-counter"></div>
    <div class="drag-indicator">Swipe to navigate</div>
  `;
  document.body.appendChild(lightbox);
  
  const lightboxContent = lightbox.querySelector('.lightbox-content');
  const lightboxImage = lightbox.querySelector('.lightbox-image');
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');
  const counter = lightbox.querySelector('.lightbox-counter');
  const dragIndicator = lightbox.querySelector('.drag-indicator');

  let currentIndex = 0;
  const images = Array.from(galleryImages);

  // Drag functionality variables
  let isDragging = false;
  let startX = 0;
  let currentX = 0;
  let dragDistance = 0;
  const dragThreshold = 100; // Minimum distance to trigger slide
  let slideDirection = 0; // -1 for left, 1 for right
  
  function openLightbox(index) {
    currentIndex = index;
    updateLightboxImage();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    // Reset drag state
    isDragging = false;
    dragDistance = 0;
  }
  
  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  function updateLightboxImage() {
    lightboxImage.src = images[currentIndex].src;
    lightboxImage.alt = images[currentIndex].alt;
    counter.textContent = `${currentIndex + 1} / ${images.length}`;
  }
  
  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    updateLightboxImage();
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightboxImage();
  }
  
  // Add click event to gallery images
  galleryImages.forEach((img, index) => {
    img.addEventListener('click', () => openLightbox(index));
  });
  
  // Close button
  closeBtn.addEventListener('click', closeLightbox);
  
  // Navigation buttons
  nextBtn.addEventListener('click', showNext);
  prevBtn.addEventListener('click', showPrev);
  
  // Close on background click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
  
  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });

  // Drag functionality
  function initDragEvents() {
    const content = lightboxContent;

    // Mouse events
    content.addEventListener('mousedown', startDrag);
    content.addEventListener('mousemove', drag);
    content.addEventListener('mouseup', endDrag);
    content.addEventListener('mouseleave', endDrag);

    // Touch events
    content.addEventListener('touchstart', startDrag, { passive: false });
    content.addEventListener('touchmove', drag, { passive: false });
    content.addEventListener('touchend', endDrag);
  }

  function startDrag(e) {
    if (images.length <= 1) return;

    isDragging = true;
    startX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
    currentX = startX;
    dragDistance = 0;

    lightboxContent.classList.add('dragging');
    lightboxImage.style.transition = 'none';

    // Show drag indicator briefly
    dragIndicator.classList.add('visible');
    setTimeout(() => dragIndicator.classList.remove('visible'), 1500);

    e.preventDefault();
  }

  function drag(e) {
    if (!isDragging) return;

    currentX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    dragDistance = currentX - startX;

    // Apply transform to image for visual feedback (limit drag distance)
    const maxDrag = 150;
    const clampedDistance = Math.max(-maxDrag, Math.min(maxDrag, dragDistance));
    const opacity = Math.max(0.3, 1 - Math.abs(clampedDistance) / maxDrag);
    const scale = Math.max(0.8, 1 - Math.abs(clampedDistance) / (maxDrag * 2));

    lightboxImage.style.transform = `translateX(${clampedDistance * 0.5}px) scale(${scale})`;
    lightboxImage.style.opacity = opacity;

    e.preventDefault();
  }

  function endDrag(e) {
    if (!isDragging) return;

    isDragging = false;
    lightboxContent.classList.remove('dragging');
    lightboxImage.style.transition = 'transform 0.3s ease, opacity 0.3s ease';

    // Reset image transform
    lightboxImage.style.transform = 'translateX(0) scale(1)';
    lightboxImage.style.opacity = '1';

    // Determine if we should change slide
    if (Math.abs(dragDistance) > dragThreshold) {
      if (dragDistance > 0) {
        // Dragged right - show previous
        showPrev();
      } else {
        // Dragged left - show next
        showNext();
      }
    }
  }

  function updateLightboxImage() {
    lightboxImage.src = images[currentIndex].src;
    lightboxImage.alt = images[currentIndex].alt;
    counter.textContent = `${currentIndex + 1} / ${images.length}`;
  }

  // Initialize drag events
  initDragEvents();
});
