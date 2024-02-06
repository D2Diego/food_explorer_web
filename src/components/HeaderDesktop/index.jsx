import { Container } from './styles';


import { RxExit } from 'react-icons/rx';
import { RiBillLine } from "react-icons/ri";

import MyIcon from '../../assets/MyIcon.svg';
import { Input } from '../Input';
import { Button } from '../Button';

export function HeaderDesktop({ icon: Icon, className, ...rest }) {
  return (
    <Container className={className}>
      <div className='logo'>
        <img src={MyIcon} alt="Logo FoodExplorer" />
        <h1>food explorer</h1>
      </div>
      <Input placeholder="Busque por pratos ou ingredientes"/>
      <Button text="Pedidos" icon={RiBillLine} />

      <RxExit className='icon'/>
    </Container>
  );
}
