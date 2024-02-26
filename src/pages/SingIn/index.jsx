import { Container } from "./styles"

import { Link } from "react-router-dom"

import { useAuth } from "../../hooks/auth"

import MyIcon from "../../assets/MyIcon.svg"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { useState } from "react"


export function SingIn(){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { singIn } = useAuth();

    function handleSignIn(){
        event.preventDefault();
        singIn({ email, password })
    }

    return(
        <Container>
            <h1 className="nameLogo">
                <img src={MyIcon} alt="Logo explorer food" />
                Food Explorer
            </h1>

            <form onSubmit={handleSignIn}>
                
                <h1>Faça login</h1>

                <label htmlFor="UserEmail">Email</label>

                <Input
                type="text"
                placeholder="Exemplo: exemplo@exemplo.com"
                id="UserEmail"
                onChange={e => setEmail(e.target.value)}
                />

                <label htmlFor="UserPassword">Senha</label>

                <Input
                type="password"
                placeholder="No mínimo 6 caracteres"
                id="UserPassword"
                onChange={e => setPassword(e.target.value)}
                />

                <Button text="Entrar" type="submit" />

                <Link to="/register"href="#">Criar uma conta</Link>

            </form>
        </Container>
    )
}