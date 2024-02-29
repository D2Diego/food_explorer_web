
import { Container, FormSection, Label, Input, Select, TextArea } from './styles';


import { HeaderWraper } from '../../../components/HeaderWraper';
import { Button } from '../../../components/Button';
import { Footer } from '../../../components/Footer';
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom"
import  TagInput  from '../../../components/TagInput'

import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { api } from "../../../services/api";
import { useAuth } from '../../../hooks/auth';

export function NewFood() {
    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('Refeição');
    const [ingredientes, setIngredientes] = useState([]);
    const [preco, setPreco] = useState('');
    const [descricao, setDescricao] = useState('');
    const { token, isAdmin } = useAuth(); 
    const navigate = useNavigate();



    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(!isAdmin){
            return alert('Apenas administradores podem adicionar pratos.')
        } try{
            await api.post('/products', { nome, categoria, ingredientes, preco, descricao }, { headers: { 'Authorization': `Bearer ${token}` } });
            alert('Prato criado com sucesso!')
            navigate('/')
        } catch (error){
            alert('Erro ao criar prato');
            console.error(error)
        }
    }

    return (
        <Container>
            <HeaderWraper buttonText='Novo Prato' IsAdmin spanText='Admin'/>

            <main>
                <Link to='/foodAdmin/id'><FaAngleLeft /> Voltar</Link>

                <FormSection>
                    
                        <h1>Adicionar prato</h1>

                   <div>
                        <div className="first_line">
                            
                           <div>
                            <h1 className='h1_fileLabel'>Imagem do prato</h1>
                            <Label htmlFor='food' className='label_file' >Selecione a imagem
                                <Input id='food' type="file" className='input_file'/>
                            </Label>
                           </div>

                            <Label>Nome
                                <Input type="text" placeholder="Ex: Salada Caesar" />
                            </Label>

                            <Label>Categoria
                                <Select>
                                    <option>Refeição</option>
                                </Select>
                            </Label>
                        </div>

                       <div className='second_line'>
                            <Label className='label-ingrediente'>Ingredientes
                                <div className="ingrediente_line">
                                <TagInput/>
                                </div>
                            </Label>

                            <Label>Preço
                                <Input type="text" placeholder="R$ 00,00" />
                            </Label>
                       </div>
                    </div>

                    <Label>Descrição
                            <TextArea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
                        </Label>

                    <div className='line_button'>
                        <Button to='/' text='Excluir prato' className="teste"/>
                        <Button to='/' text='Salvar alteração' className="teste"/>
                    </div>
                </FormSection>
            </main>

            <Footer className="Footer"/>
        </Container>
    );
}

