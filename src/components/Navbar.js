import logo from '../assets/logo-black.png';

document.addEventListener('DOMContentLoaded', () => {
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
});

export default function Navbar() {
  return `
   <nav class="sticky top-0 z-50 bg-white shadow-md border-t border-gray-200">
      <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        <div class="flex items-center gap-2">
          <img
            src="${logo}"
            alt="logo"
            class="h-10 w-40 object-contain"
          />
        </div>

        <button
          id="menu-toggle"
          class="md:hidden focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <ul
          id="menu"
          class="hidden md:flex flex-col md:flex-row md:items-center md:gap-6 text-sm md:text-base absolute md:static top-full left-0 w-full md:w-auto bg-black md:bg-transparent border-t md:border-none text-white md:text-black"
        >
          <li>
            <a href="#quienes-somos" class="block px-4 py-2 nav-link">Nosotros</a>
          </li>
          <li>
            <a href="#precios" class="block px-4 py-2 nav-link">Servicios</a>
          </li>
          <li>
            <a href="#contacto" class="block px-4 py-2 nav-link">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  `;
}
