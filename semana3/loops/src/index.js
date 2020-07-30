// // 1)

// // let valor = 0
// // for(let i = 0; i < 5; i++) {
// //   valor += i
// // }
// // console.log(valor)

// //O valor retornado será 10. O código tá somando o valor de "i" a "valor" até que i seja menor que 5.

// // 2)

// // const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// // for (let numero of lista) {
// //   if (numero > 18) {
// // 		console.log(numero)
// // 	}
// // }

// // a. O que vai ser impresso no console?
// // -Vai ser impresso todos numeros maiores que 18.

// // b. Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
// // Faria assim: 
// // let lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// // for (let numero of lista) {
// // 		console.log(numero)
// // 	}


// // 3)
// // a)

// // let lista = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// // for (let numero of lista) {
// // 		console.log(numero)
// // }

// // b)

// // let lista = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// // for (let numero of lista) {
// // 		console.log(numero / 10)
// // }

// // c)

// // let lista = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// // let novaLista = []

// // for (let i = 0; i < lista.length; i++) {
// //     if (lista[i] % 2 === 0) {
// //         novaLista.push(lista[i])
// //     }
// // }
// // console.log(novaLista)


// // d)

// // let lista = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// // for (let i = 0; i < lista.length; i++) {

// //     console.log ("O elemento do index " + i + " é " + lista[i])
// //      }


// // e)

// // let lista = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// // let maximo = 0

// // for (let i = 0; i < lista.length; i++) {
// //     if (lista[i] > maximo) {
// //         maximo = lista[i]
// //     } 
// // }

// // let minimo = maximo

// // for (let i = 0; i < lista.length; i++) {
// //     if (lista[i] <minimo) {
// //         minimo = lista[i] }
// //     }
// // console.log("O maior numero é " + maximo + " e o menor é " + minimo)



// // desafio 1) 

// // const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// // let quantidadeAtual = 0
// // while(quantidadeAtual < quantidadeTotal){
// //   let linha = ""
// //   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
// //     linha += "0"
// //   }
// //   console.log(linha)
// //   quantidadeAtual++
// // }

// // O resultado impresso seria 0 00 000 0000, sempre aumentando um 0 por linha. 


// desafio 2)

// const numeroSecreto = Number(prompt("Digite o numero que está pensando"))
// console.log ("Vamos jogar!")
// let tentativa = Number(prompt("Chute um numero"))
// contador = 1 

// while (tentativa != numeroSecreto) {
//     contador += 1
//     if (tentativa < numeroSecreto) {
//       console.log ("O numero chutato foi: " + tentativa)
//       console.log ("Errou, o numero é maior")
//       tentativa =  Number(prompt("Você errou, o numero é maior, tente outro"))
//     }
//     else  {
//         console.log ("O numero chutato foi: " + tentativa)
//         console.log ("Errou, o numero é menor")
//         tentativa =  Number(prompt("Você errou, o numero é menor, tente outro"))}
        
//     }

//     if (tentativa === numeroSecreto) {
//         console.log("Parabéns, voce acertou")
       
//     }
//     console.log ("O numero de tentativas foi: " + contador)


// desafio 3)

// const numeroSecreto = Math.round(Math.random() * 100)
// console.log(numeroSecreto)
// console.log ("Vamos jogar!")
// let tentativa = Number(prompt("Chute um numero"))
// contador = 1 

// while (tentativa != numeroSecreto) {
//     contador += 1
//     if (tentativa < numeroSecreto) {
//       console.log ("O numero chutato foi: " + tentativa)
//       console.log ("Errou, o numero é maior")
//       tentativa =  Number(prompt("Você errou, o numero é maior, tente outro"))
//     }
//     else  {
//         console.log ("O numero chutato foi: " + tentativa)
//         console.log ("Errou, o numero é menor")
//         tentativa =  Number(prompt("Você errou, o numero é menor, tente outro"))}
        
//     }

//     if (tentativa === numeroSecreto) {
//         console.log("Parabéns, voce acertou")
       
//     }
//     console.log ("O numero de tentativas foi: " + contador)

// Foi facil, pois ja conhecia esses comandos. 
    














































// Desafio 1) 

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "0"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// Seria exibido: 0 00 000 0000
//


