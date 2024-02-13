import Flavors from "../../assets/Flavors.png"
import FlavorsPlus from "../../assets/FlavorsPlus.png"
import { RiBillLine } from "react-icons/ri";

import { Container, Box} from './styles';

import { HeaderWraper } from '../../components/HeaderWraper'
import { Footer } from '../../components/Footer'

import { Carrosel } from '../../components/Carrosel'

import { FaRegHeart } from "react-icons/fa";


export function Home() {
  return (
    <Container>
        <HeaderWraper  icon={RiBillLine} buttonText="incluir (0)"/>


        <Box>
            <img src={Flavors} alt="Imagens de furtas caindo" className="flavors" />
            <img src={FlavorsPlus} alt="Imagens de furtas caindo" className="flavors-plus"/>
           <div className="textStart">
             <h2>Sabores inigualáveis</h2>
             <span>Sinta o cuidado do preparo com ingredientes selecionados.</span>
           </div>
        </Box>
          <span className="title">Refeições</span>
        <Carrosel Icon={<FaRegHeart/>} buttonText='incluir' />
        <span className="title">Pratos Principais</span>
        <Carrosel Icon={<FaRegHeart/>} buttonText='incluir' />
        <span className="title">Pratos Principais</span>
        <Carrosel Icon={<FaRegHeart/>} buttonText='incluir' />

        <Footer/>
    </Container>
  );
};