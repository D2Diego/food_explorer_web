import { Container } from './styles';

import MenuLogo from "../../assets/MenuLogo.svg"
import MyIcon from "../../assets/MyIcon.svg"
import Receipt from "../../assets/Receipt.svg"


export function HeaderMobile({ icon: Icon, className, ...rest }) {
  return (
    <Container className={className}>

      <div className='line'>
        <img src={MenuLogo} alt="Logo para abrir menu" />

        <h1>
            <img src={MyIcon} alt="Logo food explorer" />
            food explorer
          </h1>

          <img src={Receipt} alt="Icone dos pedidos" />
      </div>
    </Container>
  );
};