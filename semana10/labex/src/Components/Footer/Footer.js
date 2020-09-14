import React from "react";
import { MainContainer, FooterTitle, Text } from "./styled";
import Rocket from "../../Img/rocket.png";

export default function Footer() {
  return (
    <MainContainer>
      <div>
        <FooterTitle>Fair-Space</FooterTitle>
        <Text>Sobre nós</Text>
        <Text>Perguntas Frequentes</Text>
        <Text>Contato</Text>
        <Text>Imprensa</Text>
      </div>
      <div>
        <FooterTitle>Transparência</FooterTitle>
        <Text>Política de Privacidade</Text>
        <Text>Política de Compliance</Text>
        <Text>Política de Segurança</Text>
        <Text>Ética & Compliance</Text>
      </div>

      <div>
        <FooterTitle>Explore</FooterTitle>
        <Text>Comunidade</Text>
        <Text>Newsletter</Text>
        <Text>Ouvidoria</Text>
        <Text>Atendimento 24h</Text>
      </div>
      <div>
        {" "}
        <img src={Rocket} width="75px"></img>
      </div>
    </MainContainer>
  );
}
