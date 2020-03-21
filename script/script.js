let jogador = 0;
let computador = 0;
const pontosJogador = document.getElementById("ponto-jogador");
const pontosComputador = document.getElementById("ponto-computador");
const pedra = document.getElementById("pedra")
const papel = document.getElementById("papel")
const tesoura = document.getElementById("tesoura")
const msg = document.getElementById("msg")
const resultado = document.getElementById("resultado")



function win(player, computer){
    jogador++;
    pontosJogador.innerHTML = jogador;
    msg.innerHTML = `${player.toUpperCase()} ganha de ${computer.toUpperCase()} você ganhou!`;
    resultado.innerHTML = `<img src="./img/${player}.png" alt="Pedra">
                           <h3>x<h3>
                           <img src="./img/${computer}.png" alt="Pedra"> `
}
function lose(player, computer){
    computador++;
    pontosComputador.innerHTML = computador;
    msg.innerHTML = `${player.toUpperCase()} perde de ${computer.toUpperCase()} você perdeu!`;
    resultado.innerHTML = `<img src="./img/${player}.png" alt="Pedra">
                           <h3>x<h3>
                           <img src="./img/${computer}.png" alt="Pedra">`

}
function draw(player, computer){
    msg.innerHTML = `${player.toUpperCase()} é igual a ${computer.toUpperCase()} Empatou!`;
    resultado.innerHTML = `<img src="./img/${player}.png" alt="Pedra">
                           <h3>x<h3>
                           <img src="./img/${computer}.png" alt="Pedra"> `
}



function escolhaAleatória(){
    const escolha = ["pedra", "papel", "tesoura"];
    return escolha[(Math.floor(Math.random()* escolha.length))]
}

function game(opcaoJogador){
    let opcaoPc = escolhaAleatória();
    var jogada = opcaoJogador +  opcaoPc;
    console.log(typeof(pedra))
    console.log(typeof(opcaoJogador))
    if(jogada == "pedratesoura" || jogada == "papelpedra" || jogada == "tesourapapel"){
        win(opcaoJogador , opcaoPc)
    }else if (opcaoJogador == opcaoPc){
        draw(opcaoJogador, opcaoPc)
    } else{
        lose(opcaoJogador, opcaoPc)
    }
}



pedra.addEventListener('click', function(){
    game("pedra")
});
papel.addEventListener('click', function(){
    game("papel")
});
tesoura.addEventListener('click', function(){
    game("tesoura")
});


