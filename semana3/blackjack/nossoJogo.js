/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */



console.log ("Bem vindo ao jogo BlackJack!")
if(confirm("Voce quer jogar?")) {
   console.log ("Vamos ao jogo")
	
} else {
	console.log("Até outra hora")
}

const carta = comprarCarta(); 

cartaUm = comprarCarta(); 
cartaDois = comprarCarta(); 
cartaTres = comprarCarta(); 
cartaQuatro = comprarCarta(); 

pontuacaoUsuario = cartaUm.valor + cartaDois.valor
pontuacaoComputador = cartaTres.valor + cartaQuatro.valor

console.log("Usuário - cartas: " + cartaUm.texto + " " + cartaDois.texto + " Pontuação: " + pontuacaoUsuario)
console.log("Computador - cartas: " + cartaTres.texto + " " + cartaQuatro.texto + " Pontuação: " + pontuacaoComputador)

if (pontuacaoUsuario > pontuacaoComputador && pontuacaoUsuario <= 21 ) {
   console.log("Parabéns, voce ganhou")
} else if (pontuacaoUsuario < pontuacaoComputador && pontuacaoComputador <= 21) {
   console.log("Voce perdeu, eu ganhei.")
} else {
   console.log("Empate!")
}

