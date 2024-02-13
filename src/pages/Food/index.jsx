import { Container } from './styles';

import  Prato  from '../../assets/Prato.png'

import { HeaderWraper } from '../../components/HeaderWraper'
import { Footer } from '../../components/Footer'
import { Tag}  from '../../components/Tag'
import { Button } from '../../components/Button'

import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom"



export function Food() {
  return (
    <Container>
        <HeaderWraper className="teste"/>
          <Link to='/'><FaChevronLeft /> Voltar</Link>
          <div className='box-mobile'>
              <img src={ Prato } alt="Foto do Prato" className='img-food' />
              <div className='box-text'>
                <h1 className='name-food'>Salada Ravanello</h1>
                <p className='description'>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
                <div className='Tags'> 
                <Tag name="teste" /> <Tag name="teste" /> <Tag name="teste" /> <Tag name="teste" /> <Tag name="teste" /> <Tag name="teste" />
                </div>
                <div className='price'>
                <p> <FaMinus className='icon' /> <span>01</span> <FaPlus className='icon' /></p>
                <Button text='Incluir.R$ 25,00' />
                </div>
              </div>
          </div>
        <div className='footer'><Footer/></div>
    </Container>
  );
};