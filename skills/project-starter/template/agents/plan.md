# Rencana Pelaksanaan

Status: draft • Cakupan: [MVP/fitur/perubahan]
PRD revisi: [nomor] • Versi aturan yang diperiksa: [nomor]
Diperbarui: [tanggal]

## 1. Hasil dan konteks

Hasil yang akan diserahkan: [ringkasan].
Kebutuhan terkait: [FR/NFR-ID].
Keputusan teknis: [DEC-ID di design.md].
Stack dan perintah: [techstack.md](../techstack.md).

## 2. Kesiapan pekerjaan

Baca aturan terbaru dari [rules.md](../rules.md); jangan memakai salinan aturan lama.

| Pemeriksaan | Status | Bukti/masalah | Tugas terdampak |
| --- | --- | --- | --- |
| Kebutuhan dan kriteria penerimaan jelas | belum diperiksa | [rujukan] | [ID] |
| Pilihan stack yang diperlukan tersedia | belum diperiksa | [rujukan] | [ID] |
| Keputusan desain yang diperlukan tersedia | belum diperiksa | [rujukan] | [ID] |
| Aturan proyek dipenuhi | belum diperiksa | [R-ID dan hasil] | [ID] |
| Dependensi dan akses lingkungan tersedia | belum diperiksa | [rujukan] | [ID] |

Status pemeriksaan: belum diperiksa, lulus, gagal, tidak berlaku.
Tidak berlaku harus mempunyai alasan. Penghambat berlaku pada pekerjaan yang
bergantung padanya, bukan otomatis menghentikan seluruh proyek.

## 3. Ketidakpastian yang perlu diselesaikan

| ID | Pertanyaan | Cara memperoleh bukti | Keputusan yang dibutuhkan |
| --- | --- | --- | --- |
| [TECH/Q-ID] | [pertanyaan] | [dokumentasi/spike/konfirmasi] | [keputusan] |

## 4. Tahapan dan keluaran

| Tahap | Hasil | Prasyarat | Bukti selesai |
| --- | --- | --- | --- |
| Persiapan | Dokumen relevan terisi | Brief proyek | Pemeriksaan kesiapan |
| Setup | Proyek dapat dijalankan lokal | Stack dipilih | Perintah berjalan |
| Fondasi yang diperlukan | Dependensi story tersedia | Setup | Pemeriksaan komponen |
| Story P1 | Alur inti berfungsi | Dependensi story | AC story terpenuhi |
| Story berikutnya | Nilai tambahan sesuai cakupan | Dependensi aktual | AC story terpenuhi |
| Penyerahan | Hasil dan cara penggunaan tersedia | Verifikasi bagian yang diserahkan | Bukti dan keterbatasan tercatat |

Hapus tahap yang tidak diperlukan. Jangan otomatis membuat autentikasi, backend,
atau database jika PRD tidak membutuhkannya.

## 5. Pemetaan rencana

| Kebutuhan | Keputusan desain | Tugas | Cara verifikasi |
| --- | --- | --- | --- |
| [FR-ID] | [DEC-ID/tidak berlaku] | [T-ID] | [AC-ID dan langkah] |

## 6. Risiko pelaksanaan

| Risiko | Tanda terjadinya | Tindakan | Dampak pada urutan |
| --- | --- | --- | --- |
| [risiko] | [indikator] | [respons] | [tugas] |

Penerapan/migrasi dan pemulihan mengikuti [design.md](../design.md).

## 7. Penyesuaian rencana

| Tanggal | Perubahan | Alasan | Tugas yang perlu disusun ulang |
| --- | --- | --- | --- |
| [tanggal] | [isi] | [isi] | [ID] |

Status pekerjaan harian hanya disimpan di [task.md](task.md) agar tidak ada dua
daftar status yang saling bertentangan.

Referensi konsep: [S2, S3, B1](../REFERENCES.md).
Pemeriksaan kesiapan berlaku per tugas sebagai penyesuaian kit.
