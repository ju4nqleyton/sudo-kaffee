import './style.css';

document.querySelector('#app').innerHTML = `
  <div>
    <p class="text-3xl font-bold underline">
      Hello World!
    </p>
  </div>
`;

setupCounter(document.querySelector('#counter'));
