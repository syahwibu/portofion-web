

"use strict";

(function () {

    /* Aktifkan mode animasi (dipakai oleh CSS .anim-ready .reveal) */
    document.documentElement.classList.add("anim-ready");


    /* =========================================
       SCROLL REVEAL
    ========================================= */

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },
        { threshold: 0.12 }
    );


    function observeReveal(root = document) {

        root.querySelectorAll(".reveal:not(.active)").forEach((element) => {

            revealObserver.observe(element);

        });

    }

    observeReveal();

    /* Bisa dipanggil jika menambah elemen .reveal lewat JavaScript */
    window.refreshReveal = observeReveal;


    /* =========================================
       PAGE LOAD ANIMATION
    ========================================= */

    window.addEventListener("load", () => {

        document.body.classList.add("page-loaded");

    });

})();