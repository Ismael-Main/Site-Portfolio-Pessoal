const botaoMobile = document.querySelector('.botaoMenuMobile');
const menuMobile = document.querySelector('.menuMobile');

botaoMobile.addEventListener('click', ativarMenuMobile);

function ativarMenuMobile() {
  botaoMobile.classList.toggle('ativo');
  menuMobile.classList.toggle('ativo');
}

function fecharMenuMobile() {
  botaoMobile.classList.remove('ativo');
  menuMobile.classList.remove('ativo');
}
export default fecharMenuMobile;
