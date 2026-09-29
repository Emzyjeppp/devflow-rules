---
name: devflow-orchestrator
description: Orkestrator alur kerja pengembangan perangkat lunak 8 fase mulai dari penyusunan spesifikasi (PRD) hingga rilis dan serah terima.
---

# DevFlow Orchestrator

Skill ini mengatur alur eksekusi proyek pengembangan aplikasi secara terstruktur, mencegah langkah penting terlewat, dan menyesuaikan kedalaman proses berdasarkan skala tugas.

## Matriks Skala Tugas

- **Skala Ringan (Teks / Styling)**: Identifikasi berkas, lakukan pengeditan langsung, verifikasi tampilan, dan catat perubahan.
- **Skala Sedang (Fitur Tunggal)**: Susun kontrak props/data, buat komponen atau fungsi, integrasikan, dan uji alur kerja.
- **Skala Penuh (Aplikasi Baru / Multi-Fitur)**: Jalankan alur delapan fase secara berurutan.

## Alur Kerja Delapan Fase

### Fase 1: Kebutuhan dan PRD
- Tetapkan tujuan produk, profil pengguna sasaran, batasan teknis, dan fitur utama.
- Buat dokumen spesifikasi singkat (`PRD.md`) jika proyek berskala menengah atau besar.

### Fase 2: Fondasi Proyek
- Siapkan struktur direktori, konfigurasi tooling (TypeScript, ESLint, Prettier, Tailwind).
- Pastikan proyek dapat dijalankan secara lokal dengan perintah standar (`npm run dev` atau sejenisnya).

### Fase 3: Data dan Arsitektur
- Rancang skema database, relasi entitas, dan model data.
- Siapkan skrip migrasi dan mekanisme validasi integritas data jika aplikasi menggunakan penyimpanan persisten.

### Fase 4: Autentikasi dan API
- Bangun lapisan layanan backend, endpoint REST/RPC, serta middleware otentikasi dan otorisasi.
- Terapkan validasi input ketat pada setiap endpoint untuk mencegah data tidak valid.

### Fase 5: Frontend dan Antarmuka
- Terapkan komponen antarmuka pengguna, sistem routing, dan integrasi dengan API backend.
- Sediakan penanganan status visual yang lengkap: loading, data kosong, error, dan data berhasil dimuat.

### Fase 6: Pengujian
- Uji alur interaksi pengguna kritis (happy path dan failure path).
- Jalankan automated tests atau validasi manual yang terstruktur dan catat hasilnya.

### Fase 7: Penguatan Aplikasi
- Periksa celah keamanan (sanitasi input, kebocoran token atau variabel lingkungan).
- Optimalkan performa pemuatan aset, caching, dan kesiapan SEO bila relevan.

### Fase 8: Rilis dan Penyerahan
- Jalankan proses build produksi (`npm run build`) untuk memastikan tidak ada kesalahan kompilasi.
- Dokumentasikan variabel lingkungan yang dibutuhkan dan langkah deployment pada `README.md`.

## Catatan Kemajuan Proyek

Pada proyek yang memerlukan pelacakan berkelanjutan, perbarui dokumen pelengkap:
- `PROGRESS.md`: Catatan status fase dan daftar tugas yang sedang atau telah diselesaikan.
- `CHANGELOG.md`: Log perubahan versi sesuai standar semantik.
