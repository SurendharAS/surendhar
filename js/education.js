
document.addEventListener("DOMContentLoaded", function () {
    const percentageCircles = document.querySelectorAll('.percentage-circle');
    const cgpaCircles = document.querySelectorAll('.cgpa-circle');

    // Animate percentage circle
    percentageCircles.forEach(circle => {
        animatePercentage(circle);
        circle.addEventListener('mouseenter', () => animatePercentage(circle));
    });

    // Animate CGPA circle
    cgpaCircles.forEach(circle => {
        animateCGPA(circle);
        circle.addEventListener('mouseenter', () => animateCGPA(circle));
    });

    function animatePercentage(circle) {
        const percent = parseFloat(circle.getAttribute('data-percent'));
        let start = 0;
        const duration = 1000;
        const increment = percent / (duration / 16); // Assuming 60 FPS

        function updateCircle() {
            start += increment;
            if (start >= percent) start = percent;

            const color = getPercentageColor(start);
            circle.style.background = `conic-gradient(${color} 0%, ${color} ${start}%, #ddd ${start}%, #ddd 100%)`;
            circle.querySelector('span').textContent = start.toFixed(2) + "%";

            if (start < percent) requestAnimationFrame(updateCircle);
        }

        updateCircle();
    }

    function animateCGPA(circle) {
        const cgpa = parseFloat(circle.getAttribute('data-cgpa'));
        let start = 0;
        const duration = 1000;
        const increment = cgpa / (duration / 16);

        function updateCircle() {
            start += increment;
            if (start >= cgpa) start = cgpa;

            const color = getCGPAColor(start);
            circle.style.background = `conic-gradient(${color} 0%, ${color} ${(start / 10) * 100}%, #ddd ${(start / 10) * 100}%, #ddd 100%)`;
            circle.querySelector('span').textContent = start.toFixed(2);

            if (start < cgpa) requestAnimationFrame(updateCircle);
        }

        updateCircle();
    }

    function getPercentageColor(percent) {
        if (percent <= 40.00) return 'red';
        if (percent <= 70.00) return 'yellow';
        return 'green';
    }

    function getCGPAColor(cgpa) {
        if (cgpa <= 4.99) return 'red';
        if (cgpa <= 6.99) return 'yellow';
        return 'green';
    }
});


// Get references to DOM elements
const detailsContainer = document.getElementById('details');
const previousButton = document.getElementById('previous1');
const nextButton = document.getElementById('next1');

// Define scroll distance
const scrollDistance = 290; // Pixels to scroll

// Scroll left when the "Previous" button is clicked
previousButton.addEventListener('click', () => {
    detailsContainer.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
});

// Scroll right when the "Next" button is clicked
nextButton.addEventListener('click', () => {
    detailsContainer.scrollBy({ left: scrollDistance, behavior: 'smooth' });
});

