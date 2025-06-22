(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const e of a.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&n(e)}).observe(document,{childList:!0,subtree:!0});function o(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=o(i);fetch(i.href,a)}})();function M(){return`
    <header id="inicio" class="relative h-screen bg-black text-white overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 animate-pulse opacity-10"></div>
      <div class="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 class="text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-tight">
          sudo kaffee
        </h1>
        <p class="mt-4 max-w-2xl text-sm md:text-lg lg:text-xl text-gray-300">
          Especialistas en revivir tu computadora con <span class="font-bold text-white">Linux</span>. Somos la <span class="font-bold text-white">solución</span> para quienes buscan <span class="font-bold text-white">velocidad</span>, eficiencia y libertad tecnológica.
        </p>
        <a 
          href="#nosotros" 
          class="mt-8 inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg shadow hover:bg-yellow-300 transition-colors duration-300"
        >
          conócenos
        </a>
      </div>
    </header>
  `}const q="/assets/logo-black-Dqj9PzVJ.png";function F(){return`
   <nav class="sticky top-0 z-50 bg-white shadow-md border-t border-gray-200">
      <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        <div class="flex items-center gap-2">
          <a href="#inicio">
            <img
              src="${q}"
              alt="logo"
              class="h-10 w-40 object-contain"
            />
          </a>
        </div>

        <button
          id="menu-toggle"
          class="md:hidden focus:outline-none focus:ring-2 focus:ring-yellow-400"
        >
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <ul
          id="menu"
          class="hidden md:flex flex-col md:flex-row md:items-center md:gap-6 text-sm md:text-base absolute md:static top-full left-0 w-full md:w-auto bg-black md:bg-transparent border-t md:border-none text-white md:text-black"
        >
          <li>
            <a href="#nosotros" class="block px-4 py-2 nav-link">Nosotros</a>
          </li>
          <li>
            <a href="#servicios" class="block px-4 py-2 nav-link">Servicios</a>
          </li>
          <li>
            <a href="#contacto" class="block px-4 py-2 nav-link">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  `}const R="/assets/img1-DtVnyW9o.jpg",H="/assets/img2-02VVqL_q.jpg",I="/assets/img3-B3hl0LwO.jpg",V="/assets/img4-CBSPHMeL.jpg";function B(){return`
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
          <img src="${R}" alt="img1" class="w-full h-auto rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
          <img src="${H}" alt="img2" class="w-full h-auto rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
          <img src="${I}" alt="img3" class="w-full h-auto rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
          <img src="${V}" alt="img4" class="w-full h-auto rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
        </div>
      </div>
    </section>
  `}const _="/assets/img5-DCKorlYd.jpg",A="/assets/img6-0Rb20Rzv.jpg",D="/assets/img7-lcBJLSaQ.jpg";function v(t,s,o,n){return`
    <div class="group bg-white p-0 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center border border-gray-100 hover:border-yellow-400 cursor-pointer overflow-hidden">
      <div class="relative w-full">
        <img 
          src="${n}" 
          alt="${t}" 
          class="w-full h-48 object-cover sm:h-56 md:h-64 transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <span class="absolute top-3 right-3 bg-yellow-400 text-black font-bold px-3 py-1 rounded-full shadow text-sm group-hover:bg-yellow-500 transition">${s}</span>
      </div>
      <div class="flex-1 flex flex-col justify-between w-full px-6 py-6">
        <h3 class="text-2xl font-bold text-gray-800 mb-2 w-full group-hover:text-yellow-600 transition">${t}</h3>
        
        <button 
          onclick="document.getElementById('${o}').classList.remove('hidden')" 
          class="mt-4 px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-500 transition w-full shadow group-hover:scale-105"
        >
          Ver más
        </button>
      </div>
    </div>
  `}function w(t,s,o,n){return`
    <div id="${t}" class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 hidden">
      <div class="bg-white p-8 rounded-2xl max-w-md w-full relative shadow-2xl animate-modal-pop">
        <button 
          onclick="document.getElementById('${t}').classList.add('hidden')" 
          class="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-3xl font-bold transition"
          aria-label="Cerrar"
        >
          &times;
        </button>
        <h3 class="text-3xl font-extrabold text-yellow-600 mb-4">${s}</h3>
        <p class="text-gray-700 mb-6 text-base">${o}</p>
        <div class="flex items-center justify-between">
          <span class="bg-yellow-400 text-black font-bold px-4 py-2 rounded-full shadow text-lg">${n?"$"+n:""}</span>
          <button 
            onclick="document.getElementById('${t}').classList.add('hidden')" 
            class="ml-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-yellow-400 hover:text-black font-semibold transition"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
   `}function z(){return`
    <section id="servicios" class="w-full px-4 py-16 bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
      <div class="max-w-7xl mx-auto flex flex-col items-center text-center">
        <h2 class="text-5xl font-extrabold text-gray-900 mb-12 drop-shadow">¿qué ofrecemos?</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          ${v("Instalación de Linux desde cero","$35k","servicio1",_)}
          ${v("Linux + Mantenimiento Interno","$70k","servicio2",A)}
          ${v("Linux + Mantenimiento + Mejora de Hardware","$100k","servicio3",D)}
        </div>
      </div>
      ${w("servicio1","Instalación de Linux desde cero","Optimizamos tu equipo instalando una distribución de Linux liviana, segura y rápida. Ideal para revitalizar computadores lentos o antiguos, sin sacrificar funcionalidad.","30k")}
      ${w("servicio2","Linux + Mantenimiento Interno","Incluye instalación limpia de Linux, cambio de pasta térmica y revisión básica de ventiladores. Mejora notable del rendimiento térmico y estabilidad general del equipo.","60k")}
      ${w("servicio3","Linux + Mantenimiento + Mejora de Hardware","Servicio completo: instalación de Linux, mantenimiento interno y asesoría + instalación de mejoras en hardware (SSD, RAM u otros). El valor del hardware lo asume el cliente, nosotros nos encargamos de todo lo demás.","90k")}
    </section>
  `}function W(){return`
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
  `}function K(){return`
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
  `}class b{constructor(s=0,o="Network Error"){this.status=s,this.text=o}}const J=()=>{if(!(typeof localStorage>"u"))return{get:t=>Promise.resolve(localStorage.getItem(t)),set:(t,s)=>Promise.resolve(localStorage.setItem(t,s)),remove:t=>Promise.resolve(localStorage.removeItem(t))}},u={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:J()},x=t=>t?typeof t=="string"?{publicKey:t}:t.toString()==="[object Object]"?t:{}:{},Y=(t,s="https://api.emailjs.com")=>{if(!t)return;const o=x(t);u.publicKey=o.publicKey,u.blockHeadless=o.blockHeadless,u.storageProvider=o.storageProvider,u.blockList=o.blockList,u.limitRate=o.limitRate,u.origin=o.origin||s},E=async(t,s,o={})=>{const n=await fetch(u.origin+t,{method:"POST",headers:o,body:s}),i=await n.text(),a=new b(n.status,i);if(n.ok)return a;throw a},T=(t,s,o)=>{if(!t||typeof t!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!s||typeof s!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!o||typeof o!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},U=t=>{if(t&&t.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},j=t=>t.webdriver||!t.languages||t.languages.length===0,C=()=>new b(451,"Unavailable For Headless Browser"),Q=(t,s)=>{if(!Array.isArray(t))throw"The BlockList list has to be an array";if(typeof s!="string")throw"The BlockList watchVariable has to be a string"},G=t=>{var s;return!((s=t.list)!=null&&s.length)||!t.watchVariable},Z=(t,s)=>t instanceof FormData?t.get(s):t[s],N=(t,s)=>{if(G(t))return!1;Q(t.list,t.watchVariable);const o=Z(s,t.watchVariable);return typeof o!="string"?!1:t.list.includes(o)},O=()=>new b(403,"Forbidden"),X=(t,s)=>{if(typeof t!="number"||t<0)throw"The LimitRate throttle has to be a positive number";if(s&&typeof s!="string")throw"The LimitRate ID has to be a non-empty string"},ee=async(t,s,o)=>{const n=Number(await o.get(t)||0);return s-Date.now()+n},S=async(t,s,o)=>{if(!s.throttle||!o)return!1;X(s.throttle,s.id);const n=s.id||t;return await ee(n,s.throttle,o)>0?!0:(await o.set(n,Date.now().toString()),!1)},P=()=>new b(429,"Too Many Requests"),te=async(t,s,o,n)=>{const i=x(n),a=i.publicKey||u.publicKey,e=i.blockHeadless||u.blockHeadless,l=i.storageProvider||u.storageProvider,f={...u.blockList,...i.blockList},c={...u.limitRate,...i.limitRate};return e&&j(navigator)?Promise.reject(C()):(T(a,t,s),U(o),o&&N(f,o)?Promise.reject(O()):await S(location.pathname,c,l)?Promise.reject(P()):E("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:a,service_id:t,template_id:s,template_params:o}),{"Content-type":"application/json"}))},oe=t=>{if(!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},se=t=>typeof t=="string"?document.querySelector(t):t,ie=async(t,s,o,n)=>{const i=x(n),a=i.publicKey||u.publicKey,e=i.blockHeadless||u.blockHeadless,l=u.storageProvider||i.storageProvider,f={...u.blockList,...i.blockList},c={...u.limitRate,...i.limitRate};if(e&&j(navigator))return Promise.reject(C());const r=se(o);T(a,t,s),oe(r);const d=new FormData(r);return N(f,d)?Promise.reject(O()):await S(location.pathname,c,l)?Promise.reject(P()):(d.append("lib_version","4.4.1"),d.append("service_id",t),d.append("template_id",s),d.append("user_id",a),E("/api/v1.0/email/send-form",d))},ne={init:Y,send:te,sendForm:ie,EmailJSResponseStatus:b};function ae(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var g={exports:{}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */var re=g.exports,k;function le(){return k||(k=1,function(t){(function(s,o){t.exports?t.exports=o():s.Toastify=o()})(re,function(s){var o=function(e){return new o.lib.init(e)},n="1.12.0";o.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},o.lib=o.prototype={toastify:n,constructor:o,init:function(e){return e||(e={}),this.options={},this.toastElement=null,this.options.text=e.text||o.defaults.text,this.options.node=e.node||o.defaults.node,this.options.duration=e.duration===0?0:e.duration||o.defaults.duration,this.options.selector=e.selector||o.defaults.selector,this.options.callback=e.callback||o.defaults.callback,this.options.destination=e.destination||o.defaults.destination,this.options.newWindow=e.newWindow||o.defaults.newWindow,this.options.close=e.close||o.defaults.close,this.options.gravity=e.gravity==="bottom"?"toastify-bottom":o.defaults.gravity,this.options.positionLeft=e.positionLeft||o.defaults.positionLeft,this.options.position=e.position||o.defaults.position,this.options.backgroundColor=e.backgroundColor||o.defaults.backgroundColor,this.options.avatar=e.avatar||o.defaults.avatar,this.options.className=e.className||o.defaults.className,this.options.stopOnFocus=e.stopOnFocus===void 0?o.defaults.stopOnFocus:e.stopOnFocus,this.options.onClick=e.onClick||o.defaults.onClick,this.options.offset=e.offset||o.defaults.offset,this.options.escapeMarkup=e.escapeMarkup!==void 0?e.escapeMarkup:o.defaults.escapeMarkup,this.options.ariaLive=e.ariaLive||o.defaults.ariaLive,this.options.style=e.style||o.defaults.style,e.backgroundColor&&(this.options.style.background=e.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var e=document.createElement("div");e.className="toastify on "+this.options.className,this.options.position?e.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(e.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):e.className+=" toastify-right",e.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var l in this.options.style)e.style[l]=this.options.style[l];if(this.options.ariaLive&&e.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)e.appendChild(this.options.node);else if(this.options.escapeMarkup?e.innerText=this.options.text:e.innerHTML=this.options.text,this.options.avatar!==""){var f=document.createElement("img");f.src=this.options.avatar,f.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?e.appendChild(f):e.insertAdjacentElement("afterbegin",f)}if(this.options.close===!0){var c=document.createElement("button");c.type="button",c.setAttribute("aria-label","Close"),c.className="toast-close",c.innerHTML="&#10006;",c.addEventListener("click",(function(h){h.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}).bind(this));var r=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&r>360?e.insertAdjacentElement("afterbegin",c):e.appendChild(c)}if(this.options.stopOnFocus&&this.options.duration>0){var d=this;e.addEventListener("mouseover",function(h){window.clearTimeout(e.timeOutValue)}),e.addEventListener("mouseleave",function(){e.timeOutValue=window.setTimeout(function(){d.removeElement(e)},d.options.duration)})}if(typeof this.options.destination<"u"&&e.addEventListener("click",(function(h){h.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}).bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&e.addEventListener("click",(function(h){h.stopPropagation(),this.options.onClick()}).bind(this)),typeof this.options.offset=="object"){var p=i("x",this.options),m=i("y",this.options),y=this.options.position=="left"?p:"-"+p,$=this.options.gravity=="toastify-top"?m:"-"+m;e.style.transform="translate("+y+","+$+")"}return e},showToast:function(){this.toastElement=this.buildToast();var e;if(typeof this.options.selector=="string"?e=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?e=this.options.selector:e=document.body,!e)throw"Root element is not defined";var l=o.defaults.oldestFirst?e.firstChild:e.lastChild;return e.insertBefore(this.toastElement,l),o.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout((function(){this.removeElement(this.toastElement)}).bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(e){e.className=e.className.replace(" on",""),window.setTimeout((function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),e.parentNode&&e.parentNode.removeChild(e),this.options.callback.call(e),o.reposition()}).bind(this),400)}},o.reposition=function(){for(var e={top:15,bottom:15},l={top:15,bottom:15},f={top:15,bottom:15},c=document.getElementsByClassName("toastify"),r,d=0;d<c.length;d++){a(c[d],"toastify-top")===!0?r="toastify-top":r="toastify-bottom";var p=c[d].offsetHeight;r=r.substr(9,r.length-1);var m=15,y=window.innerWidth>0?window.innerWidth:screen.width;y<=360?(c[d].style[r]=f[r]+"px",f[r]+=p+m):a(c[d],"toastify-left")===!0?(c[d].style[r]=e[r]+"px",e[r]+=p+m):(c[d].style[r]=l[r]+"px",l[r]+=p+m)}return this};function i(e,l){return l.offset[e]?isNaN(l.offset[e])?l.offset[e]:l.offset[e]+"px":"0px"}function a(e,l){return!e||typeof l!="string"?!1:!!(e.className&&e.className.trim().split(/\s+/gi).indexOf(l)>-1)}return o.lib.init.prototype=o.lib,o})}(g)),g.exports}var ce=le();const L=ae(ce),de="service_tclv9wb",ue="template_kfbjt9u",fe="oGepLHNgumrcZ8Joy";function pe(){const t=document.getElementById("menu-toggle"),s=document.getElementById("menu");t&&s&&(t.addEventListener("click",()=>{s.classList.toggle("hidden")}),document.querySelectorAll("#menu a").forEach(i=>i.addEventListener("click",()=>{window.innerWidth<768&&s.classList.add("hidden")})));const o=document.querySelectorAll("section"),n=document.querySelectorAll(".nav-link");o.length&&n.length&&window.addEventListener("scroll",()=>{let i="";o.forEach(a=>{const e=a.offsetTop-130;scrollY>=e&&(i=a.getAttribute("id"))}),n.forEach(a=>{a.classList.remove("text-yellow-500","font-bold"),a.getAttribute("href")===`#${i}`&&a.classList.add("text-yellow-500","font-bold")})})}function me(){const t=document.getElementById("contact-form"),s=document.getElementById("spinner");t&&t.addEventListener("submit",async o=>{o.preventDefault(),s&&(s.style.display="block");try{const n=await ne.sendForm(de,ue,t,fe);if(n.status!==200)throw new Error(n.text||"Error al enviar el formulario");L({text:"Datos enviado correctamente",duration:5e3,gravity:"bottom",position:"right",backgroundColor:"#FACC15",style:{color:"black"},stopOnFocus:!0}).showToast(),t.reset()}catch(n){L({text:"Ocurrió un error al enviar",duration:5e3,gravity:"bottom",position:"right",backgroundColor:"#EF4444",stopOnFocus:!0}).showToast(),console.error(n)}finally{s&&(s.style.display="none")}})}document.querySelector("#app").innerHTML=`
  ${M()}
  ${F()}
  ${B()}
  ${z()}
  ${W()}
  ${K()}
`;document.addEventListener("DOMContentLoaded",()=>{pe(),me()});
