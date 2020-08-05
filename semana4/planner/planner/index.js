function adicionarItem() {


    const itemLista = document.getElementById("tarefa")
    let valor = itemLista.value
    const diasSemana = document.getElementById("dias-semana").value

    if (itemLista.value === "") {
        alert("Por favor digite algo") }

    else if(diasSemana === "domingo") {
    const minhaLista = document.getElementById("domingo")
    minhaLista.innerHTML += `<li id="abc">${valor}</li>`}   
    
    else if (diasSemana === "segunda") {
    const minhaLista = document.getElementById("segunda")
    minhaLista.innerHTML += `<li>${valor}</li>`}

    else if (diasSemana === "terca") {
    const minhaLista = document.getElementById("terca")
    minhaLista.innerHTML += `<li>${valor}</li>` }

    else if (diasSemana === "quarta") {
    const minhaLista = document.getElementById("quarta")
    minhaLista.innerHTML += `<li>${valor}</li>`}

    else if (diasSemana === "quinta") {
    const minhaLista = document.getElementById("quinta")
    minhaLista.innerHTML += `<li>${valor}</li>`}

    else if (diasSemana === "sexta") {
    const minhaLista = document.getElementById("sexta")
    minhaLista.innerHTML += `<li>${valor}</li>`}

    else if (diasSemana === "sabado") {
    const minhaLista = document.getElementById("sabado")
    minhaLista.innerHTML += `<li>${valor}</li>` }

    itemLista.value = "" 
}


function limpeza() {
    const paragraphs = document.getElementsByTagName('li')
    for (var i = paragraphs.length - 1; i >= 0; --i) {
        paragraphs[i].remove();
      }
    
    }