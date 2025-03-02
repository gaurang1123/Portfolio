document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default jump behavior

        const targetId = this.getAttribute('href').substring(1); // Get target section ID
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return; // If the section doesn't exist, do nothing

        const headerOffset = 50; // Adjust this value based on your navbar height
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth' // Enables smooth scrolling effect
        });
    });
});



/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home-text, .about-img, .skills-items, .skills-logo',{}); 
sr.reveal('.profile-img, .about-text, .skills__img',{delay: 400}); 
sr.reveal('.home-links',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact-input',{interval: 200}); 