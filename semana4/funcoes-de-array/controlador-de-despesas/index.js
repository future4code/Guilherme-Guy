
const arrayArquivo = []
const valoresFilstrados = []
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

        
        arrayArquivo.push(despesas)

        const ultimo = arrayArquivo[arrayArquivo.length - 1]

        const exibicao = document.getElementById("exibicao")
    
        exibicao.innerHTML += `<p>${ultimo.tipo} ${ultimo.valor} R$</p>`
    
    document.getElementById("valor-despesa").value = ''
    document.getElementById("descricao-despesa").value = ''
    }
}








function filtraDespesas () {
    const maxMin = {
        minimo:document.getElementById("minimo-despesa").value,
        maximo:document.getElementById("maximo-despesa").value,
    }    

    for(i=0;i<arrayArquivo.length;i++) {
    if(arrayArquivo[i].valor >= Number(maxMin.minimo) && arrayArquivo[i].valor <= Number(maxMin.maximo) && document.getElementById("tipo-despesa").value === "energia") {
        valoresFilstrados.push(arrayArquivo[i].valor)
      
    } else {
        console.log("aiaia")
    }
  
}
    

    console.log(valoresFilstrados)
}





function apagaFiltros () {

    document.getElementById("minimo-despesa").value = ''
    document.getElementById("maximo-despesa").value = ''

}










function calculaTotal () {
            let total = 0
            console.log(arrayArquivo[0].valor)
            
            for(i=0; i<arrayArquivo.length; i++) {
            total += Number(arrayArquivo[i].valor)
            }
            const totalContas = document.getElementById("total")
            totalContas.innerHTML += `<p>O valor total foi ${total} R$</p>`
        }


