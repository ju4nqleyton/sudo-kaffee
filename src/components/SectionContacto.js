export default function SectionContacto() {
  return `
    <section id="contacto" class="min-h-screen pt-24 px-4 bg-gray-50">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-5xl font-bold text-gray-900 mb-8">¿quieres contactarnos?</h2>
        <p class="text-gray-600 mb-12">En <span class="font-bold text-yellow-700">sudo kaffee</span> estamos listos para ayudarte a recuperar el rendimiento de tu computador. Si necesitas una instalación limpia de <span class="font-bold text-yellow-700">Linux</span>, mantenimiento o mejoras de hardware, no dudes en escribirnos. <span class="font-bold text-yellow-700">Contáctanos</span> y recibe <span class="font-bold text-yellow-700">asesoría</span> personalizada.</p>
        
        <form id="contact-form" class="bg-white p-6 rounded-lg shadow-lg space-y-6">
          
          <div>
            <label for="name" class="block text-left text-gray-700 font-medium mb-2">Nombre</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" 
              placeholder="Tu nombre" 
              required
            />
          </div>

          <div>
            <label for="email" class="block text-left text-gray-700 font-medium mb-2">Correo Electrónico</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" 
              placeholder="Tu correo electrónico" 
              required
            />
          </div>

          <div>
            <label for="message" class="block text-left text-gray-700 font-medium mb-2">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Escribe tu mensaje aquí"
              required
            ></textarea>
          </div> 

          <div id="spinner" class="flex justify-center" style="display:none;">
            <span class="loader border-4 border-yellow-400 border-t-transparent rounded-full w-6 h-6 animate-spin"></span>
            <span class="ml-2 text-gray-700">enviando...</span>
          </div>

          <button 
            type="submit" 
            class="w-full bg-yellow-400 text-black font-semibold py-2 rounded-lg hover:bg-yellow-300 transition-colors duration-300"
          >
            enviar
          </button>
        </form>
      </div>

    </section>
  `;
}
