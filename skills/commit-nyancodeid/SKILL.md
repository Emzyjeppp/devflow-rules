---
name: commit-nyancodeid
description: Panduan penyusunan pesan commit Git terstandarisasi berdasarkan pedoman nyancodeid dengan tipe, cakupan, subjek, dan penjelasan perubahan yang konsisten.
---

# Commit Nyancodeid

Skill ini memandu pembentukan pesan commit yang jelas, ringkas, dan mematuhi konvensi Semantic Commit Messages adaptasi nyancodeid.

## Struktur Pesan Commit

Pesan commit terdiri dari tiga bagian utama: header (wajib), body (opsional), dan footer (opsional).

```text
<type>(<scope>): <subject>

<body>

<footer>
```

## Daftar Tipe Commit

| Tipe | Makna dan Penggunaan |
|---|---|
| `feat` | Penambahan fitur baru untuk pengguna. |
| `fix` | Perbaikan bug atau galat pada program. |
| `refactor` | Perubahan kode yang tidak memperbaiki bug dan tidak menambah fitur baru. |
| `perf` | Perubahan kode yang bertujuan meningkatkan performa eksekusi. |
| `style` | Pemformatan kode, spasi, titik koma (tidak mengubah logika kerja kode). |
| `test` | Penambahan atau perbaikan berkas pengujian. |
| `docs` | Penambahan atau pembaruan dokumentasi (README, panduan pengguna, jsdoc). |
| `build` | Perubahan yang mempengaruhi sistem build atau dependensi eksternal (npm, vite, webpack). |
| `ci` | Perubahan pada berkas konfigurasi CI/CD (GitHub Actions, GitLab CI). |

## Aturan Penulisan

1. **Header (Baris Pertama)**
   - Format: `<type>(<scope>): <subject>`
   - `scope`: Opsional, merujuk pada modul proyek (misalnya `auth`, `ui`, `api`, `config`, `cart`).
   - `subject`: Gunakan kalimat perintah (imperative mood), awali dengan huruf kecil, tanpa titik di akhir.
   - Panjang baris tidak boleh melebihi 100 karakter.

2. **Body (Penjelasan Rinci)**
   - Pisahkan dari header dengan satu baris kosong.
   - Jelaskan motivasi perubahan dan perbedaan perilaku sebelum dan sesudah perubahan.
   - Setiap baris dibatasi maksimal 100 karakter.

3. **Footer (Informasi Tambahan & Breaking Changes)**
   - Gunakan `BREAKING CHANGE:` diikuti spasi atau baris baru untuk perubahan yang memutus kompatibilitas ke belakang.
   - Cantumkan referensi issue tracker jika ada (misalnya `Closes #123`).

## Contoh Pesan Commit

### Contoh Commit Sederhana
```text
feat(ui): tambahkan komponen modal konfirmasi hapus
fix(cart): perbaiki kalkulasi diskon kupon persentase
docs(readme): lengkapi panduan instalasi dan variabel environment
```

### Contoh Commit dengan Body dan Breaking Change
```text
feat(api): ubah struktur respons endpoint transaksi

perbarui format balasan dengan menyertakan pagination metadata dan ringkasan total.

BREAKING CHANGE: properti data kini berada dalam objek { items, meta }
```

### Contoh Commit Revert
```text
revert: feat(ui): tambahkan komponen modal konfirmasi hapus

This reverts commit 7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b.
```
