// 1)

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)

// resultado = bool1 && bool2 && bool3
// console.log("b. ", resultado)

// resultado = !resultado && (bool1 || bool1)
// console.log("c. ", resultado)

// console.log("e. ", typeof resultado)

// os resultados vão ser: 
// a. false
// b. false
// c. true
// d. boolean







// 2)

// let array
// console.log('a. ', array)

// array = null
// console.log('b. ', array)

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)

// let i = 0
// console.log('d. ', array[i])

// array[i+1] = 19
// console.log('e. ', array)

// const valor = array[i+6]
// console.log('f. ', valor)

// os resultados vão ser:
// a.  undefined
// b.  null
// c.  11
// d.  3
// e. array [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f.  9






// 3) 

// idade = prompt("Qual o a sua idade?")
// idadeAmigo = prompt("Qual a idade do seu amigo(a)?")
// resultado = Number(idade) > Number(idadeAmigo)
// diferenca = Number(idade) - Number(idadeAmigo)


// console.log("Sua idade é maior do que a do seu melhor amigo? " + resultado)
// console.log("A diferença entre as idades é: " + diferenca)






// 4)

// numero = prompt("Insira um numero par")         

// resultado = numero % 2

// console.log(resultado) // resultado sempre vai ser 0, pois qualqluer numero par divido por 2, sobra 0. 
// // se usuario digitar numero impar, o resultado é sempre 1.








// 5)

// listaDeTarefas = [] 

// listaDeTarefas[0] = prompt("Diga uma tarefa do seu dia?")
// listaDeTarefas[1] = prompt("Diga uma tarefa do seu dia?")
// listaDeTarefas[2] = prompt("Diga uma tarefa do seu dia?")

// console.log(listaDeTarefas)

// indice = prompt("Digite numero da tarefa que já realizou 0, 1 ou 2")

// listaDeTarefas.splice(indice, 1)

// console.log(listaDeTarefas)



// 6)

 nomeDoUsuario = prompt("Qual o seu  nome?")
 emailDoUsuario = prompt("Qual o seu email?")

 console.log("O email " + emailDoUsuario + "foi cadastrado com sucesso. Seja bem vindo " + nomeDoUsuario)


















