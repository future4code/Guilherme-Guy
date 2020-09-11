import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components"


const Div = styled.div`
width: 102vw;
min-height: 102vh;
background-color:black;
margin: 0 auto;
border: solid white 1px;
`

const CardMatches = styled.div ` 
display:flex;
margin-left: 1rem;
margin-right: 1rem;
margin-top: 10px;
border-bottom: 1px solid white;
padding: 12px;
`
const NameMatch = styled.p ` 
margin-left: 1rem;
margin-top: 1.5rem;
margin-bottom: 10px;
color: #DF4723;
font-size: 1rem;`

const CleanButton = styled.button ` 
width: 10rem;
height: 1.5rem;
font-size: 1rem;
display: flex;
justify-content: center;
align-items: center;
color: black;
background-color: #DF4723;`

const CleanButtonConfig = styled.div ` 
display: flex;
justify-content: center;
margin-top: 20px;`

const PhotoMatch = styled.img `
border-radius: 50%;
width: 4rem;
height: 4rem;
`

const BackButton = styled.button ` 
width: 7rem;
height: 2rem;
font-size: 1rem;
margin: 15px;
color: black;
background-color: #DF4723;
`

export default function Matches(props) {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    getMatches();
  }, []);

  const getMatches = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guilherme/matches"
      )
      .then((response) => {
        setProfile(response.data.matches);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  const cleanMatches = () => {

    const body = {
      id: profile.id,
    }; 
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guilherme/clear", body)
      .then((response) => {
        getMatches();
        console.log("deu certo")
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  return (
  <Div>

    <BackButton onClick={props.Back}> VOLTAR </BackButton>

    {profile.map((item) => { 
      return <CardMatches key={item.id}><PhotoMatch src={item.photo} /><NameMatch>{item.name}</NameMatch> </CardMatches>
    })}
   <CleanButtonConfig>
    <CleanButton onClick={() => cleanMatches()}>Limpar Matches</CleanButton>
    </CleanButtonConfig>

  </Div>);
  }
