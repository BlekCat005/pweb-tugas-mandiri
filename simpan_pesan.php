<?php
// Konfigurasi database
$host = "localhost";
$user = "root";       // Sesuaikan dengan username MySQL kamu
$pass = "";           // Sesuaikan dengan password MySQL kamu
$db = "portfolio_db"; // Sesuaikan dengan nama database yang kamu buat
$port = 3307;

// Membuat koneksi
$conn = new mysqli($host, $user, $pass, $db, $port);

// Cek koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
} else {
    echo "Koneksi berhasil!";
}

// Ambil data dari form
$nama = $_POST['nama'];
$email = $_POST['email'];
$hp = $_POST['hp'];
$pesan = $_POST['pesan'];

// Validasi data
if (empty($nama) || empty($email) || empty($hp) || empty($pesan)) {
    echo "Semua kolom harus diisi!";
    exit();
}

// Simpan data ke database
$sql = "INSERT INTO kontak (nama, email, hp, pesan) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssss", $nama, $email, $hp, $pesan);

if ($stmt->execute()) {
    echo "Berhasil";
} else {
    echo "Gagal menyimpan data: " . $conn->error;
}

$stmt->close();
$conn->close();
?>
