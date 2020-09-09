import React, { useState } from 'react';
import axios from "axios"
import styled from "styled-components"

const Body = styled.div `
width: 100%;
height:100%;
z-index: 1;
`


const Container = styled.div ` 
width: 25%;
height:30%;
background-color: red;`

const ImagemPerfil = styled.img `
width: 250px;
height: 300px;
display: block;
z-index: 1;`

const Informacoes = styled.div ` 
position:absolute;
top:100px;`

const Texto = styled.p ` 
word-wrap: break-word;`

const Bio = styled.p `
width: 18vw;
color: white;
font-size: 0.8rem;
margin-left: 5px;
text-shadow: 1px black;
`

export default function Cards() {
    const [profile, setProfile] = useState("")
    const [profile1, setProfile1] = useState("")
    const [profile2, setProfile2] = useState("")
    const [profile3, setProfile3] = useState("")
    const getProducts = () => {
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/daniel/person", {
            })
            .then((response) => {
                console.log(response.data)
                setProfile(response.data.profile.photo)
                setProfile1(response.data.profile.age)
                setProfile2(response.data.profile.name)
                setProfile3(response.data.profile.bio)
            })
            .catch((erro) => {
                console.log(erro);
            });
    };
    


    return (
        <Body>
            <button onClick={getProducts}>add</button>
            <Container>
                <ImagemPerfil src={profile} width= {"200px"} heigth={"200px"} /> 

                <Informacoes>
                <h3>{profile1}</h3>
                 <Texto>{profile2}</Texto> 
                 <Bio>{profile3}</Bio> 
                 </Informacoes>
            </Container>
        </Body>
    )
}