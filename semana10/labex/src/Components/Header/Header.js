import React from 'react'
import { MainContainer, ImgContainer, NavContainer, Text, Logo } from './styled'
import Rocket from "../../Img/rocket.png"
import { goToTripsPage, goToLoginPage } from "../../Router/Router"
import { useHistory } from "react-router-dom"


export default function Header(props) {

  const history = useHistory()


  return (

    <MainContainer>
    <ImgContainer>
    <Logo src={props.image}/>
    </ImgContainer>
    <NavContainer>
    <Text onClick={() => goToTripsPage(history)}> <strong>{props.name1}</strong> <img src={Rocket} width="15px" ></img></Text>
    <Text> <strong>{props.name2}</strong> <img src={Rocket} width="15px"></img></Text>
    <Text onClick={() => goToLoginPage(history)}> <strong>{props.name3}</strong> <img src={Rocket} width="15px"></img></Text>
    </NavContainer>
    </MainContainer>
  );
}