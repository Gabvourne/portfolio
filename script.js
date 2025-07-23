// === MENU BURGER ===
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", function () {
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});

// Fermer le menu après clic sur un lien (mobile)
document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      menu.style.display = "none";
    }
  });
});

// === ANIMATION DE FADE-IN SUR LES SECTIONS ===
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    const top = section.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });
});

// === FORMULAIRE INTERACTIF SIMULÉ ===
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const message = document.getElementById("formMessage");
  message.textContent = "Merci pour votre message ! 😊";
  message.style.color = "green";
  setTimeout(() => {
    message.textContent = "";
    this.reset();
  }, 3000);
});
