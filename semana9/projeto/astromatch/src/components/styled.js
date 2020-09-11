import styled from "styled-components";

export const Body = styled.label`
  display: flex;
  justify-content: center;
  align-items:center;
  z-index: 1;
`;

export const Div = styled.div`
  width: 102vw;
  min-height: 102vh;
  background-color: black;
  margin: 0 auto;
  border: solid #DF4723 1px;
`;
export const Container = styled.div`
  margin: 0 auto;
`;
export const ImagemPerfil = styled.img`
  width: 62rem;
  height: 70rem;
  display: block;
  z-index: 1;
  border: solid #DF4723 0.3px;
`;

export const Informacoes = styled.div`
  position: absolute;
  top: 72rem;
  margin-left: 15px;
  z-index: 1;
`;
export const Bio = styled.p`
  width: 61rem;
  color: white;
  font-size: 3.0rem;
  text-shadow: 2px 2px 2px black;
`;
export const Texto = styled.h3`
  color: white;
  text-shadow: 2px 2px 2px black;
  width: 50rem;
  font-size: 3.5rem;
`;
export const Bottom = styled.button`
  display: block;
  margin: 5px auto;
  cursor: pointer;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 100px;
  border: none;
  list-style: none;`

export const LikeButton = styled.button ` 
border-radius: 50%;
height:10rem;
width: 10rem;
border: none;
background-color:#DF4723; 
list-style: none;`

export const Coracao = styled.img ` 
width: 10rem;
height: 7rem;
`

export const No = styled.p ` 
font-size: 5rem;
`