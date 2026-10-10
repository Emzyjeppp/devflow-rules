# Project Starter Kit

Versi kit: 2.0 • Bahasa: Indonesia • Referensi ditinjau: 10 Oktober 2026

Starter dokumentasi untuk merencanakan proyek dan memberi konteks kepada coding agent. Kit ini mengadaptasi konsep dari GitHub Spec Kit, OpenSpec, BMAD Method, Agent OS, dan AGENTS.md. Ini susunan mandiri; tidak memasang atau menjalankan kelima framework tersebut.

## Mulai dari sini

1. Ekstrak seluruh isi ZIP ke root proyek. Jika file bernama sama sudah ada, gabungkan isinya.
2. Isi [prd.md](prd.md): masalah, pengguna, ruang lingkup, dan hasil yang dibutuhkan.
3. Isi [techstack.md](techstack.md): pilihan teknologi beserta alasan.
4. Isi [design.md](design.md): pengalaman pengguna dan keputusan sistem.
5. Sesuaikan [rules.md](rules.md) dengan kebutuhan proyek.
6. Gunakan [agents/agents.md](agents/agents.md), [agents/plan.md](agents/plan.md), dan [agents/task.md](agents/task.md) untuk pelaksanaan.
7. Kerjakan satu bagian yang siap, periksa hasilnya, lalu catat kelanjutannya.

Urutan di atas adalah preferensi starter ini. Pembaruan dokumen boleh bolak-balik ketika ditemukan informasi baru. Tidak perlu meminta konfirmasi ulang untuk keputusan rutin yang sudah tercakup dalam permintaan pengguna.

## Isi dan tanggung jawab

| File | Sumber informasi utama |
| --- | --- |
| prd.md | Apa yang dibuat, untuk siapa, dan bagaimana keberhasilannya dinilai |
| techstack.md | Teknologi, versi, dependensi, dan perintah pengembangan |
| design.md | Perilaku antarmuka, batas komponen, data, dan keputusan desain |
| rules.md | Prinsip dan konvensi proyek |
| agents/agents.md | Cara agent membaca konteks, bekerja, dan menyerahkan hasil |
| agents/plan.md | Urutan pelaksanaan, risiko, dan kesiapan pekerjaan |
| agents/task.md | Tugas aktif, status, serta bukti verifikasi |
| AGENTS.md | Pengarah singkat untuk agent yang mendukung format ini |
| REFERENCES.md | Sumber dan penjelasan adaptasi |

## Cara mengisi

- Ganti teks dalam kurung siku dengan informasi nyata. Placeholder bukan keputusan.
- Gunakan “Tidak berlaku — [alasan]” untuk bagian yang tidak relevan.
- Tandai asumsi dengan ASSUMPTION dan pertanyaan yang menghambat dengan OPEN.
- Pilihan yang belum dibuat tetap berstatus draft.
- Jangan mengisi hasil pengujian, tanggal persetujuan, atau metrik dengan perkiraan seolah-olah sudah terjadi.
- Kit ini belum menentukan framework, database, autentikasi, atau deployment.

Untuk proyek kecil, isi bagian relevan secara singkat. Untuk fitur berikutnya, tambahkan kebutuhan dan tugas dengan ID baru; jangan menimpa riwayat pekerjaan yang selesai.

## Prompt awal untuk coding agent

> Baca AGENTS.md dan agents/agents.md. Gunakan brief berikut untuk mengisi prd.md, techstack.md, design.md, rules.md, agents/plan.md, dan agents/task.md secara berurutan. Brief proyek: [jelaskan proyek, pengguna, fitur utama, batasan, dan stack jika sudah dipilih]. Bedakan fakta, asumsi, dan pertanyaan terbuka. Ajukan pertanyaan hanya jika jawabannya mengubah keputusan penting. Setelah tugas pertama siap dan implementasi termasuk dalam permintaanku, kerjakan, verifikasi, dan perbarui status beserta bukti hasilnya.

## Catatan kompatibilitas

AGENTS.md di root mengarahkan agent ke panduan dalam folder agents. Dukungan pembacaan otomatis bergantung pada alat dan konfigurasinya. Jika alat tidak membacanya, sebutkan kedua file tersebut dalam prompt. Kit ini tidak menyediakan slash command dari framework sumber.

## Perubahan dari versi awal

Ditambahkan hubungan kebutuhan ke tugas, keputusan dengan alternatif, pemeriksaan kesiapan, prosedur perubahan cakupan, log verifikasi, panduan melanjutkan sesi, serta sumber per bagian. Struktur tujuh file inti dipertahankan.
