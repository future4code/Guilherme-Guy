import React from 'react';
import styled from "styled-components"
import Passo2 from "./passo2.js"
import Passo3 from "./passo3.js"
import Passo4 from "./passo4.js"

const ContainerGeral1 = styled.div `
height: 41vh;
width: 40vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
background-color: white;
word-wrap: break-word;
background-color:silver;` 

const Pergunta = styled.p `
display:flex;
align-items:center;`

class Passo1 extends React.Component {
    render() {
      return (
        <ContainerGeral1> 
            <h1>ETAPA 1 - INFORMAÇÕES GERAIS</h1>
            <Pergunta>Qual o seu nome?</Pergunta>
            <input></input>
            <p>Qual a sua idade?</p>
            <input></input>
            <p>Qual o seu email?</p>
            <input></input>
            <p>Qual a sua escolaridade?</p>
            <select>
                <option>Ensino médio incompleto</option>
                <option>Ensino médio completo</option>
                <option>Ensino superior incompleto</option>
                <option>Ensino superior completo</option>
            </select>

            <br></br>
        </ContainerGeral1>
    
      );
    }
  }
  
  export default Passo1;
