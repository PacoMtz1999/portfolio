/* =========================================================
   PORTFOLIO — script.js
   JavaScript vanilla: menú móvil, año dinámico y animaciones
   sutiles al hacer scroll (IntersectionObserver).
   ========================================================= */

(function () {
  'use strict';

  /* ---------- Año dinámico en el footer ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---------- Menú de navegación móvil ---------- */
  var navToggle = document.getElementById('navToggle');
  var navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      var isOpen = navMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    });

    // Cerrar el menú al seleccionar un enlace (mejor UX en móvil)
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Abrir menú');
      });
    });
  }

  /* ---------- Resaltado del enlace activo según la sección visible ---------- */
  var sections = document.querySelectorAll('main section[id]');
  var navLinks = document.querySelectorAll('.nav-menu a');

  function setActiveLink(id) {
    navLinks.forEach(function (link) {
      var match = link.getAttribute('href') === '#' + id;
      link.style.color = match ? 'var(--text)' : '';
    });
  }

  if ('IntersectionObserver' in window && sections.length) {
    var navObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach(function (section) { navObserver.observe(section); });
  }

  /* ---------- Animaciones sutiles al hacer scroll ---------- */
  var revealTargets = document.querySelectorAll(
    '.about-grid, .skills-grid .skill-category, .timeline-item, ' +
    '.projects-grid .project-card, .services-grid .service-card, ' +
    '.education-list .education-card, .contact-card'
  );

  revealTargets.forEach(function (el) { el.classList.add('reveal'); });

  if ('IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry, index) {
          if (entry.isIntersecting) {
            // Pequeño escalonado para las cuadrículas de tarjetas
            var delay = (index % 4) * 60;
            setTimeout(function () {
              entry.target.classList.add('is-visible');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    revealTargets.forEach(function (el) { revealObserver.observe(el); });
  } else {
    // Fallback: si no hay soporte, mostrar todo directamente
    revealTargets.forEach(function (el) { el.classList.add('is-visible'); });
  }

})();
