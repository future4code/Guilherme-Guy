import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Logo from '../../Images/logo.png'
import { LogoImage, ButtonsDiv, InputsDiv, ImageLogin, Container, InputConfig } from './styled'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { useForm } from "../../Hooks/useForm"


const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ff0000",
    },
  },
});

function SignInPage() {

  const { form, onChange, resetState } = useForm({ senha: "", email: "", username: "" });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };
  const history = useHistory();


  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      history.push("/feed");
    }
  }, [history]);
  const handleSignUp = (event) => {
    event.preventDefault()
    resetState()
    const body = {
      email: form.email,
      password: form.senha,
      username: form.username
    };
    axios
      .post("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup", body)
      .then((response) => {
        console.log("caiu aki nesse loginPage???", response.data)
        window.localStorage.setItem("token", response.data.token);
        history.push("/feed");
      })
      .catch((err) => {
        console.log("hummmm caiu aki", err);
      });
  };










  return (
    <Container>
      <ThemeProvider theme={theme}>
        <LogoImage src={Logo} />
        <form onSubmit={handleSignUp}>
          <InputsDiv>
            <InputConfig>

              <InputLabel>Nome</InputLabel>
              <Input
                value={form.username}
                type="name"
                name="username"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
                onChange={handleInputChange}
                fullWidth="bool"></Input>
            </InputConfig>
            <InputConfig>
              <InputLabel>E-mail</InputLabel>
              <Input
                fullWidth="bool"
                value={form.email}
                type="email"
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
                onChange={handleInputChange}
              ></Input>
            </InputConfig>
            <InputConfig>
              <InputLabel>Senha</InputLabel>
              <Input
                fullWidth="bool"
                value={form.senha}
                type="password"
                name="senha"
                placeholder="senha"
                required
                onChange={handleInputChange}
            ></Input>
            
          </InputConfig>
        
        </InputsDiv>
        <ButtonsDiv>
          <Button onClick={handleSignUp} fullWidth="bool" size="medium" variant="contained" color="primary">Cadastre-se</Button>
        </ButtonsDiv>
        </form>
      
      </ThemeProvider>

    </Container >
  );
}

export default SignInPage;