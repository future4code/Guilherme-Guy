import React from 'react';
import styled from "styled-components"
import Passo1 from "./passo1.js"
import Passo2 from "./passo2.js"
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


class Passo3 extends React.Component {
    render() {
      return (
        <ContainerGeral1>
            <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
        <p>7. Por que você não terminou um curso de graduação?</p>
        <input></input>
        <p>8. Você fez algum curso complementar?</p>
        <select>
                <option>Nenhum</option>
                <option>Curso Técnico</option>
                <option>Curso de Ingles</option>
            </select>
          
        </ContainerGeral1>
      );
    }
  }
  
  export default Passo3;
