import Flavors from "../../assets/Flavors.png"
import FlavorsPlus from "../../assets/FlavorsPlus.png"

import { Container, Box} from './styles';

import { HeaderWraper } from '../../components/HeaderWraper'
import { Footer } from '../../components/Footer'

import { Carrosel } from '../../components/Carrosel'


export function HomeAdmin() {
  return (
    <Container>
        <HeaderWraper buttonText="Novo Prato" spanText="Admin" />
        <Box>
            <img src={Flavors} alt="Imagens de furtas caindo" className="flavors" />
            <img src={FlavorsPlus} alt="Imagens de furtas caindo" className="flavors-plus"/>
           <div className="textStart">
             <h2>Sabores inigualáveis</h2>
             <span>Sinta o cuidado do preparo com ingredientes selecionados.</span>
           </div>
        </Box>
          <span className="title">Refeições</span>
        <Carrosel/>
        <span className="title">Pratos Principais</span>
        <Carrosel/>
        <span className="title">Pratos Principais</span>
        <Carrosel/>
        <Footer/>
    </Container>
  );
};