import { Container } from './styles';

import { useNavigate } from 'react-router-dom';

export function Button({ text, icon: Icon, to, className, ...rest }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    }
  };

  return (
    <Container className={className}>
      <button {...rest} onClick={handleClick}>
        {Icon && <Icon />}
        {text}
      </button>
    </Container>
  );
}
