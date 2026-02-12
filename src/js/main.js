
// Dark Mode Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
    document.documentElement.classList.add('dark');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
    document.documentElement.classList.remove('dark');
}

themeToggleBtn.addEventListener('click', function() {
    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
});

// Mobile Menu Logic
const menuBtn = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
const menu = document.getElementById('navbar-sticky');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true' || false;
    menuBtn.setAttribute('aria-expanded', !expanded);
});

// Smooth Scrolling for Anchor Links (Already handled by CSS scroll-behavior: smooth, but ensuring closing menu on mobile)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Close mobile menu if open
        if (!menu.classList.contains('hidden')) {
            menu.classList.add('hidden');
            menuBtn.setAttribute('aria-expanded', 'false');
        }
    });
});


// Project Filtering Logic
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => {
             b.classList.remove('active', 'bg-primary-600', 'text-white', 'shadow-lg', 'shadow-primary-500/30');
             b.classList.add('bg-white', 'dark:bg-gray-700', 'text-gray-600', 'dark:text-gray-300');
        });
        
        // Add active class to clicked button
        btn.classList.add('active', 'bg-primary-600', 'text-white', 'shadow-lg', 'shadow-primary-500/30');
        btn.classList.remove('bg-white', 'dark:bg-gray-700', 'text-gray-600', 'dark:text-gray-300');
        
        const filterValue = btn.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            const categories = card.getAttribute('data-category');
            if (filterValue === 'all' || categories.includes(filterValue)) {
                card.classList.remove('hidden');
                card.classList.add('animate-fade-in');
            } else {
                card.classList.add('hidden');
                card.classList.remove('animate-fade-in');
            }
        });
    });
});

// Scroll to Top Button Logic
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.remove('translate-y-20', 'opacity-0');
    } else {
        scrollToTopBtn.classList.add('translate-y-20', 'opacity-0');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Scroll Animations (Intersection Observer)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0'); // Ensure element is visible
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Target elements to animate
// Updated selector to avoid conflict with project grid filtering
document.querySelectorAll('section > div, section h2').forEach((el) => {
    el.classList.add('opacity-0'); // Initially hide
    observer.observe(el);
});
