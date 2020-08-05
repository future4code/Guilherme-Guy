const arrayObjetos = []

function apertouBotao () { 
    const post = {
        titulo: document.getElementById("titulo-post").value,
        autor: document.getElementById("autor-post").value,
        imagem: document.getElementById("imagem-post").value,
        conteudo: document.getElementById("conteudo-post").value,
        }

        arrayObjetos.push(post)

        const container = document.getElementById("container-de-posts")
        container.innerHTML += `<br><h1>Titulo:${post.titulo}</h1>`
        container.innerHTML += `<p>Autor:${post.autor}</p><br>`
        container.innerHTML += `<img src=${post.imagem}>`
        container.innerHTML += `<p>Conteudo:${post.conteudo}</p><br>`
        container.innerHTML += `<br>`

        document.getElementById("titulo-post").value = ''
        document.getElementById("autor-post").value = ''
        document.getElementById("imagem-post").value = ''
        document.getElementById("conteudo-post").value = ''
    }