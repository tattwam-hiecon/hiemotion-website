document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('nav.links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }

  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const note = document.querySelector('.form-note');
      if (note) {
        note.textContent = 'Thank you. Our team will get back to you shortly.';
        note.style.color = '#1c5fd6';
      }
      form.reset();
    });
  }

  document.querySelectorAll('nav.links a').forEach(a => {
    if (a.getAttribute('href') === location.pathname.split('/').pop() ||
        (location.pathname.endsWith('/') && a.getAttribute('href') === 'index.html')) {
      a.classList.add('active');
    }
  });
});
