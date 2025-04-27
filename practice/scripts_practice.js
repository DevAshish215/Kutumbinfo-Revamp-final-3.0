// Select all the .counter elements
const counters = document.querySelectorAll('.counter');
const counterSection = document.querySelector('.counter-section');

// Create an IntersectionObserver to detect when the counter section comes into view
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Start the counter animation when the section is in view
            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;

                    const increment = Math.max(1, target / 120); // Ensure minimum increment

                    if (count < target) {
                        counter.innerText = Math.min(Math.ceil(count + increment), target);
                        setTimeout(updateCount, 30); // Adjust speed of animation
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
            });

            // Stop observing once the animation starts
            counterObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5 // Start animation when 50% of the section is in view
});

// Observe the counter section
counterObserver.observe(counterSection);

// Select all the .we-are-subsection elements
const weAreSubsections = document.querySelectorAll('.we-are-subsection');

// Create an IntersectionObserver to detect when the subsections come into view
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the 'show' class to trigger the slide-up animation
            entry.target.classList.add('show');
            // Stop observing the element after animation is triggered
            sectionObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5 // Trigger when 50% of the subsection is in view
});

// Observe each .we-are-subsection
weAreSubsections.forEach(subsection => {
    sectionObserver.observe(subsection);
});

        const wrapper = document.querySelector('.testimonials-wrapper');
        const items = document.querySelectorAll('.testimonial-item');
        const totalItems = items.length;
        const visibleItems = 4; // Number of testimonials visible at a time
        let index = 0;

        function rotateTestimonials() {
            index++;

            // Smoothly slide to the next set of testimonials
            wrapper.style.transition = 'transform 1s ease';
            wrapper.style.transform = `translateX(-${index * (100 / visibleItems)}%)`;

            // When the last set of testimonials is reached, reset the position and continue seamlessly
            if (index >= totalItems - visibleItems) {
                setTimeout(() => {
                    wrapper.style.transition = 'none';
                    wrapper.style.transform = 'translateX(0)';
                    index = 0;
                }, 1000); // Match the transition duration
            }
        }

        setInterval(rotateTestimonials, 3000); // Rotate every 3 seconds


//Navbar

        const menuToggle = document.querySelector('.menu-toggle');
        const navbar = document.querySelector('.navbar');
        
        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('show');
            menuToggle.classList.toggle('open'); // Toggle "X" state
        });
        
        


        document.querySelectorAll('.navbar .dropdown > a').forEach(dropdownLink => {
            dropdownLink.addEventListener('click', function (e) {
                e.preventDefault();
                const parentDropdown = this.parentElement;
        
                // Toggle the current dropdown
                parentDropdown.classList.toggle('active');
        
                // Close other dropdowns
                document.querySelectorAll('.navbar .dropdown').forEach(dropdown => {
                    if (dropdown !== parentDropdown) {
                        dropdown.classList.remove('active');
                    }
                });
            });
        });

        
        