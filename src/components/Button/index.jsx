import { Container } from './styles';


export function Button({ text, icon: Icon, className, ...rest }) {
  return (
    <Container className={className}>
      <button {...rest}>
        {Icon && <Icon />}
        {text}
      </button>
    </Container>
  );
}
