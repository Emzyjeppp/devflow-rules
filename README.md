# DevFlow Rules

Kumpulan aturan pengembangan dan skill siap pakai untuk AI coding assistant, dirancang untuk membangun antarmuka web yang konsisten, menjaga kode tetap sederhana dan terstruktur, serta menegakkan disiplin penulisan dan git workflow.

Repositori ini mengintegrasikan praktik terbaik dari berbagai referensi terpercaya menjadi satu set aturan kerja terpadu dalam bahasa Indonesia.

## Prinsip Utama

1. **Komponen Antarmuka Konkret**: Mengadopsi hierarki elemen, section, dan halaman dengan adaptasi yang sesuai arsitektur proyek.
2. **Pengembangan Bertahap**: Mengorkestrasi proyek melalui delapan fase terstruktur dari perencanaan (PRD) hingga rilis.
3. **Kesederhanaan Solusi (Lean Code)**: Menerapkan prinsip YAGNI, memprioritaskan pustaka standar bahasa dan fitur bawaan platform sebelum menambah dependensi.
4. **Disiplin Pesan Commit**: Format pesan commit terstandarisasi dengan tipe, cakupan, subjek, serta penjelasan perubahan yang jelas.
5. **Bahasa Alami dan Faktual**: Menghilangkan klise atau pola artifisial keluaran AI dan menjaga kejelasan komunikasi teknis.
6. **Bebas Emoji**: Menghindari emoji dan simbol dekoratif pada kode, antarmuka, pesan commit, dan dokumentasi.

## Struktur Repositori

```text
devflow-rules/
|-- .gitignore
|-- LICENSE
|-- README.md
|-- RULES.md
`-- skills/
    |-- commit-nyancodeid/
    |   `-- SKILL.md
    |-- dealtech-ui/
    |   `-- SKILL.md
    |-- devflow-orchestrator/
    |   `-- SKILL.md
    |-- humanize-writing/
    |   |-- SKILL.md
    |   `-- references/
    |       |-- ai-tells.md
    |       `-- channels.md
    |-- no-emoji/
    |   |-- SKILL.md
    |   `-- references/
    |       `-- svg-icons.md
    `-- ponytail-lean/
        `-- SKILL.md
```

## Daftar Skill

| Skill | Deskripsi | Berkas Utama |
|---|---|---|
| `dealtech-ui` | Panduan pemilihan dan adaptasi komponen antarmuka konkret berdasarkan hierarki element, section, dan page. | [skills/dealtech-ui/SKILL.md](skills/dealtech-ui/SKILL.md) |
| `devflow-orchestrator` | Orkestrasi alur kerja pengembangan aplikasi 8 fase mulai dari penyusunan spesifikasi hingga rilis. | [skills/devflow-orchestrator/SKILL.md](skills/devflow-orchestrator/SKILL.md) |
| `ponytail-lean` | Pencegahan over-engineering, penerapan prinsip YAGNI, dan prioritas pustaka standar runtime. | [skills/ponytail-lean/SKILL.md](skills/ponytail-lean/SKILL.md) |
| `commit-nyancodeid` | Pedoman penyusunan pesan commit Git terstruktur mengikuti konvensi nyancodeid. | [skills/commit-nyancodeid/SKILL.md](skills/commit-nyancodeid/SKILL.md) |
| `humanize-writing` | Panduan penulisan teks alami, lugas, dan bebas dari pola artifisial AI (Humanize Pro). | [skills/humanize-writing/SKILL.md](skills/humanize-writing/SKILL.md) |
| `no-emoji` | Aturan larangan penggunaan emoji dan simbol dekoratif dengan alternatif SVG dan teks badge. | [skills/no-emoji/SKILL.md](skills/no-emoji/SKILL.md) |

## Cara Penggunaan

Dokumen dalam repositori ini dapat digunakan dengan beberapa pendekatan sesuai alat yang Anda gunakan:

### 1. Penggunaan Manual (Salin Teks ke Prompt)
Salin isi [RULES.md](RULES.md) atau `SKILL.md` yang relevan ke dalam prompt percakapan dengan AI asisten Anda saat memulai tugas.

### 2. Konfigurasi Aturan Proyek (Cursor, Windsurf, Claude Code, Copilot)
Tambahkan referensi atau salin isi [RULES.md](RULES.md) ke berkas konfigurasi instruksi proyek Anda:
- **Cursor**: Salin ke `.cursorrules` atau folder `.cursor/rules/`.
- **Windsurf**: Salin ke `.windsurfrules`.
- **Claude Code**: Salin atau tautkan ke `CLAUDE.md`.
- **GitHub Copilot**: Masukkan ke dalam `.github/copilot-instructions.md`.

### 3. Pemasangan Folder Skill pada Asisten Agentic
Jika asisten AI Anda mendukung pemuatan folder skill (seperti Antigravity atau framework agen sejenis), Anda dapat menyalin folder `skills/` ke direktori skill asisten atau mereferensikannya langsung dalam workspace.

> Catatan: Repositori ini berupa kumpulan panduan dan aturan berbasis Markdown. Membaca atau menyalin berkas ini tidak secara otomatis memasang runtime, paket npm, atau plugin eksternal baru ke sistem Anda.

## Contoh Prompt

Berikut contoh instruksi yang dapat Anda berikan kepada AI coding assistant bersama repositori ini:

### Membangun Fitur Baru
```text
Gunakan pedoman RULES.md dalam repositori ini. Buat komponen tabel data pengguna dengan fitur pencarian dan paginasi menggunakan Tailwind CSS. Terapkan prinsip ponytail-lean untuk menjaga kode tetap minimalis dan no-emoji untuk semua status antarmuka.
```

### Menyusun Pesan Commit
```text
Berdasarkan perubahan kode saat ini, buatkan pesan commit yang mematuhi pedoman skills/commit-nyancodeid/SKILL.md. Pastikan tipe, scope, dan batasan panjang karakter terpenuhi tanpa emoji.
```

### Menyunting Teks Antarmuka
```text
Tinjau teks notifikasi dan dialog konfirmasi pada file ini. Sesuaikan menggunakan panduan skills/humanize-writing/SKILL.md agar terdengar alami, ringkas, langsung ke tindakan, dan tanpa em dash.
```

## Sumber dan Atribusi

Aturan dan skill dalam repositori ini disusun dan diadaptasi dari karya-karya berikut:

- **DealTech UI**: Komponen antarmuka publik DealTech ([Deal-Tech/dealtech-ui-for-public-component](https://github.com/Deal-Tech/dealtech-ui-for-public-component)).
- **Vibes-Plug**: Alur kerja orkestrasi dan arsitektur multi-agen oleh Roedy Rustam ([roedyrustam/vibes-plug](https://github.com/roedyrustam/vibes-plug)).
- **Ponytail**: Prinsip kesederhanaan dan pencegahan over-engineering oleh Dietrich Gebert ([DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail)).
- **Pedoman Commit nyancodeid**: Format pesan commit terstandarisasi oleh nyancodeid ([Gist nyancodeid](https://gist.github.com/nyancodeid/63f19941c81252bb0cca9c14497cf9f7)).
- **Humanize Pro**: Panduan bahasa alami dan eliminasi klise AI oleh msdanyg ([msdanyg/humanize-pro](https://github.com/msdanyg/humanize-pro)).
- **Aturan Bebas Emoji**: Panduan penegakan antarmuka dan basis kode bebas karakter simbol dekoratif.

## Lisensi

Repositori ini didistribusikan di bawah lisensi [MIT](LICENSE).
