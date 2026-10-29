/* =========================================
   PORTFOLIO JAVASCRIPT
========================================= */

"use strict";


/* =========================================
   CONFIG (ubah sesuai datamu)
========================================= */

const CONFIG = {
    email: "",                   // ISI: email tujuan form kontak, contoh "nama@perusahaan.com"
    wa: "6280000000000"          // (opsional) nomor WhatsApp
};


/* =========================================
   DATA PROJECT
========================================= */

const PROJECTS = {
    rumi: {
        name: "RUMI Furnitur",
        category: "WEB DEVELOPMENT • UI/UX",
        image: "assets/images/project-1.jpg",
        description:
            "Website toko furnitur kayu modular modern untuk apartemen, rumah minimalis, " +
            "dan ruang kerja. Dirancang dengan tampilan bersih dan hangat, lengkap dengan " +
            "katalog produk, layanan custom, galeri inspirasi, dan konsultasi desain.",
        role: "Desain & pengembangan front-end",
        tech: "HTML, CSS, JavaScript",
        features: [
            "Katalog produk dengan filter kategori dan pengurutan (harga & nama)",
            "Keranjang belanja dengan checkout langsung via WhatsApp",
            "Pilihan warna finishing pada setiap produk",
            "Form konsultasi desain yang terhubung ke WhatsApp",
            "Galeri inspirasi ruang, testimoni, FAQ, dan peta lokasi",
            "Layout responsif untuk desktop dan mobile"
        ],
        link: "https://lariadabawang259-wq.github.io/RUMI-futnitur-modern-minimalis/"
    },

    portfolio: {
        name: "Portfolio Website",
        category: "UI/UX • WEB DEVELOPMENT",
        image: "assets/images/project-2.jpg",
        description:
            "Portfolio pribadi bertema gelap futuristik dengan aksen magenta, hijau, dan cyan. " +
            "Dibuat untuk menampilkan profil, skill, project, pengalaman, dan kontak dalam satu halaman.",
        role: "Desain UI & pengembangan",
        tech: "HTML, CSS, JavaScript, Bootstrap",
        features: [
            "Mode gelap dan terang yang tersimpan di browser",
            "Animasi scroll reveal dan efek mengetik",
            "Filter project dan modal detail",
            "Form kontak dengan validasi",
            "Responsif dan ramah aksesibilitas keyboard"
        ],
        link: "#home"
    }
};


/* =========================================
   ELEMENTS
========================================= */

const navbar = document.getElementById("mainNavbar");
const backToTop = document.getElementById("backToTop");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link, .side-nav a");
const sections = document.querySelectorAll("main section[id]");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const themeToggle = document.getElementById("themeToggle");

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;


/* =========================================
   NAVBAR SCROLL EFFECT + BACK TO TOP
========================================= */

function handleScroll() {

    if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 50);
    if (backToTop) backToTop.classList.toggle("show", window.scrollY > 500);

}

window.addEventListener("scroll", handleScroll, { passive: true });
handleScroll();


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sectionObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            const currentId = entry.target.getAttribute("id");

            navLinks.forEach((link) => {
                link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
            });

        });

    },
    { rootMargin: "-35% 0px -55% 0px" }
);

sections.forEach((section) => sectionObserver.observe(section));


/* =========================================
   CLOSE MOBILE NAVBAR
========================================= */

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        const navbarCollapse = document.getElementById("navbarNav");

        if (navbarCollapse && navbarCollapse.classList.contains("show")) {
            const bsCollapse = typeof bootstrap !== "undefined" && bootstrap.Collapse.getInstance(navbarCollapse);
            if (bsCollapse) bsCollapse.hide();
        }

    });

});


/* =========================================
   BACK TO TOP
========================================= */

if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
}


/* =========================================
   IMAGE FALLBACK (jika gambar belum ada / gagal dimuat)
   Wadah gambar diberi class "img-missing" -> CSS menampilkan
   kotak "Gambar belum tersedia" (tidak ada gambar rusak).
========================================= */

function markMissing(img) {

    if (!img.getAttribute("src")) return;   /* abaikan src kosong */

    const box = img.parentElement;
    if (box) box.classList.add("img-missing");

}

document.querySelectorAll("img").forEach((img) => {

    img.addEventListener("error", () => markMissing(img));

    /* gambar yang sudah gagal sebelum script ini berjalan */
    if (img.complete && img.naturalWidth === 0) markMissing(img);

});


/* =========================================
   LINK YANG BELUM DIISI (href="#")
   Mencegah halaman lompat ke atas / membuka tab kosong.
========================================= */

document.querySelectorAll('.footer-socials a[href="#"], .team-socials a[href="#"]').forEach((link) => {

    link.addEventListener("click", (event) => event.preventDefault());

});


/* =========================================
   PROJECT FILTER
========================================= */

(function projectFilter() {

    const buttons = document.querySelectorAll(".filter-btn");
    const items = document.querySelectorAll(".project-col");
    const emptyState = document.getElementById("projectEmpty");

    if (!buttons.length) return;

    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            const filter = button.dataset.filter;
            let visible = 0;

            buttons.forEach((b) => b.classList.toggle("active", b === button));

            items.forEach((item) => {

                const match = filter === "all" || item.dataset.category.split(" ").includes(filter);

                item.classList.toggle("is-hidden", !match);

                if (match) {
                    item.classList.add("active"); /* pastikan terlihat */
                    visible++;
                }

            });

            if (emptyState) emptyState.hidden = visible !== 0;

        });

    });

})();


/* =========================================
   PROJECT MODAL
========================================= */

(function projectModal() {

    const modalElement = document.getElementById("projectModal");
    const cards = document.querySelectorAll(".project-card[data-project]");

    if (!modalElement || !cards.length || typeof bootstrap === "undefined") return;

    const modal = new bootstrap.Modal(modalElement);

    const el = {
        title: document.getElementById("projectModalTitle"),
        image: document.getElementById("modalImage"),
        category: document.getElementById("modalCategory"),
        name: document.getElementById("modalName"),
        desc: document.getElementById("modalDesc"),
        role: document.getElementById("modalRole"),
        tech: document.getElementById("modalTech"),
        features: document.getElementById("modalFeatures"),
        link: document.getElementById("modalLink")
    };

    function openProject(id) {

        const project = PROJECTS[id];

        if (!project) return;

        el.title.textContent = project.name;
        const wrap = document.getElementById("modalImageWrap");
        if (wrap) wrap.classList.remove("img-missing");
        el.image.alt = `Tampilan ${project.name}`;
        el.image.src = project.image;
        el.category.textContent = project.category;
        el.name.textContent = project.name;
        el.desc.textContent = project.description;
        el.role.textContent = project.role;
        el.tech.textContent = project.tech;

        el.features.innerHTML = "";
        project.features.forEach((feature) => {
            const li = document.createElement("li");
            li.textContent = feature;
            el.features.appendChild(li);
        });

        const isInternal = project.link.startsWith("#");

        el.link.href = project.link;
        el.link.target = isInternal ? "_self" : "_blank";
        el.link.innerHTML = isInternal
            ? 'Kembali ke Atas <i class="bi bi-arrow-up"></i>'
            : 'Kunjungi Website <i class="bi bi-arrow-up-right"></i>';

        if (isInternal) {
            el.link.setAttribute("data-bs-dismiss", "modal");
        } else {
            el.link.removeAttribute("data-bs-dismiss");
        }

        modal.show();

    }

    cards.forEach((card) => {

        card.addEventListener("click", () => openProject(card.dataset.project));

        card.addEventListener("keydown", (event) => {

            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openProject(card.dataset.project);
            }

        });

    });

})();


/* =========================================
   CONTACT FORM
   Tanpa backend: form membuka aplikasi email (mailto).
   Pesan hanya terkirim jika pengunjung menekan "kirim" di email.
========================================= */

function setFormMessage(text, type) {

    formMessage.textContent = text;
    formMessage.classList.toggle("is-error", type === "error");

}

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.classList.add("was-validated");
            setFormMessage("Form belum lengkap. Periksa kolom yang ditandai merah.", "error");

            const firstInvalid = contactForm.querySelector(":invalid");
            if (firstInvalid) firstInvalid.focus();
            return;
        }

        const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(CONFIG.email);

        if (!emailOk) {
            setFormMessage("Pengiriman belum aktif: email tujuan belum diisi oleh pemilik website.", "error");
            return;
        }

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const subject = encodeURIComponent(`Pesan dari website PT Sigma Cipta Caraka - ${name}`);
        const body = encodeURIComponent(`Nama: ${name}\nEmail: ${email}\n\n${message}`);

        setFormMessage("Membuka aplikasi email Anda. Tekan tombol kirim di sana untuk mengirim pesan.", "info");

        window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;

        contactForm.reset();
        contactForm.classList.remove("was-validated");

    });

}


/* =========================================
   THEME TOGGLE (tersimpan di browser)
========================================= */

function applyTheme(isLight) {

    document.body.classList.toggle("light-mode", isLight);

    if (themeToggle) {
        themeToggle.innerHTML = isLight
            ? '<i class="bi bi-moon"></i>'
            : '<i class="bi bi-sun"></i>';
    }

    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", isLight ? "#f5f5f8" : "#07070a");

}

let lightMode = window.matchMedia("(prefers-color-scheme: light)").matches;

try {
    const saved = localStorage.getItem("theme");
    if (saved) lightMode = saved === "light";
} catch (e) { /* abaikan */ }

applyTheme(lightMode);

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        lightMode = !lightMode;
        applyTheme(lightMode);

        try {
            localStorage.setItem("theme", lightMode ? "light" : "dark");
        } catch (e) { /* abaikan */ }

    });

}