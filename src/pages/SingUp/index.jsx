import { Container } from "./styles"

import { Link } from "react-router-dom"

import MyIcon from "../../assets/MyIcon.svg"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"


export function SingUp(){
    return(
        <Container>
            <h1 className="nameLogo">
                <img src={MyIcon} alt="Logo explorer food" />
                Food Explorer
            </h1>

            <form action="">
                
                <h1>Crie sua conta</h1>

                <label htmlFor="UserName">Seu nome</label>

                <Input
                placeholder="Exemplo: Maria da Silva"
                id="UserName"
                />

                <label htmlFor="UserEmail">Email</label>

                <Input
                placeholder="No mínimo 6 caracteres"
                id="UserEmail"
                />

                <label htmlFor="UserPassword">Senha</label>

                <Input
                placeholder="No mínimo 6 caracteres"
                id="UserPassword"
                />

                <Button className="button-criar" text="Criar conta"/>

                <Link to="/">Ja tenho uma conta</Link>

            </form>
        </Container>
    )
}