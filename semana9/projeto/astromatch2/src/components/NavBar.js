import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Logo from './img/logo.png'


const NavBarConfig = styled.div ` 
display: flex;
justify-content:space-evenly;
padding-top: 5px;
align-items: center;`

const LogoConfig = styled.img ` 
width: 10rem;
height:10rem;`

const Botao2 = styled.button ` 
width: 10rem;
height:3rem;
color: black;
font-size: 2rem;
background-color: #DF4723;`


export default function NavBar(props) {
    
    return (
        <NavBarConfig>
            <LogoConfig src={props.imagem}></LogoConfig>
            <Botao2 onClick={props.Add}>Matches</Botao2>
        </NavBarConfig>
    )
}