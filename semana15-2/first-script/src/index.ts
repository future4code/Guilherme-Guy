// EXERCICIO 1
// a) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?
// let minhaString: string = "Guilherme"
// console.log(minhaString)
// minhaString = 9
// Aparece um erro, pois o tipo definido para essa variável é string, ela aceita apenas strings. 



// b) Crie uma variável meuNumero do tipo number e atribua um valor numérico. Como podemos fazer para que essa variável também aceite strings?
// let meuNumero: (number | string) = 10
// console.log(meuNumero)
// meuNumero = "guilherme"
// console.log(meuNumero)



// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// type info = {
//    nome: string,
//    idade: number,
//    corFavorita: string
//  }

// const pessoa: info = {
//     nome: "Guilherme",
//     idade: 26,
//     corFavorita: "Azul"

// }
// console.log(pessoa)



// d) Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.

// type info = {
//    nome: string,
//    idade: number,
//    corFavorita: string
//  }

// const pessoa: info[] = [{
//     nome: "Guilherme",
//     idade: 26,
//     corFavorita: "Azul"

// },{
//     nome: "Daniel",
//     idade: 32,
//     corFavorita: "Preto"
// },
// {
//     nome: "Luccas",
//     idade: 26,
//     corFavorita: "Verde"
// }]
// console.table(pessoa)



// e) Modifique o tipo de objeto para que possamos apenas escolher entre as cores do arco-íris. Utilize um enum para isso.

// enum CORES_DO_ARCO_IRIS {
//     VERMELHO = "Vermelho",
//     LARANJA = "Laranja",
//     AMARELO = "Amarelo",
//     VERDE = "Verde",
//     AZUL = "Azul",
//     ANIL = "Anil",
//     VIOLETA = "Violeta"
// }

// type info = {
// nome: string,
// idade: number,
// corFavorita: string
//  }
// ​
// const pessoa: info[] = [{
//     nome: "Guilherme",
//     idade: 26,
//     corFavorita: CORES_DO_ARCO_IRIS.AZUL

// },{
//     nome: "Daniel",
//     idade: 32,
//     corFavorita: CORES_DO_ARCO_IRIS.AMARELO
// },
// {
//     nome: "Luccas",
//     idade: 26,
//     corFavorita: CORES_DO_ARCO_IRIS.VIOLETA
// }]
// console.table(pessoa)





// EXERCICIO 2:
// a-b-c)

// type amostraIdades = {
//     numeros: number[],
//     obterEstatisticas: (numeros:number) => object
// }
// function obterEstatisticas(numeros: number[]) {
//     const numerosOrdenados:number[] = numeros.sort(
//         (a:number, b:number) => a - b
//     )
//     let soma:number = 0
//     for (let num of numeros) {
//         soma += num
//     }
//     const estatisticas:object = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }
//     return estatisticas
// }

// console.table(obterEstatisticas([0,10]))



// EXERCICIO 3:

type post = {autor: string, texto: string}
​
const posts: post[] = [
 {
     autor: "Alvo Dumbledore",
     texto: "Não vale a pena viver sonhando e se esquecer de viver"
  },
  {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
  },
  {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
  },
  {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
  },
  {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
  }
]
​
function buscarPostsPorAutor(posts:post[], autorInformado:string) {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )}

   console.table(buscarPostsPorAutor(posts, "Dobby"))
   console.table(posts)


// EXERCICIO 5:

// function estatisticas(numero1: number, numero2: number) {
//   const som = numero1 + numero2
//   const sub = numero1 - numero2
//   const mult = numero1 * numero2

//   console.log("A soma entre os numeros é: " + som)
//   console.log("A subtração entre os numeros é: " + sub)
//   console.log("A multiplicação entre os numeros é: " + mult)

//   if(numero1 > numero2) {
//     console.log("O maior é: " + numero1)
//   } else if (numero2 > numero1) {
//     console.log("O maior é: " + numero2)
//   } else {
//     console.log("Os numeros são iguais")
//   }
// }
// estatisticas(5, 10)











