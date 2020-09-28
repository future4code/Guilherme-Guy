import React, { useState, useEffect } from 'react'
import { goBack } from "../../Router/Router";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../Components/Url/Url";
import { useForm } from "../../Hooks/useForm"


const LoginPage = () => {
    const { form, onChange, resetState } = useForm({ senha: "", email: "" });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        onChange(name, value);
    };
    //  const [emailValue, setEmailValue] = useState("");
    //  const [passwordValue, setPasswordValue] = useState("");
    const history = useHistory();
    useEffect(() => {
        const token = window.localStorage.getItem("token");
        if (token) {
            history.push("/create");
        }
    }, [history]);
    const handleLogin = (event) => {
        event.preventDefault()
        resetState()
        const body = {
            email: form.email,
            password: form.senha
        };
        axios
            .post(`${BASE_URL}/login`, body)
            .then((response) => {
                console.log("caiu aki nesse loginPage???", response.data)
                localStorage.setItem("token", response.data.token);
                history.push("/");
            })
            .catch((err) => {
                console.log("hummmm caiu aki", err);
            });
    };
    return (
        <div>
            <form onSubmit={handleLogin}>
                <input
                    value={form.email}
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    required
                    onChange={handleInputChange}
                />
                <input
                    value={form.senha}
                    type="password"
                    name="senha"
                    placeholder="senha"
                    required
                    onChange={handleInputChange}
                />
                <button>Fazer Login</button>
            </form>
            <button onClick={() => goBack(history)}>Voltar</button>
        </div>
    );
}
export default LoginPage;


































// import React, {useState} from 'react'
// import { goBack } from "../../Router/Router";
// import { useHistory } from "react-router-dom";
// import axios from "axios";
// import {BASE_URL} from "../../Components/Url/Url"

// const LoginPage = () => {
//     const [emailValue, setEmailValue] = useState("");
//     const [passwordValue, setPasswordValue] = useState("");
//     const history = useHistory();
//     const handleEmailChange = (event) => {
//         setEmailValue(event.target.value);
//     };
//     const handlePasswordChange = (event) => {
//         setPasswordValue(event.target.value);
//     };
//     const handleLogin = () => {
//         const body = {
//             email: emailValue,
//             password: passwordValue
//         };
//         axios
//             .post(`${BASE_URL}/login`, body)
//             .then((response) => {
//                 localStorage.setItem("token", response.data.token);
//                 history.push("/details");
//                 setEmailValue(response.data.token)
//                 setPasswordValue(response.data.token)
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     };
//     return (
//         <div>
//             <h1>
//                 essa pagina é a login Page
//     </h1>
//             <div>
//                 <input type={"text"} value={emailValue} onChange={handleEmailChange} placeholder={"digite seu E-mail"}/>
//                 <input type={"password"} value={passwordValue} onChange={handlePasswordChange}placeholder={"digite sua senha"} />
//                 <button onClick={handleLogin}>Fazer Login</button>
//             </div>
//             <button onClick={() => goBack(history)}>Voltar</button>
//         </div>
//     );
// }
// export default LoginPage;