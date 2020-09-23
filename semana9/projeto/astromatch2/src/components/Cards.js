import React, { useState, useEffect } from "react";
import axios from "axios";
import {Body, Container, ImagemPerfil, Informacoes, Texto, Bio, Div, LikeButton, ImgContainer, Coracao, No} from "./styled";
import NavBar from "./NavBar";
import Logo from "./img/logo.png";
import Heart from "./img/coracao.png"

export default function Cards(props) {

  const [profile, setProfile] = useState({});

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    const request = axios.get(
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guilherme/person"
    );

    request
      .then((response) => {
        console.log(response.data);
        console.log("Deu get");
        setProfile(response.data.profile);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  const choosePerson = (choice) => {
    const body = {
      id: profile.id,
      choice: choice,
    };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/guilherme/choose-person",
        body
      )
      .then((response) => {
        console.log(response.data);
        getProfile();
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  return (
    <Div>
      <NavBar imagem={Logo} Add={props.Add} />

      <Body>
        <Container>
          <ImagemPerfil src={profile.photo} />
          <Informacoes>
            <Texto>
              {profile.name}, {profile.age}
            </Texto>
            <Bio>{profile.bio}</Bio>
          </Informacoes>
        </Container>
      </Body>

      <ImgContainer>

        <LikeButton onClick={() => choosePerson(false)}><No>X</No></LikeButton>
    
        <LikeButton  onClick={() => choosePerson(true)} >
          <Coracao src={Heart}></Coracao>
       </LikeButton>
    

      </ImgContainer>
    </Div>
  );
}
