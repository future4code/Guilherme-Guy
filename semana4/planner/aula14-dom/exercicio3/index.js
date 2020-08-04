function adicionarItem() {
    const meuInput = document.getElementById("meu-input")
    let valor = meuInput.value

    const minhaLista = document.getElementById("lista-de-compras")
    minhaLista.innerHTML += `<li>${valor}</li>`
    meuInput.value = ""
}