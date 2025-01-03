//Dot button



function initSlider(sliderId, intervalTime) {
    const slider = document.getElementById(sliderId);
    const slides = slider.querySelector('.slides');
    const totalSlides = slides.children.length;
    let currentIndex = 0;

    const dotsContainer = slider.querySelector('.dots');

    // Create dots dynamically based on the number of slides
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active'); // Make the first dot active initially
        dotsContainer.appendChild(dot);
    }

    const dots = dotsContainer.querySelectorAll('.dot');

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        slides.style.transform = `translateX(-${100 * currentIndex}%)`;
        updateDots();
    }

    // Automatically move to the next slide
    setInterval(showNextSlide, intervalTime);

    // Optional: Add manual navigation via dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            slides.style.transform = `translateX(-${100 * currentIndex}%)`;
            updateDots();
        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    initSlider('slider1', 5000); // For the first slider with 3 images
    initSlider('slider2', 5000); // For the second slider with 6 images
    initSlider('slider3', 5000); // For the second slider with 6 images
});




//star button
document.addEventListener("DOMContentLoaded", function () {
    // Helper function to handle slide change
    function changeSlide(slides, stars, currentIndex, newIndex) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(-${newIndex * 100}%)`;
        });

        stars.forEach((star, i) => {
            if (i === newIndex) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });

        return newIndex;
    }

    // Initialize slideshow logic
    function initializeSlideshow(slidesClass, starsClass, prevButtonId, nextButtonId) {
        const slides = document.querySelectorAll(`.${slidesClass}`);
        const stars = document.querySelectorAll(`.${starsClass}`);
        const prevButton = document.querySelector(`#${prevButtonId}`);
        const nextButton = document.querySelector(`#${nextButtonId}`);

        if (slides.length === 0 || stars.length === 0) return;

        let currentIndex = 0;

        // Event listeners for buttons
        if (prevButton) {
            prevButton.addEventListener("click", () => {
                const newIndex = (currentIndex - 1 + slides.length) % slides.length;
                currentIndex = changeSlide(slides, stars, currentIndex, newIndex);
            });
        }

        if (nextButton) {
            nextButton.addEventListener("click", () => {
                const newIndex = (currentIndex + 1) % slides.length;
                currentIndex = changeSlide(slides, stars, currentIndex, newIndex);
            });
        }

        // Auto-slide every 10 seconds
        setInterval(() => {
            const newIndex = (currentIndex + 1) % slides.length;
            currentIndex = changeSlide(slides, stars, currentIndex, newIndex);
        }, 10000);
    }

    // Initialize each slideshow
    initializeSlideshow('slide1', 'star1', 'pro-prev1', 'pro-next1');
    initializeSlideshow('slide2', 'star2', 'pro-prev2', 'pro-next2');
    initializeSlideshow('slide3', 'star3', 'pro-prev3', 'pro-next3');
});



//scroll button


document.getElementById('scrollDownBtn').addEventListener('click', function () {
    const slideshow2 = document.querySelector('.slideshow1');
    slideshow2.scrollIntoView({ behavior: "smooth" });
});
document.getElementById('scrollDownBtn1').addEventListener('click', function () {
    const slideshow2 = document.querySelector('.slideshow2');
    slideshow2.scrollIntoView({ behavior: "smooth" });
});
document.getElementById('scrollDownBtn2').addEventListener('click', function () {
    const slideshow2 = document.querySelector('.slideshow3');
    slideshow2.scrollIntoView({ behavior: "smooth" });
});

// Get references for "pro" container and buttons
const proContainer = document.getElementById('pro');
const previousProButton = document.getElementById('previous2');
const nextProButton = document.getElementById('next2');

// Function to determine scroll distance based on screen size
function getScrollDistance() {
    if (window.matchMedia('(max-width: 758px)').matches) {
        return 360; // Mobile scroll distance
    }
    return 630; // Default scroll distance for desktop
}

// Scroll left when "Previous" button is clicked
previousProButton.addEventListener('click', () => {
    const scrollDistance = getScrollDistance();
    proContainer.scrollBy({ left: -scrollDistance, behavior: 'smooth' });
});

// Scroll right when "Next" button is clicked
nextProButton.addEventListener('click', () => {
    const scrollDistance = getScrollDistance();
    proContainer.scrollBy({ left: scrollDistance, behavior: 'smooth' });
});
