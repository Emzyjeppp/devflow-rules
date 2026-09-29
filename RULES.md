# Aturan Pengembangan Web

Panduan untuk membangun antarmuka yang konsisten, menyelesaikan fitur secara utuh, dan menjaga kode tetap sederhana.

Disusun berdasarkan DealTech UI, Vibes-Plug, Ponytail, pedoman commit nyancodeid, Humanize Pro, serta aturan tanpa emoji. Setiap referensi diadaptasi menjadi aturan kerja yang terintegrasi dan dapat digunakan bersama.

## Cara Menggunakan

Lampirkan file ini atau gabungkan bagian yang relevan ke instruksi proyek Anda (misalnya `.cursorrules`, `CLAUDE.md`, `.windsurfrules`, atau system prompt AI). Pertahankan batasan serta instruksi spesifik proyek yang sedang berjalan. Dokumen ini berfungsi sebagai panduan kerja dan acuan standar.

Aturan ini berlaku untuk HTML, CSS, JavaScript, TypeScript, JSX/TSX, Vue, Svelte, template server, komponen antarmuka, dokumentasi, serta perubahan backend yang mendukung fitur web.

## Dasar Penyusunan

| Referensi | Prinsip Utama |
|---|---|
| DealTech UI | Memilih acuan antarmuka konkret melalui hierarki elemen, section, dan halaman; menyesuaikan komponen dengan kebutuhan produk. |
| Vibes-Plug | Menghubungkan perencanaan, implementasi, integrasi, verifikasi, dan dokumentasi secara bertahap. |
| Ponytail | Memahami masalah sebelum mengubah kode, memanfaatkan solusi bawaan yang sudah ada, dan menghindari pekerjaan yang belum diperlukan. |
| Pedoman commit nyancodeid | Menulis pesan commit dengan tipe, cakupan, subjek, serta penjelasan perubahan yang konsisten dan terstruktur. |
| Humanize Pro | Menyesuaikan bahasa dengan pembaca, menjaga akurasi fakta, dan menghindari pola kalimat buatan yang kaku. |
| Aturan tanpa emoji | Menggunakan teks biasa, badge status, dan ikon SVG inline tanpa simbol dekoratif atau emoji. |

Kebijakan terpadu dokumen ini: gunakan struktur kerja secukupnya, penuhi seluruh kebutuhan yang diminta, dan pilih implementasi paling sederhana yang tetap benar.

## 1. Pahami Proyek Sebelum Mengubahnya

- Baca seluruh instruksi sampai tuntas. Tentukan hasil akhir yang harus terlihat atau dapat dijalankan pengguna.
- Periksa file terkait, alur data, komponen yang sudah ada, dependensi, konfigurasi, dan perintah proyek.
- Pertahankan stack serta konvensi yang masih memenuhi kebutuhan. Jangan mengganti framework, package manager, atau sistem styling hanya karena referensi memakai teknologi berbeda.
- Untuk penanganan bug, telusuri pemanggil fungsi dan alur yang terdampak. Perbaiki akar penyebab utama jika beberapa jalur mengalami kendala yang sama.
- Gunakan asumsi yang wajar untuk keputusan kecil. Tanyakan klarifikasi jika informasi yang hilang berpotensi mengubah perilaku inti atau ruang lingkup utama.
- Jangan berasumsi bahwa paket, pustaka, API, atau komponen dalam referensi pasti tersedia. Selalu sesuaikan dengan kondisi proyek dan dokumentasi versi yang aktif.

## 2. Pilih Solusi Paling Sederhana yang Memenuhi Kebutuhan

Ikuti urutan pengambilan keputusan berikut sebelum menulis kode baru:

1. Pastikan pekerjaan tersebut memang dibutuhkan oleh permintaan saat ini.
2. Cari fungsi, komponen, tipe, atau pola yang sudah tersedia di dalam proyek.
3. Periksa apakah pustaka standar bahasa sudah menyelesaikannya.
4. Pertimbangkan fitur bawaan platform, browser, CSS modern, atau basis data.
5. Gunakan dependensi yang sudah terpasang jika relevan.
6. Tulis implementasi kecil dan mudah dibaca untuk kebutuhan yang belum tercakup.
7. Tambahkan dependensi atau abstraksi baru hanya jika manfaatnya jelas dan sepadan.

Kode ringkas wajib mempertahankan validasi, penanganan kesalahan, keamanan, aksesibilitas, dan perilaku yang diminta. Jangan memadatkan kode secara berlebihan jika membuat kode sulit dirawat.

| Kebutuhan | Titik Awal | Pertimbangkan Solusi Tambahan Jika |
|---|---|---|
| Input tanggal sederhana | Input tipe date bawaan browser | Memerlukan rentang tanggal interaktif atau kalender khusus. |
| FAQ atau akordeon | Elemen native details dan summary | Interaksi produk melampaui kemampuan elemen tersebut. |
| Format angka dan mata uang | Intl.NumberFormat | Terdapat aturan bisnis kustom yang belum tercakup. |
| Tata letak responsif | CSS Grid, Flexbox, dan media queries | Terdapat kalkulasi posisi dinamis yang wajib menggunakan JavaScript. |
| Tombol berbagai variasi | Komponen tombol yang sudah ada | Perilaku atau kontrak interaksinya berbeda secara nyata. |

## 3. Gunakan Acuan Komponen UI Konkret

Bagi komponen antarmuka ke dalam tiga tingkatan hierarki:

- Elements: Komponen atomik mandiri (misalnya Button, Input, Badge, Toggle).
- Sections: Blok bagian halaman yang menggabungkan beberapa elemen (misalnya Hero, Features, Pricing, Testimonials).
- Pages: Komposisi lengkap yang membentuk satu halaman utuh.

Langkah saat mengadopsi komponen:

1. Pilih varian yang cocok dengan fungsi dan konteks halaman.
2. Baca kode, CSS, dan catatan perilaku komponen yang tersedia.
3. Periksa kebutuhan import, aset, selector, font, ikon, dan interaksinya.
4. Ambil bagian yang dibutuhkan, lalu sesuaikan dengan struktur proyek yang aktif.
5. Ganti konten contoh, tautan, identitas merek, dan jalur aset dengan data nyata.
6. Uji hasil integrasi pada seluruh tampilan halaman terkait.

Jika proyek menggunakan stack yang berbeda dari contoh referensi, adaptasikan susunan visual dan perilakunya ke framework proyek saat ini tanpa memaksakan migrasi stack.

## 4. Jaga Arah Visual dan Konsistensi Desain

- Tentukan hierarki konten, palet warna, tipografi, jarak (spacing), dan bentuk komponen sebelum memperbanyak halaman.
- Gunakan token desain yang sudah ada (variabel CSS atau kelas utility Tailwind). Tambahkan token baru hanya jika ada kebutuhan berulang yang nyata.
- Pertahankan identitas merek, tema warna, dan panduan desain yang telah ditentukan.
- Selaraskan gaya antarbagian halaman: lebar kontainer utama, ukuran judul, tombol aksi, dan jarak vertikal antar-section.
- Pastikan tampilan tetap rapi saat teks panjang, data kosong, atau layar perangkat menyempit.
- Tambahkan animasi halus untuk memperjelas transisi atau umpan balik interaksi. Sediakan dukungan pengurangan gerak (prefers-reduced-motion).
- Rancang props dan variasi komponen berdasarkan kebutuhan nyata. Hindari konfigurasi berlebih untuk skenario yang belum ada.

## 5. Selesaikan Perilaku dan Aksesibilitas

- Gunakan elemen HTML semantik: tombol (`<button>`) untuk aksi, tautan (`<a>`) untuk navigasi antarhalaman, dan label form yang terhubung dengan elemen input.
- Sediakan indikator fokus yang jelas dan pastikan seluruh interaksi dapat diakses melalui keyboard.
- Berikan atribut aksesibel yang memadai pada tombol berbasis ikon. Bedakan gambar informatif dan dekoratif dengan atribut `alt` yang tepat.
- Informasikan status operasi melalui teks deskriptif, bukan hanya mengandalkan perubahan warna.
- Sediakan state antarmuka yang lengkap: loading, data kosong, error/gagal, dan berhasil.
- Tampilkan pesan kesalahan validasi pada posisi yang relevan serta pertahankan input pengguna ketika pengiriman form gagal.
- Pada komponen dialog modal, kelola fokus keyboard saat modal terbuka, saat ditutup, dan kembalikan fokus ke pemicu asalnya.
- Pastikan data contoh (mock) terpisah jelas dari data produksi. Jangan menampilkan proses penyimpanan sebagai sukses sebelum respons berhasil diterima.

## 6. Sesuaikan Alur Kerja Berdasarkan Skala Tugas

| Skala Tugas | Alur Kerja | Dokumentasi Minimum |
|---|---|---|
| Perbaikan kecil / styling | Baca konteks, ubah file terkait, verifikasi hasil | Catatan perubahan ringkas pada commit |
| Komponen atau fitur tunggal | Tetapkan spesifikasi, implementasi, integrasi, uji coba | Kontrak props atau skema data bila ada |
| Fitur lintas lapisan (Fullstack) | Selaraskan skema data, endpoint API, state UI, dan error handling | Ringkasan kontrak antarmuka dan cara verifikasi |
| Aplikasi baru dari awal | Tetapkan PRD, fondasi, model data, API, UI, pengujian, penguatan, rilis | Dokumentasi alur kerja dan petunjuk operasional |

### Alur Delapan Fase untuk Proyek Baru

1. Fase Kebutuhan: Rumuskan PRD singkat berisi tujuan pengguna, batasan, fitur inti, dan stack teknologi.
2. Fase Fondasi: Siapkan struktur folder, konfigurasi linter, format berkas, dan skrip build.
3. Fase Arsitektur Data: Susun skema database, relasi entitas, migrasi, dan aturan keamanan data.
4. Fase Layanan dan API: Bangun endpoint, validasi skema input, otentikasi, dan otorisasi.
5. Fase Antarmuka Pengguna: Terapkan komponen visual, routing, manajemen state, dan integrasi API.
6. Fase Pengujian: Jalankan pengujian unit, integrasi, atau pengujian alur kritis untuk memastikan stabilitas.
7. Fase Penguatan: Audit keamanan, optimasi performa, kesiapan SEO, dan ketahanan terhadap error.
8. Fase Rilis dan Penyerahan: Finalisasi build, verifikasi petunjuk deployment, dan dokumentasikan cara menjalankan.

## 7. Kualitas Kode dan Kebersihan

- Selesaikan jalur utama fitur secara tuntas; jangan meninggalkan placeholder pada bagian yang seharusnya berfungsi.
- Hindari duplikasi logika, wrapper tanpa manfaat tambahan, atau abstraksi dini untuk satu kasus penggunaan sederhana.
- Batasi modifikasi hanya pada area yang relevan dengan tugas. Hapus kode yang sudah tidak terpakai setelah memverifikasi dependensinya.
- Tulis komentar hanya untuk menjelaskan keputusan teknis yang tidak jelas atau batasan khusus, bukan mengulang sintaks kode.
- Terapkan validasi tipe dan validasi runtime pada data yang berasal dari input pengguna, API pihak ketiga, atau file eksternal.
- Pertahankan penanganan kesalahan yang aman. Jangan menyembunyikan pesan kesalahan teknis jika hal itu menghambat diagnosis masalah.

## 8. Aturan Tanpa Emoji

Jangan menggunakan emoji atau simbol dekoratif pengganti emoji pada:

- Judul, paragraf, label form, placeholder, pesan kesalahan, toast, tooltip, dan tampilan kosong.
- Atribut HTML seperti `alt`, `title`, `aria-label`, `data-*`, dan tag metadata.
- Nama variabel, pengenal kode, string literal, komentar kode, dan log aplikasi.
- File README, CHANGELOG, commit message, pull request, dan dokumentasi teknis.
- Penamaan branch, folder, maupun berkas.

Gunakan alternatif berikut:

| Kebutuhan Visual | Solusi Pengganti |
|---|---|
| Ikon navigasi / aksi | SVG inline (`<svg>`) atau pustaka ikon proyek (misalnya Lucide). |
| Indikator status | Badge berbasis teks (contoh: "Aktif", "Gagal", "Menunggu") disertai styling warna. |
| Daftar poin | Bullet Markdown standar (`-` atau `*`) atau tag HTML `<ul>` dan `<li>`. |
| Penekanan informasi | Hierarki tipografi, variasi ketebalan teks (bold), dan kontras warna. |
| Indikator proses | Teks status ("Memuat data...") atau animasi CSS spinner. |

Pengecualian hanya berlaku jika pengguna meminta emoji secara eksplisit, teks menampilkan data mentah dari masukan pengguna, atau file lama memang menggunakan emoji secara konsisten dan tugas tidak mencakup restrukturisasi gaya.

## 9. Pedoman Pesan Commit

Format pesan commit mengikuti struktur berikut:

```text
<type>(<scope>): <subject>

<body>

<footer>
```

Tipe commit standar:

- `feat`: Penambahan fitur baru.
- `fix`: Perbaikan bug atau kesalahan program.
- `refactor`: Perubahan struktur kode tanpa mengubah fungsi atau memperbaiki bug.
- `perf`: Peningkatan performa kode.
- `style`: Perubahan pemformatan spasi, titik koma, atau tata letak kode tanpa mengubah arti.
- `test`: Penambahan atau penyesuaian berkas pengujian.
- `docs`: Penambahan atau pembaruan dokumentasi.
- `build`: Perubahan pada sistem build atau dependensi eksternal.
- `ci`: Perubahan pada berkas konfigurasi atau skrip automasi CI/CD.

Aturan penulisan:

- Subjek ditulis singkat dalam kalimat perintah, diawali huruf kecil, tanpa titik penutup, maksimal 100 karakter.
- Scope bersifat opsional dan merujuk pada modul proyek (misalnya `auth`, `ui`, `api`, `config`).
- Body digunakan jika perlu menjelaskan latar belakang atau rincian keputusan teknis.
- Gunakan `BREAKING CHANGE:` pada footer untuk perubahan yang tidak kompatibel dengan versi sebelumnya.

Contoh:

```text
feat(ui): tambahkan komponen dropdown navigasi utama
fix(auth): tangani kegagalan verifikasi token kedaluwarsa
docs(readme): perbarui panduan instalasi dan konfigurasi env
```

## 10. Penulisan Bahasa Natural

Terapkan gaya penulisan yang wajar, komunikatif, dan berbasis fakta untuk teks antarmuka, dokumentasi, dan penjelasan teknis:

- Sampaikan pesan utama secara langsung tanpa basa-basi pembuka yang berulang.
- Gunakan struktur kalimat aktif dan kosakata yang lazim digunakan.
- Jelaskan istilah teknis secara kontekstual jika ditujukan untuk pengguna umum.
- Hindari tanda hubung em dash (`—`). Gunakan tanda titik, koma, titik dua, atau kurung untuk memisahkan keterangan.
- Hindari klaim berlebihan, kata sifat superlatif tanpa data, atau pujian otomatis.
- Jangan mengarang data atau angka; pertahankan fakta apa adanya.
- Pastikan pesan antarmuka memberikan arahan tindakan yang jelas (contoh: "Masukkan alamat email" alih-alih "Silakan melakukan pengisian kolom email").

## 11. Pemeriksaan Sebelum Penyerahan

Gunakan daftar periksa berikut sebelum menyelesaikan pekerjaan:

- [ ] Seluruh instruksi dan kebutuhan fitur terpenuhi dengan benar.
- [ ] Komponen, import, file aset, dan dependensi terverifikasi ketersediaannya.
- [ ] Tampilan antarmuka telah disesuaikan untuk berbagai ukuran layar.
- [ ] State loading, data kosong, dan kondisi error tertangani dengan baik.
- [ ] Aksesibilitas keyboard dan label elemen interaktif berfungsi.
- [ ] Kode tidak meninggalkan fungsi mati atau placeholder yang belum selesai.
- [ ] Tidak ada emoji atau simbol dekoratif yang melanggar aturan tanpa emoji.
- [ ] Pesan commit mengikuti format tipe, scope, dan batasan panjang karakter.
- [ ] Teks dokumentasi dan antarmuka telah diperiksa dengan bahasa yang natural.

Perintah verifikasi larangan emoji pada PowerShell:

```powershell
Select-String -Path .\path\ke\file -Pattern '[\p{Cs}\u2190-\u27BF\u2B00-\u2BFF\uFE0F]'
```

## 12. Penyampaian Hasil

Sampaikan hasil pekerjaan dengan menunjukkan file yang dibuat atau diubah, ringkasan perbaikan, cara penggunaan, dan status verifikasi aktual. Jangan mengklaim pengujian atau rilis yang belum benar-benar dijalankan.
