import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

function createCard(title, price, idModal, img) {
  return `
    <div class="group bg-white p-0 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center border border-gray-100 hover:border-yellow-400 cursor-pointer overflow-hidden">
      <div class="relative w-full">
        <img 
          src="${img}" 
          alt="${title}" 
          class="w-full h-48 object-cover sm:h-56 md:h-64 transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <span class="absolute top-3 right-3 bg-yellow-400 text-black font-bold px-3 py-1 rounded-full shadow text-sm group-hover:bg-yellow-500 transition">${price}</span>
      </div>
      <div class="flex-1 flex flex-col justify-between w-full px-6 py-6">
        <h3 class="text-2xl font-bold text-gray-800 mb-2 w-full group-hover:text-yellow-600 transition">${title}</h3>
        
        <button 
          onclick="document.getElementById('${idModal}').classList.remove('hidden')" 
          class="mt-4 px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-500 transition w-full shadow group-hover:scale-105"
        >
          Ver más
        </button>
      </div>
    </div>
  `;
}

function createModal(id, title, text, price) {
  return `
    <div id="${id}" class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 hidden">
      <div class="bg-white p-8 rounded-2xl max-w-md w-full relative shadow-2xl animate-modal-pop">
        <button 
          onclick="document.getElementById('${id}').classList.add('hidden')" 
          class="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-3xl font-bold transition"
          aria-label="Cerrar"
        >
          &times;
        </button>
        <h3 class="text-3xl font-extrabold text-yellow-600 mb-4">${title}</h3>
        <p class="text-gray-700 mb-6 text-base">${text}</p>
        <div class="flex items-center justify-between">
          <span class="bg-yellow-400 text-black font-bold px-4 py-2 rounded-full shadow text-lg">${
            price ? '$' + price : ''
          }</span>
          <button 
            onclick="document.getElementById('${id}').classList.add('hidden')" 
            class="ml-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-yellow-400 hover:text-black font-semibold transition"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
   `;
}

export default function SectionServicios() {
  return `
    <section id="servicios" class="w-full px-4 py-16 bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
      <div class="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 class="text-5xl font-extrabold text-gray-900 mb-12 drop-shadow">¿qué ofrecemos?</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          ${createCard(
            'Instalación de Linux desde cero',
            '$30k',
            'servicio1',
            img1
          )}
          ${createCard(
            'Linux + Mantenimiento Interno',
            '$60k',
            'servicio2',
            img2
          )}
          ${createCard(
            'Linux + Mantenimiento + Mejora de Hardware',
            '$90k',
            'servicio3',
            img3
          )}
        </div>
      </div>
      ${createModal(
        'servicio1',
        'Instalación de Linux desde cero',
        'Optimizamos tu equipo instalando una distribución de Linux liviana, segura y rápida. Ideal para revitalizar computadores lentos o antiguos, sin sacrificar funcionalidad.',
        '30k'
      )}
      ${createModal(
        'servicio2',
        'Linux + Mantenimiento Interno',
        'Incluye instalación limpia de Linux, cambio de pasta térmica y revisión básica de ventiladores. Mejora notable del rendimiento térmico y estabilidad general del equipo.',
        '60k'
      )}
      ${createModal(
        'servicio3',
        'Linux + Mantenimiento + Mejora de Hardware',
        'Servicio completo: instalación de Linux, mantenimiento interno y asesoría + instalación de mejoras en hardware (SSD, RAM u otros). El valor del hardware lo asume el cliente, nosotros nos encargamos de todo lo demás.',
        '90k'
      )}
    </section>
  `;
}
