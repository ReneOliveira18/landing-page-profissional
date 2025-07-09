document.addEventListener('DOMContentLoaded', () => {

    // --- ANIMAÇÃO DA NAVBAR AO SCROLL ---
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // Adiciona a classe 'scrolled' após rolar 50px
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- ANIMAÇÕES DE REVELAÇÃO AO SCROLL (Fade-up/Fade-in) ---
    const revealElements = document.querySelectorAll('.reveal-text, .reveal-item');

    const observerOptions = {
        threshold: 0.2 // Porcentagem do elemento que deve estar visível para ativar
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Opcional: Para animar apenas uma vez
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        observer.observe(el);
    });

    // --- SMOOTH SCROLL PARA LINKS DE NAVEGAÇÃO ---
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Previne o comportamento padrão do link

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - navbar.offsetHeight, // Ajusta pelo tamanho da navbar
                    behavior: 'smooth' // Rola suavemente
                });
            }
        });
    });
});