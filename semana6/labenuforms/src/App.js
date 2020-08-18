import React from 'react';
import styled from "styled-components"
import Passo1 from "./components/passo1.js"
import Passo2 from "./components/passo2.js"
import Passo3 from "./components/passo3.js"
import Passo4 from "./components/passo4.js"

const ContainerGeral = styled.div `
height: 100vh;
width: 40vw;
border: 1px solid black;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
margin-left: 28vw;
background-color: white;
word-wrap: break-word;
background-color:silver;` 



class App extends React.Component {
  state = {
    etapa: 1
  };

  proximaEtapa = () => {
    this.setState({ etapa: this.state.etapa + 1});
  };

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Passo1 />;
      case 2:
        return <Passo2 />;
      case 3:
        return <Passo3 />;
      case 4:
        return <Passo4 />;
      default:
    }
  }
  
  render() {
    return (
      <body>
      <ContainerGeral>
      {this.renderizaEtapa()}
      <br />
      {this.state.etapa !== 4 && (
        <button onClick={this.proximaEtapa}>Próxima etapa</button>
      )}
    </ContainerGeral>
    </body>
    );
    }
  }

export default App;
