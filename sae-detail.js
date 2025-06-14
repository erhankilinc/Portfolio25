// Project links click handlers (pour les liens dans l'overlay)
    document.querySelectorAll('.project-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation(); // Empêcher l'ouverture du modal
            
            const linkText = this.textContent.trim();
            const projectItem = this.closest('.project-item');
            const saeTitle = projectItem.querySelector('h3').textContent;
            const saeNumber = projectItem.querySelector('.project-category').textContent;
            
            // Créer le nom du fichier basé sur la SAE
            let fileName = '';
            if (saeTitle.includes('Sensibilisation à l\'hygiène informatique')) fileName = 'sae11-cybersecurite.html';
            else if (saeTitle.includes('S\'initier aux réseaux')) fileName = 'sae12-reseaux.html';
            else if (saeTitle.includes('Découvrir un dispositif')) fileName = 'sae13-transmission.html';
            else if (saeTitle.includes('Se présenter sur Internet')) fileName = 'sae14-web.html';
            else if (saeTitle.includes('Traiter des données')) fileName = 'sae15-donnees.html';
            else if (saeTitle.includes('Construire un réseau')) fileName = 'sae21-construction-reseau.html';
            else if (saeTitle.includes('Mesurer et caractériser')) fileName = 'sae22-mesures.html';
            else if (saeTitle.includes('Mettre en place une solution')) fileName = 'sae23-solution-entreprise.html';
            else if (saeTitle.includes('Projet intégratif')) fileName = 'sae24-projet-integratif.html';
            
            if (fileName && (linkText.includes('Voir le rapport') || linkText.includes('Configuration') || linkText.includes('Code source') || linkText.includes('Schémas') || linkText.includes('Mesures') || linkText.includes('Solution') || linkText.includes('Projet'))) {
                // Rediriger vers la page de détail de la SAE
                window.location.href = fileName;
            } else {
                // Pour les autres liens, afficher des notifications
                if (linkText.includes('Guide sécurité') || linkText.includes('Politique sécurité')) {
                    showNotification(`🔒 Document de sécurité confidentiel`, 'warning');
                } else if (linkText.includes('Voir le site')) {
                    showNotification(`🌍 Site web SAE 1.4 - Lien vers votre portfolio actuel`, 'success');
                } else {
                    showNotification(`📁 Document "${linkText}" - Accès sur demande`, 'info');
                }
            }// Projects page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Données détaillées des SAE
    const saeData = {
        'SAE 1.1': {
            icon: '🛡️',
            category: 'SAE 1.1 - Semestre 1',
            title: 'Sensibilisation à l\'hygiène informatique et à la cybersécurité',
            description: 'Cette SAE vise à sensibiliser aux enjeux de la cybersécurité et de l\'hygiène informatique. Elle couvre les bonnes pratiques de sécurité, l\'identification des menaces courantes et la mise en place de mesures préventives.',
            objectives: [
                'Identifier les principales menaces cybersécurité',
                'Comprendre les enjeux de l\'hygiène informatique',
                'Appliquer les bonnes pratiques de sécurité',
                'Sensibiliser aux techniques de social engineering',
                'Évaluer les risques informatiques'
            ],
            technologies: ['Cybersécurité', 'ANSSI', 'Phishing', 'RGPD', 'ISO 27001'],
            deliverables: [
                { icon: '📄', name: 'Rapport d\'analyse' },
                { icon: '📋', name: 'Guide de bonnes pratiques' },
                { icon: '🎯', name: 'Campagne de sensibilisation' },
                { icon: '🔍', name: 'Audit de sécurité' }
            ],
            competences: [
                { title: 'Administrer les réseaux et l\'Internet', desc: 'Comprendre les enjeux de sécurité réseau' },
                { title: 'Connecter les entreprises et les usagers', desc: 'Sécuriser les connexions et communications' }
            ],
            duration: '3 semaines',
            year: '2023'
        },
        'SAE 1.2': {
            icon: '🌐',
            category: 'SAE 1.2 - Semestre 1',
            title: 'S\'initier aux réseaux informatiques',
            description: 'Introduction aux concepts fondamentaux des réseaux informatiques. Cette SAE couvre les modèles de référence, les protocoles de base et les outils d\'analyse réseau.',
            objectives: [
                'Maîtriser le modèle OSI et TCP/IP',
                'Comprendre l\'adressage IPv4 et IPv6',
                'Utiliser les outils d\'analyse réseau',
                'Configurer des équipements réseau de base',
                'Diagnostiquer les problèmes de connectivité'
            ],
            technologies: ['TCP/IP', 'IPv4', 'IPv6', 'Wireshark', 'Ping', 'Traceroute'],
            deliverables: [
                { icon: '📊', name: 'Analyse de trames' },
                { icon: '🌐', name: 'Plan d\'adressage' },
                { icon: '🔧', name: 'Configuration équipements' },
                { icon: '📋', name: 'Rapport technique' }
            ],
            competences: [
                { title: 'Administrer les réseaux et l\'Internet', desc: 'Bases de l\'administration réseau' },
                { title: 'Connecter les entreprises et les usagers', desc: 'Principes de connectivité' }
            ],
            duration: '4 semaines',
            year: '2023'
        },
        'SAE 1.3': {
            icon: '📡',
            category: 'SAE 1.3 - Semestre 1',
            title: 'Découvrir un dispositif de transmission',
            description: 'Étude des supports et dispositifs de transmission des télécommunications. Analyse des caractéristiques physiques et des performances des différents médias de transmission.',
            objectives: [
                'Caractériser les supports de transmission',
                'Mesurer les paramètres de qualité',
                'Analyser les signaux transmis',
                'Comparer les technologies de transmission',
                'Utiliser les instruments de mesure'
            ],
            technologies: ['Fibre optique', 'Ondes radio', 'Oscilloscope', 'OTDR', 'Analyseur de spectre'],
            deliverables: [
                { icon: '📈', name: 'Mesures et analyses' },
                { icon: '📊', name: 'Rapport de caractérisation' },
                { icon: '🔬', name: 'Protocoles de test' },
                { icon: '📋', name: 'Comparatif technologies' }
            ],
            competences: [
                { title: 'Créer des outils et applications informatiques', desc: 'Outils de mesure et analyse' },
                { title: 'Connecter les entreprises et les usagers', desc: 'Technologies de transmission' }
            ],
            duration: '5 semaines',
            year: '2023'
        },
        'SAE 1.4': {
            icon: '🌍',
            category: 'SAE 1.4 - Semestre 1',
            title: 'Se présenter sur Internet',
            description: 'Création d\'un site web personnel pour présenter son parcours, ses compétences et ses projets. Focus sur les bonnes pratiques du développement web et l\'accessibilité.',
            objectives: [
                'Concevoir une interface web responsive',
                'Maîtriser HTML5, CSS3 et JavaScript',
                'Respecter les standards d\'accessibilité',
                'Optimiser pour le référencement (SEO)',
                'Déployer et maintenir un site web'
            ],
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Git'],
            deliverables: [
                { icon: '🌐', name: 'Site web personnel' },
                { icon: '📱', name: 'Version mobile' },
                { icon: '📋', name: 'Documentation technique' },
                { icon: '🎨', name: 'Maquettes et wireframes' }
            ],
            competences: [
                { title: 'Créer des outils et applications informatiques', desc: 'Développement web front-end' },
                { title: 'Connecter les entreprises et les usagers', desc: 'Présence numérique professionnelle' }
            ],
            duration: '6 semaines',
            year: '2023'
        },
        'SAE 1.5': {
            icon: '📊',
            category: 'SAE 1.5 - Semestre 1',
            title: 'Traiter des données',
            description: 'Collecte, traitement et analyse de données issues de systèmes informatiques et de réseaux. Utilisation d\'outils de programmation et de visualisation pour extraire des informations pertinentes.',
            objectives: [
                'Collecter et nettoyer des données',
                'Programmer des scripts d\'analyse',
                'Créer des visualisations pertinentes',
                'Interpréter les résultats statistiques',
                'Automatiser les traitements'
            ],
            technologies: ['Python', 'Pandas', 'Matplotlib', 'SQL', 'Jupyter'],
            deliverables: [
                { icon: '📈', name: 'Tableaux de bord' },
                { icon: '💻', name: 'Scripts d\'analyse' },
                { icon: '📊', name: 'Visualisations' },
                { icon: '📋', name: 'Rapport d\'analyse' }
            ],
            competences: [
                { title: 'Créer des outils et applications informatiques', desc: 'Programmation et analyse de données' },
                { title: 'Administrer les réseaux et l\'Internet', desc: 'Monitoring et métriques réseau' }
            ],
            duration: '4 semaines',
            year: '2023'
        },
        'SAE 2.1': {
            icon: '🏢',
            category: 'SAE 2.1 - Semestre 2',
            title: 'Construire un réseau informatique pour une petite structure',
            description: 'Conception et déploiement d\'une infrastructure réseau complète pour une PME. Projet intégrant sécurité, performance et évolutivité.',
            objectives: [
                'Analyser les besoins réseau d\'une entreprise',
                'Concevoir une architecture réseau adaptée',
                'Configurer les équipements actifs',
                'Implémenter la sécurité réseau',
                'Documenter et former les utilisateurs'
            ],
            technologies: ['Cisco IOS', 'VLAN', 'DHCP/DNS', 'Firewall', 'QoS'],
            deliverables: [
                { icon: '🏗️', name: 'Architecture réseau' },
                { icon: '⚙️', name: 'Configurations équipements' },
                { icon: '🔒', name: 'Politique de sécurité' },
                { icon: '📚', name: 'Documentation utilisateur' }
            ],
            competences: [
                { title: 'Administrer les réseaux et l\'Internet', desc: 'Conception et administration réseau' },
                { title: 'Connecter les entreprises et les usagers', desc: 'Solutions de connectivité entreprise' }
            ],
            duration: '8 semaines',
            year: '2024'
        },
        'SAE 2.2': {
            icon: '📈',
            category: 'SAE 2.2 - Semestre 2',
            title: 'Mesurer et caractériser un signal ou un système',
            description: 'Analyse approfondie des signaux et systèmes de télécommunications. Utilisation d\'équipements de mesure professionnels pour caractériser les performances.',
            objectives: [
                'Maîtriser les instruments de mesure',
                'Analyser les caractéristiques spectrales',
                'Mesurer les paramètres de qualité',
                'Valider les performances théoriques',
                'Rédiger des protocoles de test'
            ],
            technologies: ['Analyseur de spectre', 'MATLAB', 'FFT', 'Filtrage', 'Oscilloscope'],
            deliverables: [
                { icon: '📏', name: 'Protocoles de mesure' },
                { icon: '📊', name: 'Analyses spectrales' },
                { icon: '🔬', name: 'Rapports de caractérisation' },
                { icon: '📈', name: 'Graphiques et simulations' }
            ],
            competences: [
                { title: 'Connecter les entreprises et les usagers', desc: 'Optimisation des transmissions' },
                { title: 'Créer des outils et applications informatiques', desc: 'Outils de simulation et mesure' }
            ],
            duration: '6 semaines',
            year: '2024'
        },
        'SAE 2.3': {
            icon: '💼',
            category: 'SAE 2.3 - Semestre 2',
            title: 'Mettre en place une solution informatique pour l\'entreprise',
            description: 'Déploiement d\'une solution informatique globale incluant serveurs, services métier et supervision. Gestion complète d\'un projet informatique.',
            objectives: [
                'Gérer un projet informatique complet',
                'Déployer des services d\'entreprise',
                'Configurer la supervision et monitoring',
                'Assurer la continuité de service',
                'Former et accompagner les utilisateurs'
            ],
            technologies: ['Windows Server', 'Linux', 'Active Directory', 'VMware', 'Nagios'],
            deliverables: [
                { icon: '🖥️', name: 'Infrastructure serveurs' },
                { icon: '👥', name: 'Services utilisateurs' },
                { icon: '📊', name: 'Supervision système' },
                { icon: '📋', name: 'Plan de continuité' }
            ],
            competences: [
                { title: 'Administrer les réseaux et l\'Internet', desc: 'Administration systèmes et services' },
                { title: 'Créer des outils et applications informatiques', desc: 'Solutions métier sur mesure' }
            ],
            duration: '10 semaines',
            year: '2024'
        },
        'SAE 2.4': {
            icon: '🎯',
            category: 'SAE 2.4 - Semestre 2',
            title: 'Projet intégratif',
            description: 'Projet de synthèse mobilisant l\'ensemble des compétences acquises. Réalisation d\'un projet d\'envergure en équipe avec livrables professionnels.',
            objectives: [
                'Intégrer toutes les compétences RT',
                'Gérer un projet en équipe',
                'Produire des livrables professionnels',
                'Présenter et défendre son travail',
                'Respecter les contraintes temporelles'
            ],
            technologies: ['Architecture réseau', 'Gestion de projet', 'Sécurité', 'Documentation', 'Présentation'],
            deliverables: [
                { icon: '🏗️', name: 'Solution technique complète' },
                { icon: '📊', name: 'Gestion de projet' },
                { icon: '📋', name: 'Documentation technique' },
                { icon: '🎤', name: 'Soutenance finale' }
            ],
            competences: [
                { title: 'Administrer les réseaux et l\'Internet', desc: 'Maîtrise globale des réseaux' },
                { title: 'Connecter les entreprises et les usagers', desc: 'Solutions de connectivité avancées' },
                { title: 'Créer des outils et applications informatiques', desc: 'Développement de solutions sur mesure' }
            ],
            duration: '12 semaines',
            year: '2024'
        }
    };

    // Gestion des clics sur les cartes SAE
    document.querySelectorAll('.project-item').forEach(item => {
        item.addEventListener('click', function(e) {
            // Ne pas ouvrir le modal si on clique sur un lien dans l'overlay
            if (e.target.closest('.project-overlay')) {
                return;
            }
            
            const title = this.querySelector('h3').textContent;
            const saeKey = title;
            
            if (saeData[saeKey]) {
                openModal(saeData[saeKey]);
            }
        });
    });
    
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter projects
            filterProjects(filter);
        });
    });
    
    function filterProjects(filter) {
        projectItems.forEach(item => {
            const categories = item.getAttribute('data-category').split(' ');
            
            if (filter === 'all' || categories.includes(filter)) {
                item.classList.remove('hidden');
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, Math.random() * 200);
            } else {
                item.classList.add('hidden');
                setTimeout(() => {
                    item.style.display = 'none';
                }, 400);
            }
        });
    }
    
    // Project links click handlers (pour les liens dans l'overlay)
    document.querySelectorAll('.project-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation(); // Empêcher l'ouverture du modal
            
            const linkText = this.textContent.trim();
            const saeNumber = this.closest('.project-item').querySelector('.project-category').textContent;
            
            if (linkText.includes('Voir le rapport')) {
                showNotification(`📋 Rapport de ${saeNumber} non disponible publiquement`, 'info');
            } else if (linkText.includes('Code source') || linkText.includes('Configuration') || linkText.includes('Scripts')) {
                showNotification(`💻 Fichiers techniques de ${saeNumber} - Accès restreint`, 'warning');
            } else if (linkText.includes('Guide sécurité') || linkText.includes('Politique sécurité')) {
                showNotification(`🔒 Document de sécurité confidentiel`, 'warning');
            } else if (linkText.includes('Schémas réseau') || linkText.includes('Topologie')) {
                showNotification(`🌐 Schémas réseau - Documentation technique`, 'info');
            } else if (linkText.includes('Voir le site')) {
                showNotification(`🌍 Site web SAE 1.4 - Lien vers votre portfolio actuel`, 'success');
            } else if (linkText.includes('Mesures pratiques') || linkText.includes('Analyses données')) {
                showNotification(`📊 Données et mesures - Propriété académique`, 'info');
            } else {
                showNotification(`📁 Document "${linkText}" - Accès sur demande`, 'info');
            }
        });
    });
    
    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <span>${message}</span>
                <button onclick="this.parentElement.parentElement.remove()" style="
                    background: none; 
                    border: none; 
                    color: white; 
                    cursor: pointer; 
                    font-size: 18px;
                    padding: 0;
                    margin-left: auto;
                ">×</button>
            </div>
        `;
        
        let bgColor = 'var(--gradient)';
        if (type === 'warning') bgColor = 'linear-gradient(135deg, #ff9500, #ff6b00)';
        if (type === 'success') bgColor = 'linear-gradient(135deg, #00ff88, #00cc66)';
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            background: ${bgColor};
            color: white;
            border-radius: 10px;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 350px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            cursor: pointer;
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    if (notification.parentElement) {
                        notification.remove();
                    }
                }, 300);
            }
        }, 5000);
        
        notification.addEventListener('click', function() {
            this.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (this.parentElement) {
                    this.remove();
                }
            }, 300);
        });
    }

    // Scroll animations pour les cartes
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const projectObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    projectItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s ease';
        projectObserver.observe(item);
    });

    // Enhanced hover effects pour les cartes
    projectItems.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
    });

    // Smooth reveal animation pour hero section
    const heroContent = document.querySelector('.projects-hero .hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
});

// Fonctions pour le modal
function openModal(saeInfo) {
    const modal = document.getElementById('saeModal');
    
    // Remplir les informations
    document.getElementById('modalIcon').textContent = saeInfo.icon;
    document.getElementById('modalCategory').textContent = saeInfo.category;
    document.getElementById('modalTitle').textContent = saeInfo.title;
    document.getElementById('modalDescription').textContent = saeInfo.description;
    
    // Objectifs
    const objectivesList = document.getElementById('modalObjectives');
    objectivesList.innerHTML = saeInfo.objectives.map(obj => `<li>${obj}</li>`).join('');
    
    // Technologies
    const techContainer = document.getElementById('modalTech');
    techContainer.innerHTML = saeInfo.technologies.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');
    
    // Livrables
    const deliverablesContainer = document.getElementById('modalDeliverables');
    deliverablesContainer.innerHTML = saeInfo.deliverables.map(deliverable => 
        `<div class="deliverable-item">
            <span>${deliverable.icon}</span>
            <div>${deliverable.name}</div>
        </div>`
    ).join('');
    
    // Compétences
    const competencesContainer = document.getElementById('modalCompetences');
    competencesContainer.innerHTML = saeInfo.competences.map(comp => 
        `<div class="competence-item">
            <h4>${comp.title}</h4>
            <p>${comp.desc}</p>
        </div>`
    ).join('');
    
    // Stats
    const statsContainer = document.getElementById('modalStats');
    statsContainer.innerHTML = `
        <div class="modal-stat">
            <span class="modal-stat-number">${saeInfo.duration.split(' ')[0]}</span>
            <span class="modal-stat-label">Semaines</span>
        </div>
        <div class="modal-stat">
            <span class="modal-stat-number">${saeInfo.year}</span>
            <span class="modal-stat-label">Année</span>
        </div>
        <div class="modal-stat">
            <span class="modal-stat-number">${saeInfo.technologies.length}</span>
            <span class="modal-stat-label">Technologies</span>
        </div>
        <div class="modal-stat">
            <span class="modal-stat-number">${saeInfo.deliverables.length}</span>
            <span class="modal-stat-label">Livrables</span>
        </div>
    `;
    
    // Afficher le modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('saeModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Fermer le modal en cliquant en dehors
document.getElementById('saeModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Fermer le modal avec Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Fonctions utilitaires
function addProject(projectData) {
    const projectsContainer = document.querySelector('.projects-container');
    if (!projectsContainer) return;
    
    const projectHTML = `
        <div class="project-item" data-category="${projectData.category}">
            <div class="project-image">
                <div class="project-overlay">
                    <div class="project-links">
                        <a href="${projectData.demoLink || '#'}" class="project-link">
                            <span>👁️</span> Voir le projet
                        </a>
                        <a href="${projectData.codeLink || '#'}" class="project-link">
                            <span>💻</span> Code source
                        </a>
                    </div>
                </div>
                <div class="project-placeholder">${projectData.icon || '🚀'}</div>
            </div>
            <div class="project-content">
                <div class="project-category">${projectData.categoryLabel}</div>
                <h3>${projectData.title}</h3>
                <p>${projectData.description}</p>
                <div class="project-tech">
                    ${projectData.technologies.map(tech => 
                        `<span class="tech-tag">${tech}</span>`
                    ).join('')}
                </div>
                <div class="project-stats">
                    <div class="stat">
                        <span class="stat-number">${projectData.duration}</span>
                        <span class="stat-label">semaines</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">${projectData.year}</span>
                        <span class="stat-label">année</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    projectsContainer.insertAdjacentHTML('beforeend', projectHTML);
}

function getProjectStats() {
    const projects = document.querySelectorAll('.project-item');
    const stats = {
        total: projects.length,
        categories: {},
        technologies: {}
    };
    
    projects.forEach(project => {
        const categories = project.getAttribute('data-category').split(' ');
        const techs = project.querySelectorAll('.tech-tag');
        
        categories.forEach(category => {
            stats.categories[category] = (stats.categories[category] || 0) + 1;
        });
        
        techs.forEach(tech => {
            const techName = tech.textContent;
            stats.technologies[techName] = (stats.technologies[techName] || 0) + 1;
        });
    });
    
    return stats;
}// Projects page specific JavaScript

document.addEventListener('DOMContentLoaded', function() {
    
    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter projects
            filterProjects(filter);
        });
    });
    
    function filterProjects(filter) {
        projectItems.forEach(item => {
            const category = item.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                item.classList.remove('hidden');
                item.style.display = 'block';
                // Add animation delay for stagger effect
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, Math.random() * 200);
            } else {
                item.classList.add('hidden');
                setTimeout(() => {
                    item.style.display = 'none';
                }, 400);
            }
        });
    }
    
    // Search functionality (optional enhancement)
    function addSearchFunctionality() {
        const searchContainer = document.querySelector('.filter-container');
        if (searchContainer && !document.querySelector('.search-input')) {
            const searchInput = document.createElement('input');
            searchInput.type = 'text';
            searchInput.placeholder = 'Rechercher un projet...';
            searchInput.className = 'search-input';
            searchInput.style.cssText = `
                margin-top: 1rem;
                padding: 0.75rem 1rem;
                border-radius: 25px;
                border: 2px solid var(--primary-color);
                background: var(--bg-dark);
                color: var(--text-light);
                width: 300px;
                max-width: 100%;
            `;
            
            searchContainer.appendChild(searchInput);
            
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                
                projectItems.forEach(item => {
                    const title = item.querySelector('h3').textContent.toLowerCase();
                    const description = item.querySelector('p').textContent.toLowerCase();
                    const techs = Array.from(item.querySelectorAll('.tech-tag'))
                        .map(tag => tag.textContent.toLowerCase())
                        .join(' ');
                    
                    if (title.includes(searchTerm) || 
                        description.includes(searchTerm) || 
                        techs.includes(searchTerm)) {
                        item.style.display = 'block';
                        item.classList.remove('hidden');
                    } else {
                        item.style.display = 'none';
                        item.classList.add('hidden');
                    }
                });
            });
        }
    }
    
    // Add search functionality
    addSearchFunctionality();
    
    // Project item hover effects
    projectItems.forEach(item => {
        const overlay = item.querySelector('.project-overlay');
        const links = item.querySelectorAll('.project-link');
        
        item.addEventListener('mouseenter', function() {
            links.forEach((link, index) => {
                setTimeout(() => {
                    link.style.transform = 'translateY(0) scale(1)';
                    link.style.opacity = '1';
                }, index * 100);
            });
        });
        
        item.addEventListener('mouseleave', function() {
            links.forEach(link => {
                link.style.transform = 'translateY(20px) scale(0.9)';
                link.style.opacity = '0.8';
            });
        });
        
        // Initialize link styles
        links.forEach(link => {
            link.style.transform = 'translateY(20px) scale(0.9)';
            link.style.opacity = '0.8';
            link.style.transition = 'all 0.3s ease';
        });
    });
    
    // Scroll animations for project items
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const projectObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all project items
    projectItems.forEach(item => {
        // Set initial state
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s ease';
        
        projectObserver.observe(item);
    });
    
    // Enhanced project card 3D tilt effect
    projectItems.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
        });
    });
    
    // Project statistics counter animation
    function animateCounters() {
        const stats = document.querySelectorAll('.stat-number');
        
        stats.forEach(stat => {
            const finalValue = stat.textContent;
            const isYear = finalValue.includes('20'); // Check if it's a year
            
            if (!isYear) {
                let currentValue = 0;
                const increment = finalValue / 20;
                
                const counter = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= finalValue) {
                        stat.textContent = finalValue;
                        clearInterval(counter);
                    } else {
                        stat.textContent = Math.floor(currentValue);
                    }
                }, 50);
            }
        });
    }
    
    // Trigger counter animation when stats section is visible
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const firstProject = document.querySelector('.project-item');
    if (firstProject) {
        statsObserver.observe(firstProject);
    }
    
    // Dynamic project loading (simulation)
    function loadMoreProjects() {
        const loadButton = document.createElement('button');
        loadButton.textContent = 'Charger plus de projets';
        loadButton.className = 'cta-button';
        loadButton.style.cssText = `
            margin: 2rem auto;
            display: block;
        `;
        
        const projectsSection = document.querySelector('.projects-section');
        if (projectsSection && projectItems.length >= 6) {
            projectsSection.appendChild(loadButton);
            
            loadButton.addEventListener('click', function() {
                // Simulate loading more projects
                this.textContent = 'Chargement...';
                this.disabled = true;
                
                setTimeout(() => {
                    this.textContent = 'Tous les projets sont affichés';
                    this.style.opacity = '0.6';
                }, 1500);
            });
        }
    }
    
    // Load more button functionality
    loadMoreProjects();
    
    // Project links click handlers
    document.querySelectorAll('.project-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const linkText = this.textContent.trim();
            const projectTitle = this.closest('.project-item').querySelector('h3').textContent;
            
            if (linkText.includes('Voir le projet')) {
                // Simulate opening project demo
                showNotification(`Ouverture du projet: ${projectTitle}`, 'info');
            } else if (linkText.includes('Code source')) {
                // Simulate opening GitHub
                showNotification(`Ouverture du code source pour: ${projectTitle}`, 'success');
            }
        });
    });
    
    // Notification system
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <span>${message}</span>
                <button onclick="this.parentElement.parentElement.remove()" style="
                    background: none; 
                    border: none; 
                    color: white; 
                    cursor: pointer; 
                    font-size: 18px;
                    padding: 0;
                    margin-left: auto;
                ">×</button>
            </div>
        `;
        
        let bgColor = 'var(--gradient)';
        if (type === 'warning') bgColor = 'linear-gradient(135deg, #ff9500, #ff6b00)';
        if (type === 'success') bgColor = 'linear-gradient(135deg, #00ff88, #00cc66)';
        
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            background: ${bgColor};
            color: white;
            border-radius: 10px;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 350px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            cursor: pointer;
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Auto remove after delay
        setTimeout(() => {
            if (notification.parentElement) {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => {
                    if (notification.parentElement) {
                        notification.remove();
                    }
                }, 300);
            }
        }, 5000);
        
        // Remove on click
        notification.addEventListener('click', function() {
            this.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (this.parentElement) {
                    this.remove();
                }
            }, 300);
        });
    }
    
    // Keyboard navigation for filters
    document.addEventListener('keydown', function(e) {
        if (e.key >= '1' && e.key <= '5') {
            const filterIndex = parseInt(e.key) - 1;
            const filterButton = filterButtons[filterIndex];
            if (filterButton) {
                filterButton.click();
            }
        }
    });
    
    // Project category distribution chart (optional enhancement)
    function showCategoryStats() {
        const categories = {};
        projectItems.forEach(item => {
            const category = item.getAttribute('data-category');
            categories[category] = (categories[category] || 0) + 1;
        });
        
        console.log('Distribution des projets par catégorie:', categories);
    }
    
    showCategoryStats();
    
    // Smooth reveal animation for hero section
    const heroContent = document.querySelector('.projects-hero .hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
    
    // Filter buttons hover effect enhancement
    filterButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(0) scale(1)';
            }
        });
    });
    
    // Performance optimization: Debounce search input
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
    
    // Apply debouncing to search if it exists
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        const debouncedSearch = debounce(function(e) {
            // Search logic already implemented above
        }, 300);
        
        searchInput.addEventListener('input', debouncedSearch);
    }
    
});

// Additional utility functions for projects page

// Export function to add new project dynamically
function addProject(projectData) {
    const projectsContainer = document.querySelector('.projects-container');
    if (!projectsContainer) return;
    
    const projectHTML = `
        <div class="project-item" data-category="${projectData.category}">
            <div class="project-image">
                <div class="project-overlay">
                    <div class="project-links">
                        <a href="${projectData.demoLink || '#'}" class="project-link">
                            <span>👁️</span> Voir le projet
                        </a>
                        <a href="${projectData.codeLink || '#'}" class="project-link">
                            <span>💻</span> Code source
                        </a>
                    </div>
                </div>
                <div class="project-placeholder">${projectData.icon || '🚀'}</div>
            </div>
            <div class="project-content">
                <div class="project-category">${projectData.categoryLabel}</div>
                <h3>${projectData.title}</h3>
                <p>${projectData.description}</p>
                <div class="project-tech">
                    ${projectData.technologies.map(tech => 
                        `<span class="tech-tag">${tech}</span>`
                    ).join('')}
                </div>
                <div class="project-stats">
                    <div class="stat">
                        <span class="stat-number">${projectData.duration}</span>
                        <span class="stat-label">mois</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">${projectData.year}</span>
                        <span class="stat-label">année</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    projectsContainer.insertAdjacentHTML('beforeend', projectHTML);
}

// Function to get project statistics
function getProjectStats() {
    const projects = document.querySelectorAll('.project-item');
    const stats = {
        total: projects.length,
        categories: {},
        technologies: {}
    };
    
    projects.forEach(project => {
        const category = project.getAttribute('data-category');
        const techs = project.querySelectorAll('.tech-tag');
        
        stats.categories[category] = (stats.categories[category] || 0) + 1;
        
        techs.forEach(tech => {
            const techName = tech.textContent;
            stats.technologies[techName] = (stats.technologies[techName] || 0) + 1;
        });
    });
    
    return stats;
}