import React from 'react'
import axios from "axios";
import styled from 'styled-components'

const ContainerGeral = styled.div `
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  width: 400px;
  margin: 0 auto;
  margin-top:5vh;
  background-color: orange;
`
const ContainerConteudo = styled.div `
margin-left: 1vw;
`
const ContainerTop= styled.div `
`


const Input = styled.input ` 
width:200px;
height:25px;
word-wrap: break-word;`

const Botao = styled.button ` 
width:192px;
height: 30px;
word-wrap: break-word;`

const Texto = styled.p ` 
font-size: 1rem;
word-wrap: break-word;
`



class App extends React.Component {


  state = {
    bairro: "",
    cep: "",
    ddd: "",
    localidade: "",
    logradouro: "",
    uf: ""
  }

  

  buscarCep = () => {
    axios
      .get(`https://viacep.com.br/ws/${this.state.cep}/json/unicode/`)
      .then((resposta) => {
        this.setState({
          bairro: resposta.data.bairro,
          cep: resposta.data.cep,
          ddd: resposta.data.ddd,
          localidade: resposta.data.localidade,
          logradouro: resposta.data.logradouro,
          uf: resposta.data.uf
        })
        if (this.state.cep.length) {
        }
      })

      .catch((erro) => {
      alert ("CEP não encontrado")
      this.setState({ cep: ""})
      });
       };


      onChangeCep = (event) => {
       const novoCep = event.target.value;
       this.setState({ cep: novoCep,
     });
     };
       render () {
       return (
      <ContainerGeral>
        <ContainerTop>
        <Input
          maxLength = "8"
          placeholder="Digite o CEP (apenas números)"
          type="number"
          value={this.state.cep}
          onChange={this.onChangeCep}
        />
         <Botao onClick={this.buscarCep}>Buscar</Botao>
         </ContainerTop>
         <ContainerConteudo>
        <Texto>
          <strong>Bairro:{this.state.bairro}</strong>
        </Texto>
        <Texto>
          <strong>CEP:{this.state.cep}</strong>
        </Texto>
        <Texto>
          <strong>DDD:{this.state.ddd}</strong>
        </Texto>
        <Texto>
          <strong>Localidade:{this.state.localidade}</strong>
        </Texto>
        <Texto>
          <strong>Logradouro:{this.state.logradouro}</strong>
        </Texto>
        <Texto>
          <strong>UF:{this.state.uf}</strong>
        </Texto>
        </ContainerConteudo>
      </ContainerGeral>
    );
  }
}
export default App






