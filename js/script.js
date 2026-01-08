document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Menu Mobile Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navMobile = document.getElementById('navMobile');

    if (menuToggle && navMobile) {
        menuToggle.addEventListener('click', function() {
            // Se abrir no console do navegador (F12), você verá esta mensagem quando clicar
            console.log('Botão menu clicado!'); 
            
            navMobile.classList.toggle('active');
            
            // Muda o ícone de Hamburguer para X
            if (navMobile.classList.contains('active')) {
                menuToggle.innerHTML = '✕';
            } else {
                menuToggle.innerHTML = '☰';
            }
        });

        // Fechar menu ao clicar em um link
        const mobileLinks = navMobile.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMobile.classList.remove('active');
                menuToggle.innerHTML = '☰';
            });
        });
    }

    // 2. Ano Automático
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 3. Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Animação ao Rolar
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
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

    const animatedElements = document.querySelectorAll('.service-card, .portfolio-card, .section-header, .about-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(el);
    });

    // 5. Formulário
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    const name = form.querySelector('#name').value;
    const email = form.querySelector('#email').value;
    
    if(name.length < 2 || !email.includes('@')) {
        alert('Por favor, preencha os campos corretamente.');
        return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';
    submitBtn.style.backgroundColor = '#ccc';

    setTimeout(() => {
        alert('Mensagem enviada com sucesso! A equipe Protech entrará em contato.');
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        submitBtn.style.backgroundColor = ''; 
    }, 2000);
}