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