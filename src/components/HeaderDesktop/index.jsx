import { Container } from './styles';


import { RxExit } from 'react-icons/rx';


import MyIcon from '../../assets/MyIcon.svg';
import { Input } from '../Input';
import { Button } from '../Button';

export function HeaderDesktop({ icon: Icon, className, buttonText,spanText , ...rest }) {
  return (
    <Container className={className}>
      <div className='logo'>
        <img src={MyIcon} alt="Logo FoodExplorer" />
        <h1>food explorer</h1>
        {spanText && <span>{spanText}</span>}
      </div>
      <Input placeholder="Busque por pratos ou ingredientes"/>
      <Button text={ buttonText } icon={Icon} />

      <RxExit className='icon'/>
    </Container>
  );
}
