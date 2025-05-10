$(document).ready(function () {
  $("#contact-form").on("submit", function (e) {
    e.preventDefault(); // Menghentikan pengiriman form secara default

    // Ambil nilai dari form
    const nama = $("#nama").val().trim();
    const email = $("#email").val().trim();
    const hp = $("#hp").val().trim();
    const pesan = $("#pesan").val().trim();
    const alertBox = $("#form-alert");
    let errorMessage = "";

    // Validasi input
    if (!nama || !email || !hp || !pesan) {
      errorMessage = "Semua kolom harus diisi!";
    } else if (nama.length > 50) {
      errorMessage = "Nama maksimal 50 karakter!";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errorMessage = "Format email tidak valid!";
    } else if (!/^[0-9]{10,13}$/.test(hp)) {
      errorMessage = "Nomor HP harus 10-13 digit angka!";
    } else if (pesan.length > 300) {
      errorMessage = "Pesan maksimal 300 karakter!";
    }

    // Tampilkan error jika ada
    if (errorMessage) {
      alertBox.css("color", "red").text(errorMessage);
    } else {
      // Kirim data dengan AJAX
      $.ajax({
        type: "POST",
        url: "simpan_pesan.php", // PHP file untuk menyimpan data
        data: {
          nama: nama,
          email: email,
          hp: hp,
          pesan: pesan,
        },
        success: function (response) {
          if (response.trim() === "Berhasil") {
            alertBox.css("color", "green").text("Pesan berhasil dikirim!");
            $("#contact-form")[0].reset(); // Reset form jika berhasil
          } else {
            alertBox.css("color", "red").text("Terjadi kesalahan: " + response);
          }
        },
        error: function () {
          alertBox
            .css("color", "red")
            .text("Gagal mengirim pesan. Coba lagi nanti.");
        },
      });
    }
  });
});
