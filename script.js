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

// ===== GESTION DU FORMULAIRE DE CONTACT =====

// Gestion du formulaire de contact
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulation d'envoi (remplacez par votre logique d'envoi réelle)
            const successMessage = document.getElementById('successMessage');
            const submitButton = this.querySelector('.form-submit-btn');
            
            // Animation de chargement
            submitButton.innerHTML = '<span>⏳</span> Envoi en cours...';
            submitButton.disabled = true;
            
            // Simulation d'un délai d'envoi
            setTimeout(() => {
                successMessage.classList.add('show');
                submitButton.innerHTML = '<span>✅</span> Message envoyé !';
                
                // Reset du formulaire après 2 secondes
                setTimeout(() => {
                    this.reset();
                    successMessage.classList.remove('show');
                    submitButton.innerHTML = '<span>📧</span> Envoyer le message';
                    submitButton.disabled = false;
                }, 2000);
            }, 1500);
        });
    }

    // Effet de focus amélioré sur les champs
    document.querySelectorAll('.form-group input, .form-group textarea').forEach(field => {
        field.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        field.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });

    // Animation des éléments de contact au hover
    document.querySelectorAll('.contact-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Validation en temps réel de l'email
    const emailField = document.getElementById('email');
    if (emailField) {
        emailField.addEventListener('input', function() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.value && !emailRegex.test(this.value)) {
                this.style.borderColor = '#ff6b6b';
            } else {
                this.style.borderColor = '';
            }
        });
    }

    // Configuration des liens des projets - URLs MISES À JOUR
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
    console.log('✅ Portfolio Erhan Kilinc chargé avec succès !');
    console.log('📁 SAE 1.4 : Site web + GitHub');
    console.log('📁 SAE 1.5 : GitHub (traitement de données)');
    console.log('📁 SAE 2.3 : App météo + GitHub');
    console.log('📧 Formulaire de contact intégré');
});

// ===== INTÉGRATION AVEC UN SERVICE D'EMAIL (OPTIONNEL) =====

// Exemple d'intégration avec EmailJS (décommentez et configurez si besoin)
/*
function sendEmail(formData) {
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    })
    .then(function(response) {
        console.log('Email envoyé avec succès:', response);
        return true;
    })
    .catch(function(error) {
        console.error('Erreur lors de l\'envoi:', error);
        return false;
    });
}
*/

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

// ===== FONCTIONS UTILITAIRES =====

// Debounce function pour optimiser les performances
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

// Application du debounce sur les événements de scroll
const debouncedScrollHandler = debounce(() => {
    // Logique de scroll optimisée
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Détection du thème système (pour des améliorations futures)
function detectSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        console.log('Thème sombre détecté');
    } else {
        console.log('Thème clair détecté');
    }
}

// Initialisation des fonctionnalités au chargement
document.addEventListener('DOMContentLoaded', function() {
    detectSystemTheme();
    
    // Animation d'entrée pour les éléments
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
});

// Performance monitoring (développement)
if (typeof performance !== 'undefined') {
    window.addEventListener('load', function() {
        setTimeout(() => {
            const timing = performance.timing;
            const loadTime = timing.loadEventEnd - timing.navigationStart;
            console.log(`🚀 Portfolio chargé en ${loadTime}ms`);
        }, 0);
    });
}