let quantidadecartas = Number (prompt ("digite o numero de cartas que deseja jogar")); 

function carregarjogo () {
    
    const par = quantidadecartas % 2 == 0;
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

function distribuirCartas() {
    const chamarCarta = document.querySelector(".container-cards");
    chamarCarta.innerHTML = "";

    for (quantidadecartas; quantidadecartas > 0; quantidadecartas--){
        chamarCarta.innerHTML += `<div class="card">
        <img src="img/front.png">
        </div>`;
    }

}

distribuirCartas();
