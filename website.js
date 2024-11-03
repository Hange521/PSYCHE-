document.addEventListener("DOMContentLoaded", function () {
    const heroText = document.getElementById('hero-text');
    const heroSection = document.getElementById('hero-section');

    let position = -200; // Starting position of the text
    const speed = 2; // Speed of the text movement

    function animateText() {
        // Update the position
        position += speed;

        // If the text moves out of view, reset it to the left
        if (position > heroSection.clientWidth) {
            position = -200; // Reset to the left side
        }

        // Move the text to the new position
        heroText.style.transform = `translateX(${position}px)`;

        // Request the next animation frame
        requestAnimationFrame(animateText);
    }

    // Start the animation
    animateText();
});


document.querySelector('.menu-toggle').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active'); // Toggle the 'active' class
});
