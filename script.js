document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll spy - highlight active nav link
    function updateActiveLink() {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Navbar background on scroll
    function updateNavbar() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Event listeners
    window.addEventListener('scroll', function() {
        updateActiveLink();
        updateNavbar();
    });

    // Initial call
    updateActiveLink();
    updateNavbar();
});

    // Project filter functionality
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Filter projects
            const filter = this.getAttribute('data-filter');
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // Contact form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            let isValid = true;

            // Reset errors
            [name, email, message].forEach(field => {
                field.classList.remove('error');
                field.nextElementSibling.textContent = '';
            });

            // Validate name
            if (name.value.trim() === '') {
                name.classList.add('error');
                name.nextElementSibling.textContent = 'Name is required';
                isValid = false;
            }

            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email.value.trim() === '') {
                email.classList.add('error');
                email.nextElementSibling.textContent = 'Email is required';
                isValid = false;
            } else if (!emailRegex.test(email.value)) {
                email.classList.add('error');
                email.nextElementSibling.textContent = 'Please enter a valid email';
                isValid = false;
            }

            // Validate message
            if (message.value.trim() === '') {
                message.classList.add('error');
                message.nextElementSibling.textContent = 'Message is required';
                isValid = false;
            }

            if (isValid) {
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            }
        });
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply animation classes to elements
    document.querySelectorAll('.section-title').forEach(el => {
        el.classList.add('animate-on-scroll', 'slide-up');
        observer.observe(el);
    });

    document.querySelectorAll('.stat-card').forEach(el => {
        el.classList.add('animate-on-scroll', 'fade-in');
        observer.observe(el);
    });

    document.querySelectorAll('.skill-card').forEach(el => {
        el.classList.add('animate-on-scroll', 'slide-up');
        observer.observe(el);
    });

    document.querySelectorAll('.project-card').forEach(el => {
        el.classList.add('animate-on-scroll', 'slide-up');
        observer.observe(el);
    });

    document.querySelectorAll('.timeline-item').forEach(el => {
        el.classList.add('animate-on-scroll', 'slide-up');
        observer.observe(el);
    });

    document.querySelectorAll('.contact-form, .contact-info').forEach(el => {
        el.classList.add('animate-on-scroll', 'fade-in');
        observer.observe(el);
    });

    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
