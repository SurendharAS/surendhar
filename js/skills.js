
document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll('.circle');
    const skillsBtn = document.getElementById('skill-btn');
    const mobileSkillsBtn = document.getElementById('mobile-skills-btn');
    const skillsSection = document.getElementById('skill');
    const mobileMenu = document.querySelector('.mobile-menu');

    function animateCircle(circle) {
        let percent = parseInt(circle.getAttribute('data-percent'));
        let start = 0;
        const duration = 1000;
        const increment = percent / (duration / 16); // Assuming 60 FPS

        function updateCircle() {
            start += increment;
            if (start >= percent) {
                start = percent;
            }

            // Determine the current color and proficiency level based on the percentage
            let currentColor = getColor(start);
            let levelText = getLevelText(start);

            // Update the circle's background as a conic-gradient with the current color
            circle.style.background = `conic-gradient(${currentColor} 0%, ${currentColor} ${start}%, #ddd ${start}%, #ddd 100%)`;
            circle.querySelector('span').textContent = levelText;

            if (start < percent) {
                requestAnimationFrame(updateCircle);
            }
        }

        updateCircle();
    }

    function getColor(percent) {
        if (percent <= 40) {
            return 'orange';
        } else if (percent <= 69) {
            return 'yellow';
        } else {
            return 'green';
        }
    }

    function getLevelText(percent) {
        if (percent <= 40) {
            return 'Beginner';
        } else if (percent <= 69) {
            return 'Intermediate';
        } else {
            return 'Advanced';
        }
    }

    // Function to scroll to the Skills section and trigger animation
    function scrollToSkills() {
        skillsSection.scrollIntoView({ behavior: 'smooth' });

        // Trigger animation for all circles
        circles.forEach(circle => {
            animateCircle(circle);
        });

        // Close the mobile menu if it’s open
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
        }
    }

    // Animate circles on hover
    circles.forEach(circle => {
        circle.addEventListener('mouseenter', function () {
            animateCircle(circle);
        });
    });

    // Scroll to Skills section and animate on button click
    skillsBtn.addEventListener('click', scrollToSkills);
    mobileSkillsBtn.addEventListener('click', scrollToSkills);

    // Animate circles when the page first loads
    circles.forEach(circle => {
        animateCircle(circle);
    });
});
document.getElementById("skill-btn").addEventListener("click", () => {
    // Scroll to the Skills section
    sections.skill.scrollIntoView({ behavior: "smooth" });

    // Trigger animation for all circles
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
        animateCircle(circle);
    });
});

//move up/down icon
const scrollContainer = document.getElementById('tech'); // Scrolling div
const scrollContainer1 = document.getElementById('pass1'); // Scrolling div
const moveDistance = 220; // Distance to scroll in pixels

document.getElementById('up-icon').addEventListener('click', () => {
    scrollContainer.scrollBy({ top: -moveDistance, behavior: 'smooth' }); // Scroll up
});

document.getElementById('up-icon1').addEventListener('click', () => {
    scrollContainer1.scrollBy({ top: -moveDistance, behavior: 'smooth' }); // Scroll up
});

document.getElementById('down-icon').addEventListener('click', () => {
    scrollContainer.scrollBy({ top: moveDistance, behavior: 'smooth' }); // Scroll down
});

document.getElementById('down-icon1').addEventListener('click', () => {
    scrollContainer1.scrollBy({ top: moveDistance, behavior: 'smooth' }); // Scroll down
});


