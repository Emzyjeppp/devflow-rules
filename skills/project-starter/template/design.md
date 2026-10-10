# Desain Pengalaman dan Sistem

Status: draft • PRD revisi: [nomor] • Diperbarui: [tanggal]

Dokumen ini memisahkan UX dari desain teknis. Isi bagian relevan; untuk produk tanpa UI,
tandai bagian visual tidak berlaku dan jelaskan antarmuka CLI/API jika ada.

## 1. Pengalaman pengguna

| Layar/antarmuka | Tujuan | Aksi utama | Kebutuhan terkait |
| --- | --- | --- | --- |
| [nama] | [hasil] | [aksi] | [FR-ID] |

Alur US-001: [masuk → aksi → hasil].
Saat gagal: [pesan, pemulihan, dan keadaan data].
Saat kembali: [keadaan yang dipertahankan].

### Tampilan

| Token | Nilai yang dipilih | Pemakaian |
| --- | --- | --- |
| Warna | [palet] | [latar/teks/aksi/status] |
| Tipografi | [font dan skala] | [hierarki] |
| Spacing | [skala] | [jarak komponen] |
| Bentuk | [border/radius] | [komponen] |

### Perilaku

| Komponen | State yang relevan | Respons dan pesan |
| --- | --- | --- |
| [nama] | [loading/empty/error/success/focus/disabled] | [perilaku] |

Adaptasi layar: [perubahan layout pada ukuran kecil/besar].
Aksesibilitas: [keyboard, fokus, label, alternatif gambar, keterbacaan].
Bahasa dan istilah: [pilihan konsisten].
Aset: [lokasi, sumber, dan hak penggunaan].

## 2. Desain teknis

Konteks: [masalah desain yang perlu diselesaikan].
Tujuan: [hasil teknis yang mendukung PRD].
Tidak ditangani: [batas desain].
Stack: lihat [techstack.md](techstack.md).

| Komponen | Tanggung jawab | Data yang dimiliki | Berkomunikasi dengan |
| --- | --- | --- | --- |
| [nama] | [fungsi] | [data] | [komponen] |

Jelaskan aliran data utama: [sumber, validasi, perubahan, penyimpanan, respons].
Tambahkan diagram hanya jika membantu menjelaskan hubungan antarkomponen.

### Keputusan lintas komponen

| ID | Keputusan | Alternatif | Alasan dan konsekuensi | Status |
| --- | --- | --- | --- | --- |
| DEC-001 | [pilihan] | [opsi] | [trade-off] | proposed |

Gunakan status proposed, accepted, superseded. Rujuk ID ini dari rencana dan tugas.

### Model data dan kontrak

| Entitas | Identitas dan atribut | Relasi | Invarian |
| --- | --- | --- | --- |
| [nama] | [field] | [relasi] | [kondisi yang selalu benar] |

| Operasi/antarmuka | Masukan | Hasil | Kesalahan | Aturan akses |
| --- | --- | --- | --- | --- |
| [nama] | [bentuk] | [bentuk] | [respons] | [otorisasi] |

Untuk sistem yang membutuhkannya, tetapkan perilaku transaksi, retry, duplikasi, dan konkurensi.
Jangan menciptakan kebutuhan tersebut jika tidak relevan.

## 3. Risiko dan penerapan

| Risiko | Dampak | Mitigasi | Bukti yang diperlukan |
| --- | --- | --- | --- |
| [risiko] | [dampak] | [cara] | [pemeriksaan] |

Perubahan data lama: [migrasi/tidak berlaku].
Pemulihan jika penerapan gagal: [cara rollback atau batas pemulihan].
Keputusan belum selesai: [ID pertanyaan dari PRD atau techstack].

Referensi konsep: [B2, O1](REFERENCES.md). Penggabungan UX dan desain teknis dalam satu file adalah pilihan kit.
