import React, { Component } from 'react'

export default class Botao extends React.Component {
  
  render() {
    return (
      <div>

<h1>Musicas da Playlist Selecionada</h1>

{this.props.musicas.map((list) => {
 return (
   <div>

  <p key={list.id} value={list.id}>
 {list.name}
 

  </p>
  </div>
  );
  })}

  <button>Deletar</button>

        
      </div>
    )
  }
}

