
const arrayArquivo = []
function cadastraDespesa () { 

  if (document.getElementById("descricao-despesa").value === '' || document.getElementById("valor-despesa").value <= 0) {
     alert("Por favor, digite um valor real")
     }
    else {
    const despesas =  {
       valor: document.getElementById("valor-despesa").value,
       tipo: document.getElementById("tipo-despesa").value,
       descricao: document.getElementById("descricao-despesa").value,
        }

        console.log(despesas)

      
        arrayArquivo.push(despesas)

        console.log(arrayArquivo)
    }

    //   const exibicao = document.getElementById("exibicao")
    //     exibicao.innerHTML += `<p>${despesas.valor}</p>`

    document.getElementById("valor-despesa").value = ''
    document.getElementById("descricao-despesa").value = ''
}

function filtraDespesas () {
    const maxMin = {
        minimo:Number(document.getElementById("maximo-despesa")),
        maximo:Number(document.getElementById("minimo-despesa")),
    }    

    for(i=0; i<arrayArquivo.length;i++) {
    if(arrayArquivo.valor <= maxMin.maximo && arrayArquivo.valor >= maxMin.minimo) {
        const novoArray = []
        novoArray.push(arrayArquivo[i].valor)
        console.log(novoArray)
    } else {
        console.log("oi")
    }
}
}









function apagaFiltros () {

}

  // const container = document.getElementById("container-de-posts")
        // container.innerHTML += `<br><h1>Titulo:${post.titulo}</h1>`
        // container.innerHTML += `<p>Autor:${post.autor}</p><br>`
        // container.innerHTML += `<img src=${post.imagem}>`
        // container.innerHTML += `<p>Conteudo:${post.conteudo}</p><br>`
        // container.innerHTML += `<br>`


