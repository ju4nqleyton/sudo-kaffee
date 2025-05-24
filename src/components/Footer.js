export default function Footer() {
  return `
    <footer class="bg-black text-white py-8 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <p class="text-sm">
          Sitio web desarrollado por 
          <a 
            href="https://ju4nqleyton.github.io/portfolio" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="text-yellow-400 hover:text-yellow-300 transition-colors duration-300 font-semibold"
          >
            Juan Quintero
          </a>
          | Todos los derechos reservados &copy; ${new Date().getFullYear()}.
        </p>
      </div>
    </footer>
  `;
}
