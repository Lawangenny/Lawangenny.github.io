
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


//HOVER BUTTON CURSOS
var buttonGarotas = document.getElementById("action-btn-G");
var buttonCisco = document.getElementById("action-btn-C");
var buttonJovens = document.getElementById("action-btn-J");

var containerG = document.getElementById("container-G");
var containerC = document.getElementById("container-C");
var containerJ = document.getElementById("container-J");

buttonGarotas.addEventListener("click", function(){

    containerG.classList.toggle("mostra-caixa-garotas");
    containerG.classList.toggle("esconde");

});

buttonCisco.addEventListener("click", function(){

    containerC.classList.toggle("mostra-caixa-cisco");

});

buttonJovens.addEventListener("click", function(){

    containerJ.classList.toggle("mostra-caixa-jovens");

});


//EMBRULHO BUTTON SKILLS
var buttonA = document.getElementById("action-btn-a");
var buttonB = document.getElementById("action-btn-b");

var containerB = document.getElementById("container-b");
var containerA = document.getElementById("container-a");


buttonB.addEventListener("click", function(){

    containerA.classList.remove("mostraA");
    containerB.classList.toggle("mostraB");

});


buttonA.addEventListener("click", function(){

    containerB.classList.remove("mostraB");
    containerA.classList.toggle("mostraA");

});



