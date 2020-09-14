import styled from "styled-components"

export const MainContainer = styled.div `
display: flex;
justify-content: space-evenly;
background: #F8F8FF;
height: 27vh;
`

export const ImgContainer = styled.div ` 
`

export const NavContainer = styled.div ` 
display: flex;
justify-content: space-evenly;


`
export const Text = styled.p ` 
margin: 5vw;
cursor:pointer;
&:hover {
    color:#000000;
    transition: 0.5s; 
    transform: scale(1.2); }`

export const Logo = styled.img ` 
margin-top: 4vh;
margin-left: 5vw;
`