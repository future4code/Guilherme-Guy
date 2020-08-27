import React from 'react'
import axios from "axios";
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
          alert("CEP encontrado")
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
      <div >
        <input
          maxLength = "8"
          placeholder="Digite seu CEP"
          type="number"
          value={this.state.cep}
          onChange={this.onChangeCep}
        />
        <p>
          <strong>Bairro:{this.state.bairro}</strong>
        </p>
        <p>
          <strong>CEP:{this.state.cep}</strong>
        </p>
        <p>
          <strong>DDD:{this.state.ddd}</strong>
        </p>
        <p>
          <strong>Localidade:{this.state.localidade}</strong>
        </p>
        <p>
          <strong>Logradouro:{this.state.logradouro}</strong>
        </p>
        <p>
          <strong>UF:{this.state.uf}</strong>
        </p>
        <button onClick={this.buscarCep}>Buscar</button>
      </div>
    );
  }
}
export default App






