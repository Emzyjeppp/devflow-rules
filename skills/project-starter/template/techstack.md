# Teknologi dan Lingkungan

Status: draft • Berdasarkan PRD revisi: [nomor] • Diperbarui: [tanggal]

## 1. Konteks teknis

- Bentuk produk: [web/CLI/mobile/desktop/library/lainnya]
- Target lingkungan: [OS, browser, perangkat, hosting]
- Skala dan batas sumber daya: [rujuk NFR terkait]
- Sistem yang sudah ada: [repo, layanan, kontrak, atau tidak ada]
- Kemampuan tim dan batas operasional: [isi]

## 2. Pilihan stack

Isi versi setelah memeriksa dokumentasi resmi dan kompatibilitasnya.

| Bagian | Pilihan dan versi | Alasan terkait kebutuhan | Alternatif | Status |
| --- | --- | --- | --- | --- |
| Bahasa/runtime | [isi] | [FR/NFR] | [isi] | proposed |
| UI | [isi/tidak berlaku] | [alasan] | [isi] | proposed |
| Backend | [isi/tidak berlaku] | [alasan] | [isi] | proposed |
| Penyimpanan | [isi/tidak berlaku] | [alasan] | [isi] | proposed |
| Pemeriksaan kode | [isi] | [risiko] | [isi] | proposed |
| Build/distribusi | [isi] | [lingkungan] | [isi] | proposed |

Status pilihan: proposed, selected, superseded. Hindari menambahkan layanan yang belum dibutuhkan.

## 3. Referensi pemilihan

| Pilihan | Sumber resmi | Tanggal diperiksa | Kompatibilitas/batasan |
| --- | --- | --- | --- |
| [pilihan] | [URL] | [tanggal] | [catatan] |

Dependency manifest dan lockfile menjadi catatan versi aktual setelah proyek diinisialisasi.
Jika berbeda dari dokumen ini, selidiki dan selaraskan; jangan menebak mana yang disengaja.

## 4. Perintah kerja

Placeholder di bawah belum merupakan perintah yang dapat dijalankan.

| Tujuan | Perintah nyata | Direktori kerja | Prasyarat | Hasil yang diharapkan |
| --- | --- | --- | --- | --- |
| Instalasi | [isi] | [path] | [runtime] | [hasil] |
| Menjalankan lokal | [isi] | [path] | [konfigurasi] | [alamat/output] |
| Pemeriksaan statis | [isi/tidak berlaku] | [path] | [alat] | [hasil] |
| Pengujian | [isi/tidak berlaku] | [path] | [data uji] | [hasil] |
| Build | [isi/tidak berlaku] | [path] | [alat] | [artefak] |

## 5. Konfigurasi

| Variabel | Fungsi | Wajib? | Rahasia? | Contoh aman |
| --- | --- | --- | --- | --- |
| [NAMA] | [fungsi] | [ya/tidak] | [ya/tidak] | [nilai dummy] |

Simpan daftar variabel tanpa kredensial dalam .env.example jika relevan.
Jelaskan cara menyiapkan data lokal: [langkah].
Jelaskan penyimpanan cadangan dan pemulihan bila ada data persisten: [langkah/tidak berlaku].

## 6. Lokasi kode

| Path yang dipilih | Tanggung jawab |
| --- | --- |
| [path aktual setelah setup] | [fungsi] |

Batas komponen dan kontrak dicatat di [design.md](design.md), bukan disalin di sini.

## 7. Pertanyaan teknis

| ID | Masalah | Cara memeriksa | Keputusan dan bukti |
| --- | --- | --- | --- |
| TECH-001 | [ketidakpastian] | [spike/dokumentasi/percobaan] | Belum diperiksa |

Referensi konsep: [S2](REFERENCES.md). Tabel keputusan stack dan pencatatan perintah merupakan adaptasi kit.
