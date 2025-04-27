/**
 * Navigation helper functions
 * Updated for mobile click-to-open dropdowns
 */

// Mobile menu open/close toggle
function toggleMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;

  console.log('Toggling mobile menu');
  menuToggle.classList.toggle('open');
  navbar.classList.toggle('show');
  navLinks.classList.toggle('show');
  body.classList.toggle('menu-open');
  console.log('Mobile menu toggled. Navbar show:', navbar.classList.contains('show'));
}

// Function to toggle dropdown directly from HTML
function toggleDropdown(element) {
  if (window.innerWidth <= 768) {
    const dropdown = element.closest('.dropdown');
    if (dropdown) {
      dropdown.classList.toggle('active');
      console.log('Dropdown toggled via direct function');
    }
  }
}

// Initialize after page loads
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM Content Loaded - Initializing navigation');

  // 1. Setup dropdown toggles for mobile
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
  console.log('Found dropdown toggles:', dropdownToggles.length);

  dropdownToggles.forEach(toggle => {
    console.log('Setting up click listener for:', toggle.textContent.trim());
    
    toggle.addEventListener('click', function(e) {
      console.log('Toggle clicked:', this.textContent.trim(), 'Window width:', window.innerWidth);
      
      if (window.innerWidth <= 768) {
        e.preventDefault();
        console.log('Dropdown toggle clicked on mobile');
        
        const parentDropdown = this.closest('.dropdown');
        console.log('Parent dropdown found:', parentDropdown ? 'Yes' : 'No');
        
        if (parentDropdown) {
          parentDropdown.classList.toggle('active');
          console.log('Active class toggled:', parentDropdown.classList.contains('active'));
          
          const dropdownContent = parentDropdown.querySelector('.dropdown-content');
          console.log('Dropdown content found:', dropdownContent ? 'Yes' : 'No');
          console.log('Dropdown content display:', dropdownContent ? getComputedStyle(dropdownContent).display : 'N/A');
        }
      }
    });
  });

  // 2. Setup menu close on outside click
  document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
      const navLinks = document.querySelector('.nav-links');
      const menuToggle = document.querySelector('.menu-toggle');

      if (navLinks && menuToggle && navLinks.classList.contains('show') &&
          !navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        console.log('Clicked outside menu - closing');
        toggleMobileMenu();
      }
    }
  });

  // 3. Reset state on window resize
  window.addEventListener('resize', function() {
    console.log('Window resized to width:', window.innerWidth);
    
    if (window.innerWidth > 768) {
      const menuToggle = document.querySelector('.menu-toggle');
      const navbar = document.querySelector('.navbar');
      const navLinks = document.querySelector('.nav-links');
      const body = document.body;

      if (menuToggle.classList.contains('open')) {
        menuToggle.classList.remove('open');
      }
      navbar.classList.remove('show');
      navLinks.classList.remove('show');
      body.classList.remove('menu-open');

      // Also remove active dropdowns
      document.querySelectorAll('.dropdown.active').forEach(dropdown => {
        dropdown.classList.remove('active');
      });
      console.log('Reset mobile menu state due to resize');
    }
  });

  console.log('Navigation initialization complete');
});

// Scroll to top (optional)
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'instant'
  });
}

// Base Path for navigation
function getBasePath() {
  const path = window.location.pathname;
  if (path.includes('/Services/') || path.includes('/Expertise/') || path.includes('/Products/')) {
    return '../';
  }
  return './';
}

// Navigation click functions
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

// Services navigation functions
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

// Expertise navigation functions
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

// Products navigation functions
function goToNonFintech() {
  scrollToTop();
  window.location.href = getBasePath() + 'Products/non_fintech.html';
}

function goToFintech() {
  scrollToTop();
  window.location.href = getBasePath() + 'Products/fintech.html';
}
