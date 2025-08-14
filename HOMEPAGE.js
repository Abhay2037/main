// --- Scroll Reveal Functionality ---
function reveal() {
    var reveals = document.querySelectorAll('.reveal, .reveal-delay-1');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150; // The distance from the bottom of the viewport
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

// --- Navbar Scroll Functionality ---
const navbar = document.querySelector('.navbar');

function handleNavbarScroll() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// --- Event Listeners ---
window.addEventListener('scroll', reveal);
window.addEventListener('scroll', handleNavbarScroll);

// Initial call to reveal elements already in view
reveal();
handleNavbarScroll();