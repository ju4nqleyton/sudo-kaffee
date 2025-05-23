import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';

function createCard(title, price, idModal, img) {
  return `
    <div class="bg-gray-100 p-6 rounded-lg shadow hover:shadow-xl transition duration-300 text-left flex flex-col items-center">
      <img 
        src="${img}" 
        alt="${title}" 
        class="w-full h-48 object-cover rounded-md mb-4 sm:h-56 md:h-64"
        loading="lazy"
      />
      <h3 class="text-xl font-semibold text-gray-800 mb-2 w-full">${title}</h3>
      <p class="text-lg font-bold text-gray-900 mb-4 w-full">${price}</p>
      <button 
        onclick="document.getElementById('${idModal}').classList.remove('hidden')" 
        class="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-300 transition w-full"
      >
        Ver más
      </button>
    </div>
  `;
}

function createModal(id, text) {
  return `
    <div id="${id}" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 hidden">
      <div class="bg-white p-6 rounded-lg max-w-md w-full relative">
        <button 
          onclick="document.getElementById('${id}').classList.add('hidden')" 
          class="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
        >
          &times;
        </button>
        <h3 class="text-2xl font-semibold text-gray-800 mb-4">Detalles del servicio</h3>
        <p class="text-gray-600">${text}</p>
      </div>
    </div>
  `;
}

export default function SectionServicios() {
  return `
    <section id="servicios" class="w-full px-4 py-16 bg-white">
      <div class="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 class="text-5xl font-bold text-gray-900 mb-12">¿qué ofrecemos?</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          ${createCard('Servicio 1', '$50k', 'servicio1', img1)}
          ${createCard('Servicio 2', '$75k', 'servicio2', img2)}
          ${createCard('Servicio 3', '$100k', 'servicio3', img3)}
        </div>
      </div>

      ${createModal(
        'servicio1',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
      )}
      ${createModal(
        'servicio2',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
      )}
      ${createModal(
        'servicio3',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
      )}
    </section>
  `;
}
