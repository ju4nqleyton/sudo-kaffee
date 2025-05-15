import './style.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import SectionSobreNosotros from './components/SectionSobreNosotros';
import SectionServicios from './components/SectionServicios';
import SectionContacto from './components/SectionContacto';

document.querySelector('#app').innerHTML = `
  ${Header()}
  ${Navbar()}
  ${SectionSobreNosotros()}
  ${SectionServicios()}
  ${SectionContacto()}
`;
