document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.getElementById("navbar");
  let prevScrollPos = window.scrollY;

  function handleScroll() {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos && currentScrollPos > 50) {
      navbar.style.transform = "translateY(-100%)";
    } else {
      navbar.style.transform = "translateY(0)";
    }

    prevScrollPos = currentScrollPos;
  }

  window.addEventListener("scroll", handleScroll);

  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
  });

  window.addEventListener("click", function (e) {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
      hamburger.classList.remove("hamburger-active");
      navMenu.classList.add("hidden");
    }
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      hamburger.classList.remove("hamburger-active");
      navMenu.classList.add("hidden");

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  const portfolioData = [
    {
      id: 1,
      title: "E-Commerce Website",
      image: "https://placehold.co/600x300",
      description:
        "Platform belanja online modern dengan fitur pembayaran terintegrasi dan manajemen inventaris real-time.",
    },
    {
      id: 2,
      title: "Aplikasi Dashboard",
      image: "https://placehold.co/600x300",
      description:
        "Dashboard analitik yang menampilkan data bisnis penting dengan visualisasi interaktif dan laporan otomatis.",
    },
    {
      id: 3,
      title: "Portfolio Fotografi",
      image: "https://placehold.co/600x300",
      description:
        "Website portfolio responsif untuk fotografer profesional dengan galeri yang elegan dan sistem pemesanan.",
    },
    {
      id: 4,
      title: "Aplikasi Manajemen Tugas",
      image: "https://placehold.co/600x300",
      description:
        "Aplikasi produktivitas untuk mengelola tugas dan proyek dengan fitur kolaborasi tim dan pengingat.",
    },
  ];

  const portfolioContainer = document.getElementById("portfolio-container");

  portfolioData.forEach((portfolio) => {
    const portfolioCard = document.createElement("div");
    portfolioCard.className = "portfolio-card";

    portfolioCard.innerHTML = `
        <div class="card-inner">
          <img
            src="${portfolio.image}"
            alt="${portfolio.title}"
            class="card-image"
          />
          <div class="card-content">
            <h3 class="card-title">
              ${portfolio.title} Muhamad Rizki
            </h3>
            <p class="card-description">
              ${portfolio.description}
            </p>
          </div>
        </div>
      `;

    portfolioContainer.appendChild(portfolioCard);
  });

  const clientsData = [
    {
      id: 1,
      src: "https://upload.wikimedia.org/wikipedia/commons/1/18/Gojek_logo_2022.svg",
    },
    {
      id: 2,
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Grab_Logo.svg/2560px-Grab_Logo.svg.png",
    },
    {
      id: 3,
      src: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Toped_2018-05.png",
    },
  ];

  const clientsContainer = document.getElementById("clients-container");

  clientsData.forEach((client) => {
    const clientElement = document.createElement("a");
    clientElement.href = client.href || "#";
    clientElement.className = "client-logo";

    const img = document.createElement("img");
    img.src = client.src;
    img.alt = `Client ${client.id}`;

    clientElement.appendChild(img);
    clientsContainer.appendChild(clientElement);
  });

  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      console.log("Form submitted:", { name, email, message });

      contactForm.reset();

      alert("Pesan berhasil dikirim! Terima kasih telah menghubungi saya.");
    });
  }
});
