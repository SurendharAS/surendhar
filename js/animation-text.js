function animateText(element, sentence) {
    element.textContent = ''; // Clear initial content before starting animation

    const lines = sentence.split('|'); // Split by '|' for each line

    lines.forEach((line, lineIndex) => {
        Array.from(line).forEach((letter, letterIndex) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.classList.add('letter'); // Add letter class for animation
            span.style.animationDelay = `${(lineIndex * 1000) + (letterIndex * 100)}ms`; // Delay for each letter
            element.appendChild(span);
        });

        // Add a line break after each line, except the last one
        if (lineIndex < lines.length - 1) {
            element.appendChild(document.createElement('br'));
        }
    });
}

// Intersection Observer to detect when elements are in and out of view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const animatedText = entry.target.querySelector('.styled-text');
        const sentence = animatedText.getAttribute('data-sentence');

        if (entry.isIntersecting) {
            // Make the div visible and start animation
            entry.target.style.opacity = 1; // Make the div visible
            animateText(animatedText, sentence);
        } else {
            // Clear the text content when the element goes out of view
            animatedText.textContent = ''; // Clear the content completely
            entry.target.style.opacity = 0; // Hide the div again
        }
    });
}, { threshold: [0, 0.1] }); // Trigger when div becomes fully invisible (0) or 10% visible (0.1)

// Get all animation divs and set up observer
const animations = document.querySelectorAll('.animation');
animations.forEach((animationDiv) => {
    observer.observe(animationDiv);
});
