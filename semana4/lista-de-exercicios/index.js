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





    

 








