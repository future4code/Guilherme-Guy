import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Logo from '../../Images/logo.png'
import { useHistory } from "react-router-dom";
import LoginImage from '../../Images/loginimg.png'
import { LogoImage, ButtonsDiv, InputsDiv, ImageLogin, Container, InputConfig } from './styled'
import { goToSignInPage } from "../../Router/Router"
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useForm } from "../../Hooks/useForm";






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

function LoginPage() {

  const { form, onChange, resetState } = useForm({ senha: "", email: ""});
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
        <form>
        <InputsDiv>
          <InputConfig>
            <InputLabel>E-mail</InputLabel>
            <Input 
            fullWidth="bool"
            value={form.email}
            type="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            required
            onChange={handleInputChange}></Input>
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
                onChange={handleInputChange}></Input>
          </InputConfig>
        </InputsDiv>
        <ButtonsDiv>
          <Button 
          fullWidth="bool" 
          size="medium" 
          variant="contained" 
          color="primary">Login</Button>

         
          <br></br>

          <Button 
          onClick={() => goToSignInPage(history)}
          fullWidth="bool" 
          size="medium" 
          variant="contained" 
          color="primary">Cadastre-se
          </Button>

        </ButtonsDiv>
        </form>

        <ImageLogin src={LoginImage} />

      </ThemeProvider>

    </Container>
  );
}

export default LoginPage;
