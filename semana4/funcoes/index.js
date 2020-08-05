//1)

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// a) Será impresso 10 e 50.
// b) a função seria excutada, mas não seria exibida no console. nao apareceria nada.


// 2)

// let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

// const outraFuncao = function(array) {
// 	for (let i = 0; i < 2; i++) {
// 		console.log(array[i])
// 	}
// }

// outraFuncao(arrayDeNomes)

// a) A saída será dos dois primeiros elementos do Array. 
// b) Seria impresso os nomes "Amanda" e "Caio", o array completo. 

// 3)
// const metodo = (array) => {
//     let arrayFinal = [];
  
//     for (let x of array) {
//           if (x % 2 === 0) {
//           arrayFinal.push(x * x)
//           }
//     }
  
//     return arrayFinal;
//   }

// mudaria o nome para "paresAoQuadrado". A função checa os numeros pares do array e seleciona os pares, muitiplica eles por eles mesmos e joga em um novo array



// 4)  

// a)

// const info = () => {
//     console.log("Eu sou Guilherme, tenho 26 anos, moro em Porto Alegre e sou estudante.")
// }

// console.log(info)


// b) 

// const info = (nome, idade, endereco, estudante) => {
//     idade = Number(idade)
//     estudante = Boolean(estudante)
//     if (estudante === true)
//     estudante = "sou"
//     else {
//         estudante = "não sou"
//     }
//     return console.log("Eu sou " + nome + ", tenho " + idade + " anos," + " moro em " + endereco + " e " + estudante + " estudante")

// }
// info("Guilherme", 26, "Porto Alegre", true)


// 5)

// a) 

// const soma = (numeroUm, numeroDois) => {
//     resultado = numeroUm + numeroDois
//     return console.log(resultado)
// }
// soma(5, 6)

// b)

// const comparacao = (numeroUm, numeroDois) => {
//     resultado = (numeroUm >= numeroDois)
//      console.log("O primeiro numero é maior ou igual? " + resultado)
      
//   }
//   comparacao(5, 4)

// c)

// const frase = (mensagem) => {
//     for (i = 0; i < 10; i++) 
//         console.log(mensagem);
// }

// frase(prompt("Diga"));

// frase("oi");


// 6)

// a)

// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// const quantidade = (arrayzinho) => {
//     console.log(arrayzinho.length)
// }
// quantidade(array)


// b)

// const parOuNao = (numero1) => {
//     resultado = (numero1 % 2 === 0)
//     console.log(resultado)
// }
// parOuNao(2)

// c)
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// const quantidadeDePares = (arrayzinho) => {
//     let par = 0
//     for(i=0; i<arrayzinho.length; i++){
//         if(arrayzinho[i]%2===0){
//             par += 1
//         }
//     }
//     console.log(par)
// }
// quantidadeDePares(array)

// d)

// const parOuNao = (numero1) => {
//     resultado = (numero1 % 2 === 0)
//     console.log(resultado)
// }

// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]
// const quantidadeDePares = (arrayzinho) => {
//     let par = 0
//     for(i=0; i<arrayzinho.length; i++){
//         if(parOuNao(arrayzinho[i])===true){
//             par += 1
//         }
//     }
//     console.log(par)
// }
// quantidadeDePares(array)

// DESAFIOS 

// EXERCICIO 1

// 1)
// const parametroUm = (palavra) => {
//     console.log(palavra)
// }
// 2)
// const somatorio = (numeroUm, numeroDois) => {
//     soma = numeroUm + numeroDois
//     return soma 
// }
// somatorio(1, 4)
// parametroUm(soma)

// EXERCICIO 2
// 1)
// const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
// const quantidadeDeParesMultiplicados = (arrayzinho) => {
//     novoArray = []
//     for(i=0; i<arrayzinho.length; i++){
//         if(arrayzinho[i]%2===0){
//         novoArray.push(arrayzinho[i] * 2)
//         }
//     }
//     console.log(novoArray)
// }
// quantidadeDeParesMultiplicados(numeros)

// 2)
// const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
// let maximo = 0
// const maiorNumero = (arrayzinho) => {
// for (let i = 0; i < arrayzinho.length; i++) {
//     if (arrayzinho[i] > maximo) {
//         maximo = arrayzinho[i]
//     } 
// }
// console.log("O maior numero é: " + maximo)
// }
// maiorNumero(numeros)

// 3)

// const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
// let maximo = 0
// const maiorNumero = (arrayzinho) => {
// for (let i = 0; i < arrayzinho.length; i++) {
//     if (arrayzinho[i] > maximo) {
//         maximo = arrayzinho[i]
//     } 
// }
// console.log("O indice do maior numero é: " + arrayzinho.indexOf(maximo))
// }
// maiorNumero(numeros)

// 4)

// const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]
// const invertida = (arrayzinho) => {
//     console.log(arrayzinho.reverse())
// }
// invertida(numeros)
