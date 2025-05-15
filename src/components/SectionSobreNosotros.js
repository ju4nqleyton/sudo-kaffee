import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';

export default function SectionSobreNosotros() {
  return `
    <section id="quienes-somos" class="w-full px-4 py-16 bg-white">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        <div>
          <h2 class="text-5xl font-bold text-gray-900 mb-8">¿qué hace sudo kaffee?</h2>
          <p class="text-gray-700 text-base leading-relaxed mb-4 mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lobortis augue sed enim finibus semper. Sed vehicula ligula dolor, in rhoncus justo consectetur quis. In tincidunt augue quis lobortis faucibus. Nulla vitae augue ullamcorper, vestibulum erat ut, euismod nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer tellus urna, commodo non porta ac, luctus eget dui. Proin eros lectus, pharetra eu tortor dictum, ultricies tempor ipsum. 
          </p>
          <p class="text-gray-700 text-base leading-relaxed">
            Vivamus efficitur nisi vel dui aliquet, sit amet eleifend erat tincidunt. Phasellus porta placerat semper. Ut imperdiet, velit eu iaculis ornare, neque erat fringilla ligula, vitae luctus ex ante semper mauris. Aenean dapibus sit amet purus non accumsan. In posuere diam sed justo pulvinar, a lobortis tellus dapibus. Quisque ultricies lorem sed purus egestas, scelerisque sagittis risus consectetur. Suspendisse consequat gravida convallis. Donec eu augue efficitur, gravida justo vel, accumsan ex.
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
