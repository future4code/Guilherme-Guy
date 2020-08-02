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

const cartasUsuario = [cartaUm.texto, cartaDois.texto]
const cartasComputador = [cartaTres.texto, cartaQuatro.texto]
pontuacaoUsuario = cartaUm.valor + cartaDois.valor
pontuacaoComputador = cartaTres.valor + cartaQuatro.valor

if (cartaUm.valor === 11 && cartaDois.valor === 11) {

   cartaUm = comprarCarta(); 
   cartaDois = comprarCarta();
}

if (cartaTres.valor === 11 && cartaTres === 11) {
   cartaTres = comprarCarta();
   cartaQuatro = comprarCarta();
}

console.log("Suas cartas são: " + cartaUm.texto + " " + cartaDois.texto + ". E a carta revelada do computador é: " + cartaTres.texto)

while (confirm("Deseja comprar mais uma carta?") && pontuacaoUsuario <= 21) {
   cartaNova = (comprarCarta())
   cartasUsuario.push(cartaNova.texto);
   pontuacaoUsuario = pontuacaoUsuario + cartaNova.valor
   console.log("Suas cartas são: " + cartasUsuario.join() + " e a carta revelada do computaodor é " + cartasComputador[0])
   if (pontuacaoUsuario > 21) {
      console.log("Sua pontuação passou de 21, o computador venceu.")
   }
} 

while (pontuacaoComputador <= pontuacaoUsuario) {
   cartaNova = (comprarCarta())
   cartasComputador.push(cartaNova.texto);
   pontuacaoComputador = pontuacaoComputador + cartaNova.valor

   if (pontuacaoUsuario < pontuacaoComputador && pontuacaoComputador > 21) {
      console.log("Suas cartas são: " + cartasUsuario.join() + " E sua pontuação é " + pontuacaoUsuario)
      console.log("As cartas do computador são: " + cartasComputador.join() + " E a pontuação do computador é " + pontuacaoComputador)
      console.log("Parabéns, voce ganhou.")
   } else if (pontuacaoUsuario < pontuacaoComputador && pontuacaoComputador <= 21) {
      console.log("Suas cartas são: " + cartasUsuario.join() + " E sua pontuação é " + pontuacaoUsuario)
      console.log("As cartas do computador são: " + cartasComputador.join() + " E a pontuação do computador é " + pontuacaoComputador)
      console.log("Voce perdeu, eu ganhei.")
   } else {
      console.log("Suas cartas são: " + cartasUsuario.join() + " E sua pontuação é " + pontuacaoUsuario)
      console.log("As cartas do computador são: " + cartasComputador.join() + " E a pontuação do computador é " + pontuacaoComputador)
      console.log("Empate!")
   }
}





