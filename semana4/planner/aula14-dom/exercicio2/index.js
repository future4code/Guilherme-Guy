let cliques = 0

function clicouNoBotao() {
    cliques += 1
    
    const meuContainer = document.getElementById("container")
    meuContainer.innerHTML = `<p>${cliques}</p>`
}