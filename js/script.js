const botaoMobile = document.querySelector('.botaoMenuMobile');
const menuMobile = document.querySelector('.menuMobile');

botaoMobile.addEventListener('click', ativar);

function ativar(event) {
  console.log(event.currentTarget);
  botaoMobile.classList.toggle('ativo');
  menuMobile.classList.toggle('ativo');
}
