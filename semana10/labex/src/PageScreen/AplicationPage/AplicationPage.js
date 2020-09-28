import React, { useState, useEffect } from 'react'
import { goBack } from "../../Router/Router";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../Components/Url/Url";
import { useForm } from "../../Hooks/useForm";


const AplicationPage = () => {
    const { form, onChange } = useForm(
        { name: "", age: "", aplicationText: "", profission: "", country: ""}
    );
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        onChange(name, value);
    };

    const history = useHistory();
    const handleAplicationPage = (event) => {
        event.preventDefault();
        const body = {
            name: form.name,
            age: form.age,
            aplicationText: form.aplicationText,
            profission: form.profission,
            country: form.country,
            trip: form.trip,
        }
        console.log("o que esse fazzzzzzz", body)
        axios
            .post(`${BASE_URL}/trips`, body, {
                headers: {
                    auth: localStorage.getItem("token")
                }
            })
            .then((response) => {
                console.log("caiu aki no create???", response.data)
                alert("Parabéns, Viagem cadastrada com sucesso")
            })
            .catch((err) => {
                console.log("hummmm caiu aki nesse", err);
            });
    };
    return (
        <div>
            <h1>Inscreva-se</h1>
            <form onSubmit={handleAplicationPage}>
                <input
                    value={form.name}
                    type="text"
                    name="name"
                    placeholder="Nome"
                    required
                    onChange={handleInputChange}
                />
                {/* <input
                    value={form.planet}
                    type="text"
                    name="planet"
                    placeholder="planetas"
                    required
                    onChange={handleInputChange}
                /> */}
                <select name="planet" id="planet" onChange={handleInputChange} value={form.planet} >
                    <option value={""}></option>
                    <option value={"venus"} >Vênus</option>
                    <option value={"marte"}>Marte</option>
                    <option value={"Jupter"}>Júpiter</option>
                    <option value={"saturno"}>Saturno</option>
                    <option value={"urano"}>Urano</option>
                    <option value={"netuno"}>Netuno</option>
                    <option value={"plutao"}>Plutão</option>
                </select>
                <input
                    value={form.date}
                    type="date"
                    name="date"
                    placeholder="Data"
                    required
                    onChange={handleInputChange}
                />
                <input
                    value={form.description}
                    type="text"
                    name="description"
                    placeholder="descrição"
                    required
                    onChange={handleInputChange}
                />
                <input
                    value={form.durationInDays}
                    type="number"
                    name="durationInDays"
                    placeholder="duração em dias"
                    min="50"
                    title="precisa ser no minímo 50 dias"
                    required
                    onChange={handleInputChange}
                />
                <button>Fazer Login</button>
            </form>
            <button onClick={() => goBack(history)}>Voltar create</button>
        </div>
    );
}
export default AplicationPage;