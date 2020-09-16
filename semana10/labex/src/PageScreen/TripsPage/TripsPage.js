import {
  MainContainer,
  Body,
  AnimationContainer,
  TripsContainer,
} from "./styled";
import Header from "../../Components/Header/Header";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Footer from "../../Components/Footer/Footer";
import { Animation } from "../../Components/Animation/Animation";

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
      <Header />

      <Body>
        <AnimationContainer>
          <Animation />
        </AnimationContainer>

        <TripsContainer>
          {trips.map((item) => {
            return (
              <div key={item.id}>
                <div>
                  <h1>Planeta:</h1>
                  <h2> {item.planet}</h2>
                </div>
                <hr />
              </div>
            );
          })}
        </TripsContainer>
      </Body>

      <Footer />
    </MainContainer>
  );
}
