
const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
    document.documentElement.classList.add('dark');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
    document.documentElement.classList.remove('dark');
}

themeToggleBtn.addEventListener('click', function() {
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

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

const menuBtn = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
const menu = document.getElementById('navbar-sticky');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true' || false;
    menuBtn.setAttribute('aria-expanded', !expanded);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (!menu.classList.contains('hidden')) {
            menu.classList.add('hidden');
            menuBtn.setAttribute('aria-expanded', 'false');
        }
    });
});


const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
             b.classList.remove('active', 'bg-primary-600', 'text-white', 'shadow-lg', 'shadow-primary-500/30');
             b.classList.add('bg-white', 'dark:bg-gray-700', 'text-gray-600', 'dark:text-gray-300');
        });
        
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

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const animationClass = entry.target.getAttribute('data-animation') || 'animate-fade-in-up';
            entry.target.classList.add(animationClass);
            entry.target.classList.remove('opacity-0'); 
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section > div, section h2').forEach((el) => {
    el.classList.add('opacity-0'); 
    observer.observe(el);
});

// 3D Tilt Effect
const card = document.getElementById('profile-card');
if (card) {
    const figure = card.querySelector('figure');

    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate rotation based on cursor position
        const rotateX = ((y - centerY) / centerY) * -15; // Max 15deg rotation
        const rotateY = ((x - centerX) / centerX) * 15;

        figure.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
        figure.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
}
