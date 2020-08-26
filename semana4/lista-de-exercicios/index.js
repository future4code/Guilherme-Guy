// Exercícios de interpretação de código

// 1) Retorna o valor em reais de uma cotação passada em doolar. No caso, retornará o numero digitado * 100. 
// Como: recebe a cotação em dolar pelo usuario via prompt e multiplica pelo parametro indicado pelo usuario, mas que no exercicio é 100.

// 2) Ele calcuula o valor de cada investimento. Como ele faz: Ele pega o primeiro parametro indicado pelo usuário, verifica se está em algum dos cases,
// se tiver mulplica pelo valor informado em cada investimento, caso não esteja em nenhum dos cases, retorna "tipo de investimento incorreto".
// No console irá aparecer: 165 e "tipo de investimento incorreto" pois tesouno não existe na função. 

// 3) Ele separa os numeros de um array, em novos arrays, um de pares e um de impares. 
// Como faz: Se os numeros do array inicial forem dividios por 2 e o resto for 0, push noo array1. Caso contrário, push no array2.
// No console irá aparecer: 1) a quantidade total de numeros: 14    2) 6   3)8 

// 4) Ele pega o menor e o maior numero do array numeros. No caso seria exibido "-10" e "1590"


// Exercícios de Lógica de Programação

// 1)

// const array = [1, 2, 3, 4, 5]

// for(i=0; i<array.length; i++){
//     console.log(array[i])
// }

// for(let numero of array) {
//     console.log(array[numero-1])
// }

// const callback = (elemento, index, array) => {
//     console.log(elemento)
// }

// console.log(array.forEach(callback))


// 2)
// a) false
// b) false
// c) true
// d) true
// e) true


// 3)

// const quantidadeDeNumerosPares = Number(prompt("Escolha um numero"))
// let i = -1
// while(i < (quantidadeDeNumerosPares - 1)) {
//     i += 1
//   console.log(i*2)
// }


// 4)

// const numero1 = Number(prompt("Escolha um numero"))
// const numero2 = Number(prompt("Escolha um numero"))
// const numero3 = Number(prompt("Escolha um numero"))

// if(numero1 === numero2 && numero2 === numero3) {
//     console.log("É equilatero")
// } else if ((numero1 === numero2 && numero1 !== numero3) || (numero2 === numero3 && numero3 !== numero1)) {
//     console.log("É isóceles")
// } else {
//     console.log("É escaleno")
// }


// 5)

// const numero1 = Number(prompt("Escolha um numero"))
// const numero2 = Number(prompt("Escolha um numero"))

// if(numero1 > numero2) {
//     console.log("O " + numero1 + " é maior")
//     console.log("A diferença entre eles é " + (numero1 - numero2))
// } else if (numero2 > numero1) {
//     console.log("O " + numero2 + " é maior")
//     console.log("A diferença entre eles é " + (numero2 - numero1))
// } else {
//     console.log(numero1 + " " + numero2 + " são iguais")
//     console.log("A diferença entre eles é " + 0)
// }

// if(numero1 % numero2 === 0) {
//     console.log("O " + numero1 + " é divisivel pelo " + numero2)
// } else {
//     console.log("O " + numero1 + " não é divisivel pelo " + numero2)

// }

// if(numero2 % numero1 === 0) {
//     console.log("O " + numero2 + " é divisivel pelo " + numero1)
// } else {
//     console.log("O " + numero2 + " não é divisivel pelo " + numero1)
// }


// - Exercícios de Funções
    // 1. Escreva uma função que receba um `array` de números e imprima na tela o segundo maior e o segundo menor número. 
    // Em seguida, invoque essa função. (Não é permitido usar funções de ordenação de vetores.)



    // const numeros = [1,2,1,3,4,5,6,7,8,9,10]

    // function segundoMaiorMenor(array) {

    //     var max1st = array[0];
    //     var max2nd = 0;
      
    //     for(var i=0; i<array.length; i++) {
      
    //       if(array[i] > max1st) {
    //         max2nd = max1st
    //         max1st = array[i]
    //       }
      
    //     }
      
    //     return max2nd;
      
    //   }
      
    //   console.log(segundoMaiorMenor(numeros));





    // 2. Escreva uma **função não nomeada** que faça um `alert("Hello Future4");`. Em seguida, invoque essa função.

    // const hello = () => {
    //    console.log("Hello Labenu")
    //    }

    //    console.log(hello())





    // Exercicios de objetos

    // 1) array é uma lista de coisas guardada no mesmo lugar. Objetos são estruturas de sintaxe que nos
// permitem representar dados mais complexos de
// uma maneira mais organizada


// 2)

// function criaRetangulo() {
//     lado1 = Number(prompt("Digite o largura"))
//     lado2 = Number(prompt("Digite o altura"))

//     const retangulo = {
//         largura: lado1,
//         altura: lado2,
//         area: lado1*lado2,
//         perimetro: 2*(lado1+lado2)
//     }

//     console.log(retangulo)

// }

// console.log(criaRetangulo())
 


// 3)

// function filme() {

//     const filmeFavorito = {
//         titulo: "Tombstone",
//         ano: 1993 ,
//         diretor: "George P. Cosmatos",
//         elenco: ["Val Kilmer", "Kurt Russel"]
//     }

//     console.log(filmeFavorito)

// }

// console.log(filme())


// 4)

//     const pessoa = {
//         nome: "Guilherme",
//         idade: 26,
//         email: "guigl8@hotmail.com",
//         cidade: "Porto Alegre"
//     }


// function anonimizarPessoa(humano) {
//    humano.nome = "ANONIMO"
//    console.log(humano)
// }

// console.log(anonimizarPessoa(pessoa))



// Exercicios de funções de array:

// 1) 

// a) 
// const arrayNomes = [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]

// const callback = (elementoDoArray, index, array) => {
//     if (elementoDoArray.idade >= 20) {
//         return true 
//     }
//     return false 
// }


// const novoArray = arrayNomes.filter(callback)

// console.log(novoArray)


// b)

// const arrayNomes = [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]


// const callback = (elementoDoArray, index, array) => {
//     if (elementoDoArray.idade < 20) {
//         return true 
//     }
//     return false 
// }


// const novoArray = arrayNomes.filter(callback)

// console.log(novoArray)



// 2)

// a)

// const array = [1, 2, 3, 4, 5, 6]

// const callback = (elementoDoArray, index, array) => {
//     return elementoDoArray * 2 }

// const vezes2 = array.map(callback)

// console.log(vezes2)




// b)

// const array = [1, 2, 3, 4, 5, 6]

// const callback = (elementoDoArray, index, array) => {
//     resultado = String(elementoDoArray*3)
//     return resultado }

// const vezes3string = array.map(callback)

// console.log(vezes3string)



// c)


// const numeros = [1, 2, 3, 4, 5, 6]

// const novoArray = numeros.map((elementoDoArray, indexDoArray, arrayEmSi) => {
//     if(elementoDoArray % 2 === 0)
//     return `o numero ${elementoDoArray} é par`
//     else (elementoDoArray % 2 !== 0)
//     return `O numero ${elementoDoArray} é impar`
// })

// console.log(novoArray)


// 3)


// a)
// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]

// const callback = (elementoDoArray, index, array) => { 
//     if (elementoDoArray.idade > 14 && elementoDoArray.idade < 60 && elementoDoArray.altura > 1.5) {
//         return true 
//     }
//     return false 
// }


// const podemBrincar = pessoas.filter(callback)

// console.log(podemBrincar)


// b) 

// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]

// const callback = (elementoDoArray, index, array) => { 
//     if (elementoDoArray.idade > 14 && elementoDoArray.idade < 60 && elementoDoArray.altura > 1.5) {
//         return false 
//     }
//     return true 
// }


// const podemBrincar = pessoas.filter(callback)

// console.log(podemBrincar)



// 4)

// const consultas = [
// 	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
// 	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
// 	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
// 	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
// ]



// const novoArray = consultas.map((elementoDoArray, indexDoArray, arrayEmSi) => {
//     if(elementoDoArray.cancelada === true && elementoDoArray.genero === "masculino") 
//     return `Olá Sr ${elementoDoArray.nome}. Estamos enviando esta mensagem para lembra-lo da sua consulta no dia ${elementoDoArray.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail`
//     else if  (elementoDoArray.cancelada === false && elementoDoArray.genero === "masculino")
//     return `Olá Sr ${elementoDoArray.nome}. Estamos enviando esta mensagem para lembra-lo da sua consulta no dia ${elementoDoArray.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail`
//     else if  (elementoDoArray.cancelada === true && elementoDoArray.genero === "feminino")
//     return `Olá Sra ${elementoDoArray.nome}. Estamos enviando esta mensagem para lembra-lo da sua consulta no dia ${elementoDoArray.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail`
//     else if  (elementoDoArray.cancelada === false && elementoDoArray.genero === "feminino")
//     return `Olá Sra ${elementoDoArray.nome}. Estamos enviando esta mensagem para lembra-lo da sua consulta no dia ${elementoDoArray.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail`
// })

// console.log(novoArray)



// 5)




// const contas = [
// 	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
// 	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
// 	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
// 	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
// ]



// const quantidade = prompt("Quantas maças voce quer comprar?")

// if(quantidade < 12) {
//     resultado = quantidade * 1.3
//     console.log("O total e pagar é " + resultado + "R$")
// } else {
//     resultado = quantidade * 1
//     console.log("O total e pagar é " + resultado + "R$")
// }







 


 








