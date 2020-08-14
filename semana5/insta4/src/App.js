import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from "styled-components";



class App extends React.Component {




  state = {
    pessoas: [
      {
        nomeUsuario: 'Paula',
        fotoUsuario: 'https://picsum.photos/60/100',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'Alexandra',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/240/150'
      },
      {
        nomeUsuario: 'Guilheme',
        fotoUsuario: 'https://picsum.photos/20/35',
        fotoPost: 'https://picsum.photos/270/150'
      }
    ],

    valorInputUsuario: "",
    valorInputImagem: "",
    valorInputPost: ""
  };





  adicionaPost = () => {
    const novoPost = {
    
      nomeUsuario: this.state.valorInputUsuario,
 
      fotoUsuario: this.state.valorInputImagem,

      fotoPost: this.state.valorInputPost
    };

    const novaPostagem = [...this.state.pessoas, novoPost];

    this.setState({ pessoas: novaPostagem});
  };



  

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputImagem = (event) => {
    this.setState({ valorInputImagem: event.target.value });
  };

  onChangeInputPost = (event) => {
    this.setState({ valorInputPost: event.target.value });
  };


  


  render() {

    const listaDeComponentes = this.state.pessoas.map((pessoas) => {
    
      return (
        <Post
        nomeUsuario={pessoas.nomeUsuario}
        fotoUsuario={pessoas.fotoUsuario}
        fotoPost={pessoas.fotoPost}
      />
       
      );
    });
    
    return (

  

      <div className={'app-container'}>

<div>
          <input
         
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Nome do Usario"}
          />
          <input
           
            value={this.state.valorInputImagem}
            onChange={this.onChangeInputImagem}
            placeholder={"Imagem do Perfil"}
          />

          <input
            value={this.state.valorInputPost}
            onChange={this.onChangeInputPost}
            placeholder={"Imagem a ser postada"}
          />
          <button onClick={this.adicionaPost}>Adicionar</button>
        </div>

         <div>{listaDeComponentes}</div>
   
      </div>
    );
  }
}
export default App;