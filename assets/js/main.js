// ===== MAIN JAVASCRIPT FILE =====

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initGallery();
    initLightbox();
    initBookingForm();
    initAnimations();
    initScrollEffects();
    updateCurrentYear();
});

// ===== NAVIGATION FUNCTIONALITY =====
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 70; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// ===== GALLERY FUNCTIONALITY =====
function initGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // Gallery data with JPG images
    const galleryData = [
        {
            id: 1,
            src: 'assets/gallery/photo1.jpg',
            alt: 'Cultural Photography',
            category: 'cultural',
            title: 'Traditional Beauty'
        },
        {
            id: 2,
            src: 'assets/gallery/photo2.jpg',
            alt: 'Portrait Photography',
            category: 'portrait',
            title: 'Modern Portrait'
        },
        {
            id: 3,
            src: 'assets/gallery/photo3.jpg',
            alt: 'Event Photography',
            category: 'events',
            title: 'Wedding Celebration'
        },
        {
            id: 4,
            src: 'assets/gallery/photo4.jpg',
            alt: 'Cultural Photography',
            category: 'cultural',
            title: 'Heritage Moments'
        },
        {
            id: 5,
            src: 'assets/gallery/photo5.jpg',
            alt: 'Portrait Photography',
            category: 'portrait',
            title: 'Family Portrait'
        },
        {
            id: 6,
            src: 'assets/gallery/photo6.jpg',
            alt: 'Event Photography',
            category: 'events',
            title: 'Corporate Event'
        },
        {
            id: 7,
            src: 'assets/gallery/photo7.jpg',
            alt: 'Cultural Photography',
            category: 'cultural',
            title: 'Traditional Ceremony'
        },
        {
            id: 8,
            src: 'assets/gallery/photo8.jpg',
            alt: 'Portrait Photography',
            category: 'portrait',
            title: 'Professional Headshot'
        }
    ];

    // Render gallery items
    function renderGallery(items = galleryData) {
        galleryGrid.innerHTML = '';
        
        items.forEach(item => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.setAttribute('data-category', item.category);
            galleryItem.setAttribute('data-id', item.id);
            
            galleryItem.innerHTML = `
                <img src="${item.src}" alt="${item.alt}" loading="lazy">
                <div class="gallery-overlay">
                    <i class="fas fa-search-plus"></i>
                </div>
            `;
            
            galleryGrid.appendChild(galleryItem);
        });
    }

    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter items
            if (filter === 'all') {
                renderGallery();
            } else {
                const filteredItems = galleryData.filter(item => item.category === filter);
                renderGallery(filteredItems);
            }
        });
    });

    // Initial render
    renderGallery();
}

// ===== LIGHTBOX FUNCTIONALITY =====
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxPrev = document.getElementById('lightbox-prev');
    const lightboxNext = document.getElementById('lightbox-next');
    
    let currentImageIndex = 0;
    let currentImages = [];

    // Open lightbox
    document.addEventListener('click', (e) => {
        if (e.target.closest('.gallery-item')) {
            const galleryItem = e.target.closest('.gallery-item');
            const img = galleryItem.querySelector('img');
            const category = galleryItem.getAttribute('data-category');
            
            // Get all visible images for navigation
            const visibleItems = document.querySelectorAll('.gallery-item:not([style*="display: none"])');
            currentImages = Array.from(visibleItems);
            currentImageIndex = currentImages.indexOf(galleryItem);
            
            openLightbox(img.src, img.alt);
        }
    });

    // Close lightbox
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Navigation
    lightboxPrev.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
        const img = currentImages[currentImageIndex].querySelector('img');
        updateLightboxImage(img.src, img.alt);
    });

    lightboxNext.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % currentImages.length;
        const img = currentImages[currentImageIndex].querySelector('img');
        updateLightboxImage(img.src, img.alt);
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        switch(e.key) {
            case 'Escape':
                closeLightbox();
                break;
            case 'ArrowLeft':
                lightboxPrev.click();
                break;
            case 'ArrowRight':
                lightboxNext.click();
                break;
        }
    });

    function openLightbox(src, alt) {
        lightboxImage.src = src;
        lightboxCaption.textContent = alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function updateLightboxImage(src, alt) {
        lightboxImage.src = src;
        lightboxCaption.textContent = alt;
    }
}

// ===== BOOKING FORM FUNCTIONALITY =====
function initBookingForm() {
    const bookingForm = document.getElementById('booking-form');
    const loadingSpinner = document.getElementById('loading-spinner');

    if (bookingForm) {
        bookingForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Show loading spinner
            loadingSpinner.classList.add('active');
            
            try {
                const formData = new FormData(bookingForm);
                const data = Object.fromEntries(formData.entries());
                
                // Validate form data
                if (!validateForm(data)) {
                    throw new Error('Please fill in all required fields');
                }
                
                // Submit to Formspree
                await submitToFormspree(data);
                
                // Track successful form submission
                trackEvent('form_submitted', {
                    form_type: 'booking',
                    package: data.package,
                    event_type: data.eventType
                });

                // Vercel Analytics specific tracking
                if (typeof window.va !== 'undefined') {
                    window.va('event', {
                        name: 'booking_form_submitted',
                        data: {
                            package: data.package,
                            event_type: data.eventType
                        }
                    });
                }
                
                // Show success message
                showNotification('Booking request sent successfully! We\'ll get back to you soon.', 'success');
                bookingForm.reset();
                
            } catch (error) {
                console.error('Form submission error:', error);
                showNotification(error.message || 'Could not send request. Please try again or contact us directly.', 'error');
            } finally {
                // Hide loading spinner
                loadingSpinner.classList.remove('active');
            }
        });
    }

    // Form validation
    function validateForm(data) {
        const requiredFields = ['name', 'email', 'phone', 'package', 'date', 'time'];
        return requiredFields.every(field => data[field] && data[field].trim() !== '');
    }

    // Form submission to Formspree
    async function submitToFormspree(data) {
        const formData = new FormData();
        
        // Add form fields to FormData
        Object.keys(data).forEach(key => {
            formData.append(key, data[key]);
        });
        
        const response = await fetch('https://formspree.io/f/mjkevbae', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Form submission failed');
        }
    }
}

// ===== ANIMATIONS =====
function initAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.service-card, .gallery-item, .feature, .contact-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// ===== SCROLL EFFECTS =====
function initScrollEffects() {
    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }

    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.section-title, .section-subtitle, .service-card, .gallery-item');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        revealObserver.observe(el);
    });
}

// ===== UTILITY FUNCTIONS =====
function updateCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;

    // Add to page
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);
}

// ===== PERFORMANCE OPTIMIZATIONS =====
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll-based animations and effects
}, 16)); // ~60fps

// ===== ACCESSIBILITY ENHANCEMENTS =====
// Add focus management for lightbox
function manageFocus() {
    const lightbox = document.getElementById('lightbox');
    const focusableElements = lightbox.querySelectorAll('button, [tabindex]:not([tabindex="-1"])');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Trap focus within lightbox
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                }
            } else {
                if (document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        }
    });
}

// Initialize focus management
manageFocus();

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => {
    console.error('JavaScript error:', e.error);
    // You can add error reporting here
});

// ===== SERVICE WORKER REGISTRATION (for PWA features) =====
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// ===== ANALYTICS =====
function trackEvent(eventName, eventData = {}) {
    // Google Analytics tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    
    // Vercel Analytics tracking
    if (typeof window.va !== 'undefined') {
        window.va('event', {
            name: eventName,
            data: eventData
        });
    }
    
    // Custom analytics
    console.log('Event tracked:', eventName, eventData);
}

// Track important user interactions
document.addEventListener('click', (e) => {
    if (e.target.closest('.btn-primary')) {
        trackEvent('cta_click', { location: e.target.closest('.btn-primary').textContent.trim() });
    }
    
    if (e.target.closest('.gallery-item')) {
        trackEvent('gallery_view', { category: e.target.closest('.gallery-item').getAttribute('data-category') });
    }
    
    if (e.target.closest('#booking-form')) {
        trackEvent('form_interaction');
    }
});
