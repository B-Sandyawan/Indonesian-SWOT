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
        { lat: -2.5, lng: 118.0, title: 'BIODIVERSITY', desc: 'Hutan hujan tropis & Coral Triangle terdeteksi. Potensi sumber daya alam maksimal dan aset pariwisata ekologis.', color: COLORS.strength },
        { lat: -6.2, lng: 106.8, title: 'DEMOGRAPHICS', desc: 'Konsentrasi populasi usia produktif tinggi (Bonus Demografi). Proyeksi pertumbuhan ekonomi eksponensial.', color: COLORS.strength },
        { lat: -4.1, lng: 137.0, title: 'MINERALS', desc: 'Cadangan nikel dan mineral strategis terdeteksi. Material krusial untuk industri energi dan baterai global.', color: COLORS.strength }
    ],
    weakness: [
        { lat: -4.0, lng: 138.0, title: 'INFRASTRUCTURE GAP', desc: 'Kesenjangan infrastruktur fisik di sektor timur menyebabkan inefisiensi logistik.', color: COLORS.weakness },
        { lat: 3.5, lng: 98.6, title: 'EDUCATION INDEX', desc: 'Distribusi kualitas SDM tidak merata. Indeks edukasi sub-optimal di area terluar dan pedalaman.', color: COLORS.weakness }
    ],
    opportunity: [
        { lat: 1.0, lng: 104.0, title: 'GEO-STRATEGIC', desc: 'Jalur maritim vital internasional (Selat Malaka) terpantau. Posisi tawar diplomasi dan logistik global sangat kuat.', color: COLORS.opportunity },
        { lat: -1.2, lng: 116.8, title: 'NEW CAPITAL (IKN)', desc: 'Titik pusat gravitasi ekonomi baru (IKN Nusantara). Node investasi strategis masa depan untuk pemerataan.', color: COLORS.opportunity }
    ],
    threat: [
        { lat: -0.9, lng: 100.3, title: 'SEISMIC ACTIVITY', desc: 'Aktivitas vulkanik & tektonik (Ring of Fire) level tinggi. Risiko gangguan struktural berskala masif.', color: COLORS.threat },
        { lat: 4.5, lng: 108.5, title: 'GEOPOLITICS', desc: 'Ketegangan wilayah maritim (Laut Natuna Utara). Potensi ancaman kedaulatan dan instabilitas regional.', color: COLORS.threat },
        { lat: -6.1, lng: 106.8, title: 'CLIMATE CHANGE', desc: 'Anomali iklim dan kenaikan muka air laut terdeteksi. Ancaman langsung pada pesisir utara dan ketahanan pangan.', color: COLORS.threat }
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
        wrapper.style.transform = 'translate(-20px, -20px)';
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

    title.textContent = point.title;
    title.style.color = point.color;
    desc.textContent = point.desc;

    modal.style.borderColor = point.color;
    modal.querySelector('::before');
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
