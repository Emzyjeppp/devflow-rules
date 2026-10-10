# Prinsip dan Konvensi Proyek

Versi aturan: 1.0 • Status: default starter; sesuaikan sebelum implementasi.
Pemilik keputusan proyek: [nama/peran]

## Prinsip dasar

| ID | Aturan | Bukti penerapan |
| --- | --- | --- |
| R-01 | Implementasi mengikuti kebutuhan yang tercatat. | Tugas merujuk FR, NFR, atau alasan pemeliharaan. |
| R-02 | Pilih solusi paling sederhana yang memenuhi kebutuhan. | Kompleksitas tambahan disertai alasan. |
| R-03 | Perilaku penting harus dapat diperiksa. | Kriteria penerimaan dan hasil pemeriksaan tersedia. |
| R-04 | Pertahankan konvensi dan pekerjaan yang sudah ada. | Perubahan di luar cakupan dihindari. |
| R-05 | Keputusan dan status harus sesuai kenyataan. | Asumsi, keterbatasan, dan kegagalan disebutkan. |
| R-06 | Lindungi data dan kredensial. | Tidak ada rahasia dalam kode, contoh, atau log yang dibagikan. |

## Konvensi yang dipilih untuk proyek

Tuliskan aturan singkat dan contoh konkret. Isi setelah melihat kode atau memilih stack.

| Area | Aturan | Contoh/lokasi rujukan |
| --- | --- | --- |
| Penamaan | [aturan] | [contoh] |
| Struktur modul | [aturan] | [path] |
| Penanganan kesalahan | [aturan] | [contoh] |
| Format data/API | [aturan/tidak berlaku] | [contoh] |
| UI dan state | [aturan/tidak berlaku] | [rujukan design.md] |
| Perubahan skema | [aturan/tidak berlaku] | [mekanisme] |

## Verifikasi

Jalankan pemeriksaan yang sesuai risiko dan tuntutan proyek. Perubahan perilaku inti
memerlukan bukti terhadap kriteria penerimaan. Bug fix perlu pemeriksaan yang
menunjukkan masalah awal telah teratasi. Perubahan dokumentasi sederhana cukup
diperiksa isi dan tautannya.

Gunakan perintah aktual dari [techstack.md](techstack.md). Catat perintah/langkah,
hasil, dan keterbatasan dalam [agents/task.md](agents/task.md). “Belum diuji” tidak sama
dengan “lulus”. Jangan menulis tes yang hanya mengulang implementasi tanpa menguji perilaku.

## Perubahan kebutuhan

1. Tulis alasan dan dampak perubahan.
2. Perbarui sumber utama: PRD untuk kebutuhan, techstack untuk teknologi, design untuk desain.
3. Tinjau rencana dan tugas yang terpengaruh.
4. Pertahankan ID lama; tandai kebutuhan yang dihapus atau diganti.
5. Catat keputusan baru dan alasan mengganti keputusan sebelumnya.

Jika aturan berubah, naikkan versi aturan dan periksa tugas aktif terhadap versi terbaru.
Pengecualian dicatat dengan ID aturan, alasan, dampak, serta siapa yang memutuskan.
Jangan menganggap pencatatan pengecualian sebagai izin untuk melampaui otorisasi pengguna.

## Git dan komunikasi

Default kit: pesan commit memakai format type(scope): ringkasan, dengan tipe
feat, fix, docs, refactor, test, atau chore. Ikuti konvensi repo jika sudah ada.
Commit berisi satu perubahan logis; jangan memasukkan rahasia atau file sementara.

Laporan akhir menjelaskan hasil, verifikasi, dan kendala yang masih ada.
Tindakan eksternal mengikuti permintaan pengguna dan izin lingkungan yang berlaku.

Referensi konsep: [S0, A1](REFERENCES.md). ID aturan, kebijakan verifikasi berdasarkan risiko,
dan konvensi commit adalah keputusan starter ini.
