document.addEventListener("DOMContentLoaded", () => {
    // Animation d'introduction
    const text = "Bienvenue dans mon univers !";
    const typedText = document.getElementById("typed-text");
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            typedText.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        } else {
            setTimeout(() => {
                document.getElementById("intro-animation").style.opacity = "0";
                document.getElementById("intro-animation").style.transform = "scale(1.1)";
                setTimeout(() => {
                    document.getElementById("intro-animation").style.display = "none";
                }, 1000);
            }, 1000);
        }
    }

    typeWriter();

    // Animation pour la section "À propos"
    const aboutSection = document.getElementById("about");

    function animateAbout() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    aboutSection.classList.add("visible"); // Ajouter la classe "visible" pour déclencher l'animation
                }
            });
        }, { threshold: 0.5 }); // Déclencher lorsque 50% de la section est visible

        observer.observe(aboutSection);
    }

    animateAbout(); // Appeler la fonction pour observer la section "A propos"

    
    // Animation pour la section "Competences"
    const skillsSection = document.getElementById('skills');

    function animateSkills() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    skillsSection.classList.add('visible'); // Ajouter la classe "visible" pour déclencher l'animation
                }
            });
        }, { threshold: 0.5 }); // Déclencher lorsque 50% de la section est visible

        observer.observe(skillsSection);
    }

    animateSkills();// Appeler la fonction au chargement de la page

    // Animation pour la section "Services"
    const servicesSection = document.getElementById('services');

    function animateServices() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    servicesSection.classList.add('visible'); // Ajouter la classe "visible" pour déclencher l'animation
                }
            });
        }, { threshold: 0.5 }); // Déclencher lorsque 50% de la section est visible

        observer.observe(servicesSection);
    }

    animateServices();// Appeler la fonction au chargement de la page

    // Animation pour la section "Cv-Contact"
    const cv_contactSection = document.getElementById('cv_contact');

    function animateCv_contact() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    cv_contactSection.classList.add('visible'); // Ajouter la classe "visible" pour déclencher l'animation
                }
            });
        }, { threshold: 0.5 }); // Déclencher lorsque 50% de la section est visible

        observer.observe(cv_contactSection);
    }

    animateCv_contact();// Appeler la fonction au chargement de la page

    // Animation pour la section "Formation" (si nécessaire)
    const formationSection = document.getElementById("formation");

    function animateFormation() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    formationSection.classList.add("visible"); // Ajouter la classe "visible" pour déclencher l'animation
                }
            });
        }, { threshold: 0.5 }); // Déclencher lorsque 50% de la section est visible

        observer.observe(formationSection);
    }

    animateFormation(); // Appeler la fonction pour observer la section "Formation"
});