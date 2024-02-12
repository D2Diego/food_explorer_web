
import { Container, FormSection, Label, Input, Select, TextArea } from './styles';


import { HeaderWraper } from '../../../components/HeaderWraper';
import { Button } from '../../../components/Button';
import { Footer } from '../../../components/Footer';

import { FaAngleLeft } from "react-icons/fa";

export function NewFood() {
    return (
        <Container>
           
            <HeaderWraper buttonText='Novo Prato' IsAdmin spanText='Admin'/>

            <main>
                <a href="#"><FaAngleLeft /> Voltar</a>

                <FormSection>
                    
                        <h1>Adicionar prato</h1>

                   <div>
                        <div className="first_line">
                            <Label>Imagem do prato
                                <Input type="file" className='input_file'/>
                            </Label>

                            <Label>Nome
                                <Input type="text" placeholder="Ex: Salada Caesar" />
                            </Label>

                            <Label>Categoria
                                <Select>
                                    <option>Refeição</option>
                                    {/* Adicione mais opções de categoria aqui */}
                                </Select>
                            </Label>
                        </div>

                       <div className='second_line'>
                            <Label>Ingredientes
                                <div className="tags-input">
                                    <span className="tag"></span>
                                    <Input type="text" placeholder="Adicionar" />
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

                    <Button text='Salvar alteração' className="teste"/>
                </FormSection>
            </main>

            <Footer className="Footer"/>
        </Container>
    );
}

