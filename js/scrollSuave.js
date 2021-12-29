import fecharMenuMobile from './menuMobile.js';

//função principal

const menuItens = document.querySelectorAll('.menu a[href^="#"]');
const menuItensMobile = document.querySelectorAll('.menuMobile a[href^="#"]');
function scrollToId(event) {
  event.preventDefault();
  const elemento = event.currentTarget; //pega o link do menu em que estamos clicando
  const id = elemento.getAttribute('href'); //pega o atributo 'href' desse elemento
  const sectionDestino = document.querySelector(id).offsetTop; //busca a section onde o id é igual o href do link do menu que foi clicado e checa a distancia do scroll até ele

  window.scrollTo(smoothScrollTo(0, sectionDestino, 1300));
  fecharMenuMobile();
}

menuItens.forEach((item) => {
  item.addEventListener('click', scrollToId);
});
menuItensMobile.forEach((item) => {
  item.addEventListener('click', scrollToId);
});

//função para ter compatibilidade browsers antigos

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
}
