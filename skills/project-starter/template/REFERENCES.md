# Sumber dan Catatan Adaptasi

Ditinjau pada 10 Oktober 2026. Tautan repository mengarah ke main sehingga
isinya dapat berubah. Tidak ada klaim bahwa kit ini cocok dengan satu versi
CLI tertentu. Angka stars tidak digunakan sebagai persyaratan teknis.

## Referensi yang digunakan

| ID | Sumber primer | Gagasan yang digunakan |
| --- | --- | --- |
| S0 | [GitHub Spec Kit — README](https://github.com/github/spec-kit) | Prinsip proyek dan alur kebutuhan, rencana, tugas, implementasi |
| S1 | [Spec Kit — spec template](https://github.com/github/spec-kit/blob/main/templates/spec-template.md) | Story berprioritas, skenario penerimaan, kebutuhan, hasil terukur |
| S2 | [Spec Kit — plan template](https://github.com/github/spec-kit/blob/main/templates/plan-template.md) | Konteks teknis, pemeriksaan prinsip, struktur, alasan kompleksitas |
| S3 | [Spec Kit — tasks template](https://github.com/github/spec-kit/blob/main/templates/tasks-template.md) | Tugas menurut story, path konkret, dependensi, penyelesaian bertahap |
| O0 | [OpenSpec — README](https://github.com/Fission-AI/OpenSpec) | Spesifikasi dan daftar pekerjaan yang dipelihara saat perubahan diterapkan |
| O1 | [OpenSpec — design template](https://github.com/Fission-AI/OpenSpec/blob/main/schemas/spec-driven/templates/design.md) | Konteks, batas tujuan, keputusan, dan risiko desain teknis |
| B1 | [BMAD — Choose a Planning Path](https://github.com/bmad-code-org/BMAD-METHOD/blob/main/docs/plan/choose-a-planning-path.md) | Kedalaman perencanaan sesuai ukuran dan ketidakpastian pekerjaan |
| B2 | [BMAD — Design UX and Architecture](https://github.com/bmad-code-org/BMAD-METHOD/blob/main/docs/plan/design-ux-and-architecture.md) | Pemisahan tampilan/perilaku serta keputusan lintas komponen dengan ID |
| A1 | [Agent OS — Standards](https://buildermethods.com/agent-os/standards) | Konvensi ringkas dan spesifik; aturan dibedakan dari prosedur |
| A0 | [Agent OS — repository](https://github.com/buildermethods/agent-os) | Konteks proyek sumber untuk standards dan spesifikasi |
| G1 | [AGENTS.md — panduan resmi](https://agents.md/) | Instruksi agent, konteks setup/pengujian, dan file di root |
| G0 | [AGENTS.md — repository](https://github.com/agentsmd/agents.md) | Asal format AGENTS.md |

## Bagian yang sengaja disesuaikan

1. Tujuh file inti tetap memakai nama dan lokasi permintaan pengguna.
2. PRD merangkum kebutuhan produk dan story; tidak memakai struktur folder
   spesifikasi per fitur dari Spec Kit.
3. techstack.md memuat pemilihan teknologi. design.md memuat UX dan desain teknis
   dalam bagian terpisah. Ini bukan susunan bawaan OpenSpec atau BMAD.
4. rules.md berfungsi sebagai prinsip dan konvensi lokal, bukan file constitution
   yang dapat langsung diproses CLI Spec Kit.
5. agents/plan.md memegang urutan; agents/task.md memegang status aktual.
6. AGENTS.md root adalah pengarah. agents/agents.md tetap ada sesuai permintaan.
7. Format status, ID AC/DEC/R/V, catatan sesi, prompt awal, dan aturan commit adalah
   pilihan kit, bukan standar universal dari seluruh sumber.
8. Verifikasi disesuaikan risiko. Kit tidak menyalin kewajiban testing atau
   approval dari satu framework ke semua jenis proyek.
9. Kit tidak mengaktifkan multi-agent, instalasi, publikasi, maupun integrasi
   framework secara otomatis.

## Batas penggunaan sumber

Dokumen ditulis ulang dalam bahasa Indonesia dengan struktur gabungan dan
tambahan praktis. Kit tidak menyertakan source code, skrip, aset, atau paket
instalasi repository sumber, dan tidak mengklaim afiliasi resmi.

Jika kemudian memasukkan kode atau template asli dari suatu repository,
ikuti lisensi dan pertahankan pemberitahuan atribusi yang berlaku pada materi
tersebut. Dokumen ini mencatat asal gagasan, bukan menggantikan lisensi upstream.
