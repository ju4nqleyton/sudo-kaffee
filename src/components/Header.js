export default function Header() {
  return `
    <header id="inicio" class="relative h-screen bg-black text-white overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 animate-pulse opacity-10"></div>
      <div class="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 class="text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-tight">
          sudo kaffee
        </h1>
        <p class="mt-4 max-w-2xl text-sm md:text-lg lg:text-xl text-gray-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod vulputate lorem, fermentum efficitur sapien fermentum eget. Proin fringilla erat.
        </p>
        <a 
          href="#nosotros" 
          class="mt-8 inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-300 transition-colors duration-300"
        >
          conócenos
        </a>
      </div>
    </header>
  `;
}
