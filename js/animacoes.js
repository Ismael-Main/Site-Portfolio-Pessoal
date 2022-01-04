//animação escrever título
function escrever(elemento) {
  const textoArray = elemento.innerText.split('');

  textoArray.forEach((letra, i) => {
    elemento.innerHTML = '';
    setTimeout(() => (elemento.innerHTML += letra), 120 * i);
  });
}

const tag = document.querySelectorAll('#titulos');
const titulo1 = tag[0];
const titulo2 = tag[1];
const titulo3 = tag[2];

function executarInvervalo(elemento, intervalo) {
  setTimeout(() => {
    escrever(elemento);
    elemento.style.color = '#fff';
  }, intervalo);
}
executarInvervalo(titulo1, 700);
executarInvervalo(titulo2, 1500);
executarInvervalo(titulo3, 3000);
