document.addEventListener('DOMContentLoaded', () => {
    // ------------------------------------------
    // 1. Mobile Menu Toggle
    // ------------------------------------------
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Close menu after clicking a link
            if (navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // ------------------------------------------
    // 2. Scroll-to-View Animations (Intersection Observer)
    // ------------------------------------------
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the item is visible
    };

    // Create the observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'visible' class to trigger the CSS fade-in
                entry.target.classList.add('visible');
                // Stop observing after the animation has run once
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Target all main sections and start observing
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        observer.observe(section);
    });
});