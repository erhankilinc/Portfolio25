// Animation au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observer tous les éléments avec la classe fade-in
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Smooth scroll pour les liens de navigation
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

// Animation additionnelle pour les cartes de projets
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('card-animation');
    });
});

// Effet parallaxe simple sur le hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Navigation active selon la section
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Fonctions pour les modales
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Empêche le scroll de la page
        
        // Animation d'entrée
        const modalContent = modal.querySelector('.modal-content');
        modalContent.style.transform = 'translateY(-50px) scale(0.9)';
        modalContent.style.opacity = '0';
        
        setTimeout(() => {
            modalContent.style.transition = 'all 0.3s ease-out';
            modalContent.style.transform = 'translateY(0) scale(1)';
            modalContent.style.opacity = '1';
        }, 10);
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        const modalContent = modal.querySelector('.modal-content');
        
        // Animation de sortie
        modalContent.style.transition = 'all 0.3s ease-out';
        modalContent.style.transform = 'translateY(-50px) scale(0.9)';
        modalContent.style.opacity = '0';
        
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Réactive le scroll de la page
        }, 300);
    }
}

// Fermer la modale en cliquant en dehors
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        const modalId = event.target.getAttribute('id');
        closeModal(modalId);
    }
});

// Fermer la modale avec la touche Échap
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const openModal = document.querySelector('.modal[style*="block"]');
        if (openModal) {
            closeModal(openModal.getAttribute('id'));
        }
    }
});

// Ajout de classe CSS pour le lien actif
const style = document.createElement('style');
style.textContent = `
    .nav-links a.active {
        color: #ffd700 !important;
        font-weight: 600;
    }
    
    .card-animation {
        opacity: 0;
        transform: translateY(30px);
        animation: cardFadeIn 0.6s ease-out forwards;
    }
    
    @keyframes cardFadeIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    /* Responsive pour les modales */
    @media (max-width: 768px) {
        .modal-content {
            margin: 5% auto;
            width: 98%;
            max-height: 85vh;
        }
        
        .modal-content h2 {
            padding: 2rem;
            font-size: 1.4rem;
        }
        
        .modal-body {
            padding: 2rem;
        }
        
        .close {
            top: 1rem;
            right: 1.5rem;
            font-size: 2rem;
        }
        
        .project-info p {
            font-size: 1rem;
        }
        
        .project-info h3 {
            font-size: 1.2rem;
        }
    }
`;
document.head.appendChild(style);