# Tugas dan Bukti Pekerjaan

Status proyek: belum diisi dari brief.
Tugas aktif: belum ada.
Dokumen pendukung: [plan.md](plan.md), [PRD](../prd.md), [desain](../design.md).

## Status

- pending: belum dimulai.
- in_progress: sedang dikerjakan.
- blocked: terhambat; tulis alasan dan cara membuka hambatan.
- done: kriteria terpenuhi dan bukti tersedia.
- cancelled: dikeluarkan dari cakupan dengan alasan.

## Backlog awal

Baris berikut adalah pekerjaan persiapan proyek pengguna. Penyediaan template
tidak berarti pekerjaan tersebut telah selesai.

| ID | Pekerjaan | Dependensi | Status | Kriteria selesai |
| --- | --- | --- | --- | --- |
| T-001 | Isi prd.md dari brief | Brief | pending | Kebutuhan P1 dan AC jelas |
| T-002 | Pilih stack dalam techstack.md | T-001 | pending | Pilihan dan alasannya tercatat |
| T-003 | Isi desain sesuai kebutuhan | T-001, T-002 | pending | Alur dan keputusan terkait tersedia |
| T-004 | Sesuaikan rules.md | T-001–T-003 | pending | Konvensi relevan ditetapkan |
| T-005 | Rinci plan.md dan tugas implementasi | T-001–T-004 | pending | Setiap tugas punya hasil dan dependensi |

## Tugas implementasi

Tambahkan setelah cakupan diketahui. Kelompokkan menurut story agar hasil
setiap kelompok dapat ditunjukkan. Gunakan path yang benar-benar dipilih.

| ID | Story/kebutuhan | Aksi dan path | Dependensi | Status |
| --- | --- | --- | --- | --- |
| [T-ID] | [US/FR-ID] | [aksi konkret + path] | [ID/tidak ada] | pending |

Untuk pekerjaan pemeliharaan tanpa story, tulis alasan teknis dan dampaknya.

## Detail tugas

Salin format ini untuk setiap tugas yang memerlukan detail.

### [T-ID] — [Hasil konkret]

- Story/kebutuhan: [ID].
- Keputusan desain: [DEC-ID/tidak berlaku].
- File yang disentuh: [path].
- Di luar tugas ini: [batas].
- Kriteria penerimaan: [AC-ID atau hasil teknis yang dapat diperiksa].
- Cara verifikasi: [perintah/langkah dan hasil yang diharapkan].
- Hambatan: [masalah/tidak ada].
- Hasil aktual: belum dikerjakan.

Status utama berada di tabel; detail tidak perlu menggandakan status.

## Log verifikasi

| ID bukti | Tugas/AC | Kode atau waktu pemeriksaan | Perintah/langkah | Hasil aktual | Kesimpulan |
| --- | --- | --- | --- | --- | --- |
| [V-ID] | [T-ID/AC-ID] | [SHA atau waktu] | [langkah] | [output ringkas] | [lulus/gagal/belum diuji] |

Jangan mencantumkan output contoh sebagai hasil nyata. Beri lokasi log/screenshot
jika tersedia tanpa menyertakan kredensial atau data pribadi.

## Pemeriksaan selesai per tugas

- Kriteria penerimaan terpenuhi.
- Bukti relevan tercatat; kegagalan belum terselesaikan tidak disembunyikan.
- Dokumen yang terpengaruh diperbarui.
- Tidak ada perubahan di luar cakupan yang tidak dijelaskan.

## Catatan sesi

- Terakhir diperbarui: [tanggal/waktu].
- Selesai: [T-ID dan hasil].
- Sedang dikerjakan: [T-ID].
- File/commit terkait: [path/SHA yang tersedia].
- Kendala: [isi].
- Langkah berikutnya: [satu aksi konkret].
- Bukti yang dapat digunakan kembali: [V-ID dan batas relevansinya].

Referensi konsep: [S3, O0](../REFERENCES.md).
Status, log bukti, dan catatan sesi adalah perluasan starter.
