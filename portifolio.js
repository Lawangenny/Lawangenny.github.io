
//CLONE DE HEADER DE BACKGROUND

const desiredElement = document.getElementById('nav-bar-list-id'); // elemento alvo
const pixelsAmount = '160'; // Quantidade de pixels a contar do TOP até definir a cor

window.addEventListener('scroll', function() {
    if (window.scrollY > pixelsAmount) {
        desiredElement.classList.add('changeStyle'); // adiciona classe "changeColor"
    } else {
      desiredElement.classList.remove('changeStyle'); // remove classe "changeColor"
    }
});



