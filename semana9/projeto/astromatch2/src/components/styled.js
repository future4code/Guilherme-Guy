import styled from "styled-components";

export const Body = styled.label`
  display: flex;
  justify-content: center;
  align-items:center;
  z-index: 1;
`;

export const Div = styled.div`
  width: 100vw;
  min-height: 10vh;
  background-color: black;
  margin: 0 auto;
  border: solid #DF4723 1px;
`;
export const Container = styled.div`
  margin: 0 auto;
`;
export const ImagemPerfil = styled.img`
  width: 27rem;
  height: 25rem;
  display: block;
  z-index: 1;
  border: solid #DF4723 0.3px;
`;

export const Informacoes = styled.div`
  position: absolute;
  top: 31rem;
  margin-left: 15px;
  z-index: 1;
`;
export const Bio = styled.p`
  width: 27rem;
  color: white;
  font-size: 1rem;
  text-shadow: 2px 2px 2px black;
`;
export const Texto = styled.h3`
  color: white;
  text-shadow: 2px 2px 2px black;
  width: 15rem;
  font-size: 1.5rem;
`;
export const Bottom = styled.button`
  display: block;
  margin: 5px auto;
  cursor: pointer;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
  border: none;
  list-style: none;
  height: 10rem;
  margin-top: 50px;`

export const LikeButton = styled.button ` 
border-radius: 50%;
height:5rem;
width: 5rem;
border: none;
background-color:#DF4723; 
list-style: none;`

export const Coracao = styled.img ` 
width: 5rem;
height: 4rem;
`

export const No = styled.p ` 
font-size: 3rem;
`