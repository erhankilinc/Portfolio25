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

// Gestion des images de profil (fallback si image non trouvée)
document.addEventListener('DOMContentLoaded', function() {
    const profileImg = document.querySelector('.profile-pic-img');
    const fallback = document.querySelector('.profile-pic-fallback');
    
    if (profileImg) {
        profileImg.addEventListener('error', function() {
            this.style.display = 'none';
            if (fallback) {
                fallback.style.display = 'flex';
            }
        });
        
        profileImg.addEventListener('load', function() {
            if (fallback) {
                fallback.style.display = 'none';
            }
        });
    }
});

// Gestion du clic sur les images des projets pour les agrandir
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('project-image')) {
        openImageOverlay(e.target.src, e.target.alt);
    }
});

// Fonction pour ouvrir l'overlay d'image
function openImageOverlay(src, alt) {
    // Créer l'overlay s'il n'existe pas
    let overlay = document.querySelector('.image-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'image-overlay';
        overlay.innerHTML = `
            <span class="close-image">&times;</span>
            <img src="" alt="">
        `;
        document.body.appendChild(overlay);
        
        // Ajouter les événements de fermeture
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay || e.target.classList.contains('close-image')) {
                closeImageOverlay();
            }
        });
    }
    
    // Afficher l'image
    const img = overlay.querySelector('img');
    img.src = src;
    img.alt = alt;
    overlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Fonction pour fermer l'overlay d'image
function closeImageOverlay() {
    const overlay = document.querySelector('.image-overlay');
    if (overlay) {
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Fermer l'overlay d'image avec Échap
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const imageOverlay = document.querySelector('.image-overlay[style*="flex"]');
        if (imageOverlay) {
            closeImageOverlay();
        } else {
            const openModal = document.querySelector('.modal[style*="block"]');
            if (openModal) {
                closeModal(openModal.getAttribute('id'));
            }
        }
    }
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
        
        .project-links {
            flex-direction: column;
            gap: 0.8rem;
        }
        
        .project-link {
            text-align: center;
            justify-content: center;
        }
    }
`;
document.head.appendChild(style);

// Configuration des liens des projets - URLs MISES À JOUR
document.addEventListener('DOMContentLoaded', function() {
    const projectLinks = {
        // SAE 1.4 - Présence Numérique
        'sae14-link': 'https://erhankilinc.github.io/sae14_11/',
        'sae14-github': 'https://github.com/erhankilinc',
        
        // SAE 1.5 - Traitement de Données
        'sae15-github': 'https://github.com/erhankilinc/sae15-1',
        
        // SAE 2.3 - Application Météo
        'sae23-demo': 'https://erhankilinc.github.io/Instant_WeatherV2/',
        'sae23-github': 'https://github.com/erhankilinc'
    };
    
    // Applique les liens configurés
    Object.entries(projectLinks).forEach(([id, url]) => {
        const link = document.getElementById(id);
        if (link) {
            // Si l'URL est encore un placeholder, désactive le lien temporairement
            if (url.includes('votre-') || url === '#') {
                link.href = '#';
                link.style.opacity = '0.6';
                link.style.cursor = 'not-allowed';
                link.style.pointerEvents = 'none';
                link.title = 'Lien bientôt disponible - En cours de configuration';
                
                // Ajoute un message temporaire
                link.innerHTML = link.innerHTML + ' <small>(bientôt)</small>';
            } else {
                // Si l'URL est valide, active le lien
                link.href = url;
                link.style.opacity = '1';
                link.style.cursor = 'pointer';
                link.style.pointerEvents = 'auto';
                link.removeAttribute('title');
            }
        }
    });
    
    // Message d'aide dans la console pour le développeur
    console.log('✅ Liens des projets configurés :');
    console.log('📁 SAE 1.4 : Site web + GitHub');
    console.log('📁 SAE 1.5 : GitHub (traitement de données)');
    console.log('📁 SAE 2.3 : App météo + GitHub');
});