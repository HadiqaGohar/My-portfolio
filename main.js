
// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar'); // Corrected selector to '.navbar'

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll section active line
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
            });
            document.querySelector('header nav a[href="#' + id +'"]').classList.add('active');
        }
    });

    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when clicking navbar links
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// scroll reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// typed js
const typed = new Typed(".multiple-text", {
    strings: ['Frontend Developer', 'Programmer', 'Artist'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



// 

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-left');

    // Form submit event listener
    contactForm.addEventListener('submit', function (event) {
        // Optional: You can handle form data here if needed
        // e.g., show a loading indicator or handle submission feedback
    });
});








document.addEventListener("DOMContentLoaded", () => {
    // Handle the "Download CV" button click
    const downloadBtn = document.querySelector('.home .btn');

    if (downloadBtn) {
        downloadBtn.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior

            // Specify the correct path to your CV
            const cvUrl = 'resume.pdf'; // Ensure this path is correct

            // Create a temporary link element
            const link = document.createElement('a');
            link.href = cvUrl;
            link.download = 'Hadiqa_Gohar_Resume.pdf'; // Name of the downloaded file

            // Append the link to the body and trigger a click event
            document.body.appendChild(link);
            link.click();

            // Remove the link from the document
            document.body.removeChild(link);
        });
    }
});
