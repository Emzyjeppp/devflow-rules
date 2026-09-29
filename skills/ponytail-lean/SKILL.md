---
name: ponytail-lean
description: Panduan kesederhanaan rekayasa perangkat lunak untuk mencegah over-engineering, memprioritaskan fitur bawaan, dan menerapkan prinsip YAGNI.
---

# Ponytail Lean

Skill ini menanamkan pola pikir minimalis dan efisien dalam penulisan kode: menyelesaikan masalah dengan solusi paling sederhana yang terbukti bekerja tanpa abstraksi spekulatif.

## Prinsip Inti

1. **YAGNI (You Aren't Gonna Need It)**: Jangan menulis kode atau arsitektur untuk kebutuhan yang belum ada saat ini.
2. **Standard Library First**: Prioritaskan fungsi bawaan bahasa pemrograman sebelum mencari paket pihak ketiga.
3. **Platform First**: Gunakan kemampuan bawaan browser, HTML semantik, CSS modern, atau engine database sebelum menambahkan lapisan JavaScript.
4. **Hindari Abstraksi Prematur**: Jangan membuat factory, wrapper, atau interface jika hanya memiliki satu implementasi konkret.

## Tangga Pengambilan Keputusan Solusi

Sebelum menambahkan baris kode baru atau menginstal dependensi, ikuti 7 tingkat evaluasi:

1. **Relevansi**: Apakah fitur ini diminta secara eksplisit atau esensial bagi fungsionalitas inti? Jika tidak, eliminasi.
2. **Reuse**: Apakah ada helper, komponen, atau tipe data di repositori yang dapat digunakan kembali?
3. **Pustaka Standar**: Dapatkah fitur ini diselesaikan menggunakan pustaka standar runtime (misalnya `fetch`, `URL`, `crypto`, `Intl`)?
4. **Fitur Platform**: Dapatkah diselesaikan dengan fitur HTML5/CSS3 (seperti `<dialog>`, `<details>`, CSS Grid, Flexbox, Form validation bawaan)?
5. **Dependensi Terpasang**: Jika butuh bantuan pustaka eksternal, gunakan paket yang sudah ada di `package.json`.
6. **Implementasi Mandiri Ringkas**: Tulis fungsi sederhana (10-30 baris) yang fokus pada satu tugas daripada memasang library besar.
7. **Dependensi Baru**: Tambahkan dependensi eksternal baru hanya jika biaya implementasi mandiri jauh lebih tinggi dari sisi keamanan atau kompleksitas (misalnya parsing kriptografi tingkat lanjut).

## Praktik Anti-Overengineering

- Jangan membagi kode menjadi puluhan file kecil jika satu file modul sudah cukup jelas dan kohesif.
- Jangan menambahkan global state management (seperti Redux/Zustand) jika state lokal (`useState` / props drilling 1-2 tingkat) mencukupi.
- Pertahankan keterbacaan kode; kode ringkas tidak berarti menulis one-liner rumit yang sulit dipahami pengembang lain.
- Tinggalkan catatan `// TODO: ...` hanya jika ada batasan teknis nyata yang sengaja ditunda dengan alasan yang jelas.
