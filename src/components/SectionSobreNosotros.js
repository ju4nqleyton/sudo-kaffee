import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';

export default function SectionSobreNosotros() {
  return `
    <section id="nosotros" class="w-full px-4 py-16 bg-white">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        <div>
          <h2 class="text-5xl font-bold text-gray-900 mb-8">¿qué hace sudo kaffee?</h2>
          <p class="text-gray-700 text-base leading-relaxed mb-4 mt-6">
            En sudo kaffee somos un emprendimiento local con base en la ciudad de 
            <span class="font-bold text-lg text-yellow-700">Ibagué</span>. Nuestro propósito es claro: brindar soluciones reales a los problemas tecnológicos de las personas. Nos especializamos en revivir computadores antiguos o lentos mediante la implementación de sistemas 
            <span class="font-bold text-lg text-yellow-700">Linux</span> ligeros, seguros y eficientes. 
          </p>
          <p class="text-gray-700 text-base leading-relaxed">
            Creemos firmemente que la <span class="font-bold text-yellow-700">obsolescencia</span> no debe ser el destino de tu equipo. Cada máquina tiene potencial, y nosotros nos encargamos de devolverle la vida. Nos enorgullece ofrecer un servicio rápido, honesto y personalizado, convirtiéndonos en una de las mejores opciones de la ciudad.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <img src="${img1}" alt="img1" class="w-full h-auto rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
          <img src="${img2}" alt="img2" class="w-full h-auto rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
          <img src="${img3}" alt="img3" class="w-full h-auto rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
          <img src="${img4}" alt="img4" class="w-full h-auto rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
        </div>
      </div>
    </section>
  `;
}
