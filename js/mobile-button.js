// Get elements
const menuIcon = document.getElementById('menu-icon');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('close-btn');
const skipbtn = document.getElementById('skip');

// Open the menu
menuIcon.addEventListener('click', () => {
    mobileMenu.classList.add('active'); // Slide menu into view
});
skipbtn.addEventListener('click', () => {
    mobileMenu.classList.add('active'); // Slide menu into view
});

// Close the menu
closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active'); // Slide menu out of view
});

// Optional: Add navigation functionality for each button
document.getElementById('mobile-about-btn').addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    window.location.href = '#am';
});

document.getElementById('mobile-skills-btn').addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    window.location.href = '#skills';
});

document.getElementById('mobile-education-btn').addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    window.location.href = '#Education';
});

document.getElementById('mobile-projects-btn').addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    window.location.href = '#project';
});

document.getElementById('mobile-language-btn').addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    window.location.href = '#languages';
});

document.getElementById('mobile-experience-btn').addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    window.location.href = '#Experience';
});



//move to top
// Get the button element
const moveToTopBtn = document.getElementById('move-to-top');

// Show button after scrolling down
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) { // Show after scrolling 100px
        moveToTopBtn.style.display = 'flex';
    } else {
        moveToTopBtn.style.display = 'none';
    }
});

// Scroll to top when button is clicked
moveToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll effect
    });
});
