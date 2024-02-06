import { Container } from './styles';


export function Button({ text, icon: Icon, ...rest }) {
  return (
    <Container>
      <button {...rest}>
        {Icon && <Icon />}
        {text}
      </button>
    </Container>
  );
}
