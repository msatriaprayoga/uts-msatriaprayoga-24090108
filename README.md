# UTS Pemrograman Web  
Konversi Desain Figma ke Website (HTML, CSS, JavaScript)

- Nama: Muhammad Satria Prayoga
- NIM: 24090108
- Kelas: 3D

---

# Deskripsi Singkat Project
Project ini merupakan Ujian Tengah Semester (UTS) pada Mata Kuliah Pemrograman Web .  
Tugas utama adalah mengonversi desain dari Figma menjadi website fungsional menggunakan **HTML Semantik 5, CSS, dan JavaScript DOM**, serta melakukan deployment menggunakan **GitHub Pages**.

Website ini memiliki 3 halaman utama,diantaranya yaitu:

---

## 1.Login Page (index.html)
- Memiliki input **Email** dan **Password (NIM)**.
- Validasi:
  - Tidak boleh kosong.
  - Menggunakan JavaScript DOM (tanpa backend).
- Jika berhasil login:
  - Muncul alert *“Login berhasil”*
  - Redirect ke **dashboard.html**
- Halaman bersifat responsif.

---

## 2.Dashboard Page (dashboard.html)
- Berisi judul **Dashboard** dan sidebar navigasi.
- Terdapat **3 card ringkasan**, yaitu:
  - Total Produk  
  - Total Penjualan  
  - Total Revenue  
- Data card diambil dari array JavaScript pada *script.js*.
- Terdapat tombol **“Lihat Produk”** yang mengarah ke *products.html*.
- Sidebar dapat dibuka/ditutup menggunakan tombol hamburger (JavaScript).

---

## 3. List Data Product (products.html)
- Menampilkan tabel data produk dari **array of object JavaScript**.
- Data ditampilkan menggunakan `forEach()` atau `.map()`.
- Fitur pada tabel:
  - **Edit** → Menampilkan alert dengan ID/nama produk.
  - **Delete** → Menghapus baris tabel menggunakan `DOM.remove()` setelah konfirmasi `confirm()`.
- Desain tabel rapi dan responsif.

---

## Link Repository GitHub
https://github.com/msatriaprayoga/uts-msatriaprayoga-24090108

---

## Link GitHub Pages
https://msatriaprayoga.github.io/uts-msatriaprayoga-24090108/

---

## Teknologi yang saya gunakan
- HTML5
- CSS3 (Flexbox/Grid)
- JavaScript DOM
- GitHub Pages
- Responsive Design

---

## Fitur Tambahan (Opsional)
Beberapa fitur tambahan yang boleh saya tambahkan:
- Hover effect pada tombol atau card  
- Transisi animasi pada sidebar  
- Icon tambahan untuk navigasi    
- Responsive full mobile layout  

---

## Cara Menjalankan Project
1. Buka folder project di komputer.
2. Jalankan file **index.html** menggunakan browser.
3. Untuk versi online, buka link GitHub Pages yang sudah di-deploy.

---

## Status Project
- Selesai dan Siap Upload ke GitHub  
