// ==========================================================================
// LANDIFY — interactions
// ==========================================================================

// ---------- Mobile menu ----------
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    nav.classList.toggle('nav--open');
  });

  nav.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      nav.classList.remove('nav--open');
    });
  });
}

// ---------- Header shadow on scroll ----------
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 12) {
    header.style.boxShadow = '0 8px 24px rgba(15,23,42,0.06)';
  } else {
    header.style.boxShadow = 'none';
  }
});

// ---------- Scroll reveal ----------
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => revealObserver.observe(el));

// ---------- 3D tilt effect on work cards ----------
const tiltCards = document.querySelectorAll('[data-tilt]');

tiltCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateY(0)';
  });
});

// ---------- Contact form -> WhatsApp ----------
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = contactForm.nombre.value.trim();
    const negocio = contactForm.negocio.value.trim();
    const mensaje = contactForm.mensaje.value.trim();

    const text = `Hola, soy ${nombre}. Tengo un negocio de ${negocio} y me interesa una landing page. ${mensaje}`;
    const url = `https://wa.me/524464773601?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener');
  });
}
