<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#07070a">

    <title>PT Sigma Cipta Caraka | Website, UI/UX &amp; Jaringan</title>

    <meta name="description" content="PT Sigma Cipta Caraka menyediakan jasa pembuatan website, desain UI/UX, dan solusi jaringan untuk bisnis Anda.">
    <meta property="og:title" content="PT Sigma Cipta Caraka | Solusi Digital untuk Bisnis">
    <meta property="og:description" content="Jasa pembuatan website, desain UI/UX, dan solusi jaringan.">
    <meta property="og:type" content="website">
    <meta property="og:image" content="assets/images/sija.jpg">

    <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='22' fill='%2307070a'/%3E%3Ctext x='50' y='66' font-size='48' font-family='monospace' font-weight='700' text-anchor='middle' fill='%23ff167f'%3E%3C/%3E%3C/text%3E%3C/svg%3E">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <!-- Terapkan tema tersimpan sebelum halaman tampil (mencegah kedip) -->
    <script>
        try {
            var t = localStorage.getItem("theme");
            if (t ? t === "light" : matchMedia("(prefers-color-scheme: light)").matches)
                document.body.classList.add("light-mode");
        } catch (e) {}
    </script>

    <a href="#main" class="skip-link">Lewati ke konten utama</a>
    <div class="scroll-progress" id="scrollProgress" aria-hidden="true"></div>

    <!-- NAVIGASI SAMPING (nama bagian) -->
    <nav class="side-nav" aria-label="Navigasi bagian halaman">
        <a href="#home" aria-label="Beranda"><span>Beranda</span><i></i></a>
        <a href="#layanan" aria-label="Layanan"><span>Layanan</span><i></i></a>
        <a href="#tentang" aria-label="Tentang"><span>Tentang</span><i></i></a>
        <a href="#proyek" aria-label="Proyek"><span>Proyek</span><i></i></a>
        <a href="#pendiri" aria-label="Pendiri"><span>Pendiri</span><i></i></a>
        <a href="#kontak" aria-label="Kontak"><span>Kontak</span><i></i></a>
    </nav>

    <!-- NAVBAR -->
    <nav id="mainNavbar" class="navbar navbar-expand-lg fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#home" aria-label="Beranda">
                <span class="brand-symbol">&lt;/&gt;</span>PT Sigma Cipta Caraka
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Buka menu navigasi">
                <i class="bi bi-list"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto align-items-lg-center">
                    <li class="nav-item"><a class="nav-link active" href="#home">Beranda</a></li>
                    <li class="nav-item"><a class="nav-link" href="#layanan">Layanan</a></li>
                    <li class="nav-item"><a class="nav-link" href="#tentang">Tentang</a></li>
                    <li class="nav-item"><a class="nav-link" href="#proyek">Proyek</a></li>
                    <li class="nav-item"><a class="nav-link" href="#pendiri">Pendiri</a></li>
                    <li class="nav-item"><a class="nav-link" href="#kontak">Kontak</a></li>
                    <li class="nav-item ms-lg-3">
                        <button id="themeToggle" class="theme-toggle" type="button" aria-label="Ganti tema terang atau gelap" title="Ganti tema">
                            <i class="bi bi-sun"></i>
                        </button>
                    </li>
                    <li class="nav-item ms-lg-2 mt-3 mt-lg-0">
                        <a href="#kontak" class="btn btn-primary-custom btn-nav">Hubungi Kami</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <main id="main">

        <!-- HERO -->
        <section id="home" class="hero-section section">
            <div class="hero-grid"></div>
            <div class="hero-orb orb-1" data-parallax="0.15"></div>
            <div class="hero-orb orb-2" data-parallax="-0.1"></div>

            <div class="container">
                <div class="row align-items-center g-5">
                    <div class="col-lg-7">
                        <div class="hero-content reveal">
                            <span class="status-badge"><span class="status-dot"></span>Menerima project baru</span>

                            <p class="hero-small-title">MITRA DIGITAL BISNIS ANDA</p>
                            <h1>Wujudkan bisnis digital yang <span class="text-gradient">tumbuh</span></h1>
                            <h2 aria-label="Layanan kami">
                                <span id="typedRole" data-roles="Pembuatan Website|Desain UI/UX|Solusi Jaringan|Maintenance &amp; Support">Pembuatan Website</span><span class="typed-cursor" aria-hidden="true">|</span>
                            </h2>

                            <p class="hero-description">
                                Kami membantu perusahaan dan UMKM membangun website, antarmuka, dan
                                infrastruktur jaringan yang modern, aman, dan siap berkembang.
                            </p>

                            <div class="hero-buttons">
                                <a href="#kontak" class="btn btn-primary-custom">Konsultasi Gratis <i class="bi bi-arrow-up-right"></i></a>
                                <a href="#proyek" class="btn btn-outline-custom">Lihat Proyek <i class="bi bi-grid"></i></a>
                            </div>

                            <div class="stats">
                                <div><strong data-count="2" data-suffix="+">0</strong><span>Proyek selesai</span></div>
                                <div><strong data-count="4">0</strong><span>Layanan utama</span></div>
                                <div><strong data-count="100" data-suffix="%">0</strong><span>Komitmen kualitas</span></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-5">
                        <div class="hero-image-wrapper reveal" data-reveal="zoom">
                            <div class="hero-image-glow"></div>
                            <div class="profile-frame">
                                <div class="profile-corner corner-top"></div>
                                <div class="profile-corner corner-bottom"></div>
                                <img src="assets/images/sija.jpg" alt="Gedung perkantoran modern" class="profile-image" width="380" height="475">
                                <div class="profile-label"><span>ESTABLISHED</span><strong>2026</strong></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <a href="#layanan" class="scroll-indicator" aria-label="Scroll ke layanan">
                <span>SCROLL</span><i class="bi bi-arrow-down"></i>
            </a>
        </section>

        <!-- LAYANAN -->
        <section id="layanan" class="section section-dark">
            <div class="container">
                <div class="section-heading reveal">
                    <span class="section-number">01</span>
                    <div>
                        <p class="section-label">LAYANAN</p>
                        <h2>Layanan <span>Kami</span></h2>
                    </div>
                </div>
                <div class="row g-4">
                    <div class="col-md-6 col-xl-3 reveal">
                        <article class="service-card spotlight">
                            <div class="service-icon"><i class="bi bi-code-slash"></i></div>
                            <h3>Pengembangan Website</h3>
                            <p>Website company profile, landing page, hingga sistem web custom yang cepat, aman, dan responsif.</p>
                        </article>
                    </div>
                    <div class="col-md-6 col-xl-3 reveal">
                        <article class="service-card spotlight">
                            <div class="service-icon"><i class="bi bi-palette"></i></div>
                            <h3>Desain UI/UX</h3>
                            <p>Desain antarmuka yang rapi dan mudah dipakai, dari riset pengguna sampai prototype siap develop.</p>
                        </article>
                    </div>
                    <div class="col-md-6 col-xl-3 reveal">
                        <article class="service-card spotlight">
                            <div class="service-icon"><i class="bi bi-hdd-network"></i></div>
                            <h3>Jaringan & Infrastruktur</h3>
                            <p>Perancangan, instalasi, dan pengelolaan jaringan kantor agar operasional tetap stabil.</p>
                        </article>
                    </div>
                    <div class="col-md-6 col-xl-3 reveal">
                        <article class="service-card spotlight">
                            <div class="service-icon"><i class="bi bi-headset"></i></div>
                            <h3>Maintenance & Support</h3>
                            <p>Perawatan rutin, pembaruan, dan bantuan teknis setelah project selesai dikerjakan.</p>
                        </article>
                    </div>
                </div>
            </div>
        </section>

        <!-- TENTANG -->
        <section id="tentang" class="section">
            <div class="container">
                <div class="section-heading reveal">
                    <span class="section-number">02</span>
                    <div>
                        <p class="section-label">TENTANG KAMI</p>
                        <h2>Mengapa <span>Kami</span></h2>
                    </div>
                </div>
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6 reveal" data-reveal="left">
                        <div class="about-content">
                            <p class="about-lead">Dikerjakan langsung oleh pendiri, dengan fokus pada solusi digital yang rapi, cepat, dan bisa diandalkan.</p>
                            <p>
                                PT Sigma Cipta Caraka menggabungkan keahlian web development, desain UI/UX, dan jaringan
                                untuk membantu bisnis tampil profesional di dunia digital.
                                Setiap project dikerjakan dengan komunikasi terbuka dan hasil yang terukur.
                            </p>
                            <div class="about-info">
                                <div class="info-item"><span>Visi</span><strong>Menjadi mitra digital tepercaya bagi bisnis lokal</strong></div>
                                <div class="info-item"><span>Misi</span><strong>Solusi berkualitas dengan harga bersahabat</strong></div>
                                <div class="info-item"><span>Lokasi</span><strong>Indonesia</strong></div>
                                <div class="info-item"><span>Jam Kerja</span><strong>Senin – Jumat, 08.00 – 17.00</strong></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 reveal" data-reveal="right">
                        <div class="row g-4">
                    <div class="col-sm-6 reveal">
                        <div class="step"><span>01</span><h3>Konsultasi</h3><p>Kami dengar kebutuhan, target, dan anggaran Anda.</p></div>
                    </div>
                    <div class="col-sm-6 reveal">
                        <div class="step"><span>02</span><h3>Perencanaan</h3><p>Menyusun ruang lingkup, desain, dan jadwal kerja.</p></div>
                    </div>
                    <div class="col-sm-6 reveal">
                        <div class="step"><span>03</span><h3>Pengerjaan</h3><p>Development dan pengujian dengan update berkala.</p></div>
                    </div>
                    <div class="col-sm-6 reveal">
                        <div class="step"><span>04</span><h3>Peluncuran</h3><p>Go-live, serah terima, dan dukungan purna jual.</p></div>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- PROYEK -->
        <section id="proyek" class="section section-dark">
            <div class="container">
                <div class="section-heading reveal">
                    <span class="section-number">03</span>
                    <div>
                        <p class="section-label">PROYEK</p>
                        <h2>Proyek <span>Kami</span></h2>
                    </div>
                </div>

                <div class="project-filters reveal" role="group" aria-label="Filter project">
                    <button type="button" class="filter-btn active" data-filter="all">Semua</button>
                    <button type="button" class="filter-btn" data-filter="web">Web Development</button>
                    <button type="button" class="filter-btn" data-filter="uiux">UI/UX</button>
                </div>

                <div class="row g-4" id="projectGrid">

                    <!-- PROJECT 1: RUMI -->
                    <div class="col-md-6 col-lg-4 project-col reveal" data-category="web uiux">
                        <article class="project-card" data-project="rumi" tabindex="0" role="button"
                                 aria-label="Lihat detail project RUMI Furnitur">
                            <div class="project-image">
                                <img src="assets/images/project-1.jpg" alt="Tampilan website RUMI Furnitur" loading="lazy">
                                <div class="project-overlay"><i class="bi bi-arrow-up-right"></i></div>
                            </div>
                            <div class="project-content">
                                <div class="project-meta"><span>WEB DEVELOPMENT</span><span>2026</span></div>
                                <h3>RUMI Furnitur</h3>
                                <p>Website toko furnitur kayu modular dengan katalog, keranjang, dan checkout via WhatsApp.</p>
                                <div class="tech-list"><span>HTML</span><span>CSS</span><span>JavaScript</span></div>
                            </div>
                        </article>
                    </div>

                    <!-- PROJECT 2: Portfolio -->
                    <div class="col-md-6 col-lg-4 project-col reveal" data-category="web uiux">
                        <article class="project-card" data-project="portfolio" tabindex="0" role="button"
                                 aria-label="Lihat detail project Portfolio Website">
                            <div class="project-image">
                                <img src="assets/images/project-2.jpg" alt="Tampilan website portfolio" loading="lazy">
                                <div class="project-overlay"><i class="bi bi-arrow-up-right"></i></div>
                            </div>
                            <div class="project-content">
                                <div class="project-meta"><span>UI/UX &amp; WEB</span><span>2026</span></div>
                                <h3>Portfolio Website</h3>
                                <p>Portfolio pribadi bertema gelap dengan mode terang, animasi scroll, dan layout responsif.</p>
                                <div class="tech-list"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>Bootstrap</span></div>
                            </div>
                        </article>
                    </div>
                </div>

                <div class="project-empty" id="projectEmpty" hidden>
                    <i class="bi bi-folder2-open"></i>
                    <h3>Belum ada project</h3>
                    <p>Project di kategori ini akan segera ditambahkan.</p>
                </div>
            </div>
        </section>

        <!-- PENDIRI -->
        <section id="pendiri" class="section">
            <div class="container">
                <div class="section-heading reveal">
                    <span class="section-number">04</span>
                    <div>
                        <p class="section-label">PENDIRI</p>
                        <h2>Kenalan dengan <span>Pendiri</span></h2>
                    </div>
                </div>

                <div class="founder-card spotlight reveal" data-reveal="zoom">
                    <div class="founder-photo">
                        <img src="assets/images/profile.jpg" alt="Foto Syahdan Pratama" loading="lazy">
                    </div>

                    <div class="founder-info">
                        <span class="founder-role">FOUNDER &amp; WEB DEVELOPER</span>
                        <h3>Syahdan Pratama</h3>
                        <p>
                            Setiap project di PT Sigma Cipta Caraka dikerjakan langsung oleh saya,
                            mulai dari konsultasi, desain, pengembangan, sampai dukungan setelah peluncuran.
                            Komunikasi jadi lebih cepat dan hasilnya bisa dipertanggungjawabkan.
                        </p>

                        <div class="tech-list">
                            <span>Web Development</span><span>UI/UX</span><span>Jaringan</span>
                        </div>

                        <div class="team-socials">
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="bi bi-github"></i></a>
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA -->
        <section class="cta-band">
            <div class="container reveal" data-reveal="zoom">
                <div class="cta-box">
                    <div>
                        <h2>Siap memulai project Anda?</h2>
                        <p>Ceritakan kebutuhan Anda, kami beri estimasi dan solusi tanpa biaya.</p>
                    </div>
                    <a href="#kontak" class="btn btn-primary-custom">Hubungi Kami <i class="bi bi-arrow-right"></i></a>
                </div>
            </div>
        </section>

        <!-- KONTAK -->
        <section id="kontak" class="section section-dark contact-section">
            <div class="container">
                <div class="section-heading reveal">
                    <span class="section-number">05</span>
                    <div>
                        <p class="section-label">KONTAK</p>
                        <h2>Hubungi <span>Kami</span></h2>
                    </div>
                </div>
                <div class="row g-5">
                    <div class="col-lg-5 reveal" data-reveal="left">
                        <p class="contact-lead">Punya project atau ingin berdiskusi? Kirim pesan, kami akan membalas secepatnya.</p>
                        <!-- TODO: ganti dengan data asli perusahaan -->
                        <div class="contact-item"><div><i class="bi bi-envelope"></i></div><span>Email<strong>email@contoh.com</strong></span></div>
                        <div class="contact-item"><div><i class="bi bi-telephone"></i></div><span>Telepon / WhatsApp<strong>+62 800 0000 0000</strong></span></div>
                        <div class="contact-item"><div><i class="bi bi-geo-alt"></i></div><span>Alamat<strong>Indonesia</strong></span></div>
                    </div>
                    <div class="col-lg-7 reveal" data-reveal="right">
                        <form id="contactForm" class="contact-form needs-validation" novalidate>
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <label for="name">Nama</label>
                                    <input type="text" id="name" class="form-control" placeholder="Nama kamu" autocomplete="name" required>
                                    <div class="invalid-feedback">Nama wajib diisi.</div>
                                </div>
                                <div class="col-md-6">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" class="form-control" placeholder="email@kamu.com" autocomplete="email" required>
                                    <div class="invalid-feedback">Masukkan email yang valid.</div>
                                </div>
                                <div class="col-12">
                                    <label for="message">Pesan</label>
                                    <textarea id="message" rows="5" class="form-control" placeholder="Tulis pesan..." minlength="10" required></textarea>
                                    <div class="invalid-feedback">Pesan minimal 10 karakter.</div>
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary-custom">
                                        Kirim Pesan <i class="bi bi-send"></i>
                                    </button>
                                </div>
                            </div>
                            <p id="formMessage" class="form-message" role="status" aria-live="polite"></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    </main>

    <!-- PROJECT MODAL -->
    <div class="modal fade" id="projectModal" tabindex="-1" aria-labelledby="projectModalTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="projectModalTitle">Detail Project</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Tutup"></button>
                </div>
                <div class="modal-body">
                    <img id="modalImage" class="modal-project-image" src="" alt="">
                    <span class="modal-category" id="modalCategory"></span>
                    <h3 id="modalName"></h3>
                    <p id="modalDesc"></p>

                    <div class="modal-details">
                        <div><span>PERAN</span><p id="modalRole"></p></div>
                        <div><span>TEKNOLOGI</span><p id="modalTech"></p></div>
                    </div>

                    <ul class="modal-features" id="modalFeatures"></ul>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-custom" data-bs-dismiss="modal">Tutup</button>
                    <a id="modalLink" href="#" class="btn btn-primary-custom" target="_blank" rel="noopener noreferrer">
                        Kunjungi Website <i class="bi bi-arrow-up-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <button id="backToTop" type="button" aria-label="Kembali ke atas" title="Kembali ke atas">
        <i class="bi bi-arrow-up"></i>
    </button>

    <footer>
        <div class="container">
            <div class="row g-5 footer-top">
                <div class="col-lg-5">
                    <a href="#home" class="footer-brand">PT Sigma Cipta Caraka</a>
                    <p>Mitra digital untuk website, desain UI/UX, dan solusi jaringan bisnis Anda.</p>
                    <div class="footer-socials">
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="bi bi-github"></i></a>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
                        <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
                    </div>
                </div>
                <div class="col-6 col-lg-3">
                    <h4 class="footer-title">Menu</h4>
                    <ul class="footer-links">
                        <li><a href="#layanan">Layanan</a></li><li><a href="#tentang">Tentang</a></li>
                        <li><a href="#proyek">Proyek</a></li><li><a href="#pendiri">Pendiri</a></li>
                    </ul>
                </div>
                <div class="col-6 col-lg-4">
                    <h4 class="footer-title">Kontak</h4>
                    <ul class="footer-links">
                        <li>email@contoh.com</li><li>+62 800 0000 0000</li><li>Indonesia</li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <span>© 2026 PT Sigma Cipta Caraka. All rights reserved.</span>
                <span>Designed &amp; Built with <i class="bi bi-heart-fill"></i></span>
            </div>
        </div>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="javascript.js"></script>
    <script src="animator.js"></script>
</body>
</html>
