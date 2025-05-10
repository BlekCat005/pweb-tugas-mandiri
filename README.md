# Portfolio Web Contact Form

This project is a simple contact form for a personal portfolio website. The form allows users to submit their name, email, phone number, and a message. The form data is saved into a MySQL database using PHP.

## Fitur

- **Formulir Kontak**: Pengguna dapat mengisi formulir dengan nama, email, nomor HP, dan pesan.
- **Validasi Formulir**: Semua kolom wajib diisi dengan validasi untuk format email dan nomor HP.
- **Penyimpanan Data**: Data yang dimasukkan disimpan dalam database MySQL (portfolio_db).
  
## Teknologi

- HTML
- CSS
- JavaScript (jQuery)
- PHP
- MySQL (XAMPP)

## Langkah-langkah Setup

1. **Instal XAMPP**:
   - Pastikan XAMPP telah terinstal di komputer Anda. Anda dapat mengunduhnya [di sini](https://www.apachefriends.org/index.html).
   - Jalankan Apache dan MySQL dari XAMPP Control Panel.

2. **Membuat Database**:
   - Buka phpMyAdmin di browser Anda melalui `http://localhost/phpmyadmin`.
   - Buat database dengan nama `portfolio_db`.

3. **Impor Tabel**:
   - Di phpMyAdmin, pilih database `portfolio_db`.
   - Buat tabel dengan nama `kontak` dengan struktur kolom berikut:
     - `id` INT(11) - Primary Key, Auto Increment
     - `nama` VARCHAR(50)
     - `email` VARCHAR(100)
     - `hp` VARCHAR(15)
     - `pesan` TEXT
     - `tanggal` TIMESTAMP (DEFAULT CURRENT_TIMESTAMP)

4. **Menambahkan File ke Direktori**:
   - Salin file proyek (termasuk file PHP dan form HTML) ke dalam folder `htdocs` di dalam direktori XAMPP.
   - Pastikan struktur folder seperti ini:
     ```
     XAMPP/
     └── htdocs/
         └── PWeb/
             ├── index.html
             ├── contact-form.php
             ├── simpan_pesan.php
     ```

5. **Mengonfigurasi Koneksi Database**:
   - Buka file `simpan_pesan.php` dan pastikan konfigurasi database sesuai dengan pengaturan Anda:
     ```php
     $host = "localhost";
     $user = "root";
     $pass = "";
     $db = "portfolio_db";
     $port = 3307;  // Sesuaikan port jika perlu
     ```

6. **Menjalankan Website**:
   - Buka browser dan akses `http://localhost/PWeb/index.html` untuk melihat formulir.
   - Isi formulir dan kirimkan data untuk menguji penyimpanan data ke dalam database.

## Penggunaan

- Pengguna dapat mengisi formulir kontak yang tersedia di halaman utama website.
- Data yang dikirimkan melalui formulir akan disimpan di database MySQL dan bisa dilihat di phpMyAdmin.

## Kendala yang Dihadapi

- Terjadi beberapa kendala dalam konfigurasi koneksi database dan pengaturan file PHP.
- Tabel harus ada terlebih dahulu di database sebelum data dapat disimpan.

## Link GitHub

Silakan akses repository GitHub proyek ini di https://github.com/BlekCat005/pweb-tugas-mandiri.git.

