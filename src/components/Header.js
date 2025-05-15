export default function Header() {
  return `
    <header class="relative h-screen bg-black text-white overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 animate-pulse opacity-10"></div>
      <div class="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 class="text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-tight">
          sudo kaffee
        </h1>
        <p class="mt-4 max-w-2xl text-sm md:text-lg lg:text-xl text-gray-300">
          Somos expertos en computadores. Revivimos equipos antiguos con Linux, actualizamos su hardware y te asesoramos para que rinda al máximo.
        </p>
        <a 
          href="#quienes-somos" 
          class="mt-8 inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-300 transition-colors duration-300"
        >
          conócenos
        </a>
      </div>
    </header>
  `;
}
