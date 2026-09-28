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
        wrapper.style.cursor = 'pointer';
        wrapper.style.pointerEvents = 'auto';
        // Area klik lebih besar dari ikon (12px ekstra tiap sisi)
        wrapper.style.padding = '12px';
        wrapper.style.boxSizing = 'content-box';
        wrapper.innerHTML = `
            <svg width="40" height="40" viewBox="0 0 40 40" style="filter: drop-shadow(0 0 6px ${d.color}); overflow:visible;">
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
        // Ikon 40px + padding 12px = kotak 64px, geser setengahnya agar tetap center
        wrapper.style.transform = 'translate(-32px, -32px)';
        wrapper.onclick = () => {
            showDetail(d);
            world.pointOfView({ lat: d.lat, lng: d.lng, altitude: 0.4 }, 1500);
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

// Focus on Indonesia
setTimeout(() => world.pointOfView(INDONESIA, 2000), 800);

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
        world.pointOfView({ lat: INDONESIA.lat, lng: INDONESIA.lng, altitude: 1.5 }, 1500);
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
            world.pointOfView(INDONESIA, 1200);
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

    world.controls().autoRotate = false;
    document.getElementById('status-text').textContent = 'TARGET LOCKED';
}

function closeModal() {
    document.getElementById('detail-modal').classList.add('hidden');

    if (currentCategory === 'threat') {
        world.controls().autoRotate = false;
        world.pointOfView({ lat: INDONESIA.lat, lng: INDONESIA.lng, altitude: 1.5 }, 1200);
        document.getElementById('status-text').textContent = 'CRITICAL ALERT';
    } else {
        world.controls().autoRotate = true;
        world.pointOfView(INDONESIA, 1200);
        document.getElementById('status-text').textContent = 'ONLINE';
    }
}
