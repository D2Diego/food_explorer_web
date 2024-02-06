import { Container } from './styles';
import  MyIconGrey  from '../../assets/MyIconGrey.svg'


export function Footer() {
  return (
    <Container>
      <div className='Line'>
        <h1> <img src={ MyIconGrey } alt="Logo" /> Food Explorer</h1>
        <span>© 2023 - Todos os direitos reservados.</span>
      </div>
    </Container>
  );
}
