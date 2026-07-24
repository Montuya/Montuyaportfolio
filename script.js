document.addEventListener('DOMContentLoaded', function() {
    // Loading Screen
    const loader = document.getElementById('loader');
    window.addEventListener('load', function() {
        setTimeout(function() {
            loader.classList.add('hidden');
        }, 800);
    });

    // Particle Animation (Optimized)
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let lastTime = 0;
    const fps = 24;
    const interval = 1000 / fps;

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 1.2 + 0.4;
            this.speedX = (Math.random() - 0.5) * 0.25;
            this.speedY = (Math.random() - 0.5) * 0.25;
            this.opacity = Math.random() * 0.2 + 0.05;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }

        draw() {
            ctx.fillStyle = `rgba(6, 182, 212, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        const isMobile = window.innerWidth < 768;
        const count = isMobile ? 15 : 30;
        for (let i = 0; i < count; i++) {
            particles.push(new Particle());
        }
    }

    function connectParticles() {
        for (let a = 0; a < particles.length; a++) {
            for (let b = a + 1; b < particles.length; b++) {
                const dx = particles[a].x - particles[b].x;
                const dy = particles[a].y - particles[b].y;
                const dist = dx * dx + dy * dy;
                const maxDist = 12000;
                if (dist < maxDist) {
                    const opacity = 0.04 * (1 - dist / maxDist);
                    ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`;
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    function animateParticles(currentTime) {
        requestAnimationFrame(animateParticles);
        const delta = currentTime - lastTime;
        if (delta < interval) return;
        lastTime = currentTime - (delta % interval);

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        connectParticles();
    }

    initParticles();
    animateParticles(0);

    // Typing Animation
    const typingText = document.querySelector('.typing-text');
    const roles = [
        'Flutter Developer',
        'Full-Stack Developer',
        'Mobile App Developer',
        'UI/UX Enthusiast'
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const current = roles[roleIndex];
        if (isDeleting) {
            typingText.textContent = current.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingText.textContent = current.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === current.length) {
            speed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            speed = 500;
        }

        setTimeout(typeEffect, speed);
    }
    typeEffect();

    // Navigation
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Scroll spy
    function updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.scrollY + 100;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollY >= top && scrollY < top + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });

        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();

    // Mobile menu
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Project Filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // Counter Animation
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number[data-count]');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000;
            const start = performance.now();

            function updateCounter(currentTime) {
                const elapsed = currentTime - start;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                counter.textContent = Math.round(eased * target);

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                }
            }
            requestAnimationFrame(updateCounter);
        });
    }

    // Skill Progress Animation
    function animateSkills() {
        const skillBars = document.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = progress + '%';
        });
    }

    // Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                if (entry.target.classList.contains('stats')) {
                    animateCounters();
                }

                if (entry.target.classList.contains('skills-grid')) {
                    animateSkills();
                }

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.section-title').forEach(el => {
        el.classList.add('animate-on-scroll', 'slide-up');
        observer.observe(el);
    });

    document.querySelectorAll('.about-text').forEach(el => {
        el.classList.add('animate-on-scroll', 'slide-up');
        observer.observe(el);
    });

    document.querySelectorAll('.hero-content').forEach(el => {
        el.classList.add('animate-on-scroll', 'slide-up');
        observer.observe(el);
    });

    document.querySelectorAll('.hero-visual').forEach(el => {
        el.classList.add('animate-on-scroll', 'fade-in');
        observer.observe(el);
    });

    document.querySelectorAll('.stat-card').forEach(el => {
        el.classList.add('animate-on-scroll', 'fade-in');
        observer.observe(el);
    });

    document.querySelector('.skills-grid')?.classList.add('animate-on-scroll', 'fade-in');
    if (document.querySelector('.skills-grid')) observer.observe(document.querySelector('.skills-grid'));

    document.querySelectorAll('.project-card').forEach(el => {
        el.classList.add('animate-on-scroll', 'slide-up');
        observer.observe(el);
    });

    document.querySelectorAll('.timeline-item').forEach(el => {
        el.classList.add('animate-on-scroll', 'slide-left');
        observer.observe(el);
    });

    document.querySelector('.contact-content')?.classList.add('animate-on-scroll', 'fade-in');
    if (document.querySelector('.contact-content')) observer.observe(document.querySelector('.contact-content'));

    document.querySelectorAll('.skill-category').forEach(el => {
        el.classList.add('animate-on-scroll', 'fade-in');
        observer.observe(el);
    });

    document.querySelectorAll('.info-card').forEach(el => {
        el.classList.add('animate-on-scroll', 'slide-up');
        observer.observe(el);
    });

    // Back to top
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
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            let valid = true;

            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');

            [name, email, subject, message].forEach(field => {
                const error = field.nextElementSibling;
                if (!field.value.trim()) {
                    field.classList.add('error');
                    error.textContent = 'This field is required';
                    valid = false;
                } else {
                    field.classList.remove('error');
                    error.textContent = '';
                }
            });

            if (email.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
                email.classList.add('error');
                email.nextElementSibling.textContent = 'Please enter a valid email';
                valid = false;
            }

            if (valid) {
                const btn = contactForm.querySelector('.btn-submit');
                const originalText = btn.innerHTML;
                btn.innerHTML = '<span>Message Sent!</span> <i class="fas fa-check"></i>';
                btn.style.background = '#22c55e';
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.background = '';
                    contactForm.reset();
                }, 3000);
            }
        });
    }
});
