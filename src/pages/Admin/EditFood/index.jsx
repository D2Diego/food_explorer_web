
import { Container, FormSection, Label, Input, Select, TextArea } from './styles';


import { HeaderWraper } from '../../../components/HeaderWraper';

import { Button } from '../../../components/Button';
import { Footer } from '../../../components/Footer';

import { FaAngleLeft } from "react-icons/fa";

import { Link } from "react-router-dom"

import  TagInput  from '../../../components/TagInput'

export function EditFood() {
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

