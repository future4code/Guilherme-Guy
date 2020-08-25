import React from 'react';
import axios from "axios";
import styled from 'styled-components'

const Container = styled.div `
color: blue;` 

const BotaoSalvar =  styled.button`
color: red;`




export default class App extends React.Component {
  state = {
    name: "",
    email: "",
    usuarios:[]
  };


getUsers = () => {
  const request = axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
          headers:{
              Authorization: "guilherme-guy-jackson"
          }
      }
  )
  request
      .then((resposta) => {
          this.setState({usuarios: resposta.data})
      })
      .catch((erro) => {
          console.log(erro)
      })
}
componentDidMount(){
    this.getUsers()
}

addUsuario = () => {
  const body = {
    name: this.state.nomePlaylist
  };

  const request = axios.post(
    "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
    body,
    {
      headers: {
        Authorization: "leticia-chijo"
      }
    }
  );}




  
  render()
  {
    const onChangeInputName = (event) => {
      this.setState({name: event.target.value})
    }
    const onChangeInputEmail = (event) => {
      this.setState({email: event.target.value})
    }
      console.log(this.state.name)
      console.log(this.state.email)
    return (
        <Container>
          <div>
              <label forHtml="name">Nome: </label>
              <input value={this.state.name} onChange={onChangeInputName}/>
          </div>
          <div>
              <label forHtml="email">Email: </label>
              <input value={this.state.email} onChange={onChangeInputEmail}/>
          </div>
          <BotaoSalvar onClick={this.usuario}>Salvar</BotaoSalvar>   
        </Container>
      );
  }
}