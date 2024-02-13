
import { Container, FormSection, Label, Input, Select, TextArea } from './styles';


import { HeaderWraper } from '../../../components/HeaderWraper';
import { NoteItem } from '../../../components/NoteItem'
import { Button } from '../../../components/Button';
import { Footer } from '../../../components/Footer';

import { FaAngleLeft } from "react-icons/fa";

export function EditFood() {
    return (
        <Container>
           
            <HeaderWraper buttonText='Novo Prato' IsAdmin spanText='Admin'/>

            <main>
                <a href="#"><FaAngleLeft /> Voltar</a>

                <FormSection>
                    
                        <h1>Adicionar prato</h1>

                   <div>
                        <div className="first_line">
                            <Label htmlFor='food' >Imagem do prato
                                <Input id='food' type="file" className='input_file'/>
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
                            <Label className='label-ingrediente'>Ingredientes
                                <div className="ingrediente_line">
                                   <NoteItem value="pão"/>
                                   <NoteItem isNew placeholder="Novo igrediente"/>
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
                        <Button text='Excluir prato' className="teste"/>
                        <Button text='Salvar alteração' className="teste"/>
                    </div>
                </FormSection>
            </main>

            <Footer className="Footer"/>
        </Container>
    );
}
