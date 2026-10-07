// ========== DATA ==========
const INDONESIA = { lat: -2.0, lng: 118.0, altitude: 1.2 };

const COLORS = {
    strength:    '#00ff66',
    weakness:    '#ffea00',
    opportunity: '#00f3ff',
    threat:      '#ff003c'
};

const swotData = {
    strength: [
        {
            lat: -4.5, lng: 139.0, // Papua - kekayaan SDA darat & potensi kelautan timur
            title: 'KEKAYAAN SDA & POTENSI KELAUTAN',
            tag: 'KEKUATAN_01',
            desc: 'Indonesia memiliki kekayaan sumber daya alam darat yang melimpah (seperti nikel, emas, dan batu bara) serta potensi ekonomi sektor kelautan yang diperkirakan mencapai Rp17.000 triliun hingga Rp20.000 triliun per tahun jika dikelola secara maksimal.',
            masaLalu: 'Kejayaan jalur perdagangan rempah-rempah Nusantara (pala dan cengkeh) di era kerajaan-kerajaan maritim yang menjadi daya tarik utama perdagangan internasional sejak abad ke-15.',
            masaSekarang: 'Indonesia memiliki cadangan nikel terbesar di dunia (mencapai sekitar 55 juta metrik ton atau 42% dari total cadangan global), yang menempatkan Indonesia sebagai pemain kunci dalam rantai pasok industri baterai kendaraan listrik (Electric Vehicle) dunia.',
            sumber: [
                'https://pubs.usgs.gov/periodicals/mcs2024/mcs2024-nickel.pdf',
                'https://nasional.kontan.co.id/news/jokowi-taksir-potensi-kelautan-rp-17000-t-setahun'
            ],
            color: COLORS.strength
        },
        {
            lat: 1.8, lng: 101.5, // Selat Malaka - poros maritim dunia
            title: 'WILAYAH GEOGRAFIS STRATEGIS',
            tag: 'KEKUATAN_02',
            desc: 'Terletak di antara dua samudra (Hindia dan Pasifik) serta dua benua (Asia dan Australia), Indonesia menguasai jalur pelayaran internasional utama seperti Selat Malaka, Selat Sunda, dan Selat Lombok.',
            masaLalu: 'Kejayaan Kerajaan Sriwijaya dan Majapahit sebagai pusat perdagangan internasional yang mengontrol dan mengamankan lalu lintas kapal pedagang mancanegara.',
            masaSekarang: 'Lebih dari satu pertiga lalu lintas perdagangan maritim dunia dan jalur distribusi energi global melintasi Selat Malaka setiap tahunnya, memberikan Indonesia kedudukan strategis secara geopolitik dan ekonomi.',
            sumber: [
                'https://unctad.org/system/files/official-document/rmt2023overview_en.pdf'
            ],
            color: COLORS.strength
        },
        {
            lat: -7.9, lng: 112.6, // Jawa Timur - pusat bonus demografi & ekonomi digital
            title: 'BONUS DEMOGRAFI & GENERASI MUDA',
            tag: 'KEKUATAN_03',
            desc: 'Berdasarkan data Sensus Penduduk, mayoritas penduduk Indonesia (sebesar 70,72%) berada pada kelompok usia produktif (15-64 tahun), yang menjadi modal utama dalam mendorong pertumbuhan ekonomi.',
            masaLalu: 'Pergerakan pemuda tahun 1908 (Budi Utomo) dan 1928 yang menjadi motor penggerak kesadaran nasional.',
            masaSekarang: 'Pesatnya pertumbuhan ekonomi digital Indonesia yang didominasi oleh inovasi generasi muda, seperti lahirnya berbagai perusahaan tech startup dan unicorn nasional.',
            sumber: [
                'https://sensus.bps.go.id/berita_resmi/detail/sp2020/14/hasil-sensus-penduduk-2020'
            ],
            color: COLORS.strength
        }
    ],
    weakness: [
        {
            lat: -8.8, lng: 121.5, // NTT - wilayah dengan IPM rendah
            title: 'KUALITAS SDM & LITERASI RENDAH',
            tag: 'KEKURANGAN_01',
            desc: 'Meskipun memiliki jumlah penduduk yang besar, tingkat pendidikan, keterampilan teknis, dan tingkat literasi masyarakat Indonesia secara umum masih tergolong rendah jika dibandingkan dengan negara-negara berkembang lainnya.',
            masaLalu: 'Rendahnya tingkat pendidikan pasca-kemerdekaan membuat Indonesia sangat bergantung pada tenaga ahli asing dalam mengelola industri vital, seperti eksplorasi pertambangan dan minyak bumi di awal era Orde Baru.',
            masaSekarang: 'Penilaian Programme for International Student Assessment (PISA) konsisten menunjukkan skor kemampuan membaca, matematika, dan sains siswa Indonesia berada di kelompok 10-15% terendah di dunia. Selain itu, masalah stunting (tengkes) pada anak masih menjadi tantangan serius bagi kualitas fisik dan kognitif SDM masa depan.',
            sumber: ['https://www.oecd.org/en/about/programmes/pisa.html'],
            color: COLORS.weakness
        },
        {
            lat: -4.3, lng: 136.2, // Papua - wilayah timur yang tertinggal
            title: 'KESENJANGAN PEMBANGUNAN ANTARWILAYAH',
            tag: 'KEKURANGAN_02',
            desc: 'Pembangunan ekonomi dan infrastruktur nasional selama bertahun-tahun cenderung berpusat di Pulau Jawa (Jawa-sentris), sehingga menimbulkan jurang ketimpangan fasilitas pendidikan, kesehatan, dan ekonomi antara Indonesia Barat dan Indonesia Timur.',
            masaLalu: 'Ketimpangan alokasi pembangunan antara pusat (Jawa) dan daerah pada era 1950-an memicu kekecewaan daerah hingga memunculkan gerakan pemicu konflik internal di beberapa wilayah (seperti PRRI/Permesta).',
            masaSekarang: 'Indeks Pembangunan Manusia (IPM) di wilayah seperti Papua dan Nusa Tenggara Timur (NTT) masih jauh tertinggal dibandingkan wilayah DKI Jakarta atau DI Yogyakarta. Akses terhadap listrik, air bersih, dan internet di wilayah 3T (Tertinggal, Terdepan, dan Terluar) juga masih terbatas.',
            sumber: ['https://www.bps.go.id/id/statistics-table/1/MTIyMCMx/indeks-pembangunan-manusia-menurut-provinsi.html'],
            color: COLORS.weakness
        },
        {
            lat: -6.2, lng: 106.8, // Jakarta - pusat birokrasi & kasus korupsi
            title: 'BIROKRASI LAMBAT & KORUPSI TINGGI',
            tag: 'KEKURANGAN_03',
            desc: 'Kerumitan birokrasi, regulasi yang tumpang-tindih, serta masih maraknya praktik korupsi, kolusi, dan nepotisme (KKN) menjadi penghambat utama efisiensi pelayanan publik dan iklim investasi.',
            masaLalu: 'Praktik KKN yang meluas pada era Orde Baru merusak tatanan perbankan nasional, yang akhirnya memperparah dampak Krisis Moneter 1997/1998 di Indonesia.',
            masaSekarang: 'Kasus korupsi skala besar yang melibatkan pejabat publik, anggota DPR, hingga aparat penegak hukum masih sering terjadi (seperti korupsi tata niaga komoditas, proyek infrastruktur, atau bantuan sosial) yang merugikan keuangan negara hingga triliunan rupiah.',
            sumber: ['https://www.transparency.org/en/cpi'],
            color: COLORS.weakness
        },
        {
            lat: 1.1, lng: 104.0, // Batam - gerbang impor barang modal & komponen
            title: 'KETERGANTUNGAN IMPOR TEKNOLOGI',
            tag: 'KEKURANGAN_04',
            desc: 'Indonesia kaya akan sumber daya alam, namun industri dalam negeri masih memiliki ketergantungan yang sangat tinggi terhadap impor barang modal, komponen elektronik, mesin industri, serta bahan baku penolong.',
            masaLalu: 'Booms minyak dan gas (migas) pada era 1970-an tidak dimanfaatkan secara optimal untuk membangun fondasi industri manufaktur berteknologi tinggi berbasis kemandirian, sehingga perekonomian langsung terguncang saat harga minyak dunia anjlok.',
            masaSekarang: 'Sektor farmasi dalam negeri masih mengimpor lebih dari 80-90% Bahan Baku Obat (BBO). Selain itu, industri manufaktur otomotif dan elektronik nasional masih sangat bergantung pada pasokan komponen utama dari luar negeri.',
            sumber: ['https://www.kemendag.go.id/sumber-informasi/statistik-perdagangan'],
            color: COLORS.weakness
        },
        {
            lat: -1.4, lng: 120.8, // Poso - titik konflik horizontal era Reformasi
            title: 'KERENTANAN KONFLIK & POLITIK IDENTITAS',
            tag: 'KEKURANGAN_05',
            desc: 'Keanekaragaman suku, agama, ras, dan antar-golongan (SARA) merupakan kekayaan bangsa, namun di sisi lain menjadi titik lemah jika dimanipulasi oleh politik identitas dan penyebaran informasi palsu (hoax).',
            masaLalu: 'Konflik komunal sosial-kemasyarakatan berdarah yang pernah terjadi di Sampit (2001) serta konflik berlatar belakang agama di Poso dan Ambon pada era pasca-Reformasi (1999-2002).',
            masaSekarang: 'Maraknya penggunaan narasi politisasi agama, manipulasi isu SARA di media sosial, serta polarisasi masyarakat yang tajam setiap kali pelaksanaan Pemilihan Umum (Pemilu) maupun Pilkada.',
            sumber: ['https://www.komnasham.go.id/index.php/laporan'],
            color: COLORS.weakness
        }
    ],
    opportunity: [
        {
            lat: -2.6, lng: 121.6, // Sulawesi - pusat industri hilirisasi nikel (Morowali)
            title: 'HILIRISASI SUMBER DAYA ALAM',
            tag: 'PELUANG_01',
            desc: 'Indonesia memiliki sumber daya alam yang besar, seperti nikel, bauksit, tembaga, kelapa sawit, rumput laut, dan hasil perikanan. Peluangnya adalah mengolah bahan mentah tersebut menjadi produk jadi atau setengah jadi sehingga memiliki nilai tambah yang lebih tinggi.',
            contoh: 'Nikel tidak hanya diekspor sebagai bahan mentah, tetapi dikembangkan menjadi bahan baku baterai dan bagian dari ekosistem kendaraan listrik. Menurut BKPM, realisasi investasi hilirisasi sepanjang 2025 mencapai Rp584,1 triliun, tumbuh 43,3% dibandingkan tahun sebelumnya. Pemerintah juga telah menyusun peta jalan hilirisasi untuk 28 komoditas di 8 sektor.',
            sumber: 'https://bkpm.go.id/id/info/siaran-pers/realisasi-investasi-2025-lampaui-target-hilirisasi-melompat-43-3-persen',
            color: COLORS.opportunity
        },
        {
            lat: -1.0, lng: 116.5, // Kalimantan - proyek strategis & kawasan industri
            title: 'PELUANG INVESTASI YANG BESAR',
            tag: 'PELUANG_02',
            desc: 'Indonesia memiliki pasar domestik yang besar, sumber daya alam yang melimpah, serta berbagai proyek strategis yang dapat menarik investasi dalam negeri maupun asing.',
            contoh: 'Investasi dapat dikembangkan pada sektor industri, infrastruktur, pariwisata, energi, kawasan industri, dan pengolahan sumber daya alam. BKPM mencatat realisasi investasi Indonesia sepanjang 2025 mencapai Rp1.931,2 triliun, dengan penyerapan tenaga kerja sekitar 2,71 juta orang. BKPM juga menyediakan katalog proyek investasi strategis yang dapat ditawarkan kepada investor.',
            sumber: 'https://bkpm.go.id/id/info/siaran-pers/realisasi-investasi-semester-i-2026-tembus-rp-1-010-t-serap-1-4-juta-tenaga-kerja-langsung',
            color: COLORS.opportunity
        },
        {
            lat: -10.2, lng: 123.6, // NTT - potensi PLTS, angin & energi laut
            title: 'ENERGI BARU DAN TERBARUKAN',
            tag: 'PELUANG_03',
            desc: 'Indonesia memiliki potensi energi terbarukan yang sangat besar karena kondisi geografisnya. Sumbernya meliputi tenaga surya, air, angin, bioenergi, panas bumi, dan energi laut.',
            contoh: 'Pengembangan pembangkit listrik tenaga surya, panas bumi, dan energi air dapat menjadi peluang untuk memenuhi kebutuhan energi sekaligus mendukung transisi menuju energi yang lebih bersih. BKPM memperkirakan Indonesia memiliki potensi energi terbarukan lebih dari 3.600 GW, sementara pemanfaatannya masih kurang dari 1%. Kondisi tersebut menunjukkan masih terdapat ruang pengembangan yang besar.',
            sumber: 'https://bkpm.go.id/id/info/artikel/book/katalog-peluang-proyek-investasi-di-indonesia',
            color: COLORS.opportunity
        },
        {
            lat: -6.3, lng: 107.5, // Jabodetabek - pusat ekonomi digital & UMKM
            title: 'PENGEMBANGAN EKONOMI DIGITAL',
            tag: 'PELUANG_04',
            desc: 'Perkembangan teknologi dan penggunaan internet membuka peluang bagi Indonesia untuk mengembangkan ekonomi digital, seperti perdagangan elektronik, layanan digital, teknologi finansial, dan bisnis berbasis teknologi.',
            contoh: 'UMKM dapat menggunakan marketplace dan media digital untuk menjual produk ke konsumen dari berbagai daerah, bahkan membuka peluang pasar internasional. Peluang ini juga dapat mendorong munculnya perusahaan teknologi baru, lapangan pekerjaan di bidang digital, serta transformasi bisnis konvensional menjadi bisnis berbasis teknologi.',
            sumber: 'https://www.ekon.go.id/publikasi/detail/6849/sinergi-digitalisasi-pusat-dan-daerah-kemenko-perekonomian-paparkan-strategi-nasional-pengembangan-ekonomi-digital',
            color: COLORS.opportunity
        },
        {
            lat: -8.4, lng: 115.5, // Bali - destinasi pariwisata utama
            title: 'PENGEMBANGAN PARIWISATA',
            tag: 'PELUANG_05',
            desc: 'Indonesia memiliki kekayaan alam dan budaya yang beragam, mulai dari pantai, pegunungan, hutan, hingga berbagai tradisi dan peninggalan budaya. Hal tersebut menjadi peluang untuk mengembangkan sektor pariwisata.',
            contoh: 'Pengembangan destinasi wisata di berbagai daerah dapat meningkatkan pendapatan masyarakat melalui hotel, restoran, transportasi, UMKM, kerajinan, dan jasa wisata. BKPM juga memasukkan pariwisata sebagai salah satu sektor dalam daftar peluang investasi Indonesia, dengan berbagai proyek yang tersebar di daerah.',
            sumber: 'https://kemenpar.go.id/berita/menpar-paparkan-capaian-pariwisata-2025-dan-rencana-kerja-2026-di-hadapan-komisi-vii-dpr',
            color: COLORS.opportunity
        },
        {
            lat: -3.7, lng: 128.2, // Maluku - pusat perikanan & hilirisasi hasil laut
            title: 'SEKTOR KELAUTAN & PERIKANAN',
            tag: 'PELUANG_06',
            desc: 'Sebagai negara kepulauan, Indonesia memiliki potensi besar dalam sektor kelautan dan perikanan. Peluangnya tidak hanya berasal dari penangkapan ikan, tetapi juga dari pengolahan hasil laut dan pengembangan industri turunannya.',
            contoh: 'Ikan, udang, garam, dan rumput laut dapat diolah menjadi produk bernilai tambah sebelum dipasarkan di dalam maupun luar negeri. BKPM mencatat bahwa pemerintah mendorong hilirisasi sektor kelautan dan perikanan, termasuk rumput laut, garam, serta berbagai jenis ikan.',
            sumber: 'https://share.google/caWx4VFBg2SPh45pq',
            color: COLORS.opportunity
        }
    ],
    threat: [
        {
            lat: 4.6, lng: 97.5, // Aceh - tantangan SDM & jebakan pendapatan menengah
            title: 'KUALITAS SDM & MIDDLE INCOME TRAP',
            tag: 'ANCAMAN_01',
            poin: [
                { label: 'Pendidikan belum merata', isi: 'Akses dan fasilitas sekolah di daerah tertinggal masih tertinggal jauh dibanding kota besar.' },
                { label: 'Jebakan pendapatan menengah', isi: 'Indonesia harus meningkatkan produktivitas dan keterampilan tenaga kerja agar tidak terjebak dalam middle income trap dalam perjalanan menuju Indonesia Emas 2045.' }
            ],
            sumber: ['https://deepublishstore.com/blog/sejarah/tantangan-generasi-muda-dalam-membangun-indonesia/'],
            color: COLORS.threat
        },
        {
            lat: -2.99, lng: 104.77, // Palembang - kesenjangan sosial & ekonomi
            title: 'KESENJANGAN SOSIAL & EKONOMI',
            tag: 'ANCAMAN_02',
            poin: [
                { label: 'Ketimpangan wilayah', isi: 'Perbedaan tingkat pembangunan antara kawasan barat dan timur Indonesia, serta antara perkotaan dan pedesaan, masih tinggi.' },
                { label: 'Kemiskinan dan pengangguran', isi: 'Keterbatasan jumlah lapangan kerja yang sebanding dengan jumlah angkatan kerja baru memicu masalah pengangguran.' }
            ],
            sumber: ['https://masuk-ptn.com/materi/persatuan-dan-kedaulatan-bangsa-materi-ppkn-kelas-11/tantangan-integrasi-nasional'],
            color: COLORS.threat
        },
        {
            lat: -0.0, lng: 109.3, // Pontianak - persatuan & integritas nasional
            title: 'PERSATUAN & INTEGRITAS NASIONAL',
            tag: 'ANCAMAN_03',
            poin: [
                { label: 'Intoleransi dan radikalisme', isi: 'Menguatnya politik identitas, etnosentrisme, serta paham radikal dapat merusak kerukunan dalam masyarakat yang beragam.' },
                { label: 'Disinformasi', isi: 'Penyebaran berita bohong atau hoaks di media sosial yang mudah memecah belah warga.' }
            ],
            sumber: ['https://www.gramedia.com/literasi/tantangan-dalam-menjaga-keutuhan-nkri/'],
            color: COLORS.threat
        },
        {
            lat: -5.1, lng: 119.4, // Makassar - tata kelola & korupsi
            title: 'TATA KELOLA & KORUPSI',
            tag: 'ANCAMAN_04',
            poin: [
                { label: 'Pemberantasan korupsi', isi: 'Praktik korupsi dan lemahnya penegakan hukum masih menjadi penghambat utama efisiensi pembangunan nasional.' },
                { label: 'Pengelolaan SDA', isi: 'Pemanfaatan sumber daya alam yang belum optimal secara berkelanjutan sering memicu isu lingkungan seperti kerusakan alam.' }
            ],
            sumber: ['https://id.scribd.com/document/862615468/BAB-2-SUB-B-Kelemahan-Dan-Tantangan-Bgsa-Indo'],
            color: COLORS.threat
        }
    ]
};

// ========== GLOBE INIT ==========
const elem = document.getElementById('globeViz');

// Di layar sempit globe harus terlihat dari jauh agar tidak tertutup panel
const isMobileView = () => window.matchMedia('(max-width: 700px)').matches;
const homeView = () => ({
    lat: INDONESIA.lat,
    lng: INDONESIA.lng,
    altitude: isMobileView() ? 2.4 : INDONESIA.altitude
});

const world = Globe()(elem)
    .backgroundColor('rgba(0,0,0,0)')
    .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
    .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
    .showAtmosphere(true)
    .atmosphereColor('#00f3ff')
    .atmosphereAltitude(0.15)
    .pointOfView({ lat: 0, lng: 118, altitude: 2.5 })
    // Rings
    .ringColor('color')
    .ringMaxRadius(3)
    .ringPropagationSpeed(1.5)
    .ringRepeatPeriod(800)
    // HTML crosshair markers
    .htmlElementsData([])
    .htmlElement(d => {
        const wrapper = document.createElement('div');
        wrapper.className = 'globe-marker';
        // Ukuran ikon menyesuaikan layar: lebih kecil di HP supaya tidak menutupi globe
        const iconSize = window.innerWidth < 700 ? 32 : 40;
        const halfBox = iconSize / 2 + 12; // ikon/2 + padding CSS
        wrapper.style.transform = 'translate(' + (-halfBox) + 'px,' + (-halfBox) + 'px)';
        wrapper.innerHTML = `
            <svg width="${iconSize}" height="${iconSize}" viewBox="0 0 40 40" style="filter: drop-shadow(0 0 6px ${d.color}); overflow:visible;">
                <!-- outer circle -->
                <circle cx="20" cy="20" r="14" fill="none" stroke="${d.color}" stroke-width="1.5" opacity="0.6"/>
                <!-- inner circle -->
                <circle cx="20" cy="20" r="5" fill="none" stroke="${d.color}" stroke-width="1.5"/>
                <!-- crosshair lines -->
                <line x1="20" y1="0" x2="20" y2="12" stroke="${d.color}" stroke-width="1.5"/>
                <line x1="20" y1="28" x2="20" y2="40" stroke="${d.color}" stroke-width="1.5"/>
                <line x1="0" y1="20" x2="12" y2="20" stroke="${d.color}" stroke-width="1.5"/>
                <line x1="28" y1="20" x2="40" y2="20" stroke="${d.color}" stroke-width="1.5"/>
                <!-- center dot -->
                <circle cx="20" cy="20" r="2" fill="${d.color}"/>
            </svg>
        `;
        wrapper.onclick = () => {
            showDetail(d);
            const zoomAlt = isMobileView() ? 1.6 : 0.4;
            world.pointOfView({ lat: d.lat, lng: d.lng, altitude: zoomAlt }, 1500);
        };
        return wrapper;
    });

// Load country borders as wireframe overlay
fetch('https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
    .then(r => r.json())
    .then(countries => {
        world.polygonsData(countries.features)
            .polygonAltitude(0.006)
            .polygonCapColor(() => 'rgba(0, 80, 120, 0.15)')
            .polygonSideColor(() => 'rgba(0, 243, 255, 0.05)')
            .polygonStrokeColor(() => 'rgba(0, 243, 255, 0.7)');
    });

// Auto-rotate
world.controls().autoRotate = true;
world.controls().autoRotateSpeed = 0.5;

// Ukuran awal mengikuti layar + fokus ke Indonesia
world.width(window.innerWidth).height(window.innerHeight);
setTimeout(() => world.pointOfView(homeView(), 2000), 800);

// Globe selalu mengisi layar saat HP diputar / browser di-resize
let resizeTimer = null;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        world.width(window.innerWidth).height(window.innerHeight);
    }, 150);
});
window.addEventListener('orientationchange', () => {
    setTimeout(() => world.width(window.innerWidth).height(window.innerHeight), 300);
});

// ========== INTERACTION ==========
let currentCategory = null;

function setCategory(category) {
    currentCategory = category;
    const data = swotData[category] || [];

    // Button highlight
    document.querySelectorAll('.buttons button').forEach(b => b.classList.remove('active-btn'));
    document.getElementById('btn-' + category).classList.add('active-btn');

    const statusEl = document.getElementById('status-text');

    if (category === 'threat') {
        document.body.classList.add('threat-active');
        world.controls().autoRotate = false;
        statusEl.textContent = 'CRITICAL ALERT';
        statusEl.className = 'status-danger';
        world.atmosphereColor('#ff003c');
        world.pointOfView({ lat: INDONESIA.lat, lng: INDONESIA.lng, altitude: isMobileView() ? 2.1 : 1.5 }, 1500);
    } else {
        document.body.classList.remove('threat-active');
        world.controls().autoRotate = true;
        statusEl.textContent = 'SCANNING...';
        statusEl.className = 'status-ok';
        world.atmosphereColor('#00f3ff');
    }

    // Set markers + rings
    world.htmlElementsData(data);
    world.ringsData(data);

    // Reset view
    if (category !== 'threat') {
        setTimeout(() => {
            if (!document.getElementById('detail-modal').classList.contains('hidden')) return;
            world.pointOfView(homeView(), 1200);
        }, 100);
    }

    closeModal();
}

function showDetail(point) {
    const modal = document.getElementById('detail-modal');
    const title = document.getElementById('detail-title');
    const desc = document.getElementById('detail-desc');
    const tag = document.getElementById('detail-tag');

    const contohWrap = document.getElementById('detail-contoh-wrap');
    const contoh = document.getElementById('detail-contoh');
    const masaLaluWrap = document.getElementById('detail-masalalu-wrap');
    const masaLalu = document.getElementById('detail-masalalu');
    const masaSekarangWrap = document.getElementById('detail-masasekarang-wrap');
    const masaSekarang = document.getElementById('detail-masasekarang');
    const poinWrap = document.getElementById('detail-poin-wrap');
    const poinList = document.getElementById('detail-poin');
    const sumberWrap = document.getElementById('detail-sumber-wrap');
    const sumberList = document.getElementById('detail-sumber-list');

    title.textContent = point.title;
    title.style.color = point.color;
    desc.textContent = point.desc;

    // Tag / ID data di atas judul
    tag.textContent = '// ' + (point.tag || 'DATA');
    tag.style.color = point.color;
    tag.style.borderColor = point.color;

    // Helper: tampilkan/sembunyikan bagian teks opsional
    const setText = (wrap, el, value) => {
        if (value) {
            el.textContent = value;
            wrap.classList.remove('hidden');
        } else {
            wrap.classList.add('hidden');
        }
    };

    setText(contohWrap, contoh, point.contoh);
    setText(masaLaluWrap, masaLalu, point.masaLalu);
    setText(masaSekarangWrap, masaSekarang, point.masaSekarang);

    // Daftar poin bertanda bullet (mis. poin tantangan): {label, isi}
    poinList.innerHTML = '';
    if (point.poin && point.poin.length) {
        point.poin.forEach(p => {
            const li = document.createElement('li');
            const strong = document.createElement('strong');
            strong.textContent = p.label + ': ';
            li.appendChild(strong);
            li.appendChild(document.createTextNode(p.isi));
            poinList.appendChild(li);
        });
        poinWrap.classList.remove('hidden');
    } else {
        poinWrap.classList.add('hidden');
    }

    // Sumber (opsional) - bisa 1 string atau beberapa (array)
    sumberList.innerHTML = '';
    const sumberArr = point.sumber
        ? (Array.isArray(point.sumber) ? point.sumber : [point.sumber])
        : [];

    if (sumberArr.length) {
        sumberArr.forEach((url, i) => {
            const a = document.createElement('a');
            a.className = 'source-link';
            a.href = url;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.textContent = sumberArr.length > 1
                ? `OPEN_SOURCE_0${i + 1}`
                : 'OPEN_SOURCE';
            sumberList.appendChild(a);
        });
        sumberWrap.classList.remove('hidden');
    } else {
        sumberWrap.classList.add('hidden');
    }

    modal.style.borderColor = point.color;
    modal.style.setProperty('--accent', point.color);
    modal.classList.remove('hidden');
    modal.style.display = 'block';
    modal.setAttribute('aria-hidden', 'false');

    world.controls().autoRotate = false;
    document.getElementById('status-text').textContent = 'TARGET LOCKED';
}

function closeModal() {
    const modal = document.getElementById('detail-modal');
    modal.classList.add('hidden');
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');

    if (currentCategory === 'threat') {
        world.controls().autoRotate = false;
        world.pointOfView({ lat: INDONESIA.lat, lng: INDONESIA.lng, altitude: isMobileView() ? 2.1 : 1.5 }, 1200);
        document.getElementById('status-text').textContent = 'CRITICAL ALERT';
    } else {
        world.controls().autoRotate = true;
        world.pointOfView(homeView(), 1200);
        document.getElementById('status-text').textContent = 'ONLINE';
    }
}

// ========== FEEDBACK (via SUPABASE) ==========
const SUPABASE_URL = 'https://svsjxqxxwjetvtucjynk.supabase.co';
const SUPABASE_KEY = 'sb_publishable_RCquFS_iB6WMEj03NWQa_w_YLyVqJ0l';
const COMMENTS_ENDPOINT = SUPABASE_URL + '/rest/v1/comments';
const MAX_MESSAGE_LENGTH = 500;

const commentsHeaders = {
    apikey: SUPABASE_KEY,
    Authorization: 'Bearer ' + SUPABASE_KEY,
    'Content-Type': 'application/json'
};

let commentsLoaded = false;
// null = belum diketahui, true = kolom parent_id tersedia, false = belum ada
let parentIdColumnAvailable = null;
// Penghitung urutan render, dipakai untuk efek masuk berurutan tiap item
let commentSequence = 0;

function setLogStatus(message, type) {
    const el = document.getElementById('log-status');
    if (!el) return;
    el.textContent = message || '';
    if (type) {
        el.dataset.type = type;
    } else {
        delete el.dataset.type;
    }
}

function formatLogTime(value) {
    const date = new Date(value);
    if (isNaN(date.getTime())) return '--';
    return date.toLocaleString('id-ID', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

// Markdown ringan: **bold**, *italic*, `code`, [teks](url), dan daftar "- ".
// Input di-escape lebih dulu, jadi HTML dari pengguna tidak pernah dieksekusi.
function inlineMarkdown(str) {
    const codes = [];
    let out = str.replace(/`([^`]+)`/g, (match, code) => {
        codes.push(code);
        return '\u0000C' + (codes.length - 1) + '\u0000';
    });

    out = out.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (match, label, url) => {
        if (!/^https?:\/\//i.test(url)) return label;
        return '<a href="' + url + '" target="_blank" rel="noopener noreferrer">' + label + '</a>';
    });

    out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    out = out.replace(/(^|[\s(])\*([^*\n]+)\*/g, '$1<em>$2</em>');
    out = out.replace(/(^|[\s(])_([^_\n]+)_/g, '$1<em>$2</em>');

    return out.replace(/\u0000C(\d+)\u0000/g, (match, i) => '<code>' + codes[Number(i)] + '</code>');
}

function renderMarkdown(text) {
    return escapeHtml(text)
        .split(/\n{2,}/)
        .map(block => {
            const lines = block.split('\n').filter(line => line.trim() !== '');
            if (!lines.length) return '';

            if (lines.every(line => /^\s*[-*]\s+/.test(line))) {
                const items = lines
                    .map(line => '<li>' + inlineMarkdown(line.replace(/^\s*[-*]\s+/, '')) + '</li>')
                    .join('');
                return '<ul>' + items + '</ul>';
            }

            return '<p>' + inlineMarkdown(lines.join('<br />')) + '</p>';
        })
        .join('');
}

const MESSAGE_CLAMP_LENGTH = 240;

// Pesan panjang dilipat supaya daftar log tidak menutupi seluruh panel
function buildMessageElement(text) {
    const msg = document.createElement('div');
    msg.className = 'log-item-msg';
    msg.innerHTML = renderMarkdown(text || '');

    if (String(text || '').length <= MESSAGE_CLAMP_LENGTH) return msg;

    msg.classList.add('clamped');

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'log-msg-toggle';
    toggle.textContent = '[ Lihat Selengkapnya ]';

    const wrap = document.createElement('div');
    wrap.className = 'log-item-msg-wrap is-clamped';
    wrap.appendChild(msg);
    wrap.appendChild(toggle);

    toggle.addEventListener('click', () => {
        const clamped = msg.classList.toggle('clamped');
        wrap.classList.toggle('is-clamped', clamped);
        toggle.textContent = clamped ? '[ Lihat Selengkapnya ]' : '[ Lipat ]';
    });

    return wrap;
}

function buildCommentItem(comment, isReply, byId) {
    const item = document.createElement('article');
    item.className = 'log-item' + (isReply ? ' log-item-reply' : '');

    // Efek masuk berurutan supaya daftar terasa hidup saat dimuat
    item.style.animationDelay = Math.min(commentSequence * 45, 620) + 'ms';
    commentSequence += 1;

    const head = document.createElement('div');
    head.className = 'log-item-head';

    const left = document.createElement('div');
    left.className = 'log-item-head-left';

    const name = document.createElement('span');
    name.className = 'log-item-name';
    name.textContent = comment.name || 'ANONIM';
    left.appendChild(name);

    if (isReply) {
        const to = document.createElement('span');
        to.className = 'log-item-to';
        to.textContent = '→ @' + (((byId[comment.parent_id] || {}).name) || 'ANONIM');
        left.appendChild(to);
    }

    const right = document.createElement('div');
    right.className = 'log-item-head-right';

    const time = document.createElement('time');
    time.className = 'log-item-time';
    time.dateTime = comment.created_at || '';
    time.textContent = formatLogTime(comment.created_at);
    right.appendChild(time);

    // Tombol balas disembunyikan otomatis kalau kolom parent_id belum ada
    if (parentIdColumnAvailable !== false) {
        const replyBtn = document.createElement('button');
        replyBtn.type = 'button';
        replyBtn.className = 'log-reply-btn';
        replyBtn.dataset.action = 'reply';
        replyBtn.dataset.id = comment.id;
        replyBtn.dataset.name = comment.name || 'ANONIM';
        replyBtn.textContent = '[ Balas ]';
        right.appendChild(replyBtn);
    }

    head.appendChild(left);
    head.appendChild(right);
    item.appendChild(head);
    item.appendChild(buildMessageElement(comment.message));

    return item;
}

function renderComments(comments) {
    const listEl = document.getElementById('log-list');
    const countEl = document.getElementById('log-count');
    if (!listEl) return;

    if (countEl) countEl.textContent = '(' + comments.length + ')';

    if (!comments.length) {
        listEl.innerHTML = '<p class="log-empty">Belum ada feedback. Jadilah yang pertama!</p>';
        return;
    }

    const byId = {};
    comments.forEach(c => { byId[c.id] = c; });
    commentSequence = 0;

    // Pisahkan komentar akar dan turunannya (balasan bertingkat dirapikan 1 tingkat)
    const roots = [];
    const childrenOf = {};

    comments.forEach(comment => {
        const parent = comment.parent_id;
        if (parent && byId[parent]) {
            if (!childrenOf[parent]) childrenOf[parent] = [];
            childrenOf[parent].push(comment);
        } else {
            roots.push(comment);
        }
    });

    listEl.innerHTML = '';

    roots.forEach(root => {
        listEl.appendChild(buildCommentItem(root, false, byId));

        const replies = [];
        const collect = id => {
            (childrenOf[id] || []).forEach(child => {
                replies.push(child);
                collect(child.id);
            });
        };
        collect(root.id);

        if (!replies.length) return;

        replies.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

        const wrap = document.createElement('div');
        wrap.className = 'log-item-replies';
        replies.forEach(reply => wrap.appendChild(buildCommentItem(reply, true, byId)));
        listEl.appendChild(wrap);
    });

    if (parentIdColumnAvailable === false) {
        const notice = document.createElement('p');
        notice.className = 'log-notice';
        notice.textContent = 'Fitur balas belum aktif. Jalankan migrasi kolom parent_id di database.';
        listEl.appendChild(notice);
    }
}

async function loadComments() {
    const listEl = document.getElementById('log-list');
    if (!listEl) return;

    listEl.innerHTML = '<p class="log-empty">Memuat feedback...</p>';

    const baseFields = 'id,name,message,created_at';
    const fields = parentIdColumnAvailable === false ? baseFields : baseFields + ',parent_id';

    try {
        const response = await fetch(
            COMMENTS_ENDPOINT + '?select=' + fields + '&order=created_at.desc&limit=100',
            { headers: commentsHeaders }
        );

        if (!response.ok) throw new Error('HTTP ' + response.status);

        const comments = await response.json();
        parentIdColumnAvailable = true;
        const daftar = Array.isArray(comments) ? comments : [];
        renderComments(daftar);
        updateFloatFeed(daftar);
        commentsLoaded = true;
    } catch (error) {
        // Kolom parent_id belum ada -> ulangi tanpa fitur balasan
        if (parentIdColumnAvailable === null && String(error.message).indexOf('400') !== -1) {
            parentIdColumnAvailable = false;
            return loadComments();
        }
        listEl.innerHTML = '<p class="log-empty">Gagal memuat feedback. Coba muat ulang.</p>';
        console.error('Gagal memuat komentar:', error);
    }
}

function setReplyTarget(id, name) {
    const parentInput = document.getElementById('log-parent');
    const banner = document.getElementById('log-reply-banner');
    const target = document.getElementById('log-reply-target');
    const messageInput = document.getElementById('log-message');

    if (!parentInput || !banner) return;

    parentInput.value = String(id);
    if (target) target.textContent = name || 'ANONIM';
    banner.classList.remove('hidden');
    banner.style.display = 'flex';

    if (messageInput) {
        messageInput.focus();
        setLogStatus('Mode balas aktif untuk ' + (name || 'anonim') + '.', 'info');
    }
}

function resetReplyTarget() {
    const parentInput = document.getElementById('log-parent');
    const banner = document.getElementById('log-reply-banner');
    if (!parentInput || !banner) return;

    parentInput.value = '';
    banner.classList.add('hidden');
    banner.style.display = 'none';
}

// ===== Feedback melayang: tampilkan satu komentar, ganti otomatis =====
const FLOAT_INTERVAL = 7000; // jeda antar komentar (ms)

let floatComments = [];
let floatIndex = 0;
let floatTimer = null;

function floatFeedEl() {
    return document.getElementById('float-feed');
}

function stopFloatFeed() {
    if (floatTimer) {
        clearTimeout(floatTimer);
        floatTimer = null;
    }
}

// Susun daftar dot penanda halaman
function buildFloatPager() {
    const wrap = floatFeedEl();
    if (!wrap) return;

    const lama = wrap.querySelector('.float-pager');
    if (lama) lama.remove();

    if (floatComments.length < 2) return;

    const pager = document.createElement('div');
    pager.className = 'float-pager';

    floatComments.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.setAttribute('aria-label', 'Lihat feedback ' + (i + 1));
        if (i === floatIndex) dot.classList.add('aktif');
        dot.addEventListener('click', () => {
            floatIndex = i;
            tampilkanFloat();
        });
        pager.appendChild(dot);
    });

    const hitung = document.createElement('span');
    hitung.className = 'float-hitung';
    hitung.textContent = (floatIndex + 1) + '/' + floatComments.length;
    pager.appendChild(hitung);

    wrap.appendChild(pager);
}

// Menampilkan komentar pada floatIndex saat ini, lalu menjadwalkan
// komentar berikutnya. floatIndex hanya dinaikkan di satu tempat
// (di dalam timer) supaya penunjuk selalu sinkron dengan yang tampil.
function tampilkanFloat() {
    const wrap = floatFeedEl();
    if (!wrap || !floatComments.length) return;

    // Bersihkan jadwal lama supaya tidak ada dua timer berjalan
    stopFloatFeed();

    floatIndex = floatIndex % floatComments.length;
    const comment = floatComments[floatIndex];

    const kartu = document.createElement('article');
    kartu.className = 'float-card';

    const tag = document.createElement('div');
    tag.className = 'float-tag';
    const dot = document.createElement('span');
    dot.className = 'float-dot';
    dot.setAttribute('aria-hidden', 'true');
    tag.appendChild(dot);
    tag.appendChild(document.createTextNode('FEEDBACK_TERBARU'));

    const nama = document.createElement('div');
    nama.className = 'float-name';
    nama.textContent = comment.name || 'ANONIM';

    const pesan = document.createElement('div');
    pesan.className = 'float-msg';
    pesan.textContent = comment.message || '';

    const waktu = document.createElement('div');
    waktu.className = 'float-time';
    waktu.textContent = formatLogTime(comment.created_at);

    kartu.appendChild(tag);
    kartu.appendChild(nama);
    kartu.appendChild(pesan);
    kartu.appendChild(waktu);

    // Ganti kartu lama dengan animasi keluar
    const lama = wrap.querySelector('.float-card');
    if (lama) {
        lama.classList.add('sedang-keluar');
        setTimeout(() => lama.remove(), 380);
    }
    wrap.insertBefore(kartu, wrap.firstChild);

    perbaruiPager();

    // Jadwalkan komentar berikutnya
    if (floatComments.length > 1) {
        floatTimer = setTimeout(() => {
            floatIndex = (floatIndex + 1) % floatComments.length;
            tampilkanFloat();
        }, FLOAT_INTERVAL);
    }
}

// Samakan penanda halaman (dot + hitungan) dengan floatIndex
function perbaruiPager() {
    const wrap = floatFeedEl();
    if (!wrap) return;

    const pager = wrap.querySelector('.float-pager');
    if (!pager) return;

    pager.querySelectorAll('button').forEach((d, i) => {
        d.classList.toggle('aktif', i === floatIndex);
    });

    const hitung = pager.querySelector('.float-hitung');
    if (hitung) hitung.textContent = (floatIndex + 1) + '/' + floatComments.length;
}

function updateFloatFeed(comments) {
    const wrap = floatFeedEl();
    if (!wrap) return;

    if (!Array.isArray(comments) || !comments.length) {
        stopFloatFeed();
        wrap.innerHTML = '';
        floatComments = [];
        return;
    }

    // Komentar terbaru lebih dulu, maksimal 6 supaya tidak ramai
    floatComments = comments.slice(0, 6);

    // Kalau jumlah/id berubah, mulai dari awal lagi
    const tanda = floatComments.map(c => c.id).join(',');
    if (tanda !== wrap.dataset.tanda) {
        wrap.dataset.tanda = tanda;
        floatIndex = 0;
        wrap.innerHTML = '';
        buildFloatPager();
        tampilkanFloat();
    } else {
        buildFloatPager();
    }
}

async function submitComment(event) {
    event.preventDefault();

    const nameInput = document.getElementById('log-name');
    const messageInput = document.getElementById('log-message');
    const submitBtn = document.getElementById('log-submit');
    const parentInput = document.getElementById('log-parent');

    const name = nameInput.value.trim();
    const message = messageInput.value.trim();
    const parentId = parentInput ? parentInput.value : '';

    if (!name || !message) {
        setLogStatus('Nama dan pesan wajib diisi.', 'error');
        return;
    }

    if (name.length > 60 || message.length > MAX_MESSAGE_LENGTH) {
        setLogStatus('Pesan maksimal ' + MAX_MESSAGE_LENGTH + ' karakter.', 'error');
        return;
    }

    submitBtn.disabled = true;
    const originalLabel = submitBtn.textContent;
    submitBtn.textContent = 'Mengirim...';
    setLogStatus('');

    try {
        const payload = { name: name, message: message };
        if (parentId) payload.parent_id = Number(parentId);

        const response = await fetch(COMMENTS_ENDPOINT, {
            method: 'POST',
            headers: Object.assign({}, commentsHeaders, { Prefer: 'return=minimal' }),
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            let detail = 'HTTP ' + response.status;
            try {
                const errorPayload = await response.json();
                if (errorPayload && errorPayload.message) detail = errorPayload.message;
            } catch (parseError) {
                /* respons bukan JSON, abaikan */
            }
            throw new Error(detail);
        }

        document.getElementById('log-form').reset();
        document.getElementById('log-charcount').textContent = '0/' + MAX_MESSAGE_LENGTH;
        resetReplyTarget();
        setLogStatus(
            parentId ? 'Balasan terkirim. Terima kasih!' : 'Feedback terkirim. Terima kasih!',
            'success'
        );
        await loadComments();
    } catch (error) {
        setLogStatus('Gagal mengirim: ' + error.message, 'error');
        console.error('Gagal mengirim komentar:', error);
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
    }
}

// Kecilkan / tampilkan daftar feedback lewat tombol panah.
// Status disimpan di aria-expanded, jadi tidak hilang saat daftar di-render ulang.
function toggleComments(force) {
    const btn = document.getElementById('log-toggle');
    const list = document.getElementById('log-list');
    if (!btn || !list) return;

    const isExpanded = btn.getAttribute('aria-expanded') !== 'false';
    const shouldExpand = typeof force === 'boolean' ? force : !isExpanded;

    btn.setAttribute('aria-expanded', shouldExpand ? 'true' : 'false');
    list.classList.toggle('collapsed', !shouldExpand);
}

// Panel feedback kini mengapung: tidak lagi memblokir globe,
// jadi auto-rotate globe tidak perlu dimatikan.
function toggleLog(force) {
    const overlay = document.getElementById('log-overlay');
    if (!overlay) return;

    const isHidden = overlay.classList.contains('hidden') || overlay.style.display === 'none';
    const shouldOpen = typeof force === 'boolean' ? force : isHidden;

    if (shouldOpen) {
        overlay.classList.remove('hidden');
        overlay.style.display = 'block';
        overlay.setAttribute('aria-hidden', 'false');
        if (!commentsLoaded) loadComments();
    } else {
        overlay.classList.add('hidden');
        overlay.style.display = 'none';
        overlay.setAttribute('aria-hidden', 'true');
        resetReplyTarget();
    }
}

// Geser panel feedback dengan menyeret headernya.
// Posisi disimpan di CSS variable + class penanda agar tetap di tempat.
function initLogDrag() {
    const panel = document.getElementById('log-panel');
    const handle = document.querySelector('.log-drag');
    if (!panel || !handle) return;
    // Di HP panel berupa lembar tetap: seret dimatikan agar tidak kabur
    if (window.matchMedia('(max-width: 700px)').matches) return;

    let startX = 0;
    let startY = 0;
    let originLeft = 0;
    let originTop = 0;
    let dragging = false;

    // Hitung posisi sekarang lalu kunci sebagai left/top eksplisit
    const kunciPosisi = () => {
        const rect = panel.getBoundingClientRect();
        panel.style.setProperty('--log-x', rect.left + 'px');
        panel.style.setProperty('--log-y', rect.top + 'px');
        panel.classList.add('log-positioned');
    };

    const batasi = (x, y) => {
        const w = panel.offsetWidth;
        const h = panel.offsetHeight;
        const maxX = Math.max(8, window.innerWidth - w - 8);
        const maxY = Math.max(8, window.innerHeight - h - 8);
        return {
            x: Math.min(Math.max(8, x), maxX),
            y: Math.min(Math.max(8, y), maxY),
        };
    };

    const mulai = e => {
        if (e.target.closest('#log-close')) return; // tombol tutup tetap normal
        const point = e.touches ? e.touches[0] : e;
        dragging = true;
        startX = point.clientX;
        startY = point.clientY;
        kunciPosisi();
        const rect = panel.getBoundingClientRect();
        originLeft = rect.left;
        originTop = rect.top;
        panel.classList.add('log-dragging');
        e.preventDefault();
    };

    const jalan = e => {
        if (!dragging) return;
        const point = e.touches ? e.touches[0] : e;
        const pos = batasi(originLeft + (point.clientX - startX), originTop + (point.clientY - startY));
        panel.style.setProperty('--log-x', pos.x + 'px');
        panel.style.setProperty('--log-y', pos.y + 'px');
        e.preventDefault();
    };

    const lepas = () => {
        if (!dragging) return;
        dragging = false;
        panel.classList.remove('log-dragging');
    };

    handle.addEventListener('mousedown', mulai);
    window.addEventListener('mousemove', jalan);
    window.addEventListener('mouseup', lepas);

    handle.addEventListener('touchstart', mulai, { passive: false });
    window.addEventListener('touchmove', jalan, { passive: false });
    window.addEventListener('touchend', lepas);

    // Kalau layar diubah ukurannya, pastikan panel tetap di dalam layar
    window.addEventListener('resize', () => {
        if (!panel.classList.contains('log-positioned')) return;
        const rect = panel.getBoundingClientRect();
        const pos = batasi(rect.left, rect.top);
        panel.style.setProperty('--log-x', pos.x + 'px');
        panel.style.setProperty('--log-y', pos.y + 'px');
    });
}

// Buka / tutup daftar anggota kelompok di panel utama
function toggleMembers(force) {
    const btn = document.getElementById('btn-members');
    const list = document.getElementById('group-members');
    if (!btn || !list) return;

    const isExpanded = btn.getAttribute('aria-expanded') !== 'false';
    const shouldExpand = typeof force === 'boolean' ? force : !isExpanded;

    btn.setAttribute('aria-expanded', shouldExpand ? 'true' : 'false');
    list.classList.toggle('hidden', !shouldExpand);
    list.style.display = shouldExpand ? 'flex' : 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('log-form');
    const messageInput = document.getElementById('log-message');
    const charCount = document.getElementById('log-charcount');
    const refreshBtn = document.getElementById('log-refresh');
    const listEl = document.getElementById('log-list');
    const replyCancelBtn = document.getElementById('log-reply-cancel');
    const toggleBtn = document.getElementById('log-toggle');
    const membersBtn = document.getElementById('btn-members');

    if (form) form.addEventListener('submit', submitComment);
    if (refreshBtn) refreshBtn.addEventListener('click', loadComments);
    if (toggleBtn) toggleBtn.addEventListener('click', () => toggleComments());
    if (membersBtn) membersBtn.addEventListener('click', () => toggleMembers());

    initLogDrag();

    // Di HP daftar anggota default tertutup supaya panel ramping
    if (window.matchMedia('(max-width: 700px)').matches) toggleMembers(false);

    // Delegasi klik: tombol [ BALAS ] ada di dalam daftar yang isinya dinamis
    if (listEl) {
        listEl.addEventListener('click', e => {
            const btn = e.target.closest('[data-action="reply"]');
            if (!btn) return;
            setReplyTarget(btn.dataset.id, btn.dataset.name);
        });
    }

    if (replyCancelBtn) {
        replyCancelBtn.addEventListener('click', () => {
            resetReplyTarget();
            setLogStatus('');
        });
    }

    if (messageInput && charCount) {
        messageInput.addEventListener('input', () => {
            charCount.textContent = messageInput.value.length + '/' + MAX_MESSAGE_LENGTH;
        });
    }

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') toggleLog(false);
    });

    loadComments();
});
