---
name: no-emoji
description: Panduan penegakan aturan bebas emoji dan simbol dekoratif, serta penyediaan solusi pengganti menggunakan teks biasa, badge status, dan ikon SVG inline.
---

# No Emoji

Skill ini menegakkan aturan bahwa seluruh berkas kode, antarmuka, dokumentasi, nama branch, dan pesan commit tidak boleh memuat emoji atau karakter simbol dekoratif.

## Ruang Lingkup Larangan

Larangan penggunaan emoji dan simbol dekoratif berlaku untuk:
1. **Antarmuka Pengguna**: Judul, paragraf, placeholder form, badge, toast, notifikasi, dan empty state.
2. **Atribut dan Kode**: `alt`, `title`, `aria-label`, nama fungsi, variabel, komentar kode, dan log terminal.
3. **Dokumentasi dan Repositori**: README, PR description, commit message, dan nama berkas.

Karakter seperti centang unicode, silang unicode, bintang dekoratif, atau panah karakter juga termasuk dalam larangan jika digunakan sebagai elemen antarmuka.

## Solusi Pengganti yang Dianjurkan

| Kebutuhan Visual | Solusi yang Diterapkan |
|---|---|
| Ikon navigasi / kontrol | Ikon SVG inline atau pustaka ikon proyek (Lucide, Heroicons). Lihat contoh di [references/svg-icons.md](file:///C:/Users/jefry/Downloads/devflow-rules/skills/no-emoji/references/svg-icons.md). |
| Indikator status berhasil / gagal | Badge berbasis teks ("Sukses", "Gagal", "Tertunda") dengan styling CSS latar dan teks. |
| Daftar rincian | Poin bullet standar Markdown (`-`) atau tag HTML `<ul>` / `<li>`. |
| Indikator progres kerja | Teks progres ("Memuat data...") atau animasi CSS spinner. |

## Pengecualian

Emoji hanya diizinkan dalam kondisi khusus berikut:
1. Pengguna secara eksplisit meminta penambahan emoji tertentu.
2. Data berasal dari input pengguna dinamis yang disimpan dan ditampilkan apa adanya di layar.
3. Berkas eksternal lawas yang sudah ada sebelumnya memang menggunakan emoji dan tugas yang dikerjakan bukan bagian dari pembersihan format.

## Verifikasi Bebas Emoji

Untuk memeriksa berkas di lingkungan Windows PowerShell:

```powershell
Select-String -Path .\path\ke\file -Pattern '[\p{Cs}\u2190-\u27BF\u2B00-\u2BFF\uFE0F]'
```

Atau menggunakan ripgrep (jika terpasang):

```bash
rg -n '[\x{1F300}-\x{1FAFF}\x{2190}-\x{27BF}\x{2B00}-\x{2BFF}\x{FE0F}]' .
```
