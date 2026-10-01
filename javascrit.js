/* =========================================
   PORTFOLIO JAVASCRIPT
========================================= */

"use strict";


/* =========================================
   ELEMENTS
========================================= */

const navbar = document.getElementById("mainNavbar");

const backToTop = document.getElementById("backToTop");

const navLinks = document.querySelectorAll(
    ".navbar-nav .nav-link"
);

const sections = document.querySelectorAll(
    "main section[id]"
);

const revealElements = document.querySelectorAll(
    ".reveal"
);

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");

const themeToggle =
    document.getElementById("themeToggle");


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

function handleNavbarScroll() {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}

window.addEventListener(
    "scroll",
    handleNavbarScroll
);

handleNavbarScroll();


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sectionObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    const currentId =
                        entry.target.getAttribute("id");

                    navLinks.forEach((link) => {

                        link.classList.remove("active");

                        const href =
                            link.getAttribute("href");

                        if (
                            href === `#${currentId}`
                        ) {

                            link.classList.add(
                                "active"
                            );

                        }

                    });

                }

            });

        },
        {
            rootMargin:
                "-35% 0px -55% 0px"
        }
    );


sections.forEach((section) => {

    sectionObserver.observe(section);

});


/* =========================================
   CLOSE MOBILE NAVBAR
========================================= */

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        const navbarCollapse =
            document.getElementById(
                "navbarNav"
            );

        if (
            navbarCollapse.classList.contains(
                "show"
            )
        ) {

            const bsCollapse =
                bootstrap.Collapse.getInstance(
                    navbarCollapse
                );

            if (bsCollapse) {

                bsCollapse.hide();

            }

        }

    });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "active"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================
   BACK TO TOP
========================================= */

window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }
);


backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =========================================
   PROJECT DATA
========================================= */

const projects = {

    naturavita: {

        title:
            "NATURAVITA Branding & Packaging",

        category:
            "BRANDING & PACKAGING",

        image:
            "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1200&q=85",

        description:
            "Project branding dan packaging untuk produk minuman sehat berbahan buah dan sayuran lokal dengan konsep natural, fresh, dan modern.",

        goal:
            "Membangun identitas visual yang mudah dikenali dan sesuai dengan target konsumen.",

        tech:
            "Branding • UI/UX • Canva • Packaging Design",

        link:
            "#"

    },


    portfolio: {

        title:
            "Personal Portfolio Website",

        category:
            "WEB DEVELOPMENT",

        image:
            "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=85",

        description:
            "Website portfolio personal yang dirancang untuk menampilkan kemampuan, project, pengalaman, dan informasi kontak secara profesional.",

        goal:
            "Membuat personal branding yang modern, responsive, dan mudah dipahami recruiter.",

        tech:
            "HTML5 • CSS3 • JavaScript • Bootstrap 5",

        link:
            "#"

    },


    uiux: {

        title:
            "[PROJECT]",

        category:
            "UI / UX DESIGN",

        image:
            "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=85",

        description:
            "Project UI/UX dengan fokus pada visual hierarchy, usability, responsive layout, dan pengalaman pengguna.",

        goal:
            "Membuat interface yang sederhana, modern, dan mudah digunakan.",

        tech:
            "Figma • UI Design • UX Research • Prototyping",

        link:
            "#"

    }

};


/* =========================================
   PROJECT MODAL
========================================= */

const projectModal =
    document.getElementById(
        "projectModal"
    );


if (projectModal) {

    projectModal.addEventListener(
        "show.bs.modal",
        (event) => {

            const card =
                event.relatedTarget;

            const projectId =
                card.getAttribute(
                    "data-project"
                );

            const project =
                projects[projectId];

            if (!project) return;


            document.getElementById(
                "modalTitle"
            ).textContent =
                project.title;


            document.getElementById(
                "modalCategory"
            ).textContent =
                project.category;


            document.getElementById(
                "modalImage"
            ).src =
                project.image;


            document.getElementById(
                "modalDescription"
            ).textContent =
                project.description;


            document.getElementById(
                "modalGoal"
            ).textContent =
                project.goal;


            document.getElementById(
                "modalTech"
            ).textContent =
                project.tech;


            document.getElementById(
                "modalLink"
            ).href =
                project.link;

        }
    );

}


/* =========================================
   CONTACT FORM VALIDATION
========================================= */

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();

            event.stopPropagation();


            if (
                !contactForm.checkValidity()
            ) {

                contactForm.classList.add(
                    "was-validated"
                );

                formMessage.textContent = "";

                return;

            }


            const name =
                document
                    .getElementById("name")
                    .value
                    .trim();


            formMessage.textContent =
                `Thanks, ${name}! Your message has been validated successfully.`;

            formMessage.style.color =
                "#a8ff12";


            contactForm.reset();

            contactForm.classList.remove(
                "was-validated"
            );

        }
    );

}


/* =========================================
   THEME TOGGLE
========================================= */

let lightMode = false;


if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        () => {

            lightMode = !lightMode;

            if (lightMode) {

                document.body.classList.add(
                    "light-mode"
                );

                themeToggle.innerHTML =
                    '<i class="bi bi-moon"></i>';

            } else {

                document.body.classList.remove(
                    "light-mode"
                );

                themeToggle.innerHTML =
                    '<i class="bi bi-sun"></i>';

            }

        }
    );

}


/* =========================================
   KEYBOARD ACCESSIBILITY
========================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
        ) {

            const openModal =
                document.querySelector(
                    ".modal.show"
                );

            if (openModal) {

                const modal =
                    bootstrap.Modal.getInstance(
                        openModal
                    );

                if (modal) {

                    modal.hide();

                }

            }

        }

    }
);


/* =========================================
   PAGE LOAD ANIMATION
========================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

    }
);