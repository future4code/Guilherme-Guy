// ________________________________________________ EXEMPLO 1 (CALLBACK SIMPLES)

// function verificaPar(numero, mostreResultado) {
//     // let numero = 20
//     // let mostreResultado = imprimeNumero

//     if (numero % 2 === 0) {
//         const resultado = numero / 2 
//         // resultado = 10
//         mostreResultado(resultado)
//     }
// }

// function imprimeNumero(numero) {
//     // let numero = 10
//     console.log(numero)
// }

// // Exemplo passando o nome da funcao
// verificaPar(20, imprimeNumero)


// // Exemplo simplificado, passando a declaracao direto como parâmetro
// verificaPar(30, (numeroImpresso) => {
//     console.log(numeroImpresso)
// })




// ________________________________________________ EXERCÍCIO 1 (CALLBACK SIMPLES)

// function verifiqueImpar(numero, mostreMensagem) {
//     // let numero = 3
//     // let mostreMensagem = faleQueEImpar

//     if (numero % 2 !== 0) {
//         mostreMensagem(numero)
//     }
// }

// function faleQueEImpar(numeroImpar) {
//     console.log(`O número ${numeroImpar} é impar`)
// }


// verifiqueImpar(2, faleQueEImpar)


// ____________________________________________________ SEGUNDA PARTE DA AULA (FUNÇÕES DE ARRAY)




// ________________________________________________________ EXEMPLOS USANDO POKEMONS


const pokemons = [
    {nome: "Bulbasaur", tipo: "grama", vida: 0, vidaMaxima: 2000},
    {nome: "Bellsprout", tipo: "grama", vida: 0, vidaMaxima: 2000},
    {nome: "Charmander", tipo: "fogo", vida: 0, vidaMaxima: 500},
    {nome: "Vulpix", tipo: "fogo", vida: 0, vidaMaxima: 2000},
    {nome: "Squirtle", tipo: "água", vida: 0, vidaMaxima: 4000},
    {nome: "Psyduck", tipo: "água", vida: 0, vidaMaxima: 2000}
]


// _________________________________________________________forEach()

// pokemons.forEach((elementoDoArray, index, array) => {
//     elementoDoArray.vida = elementoDoArray.vidaMaxima
// })

// console.log(pokemons)


// _________________________________________________________map()

const callback = (elementoDoArray, index, array) => {
    return elementoDoArray.vidaMaxima
}

const nomeDosPokemons = pokemons.map(callback)

console.log(nomeDosPokemons)


// _________________________________________________________filter()



// const callback = (elementoDoArray, index, array) => {
//     if (elementoDoArray.tipo === "fogo") {
//         return true 
//     }
//     return false 
// }


// const novoArray = pokemons.filter(callback)

// console.log(novoArray)






// _____________________________________________________ EXERCíCIO MAP()

// const numeros = [2, 3, 15, 22, 10]

// const novoArray = numeros.map((elementoDoArray, indexDoArray, arrayEmSi) => {
//     return `O elemento no index ${indexDoArray} é ${elementoDoArray}`
// })

// console.log(novoArray)




// _____________________________________________________ EXERCíCIO FILTER()

// const numeros = [2, 3, 15, 22, 10]


// const soPares = numeros.filter((elementoDoArray, index, array) => {
//     if (elementoDoArray % 2 === 0) {
//         return true
//     } 
//     return false
// })

// console.log(soPares)


// const maioresQue10 = numeros.filter((elementoDoArray, index, array) => {
    // // SIMPLIFICACAO DA VERIFICACAO DO FILTER:
    // return elementoDoArray > 10
    
    // // OU:
    // if (elementoDoArray > 10) {
    //     return true
    // }
    // return false
// })


// console.log(maioresQue10)
