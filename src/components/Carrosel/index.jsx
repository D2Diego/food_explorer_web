import { Container } from './styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { register } from 'swiper/element/bundle';
import { useState, useEffect } from 'react';

import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

import { Button } from '../Button'

import Gambe from '../../assets/Gambe.png';
import Parma from '../../assets/Parma.png';
import Molla from '../../assets/Molla.png';
import Ravanello from '../../assets/Ravanello.png';
import Prune from '../../assets/Prune.png'
import Pastry from '../../assets/Pastry.png'
import Macaron from '../../assets/Macaron.png'

import 'swiper/css';
import 'swiper/css/navigation';

import 'swiper/css/scrollbar';

register();

export function Carrosel({ buttonText, Icon }) {

  const [ slidePerView, setSlidePerView ] = useState(2)

  const data = [
    { id: '1', img: Gambe, alt: 'Imagem de comida' },
    { id: '2', img: Parma, alt: 'Imagem de comida' },
    { id: '3', img: Molla, alt: 'Imagem de comida' },
    { id: '4', img: Ravanello, alt: 'Imagem de comida' },
    { id: '5', img: Prune, alt:'imagem de comida'},
    { id: '6', img: Pastry, alt:'imagem de comida'},
    { id: '7', img: Macaron, alt:'imagem de comida'},
  ];



  useEffect(() => {
    function handleResize(){
      if(window.innerWidth < 620 ){
        setSlidePerView(2)
      } else if(window.innerWidth < 900){
        setSlidePerView(3)
      } else if (window.innerWidth < 1020) {
        setSlidePerView(4);
      } else if( window.innerWidth < 1440) {
        setSlidePerView(5);
      } 
    } 

    window.addEventListener("resize", handleResize)

    handleResize();
    
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  return (
    <Container>
      <Swiper slidesPerView={slidePerView} pagination={{ clickable: true }} navigation>
      {data.map((item) => (
        <SwiperSlide key={item.id}>
        <div key={item.id} className='body'>
      <Icon className='Like' />
          <img src={item.img} alt={item.alt} className='img-teste' />
          <h3>{item.alt}</h3>
          <i>R$ 49,97</i>
          <p>
            <FaMinus className='amount' /> <span className='amount'>01</span> <FaPlus className='amount'/>
          </p>
          {/* <Button text='Incluir' /> */}
          {buttonText && <Button text={buttonText} />}
        </div>
        </SwiperSlide>
      ))}
      </Swiper>

     
    </Container>
  );
}