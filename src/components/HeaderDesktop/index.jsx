import { Container } from './styles';


import { RxExit } from 'react-icons/rx';
import { useAuth } from '../../hooks/auth' 


import MyIcon from '../../assets/MyIcon.svg';
import { Input } from '../Input';
import { Button } from '../Button';

export function HeaderDesktop({ icon: Icon, className, buttonText,spanText , IsAdmin, ...rest }) {

  const { signOut } = useAuth();


  return (
    <Container className={className} $IsAdmin={IsAdmin}>
      <div className='logo'>
  
        <img src={MyIcon} alt="Logo Food Explorer" className={`svg-logo ${IsAdmin ? 'admin' : ''}`} />
          
        <div className='text-teste'>
            <h1>food explorer <br /> {spanText && <span>{spanText}</span>}</h1>
        </div>
            
      </div>

      <Input placeholder="Busque por pratos ou ingredientes"/>
      <Button text={ buttonText } icon={Icon} />

      <button  className='buttonIcon' onClick={ signOut }>
        <RxExit/>
      </button>
    </Container>
  );
}
