// ==========================================
// MUQADDAS INTERNATIONAL TOURS - JAVASCRIPT
// ==========================================

// Mobile Menu Toggle
function toggleMenu() {
    const mobileNav = document.getElementById('mobileNav');
    const menuBtn = document.querySelector('.mobile-menu-btn');

    mobileNav.classList.toggle('active');
    menuBtn.classList.toggle('active');
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        const mobileNav = document.getElementById('mobileNav');
        mobileNav.classList.remove('active');
    });
});

// Accordion Toggle
function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const isActive = header.classList.contains('active');

    // Close all accordions
    document.querySelectorAll('.accordion-header').forEach(h => {
        h.classList.remove('active');
        h.nextElementSibling.classList.remove('active');
    });

    // Open clicked accordion if it wasn't active
    if (!isActive) {
        header.classList.add('active');
        content.classList.add('active');
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
    }

    lastScroll = currentScroll;
});

// Form validation (basic)
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const name = document.getElementById('name');
        const phone = document.getElementById('phone');

        if (!name.value.trim()) {
            e.preventDefault();
            alert('Please enter your name');
            name.focus();
            return;
        }

        if (!phone.value.trim()) {
            e.preventDefault();
            alert('Please enter your phone number');
            phone.focus();
            return;
        }

        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .why-us-card, .package-card, .quick-link-card');

    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
});

// WhatsApp floating button pulse animation
const whatsappBtn = document.querySelector('.floating-whatsapp');
if (whatsappBtn) {
    setInterval(() => {
        whatsappBtn.style.transform = 'scale(1.1)';
        setTimeout(() => {
            whatsappBtn.style.transform = 'scale(1)';
        }, 200);
    }, 3000);
}

// Console welcome message
console.log('%c Muqaddas International Tours ', 'background: #8B7355; color: white; font-size: 16px; padding: 10px;');
console.log('%c Your Trusted Partner for Hajj & Umrah ', 'color: #8B7355; font-size: 12px;');
