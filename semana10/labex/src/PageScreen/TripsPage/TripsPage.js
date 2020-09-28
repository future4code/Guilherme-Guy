import {
  MainContainer,
  Body,
  TripsTotal,
  TripsContainer,
  ImgContainer,
  NameContainer,
  PlanetContainer,
  DateContainer,
  DurationContainer,
  DescriptionContainer,
  BusImg,
  Title,
  Text,
  InfosContainer,
  Button,
  ButtonContainer


} from "./styled";
import Header from "../../Components/Header/Header";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Footer from "../../Components/Footer/Footer";
import SpaceBus from "../../Img/bus.png"
import Logo from "../../Img/logo.png";
import { Animation } from "../../Components/Animation/Animation"

export default function TripsPage() {
  const [trips, setTrips] = useState([]);

  const history = useHistory();
  useEffect(() => {
    getTrips();
  }, []);
  const getTrips = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/guilherme-jackson/trips",
        {}
      )
      .then((response) => {
        console.log(response.data.trips);
        setTrips(response.data.trips);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  return (
    <MainContainer>
         <Header
          image={Logo}
          name1={"Trips"}
          name2={"Sign up"}
          name3={"Sign in"}
          name4={"Criar Viagem"}
        />

      <Body>

        <TripsContainer>
          {trips.map((item) => {
            return (
              <TripsTotal key={item.id}>

                <ImgContainer>

                <BusImg src={SpaceBus}></BusImg>
                  
                </ImgContainer>

                <InfosContainer>
                <NameContainer>
                  <Title>Viagem:</Title>
                  <Text> {item.name}</Text>
                </NameContainer>
                <PlanetContainer>
                  <Title>Planeta:</Title>
                  <Text> {item.planet}</Text>
                </PlanetContainer>
                <DateContainer>
                  <Title>Data:</Title>
                  <Text> {item.date}</Text>
                </DateContainer>
                <DurationContainer>
                  <Title>Duração:</Title>
                  <Text> {item.durationInDays} Dias</Text>
                </DurationContainer>
                <DescriptionContainer>
                  <Title>Descrição:</Title>
                  <Text> {item.description}</Text>
                </DescriptionContainer>
                </InfosContainer>

                <ButtonContainer>
                <Button>Quero Ir!</Button>
                </ButtonContainer>
 

              </TripsTotal>
            );
          })}
        </TripsContainer>
      </Body>

      <Footer />
    </MainContainer>
  );
}
