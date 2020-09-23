import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Logo from './img/logo.png'


const NavBarConfig = styled.div ` 
display: flex;
justify-content:space-evenly;
padding-top: 5px;
align-items: center;`

const LogoConfig = styled.img ` 
width: 15rem;
height:15rem;`

const Botao2 = styled.button ` 
width: 15rem;
height:5rem;
color: black;
font-size: 3rem;
background-color: #DF4723;`


export default function NavBar(props) {
    
    return (
        <NavBarConfig>
            <LogoConfig src={props.imagem}></LogoConfig>
            <Botao2 onClick={props.Add}>Matches</Botao2>
        </NavBarConfig>
    )
}