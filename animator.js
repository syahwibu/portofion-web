/* =========================================
   ANIMATOR
   Semua animasi JavaScript ada di file ini.
   Jika file ini tidak dimuat, halaman tetap
   tampil normal tanpa animasi.
========================================= */

(function () {

    "use strict";

    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

    root.classList.add("anim-ready");


    /* ---------- Animasi saat halaman dimuat ---------- */

    const showPage = () => document.body.classList.add("page-loaded");

    window.addEventListener("load", showPage);
    setTimeout(showPage, 2500);   /* cadangan jika load tertunda */


    /* ---------- Scroll reveal + stagger ---------- */

    $$(".reveal").forEach((el) => {

        const siblings = Array.from(el.parentElement.children).filter((c) => c.classList.contains("reveal"));
        const index = siblings.indexOf(el);

        el.style.setProperty("--d", `${Math.min(index, 5) * 90}ms`);

    });

    const revealObserver = new IntersectionObserver((entries, observer) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            entry.target.classList.add("active");
            observer.unobserve(entry.target);

        });

    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    if ("IntersectionObserver" in window) {
        $$(".reveal").forEach((el) => revealObserver.observe(el));
    } else {
        $$(".reveal").forEach((el) => el.classList.add("active"));
    }


    /* ---------- Efek mengetik (hero) ---------- */

    const typed = document.getElementById("typedRole");

    if (typed && !reduce) {

        const roles = (typed.dataset.roles || typed.textContent).split("|").map((r) => r.trim());
        let role = 0, char = roles[0].length, deleting = true;

        const tick = () => {

            const current = roles[role];

            char += deleting ? -1 : 1;
            typed.textContent = current.slice(0, char);

            let delay = deleting ? 40 : 85;

            if (!deleting && char === current.length) { deleting = true; delay = 1800; }
            else if (deleting && char === 0) { deleting = false; role = (role + 1) % roles.length; delay = 350; }

            setTimeout(tick, delay);

        };

        setTimeout(tick, 2200);

    }


    /* ---------- Hitung angka statistik ---------- */

    const counters = $$("[data-count]");

    const runCounter = (el) => {

        const target = Number(el.dataset.count);
        const suffix = el.dataset.suffix || "";

        if (reduce) { el.textContent = target + suffix; return; }

        const duration = 1400;
        const start = performance.now();

        const frame = (now) => {

            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);

            el.textContent = Math.round(target * eased) + suffix;

            if (t < 1) requestAnimationFrame(frame);

        };

        requestAnimationFrame(frame);

    };

    const counterObserver = new IntersectionObserver((entries, observer) => {

        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            runCounter(entry.target);
            observer.unobserve(entry.target);
        });

    }, { threshold: 0.6 });

    counters.forEach((el) => counterObserver.observe(el));


    /* ---------- Progress scroll + parallax (satu rAF) ---------- */

    const progress = document.getElementById("scrollProgress");
    const parallax = $$("[data-parallax]");
    let ticking = false;

    const onScroll = () => {

        const max = root.scrollHeight - window.innerHeight;
        const y = window.scrollY;

        if (progress) progress.style.setProperty("--p", max > 0 ? (y / max).toFixed(4) : 0);

        if (!reduce && window.innerWidth >= 768 && y < window.innerHeight * 1.5) {
            parallax.forEach((el) => el.style.setProperty("--py", `${(y * Number(el.dataset.parallax)).toFixed(1)}px`));
        }

        ticking = false;

    };

    window.addEventListener("scroll", () => {

        if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }

    }, { passive: true });

    onScroll();


    /* ---------- Spotlight kartu mengikuti kursor ---------- */

    if (!reduce && window.matchMedia("(pointer: fine)").matches) {

        $$(".spotlight").forEach((card) => {

            card.addEventListener("pointermove", (e) => {

                const rect = card.getBoundingClientRect();

                card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
                card.style.setProperty("--my", `${e.clientY - rect.top}px`);

            });

        });

    }


    /* ---------- Animasi setelah filter project ---------- */

    $$(".filter-btn").forEach((button) => {

        button.addEventListener("click", () => {

            requestAnimationFrame(() => {

                $$(".project-col:not(.is-hidden)").forEach((item, i) => {

                    item.classList.remove("pop-in");
                    void item.offsetWidth;   /* restart animasi */
                    item.style.animationDelay = `${i * 70}ms`;
                    item.classList.add("pop-in");

                });

            });

        });

    });


    /* ---------- Transisi halus saat ganti tema ---------- */

    const themeButton = document.getElementById("themeToggle");

    if (themeButton) {

        let timer;

        themeButton.addEventListener("click", () => {

            root.classList.add("theme-anim");
            clearTimeout(timer);
            timer = setTimeout(() => root.classList.remove("theme-anim"), 600);

        });

    }

})();