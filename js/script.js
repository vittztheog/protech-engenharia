// ===== Mobile Menu Toggle =====
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMobile = document.getElementById('navMobile');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMobile.classList.toggle('active');
        });
    }

    // Close menu when clicking on a link
    const mobileLinks = navMobile.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMobile.classList.remove('active');
        });
    });

    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

// ===== Form Submission Handler =====
function handleFormSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formMessage = document.getElementById('formMessage');
    
    // Get form data
    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone') || null,
        subject: formData.get('subject'),
        message: formData.get('message'),
        serviceType: formData.get('service') || null,
    };

    // Validate form
    const validation = validateForm(data);
    if (!validation.valid) {
        showMessage(formMessage, validation.error, 'error');
        return;
    }

    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';

    // Simulate form submission (in a real scenario, this would send to a server)
    setTimeout(() => {
        // Success message
        showMessage(formMessage, 'Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
        
        // Reset form
        form.reset();
        
        // Reset button
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;

        // Log data (for demonstration)
        console.log('Form submitted with data:', data);

        // Clear message after 5 seconds
        setTimeout(() => {
            formMessage.classList.remove('success', 'error');
            formMessage.textContent = '';
        }, 5000);
    }, 1500);
}

// ===== Form Validation =====
function validateForm(data) {
    // Check name
    if (!data.name || data.name.trim().length < 2) {
        return {
            valid: false,
            error: 'Nome deve ter pelo menos 2 caracteres'
        };
    }

    // Check email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
        return {
            valid: false,
            error: 'Email inválido'
        };
    }

    // Check subject
    if (!data.subject || data.subject.trim().length < 5) {
        return {
            valid: false,
            error: 'Assunto deve ter pelo menos 5 caracteres'
        };
    }

    // Check message
    if (!data.message || data.message.trim().length < 10) {
        return {
            valid: false,
            error: 'Mensagem deve ter pelo menos 10 caracteres'
        };
    }

    return { valid: true };
}

// ===== Show Message =====
function showMessage(element, message, type) {
    element.textContent = message;
    element.className = `form-message ${type}`;
}

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe service cards, portfolio cards, and stat cards
document.querySelectorAll('.service-card, .portfolio-card, .stat-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// ===== Active Navigation Link =====
window.addEventListener('scroll', updateActiveNav);

function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-desktop a, .nav-mobile a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ===== Add Active Link Styling =====
const style = document.createElement('style');
style.textContent = `
    .nav-desktop a.active,
    .nav-mobile a.active {
        color: var(--primary);
        font-weight: 600;
    }
`;
document.head.appendChild(style);

// ===== Debounce Function =====
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

// ===== Throttle Function =====
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ===== Scroll to Top Button (Optional) =====
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.id = 'scrollTopBtn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 3rem;
    height: 3rem;
    background-color: var(--primary);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    z-index: 40;
    transition: all 0.3s ease;
    box-shadow: var(--shadow-lg);
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', throttle(() => {
    if (window.scrollY > 300) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
}, 100));

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== Hover Effects for Cards =====
document.querySelectorAll('.service-card, .portfolio-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ===== Console Welcome Message =====
console.log('%cProtech Engenharia', 'font-size: 20px; font-weight: bold; color: #3b82f6;');
console.log('%cSite desenvolvido com HTML, CSS e JavaScript puro', 'font-size: 12px; color: #6b7280;');
console.log('%cPara mais informações, visite: https://protecheengenharia.eng.br', 'font-size: 12px; color: #6b7280;');
