let flippedCardsCounter = 0; 
let firstCard;
let roundCounter = 0;
let timeId; 
let secondsCouter = 0;
let imgsList =[];
let imgScrs = [`"img/metalparrot.gif"`,
 `"img/fiestaparrot.gif"`,
`"img/explodyparrot.gif"`,
`"img/bobrossparrot.gif"`,
`"img/revertitparrot.gif"`,
`"img/tripletsparrot.gif"`,
`"img/unicornparrot.gif"`];
const time = document.querySelector(".time")
let numberCards = Number (prompt ("digite o numero de cartas que deseja jogar")); 

function playGame() {
    
    const even = numberCards % 2 === 0;
    const min = numberCards >= 4;
    const max = numberCards <= 14;

    if (even && min && max){
    }
    else{ 
        numberCards = Number (prompt ("digite o numero de cartas que deseja jogar")); 
        playGame();
    }

    timeId = setInterval(counterTime, 1000);
}

playGame();

function counterTime() {
    secondsCouter += 1;
    time.innerHTML = secondsCouter + " s";
}

function shuffleCards() {
    imgScrs.sort(comparator);

    imgsList =[];
    for (i=0 ; i < numberCards/2 ; i++){
        imgsList.push (imgScrs [i]);
        imgsList.push (imgScrs [i]);
    }

    imgsList.sort(comparator);
}

shuffleCards();

function comparator() { 
	return Math.random() - 0.5; 
}

function handOutCards() {
    const cardsBoard = document.querySelector(".container-cards");
    cardsBoard.innerHTML = "";

    for (i=0 ; i < numberCards ; i ++){
        cardsBoard.innerHTML += `<div class="card">
        <div class="front-face face">
            <img src="img/front.png" alt="parrot">
        </div>
        <div class="back-face face">
            <img src=${imgsList [i]} >
        </div>
    </div>`;
    }

}

handOutCards();

const cards = document.querySelectorAll(".card");

function flipCard() {
  this.classList.add("flip");
  let secondCard = "";
  let secondImg = "";

  if (flippedCardsCounter % 2 === 0){
      firstCard = this; 
      firstCard.removeEventListener('click', flipCard);
      roundCounter += 1 
  }
  else{
      secondCard = this;
      secondImg = secondCard.querySelector(".back-face img");
  }

  flippedCardsCounter += 1

  let firstImg = firstCard.querySelector(".back-face img");
  
  if (firstImg.src === secondImg.src){
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);
  } 
  else if (secondCard !== "") {
      firstCard.addEventListener('click', flipCard);
      
      setTimeout(function() {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
      },1000);

      flippedCardsCounter -= 2; 
  } 
  if (numberCards === flippedCardsCounter) {
      clearInterval(timeId);
      setTimeout (alert, 1000 , `Você ganhou com ${roundCounter} jogadas e em ${secondsCouter} segundos`);
  }

}

cards.forEach(card => card.addEventListener('click', flipCard));

 











