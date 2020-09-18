import React from "react";
import Header from "../../Components/Header/Header";
import Logo from "../../Img/logo.png";
import Footer from "../../Components/Footer/Footer";
import { Body, ImgAstronauta, Text } from './styled'
import Astronauta from '../../Img/astronauta.png'

export default function HomePage() {
  return (
    <div>
      <div>
        <Header
          image={Logo}
          name1={"Trips"}
          name2={"Sign up"}
          name3={"Sign in"}
          name4={"Criar Viagem"}
        />

        <Body>
            <Text> Bem-vindo a maior empresa de viagens espaciais</Text>
            <ImgAstronauta src={Astronauta}></ImgAstronauta>
        </Body>




        <Footer />
      </div>
    </div>
  );
}
