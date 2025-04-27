/**
 * Navigation helper functions
 * This file contains helper functions for navigation that will be used across all pages
 */

// Mobile menu functionality
function toggleMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    menuToggle.classList.toggle('open');
    navLinks.classList.toggle('show');
    body.classList.toggle('menu-open');
}

// Initialize mobile dropdown behavior
document.addEventListener('DOMContentLoaded', function() {
    // Set up dropdown toggles for mobile
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            // Only handle click for mobile view
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                const parentDropdown = this.closest('.dropdown');
                
                // Close other open dropdowns
                document.querySelectorAll('.dropdown.active').forEach(dropdown => {
                    if (dropdown !== parentDropdown) {
                        dropdown.classList.remove('active');
                        const toggleEl = dropdown.querySelector('.dropdown-toggle');
                        if (toggleEl) {
                            toggleEl.classList.remove('active');
                        }
                    }
                });
                
                // Toggle current dropdown
                parentDropdown.classList.toggle('active');
                this.classList.toggle('active');
            }
        });
    });
    
    // Make dropdown boxes clickable for their respective actions
    document.querySelectorAll('.dropdown-box').forEach(box => {
        const originalOnClick = box.getAttribute('onclick');
        
        if (originalOnClick) {
            box.addEventListener('click', function(e) {
                // Prevent event bubbling in mobile view
                if (window.innerWidth <= 768) {
                    e.stopPropagation();
                }
            });
        }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            const navLinks = document.querySelector('.nav-links');
            const menuToggle = document.querySelector('.menu-toggle');
            
            // Check if menu is open and click is outside
            if (navLinks && menuToggle && 
                navLinks.classList.contains('show') && 
                !navLinks.contains(e.target) && 
                !menuToggle.contains(e.target)) {
                toggleMobileMenu();
            }
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            // Reset mobile menu state when returning to desktop
            const menuToggle = document.querySelector('.menu-toggle');
            const navLinks = document.querySelector('.nav-links');
            const body = document.body;
            
            if (menuToggle && menuToggle.classList.contains('open')) {
                menuToggle.classList.remove('open');
                if (navLinks) navLinks.classList.remove('show');
                body.classList.remove('menu-open');
                
                // Reset active dropdowns
                document.querySelectorAll('.dropdown.active').forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
                document.querySelectorAll('.dropdown-toggle.active').forEach(toggle => {
                    toggle.classList.remove('active');
                });
            }
        }
    });
});

// Check for contact form navigation on page load
(function() {
    // This runs immediately when the script loads
    if (window.location.pathname.includes('/work_with_us.html') || 
        window.location.pathname.endsWith('/work_with_us.html')) {
        
        // Check if we should scroll to contact form (set by other pages)
        if (sessionStorage.getItem('scrollToContactForm') === 'true') {
            // Clear the flag
            sessionStorage.removeItem('scrollToContactForm');
            
            // We need to wait for the DOM to be fully loaded
            document.addEventListener('DOMContentLoaded', function() {
                // Give the page time to load
                setTimeout(function() {
                    // Find the contact form section
                    const contactForm = document.getElementById('contact-form');
                    if (contactForm) {
                        // Force it to be visible
                        contactForm.classList.add('active');
                        
                        // Make all internal elements visible
                        const formItems = contactForm.querySelectorAll('.reveal-item');
                        formItems.forEach(item => item.classList.add('active'));
                        
                        // Scroll to it
                        const headerHeight = document.querySelector('header') ? 
                            document.querySelector('header').offsetHeight : 0;
                        
                        window.scrollTo({
                            top: contactForm.offsetTop - headerHeight - 20,
                            behavior: 'auto'
                        });
                    }
                }, 300);
            });
        }
    }
})();

/**
 * Scrolls the window to the top
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'instant'
    });
}

/**
 * Navigation utility functions
 */
function getBasePath() {
    const path = window.location.pathname;
    if (path.includes('/Services/') || path.includes('/Expertise/') || path.includes('/Products/')) {
        return '../';
    }
    return './';
}

/**
 * Main navigation functions
 */
function handleHomeClick() {
    scrollToTop();
    window.location.href = getBasePath() + 'index.html';
}

function handleWhyKutumbinfoClick() {
    window.location.href = getBasePath() + 'why_kutumbinfo.html';
}

function handleWorkWithUsClick() {
    window.location.href = getBasePath() + 'work_with_us.html';
}

/**
 * Services navigation functions
 */
function handleWebDevelopmentClick() {
    scrollToTop();
    window.location.href = getBasePath() + 'Services/web_dev.html';
}

function handleMobileAppDevClick() {
    scrollToTop();
    window.location.href = getBasePath() + 'Services/mob_app.html';
}

function handleCustomSoftDevClick() {
    scrollToTop();
    window.location.href = getBasePath() + 'Services/custom_soft.html';
}

function handleUIUXDesignClick() {
    scrollToTop();
    window.location.href = getBasePath() + 'Services/ui_ux_design.html';
}

function handleAPIdevClick() {
    scrollToTop();
    window.location.href = getBasePath() + 'Services/api_dev.html';
}

function handleMaintainanceSupportClick() {
    scrollToTop();
    window.location.href = getBasePath() + 'Services/maintain_support.html';
}

/**
 * Expertise navigation functions
 */
function goToAngular() {
    scrollToTop();
    window.location.href = getBasePath() + 'Expertise/angular.html';
}

function goToReact() {
    scrollToTop();
    window.location.href = getBasePath() + 'Expertise/react.html';
}

function goToVuejs() {
    scrollToTop();
    window.location.href = getBasePath() + 'Expertise/vuejs.html';
}

function goToWordpress() {
    scrollToTop();
    window.location.href = getBasePath() + 'Expertise/wordpress.html';
}

function goToFlutter() {
    scrollToTop();
    window.location.href = getBasePath() + 'Expertise/flutter.html';
}

function goToJava() {
    scrollToTop();
    window.location.href = getBasePath() + 'Expertise/java.html';
}

function goToNodejs() {
    scrollToTop();
    window.location.href = getBasePath() + 'Expertise/nodejs.html';
}

function goToPhp() {
    scrollToTop();
    window.location.href = getBasePath() + 'Expertise/php.html';
}

/**
 * Products navigation functions
 */
function goToNonFintech() {
    scrollToTop();
    window.location.href = getBasePath() + 'Products/non-fintech.html';
}

function goToFintech() {
    scrollToTop();
    window.location.href = getBasePath() + 'Products/fintech.html';
}

/**
 * Additional helper functions for enhanced navigation
 * Used by the navbar.html and navbar_root.html fallbacks
 */
function getPath() {
    if (typeof getBasePath === 'function') {
        return getBasePath();
    }
    
    return window.location.pathname.includes('/Services/') || 
           window.location.pathname.includes('/Expertise/') || 
           window.location.pathname.includes('/Products/') ? '../' : './';
}

function navigate(section, target) {
    if (typeof scrollToTop === 'function') {
        scrollToTop();
    }
    window.location.href = getPath() + section + '/' + target + '.html';
}

/**
 * Expertise and product page mappings for dynamic function creation
 */
const expertisePages = {
    'Angular': 'angular',
    'React': 'react',
    'Vuejs': 'vuejs',
    'Wordpress': 'wordpress',
    'Flutter': 'flutter',
    'Java': 'java',
    'Nodejs': 'nodejs',
    'Php': 'php'
};

const productPages = {
    'NonFintech': 'non-fintech',
    'Fintech': 'fintech'
};

// Initialize navigation on page load
document.addEventListener('DOMContentLoaded', function() {
    // Fix logo path based on current page
    const logo = document.getElementById('navbar-logo');
    if (logo) {
        logo.src = getBasePath() + 'images/logo kutumbinfo13.png';
    }
    
    // Create fallback navigation functions dynamically if they don't exist
    // This ensures our navigation works even if a function isn't explicitly defined
    
    // Create expertise navigation functions if they don't exist
    Object.entries(expertisePages).forEach(([funcName, pageName]) => {
        const fullFuncName = 'goTo' + funcName;
        if (typeof window[fullFuncName] !== 'function') {
            window[fullFuncName] = function() {
                navigate('Expertise', pageName);
            };
        }
    });
    
    // Create product navigation functions if they don't exist
    Object.entries(productPages).forEach(([funcName, pageName]) => {
        const fullFuncName = 'goTo' + funcName;
        if (typeof window[fullFuncName] !== 'function') {
            window[fullFuncName] = function() {
                navigate('Products', pageName);
            };
        }
    });
}); 