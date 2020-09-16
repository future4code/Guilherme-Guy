import styled from "styled-components";

export const Body = styled.div ` 
display: flex;
justify-content: center;
align-items: center;
height: 60vh;
background: black;`;

export const ImgAstronauta = styled.img `
width: 16rem;
height: 16rem;
@media screen and (min-width: 200px) and (max-width: 766px) {
    width: 8rem;
    height: 10rem;
  
  }`

export const Text = styled.p ` 
color: white;
font-size: 2rem;
margin-right: 5vw;

@media screen and (min-width: 200px) and (max-width: 766px) {
    font-size: 0.7rem;
  }`

