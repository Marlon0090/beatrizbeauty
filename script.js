
/* ==================================
   CONFIGURAÇÕES DA BEATRIZ
================================== */

// Coloque o telefone com DDD e código do Brasil.
// Exemplo: 5515999999999
const WHATSAPP_NUMBER = "5515991354995";

// Informe o endereço real do estúdio.
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Rua+Coronel+Jos%C3%A9+Loureiro,+64+-+Centro,+Sorocaba+-+SP,+18035-210/@-23.5035478,-47.462255,17z/data=!3m1!4b1!4m6!3m5!1s0x94c58abd966cfa71:0xb467eb3b34c4eadd!8m2!3d-23.5035478!4d-47.462255!16s%2Fg%2F11c43yfw4r?entry=ttu&g_ep=EgoyMDI2MTEyMy4wIKXMDSoASAFQAw%3D%3D";

// Mensagem automática do WhatsApp
const MESSAGE = "Olá! Gostaria de agendar um horário.";


/* ==================================
   LINKS AUTOMÁTICOS
================================== */

const whatsappURL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;

document.querySelectorAll(".whatsapp-link").forEach(link => {
  link.href = whatsappURL;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

document.querySelectorAll(".location-link").forEach(link => {
  link.href = GOOGLE_MAPS_URL;
});


/* ==================================
   ANIMAÇÃO DE ENTRADA
================================== */

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll(".reveal").forEach(element => {
  observer.observe(element);
});


/* ==================================
   EFEITO RIPPLE NOS BOTÕES
================================== */

document.querySelectorAll(".link-button, .cta-button").forEach(button => {
  button.addEventListener("click", function(event) {
    const rect = this.getBoundingClientRect();

    const ripple = document.createElement("span");

    ripple.classList.add("ripple");

    const size = Math.max(rect.width, rect.height);

    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;

    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;

    this.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
});


/* ==================================
   ANO AUTOMÁTICO NO RODAPÉ
================================== */

document.getElementById("year").textContent =
  new Date().getFullYear();


/* ==================================
   ÍCONES LUCIDE
================================== */

window.addEventListener("load", () => {
  if (window.lucide) {
    lucide.createIcons();
  }
});
