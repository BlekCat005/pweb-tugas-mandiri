$(document).ready(function () {
  $("#contact-form").on("submit", function (e) {
    e.preventDefault();

    const nama = $("#nama").val().trim();
    const email = $("#email").val().trim();
    const hp = $("#hp").val().trim();
    const pesan = $("#pesan").val().trim();
    const alertBox = $("#form-alert");
    let errorMessage = "";

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

    if (errorMessage) {
      alertBox.css("color", "red").text(errorMessage);
    } else {
      alertBox.css("color", "green").text("Formulir berhasil dikirim!");

      $("#contact-form")[0].reset();
    }
  });
});
