# Indonesian SWOT

Tugas PPKN — Analisis SWOT Indonesia dalam bentuk peta globe interaktif.

## Kelompok 3 — Kelas XII SIJA 2

| No | Nama |
| -- | ---- |
| 5  | Azahwa Celina Latifa |
| 7  | Benedictus Sandyawan Winarko |
| 13 | Feliks Setyaji Purbo Asmoro |
| 16 | Haidar Rafi Jaelani |
| 20 | Khalisa Fazila Ramadhani |
| 23 | Lauretta Josephine |
| 26 | Muhammad Raihan Miqdad |

## Fitur

- Globe interaktif dengan penanda titik per kategori SWOT (Strength, Weakness, Opportunity, Threat)
- Panel detail berisi contoh konkret, poin tantangan, dan sumber data
- Panel feedback (kirim masukan) dengan dukungan balasan, tersimpan di Supabase

## Teknologi

- HTML, CSS, JavaScript (tanpa build step)
- [globe.gl](https://globe.gl) untuk globe 3D
- [Supabase](https://supabase.com) untuk menyimpan feedback

## Menjalankan

Buka `index.html` lewat local server (misalnya ekstensi Live Server), karena halaman mengambil library dari CDN.

## Catatan database

Feedback disimpan di tabel `comments`:

| Kolom | Tipe | Keterangan |
| ----- | ---- | ---------- |
| id | bigint | primary key |
| name | text | nama pengirim |
| message | text | isi pesan |
| created_at | timestamptz | waktu kirim |
| parent_id | bigint | referensi ke `comments.id` untuk balasan |
