import { Container } from "./styles"

import { Link } from "react-router-dom"

import MyIcon from "../../assets/MyIcon.svg"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"


export function SingIn(){
    return(
        <Container>
            <h1 className="nameLogo">
                <img src={MyIcon} alt="Logo explorer food" />
                Food Explorer
            </h1>

            <form action="">
                
                <h1>Faça login</h1>

                <label htmlFor="UserEmail">Email</label>

                <Input
                placeholder="Exemplo: exemplo@exemplo.com"
                id="UserEmail"
                />

                <label htmlFor="UserPassword">Senha</label>

                <Input
                placeholder="No mínimo 6 caracteres"
                id="UserPassword"
                />

                <Button text="Entrar"/>

                <Link to="/register"href="#">Criar uma conta</Link>

            </form>
        </Container>
    )
}