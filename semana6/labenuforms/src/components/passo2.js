import React from 'react';
import styled from "styled-components"
import Passo1 from "./passo1.js"
import Passo3 from "./passo3.js"
import Passo4 from "./passo4.js"

const ContainerGeral1 = styled.div `
height: 25vh;
width: 40vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
background-color: white;
word-wrap: break-word;
background-color:silver;` 

class Passo2 extends React.Component {
    render() {
      return (
        <ContainerGeral1>
            <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
        <p>5. Qual curso?</p>
        <input></input>
        <p>6. Qual a unidade de ensino?</p>
        <input></input>
          
        </ContainerGeral1>
      );
    }
  }
  
  export default Passo2;
