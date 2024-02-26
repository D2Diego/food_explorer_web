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
          
        <div>
          
            <h1>food explorer</h1>
            {spanText && <span>{spanText}</span>}
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
