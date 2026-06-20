# 🌐 Personal Portfolio Website

Selamat datang di repositori website portofolio profesional saya! Website ini dirancang untuk menampilkan berbagai proyek, pencapaian, dan perjalanan karier saya di bidang teknologi, khusus pengembangan perangkat lunak, data, dan AI. 

Repositori ini memuat *source code* front-end untuk website portofolio tersebut, yang siap di- *deploy* (daringkan) agar dapat diakses oleh *recruiter*, kolaborator, atau siapa saja yang tertarik dengan karya saya.

---

## 📁 Struktur File

Berdasarkan *source code* yang ada di repositori ini, berikut adalah penjelasan komponen utama website:

- **`index.html`** : Ini adalah file *HTML* utama (kerangka dasar) dari website portofolio. Seluruh struktur konten (seperti bagian "About Me", "Projects", "Experience", dan "Contact") ditulis di dalam file ini. File ini sudah dioptimasi untuk dimuat dengan cepat oleh browser.
- **`_redirects`** : File konfigurasi khusus yang biasanya digunakan untuk platform *hosting* seperti Netlify atau Cloudflare Pages. File ini mengatur sistem pengalihan URL (*routing*), sehingga navigasi antar halaman atau akses ke link tertentu dapat diarahkan dengan benar tanpa memunculkan pesan *error* "404 Not Found".
- **`_headers`** : File konfigurasi tambahan yang digunakan untuk mendefinisikan *HTTP Headers*. Ini sangat penting untuk mengatur *security policy* (keamanan website) dan *caching* (agar website termuat lebih cepat untuk pengunjung yang kembali).

---

## 🚀 Cara Menjalankan Secara Lokal (Local Development)

Jika Anda ingin melihat atau mengedit website ini di komputer Anda sendiri sebelum mempublikasikannya, ikuti langkah mudah ini:

1. Pastikan Anda sudah mengunduh atau men- *clone* repositori ini.
2. Buka folder repositori di editor kode favorit Anda (seperti Visual Studio Code).
3. Anda bisa menggunakan ekstensi **Live Server** di VS Code. Cukup klik kanan pada file `index.html` lalu pilih **"Open with Live Server"**.
4. Website portofolio akan langsung terbuka secara otomatis di *browser* komputer Anda (biasanya di alamat `http://127.0.0.1:5500`).

---

## 🌐 Cara Deployment (Publikasi)

Repositori ini sudah sangat dioptimasi untuk platform *deployment* modern berbasis *static site* (*frontend-only*). Anda bisa mempublikasikannya secara gratis dan cepat melalui:

*   **Netlify:** Sangat direkomendasikan karena file `_redirects` dan `_headers` di dalam repositori ini akan langsung terbaca otomatis oleh sistem Netlify.
*   **Vercel** atau **Cloudflare Pages:** Alternatif *hosting* super cepat yang juga mendukung struktur proyek statis seperti ini.
*   **GitHub Pages:** Jika Anda ingin *hosting* langsung dari GitHub, cukup aktifkan fitur GitHub Pages di menu *Settings* repositori Anda dan arahkan ke *branch* `main`.

---

## 🎨 Kustomisasi

Untuk menjadikan portofolio ini sepenuhnya milik Anda, buka file `index.html` dan ubah beberapa data dasar berikut:
- **Teks Konten:** Ubah nama, perkenalan diri, dan pengalaman kerja.
- **Link Sosial Media:** Pastikan Anda memasukkan URL asli menuju profil LinkedIn, GitHub, atau platform lain milik Anda.
- **Aset Gambar:** Jika ada pemanggilan file gambar profil atau *screenshot* proyek, pastikan gambarnya sudah diganti dengan milik Anda sendiri.
