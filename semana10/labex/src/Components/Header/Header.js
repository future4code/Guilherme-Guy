import React from 'react'
import { MainContainer, ImgContainer, NavContainer, Text, Logo } from './styled'
import Rocket from "../../Img/rocket.png"


export default function Header(props) {
  return (

    <MainContainer>
    <ImgContainer>
    <Logo src={props.image}/>
    </ImgContainer>
    <NavContainer>
    <Text> <strong>{props.name1}</strong> <img src={Rocket} width="15px"></img></Text>
    <Text> <strong>{props.name2}</strong> <img src={Rocket} width="15px"></img></Text>
    <Text> <strong>{props.name3}</strong> <img src={Rocket} width="15px"></img></Text>
    </NavContainer>
    </MainContainer>
  );
}