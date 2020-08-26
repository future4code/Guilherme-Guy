import React from 'react';
import axios from "axios";
import styled from 'styled-components'

const Container = styled.div `
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  width: 20%;
  margin: 0 auto;
  padding: 30px;
  align-items: center;
  margin-top:50px;` 

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
    name: this.state.name,
    email: this.state.email
  };

  const request = axios.post(
    "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
    body,
    {
      headers: {
        Authorization: "guilherme-guy-jackson"
      }
    }
  ); request 
  .then((resposta) =>{
    this.getUsers()
    alert("Salvo com Sucesso")
    this.setState({name:""})
    this.setState({email:""})
  })
  .catch((erro) => {
    alert("Verificar Nome ou E-mail")
  })
}

  





  
  render()
  {
    const onChangeInputName = (event) => {
      this.setState({name: event.target.value})
    }
    const onChangeInputEmail = (event) => {
      this.setState({email: event.target.value})
    }

    return (
        <Container>
          <div>
              <label>Nome: </label>
              <input value={this.state.name} onChange={onChangeInputName}/>
          </div>
          <div>
              <label>Email: </label>
              <input value={this.state.email} onChange={onChangeInputEmail}/>
          </div>
          <BotaoSalvar onClick={this.addUsuario}>Salvar</BotaoSalvar> 

          {this.state.usuarios.map((item) => {
                return <li key={item.id}>{item.name}</li>

        })}  

      
        </Container>
      );
  }
}