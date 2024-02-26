import { useState } from "react"

import { Container } from "./styles"

import { Link, useNavigate } from "react-router-dom"

import { api } from "../../services/api"

import MyIcon from "../../assets/MyIcon.svg"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"



export function SingUp(){

    const[ name, setName ] = useState("");
    const[ email, setEmail ] = useState("");
    const[ password, setPassword ] = useState("");

    const navigate = useNavigate();


    async function handleSignUp(event){
    event.preventDefault();
        if(!name || !email || !password){
            return alert("Preencha todos os campos")
        }
    api.post("/users", {name, email, password})
    .then(() => {
        alert("Usuário cadastrado com sucesso!")
        navigate("/")
    })
    .catch( error => {
        if(error.response){
            alert(error.response.data.message)
        } else{
            alert("Não foi possível cadastrar")
        }
    })
    }

    return(
        <Container>
            <h1 className="nameLogo">
                <img src={MyIcon} alt="Logo explorer food" />
                Food Explorer
            </h1>

            <form onSubmit={handleSignUp}>
                
                <h1>Crie sua conta</h1>

                <label htmlFor="UserName">Seu nome</label>

                <Input
                placeholder="Exemplo: Maria da Silva"
                id="UserName"
                type="text"
                onChange={e => setName(e.target.value)}
                />

                <label htmlFor="UserEmail">Email</label>

                <Input
                placeholder="Exemplo@gmail.com"
                id="UserEmail"
                type="text"
                onChange={e => setEmail(e.target.value)}
                />

                <label htmlFor="UserPassword">Senha</label>

                <Input
                placeholder="No mínimo 6 caracteres"
                id="UserPassword"
                type="password"
                onChange={e => setPassword(e.target.value)}
                />

                <Button type="submit" className="button-criar" text="Criar conta" />

                <Link to="/">Ja tenho uma conta</Link>

            </form>
        </Container>
    )
}