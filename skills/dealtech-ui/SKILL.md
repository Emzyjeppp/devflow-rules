---
name: dealtech-ui
description: Panduan pemilihan dan adaptasi komponen antarmuka konkret berdasarkan hierarki elemen, section, dan halaman DealTech UI.
---

# DealTech UI

Skill ini memandu AI coding assistant dalam memilih, mengadaptasi, dan menerapkan komponen antarmuka web konkret tanpa memaksakan perombakan stack teknologi proyek.

## Prinsip Utama

1. **Hierarki Komponen**: Membagi antarmuka menjadi tiga lapisan jelas:
   - `elements/`: Komponen atomik mandiri (Button, Input, Badge, Switch).
   - `sections/`: Komposisi blok halaman (Hero, Features, Pricing, Testimonials, Footer).
   - `pages/`: Halaman utuh yang menyatukan section dan elemen dengan navigasi.
2. **Adaptasi Bukan Duplikasi Mentah**: Mengambil pola tata letak, logika interaksi, dan styling, lalu menyelaraskannya dengan stack dan konvensi proyek target.
3. **Pemisahan Perilaku**: Membedakan secara tegas antara tombol aksi (`<button>`) dan tautan navigasi (`<a>`).

## Alur Kerja Penerapan Komponen

1. **Analisis Kebutuhan Antarmuka**
   - Tentukan apakah kebutuhan berupa elemen tunggal, blok section, atau struktur satu halaman utuh.
   - Periksa framework UI (React, Vue, Svelte, Blade, HTML statis) dan styling (Tailwind CSS, CSS Modules, vanilla CSS) yang digunakan proyek.

2. **Pemilihan Varian Komponen**
   - Pilih varian yang paling mendekati fungsi bisnis dan arsitektur data aplikasi.
   - Evaluasi dependensi eksternal yang dibutuhkan (pustaka ikon, paket animasi, utility class).

3. **Penyelarasan Kode**
   - Sesuaikan nama komponen, tipe properti (props), dan struktur direktori dengan arsitektur proyek.
   - Ganti teks contoh, logo, gambar mockup, dan tautan contoh dengan data spesifik aplikasi.
   - Jika proyek menggunakan Tailwind CSS dan referensi menggunakan CSS kustom, konversikan selector ke kelas utility Tailwind yang setara.

4. **Verifikasi Aksesibilitas dan Responsivitas**
   - Pastikan fokus keyboard terlihat jelas pada elemen interaktif.
   - Pastikan section tertata dengan baik di berbagai ukuran layar (mobile, tablet, desktop).
   - Pastikan kontras warna teks terhadap latar belakang memenuhi standar keterbacaan.

## Checklist Integrasi

- [ ] Variasi ukuran, warna, dan status (default, hover, active, disabled) telah tersedia.
- [ ] Tombol ikon memiliki label deskriptif melalui `aria-label`.
- [ ] Kontainer responsif dan tidak menimbulkan overflow horizontal yang tidak disengaja.
- [ ] Seluruh import aset lokal maupun pustaka ikon terverifikasi valid.
