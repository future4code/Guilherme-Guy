const meuContainer = document.getElementById("meu-container")

for (let i = 0; i < 5; i++) {
    meuContainer.innerHTML += `<p class='texto-azul'>Texto ${i}</p>`
}

console.log(meuContainer)