// ============================================
// Jordan Gaming Arena - Main JavaScript
// ============================================

document. addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    initCounterAnimation();
    initParallaxEffects();
});

// ============================================
// NAVBAR FUNCTIONALITY
// ============================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('. nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList. add('scrolled');
        } else {
            navbar.classList. remove('scrolled');
        }
        
        // Update active nav link based on scroll position
        updateActiveNavLink();
    });
    
    // Nav link click handler
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('. nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks. forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.querySelector('.nav-links');
    const navButtons = document.querySelector('.nav-buttons');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navLinks. classList.toggle('active');
            navButtons.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        const links = navLinks.querySelectorAll('. nav-link');
        links.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle. classList.remove('active');
                navLinks.classList.remove('active');
                navButtons.classList. remove('active');
            });
        });
    }
}

// ============================================
// SMOOTH SCROLL
// ============================================
function initSmoothScroll() {
    const links = document. querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document. querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add staggered animation to children if needed
                const children = entry. target.querySelectorAll('. fade-in-child');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child. classList.add('visible');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animatedElements = document.querySelectorAll(
        '. about-card, .step-card, .feature-card, .competition-card, ' +
        '.testimonial-card, .news-card, .section-header, .about-tech, ' +
        '.newsletter-signup, .games-showcase, .sponsor-logo, .footer-section'
    );// ============================================
// Jordan Gaming Arena - Main JavaScript
// ============================================

document. addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initScrollAnimations();
    initCounterAnimation();
    initParallaxEffects();
});

// ============================================
// NAVBAR FUNCTIONALITY
// ============================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('. nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList. add('scrolled');
        } else {
            navbar.classList. remove('scrolled');
        }
        
        // Update active nav link based on scroll position
        updateActiveNavLink();
    });
    
    // Nav link click handler
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('. nav-link');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks. forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// ============================================
// MOBILE MENU
// ============================================
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.querySelector('.nav-links');
    const navButtons = document.querySelector('.nav-buttons');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navLinks. classList.toggle('active');
            navButtons.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        const links = navLinks.querySelectorAll('. nav-link');
        links.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle. classList.remove('active');
                navLinks.classList.remove('active');
                navButtons.classList. remove('active');
            });
        });
    }
}

// ============================================
// SMOOTH SCROLL
// ============================================
function initSmoothScroll() {
    const links = document. querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document. querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Add staggered animation to children if needed
                const children = entry. target.querySelectorAll('. fade-in-child');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child. classList.add('visible');
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animatedElements = document.querySelectorAll(
        '. about-card, .step-card, .feature-card, .competition-card, ' +
        '.testimonial-card, .news-card, .section-header, .about-tech, ' +
        '.newsletter-signup, .games-showcase, .sponsor-logo, .footer-section'
    );  animatedElements.forEach(el => observer.observe(el));
}}
            // ============================================
        // 3D PLANET SETUP WITH THREE.JS
        // ============================================
        
        const canvas = document.getElementById('planet-canvas');
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        
        renderer.setSize(canvas.clientWidth, canvas.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        
        camera.position.z = 5;

        // ============================================
        // CREATE GAMING PLANET
        // ============================================
        
        // Main planet
        const planetGeometry = new THREE.SphereGeometry(1.5, 64, 64);
        const planetMaterial = new THREE.MeshStandardMaterial({
            color: 0x1a1a2e,
            roughness: 0.7,
            metalness: 0.3,
            emissive: 0x8b5cf6,
            emissiveIntensity: 0.2
        });
        const planet = new THREE.Mesh(planetGeometry, planetMaterial);
        scene.add(planet);

        // Add surface details (craters/features)
        const detailGeometry = new THREE.SphereGeometry(0.1, 16, 16);
        const detailMaterial = new THREE.MeshStandardMaterial({
            color: 0x16213e,
            roughness: 0.8
        });
        
        for (let i = 0; i < 30; i++) {
            const detail = new THREE.Mesh(detailGeometry, detailMaterial);
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;
            const radius = 1.52;
            
            detail.position.x = radius * Math.sin(phi) * Math.cos(theta);
            detail.position.y = radius * Math.sin(phi) * Math.sin(theta);
            detail.position.z = radius * Math.cos(phi);
            detail.scale.set(
                Math.random() * 0.5 + 0.3,
                Math.random() * 0.5 + 0.3,
                Math.random() * 0.5 + 0.3
            );
            planet.add(detail);
        }

        // Glowing atmosphere
        const atmosphereGeometry = new THREE.SphereGeometry(1.65, 64, 64);
        const atmosphereMaterial = new THREE.ShaderMaterial({
            transparent: true,
            side: THREE.BackSide,
            vertexShader: `
                varying vec3 vNormal;
                void main() {
                    vNormal = normalize(normalMatrix * normal);
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                varying vec3 vNormal;
                void main() {
                    float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
                    gl_FragColor = vec4(0.54, 0.36, 0.96, 1.0) * intensity;
                }
            `
        });
        const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
        scene.add(atmosphere);

        // Orbital rings
        const ringGroup = new THREE.Group();
        
        for (let i = 0; i < 3; i++) {
            const ringGeometry = new THREE.TorusGeometry(2 + i * 0.3, 0.01, 16, 100);
            const ringMaterial = new THREE.MeshBasicMaterial({
                color: i === 0 ? 0x8b5cf6 : i === 1 ? 0xec4899 : 0x06b6d4,
                transparent: true,
                opacity: 0.4
            });
            const ring = new THREE.Mesh(ringGeometry, ringMaterial);
            ring.rotation.x = Math.PI / 2 + (i * 0.1);
            ring.rotation.y = i * 0.15;
            ringGroup.add(ring);
        }
        scene.add(ringGroup);

        // Particle system for stars/energy
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 1000;
        const positions = new Float32Array(particlesCount * 3);
        const colors = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i += 3) {
            const radius = 3 + Math.random() * 2;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;
            
            positions[i] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i + 2] = radius * Math.cos(phi);
            
            // Random colors between purple, pink, and cyan
            const colorChoice = Math.random();
            // Use theme colors: purple, pink, cyan
            if (colorChoice < 0.33) {
                // Primary Purple: #8b5cf6 (139, 92, 246)
                colors[i] = 139 / 255; colors[i + 1] = 92 / 255; colors[i + 2] = 246 / 255;
            } else if (colorChoice < 0.66) {
                // Primary Pink: #ec4899 (236, 72, 153)
                colors[i] = 236 / 255; colors[i + 1] = 72 / 255; colors[i + 2] = 153 / 255;
            } else {
                // Primary Cyan: #06b6d4 (6, 182, 212)
                colors[i] = 6 / 255; colors[i + 1] = 182 / 255; colors[i + 2] = 212 / 255;
            }
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.03,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });

        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particles);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(5, 3, 5);
        scene.add(directionalLight);

        const pointLight1 = new THREE.PointLight(0x8b5cf6, 1, 10);
        pointLight1.position.set(-3, 2, 3);
        scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0xec4899, 1, 10);
        pointLight2.position.set(3, -2, 3);
        scene.add(pointLight2);

        // ============================================
        // MOUSE INTERACTION
        // ============================================
        
        let mouseX = 0;
        let mouseY = 0;
        let targetRotationX = 0;
        let targetRotationY = 0;
        let isDragging = false;

        canvas.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;
            
            if (!isDragging) {
                targetRotationX = mouseY * 0.3;
                targetRotationY = mouseX * 0.3;
            }
        });

        canvas.addEventListener('mousedown', () => {
            isDragging = true;
        });

        canvas.addEventListener('mouseup', () => {
            isDragging = false;
        });

        canvas.addEventListener('mouseleave', () => {
            isDragging = false;
        });

        // Touch support
        let touchStartX = 0;
        let touchStartY = 0;

        canvas.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
            isDragging = true;
        });

        canvas.addEventListener('touchmove', (e) => {
            if (isDragging) {
                const deltaX = (e.touches[0].clientX - touchStartX) * 0.01;
                const deltaY = (e.touches[0].clientY - touchStartY) * 0.01;
                targetRotationY += deltaX;
                targetRotationX += deltaY;
                touchStartX = e.touches[0].clientX;
                touchStartY = e.touches[0].clientY;
            }
        });

        canvas.addEventListener('touchend', () => {
            isDragging = false;
        });

        // ============================================
        // ANIMATION LOOP
        // ============================================
        
        const clock = new THREE.Clock();

        function animate() {
            requestAnimationFrame(animate);
            
            const elapsedTime = clock.getElapsedTime();

            // Auto-rotate planet
            if (!isDragging) {
                planet.rotation.y += 0.002;
            } else {
                planet.rotation.y += (targetRotationY - planet.rotation.y) * 0.05;
                planet.rotation.x += (targetRotationX - planet.rotation.x) * 0.05;
            }

            // Rotate atmosphere slightly faster
            atmosphere.rotation.y += 0.003;

            // Rotate ring system
            ringGroup.rotation.y += 0.001;
            ringGroup.rotation.z = Math.sin(elapsedTime * 0.5) * 0.1;

            // Animate particles
            const particlePositions = particles.geometry.attributes.position.array;
            for (let i = 0; i < particlePositions.length; i += 3) {
                particlePositions[i + 1] += Math.sin(elapsedTime + i) * 0.001;
            }
            particles.geometry.attributes.position.needsUpdate = true;
            particles.rotation.y += 0.0005;

            // Pulse lights
            pointLight1.intensity = 1 + Math.sin(elapsedTime * 2) * 0.3;
            pointLight2.intensity = 1 + Math.cos(elapsedTime * 2) * 0.3;

            // Camera slight movement based on mouse
            if (!isDragging) {
                camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
                camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.05;
                camera.lookAt(scene.position);
            }

            renderer.render(scene, camera);
        }

        animate();

        // ============================================
        // RESPONSIVE HANDLING
        // ============================================
        
        window.addEventListener('resize', () => {
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            
            renderer.setSize(width, height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        });

        // ============================================
        // NAVBAR SCROLL EFFECT
        // ============================================
        
        const navbar = document.getElementById('navbar');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // ============================================
        // MOBILE MENU TOGGLE
        // ============================================
        
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const navLinks = document.querySelector('.nav-links');
        const navButtons = document.querySelector('.nav-buttons');
        
        if (mobileMenuToggle) {
            mobileMenuToggle.addEventListener('click', () => {
                mobileMenuToggle.classList.toggle('active');
                navLinks.classList.toggle('active');
                navButtons.classList.toggle('active');
            });
        }
