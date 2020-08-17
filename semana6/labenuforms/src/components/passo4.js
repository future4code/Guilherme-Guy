import React from 'react';
import styled from "styled-components"
import Passo1 from "./passo1.js"
import Passo2 from "./passo2.js"
import Passo3 from "./passo3.js"

const ContainerGeral1 = styled.div `
height: 40vh;
width: 40vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
background-color: white;
word-wrap: break-word;
background-color:silver;` 



class Passo4 extends React.Component {
    render() {
      return (
        <ContainerGeral1>
            <h1>FIM DO FORMULÁRIO</h1>
        <p>Obrigado por participar! Entraremos em contato!</p>
          
        </ContainerGeral1>
      );
    }
  }
  
  export default Passo4;
