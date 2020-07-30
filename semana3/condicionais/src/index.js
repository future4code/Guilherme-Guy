// 1)

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if(numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }
  // esse código verifica se o resto da divisão do número que o usuário digitou, dividido por 2, é 0. Se sim, passa no teste, se não, não passa. 


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2)

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break;// BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a. Para que serve o código acima?
// O código acima serve para verificar o preço de cada fruta. 

// b. Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
// O preço da fruta  Maça  é  R$  5

// c. Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no
//  console se retirássemos o break que está logo acima do default (o break indicado pelo 
//  comentário "BREAK PARA O ITEM c.")?
// O preço da pera seria dado errado, pois o código nao se encerraria, e daria o preço default de 5.


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 3) 

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a. O que a primeira linha está fazendo?
// A primeira linha está atribuindo a const numero o valor digitado pelo usuário.

// b. Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// Se o usuário colocar 10, vai receber "Esse numero passou no teste". -10 vai dar erro pois a let mensagem não foi declarada no escopo global.

// c. Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// vai dar erro pois a let mensagem não foi declarada no escopo global.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 4)

// const idade = Number(prompt("Qual o a sua idade?"))

// if (idade >= 18) {
//     console.log("Voce pode dirigir")
// } else {
//     console.log("Voce não pode dirigir")
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 5)

//  const turno = prompt("Qual turno voce estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)")

// if (turno === "M") {
//     console.log("Bom dia!")
// } else if (turno === "V") {
//     console.log("Boa tarde!")
// } else if (turno === "N") {
//     console.log("Boa noite!")
//     } else {
//         console.log("Comando não identificado")
//     }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6)

// const turno = prompt("Qual turno voce estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)")

// switch (turno) {
//     case "M":
//         console.log("Bom dia!")
//       break;
//     case "V":
//         console.log("Boa tarde!")
//       break;
//     case "N":
//         console.log("Boa noite!")
//       break;
//     default:
//         console.log("Comando não identificado")
//       break;
//   }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7)

// const generoDoFilme = prompt("Qual o genero do filme?")
// const preco = prompt("Qual o preço do filme?")

// if (generoDoFilme === "fantasia" && preco < 15) {
//     console.log("Bom filme!") 
// } else {
//     console.log("Escolha outro filme") 

// }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// desafio 1)

// const generoDoFilme = prompt("Qual o genero do filme?")
// const preco = prompt("Qual o preço do filme?")
// let snack

// if (generoDoFilme === "fantasia" && preco < 15) {
//    snack = prompt("Qual snack voce quer??")

    
//     console.log("Bom filme com " + snack) 
// } else {
//     console.log("Escolha outro filme") 

// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




const nome = prompt("Qual o seu nome?")
const tipoDoJogo = prompt("Indique o tipo de jogo: IN indica internacional e DO indica doméstico")
const etapaDoJogo = prompt("Indique etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final")
const categoria = Number(prompt("Indique a categoria do jogo: 1, 2, 3 ou 4"))
const quantidade = Number(prompt("Qual a quantidade de ingressos?"))
let total 
let valorIngresso


if (tipoDoJogo === "IN" && etapaDoJogo === "SF" && categoria === 1) {
  total = (quantidade * 1320) / 4.10 
  valorIngresso = (1320 / 4.10)
  console.log ("Nome do Cliente:", nome)
  console.log ("Tipo de Jogo:", tipoDoJogo)
  console.log ("Etapa do Jogo:", etapaDoJogo)
  console.log ("Categoria:", categoria)
  console.log ("Quantidade de Ingressos:", quantidade)
  console.log ("Valor do Ingresso:", valorIngresso)
  console.log ("Valor total dos ingressos: ", total)
} else if (tipoDoJogo === "IN" && etapaDoJogo === "SF" && categoria === 2) {
  total = (quantidade * 880) / 4.10 
  valorIngresso = (880 / 4.10)
  console.log ("Nome do Cliente:", nome)
  console.log ("Tipo de Jogo:", tipoDoJogo)
  console.log ("Etapa do Jogo:", etapaDoJogo)
  console.log ("Categoria:", categoria)
  console.log ("Quantidade de Ingressos:", quantidade)
  console.log ("Valor do Ingresso:", valorIngresso)
  console.log ("Valor total dos ingressos: ", total)     
} else if (tipoDoJogo === "IN" && etapaDoJogo === "SF" && categoria === 3) {
  total = (quantidade * 550) / 4.10 
  valorIngresso = (550 / 4.10)
  console.log ("Nome do Cliente:", nome)
  console.log ("Tipo de Jogo:", tipoDoJogo)
  console.log ("Etapa do Jogo:", etapaDoJogo)
  console.log ("Categoria:", categoria)
  console.log ("Quantidade de Ingressos:", quantidade)
  console.log ("Valor do Ingresso:", valorIngresso)
  console.log ("Valor total dos ingressos: ", total)     
} else if (tipoDoJogo === "IN" && etapaDoJogo === "SF" && categoria === 4) {
  total = (quantidade * 220) / 4.10 
  valorIngresso = (220 / 4.10)
  console.log ("Nome do Cliente:", nome)
  console.log ("Tipo de Jogo:", tipoDoJogo)
  console.log ("Etapa do Jogo:", etapaDoJogo)
  console.log ("Categoria:", categoria)
  console.log ("Quantidade de Ingressos:", quantidade)
  console.log ("Valor do Ingresso:", valorIngresso)
  console.log ("Valor total dos ingressos: ", total)     
} else if (tipoDoJogo === "IN" && etapaDoJogo === "DT" && categoria === 1) {
  total = (quantidade * 660) / 4.10 
  valorIngresso = (660 / 4.10)
  console.log ("Nome do Cliente:", nome)
  console.log ("Tipo de Jogo:", tipoDoJogo)
  console.log ("Etapa do Jogo:", etapaDoJogo)
  console.log ("Categoria:", categoria)
  console.log ("Quantidade de Ingressos:", quantidade)
  console.log ("Valor do Ingresso:", valorIngresso)
  console.log ("Valor total dos ingressos: ", total)
} else if (tipoDoJogo === "IN" && etapaDoJogo === "DT" && categoria === 2) {
  total = (quantidade * 440) / 4.10 
  valorIngresso = (440 / 4.10)
  console.log ("Nome do Cliente:", nome)
  console.log ("Tipo de Jogo:", tipoDoJogo)
  console.log ("Etapa do Jogo:", etapaDoJogo)
  console.log ("Categoria:", categoria)
  console.log ("Quantidade de Ingressos:", quantidade)
  console.log ("Valor do Ingresso:", valorIngresso)
  console.log ("Valor total dos ingressos: ", total)
} else if (tipoDoJogo === "IN" && etapaDoJogo === "DT" && categoria === 3) {
  total = (quantidade * 330) / 4.10 
  valorIngresso = (330 / 4.10)
  console.log ("Nome do Cliente:", nome)
  console.log ("Tipo de Jogo:", tipoDoJogo)
  console.log ("Etapa do Jogo:", etapaDoJogo)
  console.log ("Categoria:", categoria)
  console.log ("Quantidade de Ingressos:", quantidade)
  console.log ("Valor do Ingresso:", valorIngresso)
  console.log ("Valor total dos ingressos: ", total)
} else if (tipoDoJogo === "IN" && etapaDoJogo === "DT" && categoria === 4) {
  total = (quantidade * 140) / 4.10 
  valorIngresso = (140 / 4.10)
  console.log ("Nome do Cliente:", nome)
  console.log ("Tipo de Jogo:", tipoDoJogo)
  console.log ("Etapa do Jogo:", etapaDoJogo)
  console.log ("Categoria:", categoria)
  console.log ("Quantidade de Ingressos:", quantidade)
  console.log ("Valor do Ingresso:", valorIngresso)
  console.log ("Valor total dos ingressos: ", total)
} else if (tipoDoJogo === "IN" && etapaDoJogo === "FI" && categoria === 1) {
  total = (quantidade * 1980) / 4.10 
  valorIngresso = (1980 / 4.10)
  console.log ("Nome do Cliente:", nome)
  console.log ("Tipo de Jogo:", tipoDoJogo)
  console.log ("Etapa do Jogo:", etapaDoJogo)
  console.log ("Categoria:", categoria)
  console.log ("Quantidade de Ingressos:", quantidade)
  console.log ("Valor do Ingresso:", valorIngresso)
  console.log ("Valor total dos ingressos: ", total)
} else if (tipoDoJogo === "IN" && etapaDoJogo === "FI" && categoria === 2) {
  total = (quantidade * 1320) / 4.10 
  valorIngresso = (1320 / 4.10)
  console.log ("Nome do Cliente:", nome)
  console.log ("Tipo de Jogo:", tipoDoJogo)
  console.log ("Etapa do Jogo:", etapaDoJogo)
  console.log ("Categoria:", categoria)
  console.log ("Quantidade de Ingressos:", quantidade)
  console.log ("Valor do Ingresso:", valorIngresso)
  console.log ("Valor total dos ingressos: ", total)
} else if (tipoDoJogo === "IN" && etapaDoJogo === "FI" && categoria === 3) {
  total = (quantidade * 880) / 4.10 
  valorIngresso = (880 / 4.10)
  console.log ("Nome do Cliente:", nome)
  console.log ("Tipo de Jogo:", tipoDoJogo)
  console.log ("Etapa do Jogo:", etapaDoJogo)
  console.log ("Categoria:", categoria)
  console.log ("Quantidade de Ingressos:", quantidade)
  console.log ("Valor do Ingresso:", valorIngresso)
  console.log ("Valor total dos ingressos: ", total)
} else if (tipoDoJogo === "IN" && etapaDoJogo === "FI" && categoria === 4) {
  total = (quantidade * 330) / 4.10 
  valorIngresso = (330 / 4.10)
  console.log ("Nome do Cliente:", nome)
  console.log ("Tipo de Jogo:", tipoDoJogo)
  console.log ("Etapa do Jogo:", etapaDoJogo)
  console.log ("Categoria:", categoria)
  console.log ("Quantidade de Ingressos:", quantidade)
  console.log ("Valor do Ingresso:", valorIngresso)
  console.log ("Valor total dos ingressos: ", total)
} else if (tipoDoJogo === "DO" && etapaDoJogo === "SF" && categoria === 1) {
  total = quantidade * 1320
  valorIngresso = 1320
  console.log ("Nome do Cliente:", nome)
  console.log ("Tipo de Jogo:", tipoDoJogo)
  console.log ("Etapa do Jogo:", etapaDoJogo)
  console.log ("Categoria:", categoria)
  console.log ("Quantidade de Ingressos:", quantidade)
  console.log ("Valor do Ingresso:", valorIngresso)
  console.log ("Valor total dos ingressos: ", total)
} else if (tipoDoJogo === "DO" && etapaDoJogo === "SF" && categoria === 2) {
  total = quantidade * 880
  valorIngresso = 880
  console.log ("Nome do Cliente:", nome)
  console.log ("Tipo de Jogo:", tipoDoJogo)
  console.log ("Etapa do Jogo:", etapaDoJogo)
  console.log ("Categoria:", categoria)
  console.log ("Quantidade de Ingressos:", quantidade)
  console.log ("Valor do Ingresso:", valorIngresso)
  console.log ("Valor total dos ingressos: ", total)
} else if (tipoDoJogo === "DO" && etapaDoJogo === "SF" && categoria === 3) {
  total = quantidade * 550
  valorIngresso = 550
  console.log ("Nome do Cliente:", nome)
  console.log ("Tipo de Jogo:", tipoDoJogo)
  console.log ("Etapa do Jogo:", etapaDoJogo)
  console.log ("Categoria:", categoria)
  console.log ("Quantidade de Ingressos:", quantidade)
  console.log ("Valor do Ingresso:", valorIngresso)
  console.log ("Valor total dos ingressos: ", total)
} else if (tipoDoJogo === "DO" && etapaDoJogo === "SF" && categoria === 4) {
  total = quantidade * 220
  valorIngresso = 220
  console.log ("Nome do Cliente:", nome)
  console.log ("Tipo de Jogo:", tipoDoJogo)
  console.log ("Etapa do Jogo:", etapaDoJogo)
  console.log ("Categoria:", categoria)
  console.log ("Quantidade de Ingressos:", quantidade)
  console.log ("Valor do Ingresso:", valorIngresso)
  console.log ("Valor total dos ingressos: ", total)
} else if (tipoDoJogo === "DO" && etapaDoJogo === "DT" && categoria === 1) {
  total = quantidade * 660
  valorIngresso = 660
  console.log ("Nome do Cliente:", nome)
  console.log ("Tipo de Jogo:", tipoDoJogo)
  console.log ("Etapa do Jogo:", etapaDoJogo)
  console.log ("Categoria:", categoria)
  console.log ("Quantidade de Ingressos:", quantidade)
  console.log ("Valor do Ingresso:", valorIngresso)
  console.log ("Valor total dos ingressos: ", total)
} else if (tipoDoJogo === "DO" && etapaDoJogo === "DT" && categoria === 2) {
  total = quantidade * 440
  valorIngresso = 440
  console.log ("Nome do Cliente:", nome)
  console.log ("Tipo de Jogo:", tipoDoJogo)
  console.log ("Etapa do Jogo:", etapaDoJogo)
  console.log ("Categoria:", categoria)
  console.log ("Quantidade de Ingressos:", quantidade)
  console.log ("Valor do Ingresso:", valorIngresso)
  console.log ("Valor total dos ingressos: ", total)
} else if (tipoDoJogo === "DO" && etapaDoJogo === "DT" && categoria === 3) {
  total = quantidade * 330
  valorIngresso = 330
  console.log ("Nome do Cliente:", nome)
  console.log ("Tipo de Jogo:", tipoDoJogo)
  console.log ("Etapa do Jogo:", etapaDoJogo)
  console.log ("Categoria:", categoria)
  console.log ("Quantidade de Ingressos:", quantidade)
  console.log ("Valor do Ingresso:", valorIngresso)
  console.log ("Valor total dos ingressos: ", total)
} else if (tipoDoJogo === "DO" && etapaDoJogo === "DT" && categoria === 4) {
  total = quantidade * 170
  valorIngresso = 170
  console.log ("Nome do Cliente:", nome)
  console.log ("Tipo de Jogo:", tipoDoJogo)
  console.log ("Etapa do Jogo:", etapaDoJogo)
  console.log ("Categoria:", categoria)
  console.log ("Quantidade de Ingressos:", quantidade)
  console.log ("Valor do Ingresso:", valorIngresso)
  console.log ("Valor total dos ingressos: ", total)
} else if (tipoDoJogo === "DO" && etapaDoJogo === "FI" && categoria === 1) {
  total = quantidade * 1980
  valorIngresso = 1980
  console.log ("Nome do Cliente:", nome)
  console.log ("Tipo de Jogo:", tipoDoJogo)
  console.log ("Etapa do Jogo:", etapaDoJogo)
  console.log ("Categoria:", categoria)
  console.log ("Quantidade de Ingressos:", quantidade)
  console.log ("Valor do Ingresso:", valorIngresso)
  console.log ("Valor total dos ingressos: ", total)
} else if (tipoDoJogo === "DO" && etapaDoJogo === "FI" && categoria === 2) {
  total = quantidade * 1320
  valorIngresso = 1320
  console.log ("Nome do Cliente:", nome)
  console.log ("Tipo de Jogo:", tipoDoJogo)
  console.log ("Etapa do Jogo:", etapaDoJogo)
  console.log ("Categoria:", categoria)
  console.log ("Quantidade de Ingressos:", quantidade)
  console.log ("Valor do Ingresso:", valorIngresso)
  console.log ("Valor total dos ingressos: ", total)
} else if (tipoDoJogo === "DO" && etapaDoJogo === "FI" && categoria === 3) {
  total = quantidade * 880
  valorIngresso = 880
  console.log ("Nome do Cliente:", nome)
  console.log ("Tipo de Jogo:", tipoDoJogo)
  console.log ("Etapa do Jogo:", etapaDoJogo)
  console.log ("Categoria:", categoria)
  console.log ("Quantidade de Ingressos:", quantidade)
  console.log ("Valor do Ingresso:", valorIngresso)
  console.log ("Valor total dos ingressos: ", total)
} else if (tipoDoJogo === "DO" && etapaDoJogo === "FI" && categoria === 4) {
  total = quantidade * 330
  valorIngresso = 330
  console.log ("Nome do Cliente:", nome)
  console.log ("Tipo de Jogo:", tipoDoJogo)
  console.log ("Etapa do Jogo:", etapaDoJogo)
  console.log ("Categoria:", categoria)
  console.log ("Quantidade de Ingressos:", quantidade)
  console.log ("Valor do Ingresso:", valorIngresso)
  console.log ("Valor total dos ingressos: ", total)
} else {
  console.log ("Voce digitou algo errado, tente novamente")
}













