// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation to the hero button
const heroButton = document.querySelector('.hero-section .btn');
if (heroButton) {
    heroButton.addEventListener('mouseover', () => {
        heroButton.style.transform = 'translateY(-2px)';
    });
    heroButton.addEventListener('mouseout', () => {
        heroButton.style.transform = 'translateY(0)';
    });
}
