import { Container } from './styles'

export function Tag({name,...rest}) {
  return (
    <Container>
    {name}
    </Container>
  )
}