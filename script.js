let quantidadecartas = Number (prompt ("digite o numero de cartas que deseja jogar")); 

function carregarjogo () {
    
    const par = quantidadecartas % 2 === 0;
    const min = quantidadecartas >= 4;
    const max = quantidadecartas <= 14;

    if (par && min && max){
        alert ('lets bora'); //p testar 
    }
    else{ 
        quantidadecartas = Number (prompt ("digite o numero de cartas que deseja jogar")); 
        carregarjogo();
    }
}

carregarjogo ();

let listaimg = [`"img/metalparrot.gif"`,
 `"img/fiestaparrot.gif"`,
`"img/explodyparrot.gif"`,
`"img/bobrossparrot.gif"`,
`"img/revertitparrot.gif"`,
`"img/tripletsparrot.gif"`,
`"img/unicornparrot.gif"`];

function embaralharcartas() {
    listaimg.sort(comparador);

    listaimgs =[];
    for (i=0 ; i < quantidadecartas/2 ; i++){
        listaimgs.push (listaimg [i]);
        listaimgs.push (listaimg [i]);
    }

    listaimgs.sort(comparador);
}

let listaimgs =[];
embaralharcartas();

function comparador() { 
	return Math.random() - 0.5; 
}

function distribuirCartas() {
    const chamarCarta = document.querySelector(".container-cards");
    chamarCarta.innerHTML = "";

    for (i=0 ; i < quantidadecartas ; i ++){
        chamarCarta.innerHTML += `<div class="card">
        <div class="front-face face">
            <img src="img/front.png" alt="parrot">
        </div>
        <div class="back-face face">
            <img src=${listaimgs [i]} >
        </div>
    </div>`;
    }

}

distribuirCartas();

const cards = document.querySelectorAll(".card");

function flipCard() {
  this.classList.add("flip");
  let segundaCarta = "";
  let segundaimg = "";

  if (contadorCartasAbertas % 2 === 0){
      primeiraCarta = this; 
  }
  else{
      segundaCarta = this;
      segundaimg = segundaCarta.querySelector(".back-face img");
  }

  contadorCartasAbertas += 1
  
  let primeiraimg = primeiraCarta.querySelector(".back-face img");
  
  if (primeiraimg.src === segundaimg.src){
      primeiraCarta.removeEventListener('click', flipCard);
      segundaCarta.removeEventListener('click', flipCard);
  } 
  else if (segundaCarta !== "") {
      
      setTimeout(function (){
        primeiraCarta.classList.remove("flip");
        segundaCarta.classList.remove("flip");
      },1000);

      contadorCartasAbertas -= 2; 
  } 

}

cards.forEach(card => card.addEventListener('click', flipCard));

let contadorCartasAbertas = 0; 
let primeiraCarta;








