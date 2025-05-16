import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

const URL_API_POST_CONTACTS = 'http://localhost:3000/contacts/';

export function scrollspy() {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });

    document.querySelectorAll('#menu a').forEach((link) =>
      link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
          menu.classList.add('hidden');
        }
      })
    );
  }

  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  if (sections.length && navLinks.length) {
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 130;
        if (scrollY >= sectionTop) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove('text-yellow-500', 'font-bold');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('text-yellow-500', 'font-bold');
        }
      });
    });
  }
}

export function contactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim().toUpperCase();
    const email = document.getElementById('email').value.trim().toLowerCase();

    try {
      const res = await fetch(URL_API_POST_CONTACTS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      if (!res.ok) throw new Error(error);

      Toastify({
        text: 'Datos enviado correctamente',
        duration: 5000,
        gravity: 'bottom',
        position: 'right',
        backgroundColor: '#FACC15',
        style: {
          color: 'black',
        },
        stopOnFocus: true,
      }).showToast();

      form.reset();
    } catch (error) {
      Toastify({
        text: 'Ocurrió un error al enviar',
        duration: 5000,
        gravity: 'bottom',
        position: 'right',
        backgroundColor: '#EF4444',
        stopOnFocus: true,
      }).showToast();

      console.error(error);
    }
  });
}
